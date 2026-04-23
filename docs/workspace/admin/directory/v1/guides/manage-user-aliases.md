---
source: https://developers.google.com/workspace/admin/directory/v1/guides/manage-user-aliases
root: workspace
fetched_at: 2026-04-23T15:23:49.118Z
---

# Directory API: User Aliases

## Create a user alias

A user's alias is an alternate email address that uses the same mailbox used by the user's primary email address. A user alias can be associated with a different account domain than that domain used by the user's primary email address. Within 24 hours (often sooner), the user begins receiving email sent to this address. The API requires that the [domain's ownership is confirmed](https://support.google.com/a/bin/answer.py?lev=index&cbid=sm2s8vsdlrxw&answer=60216&src=cb) before you can create the user alias. Aliases are not supported for guest users.

To create a user alias, use the following `POST` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `userKey` can be the user's primary email address, the user `id`, or any of the user aliases' emails. For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/reference/rest/v1/users.aliases/insert):

```
POST https://admin.googleapis.com/admin/directory/v1/users/userKey/aliases
```

### JSON request

The following JSON request shows a sample request to create a user's alias. The user is liz@example.com and the alias is chica@example.com:

```
POST https://admin.googleapis.com/admin/directory/v1/users/liz@example.com/aliases
```

The request body has the new alias information:

```
{  
 "alias": "chica@example.com"
}
```

A successful response returns an [HTTP 201 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns the properties for the new user alias.

## Retrieve all of a user's aliases

To retrieve all of a user's aliases across all domains, use the following `GET` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `userKey` can be the user's primary email address, the user `id`, or any of the user aliases' emails. For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/reference/rest/v1/users.aliases/list):

```
GET https://admin.googleapis.com/admin/directory/v1/users/userKey/aliases
```

For example, this request URI returns all aliases for the userKey, liz@example.com:

```
GET https://admin.googleapis.com/admin/directory/v1/users/liz@example.com/aliases
```

All user aliases are returned in alphabetical order. There is no page size such as the `maxResults` query string or pagination used for the 'Retrieve all aliases' response.

### JSON response

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns the user's aliases in alphabetical order. These alias domains are the primary domain and other multiple domains in the account:

```
{
"kind": "directory#user#aliases",
"aliases": [
 {
  "kind": "directory#user#alias",
  "id": "the unique user id",
  "primary_email": "liz@example.com",
  "alias": "chica@example.com"
 },
 {
  "kind": "directory#user#alias",
  "id": "the unique user id",
  "primary_email": "liz@example.com",
  "alias": "support@example.com"
 },
 {
  "kind": "directory#user#alias",
  "id": "the unique user id",
  "primary_email": "liz@example.com",
  "alias": "help@hr.example.com"
 },
 {
  "kind": "directory#user#alias",
  "id": "the unique user id",
  "primary_email": "liz@example.com",
  "alias": "tickets@jumboinc.com"
 }
]
}
```

## Delete a user's alias

To delete a user alias, use the following `DELETE` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). It can take up to 24 hours for the alias to be removed. The `userKey` can be the user's primary email address, the user `id`, or any of the user aliases' emails. And the `aliasId` is the alias' email address that is being deleted. For the request and response properties, see the [API reference](https://developers.google.com/workspace/admin/directory/reference/rest/v1/users.aliases/delete).

```
DELETE https://admin.googleapis.com/admin/directory/v1/users/userKey/aliases/aliasId
```

For example, this `DELETE` request deletes the chica@example.com alias for the userKey, liz@example.com:

```
DELETE https://admin.googleapis.com/admin/directory/v1/users/liz@example.com/aliases/chica@example.com
```

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes).
