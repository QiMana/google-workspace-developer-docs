---
source: https://developers.google.com/workspace/admin/directory/v1/guides/manage-roles
root: workspace
fetched_at: 2026-04-23T15:23:48.879Z
---

# Manage roles

The Directory API lets you use [role-based access control (RBAC)](https://en.wikipedia.org/wiki/Role-based_access_control) to manage access to features in your Google Workspace domain. You can create custom *roles* with *privileges* to limit admin access more specifically than the pre-built roles provided with Google Workspace. You can assign roles to users or *security groups*. This guide explains how to perform some basic role-related tasks.

The following is a list of common terms used by the Directory API with regard to RBAC within Google Workspace:

*Privilege*

The permission necessary to perform a task or operation in a Google Workspace domain. Represented by the [`Privilege`](../../reference/rest/v1/privileges.md) resource. There is no persistent data associated with this resource.

*Role*

A collection of privileges that grants entities with that role the ability to perform certain tasks or operations. Represented by the [`Role`](../../reference/rest/v1/roles.md) resource.

*Role assignment*

The record of a particular role given to the user or group. Represented by the [`RoleAssignment`](../../reference/rest/v1/roleAssignments.md) resource.

*Security group*

A type of [Cloud Identity group](https://cloud.google.com/identity/docs/groups) that is used to control access to organizational resources. Security groups can contain both individual users and groups.

## Role and role assignment limits

You can only create a limited amount of custom roles or role assignments, so if you're getting close to the limit, consolidate or remove them to stay under the limit. Roles and role assignments have the following limits:

- You can create up to 750 custom roles for your entire organization.
- You can create up to 1000 role assignments per organizational unit (OU), where the root organization is considered a unit. For example, you can assign 600 roles in the root organization and 700 roles within another OU that you have defined, such as a department of a company. All of the Google Workspace pre-built administrator roles default to the organization-wide scope. Learn more about [limits on the privileges](https://support.google.com/a/answer/6129577) that can be assigned at the OU level.

Roles and role assignment have the following limits for groups:

- You can assign any role except Super Admin.
- You can have up to 250 role assignments to groups in total at the overall OU and within each OU.
- The group must be a security group in your organization.
- We recommend restricting group membership to users in your organization. You can add users from outside your organization, but they might not get the role privileges. For details, see [Restrict group membership](https://support.google.com/a/answer/11192679). ### Role assignment to groups

If you need to assign more than 1000 roles in an OU, you can add multiple members to a security group and assign a role to the group. Group role assignments have some additional limitations—see the [Admin help center](https://support.google.com/a/answer/9807615) for specific information.

## Google Admin console role-to-privilege mapping

To assign roles for users that access their privileges through the Admin console, certain extra privileges might need to be granted. For example, to grant a user the ability to create other users through the Admin console, not only is the `USERS_CREATE` privilege required but also the `USERS_UPDATE` and `ORGANIZATION_UNITS_RETRIEVE` privileges. The following table maps Admin console functionality to the required privilege grants for managing users and organizational units.

| Admin console functionality | Privileges needed |
| --- | --- |
| Organizational Units - Read | `ORGANIZATION_UNITS_RETRIEVE` |
| Organizational Units - Create | `ORGANIZATION_UNITS_RETRIEVE` + `ORGANIZATION_UNITS_CREATE` |
| Organizational Units - Update | `ORGANIZATION_UNITS_RETRIEVE` + `ORGANIZATION_UNITS_UPDATE` |
| Organizational Units - Delete | `ORGANIZATION_UNITS_RETRIEVE` + `ORGANIZATION_UNITS_DELETE` |
| Organizational Units | `ORGANIZATION_UNITS_ALL` |
| Users - Read | `USERS_RETRIEVE` + `ORGANIZATION_UNITS_RETRIEVE` |
| Users - Create | `USERS_CREATE` + `USERS_UPDATE` + `ORGANIZATION_UNITS_RETRIEVE` |
| Users - Update | `USERS_UPDATE` + `ORGANIZATION_UNITS_RETRIEVE` |
| Users - Move Users | `USERS_MOVE` + `USERS_RETRIEVE` + `ORGANIZATION_UNITS_RETRIEVE` |
| Users - Rename Users | `USERS_ALIAS` + `USERS_RETRIEVE` + `ORGANIZATION_UNITS_RETRIEVE` |
| Users - Reset Password | `USERS_RESET_PASSWORD` + `USERS_RETRIEVE` + `ORGANIZATION_UNITS_RETRIEVE` |
| Users - Force Password Change | `USERS_FORCE_PASSWORD_CHANGE` + `USERS_RETRIEVE` + `ORGANIZATION_UNITS_RETRIEVE` |
| Users - Add/Remove Aliases | `USERS_ADD_NICKNAME` + `USERS_RETRIEVE` + `ORGANIZATION_UNITS_RETRIEVE` |
| Users - Suspend Users | `USERS_SUSPEND` + `USERS_RETRIEVE` + `ORGANIZATION_UNITS_RETRIEVE` |
| GROUPS | `GROUPS_ALL` |
| Security - User Security Management | `USER_SECURITY_ALL` + `USERS_RETRIEVE` + `ORGANIZATION_UNITS_RETRIEVE` |

## Use case examples

### Before you begin

Before running the examples in this guide, set up [authentication and authorization](../../../../guides/auth-overview.md).

1. [Configure the OAuth consent screen](../../../../guides/configure-oauth-consent.md).
2. [Create Access Credentials](../../../../guides/create-credentials.md).

### Get a list of domain privileges

To get a paginated list of supported privileges in your domain, use the [`privileges.list()`](../../reference/rest/v1/privileges/list.md) method.

- If you're an administrator getting privileges in your own domain, use `my_customer` as the customer ID.
- If you're a reseller getting privileges for one of your customers, use the customer ID returned by the [Retrieve a user](./manage-users.md#get_user) operation.

#### Request

```
GET https://admin.googleapis.com/admin/directory/v1/customer/customer_id/roles/ALL/privileges
```

#### Response

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns the privileges supported in the domain:

```
{
  "kind": "admin\#directory\#privileges",
  "etag": ...,
  "items": [
    {
      "kind": "admin\#directory\#privilege",
      "etag": ...,
      "serviceId": "02afmg282jiquyg",
      "privilegeName": "APP_ADMIN",
      "isOuScopable": false
    },
    {
      "kind": "admin\#directory\#privilege",
      "etag": ...,
      "serviceId": "04f1mdlm0ki64aw",
      "privilegeName": "MANAGE_USER_SETTINGS",
      "isOuScopable": true,
      "childPrivileges": [
        {
          "kind": "admin\#directory\#privilege",
          "etag": ...,
          "serviceId": "04f1mdlm0ki64aw",
          "privilegeName": "MANAGE_APPLICATION_SETTINGS",
          "isOuScopable": true
        }
      ]
    },
    ...
  ]
}
```

### Get existing roles

To get a list of existing roles, use the following `GET` request and include the authorization described in [Authorize requests](./authorizing.md).

- If you're an administrator getting roles in your own domain, use `my_customer` as the customer ID.
- If you are reseller getting roles for a customer, use the customer ID that you got using the [Retrieve a user](./manage-users.md#get_user) operation.

#### Request

```
GET https://admin.googleapis.com/admin/directory/v1/customer/customer_id/roles
```

#### Response

A successful response returns an [HTTP `200` status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns the roles that exist in the domain:

```
{
  "kind": "admin\#directory\#roles",
  "etag": "\"sxH3n22L0-77khHtQ7tiK6I21Yo/DywA6_jaJCYw-f0lFs2-g17UWe8\"",
  "items": [
    {
      "kind": "admin\#directory\#role",
      "etag": ... ,
      "roleId": "3894208461012993",
      "roleName": "_SEED_ADMIN_ROLE",
      "roleDescription": "Google Workspace Administrator Seed Role",
      "rolePrivileges": [
        {
          "privilegeName": "SUPER_ADMIN",
          "serviceId": "01ci93xb3tmzyin"
        },
        {
          "privilegeName": "ROOT_APP_ADMIN",
          "serviceId": "00haapch16h1ysv"
        },
        {
          "privilegeName": "ADMIN_APIS_ALL",
          "serviceId": "00haapch16h1ysv"
        },
        ...
      ],
      "isSystemRole": true,
      "isSuperAdminRole": true
    },
    {
      "kind": "admin\#directory\#role",
      "etag": "\"sxH3n22L0-77khHtQ7tiK6I21Yo/bTXiZXfuK1NGr_f4paosCWXuHmw\"",
      "roleId": "3894208461012994",
      "roleName": "_GROUPS_ADMIN_ROLE",
      "roleDescription": "Groups Administrator",
      "rolePrivileges": [
        {
          "privilegeName": "CHANGE_USER_GROUP_MEMBERSHIP",
          "serviceId": "01ci93xb3tmzyin"
        },
        {
          "privilegeName": "USERS_RETRIEVE",
          "serviceId": "00haapch16h1ysv"
        },
        {
          "privilegeName": "GROUPS_ALL",
          "serviceId": "00haapch16h1ysv"
        },
        {
          "privilegeName": "ADMIN_DASHBOARD",
          "serviceId": "01ci93xb3tmzyin"
        },
        {
          "privilegeName": "ORGANIZATION_UNITS_RETRIEVE",
          "serviceId": "00haapch16h1ysv"
        }
      ],
      "isSystemRole": true
    },
    ...
  ]
}
```

### List all role assignments

To get a paginated list of all direct role assignments, use the [`roleAssignments.list()`](../../reference/rest/v1/roleAssignments/list.md) method. The API might return empty results with a page token when the `userKey` parameter is set. You should continue pagination until no page token is returned.

- If you're an administrator getting role assignments in your own domain, use `my_customer` as the customer ID.
- If you're a reseller getting role assignments for one of your customers, use the customer ID returned by the [Retrieve a user](./manage-users.md#get_user) operation.

#### Request

```
GET https://admin.googleapis.com/admin/directory/v1/customer/customer_id/roleassignments
```

#### Response

A successful response returns an [HTTP `200` status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns all roles assigned in the domain:

```
{
  "kind": "admin\#directory\#roleAssignment",
  "etag": "\"sxH3n22L0-77khHtQ7tiK6I21Yo/VdrrUEz7GyXqlr9I9JL0wGZn8yE\"",
  "roleAssignmentId:"3894208461013211",
  "assignedTo:"100662996240850794412",
  "assigneeType:"user",
  "scopeType:"CUSTOMER",
}
```

### List all indirect role assignments

To get a paginated list of all role assignments, including those indirectly assigned to a user because of the groups that they belong to, use the [`roleAssignments.list()`](../../reference/rest/v1/roleAssignments/list.md) method.

The API might return empty results with a page token. You should continue pagination until no page token is returned.

- If you're an administrator getting role assignments in your own domain, use `my_customer` as the customer ID.
- If you're a reseller getting role assignments for one of your customers, use the customer ID returned by the [Retrieve a user](./manage-users.md#get_user) operation.
- Replace `USER_KEY` with a value that identifies the user in the API request. For more information, see [`users.get`](https://developers.google.com/directory/reference/rest/v1/users/get).

#### Request

```
GET https://admin.googleapis.com/admin/directory/v1/customer/customer_id/roleassignments?userKey=USER_KEY&includeIndirectRoleAssignments=true
```

#### Response

A successful response returns an [HTTP `200` status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns all roles assigned in the domain and whether the `assigneeType` is `user` or `group`:

```
{
  "kind": "admin\#directory\#roleAssignment",
  "etag": "\"sxH3n22L0-77khHtQ7tiK6I21Yo/VdrrUEz7GyXqlr9I9JL0wGZn8yE\"",
  "roleAssignmentId:"3894208461013211",
  "assignedTo:"100662996240850794412",
  "assigneeType:"group",
  "scopeType:"CUSTOMER",
}
```

### Create a role

To create a new role, use the following `POST` request and include the authorization described in [Authorize requests](./authorizing.md). Add a `privilegeName` and `serviceId` for each privilege that should be granted with this role. For the request and response properties, see the [API Reference](../../reference/rest/v1/roles/insert.md).

#### Request

```
POST https://admin.googleapis.com/admin/directory/v1/customer/customer_id/roles

{
  "roleName": "My New Role",
  "rolePrivileges": [
    {
      "privilegeName": "USERS_ALL",
      "serviceId": "00haapch16h1ysv"
    },
    {
      "privilegeName": "GROUPS_ALL",
      "serviceId": "00haapch16h1ysv"
    }
  ]
}
```

#### Response

A successful response returns an [HTTP `200` status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns the properties for the new role:

```
{
  "kind": "admin\#directory\#role",
  "etag": "\"sxH3n22L0-77khHtQ7tiK6I21Yo/uX9tXw0qyijC9nUKgCs08wo8aEM\"",
  "roleId": "3894208461013031",
  "roleName": "My New Role",
  "rolePrivileges": [
    {
      "privilegeName": "GROUPS_ALL",
      "serviceId": "00haapch16h1ysv"
    },
    {
      "privilegeName": "USERS_ALL",
      "serviceId": "00haapch16h1ysv"
    }
  ]
}
```

### Create a role assignment

To assign a role, use the following `POST` method and include the authorization described in [Authorize requests](./authorizing.md).

- To assign the role to a user, add a JSON body with the `user_id` of the user, which you can get from [`users.get()`](../../reference/rest/v1/users/get.md), the `roleId` (as described in [Get existing roles](#get_existing_roles)), and the `scope_type`.
- To assign the role to a service account, add a JSON body with the `unique_id` of the service account (as defined in [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts)), the `roleId` (as described in [Get existing roles](#get_existing_roles)), and the `scope_type`.
- To assign the role to a group, add a JSON body with the `group_id` of the group, which you can get from [`groups.get()`](../../reference/rest/v1/groups/get.md), the `roleId` (as described in [Get existing roles](#get_existing_roles)), and the `scope_type`.

#### Request

```
POST https://admin.googleapis.com/admin/directory/v1/customer/customer_id/roleassignments

{
  "roleId": "3894208461012995",
  "assignedTo": "100662996240850794412",
  "scopeType": "CUSTOMER"
}
```

#### Response

A successful response returns an [HTTP `200` status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns the properties for the new role assignment:

```
{
  "kind": "admin\#directory\#roleAssignment",
  "etag": "\"sxH3n22L0-77khHtQ7tiK6I21Yo/VdrrUEz7GyXqlr9I9JL0wGZn8yE\"",
  "roleAssignmentId": "3894208461013211",
  "roleId": "3894208461012995",
  "assignedTo": "100662996240850794412",
  "scopeType": "CUSTOMER"
}
```

### Create a role assignment with conditions

You can grant roles to perform actions that meet specific conditions. Currently, only two conditions are supported:

- Only applicable to security groups
- Not applicable to security groups

When `condition` is set, it will only take effect when the resource being accessed meets the condition. If `condition` is empty, the role (`roleId`) is applied to the actor (`assignedTo`) at the scope (`scopeType`) unconditionally.

To assign a role to a user, use the following POST method and include the authorization described in [Authorize requests](./authorizing.md).

Add a JSON body with the **`user_id`** of the user, which you can get from [users.get()](../../reference/rest/v1/users/get.md), the `roleId` as described in [Get existing roles](#get_existing_roles), and the `condition`. The two condition strings have to be used verbatim as shown below and they only work with the Groups Editor and Groups Reader [pre-built administrator roles](https://support.google.com/a/answer/2405986). These conditions follow [Cloud IAM condition syntax](https://cloud.google.com/iam/docs/conditions-overview).

#### Request

##### Only applicable to security groups

```
POST https://admin.googleapis.com/admin/directory/v1.1beta1/customer/customer_id/roleassignments

{
  "roleId": "3894208461012995",
  "assignedTo": "100662996240850794412",
  "scopeType": "CUSTOMER",
  "condition": "api.getAttribute('cloudidentity.googleapis.com/groups.labels',
    []).hasAny(['groups.security']) && resource.type ==
    'cloudidentity.googleapis.com/Group'"
}
```

##### Not applicable to security groups

```
POST https://admin.googleapis.com/admin/directory/v1.1beta1/customer/customer_id/roleassignments

{
  "roleId": "3894208461012995",
  "assignedTo": "100662996240850794412",
  "scopeType": "CUSTOMER",
  "condition": "!api.getAttribute('cloudidentity.googleapis.com/groups.labels',
    []).hasAny(['groups.security']) && resource.type ==
    'cloudidentity.googleapis.com/Group'"
}
```

#### Response

A successful response returns an [HTTP `200` status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns the properties for the new role assignment:

```
{
  "kind": "admin\#directory\#roleAssignment",
  "etag": "\"sxH3n22L0-77khHtQ7tiK6I21Yo/VdrrUEz7GyXqlr9I9JL0wGZn8yE\"",
  "roleAssignmentId": "3894208461013211",
  "roleId": "3894208461012995",
  "assignedTo": "100662996240850794412",
  "scopeType": "CUSTOMER",
  "condition": "!api.getAttribute('cloudidentity.googleapis.com/groups.labels',
    []).hasAny(['groups.security']) && resource.type ==
    'cloudidentity.googleapis.com/Group'"
}
```
