---
source: https://developers.google.com/workspace/gmail/api/auth/scopes
root: workspace
fetched_at: 2026-04-23T15:28:49.853Z
---

# Choose Gmail API scopes

This document contains Gmail API-specific authorization and authentication information. Before reading this document, be sure to read the Google Workspace's general authentication and authorization information at [Learn about authentication and authorization](../../../guides/auth-overview.md).

## Configure OAuth 2.0 for authorization

[Configure the OAuth consent screen and choose scopes](../../../guides/configure-oauth-consent.md) to define what information is displayed to users and app reviewers, and register your app so that you can publish it later.

## Gmail API scopes

To define the level of access granted to your app, you need to identify and declare *authorization scopes*. An authorization scope is an OAuth 2.0 URI string that contains the Google Workspace app name, what kind of data it accesses, and the level of access. Scopes are your app's requests to work with Google Workspace data, including users' Google Account data.

When your app is installed, a user is asked to validate the scopes used by the app. Generally, you should choose the most narrowly focused scope possible and avoid requesting scopes that your app doesn't require. Users more readily grant access to limited, clearly described scopes.

Whenever possible, use non-sensitive scopes to narrow access to only the specific features needed by an app.

### Non-sensitive scopes

The following Gmail API scopes are recommended for most use cases:

| Scope code | Description |
| --- | --- |
| `https://www.googleapis.com/auth/gmail.addons.current.action.compose` | Manage drafts and send emails when you interact with the add-on. |
| `https://www.googleapis.com/auth/gmail.addons.current.message.action` | View your email messages when you interact with the add-on. |
| `https://www.googleapis.com/auth/gmail.labels` | See and edit your email labels. |

### Sensitive scopes

| Scope code | Description |
| --- | --- |
| `https://www.googleapis.com/auth/gmail.addons.current.message.metadata` | View your email message metadata when the add-on is running. |
| `https://www.googleapis.com/auth/gmail.addons.current.message.readonly` | View your email messages when the add-on is running. |
| `https://www.googleapis.com/auth/gmail.send` | Send email on your behalf. |

### Restricted scopes

| Scope code | Description |
| --- | --- |
| `https://mail.google.com/` | Read, compose, send, and permanently delete all your email from Gmail.      **Note:** Request this scope only if your application needs to immediately and permanently delete threads and messages, bypassing the trash. You can perform all other actions using less permissive scopes. |
| `https://www.googleapis.com/auth/gmail.readonly` | View your email messages and settings. |
| `https://www.googleapis.com/auth/gmail.compose` | Manage drafts and send emails. |
| `https://www.googleapis.com/auth/gmail.insert` | Add emails into your Gmail mailbox. |
| `https://www.googleapis.com/auth/gmail.modify` | Read, compose, and send emails from your Gmail account. This scope does not allow immediate, permanent deletion of threads and messages, bypassing the trash. |
| `https://www.googleapis.com/auth/gmail.metadata` | View your email message metadata such as labels and headers, but not the email body. |
| `https://www.googleapis.com/auth/gmail.settings.basic` | See, edit, create, or change your email settings and filters in Gmail. |
| `https://www.googleapis.com/auth/gmail.settings.sharing` | Manage your sensitive mail settings, including who can manage your mail.      **Note:** Operations guarded by this scope are restricted to administrative use only. They are only available to Google Workspace customers using a service account with domain-wide delegation. |

The scopes in the preceding tables indicate their sensitivity, according to the following definitions:

- **Non-sensitive**: These scopes provide the smallest scope of authorization and only require basic [OAuth App Verification](https://support.google.com/cloud/answer/13463073). For more information, see [Verification requirements](https://support.google.com/cloud/answer/13464321).
- **Sensitive**: These scopes provide access to specific Google user data that users authorize for your app. They require additional [OAuth App Verification](https://support.google.com/cloud/answer/13463073). For more information, see [Sensitive and Restricted Scope Requirements](https://support.google.com/cloud/answer/13464321#ss-rs-requirements).
- **Restricted**: These scopes provide wide access to Google user data and require restricted scope [OAuth App Verification](https://support.google.com/cloud/answer/13463073). For more information, see [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) and [Additional Requirements for Specific API Scopes](https://developers.google.com/terms/api-services-user-data-policy#additional-requirements-for-specific-api-scopes).
	If you store restricted scope data on servers (or transmit), then you must go through a security assessment.

Additional information that governs your use and access to Gmail APIs when you request to access user data can be found in the [Google Workspace API user data and developer policy](../../../workspace-api-user-data-developer-policy.md).

If your app requires access to any other Google APIs, you can add those scopes as well. For more information about Google API scopes, see [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2).

For more information about specific OAuth 2.0 scopes, see [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes).

## OAuth verification

Using certain sensitive OAuth scopes may require your app to complete [Google's OAuth verification process](https://support.google.com/cloud/answer/13463073). The [OAuth App Verification FAQ](https://support.google.com/cloud/answer/13463817) can help you determine if this is necessary and what type of verification is required.
