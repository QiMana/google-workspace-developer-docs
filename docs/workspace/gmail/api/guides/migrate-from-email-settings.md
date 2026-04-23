---
source: https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings
root: workspace
fetched_at: 2026-04-23T15:28:51.530Z
---

# Migrate from the Email Settings API

This document can help migrate your app from the deprecated [Email Settings API](https://workspaceupdates.googleblog.com/2018/10/email-settings-api-shutdown.html) to the Gmail API.

## Authorize requests

Like the Email Settings API, the Gmail API uses the OAuth 2.0 protocol to authorize requests. One key difference is that Gmail API permissions are scoped to an individual user, rather than to the entire domain. This means authorizing a domain administrator account doesn't let you migrate mail for other users in the domain. Instead, you must use [standard service accounts with domain-wide authority](https://developers.google.com/identity/protocols/oauth2/service-account) that are added to an allowlist in the [Google Admin console](https://admin.google.com/) to generate the appropriate authentication token.

The Email Settings API used the scope:

```
https://apps-apis.google.com/a/feeds/emailsettings/2.0/
```

The equivalent scopes in the Gmail API are:

```
https://www.googleapis.com/auth/gmail.settings.basic
https://www.googleapis.com/auth/gmail.settings.sharing
```

## Protocol changes

The Email Settings API uses the XML based GDATA protocol. The Gmail API uses JSON. Since settings are mostly comprised of key-value pairs, payloads are conceptually similar between versions.

Example of creating a label:

### Email Settings API

```
POST https://apps-apis.google.com/a/feeds/emailsettings/2.0/{domain name}/{username}/label
<?xml version="1.0" encoding="utf-8"?>
<atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:apps="http://schemas.google.com/apps/2006">
  <apps:property name="label" value="status updates" />
</atom:entry>
```

### Gmail API

```
POST https://www.googleapis.com/gmail/v1/users/{username}/labels
{
   "name": "status updates"
}
```

Use the provided [client libraries](https://developers.google.com/workspace/gmail/api/downloads) instead of directly implementing the protocol.

## Manage labels

To manage labels in the Gmail API, use the [`labels`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.labels) resource.

| Old setting | New setting | Notes |
| --- | --- | --- |
| labelId | id |  |
| label | name |  |
| unreadCount | messagesUnread |  |
| visibility | labelListVisibility | `SHOW` is now `labelShow`   `HIDE` is now `labelHide` |

Other changes:

- When updating or deleting labels, the Gmail API references labels by ID instead of by name.

## Manage filters

To manage filters in the Gmail API, use the [`settings.filters`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.filters) resource.

| Old setting | New setting | Notes |
| --- | --- | --- |
| from | criteria.from |  |
| to | criteria.to |  |
| subject | criteria.subject |  |
| hasTheWord | criteria.query |  |
| doesNotHaveTheWord | criteria.negatedQuery |  |
| hasAttachment | criteria.hasAttachment |  |
| shouldArchive | action.removeLabelIds | Use `INBOX` as the label ID |
| shouldMarkAsRead | action.removeLabelIds | Use `UNREAD` as the label ID |
| shouldStar | action.addLabelIds | Use `STARRED` as the label ID |
| label | action.addLabelIds | Use the ID of the label to add |
| forwardTo | action.forward |  |
| shouldTrash | action.addLabelIds | Use `TRASH` as the label ID |
| neverSpam | action.removeLabelIds | Use `SPAM` as the label ID |

Other changes:

- If adding a user label doesn't already exist, it must be explicitly created using the [`labels.create`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.labels/create) method.

## Manage send-as aliases

To manage send-as aliases in the Gmail API, use the [`settings.sendAs`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.sendAs) resource.

| Old setting | New setting |
| --- | --- |
| name | displayName |
| address | sendAsEmail |
| replyTo | replyToAddress |
| makeDefault | isDefault |

## Manage web clips

Web Clip settings are not available in the Gmail API.

## Manage automatic forwarding

To manage automatic forwarding in the Gmail API, use the [`settings`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings) resource.

| Old setting | New setting | Notes |
| --- | --- | --- |
| enable | enabled |  |
| forwardTo | emailAddress |  |
| action | disposition | `KEEP` is now `leaveInInbox`   `ARCHIVE` is now `archive`   `DELETE` is now `trash`   `MARK_READ` is now `markRead` |

Other changes:

- Forwarding addresses must be created and verified prior to use.
- Forwarding addresses can be managed using the [`settings.forwardingAddresses`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.forwardingAddresses) resource.

## Manage POP settings

To manage POP access in the Gmail API, use the [`settings`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings) resource.

| Old setting | New setting | Notes |
| --- | --- | --- |
| enable | accessWindow | Disabled when set to `disabled` |
| enableFor | accessWindow | `ALL_MAIL` is now `allMail`   `MAIL_FROM_NOW_ON` is now `fromNowOn` |
| action | disposition | `KEEP` is now `leaveInInbox`   `ARCHIVE` is now `archive`   `DELETE` is now `trash`   `MARK_READ` is now `markRead` |

## Manage IMAP settings

To manage IMAP access in the Gmail API, use the [`settings`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings) resource.

| Old setting | New setting |
| --- | --- |
| enable | enabled |

## Manage vacation automatic reply settings

To manage vacation automatic reply in the Gmail API, use the [`settings`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings) resource.

| Old setting | New setting |
| --- | --- |
| contactsOnly | restrictToContacts |
| domainOnly | restrictToDomain |
| enable | enableAutoReply |
| endDate | endTime |
| message | responseBodyHtml   responseBodyPlainText |
| startDate | startTime |
| subject | responseSubject |

## Manage signature settings

To manage email signatures in the Gmail API, use the [`settings.sendAs`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.sendAs) resource.

| Old setting | New setting |
| --- | --- |
| signature | signature |

Other changes:

- Signatures are now managed per alias.

## Manage language settings

To manage language settings in the Gmail API, use the [`settings`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings) resource.

| Old setting | New setting |
| --- | --- |
| language | displayLanguage |

For more information, see [Manage language settings](https://developers.google.com/workspace/gmail/api/guides/language-settings).

## Manage delegation settings

To manage delegation in the Gmail API, use the [`settings.delegates`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates) resource.

| Old setting | New setting |
| --- | --- |
| address | delegateEmail |
| status | verificationStatus |

Other changes:

- General
	- To use any of the delegation methods (including [`settings.delegates.create`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates/create)) the delegator user must be enabled for Gmail. That means, for example, that the delegator user cannot be suspended in Google Workspace.
		- An email alias cannot be used as the delegate email input for any of the new methods. A delegate user must be referred to by their primary email address.
- [`settings.delegates.create`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates/create)
	- This method can now be used to create delegate relationships across multiple domains belonging to the same Google Workspace organization.
		- This method can now be used for users which require a password change at their next sign in.
		- If successful, this method returns a [`settings.delegates`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates) resource in the response body, rather than an empty response body.
		- If either of the delegator or delegate users are disabled (for example, suspended in Google Workspace) this method fails with an HTTP 4XX error instead of an HTTP 500 error.
- [`settings.delegates.delete`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates/delete)
	- This method can now be used to delete delegates with any [`VerificationStatus`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates#verificationstatus), rather than just delegates which are `accepted` or `expired`.
- [`settings.delegates.get`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates/get)
	- This is a new method, which might be preferable over the [`settings.delegates.list`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates/list) method depending on need.

## Manage general settings

General settings are not available in the Gmail API.
