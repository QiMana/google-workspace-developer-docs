---
source: https://developers.google.com/workspace/admin/reseller/v1/how-tos/authorize
root: workspace
fetched_at: 2026-04-23T15:24:44.367Z
---

# Choose Reseller API scopes

This document contains Reseller API-specific authorization and authentication information. Before reading this document, be sure to read the Google Workspace's general authentication and authorization information at [Learn about authentication and authorization](../../../../guides/auth-overview.md).

## Configure OAuth 2.0 for authorization

[Configure the OAuth consent screen and choose scopes](../../../../guides/configure-oauth-consent.md) to define what information is displayed to users and app reviewers, and register your app so that you can publish it later.

## Reseller API scopes

To define the level of access granted to your app, you need to identify and declare *authorization scopes*. An authorization scope is an OAuth 2.0 URI string that contains the Google Workspace app name, what kind of data it accesses, and the level of access. Scopes are your app's requests to work with Google Workspace data, including users' Google Account data.

When your app is installed, a user is asked to validate the scopes used by the app. Generally, you should choose the most narrowly focused scope possible and avoid requesting scopes that your app doesn't require. Users more readily grant access to limited, clearly described scopes.

The Reseller API supports the following scopes:

| Scope | Meaning |
| --- | --- |
| `https://www.googleapis.com/auth/apps.order` | Global scope for access to all Reseller API operations. |
| `https://www.googleapis.com/auth/admin.directory.user` | Global scope for access to all user and user alias operations. |
| `https://www.googleapis.com/auth/siteverification` | Global scope for full read access for existing verified sites and the ability to verify new sites. |
