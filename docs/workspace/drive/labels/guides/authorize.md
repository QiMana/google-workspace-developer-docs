---
source: https://developers.google.com/workspace/drive/labels/guides/authorize
root: workspace
fetched_at: 2026-04-23T15:28:07.595Z
---

# Choose Google Drive Labels API scopes

This document contains Drive Labels API-specific authorization and authentication information. Before reading this document, be sure to read the Google Workspace's general authentication and authorization information at [Learn about authentication and authorization](https://developers.google.com/workspace/guides/auth-overview).

## Configure OAuth 2.0 for authorization

[Configure the OAuth consent screen and choose scopes](https://developers.google.com/workspace/guides/configure-oauth-consent) to define what information is displayed to users and app reviewers, and register your app so that you can publish it later.

## Google Drive Labels API scopes

To define the level of access granted to your app, you need to identify and declare *authorization scopes*. An authorization scope is an OAuth 2.0 URI string that contains the Google Workspace app name, what kind of data it accesses, and the level of access. Scopes are your app's requests to work with Google Workspace data, including users' Google Account data.

When your app is installed, a user is asked to validate the scopes used by the app. Generally, you should choose the most narrowly focused scope possible and avoid requesting scopes that your app doesn't require. Users more readily grant access to limited, clearly described scopes.

When possible, we recommend using non-sensitive scopes as it grants per-file access scope and narrows access to specific functionality needed by an app.

The following OAuth 2.0 scopes can be used to read, search, and modify label metadata applied Drive items:

| Scope | Meaning |
| --- | --- |
| - `https://www.googleapis.com/auth/drive` - `https://www.googleapis.com/auth/drive.file` - `https://www.googleapis.com/auth/drive.metadata` | Read, search, and modify label metadata applied to Drive items. |
| - `https://www.googleapis.com/auth/drive.readonly` - `https://www.googleapis.com/auth/drive.metadata.readonly` | Read and search label metadata applied to Drive items authorized for the application. |

For more information, see [Drive API OAuth 2.0 Scopes](https://developers.google.com/identity/protocols/oauth2/scopes#drive) and [Drive API-specific authorization](https://developers.google.com/workspace/drive/api/guides/api-specific-auth).

### Scopes for labels

The following OAuth scopes can be used to view and manage labels:

| Scope | Meaning |
| --- | --- |
| `https://www.googleapis.com/auth/drive.labels` | View, use, and manage Drive labels. - This scope allows user access, and is required for write operations when `use_admin_access` is not set. - Write operations with this scope are valid for labels with the `SHARED` [label type](https://developers.google.com/workspace/drive/labels/guides/overview#label-type). |
| `https://www.googleapis.com/auth/drive.labels.readonly` | View and use Drive labels. - This scope allows user access, and is required for read operations when `use_admin_access` is not set. |
| `https://www.googleapis.com/auth/drive.admin.labels` | View, edit, create, and delete all Drive labels in your organization, and view your organization's label-related administration policies. - This scope allows admin access, and is required for write operations when `use_admin_access` is set. This scope also grants read access. - Write operations with this scope are valid for labels with the `SHARED` or `ADMIN` [label type](https://developers.google.com/workspace/drive/labels/guides/overview#label-type). |
| `https://www.googleapis.com/auth/drive.admin.labels.readonly` | View all Drive labels and label-related administration policies in your organization. - This scope allows admin access, and is required for read operations when `use_admin_access` is set. |

## Administrator access

To manage `ADMIN` labels, you must specify:

- `useAdminAccess` is `true` to use the user's administrator credentials.
- Account administrators with the [Manage Labels](https://support.google.com/a/answer/1219251#drive_and_docs) privilege.

### useAdminAccess

Administrators must set the `useAdminAccess` parameter to invoke their admin privileges. Setting `useAdminAccess` allows viewing and editing of any label owned by a customer. This includes both `ADMIN` and `SHARED` Labels.

When `useAdminAccess` is not set, write requests are allowed only for labels with both a `SHARED` [`label type`](https://developers.google.com/workspace/drive/labels/guides/overview#label-type) and for users with the appropriate `EDITOR` role for this label.

For more information, see [Create access credentials](https://developers.google.com/workspace/guides/create-credentials).
