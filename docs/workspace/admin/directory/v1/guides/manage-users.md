---
source: https://developers.google.com/workspace/admin/directory/v1/guides/manage-users
root: workspace
fetched_at: 2026-04-23T15:23:50.483Z
---

# Manage user accounts

The Directory API provides programmatic methods for creating, updating, and deleting users. You can also get information about individual users or lists of users who meet specified criteria. Following are examples of some basic user operations.

## Create a user account

You can add a user account to any of your Google Workspace account's domains. Before adding a user account, confirm the [domain ownership](https://support.google.com/a/topic/9196).

If you upgraded your personal Gmail account to a business email account with your own domain name, you can't create new user accounts until you unlock additional Google Workspace settings. For details, see [Google Workspace business email accounts updated](https://support.google.com/a/answer/10018989).

To create a user account using one of your domains, use the following `POST` request and include the authorization described in [Learn about authentication and authorization](https://developers.google.com/workspace/guides/auth-overview). You can view the available scopes for the Directory API in the [OAuth 2.0 scopes list](https://developers.google.com/identity/protocols/oauth2/scopes#admin-directory). For the request query string properties, see the [`users.insert`](https://developers.google.com/workspace/admin/directory/reference/rest/v1/users/insert) method.

```
POST https://admin.googleapis.com/admin/directory/v1/users
```

All create requests require you to submit the information needed to fulfill the request. If you use client libraries, they convert the data objects from your chosen language into JSON formatted objects.

### JSON request

The following JSON shows a sample request to create a user. For the full list of request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/users).

```
{
"primaryEmail": "liz@example.com",
"name": {
 "givenName": "Elizabeth",
 "familyName": "Smith"
},
"suspended": false,
"password": "NEW_USER_PASSWORD",
"hashFunction": "SHA-1",
"changePasswordAtNextLogin": false,
"ipWhitelisted": false,
"ims": [
 {
  "type": "work",
  "protocol": "gtalk",
  "im": "liz_im@talk.example.com",
  "primary": true
 }
],
"emails": [
 {
  "address": "liz@example.com",
  "type": "home",
  "customType": "",
  "primary": true
 }
],
"addresses": [
 {
  "type": "work",
  "customType": "",
  "streetAddress": "1600 Amphitheatre Parkway",
  "locality": "Mountain View",
  "region": "CA",
  "postalCode": "94043"
 }
],
"externalIds": [
 {
  "value": "12345",
  "type": "custom",
  "customType": "employee"
 }
],
"organizations": [
 {
  "name": "Google Inc.",
  "title": "SWE",
  "primary": true,
  "type": "work",
  "description": "Software engineer"
 }
],
"phones": [
 {
  "value": "+1 nnn nnn nnnn",
  "type": "work"
 }
],
"orgUnitPath": "/corp/engineering",
"includeInGlobalAddressList": true
}
```

If your query rate for creation requests is too high, you might receive HTTP `503` responses from the API server indicating that your quota has been exceeded. If you get these responses, use an [exponential back-off algorithm](https://developers.google.com/workspace/admin/directory/v1/limits) to retry your requests.

When you create a new account, note the following:

- If the Google Account has purchased mail licenses, the new user account is automatically assigned a mailbox. This assignment may take a few minutes to be completed and activated.
- Editing a read-only field in a request, such as `isAdmin`, is silently ignored by the API service.
- The maximum number of domains allowed in an account is 600 (1 primary domain + 599 additional domains).
- If a user was not assigned to a specific organizational unit when the user account was created, the account is in the top-level organizational unit. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/182433). For more information about moving a user to a different organization, see [Update a user](#update_user).
- A `password` is required for new user accounts. If a `hashFunction` is specified, the password must be a valid hash key. If it's not specified, the password should be in clear text and between 8–100 ASCII characters. For more information, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/users).
- For users on a flexible plan for Google Workspace, creating users using this API will have monetary impact and result in charges to your customer billing account. For more information, see the [API billing information](https://developers.google.com/workspace/admin/directory/v1/limits#billing).
- A Google Workspace account can include any of your domains. In a multiple domain account, users in one domain can share services with users in other account domains. For more information about users in multiple domains, see the [API multiple domain information](https://developers.google.com/workspace/admin/directory/v1/limits#multi_domains).
- There might be conflicting accounts. Check to see if anyone you plan to add already has a Google Account. Then follow steps to avoid conflicts with those accounts. See [Find and resolve conflicting accounts](https://support.google.com/a/answer/7062710).
- There might be visitor accounts. If users invite people outside your organization who don't have Google Accounts to collaborate on Drive, they'll receive visitor accounts, in the format `visitor's_username@your_domain.com`. If you add a user with the same username as a visitor account, the account is converted to a full Google Workspace account. The account keeps its current Drive file permissions. See [Share documents with visitors](https://support.google.com/drive/answer/9195194).

A successful response returns an HTTP 200 status code. Along with the status code, the response returns the properties for the new user account.

## Update a user account

To update a user account, use the following `PUT` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `userKey` can be the user's primary email address, the unique user `id`, or one of the user's alias email addresses.

```
PUT https://admin.googleapis.com/admin/directory/v1/users/userKey
```

Both the request and response body contain an instance of [`User`](https://developers.google.com/workspace/admin/directory/reference/rest/v1/users#User). However, the Directory API supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch), so you only need to submit the updated fields in your request.

### Sample request

In the example below, the user's `givenName` was "Elizabeth" when the user account was created, and only a work email address was provided.

```
{
  "name": {
    "givenName": "Elizabeth",
    "familyName": "Smith"
   },
  "emails": [
    {
      "address": "liz@example.com",
      "type": "work",
      "primary": true
    }
  ]
}
```

The following request updates `givenName` from "Elizabeth" to "Liz", and also adds a home email address. Note that both email addresses are provided fully because the field is an array.

```
PUT https://admin.googleapis.com/admin/directory/v1/users/liz@example.com
```

```
{
  "name": {
    "givenName": "Liz",
   },
  "emails": [
    {
      "address": "liz@example.com",
      "type": "work",
      "primary": true
    },
    {
      "address": "liz@home.com",
      "type": "home"
    }
  ]
}
```

A successful response returns an [`HTTP 200` status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes) and a [`User`](https://developers.google.com/workspace/admin/directory/reference/rest/v1/users#resource:-user) resource with the updated fields.

Be aware of the following when updating a user's account name:

- Renaming a user account changes the user's primary email address and the domain used when retrieving this user's information. Before renaming a user, we recommend that you sign out the user from all browser sessions and services.
- The process of renaming a user account can take up to 10 minutes to propagate across all services.
- When you rename a user, the old user name is retained as an alias to ensure continuous mail delivery in the case of email forwarding settings, and is not available as a new user name.
- In general, we also recommend not using the user email address as a key for persistent data because the email address is subject to change.
- For a full list of the effects of renaming a user across Google Workspace apps, see the [Admin help center](https://support.google.com/a/answer/2622985).

## Make a user an administrator

To make a user into a super administrator, use the following `POST` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `userKey` can be the user's primary email address, the unique user `id`, or one of the user's alias email addresses. For the request and response properties, see [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/users/makeAdmin). For more information about a super administrator, see the [administration help center](https://support.google.com/a/answer/33325).

```
POST https://admin.googleapis.com/admin/directory/v1/users/userKey/makeAdmin
```

The user must first exist before being made a super administrator. This operation can only be performed by an account's super administrator; delegated administrators cannot promote users to administrative roles. For information about using the Google Admin console to change an administrator's role, see the [administration help center](https://support.google.com/a/answer/33325).

### JSON request

In this example, the user whose `userKey` is `liz@example.com` has become a super administrator:

```
POST https://admin.googleapis.com/admin/directory/v1/users/liz@example.com/makeAdmin
```

```
{
 "status": true
}
```

A successful response returns an HTTP 200 status code.

## Manage user relationships

The Directory API uses the `relations` field to define different types of relationships between users. In a business setting, people commonly use this field for manager-employee and assistant relationships, but the field supports many other types as well. The relationship displays in the "Related people" card of the user in any Google Workspace application that supports the card. For examples of where the card is visible, see [Add information to a user’s Directory profile](https://support.google.com/a/answer/6191788).

### Create a relationship between users

You can define a relationship in only one direction, starting from the "owning" user, whose record includes the `relations` field. The `type` describes the relationship of the other person to the owning user. For example, in a manager-employee relationship, the employee is the owning user and you add a `relations` field to their account with the `manager` type. For allowed types, see the [`User`](https://developers.google.com/workspace/admin/directory/reference/rest/v1/users) object reference.

Set up the relationship by [creating](#create_user) or [updating](#update_user) the owning user with a JSON request body that includes the `relations` field. You can create multiple relationships in one request.

```
{
  "relations": [
    {
      "value": "EMAIL_ADDRESS_RELATION_1",
      "type": "manager"
    },
    {
      "value": "EMAIL_ADDRESS_RELATION_2",
      "type": "dotted_line_manager"
    }
  ]
}
```

### Update or delete a relationship

You can only update the `relations` field as a whole—you can't address the individual people listed to change the relationship type or to remove them. In the preceding example, to remove the existing manager relationship and make the dotted-line manager the owning user's manager, update the owning user's account with all of the field's values as you now want them.

```
{
  "relations": [
    {
      "value": "EMAIL_ADDRESS_RELATION_2",
      "type": "manager"
    }
  ]
}
```

To remove all of the owning user's relationships, set `relations` to be empty:

```
{
  "relations": []
}
```

## Retrieve a user

To retrieve a user, use the following `GET` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `userKey` can be the user's primary email address, the unique user `id`, or one of the user's alias email addresses. For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/users/get).

```
GET https://admin.googleapis.com/admin/directory/v1/users/userKey
```

This example returns the user account properties for the user whose primary or alias email address is `liz@example.com`:

```
GET https://admin.googleapis.com/admin/directory/v1/users/liz@example.com
```

### JSON response

A successful response returns an HTTP 200 status code. Along with the status code, the response returns the properties for the user account.

```
{
 "kind": "directory#user",
 "id": "the unique user id",
 "primaryEmail": "liz@example.com",
 "name": {
  "givenName": "Liz",
  "familyName": "Smith",
  "fullName": "Liz Smith"
 },
 "isAdmin": true,
 "isDelegatedAdmin": false,
 "lastLoginTime": "2013-02-05T10:30:03.325Z",
 "creationTime": "2010-04-05T17:30:04.325Z",
 "agreedToTerms": true,
 "hashFunction": "SHA-1",
 "suspended": false,
 "changePasswordAtNextLogin": false,
 "ipWhitelisted": false,
 "ims": [
  {
   "type": "work",
   "protocol": "gtalk",
   "im": "lizim@talk.example.com",
   "primary": true
  }
 ],
 "emails": [
  {
   "address": "liz@example.com",
   "type": "home",
   "customType": "",
   "primary": true
  }
 ],
 "addresses": [
  {
   "type": "work",
   "customType": "",
   "streetAddress": "1600 Amphitheatre Parkway",
   "locality": "Mountain View",
   "region": "CA",
   "postalCode": "94043"
  }
 ],
 "externalIds": [
  {
   "value": "employee number",
   "type": "custom",
   "customType": "office"
  }
 ],
 "organizations": [
  {
   "name": "Google Inc.",
   "title": "SWE",
   "primary": true,
   "customType": "",
   "description": "Software engineer"
  }
 ],
 "phones": [
  {
   "value": "+1 nnn nnn nnnn",
   "type": "work"
  }
 ],
 "aliases": [
  "lizsmith@example.com",
  "lsmith@example.com"
 ],
 "nonEditableAliases": [
  "liz@test.com"
 ],
 "customerId": "C03az79cb",
 "orgUnitPath": "corp/engineering",
 "isMailboxSetup": true,
 "includeInGlobalAddressList": true
}
```

## Retrieve all users in a domain

To retrieve all users in the same domain, use the following `GET` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). For readability, this example uses line returns:

```
GET https://admin.googleapis.com/admin/directory/v1/users
?domain=primary domain name&pageToken=token for next results page
&maxResults=max number of results per page
&orderBy=email, givenName, or familyName
&sortOrder=ascending or descending
&query=email, givenName, or familyName:the query's value*
```

For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/users/list).

### JSON response

In this example, all users in the `example.com` domain are returned with a maximum of 2 user domains per response page. There is a `nextPageToken` for the follow-on list of users in this response. By default, the system returns a list of 100 users in the alphabetical order of the user's email address:

```
GET https://admin.googleapis.com/admin/directory/v1/users?domain=example.com&maxResults=2
```

A successful response returns an HTTP 200 status code. Along with the status code, the response returns 2 user accounts in the `example.com` domain (`maxResults=2`):

```
{
 "kind": "directory#users",
 "users": [
  {
   "kind": "directory#user",
   "id": "the unique user id",
   "primaryEmail": "liz@example.com",
   "name": {
    "givenName": "Liz",
    "familyName": "Smith",
    "fullName": "Liz Smith"
   },
   "isAdmin": true,
   "isDelegatedAdmin": false,
   "lastLoginTime": "2013-02-05T10:30:03.325Z",
   "creationTime": "2010-04-05T17:30:04.325Z",
   "agreedToTerms": true,
   "hashFunction": "SHA-1",
   "suspended": false,
   "changePasswordAtNextLogin": false,
   "ipWhitelisted": false,
   "ims": [
    {
     "type": "work",
     "protocol": "gtalk",
     "im": "lizim@talk.example.com",
     "primary": true
    }
   ],
   "emails": [
    {
     "address": "liz@example.com",
     "type": "work",
     "customType": "",
     "primary": true
    }
   ],
   "addresses": [
    {
     "type": "work",
     "customType": "",
     "streetAddress": "1600 Amphitheatre Parkway",
     "locality": "Mountain View",
     "region": "CA",
     "postalCode": "94043"
    }
   ],
   "externalIds": [
    {
     "value": "employee number",
     "type": "custom",
     "customType": "office"
    }
   ],
   "organizations": [
    {
     "name": "Google Inc.",
     "title": "SWE",
     "primary": true,
     "customType": "",
     "description": "Software engineer"
    }
   ],
   "phones": [
    {
     "value": "+1 nnn nnn nnnn",
     "type": "work"
    }
   ],
   "aliases": [
    "lizsmith@example.com",
    "lsmith@example.com"
   ],
   "nonEditableAliases": [
    "liz@test.com"
   ],
   "customerId": "C03az79cb",
   "orgUnitPath": "corp/engineering",
   "isMailboxSetup": true,
   "includeInGlobalAddressList": true
  },
  {
   "kind": "directory#user",
   "id": "user unique ID",
   "primaryEmail": "admin2@example.com",
   "name": {
    "givenName": "admin",
    "familyName": "two",
    "fullName": "admin two"
   },
   "isAdmin": true,
   "isDelegatedAdmin": true,
   "lastLoginTime": "2013-02-05T10:30:03.325Z",
   "creationTime": "2010-04-05T17:30:04.325Z",
   "agreedToTerms": true,
   "hashFunction": "SHA-1",
   "suspended": true,
   "suspensionReason": "ADMIN",
   "changePasswordAtNextLogin": false,
   "ipWhitelisted": false,
   "emails": [
    {
     "address": "admin2@example.com",
     "type": "work",
     "customType": "",
     "primary": true
    }
   ],
   "externalIds": [
    {
     "value": "contractor license number",
     "type": "custom",
     "customType": "work"
    }
   ],
   "aliases": [
    "second_admin@example.com"
   ],
   "nonEditableAliases": [
    "admin@test.com"
   ],
   "customerId": "C03az79cb",
   "orgUnitPath": "corp/engineering",
   "isMailboxSetup": true,
   "includeInGlobalAddressList": true
  }
 ],
 "nextPageToken": "next page token"
}
```

## Retrieve all account users

To retrieve all users in an account, which can consist of multiple domains, use the following `GET` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). For readability, this example uses line returns:

```
GET https://admin.googleapis.com/admin/directory/v1/users
?customer=my_customer or customerId&pageToken=token for next results page
&maxResults=max number of results per page
&orderBy=email, givenName, or familyName
&sortOrder=ascending or descending
&query=user attributes
```

- The `customer` query string is the `my_customer` or the `customerId` value.
- Use the string `my_customer` to represent your account's `customerId`.
- As a reseller administrator, use the resold customer's `customerId`. For the `customerId`, use the account's primary domain name in the [Retrieve all users in a domain](#get_all_domain_users) operation's request. The resulting response has the `customerId` value.
- The optional `orderBy` query string determines whether the list is sorted by the user's primary email address, family name, or given name. When using `orderBy`, you can also use the `sortOrder` query string to list the results in ascending or descending order.
- The optional `query` query string allows searching over many fields in a user profile, including both core and custom fields. See [Search for Users](https://developers.google.com/workspace/admin/directory/v1/guides/search-users) for examples.

For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/users/list).

In this example, an account administrator is requesting all users in the account be returned with one user entry on each response page. The `nextPageToken` goes to the follow-on page of results:

```
GET https://admin.googleapis.com/admin/directory/v1/users?customer=my_customer&maxResults=1
```

In this example, a reseller administrator is requesting all users in a resold account which has the `customerId` value of `C03az79cb`.

```
GET https://admin.googleapis.com/admin/directory/v1/users?customer=C03az79cb&maxResults=1
```

### JSON response

A successful response returns an HTTP 200 status code. Along with the status code, the response returns all the users in this account:

```
{
 "kind": "directory#users",
 "users": [
  {
   "kind": "directory#user",
   "id": "the unique user id",
   "username": "admin2@example.com",
   "name": {
    "givenName": "admin",
    "familyName": "two",
    "fullName": "admin two"
   },
   "isAdmin": true,
   "isDelegatedAdmin": true,
   "lastLoginTime": "2013-02-05T10:30:03.325Z",
   "creationTime": "2010-04-05T17:30:04.325Z",
   "agreedToTerms": true,
   "hashFunction": "SHA-1",
   "suspended": false,
   "changePasswordAtNextLogin": false,
   "ipWhitelisted": false,
   "emails": [
    {
     "address": "admin2@example.com",
     "type": "work",
     "customType": "",
     "primary": true
    }
   ],
   "externalIds": [
    {
     "value": "employee number",
     "type": "custom",
     "customType": "office"
    }
   ],
   "aliases": [
     "second_admin@example.com"
   ],
   "nonEditableAliases": [
     "another_admin@test.com"
   ],
   "customerId": "C03az79cb",
   "orgUnitPath": "/",
   "isMailboxSetup": true,
   "includeInGlobalAddressList": true
  },
  {
   "kind": "directory#user",
   "id": "the unique user id",
   "username": "liz@example.com",
   "name": {
    "givenName": "Elizabeth",
    "familyName": "Smith",
    "fullName": "Elizabeth Smith"
   },
   "isAdmin": false,
   "isDelegatedAdmin": false,
   "lastLoginTime": "1336509883546",
   "creationTime": "1404802800000",
   "agreedToTerms": false,
   "hashFunction": "SHA-1",
   "suspended": false,
   "changePasswordAtNextLogin": false,
   "ipWhitelisted": false,
   "emails": [
    {
     "address": "liz@example.com",
     "type": "home",
     "customType": "",
     "primary": true
    }
   ],
   "externalIds": [
    {
     "value": "employee number",
     "type": "custom",
     "customType": "bank"
    }
   ],
   "relations": [
    {
     "value": "liz",
     "type": "friend",
     "customType": ""
    }
   ],
   "aliases": [
    "lizsmith@example.com",
    "lsmith@example.com"
   ],
   "nonEditableAliases": [
    "liz@test.com"
   ],
   "customerId": "C03az79cb",
   "orgUnitPath": "/",
   "isMailboxSetup": true,
   "includeInGlobalAddressList": true
  },
  {
   "kind": "directory#user",
   "id": "the unique user id",
   "username": "test3@example.com",
   "name": {
    "givenName": "Tester",
    "familyName": "Three",
    "fullName": "Tester Three"
   },
   "isAdmin": false,
   "isDelegatedAdmin": false,
   "lastLoginTime": "1336509883546",
   "creationTime": "1404802800000",
   "agreedToTerms": true,
   "hashFunction": "SHA-1",
   "suspended": false,
   "changePasswordAtNextLogin": false,
   "ipWhitelisted": false,
   "emails": [
    {
     "address": "test@example.com",
     "type": "work",
     "customType": "",
     "primary": true
    }
   ],
   "externalIds": [
    {
     "value": "employee number",
     "type": "custom",
     "customType": "office"
    }
   ],
   "aliases": [
    "tester3@example.com"
   ],
   "nonEditableAliases": [
    "third@test.com"
   ],
   "customerId": "C03az79cb",
   "orgUnitPath": "/",
   "isMailboxSetup": true,
   "includeInGlobalAddressList": true
  },
  {
   "kind": "directory#user",
   "id": "the unique user id",
   "username": "work_admin@example.com",
   "name": {
    "givenName": "Admin",
    "familyName": "Work",
    "fullName": "Admin Work"
   },
   "isAdmin": true,
   "isDelegatedAdmin": true,
   "lastLoginTime": "1336509883546",
   "creationTime": "1404802800000",
   "agreedToTerms": true,
   "hashFunction": "SHA-1",
   "suspended": false,
   "changePasswordAtNextLogin": false,
   "ipWhitelisted": false,
   "emails": [
    {
     "address": "work_admin@example.com",
     "type": "work",
     "customType": "",
     "primary": true
    }
   ],
   "externalIds": [
    {
     "value": "employee number",
     "type": "custom",
     "customType": "office"
    }
   ],
   "aliases": [
    "my_alias@example.com"
   ],
   "nonEditableAliases": [
    "other_alias@test.com"
   ],
   "customerId": "C03az79cb",
   "orgUnitPath": "/",
   "isMailboxSetup": true,
   "includeInGlobalAddressList": true
  }
 ],
 "nextPageToken": "NNNNN"
}
```

## Retrieve recently deleted users

To retrieve all users deleted within the span of the last 20 days from an account or from one of the account's domains, use the following `GET` requests and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). To undelete a user, see [Undelete a user](#undelete_user).

To retrieve users deleted within the span of the last 20 days from the account's primary domain or a subdomain, use the following `GET` request. The `domain` query string is the domain's primary domain name. For the user request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/users/list). For readability, this example uses line returns:

```
GET https://admin.googleapis.com/admin/directory/v1/users
?domain=primary domain name&pageToken=token for next results page
&maxResults=max number of results per page
&showDeleted=true
```

If an account has multiple domains, you can retrieve users deleted within the span of the last 20 days from the whole account, use the following `GET` request. For readability, this example uses line returns:

```
GET https://admin.googleapis.com/admin/directory/v1/users
?customer=my_customer or customerId&pageToken=token for next results page
&maxResults=max number of results per page&showDeleted=true
```

- The `customer` query string is the `my_customer` or the `customerId` value.
- As an account administrator, use the string `my_customer` to represent your account's `customerId`.
- As a reseller administrator, use the resold customer's `customerId`. For the `customerId`, use the account's primary domain name in the [Retrieve all users in a domain](#get_all_domain_users) operation's request. The resulting response has the `customerId` value.

For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/users).

In this example, an account administrator is requesting all deleted users in the account:

```
GET https://admin.googleapis.com/admin/directory/v1/users?customer=my_customer&showDeleted=true
```

### JSON response

A successful response returns an HTTP 200 status code. Along with the status code, the response returns all the account users deleted within the last 20 days:

```
{
 "kind": "directory#users",
 "users": [
  {
   "kind": "directory#user",
   "id": "the unique user id",
   "primaryEmail": "user1@example.com"
  },
  {
   "kind": "directory#user",
   "id": "the unique user id",
   "primaryEmail": "user3@example.com"
  }
 ],
 "nextPageToken": "token for next page of deleted users"
}
```

## Retrieve a user's photo

The API retrieves one photo thumbnail, the latest Google profile photo. To retrieve the user's latest photo, use the following `GET` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `userKey` can be the user's primary email address, the user `id`, or any of the user's alias emails. For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/users/photos/get).

```
GET https://admin.googleapis.com/admin/directory/v1/users/userKey/photos/thumbnail
```

In this example, the latest photo of `liz@example.com` is returned:

```
GET https://admin.googleapis.com/admin/directory/v1/users/liz@example.com/photos/thumbnail
```

### JSON response

A successful response returns an HTTP 200 status code.

```
{
 "kind": "directory#user#photo",
 "id": "the unique user id",
 "primaryEmail": "liz@example.com",
 "mimeType": "the photo mime type",
 "height": "the photo height in pixels",
 "width": "the photo width in pixels",
 "photoData": "web safe base64 encoded photo data"
}
```

The API's web safe base64 encoding of your photos is similar to the [RFC 4648 'base64url'](http://tools.ietf.org/html/rfc4648#section-5). This means:

- The slash (/) character is replaced with the underscore (\_) character.
- The plus sign (+) character is replaced with the hyphen (-) character.
- The equals sign (=) character is replaced with the asterisk (\*).
- For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign (=) for padding. This is done to simplify URL-parsing.
- Whatever the size of the photo being uploaded, the API downsizes it proportionally to 96x96 pixels.

If you need to create compatible links from JavaScript, the [Google Closure Library](https://developers.google.com/closure/library/docs/gettingstarted) includes [Base64 encoding and decoding functions](http://closure-library.googlecode.com/svn/docs/closure_goog_crypt_base64.js.html) which are released under the Apache license.

## Retrieve a user as a non-administrator

While user accounts can only be modified by administrators, any user on the domain can read user profiles. A non-admin user can make a [`users.get`](https://developers.google.com/workspace/admin/directory/v1/reference/users/get) or [`users.list`](https://developers.google.com/workspace/admin/directory/v1/reference/users/list) request with the `viewType` parameter equal to `domain_public` to retrieve a user's public profile. The scope `https://www.googleapis.com/auth/admin.directory.user.readonly` is ideal for this use case.

The `domain_public` view permits a non-admin user to access a standard set of core fields. For a custom field, you can choose whether it should be public or private when defining the schema.

## Update a user's photo

To update a user's photo, use the following `PUT` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `userKey` can be the user's primary email address, the user `id`, or any of the user aliases' emails. For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/users/photos/update).

```
PUT https://admin.googleapis.com/admin/directory/v1/users/userKey/photos/thumbnail
```

In this example, the photo for `liz@example.com` is updated:

```
PUT https://admin.googleapis.com/admin/directory/v1/users/liz@example.com/photos/thumbnail
```

```
{
"photoData": "web safe base64 encoded photo data"
}
```

When updating a photo, the `height` and `width` are ignored by the API.

### JSON response

A successful response returns an HTTP 200 status code.

```
{
 "kind": "directory#user#photo",
 "id": "the unique user id",
 "primaryEmail": "liz@example.com",
 "mimeType": "the photo mime type",
 "height": "the photo height in pixels",
 "width": "the photo width in pixels",
 "photoData": "web safe base64 encoded photo data"
}
```

## Delete a user's photo

To delete a user's photo, use the following `DELETE` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `userKey` can be the user's primary email address, the user `id`, or any of the user aliases' emails. For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/users/photos/delete).

```
DELETE https://admin.googleapis.com/admin/directory/v1/users/userKey/photos/thumbnail
```

Once deleted, the user's photo is not shown. Wherever a user's photo is required, a silhouette is shown instead.

## Delete a user account

To delete a user account, use the following `DELETE` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `userKey` can be the user's primary email address, the unique user `id`, or one of the user's alias email addresses. For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/users/delete).

```
DELETE https://admin.googleapis.com/admin/directory/v1/users/userKey
```

In this example, the `liz@example.com` user account is deleted:

```
DELETE https://admin.googleapis.com/admin/directory/v1/users/liz@example.com
```

A successful response returns an HTTP 200 status code.

Before you delete a user, consider the following:

- The deleted user can no longer sign in.
- For more information about user account deletion, refer to the [administration help center](https://support.google.com/a/answer/33314).

## Undelete a user account

A user deleted in the last 20 days must meet certain [conditions before the user's account can be restored](https://support.google.com/a/answer/1397578).

To undelete a user account, use the following `POST` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `userKey` is the unique user `id` found in the response of the [Retrieve users deleted within the past 20 days](#get_deleted_users) operation. The user's primary email address or one of the user's alias email addresses **cannot** be used in the `userKey` for this operation. For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/users/undelete).

```
POST https://admin.googleapis.com/admin/directory/v1/users/userKey/undelete
```

In this example, the user `liz@example.com` is undeleted. All of this user's previous account properties are restored:

```
POST https://admin.googleapis.com/admin/directory/v1/users/12309329403209438205/undelete
```

A successful response returns an HTTP 204 status code. To see the undeleted user's account, use the [Retrieve a user](#get_user) operation.
