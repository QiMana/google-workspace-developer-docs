---
source: https://developers.google.com/workspace/admin/directory/v1/guides/manage-groups
root: workspace
fetched_at: 2026-04-23T15:23:48.207Z
---

# Manage groups

This page describes how to manage Google Groups with the Directory API:

- Create a group
- Update a group
- Add a group alias
- Retrieve a group
- Retrieve all groups for a domain or the account
- Retrieve all groups for a member
- Retrieve all group aliases
- Delete a group alias
- Delete a group

## Create a group

To create a group, use the following `POST` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). You can create a group for any domain associated with the account. For the query strings, request, and response properties, see the [`groups.insert` method](https://developers.google.com/workspace/admin/directory/v1/reference/groups/insert).

```
POST https://admin.googleapis.com/admin/directory/v1/groups
```

The following JSON request shows a sample request body that creates a group. The group's email address is sales\_group@example.com:

```
{
   "email": "sales_group@example.com",
   "name": "Sales Group",
   "description": "This is the Sales group."
}
```

A successful response returns an [HTTP `201` status code](https://wikipedia.org/wiki/List_of_HTTP_status_codes) and the properties for the new group.

## Update a group

To update a group's settings, use the following `PUT` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `groupKey` is the group's email address, any of the group alias's email address, or the group's unique `id`. For the query strings, request, and response properties, see the [`groups.update` method](https://developers.google.com/workspace/admin/directory/v1/reference/groups/update).

```
PUT https://admin.googleapis.com/admin/directory/v1/groups/groupKey
```

In general, we recommend not using the group's email address as a key for persistent data, because the email address is subject to change.

In general, we recommend not using the group's email address as a key for persistent data, because the email address is subject to change.

In the following example, the unique `groupKey` is `nnn` and the group's name is APAC Sales Group:

```
PUT https://admin.googleapis.com/admin/directory/v1/groups/nnn
```

```
{
    "email": "sales_group@example.com",
    "name": "APAC Sales Group"
}
```

For an update request, you only need to submit the updated information in your request. You don't need to enter all of the group's properties in the request.

A successful response returns an [HTTP `201` status code](https://wikipedia.org/wiki/List_of_HTTP_status_codes) and the properties for the new group:

```
{
    "kind": "directory#groups",
    "id": "group's unique ID",
    "etag": "group's unique ETag",
    "email": "sales_group@example.com",
    "name": "APAC Sales Group",
    "directMembersCount": "5",
    "description": "This is the APAC sales group.",
    "adminCreated": true,
    "aliases": [
     {
        "alias": "best_sales_group@example.com"
     }
    ],
    "nonEditableAliases": [
     {
        "alias": "liz@test.com"
     }
    ]
}
```

## Add a group alias

To add a group alias, use the following `POST` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `groupKey` is the group's email address, any of the group alias' email address, or the group's unique `id`. For the query strings, request, and response properties, see the [`groups` resource](https://developers.google.com/workspace/admin/directory/v1/reference/groups).

```
POST https://admin.googleapis.com/admin/directory/v1/groups/groupKey/aliases
```

In general, Google recommends not using the group's email address as a key for persistent data because the email address is subject to change.

The following JSON request shows a sample request to create a group's alias. The `groupKey` is group's unique `id` represented by `NNNN`

```
POST https://admin.googleapis.com/admin/directory/v1/groups/NNNN/aliases
```

```
{
    "alias": "best_sales_group@example.com"
}
```

A successful response returns an [HTTP `201` status code](https://wikipedia.org/wiki/List_of_HTTP_status_codes) and the properties for the new group alias.

## Retrieve a group

To retrieve a group, use the following `GET` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `groupKey` is the group's email address, any of the group alias' email address, or the group's unique `id`. For the query strings, request, and response properties, see the [`groups.get` method](https://developers.google.com/workspace/admin/directory/v1/reference/groups/get).

```
GET https://admin.googleapis.com/admin/directory/v1/groups/groupKey
```

In general, Google recommends not using the group's email address as a key for persistent data because the email address is subject to change.

In the following example, the unique `groupKey` ID is `nnnn`:

```
GET https://admin.googleapis.com/admin/directory/v1/groups/nnnn
```

A successful response returns an [HTTP `200` status code](https://wikipedia.org/wiki/List_of_HTTP_status_codes) and the group's settings:

```
{
    "kind": "directory#groups",
    "id": "group's unique ID",
    "etag": "group's unique ETag",
    "email": "sales_group@example.com",
    "name": "APAC Sales Group",
    "directMembersCount": "5",
    "description": "This is the APAC sales group.",
    "adminCreated": true,
    "aliases": [
     {
        "alias": "best_sales_group@example.com"
     }
    ],
    "nonEditableAliases": [
     {
        "alias": "liz@test.com"
     }
    ]
}
```

## Retrieve all groups for a domain or the account

To retrieve all groups for a specific domain or the account, use the following `GET` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). For the query strings, request, and response properties, see the [`groups.list` method](https://developers.google.com/workspace/admin/directory/v1/reference/groups/list). For readability, this example uses line returns:

```
GET https://admin.googleapis.com/admin/directory/v1/groups?domain=domain name
&customer=my_customer or customerId&pageToken=pagination token
&maxResults=max results
```

When retrieving all groups for a domain or the account, consider the following:

- All groups for a sub-domain: Use the `domain` argument with the domain's name.
- All groups for the account: Use the `customer` argument with either `my_customer` or the account's `customerId` value. As an account administrator, use the string `my_customer` to represent your account's `customerId`. If you're a reseller accessing a resold customer's account, use the resold account's `customerId`. For the `customerId` value, use the account's primary domain name in the [Retrieve all users in a domain](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_all_domain_users) operation's request. The resulting response has the `customerId` value.
- Using both the `domain` and `customer` arguments: The Directory API returns all the groups for the `domain`.
- Not using the `domain` and `customer` arguments: The Directory API returns all the groups for the account associated with `my_customer`. This is the account `customerId` of the administrator making the request.
- Using both the `customer` and `userKey` arguments: The Directory API returns an error. You must make two separate requests with these arguments.

In the following example, an account administrator uses `my_customer` to request a list of all of an account's groups:

```
GET https://admin.googleapis.com/admin/directory/v1/groups?domain=sales.com&customer=my_customer&maxResults=2
```

In the following example, a reseller administrator's request returns all groups for the resold account with the `customerId C03az79cb`. The maximum results returned per response page is 2. There is a `nextPageToken` for the follow-on list of users in this response:

```
GET https://admin.googleapis.com/admin/directory/v1/groups?domain=sales.com&customer=C03az79cb&maxResults=2
```

A successful response returns an [HTTP `200` status code](https://wikipedia.org/wiki/List_of_HTTP_status_codes) and the groups in the alphabetical order of the group email:

```
{
"kind": "directory#groups",
    "groups": [
     {
      "kind": "directory#groups",
      "id": "group's unique ID",
      "etag": "group's unique ETag",
      "email": "support@sales.com",
      "name": "Sales support",
      "directMembersCount": "6",
      "description": "The sales support group",
      "adminCreated": true
     },
     {
      "kind": "directory#groups",
      "id": "group's unique ID",
      "etag": "group's unique ETag",
      "email": "travel@sales.com",
      "name": "Sales travel",
      "directMembersCount": "2",
      "description": "The travel group supporting sales",
      "adminCreated": false,
      "aliases": [
       {
         "alias": "best_sales_group@example.com"
       }
      ],
      "nonEditableAliases": [
       {
         "alias": "liz@test.com"
       }
      ]
     },
  "nextPageToken": "NNNN"
  }
```

## Retrieve all groups for a member

To retrieve all groups for which a member has a subscription, use the following `GET` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). For readability, this example uses line returns:

```
GET https://admin.googleapis.com/admin/directory/v1/groups?userKey=user key
&pageToken=pagination token
&maxResults=maximum results per response page
```

- A member can either be a user or a group.
- The `userKey` can be the user's primary email address, the user's alias email address, a group's primary email address, a group's email alias, or the user's unique `id` which can be found using the [Retrieve a user operation](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user).
- The user or group specified in the `userKey` must belong to your domain.
- Use the `pageToken` query string for responses with large number of groups. In the case of pagination, the response returns the `nextPageToken` property which gives a token for the next page of response results. Your next request uses this token as the `pageToken` query string value.
- Using both the `customer` and `userKey` arguments: The Directory API returns an error. You must make two separate requests with these arguments.

For the request and response properties, see the [`groups.list` method](https://developers.google.com/workspace/admin/directory/v1/reference/groups/list).

A successful response returns an [HTTP 200 status code](https://wikipedia.org/wiki/List_of_HTTP_status_codes) and the list of member information:

- All groups for which a member has a subscription, including groups from outside of the user's domain, are returned.
- The groups are returned in the alphabetical order of each group's email address.
- In the body of the response, the `id` is the group's unique ID.
- In the response, the listing of a group from outside of the user's domain doesn't include the outside group's aliases.

```
{
    "kind": "directory#groups",
    "groups": [
     {
      "kind": "directory#group",
      "id": "group's unique ID",
      "etag": "group's unique ETag",
      "email": "sales_group@example.com",
      "name": "sale group",
      "directMembersCount": "5",
      "description": "Sales group"
     },
     {
      "kind": "directory#group",
      "id": "group's unique ID",
      "etag": "group's unique ETag",
      "email": "support_group.com",
      "name": "support group",
      "directMembersCount": "5",
      "description": "Support group"
     }
  ],
   "nextPageToken": "NNNNN"
}
```

## Retrieve all group aliases

To retrieve all of a group's aliases, use the following `GET` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `groupKey` can be the group's primary email address, the group's unique `id`, or any of the group aliases' emails. For the request and response properties, see the [`groups` resource](https://developers.google.com/workspace/admin/directory/v1/reference/groups).

```
GET https://admin.googleapis.com/admin/directory/v1/groups/groupKey/aliases
```

A successful response returns an [HTTP `201` status code](https://wikipedia.org/wiki/List_of_HTTP_status_codes) and a list of the group's aliases.

## Delete a group alias

To delete a group's alias, use the following `DELETE` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `groupKey` can be the group's primary email address, the group's unique `id`, or any of the group aliases' emails. The `aliasId` is the alias being deleted. For the request and response properties, see the [`groups` resource](https://developers.google.com/workspace/admin/directory/v1/reference/groups):

```
DELETE https://admin.googleapis.com/admin/directory/v1/groups/groupKey/aliases/aliasId
```

A successful response returns an [HTTP `201` status code](https://wikipedia.org/wiki/List_of_HTTP_status_codes).

## Delete a group

To delete a group, use the following `DELETE` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `groupKey` is the group's unique `id`:

```
DELETE https://admin.googleapis.com/admin/directory/v1/groups/groupKey
```

For example, this `DELETE` request deletes the group which has the `nnnn` group `id`:

```
DELETE https://admin.googleapis.com/admin/directory/v1/group/nnnn
```

A successful response returns an [HTTP `200` status code](https://wikipedia.org/wiki/List_of_HTTP_status_codes).

When a group is deleted, the following happens:

- All members of the group are deleted. The member's user accounts are not deleted.
- The group archive is deleted.
- Messages sent to the deleted group's address are not delivered. Instead, the sender receives a bounce message.
