---
source: https://developers.google.com/workspace/admin/directory/v1/guides/manage-group-members
root: workspace
fetched_at: 2026-04-23T15:23:48.050Z
---

# Directory API: Group Members

## Add a member to a group

To add a member to a group, use the following `POST` request and include the authorization described in [Authorize requests](./authorizing.md). A group member can be a user or another group. The `groupKey` is the new member's group email address or the group's unique `id`. For the request and response properties, see the [API Reference](../../reference/rest/v1/members/insert.md):

```
POST https://admin.googleapis.com/admin/directory/v1/groups/groupKey/members
```

If you add a group as a member of another group, there may be a delay of up to 10 minutes before the child group's members appear as members of the parent group. In addition, the API returns an error for cycles in group memberships. For example, if group1 is a member of group2, group2 cannot be a member of group1.

### JSON request

The following JSON request shows a sample request body that creates a group member. The member's email address is liz@example.com and the member's role in the group is as a `MEMBER`. The `POST` request uses NNNNN for the `groupKey`:

```
POST https://admin.googleapis.com/admin/directory/v1/groups/NNNNN/members
```

```
{
   "email": "liz@example.com",
    "role": "MEMBER"
}
```

A group member's `role` can be:

- `OWNER` – This role can change send messages to the group, add or remove members, change member roles, change group's settings, and delete the group. An `OWNER` must be a member of the group.
- `MANAGER` – This role is only available if the Google Workspace is enabled using the Google Admin console. A MANAGER role can do everything done by an OWNER role except make a member an OWNER or delete the group. A group can have multiple OWNER and MANAGER members.
- `MEMBER` – This role can subscribe to a group, view discussion archives, and view the group's membership list. For more information about member roles, see the [administration help center](http://support.google.com/a/bin/answer.py?answer=167094).

### JSON response

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes) and the member's membership information. The `id` is the member's unique membership ID:

```
{
   "kind": "directory#member",
   "id": "group member's unique ID",
   "email": "liz@example.com",
   "role": "MEMBER",
   "type": "GROUP"
  }
```

A group member's `type` can be:

- `GROUP` – The member is another group.
- `MEMBER` – The member is a user

## Update a group membership

To update a group membership, use the following `PUT` request and include the authorization described in [Authorize requests](./authorizing.md). The `groupKey` is the group's email address or the group's unique `id`, and the `memberKey` is the user's or group's primary email address, a user's alias email address, or the user's unique `id`. For the request and response properties, see the [API Reference](../../reference/rest/v1/members/update.md):

```
PUT https://admin.googleapis.com/admin/directory/v1/groups/groupKey/members/memberKey
```

### JSON request

The following JSON request shows a sample request body that updates a group membership settings. The member's email address is liz@example.com and the member's role in the group is changed from a `MEMBER` to a `MANAGER`. The `PUT` request's `groupKey` in this example is NNNNN. For information about the MEMBER, OWNER and MANAGER roles, see the [administration help center](http://support.google.com/a/bin/answer.py?answer=167094):

```
PUT https://admin.googleapis.com/admin/directory/v1/groups/NNNNN/members/liz@example.com
```

```
{
   "email": "liz@example.com",
    "role": "MANAGER"
}
```

### JSON response

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes) and the updated membership information. The `id` is the member's unique membership ID:

```
{
   "kind": "directory#member",
   "id": "group member's unique ID",
   "email": "liz@example.com",
   "role": "MANAGER",
   "type": "GROUP"
  }
```

## Retrieve a group's member

To retrieve a group membership, use the following `GET` request and include the authorization described in [Authorize requests](./authorizing.md). The `groupKey` is the group's email address or the group's unique `id`, and the `memberKey` is the user's or group's primary email address, a user's alias email address, or the user's unique `id`. For the request and response properties, see the [API Reference](../../reference/rest/v1/members/get.md):

```
GET https://admin.googleapis.com/admin/directory/v1/groups/groupKey/members/memberKey
```

### JSON response

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes) and the member's membership information. The `id` is the member's unique membership ID:

```
{
   "kind": "directory#member",
   "id": "group member's unique ID",
   "email": "liz@example.com",
   "role": "MANAGER",
   "type": "GROUP"
  }
```

## Retrieve all group members

To retrieve all group members, use the following `GET` request and include the authorization described in [Authorize requests](./authorizing.md). The `groupKey` is the group's email address or the group's unique `id`. The optional `roles` query string is a filter allowing you to retrieve group members by role and the resulting role collections are in the order given in the `roles` filter. For the request and response properties, see the [API Reference](../../reference/rest/v1/members/list.md). For readability, this example uses line returns:

```
GET https://admin.googleapis.com/admin/directory/v1/groups/groupKey/members
?pageToken=pagination token
&roles=one or more of OWNER,MANAGER,MEMBER separated by a comma
&maxResults=maximum results per response page
```

All members are returned in the alphabetical order of the members' email addresses. And use the `pageToken` query string for responses with large number of members. In the case of pagination, the response returns the `nextPageToken` property which has a token for the next page of response results. Your next request uses this token as the `pageToken` query string value.

### JSON response

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes) and the list of member information. The `id` is the member's unique membership ID. There is a `nextPageToken` for the follow-on list of group members in this response:

```
{
   "kind": "directory#members",
   "members": [
   {
    "kind": "directory#member",
    "id": "group member's unique ID",
    "email": "liz@example.com",
    "role": "MANAGER",
    "type": "USER"
   },
   {
    "kind": "directory#member",
    "id": "group member's unique ID",
    "email": "radhe@example.com",
    "role": "MANAGER",
    "type": "USER"
   }
  ],
   "nextPageToken": "NNNNN"
}
```

## Delete membership in a group

To delete a member's membership in a group, use the following `DELETE` request and include the authorization described in [Authorize requests](./authorizing.md). The `groupKey` is the group's unique `id`, and `memberKey` is the deleted user or group member's primary email address or the user's unique `id`. For the request and response properties, see the [API Reference](../../reference/rest/v1/members/delete.md).:

```
DELETE https://admin.googleapis.com/admin/directory/v1/groups/groupKey/members/memberKey
```

For example, this `DELETE` request deletes the member whose `groupKey` is nnn and whose `memberKey` is the user's primary email address, liz@example.com:

```
DELETE https://admin.googleapis.com/admin/directory/v1/groups/nnnn/members/liz@example.com
```

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes).

When a member is deleted:

- Members you remove no longer receive email addressed to the group.
- Removing a member from a group does not delete the user's account.
- If you delete the group owner, the group still works normally. As an administrator, you can manage the group or assign ownership to another group member
