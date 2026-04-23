---
source: https://developers.google.com/workspace/admin/reports/auth
root: workspace
fetched_at: 2026-04-23T15:23:59.497Z
---

# Choose Reports API scopes

This document contains Admin SDK API-specific authorization and authentication information. Before reading this document, be sure to read the Google Workspace's general authentication and authorization information at [Learn about authentication and authorization](../../guides/auth-overview.md).

## Configure OAuth 2.0 for authorization

[Configure the OAuth consent screen and choose scopes](../../guides/configure-oauth-consent.md) to define what information is displayed to users and app reviewers, and register your app so that you can publish it later.

## Reports API scopes

To define the level of access granted to your app, you need to identify and declare *authorization scopes*. An authorization scope is an OAuth 2.0 URI string that contains the Google Workspace app name, what kind of data it accesses, and the level of access. Scopes are your app's requests to work with Google Workspace data, including users' Google Account data.

When your app is installed, a user is asked to validate the scopes used by the app. Generally, you should choose the most narrowly focused scope possible and avoid requesting scopes that your app doesn't require. Users more readily grant access to limited, clearly described scopes.

The Reports API supports the following scopes:

| Scopes | Meaning |
| --- | --- |
| `https://www.googleapis.com/auth/admin.reports.audit.readonly` | View audit reports for your Google Workspace domain |
| `https://www.googleapis.com/auth/admin.reports.usage.readonly` | View usage reports for your Google Workspace domain |
