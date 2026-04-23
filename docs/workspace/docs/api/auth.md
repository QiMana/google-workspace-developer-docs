---
source: https://developers.google.com/workspace/docs/api/auth
root: workspace
fetched_at: 2026-04-23T15:27:04.546Z
---

# Choose Google Docs API scopes

This document contains Google Docs API-specific authorization and authentication information. Before reading this document, be sure to read the Google Workspace's general authentication and authorization information at [Learn about authentication and authorization](https://developers.google.com/workspace/guides/auth-overview).

## Configure OAuth 2.0 for authorization

[Configure the OAuth consent screen and choose scopes](https://developers.google.com/workspace/guides/configure-oauth-consent) to define what information is displayed to users and app reviewers, and register your app so that you can publish it later.

## Docs API scopes

To define the level of access granted to your app, you need to identify and declare *authorization scopes*. An authorization scope is an OAuth 2.0 URI string that contains the Google Workspace app name, what kind of data it accesses, and the level of access. Scopes are your app's requests to work with Google Workspace data, including users' Google Account data.

When your app is installed, a user is asked to validate the scopes used by the app. Generally, you should choose the most narrowly focused scope possible and avoid requesting scopes that your app doesn't require. Users more readily grant access to limited, clearly described scopes.

When possible, we recommend using non-sensitive scopes as it grants per-file access scope and narrows access to specific features needed by an app.

The Docs API supports the following scopes:

| Scope code | Description | Usage |
| --- | --- | --- |
| `https://www.googleapis.com/auth/documents` | See, edit, create, and delete all your Google Docs documents. | Sensitive |
| `https://www.googleapis.com/auth/documents.readonly` | See all your Google Docs documents. | Sensitive |
| `https://www.googleapis.com/auth/drive.file` | See, edit, create, and delete only the specific Google Drive files you use with this app. | ==Recommended==   Non-sensitive |
| `https://www.googleapis.com/auth/drive` | See, edit, create, and delete all of your Google Drive files. | Restricted |
| `https://www.googleapis.com/auth/drive.readonly` | See and download all your Google Drive files. | Restricted |

The Usage column in the table indicates the sensitivity of each scope, according to the following definitions:

- **Non-sensitive**: These scopes provide the smallest scope of authorization access and only requires basic app verification. For information on this requirement, see [Submitting your app for verification](https://support.google.com/cloud/answer/13461325).
- **Sensitive**: These scopes provide access to specific Google User Data that's authorized by the user for your app. It requires you to go through additional app verification. For information on this requirement, see [Sensitive and Restricted Scope Requirements](https://support.google.com/cloud/answer/13464321#ss-rs-requirements).
- **Restricted**: These scopes provide wide access to Google User Data and require you to go through a restricted scope verification process. For information on this requirement, see [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) and [Additional Requirements for Specific API Scopes](https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes). If you store restricted scope data on servers (or transmit), then you must go through a security assessment.

If your app requires access to any other Google APIs, you can add those scopes as well. For more information about Google API scopes, see [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2).

For more information about specific OAuth 2.0 scopes, see [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes).

## Related topics

- [Choose Google Drive API scopes](https://developers.google.com/workspace/drive/api/guides/api-specific-auth)
- [OAuth App Verification Help Center](https://support.google.com/cloud/answer/13463073)
- [OAuth App Verification FAQs](https://support.google.com/cloud/answer/13463817)
