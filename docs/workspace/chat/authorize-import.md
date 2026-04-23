---
source: https://developers.google.com/workspace/chat/authorize-import
root: workspace
fetched_at: 2026-04-23T15:25:18.372Z
---

# Authorize Google Chat apps to import data

## Page Summary

- Google Chat API allows importing data from other platforms into Google Chat using import mode spaces.
- Chat apps require specific authentication and authorization to read and write resources in these spaces, needing domain administrator approval.
- Apps can impersonate user accounts or utilize their service account credentials for specific actions within import mode spaces.
- Import mode spaces support various resource methods with differing authentication requirements, as detailed in the provided table.
- Chat apps can only import content into spaces they create and not into spaces created by other apps.

With the Google Chat API, apps can import data from other messaging platforms into Google Chat by using *import mode* spaces. For more information, see [Import message data to Google Chat from another service](https://support.google.com/a/answer/13465849).

To read and write resources in import mode spaces, you must [authenticate Chat apps with a service account](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). Grant the service account the following Chat API authorization scope by an administrator: `https://www.googleapis.com/auth/chat.import`.

Only Google Workspace domain administrators can grant this OAuth scope to service accounts through [domain-wide delegation](https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority). Every domain that a Chat app creates import mode spaces in must have this OAuth scope. After the service account has been delegated domain-wide authority for this scope, Chat apps can access import mode spaces by [impersonating a user account](https://developers.google.com/identity/protocols/oauth2/service-account#authorizingrequests).

In some scenarios, the user account for impersonation might no longer be available. In these cases, the Chat app can use their service account credentials as a fallback. For example, if you delete a user account that was used during message creation, the Chat app can use their own service account credentials to create a message containing the same contents. Chat apps can access import mode spaces as an app using service account credentials with the following OAuth scope: `https://www.googleapis.com/auth/chat.bot`.

No other [Google Chat API scopes](https://developers.google.com/workspace/chat/authenticate-authorize#scopes) are required when importing resources into an import mode space. Chat apps can only import content into the import mode spaces that they create, and not into the import mode spaces created by other apps.

The following table lists the resource methods that Chat apps can call in import mode spaces, and what kind of authentication they support:

| Resource method | User impersonation supported | Service account credentials supported |
| --- | --- | --- |
| `spaces.create` | Yes | No |
| `spaces.get` | No | Yes |
| `spaces.update` | Yes | No |
| `spaces.delete` | Yes | No |
| `spaces.completeImport` | Yes | No |
| `spaces.messages.create` | Yes | Yes |
| `spaces.messages.delete` | Yes | Yes |
| `spaces.messages.get` | No | Yes |
| `spaces.messages.list` | Yes | No |
| `spaces.messages.update` | Yes | Yes |
| `spaces.messages.reactions.create` | Yes | No |
| `spaces.messages.reactions.delete` | Yes | No |
| `spaces.members.create` | Yes | No |
| `spaces.members.delete` | Yes | No |
| `spaces.members.list` | Yes | No |
| `media.upload` | Yes | No |

## Related topics

- To learn more about authentication and authorization, see [Authenticate and authorize Google Chat apps and API requests](https://developers.google.com/workspace/chat/authenticate-authorize).
- To learn how to set up a service account to access the Google Chat API, see [Authenticate as a Google Chat app](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
- To learn how to start importing resources using import mode spaces, see [Import data to Google Chat](https://developers.google.com/workspace/chat/import-data).
