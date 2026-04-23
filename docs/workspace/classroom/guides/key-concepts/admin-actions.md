---
source: https://developers.google.com/workspace/classroom/guides/key-concepts/admin-actions
root: workspace
fetched_at: 2026-04-23T15:25:45.307Z
---

# Administrator actions

Domain administrators have several controls to manage features and applications users in their domain can access. This page describes these features, how they might affect or be useful to an external integration, and relevant API requests.

## Manage access to third-party apps for users under 18

Administrators must [configure third-party applications](https://support.google.com/a/answer/13288950) in the Google Admin console for users under 18. If an administrator has not configured an application, users under 18 will be unable to access that application with their Google Workspace for Education account.

There is no action required from developers building applications for Google Workspace for Education users under 18. Configuring third-party apps can only be accomplished by administrators in the Admin console UI and can't be accomplished programmatically.

## Designate custom administrator roles for Classroom features

Administrators can [create custom administrator roles](https://support.google.com/a/answer/2406043) in the Admin console to allow certain individuals or groups with a [Google Workspace for Education Standard or Plus](https://support.google.com/a/answer/6309862?ref_topic=2769071) to:

- [View Classroom analytics](https://support.google.com/edu/classroom?p=el-classroom-analytics-help) to understand data such as assignment completion, grade trends, and Classroom adoption.
- [Temporarily access classes in Classroom](https://support.google.com/edu/classroom?p=class_visits) without assigning a permanent co-teacher.

This guide explains how to set up these features in your domain using Google APIs.

### Automate the custom role assignment process

This guide will inform you how to complete the following steps to automate the custom role assignment process:

1. Create security groups to organize users who can access these features.
2. Add members to the groups.
3. Create a custom administrator role by selecting the correct privilege.
4. Retrieve organizational unit IDs.
5. Apply the custom administrator role to the newly created groups.

### Prerequisites

1. Read the [Quickstart guides](../../../admin/directory/v1/quickstart/js.md) to understand how to set up and run an application using Google APIs in languages such as JavaScript, Python, and Java.
2. Before you use any of the Cloud Identity APIs described in this guide, you must [set up Cloud Identity](https://cloud.google.com/identity/docs/set-up-cloud-identity-admin). These APIs are used to create groups to assign administrator privileges.
3. Read the [Groups API Overview](https://cloud.google.com/identity/docs/groups) and [set up the Groups API](https://cloud.google.com/identity/docs/how-to/setup) if you would like to provide custom role access to a group of users instead of an individual user.

### Create security groups

Create a security group with the [`groups.create`](https://cloud.google.com/identity/docs/reference/rest/v1/groups/create) method. A group can be set as a security group when the security label is included in the `labels` field of the request. For more information and limitations on creating security groups, refer to the [creating security groups](https://cloud.google.com/identity/docs/how-to/update-group-to-security-group) guide.

```
POST https://cloudidentity.googleapis.com/v1/groups
```

Optionally, you can include the [`InitialGroupConfig`](https://cloud.google.com/identity/docs/reference/rest/v1/groups/create#initialgroupconfig) query parameter to initialize the group owner:

```
POST https://cloudidentity.googleapis.com/v1/groups&initialGroupConfig={initialGroupConfig}
```

The account making this request requires one of the following scopes:

- `https://www.googleapis.com/auth/cloud-identity.groups`
- `https://www.googleapis.com/auth/cloud-identity`
- `https://www.googleapis.com/auth/cloud-platform`

#### Request body

The request body contains details of the group to be created. The `customerId` must begin with "C" (for example, `C046psxkn`). [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).

```
{
   parent: "customers/<customer-id>",
   description: "This is the leadership group of school A.",
   displayName: "Leadership School A",
   groupKey: {
      id: "leadership_school_a@example.com"
   },
   labels: {
      "cloudidentity.googleapis.com/groups.security": "",
      "cloudidentity.googleapis.com/groups.discussion_forum": ""
   }
}
```

#### Response

The response contains a new instance of the [`Operation`](https://cloud.google.com/identity/docs/reference/rest/Shared.Types/Operation) resource.

```
{
   done: true,
   response: {
      @type: "type.googleapis.com/google.apps.cloudidentity.groups.v1.Group",
      name: "groups/<group-id>", // unique group ID
      groupKey: {
         id: "leadership_school_a@example.com" // group email address
      },
      parent: "customers/<customer-id>",
      displayName: "Leadership School A",
      description: "This is the leadership group of school A.",
      createTime: "<created time>",
      updateTime: "<updated time>",
      labels: {
         "cloudidentity.googleapis.com/groups.security": "",
         "cloudidentity.googleapis.com/groups.discussion_forum": ""
      }
   }
}
```

### Add group members

Once you've created the group, the next step is to add members. A group member can be a user or another security group. If you add a group as a member of another group, there might be a delay of up to 10 minutes for membership to propagate. In addition, the API returns an error for cycles in group memberships. For example, if `group1` is a member of `group2`, `group2` cannot be a member of `group1`.

To add a member to a group, use the following POST request to the Directory API [`members.insert`](../../../admin/directory/reference/rest/v1/members/insert.md) method:

```
POST https://admin.googleapis.com/admin/directory/v1/groups/{groupKey}/members
```

The [`groupKey`](https://cloud.google.com/identity/docs/reference/rest/v1/EntityKey) path parameter is the new member's group email address or the group's unique ID.

The account making the POST request requires one of the following scopes:

- `https://apps-apis.google.com/a/feeds/groups/`
- `https://www.googleapis.com/auth/admin.directory.group`
- `https://www.googleapis.com/auth/admin.directory.group.member`

#### Request body

The request body contains details of the [`member`](../../../admin/directory/reference/rest/v1/members.md#Member) to be created.

```
{
   email: "person_one@example.com",
   role: "MEMBER", // can be \`MEMBER\`, \`OWNER\`, \`MANAGER\`
}
```

#### Response

The response contains the new instance of the member.

```
{
   kind: "admin#directory#member",
   etag: "<etag-value>", // role's unique ETag
   id: "4567", // group member's unique ID
   email: "person_one@example.com",
   role: "MEMBER",
   type: "GROUP",
   status: "ACTIVE"
}
```

This request needs to be made for every user you would like to add as a member. You can [batch](../../../admin/directory/v1/guides/batch.md) these requests to reduce the number of HTTP connections your client has to make.

### Create a privileged custom administrator role

The Directory API lets you use role-based access control (RBAC) to manage access to features in your Google Workspace domain. You can create custom roles with privileges to limit administrator access more specifically than the prebuilt roles provided with Google Workspace. You can assign roles to users or security groups. For more detailed information on the limitations of role creation, refer to the [custom role and role assignment limitations](../../../admin/directory/v1/guides/manage-roles.md#role_and_role_assignment_limits).

To create a new role, use the following POST request to the Directory API [`roles.insert`](../../../admin/directory/reference/rest/v1/roles/insert.md) method:

```
POST https://admin.googleapis.com/admin/directory/v1/customer/{customer}/roles
```

The `customerId` is the same as the one used in [step 1](#create-security-groups) of this guide.

The account making the POST request requires the following scope:

- `https://www.googleapis.com/auth/admin.directory.rolemanagement`

#### Request body

The request body contains details of the [`role`](../../../admin/directory/reference/rest/v1/roles.md#Role) to be created. Add a `privilegeName` and `serviceId` for each privilege that should be granted with this role.

### Classroom analytics

The `EDU_ANALYTICS_DATA_ACCESS` privilege is required in order to create a custom role that can access analytics data, along with the `serviceId` set to `019c6y1840fzfkt`.

```
{
  roleName: "Education Admin", // customize as needed
  roleDescription: "Access to view analytics data", // customize as needed
  rolePrivileges: [
     {
        privilegeName: "EDU_ANALYTICS_DATA_ACCESS",
        serviceId: "019c6y1840fzfkt"
     }
  ]
}
```

### Temporary class access

The `ADMIN_OVERSIGHT_MANAGE_CLASSES` privilege is required in order to create a custom role that can temporarily access classes, along with the `serviceId` set to `019c6y1840fzfkt`.

```
{
  roleName: "Education Admin", // customize as needed
  roleDescription: "Access to manage classes privilege", // customize as needed
  rolePrivileges: [
     {
        privilegeName: "ADMIN_OVERSIGHT_MANAGE_CLASSES",
        serviceId: "019c6y1840fzfkt"
     }
  ]
}
```

Call the [`privileges.list`](../../../admin/directory/reference/rest/v1/privileges/list.md) method to retrieve a list of `privilegeIds` and `serviceIds`.

#### Response

The response contains the new instance of the role.

### Classroom analytics

```
{
  kind: "admin#directory#role",
  etag: "<etag-value>",  // role's unique ETag
  roleId: "<role-id>",   // role's unique ID
  roleName: "Education Admin",
  roleDescription: "Access to view analytics data",
  rolePrivileges: [
     {
        privilegeName: "EDU_ANALYTICS_DATA_ACCESS",
        serviceId: "019c6y1840fzfkt"
     }
  ],
  isSystemRole: false,
  isSuperAdminRole: false
}
```

### Temporary class access

```
{
  kind: "admin#directory#role",
  etag: "<etag-value>",  // role's unique ETag
  roleId: "<role-id>",   // role's unique ID
  roleName: "Education Admin",
  roleDescription: "Access to manage classes privilege",
  rolePrivileges: [
     {
        privilegeName: "ADMIN_OVERSIGHT_MANAGE_CLASSES",
        serviceId: "019c6y1840fzfkt"
     }
  ],
  isSystemRole: false,
  isSuperAdminRole: false
}
```

### Retrieve organizational unit IDs

You can limit the access of the custom administrator role to one or more organizational units using the organizational unit ID. Use the [OrgUnit API](../../../admin/directory/reference/rest/v1/orgunits.md) to retrieve the `orgUnitId`.

### Classroom analytics

It's recommended that you select a student organizational unit *and* teacher organizational unit when assigning the custom administrator role to a specific user or group. Doing so allows users designated with the custom administrator privilege access to student and class-level data for the organizational units. If the student organizational unit is omitted, designated users won't have access to student data. If the teacher organizational unit is omitted, designated users won't have access to class-level data.

### Temporary class access

You can limit temporary class access privileges by allowing users with the custom administrator role access to classes in specific organizational units. If restricting access to an organizational unit, the group assigned the custom administrator role can only access classes where the primary teacher of the class is in that organizational unit.

### Assign the custom administrator role

To assign the custom administrator role to a group, use the following POST request. Refer to the [custom role and role assignment limitations](../../../admin/directory/v1/guides/manage-roles.md#role_and_role_assignment_limits) guidance for role assignment limits.

Directory API [`roleAssignments.insert`](../../../admin/directory/reference/rest/v1/roleAssignments/insert.md):

```
POST https://admin.googleapis.com/admin/directory/v1/customer/{customer}/roleassignments
```

#### Assign to a group or individual user

If assigning the privilege to a group, include the `groupId` in the `assignedTo` field in the request body. The `groupId` was obtained in the [Create security groups](#create-security-groups) step. If assigning the privilege to an individual user, include the user's ID in the `assignedTo` field in the request body. The user's ID can be retrieved by calling [`users.get`](../../../admin/directory/reference/rest/v1/users/get.md) and specifying the user's email address as the `userKey` parameter or by calling [`users.list`](../../../admin/directory/reference/rest/v1/users/list.md).

The account making the POST request requires the following scope:

- `https://www.googleapis.com/auth/admin.directory.rolemanagement`

#### Request body

The request body contains details of the [`RoleAssignment`](../../../admin/directory/reference/rest/v1/roleAssignments.md#RoleAssignment) to be created. You must make one request per organizational unit that you would like to associate with this group.

```
{
   roleId: "<role-id>",        // role's unique ID obtained from Step 3
   assignedTo: "<id>",         // group ID or user ID
   scopeType: "ORG_UNIT",      // can be \`ORG_UNIT\` or \`CUSTOMER\`
   orgUnitId: "<org-unit-id>"  // organizational unit ID referenced in Step 4
}
```

#### Response

The response contains the new instance of the [`RoleAssignment`](../../../admin/directory/reference/rest/v1/roleAssignments.md#RoleAssignment).

```
{
   kind: "admin#directory#roleAssignment",
   etag: "<etag-value>",
   roleAssignmentId: "<role-assignment-id>",
   roleId: "<role-id>",
   assignedTo: "<group-id or user-id>",
   assigneeType: "GROUP",
   scopeType: "ORG_UNIT",
   orgUnitId: "<org-unit-id>"
}
```

### Resources

Additional information can be found at:

- [Directory API Overview](../../../admin/directory/v1/guides.md)
- [Directory API-specific authentication & authorization](../../../admin/directory/v1/guides/authorizing.md)
- [Directory API REST documentation](../../../admin/directory/reference/rest.md)
- [Admin SDK API Developer Support](../../../admin/support.md)
