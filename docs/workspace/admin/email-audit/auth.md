---
source: https://developers.google.com/workspace/admin/email-audit/auth
root: workspace
fetched_at: 2026-04-23T15:23:54.022Z
---

# Choose Email Audit API scopes

This document contains Email Audit API-specific authorization and authentication information. Before reading this document, be sure to read the Google Workspace's general authentication and authorization information at [Learn about authentication and authorization](https://developers.google.com/workspace/guides/auth-overview).

## Configure OAuth 2.0 for authorization

[Configure the OAuth consent screen and choose scopes](https://developers.google.com/workspace/guides/configure-oauth-consent) to define what information is displayed to users and app reviewers, and register your app so that you can publish it later.

## Email Audit API scopes

To define the level of access granted to your app, you need to identify and declare *authorization scopes*. An authorization scope is an OAuth 2.0 URI string that contains the Google Workspace app name, what kind of data it accesses, and the level of access. Scopes are your app's requests to work with Google Workspace data, including users' Google Account data.

When your app is installed, a user is asked to validate the scopes used by the app. Generally, you should choose the most narrowly focused scope possible and avoid requesting scopes that your app doesn't require. Users more readily grant access to limited, clearly described scopes.

The Email Audit API supports the following scopes:

| Scopes | Meaning |
| --- | --- |
| `https://apps-apis.google.com/a/feeds/compliance/audit/` | Global scope for access to audit user accounts |
