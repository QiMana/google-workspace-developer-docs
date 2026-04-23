---
source: https://developers.google.com/workspace/admin/contact-delegation/guides/manage-delegates
root: workspace
fetched_at: 2026-04-23T15:23:31.069Z
---

# Manage contact delegates

This guide covers how to create, list, and delete contact delegates for Google Workspace users.

Google Workspace users can give other users in their domain permission to access and manage their contacts. These delegates can add and update contacts with information such as names, phone numbers, and addresses.

This guide is for delegating access to contacts. To delegate access to Gmail, see [Delegate and collaborate on email](https://developers.google.com/gmail/api/guides/delegate).

## Prerequisites

Before you use the Contact Delegation API, ensure you meet the following requirements:

- **Enable contact sharing**: A Directory administrator must turn on contact sharing in the Admin console. For more information, see [Turn contact sharing on or off](https://support.google.com/a/answer/60218).
- **Administrator privileges**: You must have the "Contacts" administrator privilege to manage delegates for other users.
- **Domain restriction**: You can only delegate contacts between users in the same Google Workspace organization.
- **OAuth scope**: Your application must use the following OAuth scope: `https://www.googleapis.com/auth/admin.contact.delegation`.

## Create a delegate

To create a delegate for a user, send a `POST` request with the delegator's email address:

```
POST https://admin.googleapis.com/admin/contacts/v1/users/USER_EMAIL/delegates
```

Replace `USER_EMAIL` with the email address of the delegator.

In the request body, provide the email address for the delegate:

```
{
  "email": "DELEGATE_EMAIL"
}
```

Replace `DELEGATE_EMAIL` with the email address of the delegate.

A successful response returns an `HTTP 200` status code and the new delegate's email:

```
{
  "email": "DELEGATE_EMAIL"
}
```

## List delegates

To list delegates for a user's contacts, send a `GET` request with that user's email address:

```
GET https://admin.googleapis.com/admin/contacts/v1/users/USER_EMAIL/delegates
```

Replace `USER_EMAIL` with the email address of the user.

A successful response returns an `HTTP 200` status code and a list of delegate emails:

```
{
  "delegates": [
    {
      "email": "DELEGATE_EMAIL_1"
    },
    {
      "email": "DELEGATE_EMAIL_2"
    }
  ]
}
```

## Delete a delegate

To delete a delegate for a user's contacts, complete these steps:

1. Identify the delegate to remove. Use the [List delegates](#list-delegates) method to find a specific delegate's email address.
2. Send a `DELETE` request with the delegator and delegate email addresses:
	```
	DELETE https://admin.googleapis.com/admin/contacts/v1/users/USER_EMAIL/delegates/DELEGATE_EMAIL
	```

Replace `USER_EMAIL` with the email address of the delegator, and `DELEGATE_EMAIL` with the email address of the delegate.

A successful response returns an `HTTP 200` status code.
