---
source: https://developers.google.com/workspace/admin/directory/v1/guides/authorizing
root: workspace
fetched_at: 2026-04-23T15:23:47.210Z
---

# Choose Directory API scopes

This document contains Directory API-specific authorization and authentication information. Before reading this document, be sure to read the Google Workspace's general authentication and authorization information at [Learn about authentication and authorization](../../../../guides/auth-overview.md).

## Configure OAuth 2.0 for authorization

[Configure the OAuth consent screen and choose scopes](../../../../guides/configure-oauth-consent.md) to define what information is displayed to users and app reviewers, and register your app so that you can publish it later.

## Directory API scopes

To define the level of access granted to your app, you need to identify and declare *authorization scopes*. An authorization scope is an OAuth 2.0 URI string that contains the Google Workspace app name, what kind of data it accesses, and the level of access. Scopes are your app's requests to work with Google Workspace data, including users' Google Account data.

When your app is installed, a user is asked to validate the scopes used by the app. Generally, you should choose the most narrowly focused scope possible and avoid requesting scopes that your app doesn't require. Users more readily grant access to limited, clearly described scopes.

The Directory API supports the following scopes:

| Scopes for devices | Meaning |
| --- | --- |
| `https://www.googleapis.com/auth/admin.directory.device.chromeos` | Global scope for access to all Chrome device operations. |
| `https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly` | Scope for only retrieving Chrome devices. |
| `https://www.googleapis.com/auth/admin.directory.device.mobile` | Global scope for access to all mobile device operations. |
| `https://www.googleapis.com/auth/admin.directory.device.mobile.readonly` | Scope for only retrieving mobile device |
| `https://www.googleapis.com/auth/admin.directory.device.mobile.action` | Scope for tasks that take an action on a mobile device. |
| Scopes for groups, group aliases, and group members | Meaning |
| `https://www.googleapis.com/auth/admin.directory.group.member` | Scope for access to all group member roles and information operations. |
| `https://www.googleapis.com/auth/admin.directory.group.member.readonly` | Scope for only retrieving group member roles and information. |
| `https://www.googleapis.com/auth/admin.directory.group` | Global scope for access to all group operations, including group aliases and members. |
| `https://www.googleapis.com/auth/admin.directory.group.readonly` | Scope for only retrieving group, group alias, and member information. |
| Scopes for organizational units | Meaning |
| `https://www.googleapis.com/auth/admin.directory.orgunit` | Global scope for access to all organizational unit operations. |
| `https://www.googleapis.com/auth/admin.directory.orgunit.readonly` | Scope for only retrieving organizational units. |
| Scopes for users and user aliases | Meaning |
| `https://www.googleapis.com/auth/admin.directory.user` | Global scope for access to all user and user alias operations. |
| `https://www.googleapis.com/auth/admin.directory.user.readonly` | Scope for only retrieving users or user aliases. |
| `https://www.googleapis.com/auth/admin.directory.user.alias` | Scope for access to all user alias operations. |
| `https://www.googleapis.com/auth/admin.directory.user.alias.readonly` | Scope for only retrieving user aliases. |
| Scopes for user security features | Meaning |
| `https://www.googleapis.com/auth/admin.directory.user.security` | Scope for access to all application-specific password, OAuth token, and verification code operations. |
| Scopes for role management | Meaning |
| `https://www.googleapis.com/auth/admin.directory.rolemanagement` | Scope for all roles management operations, including creating roles and role assignments. |
| `https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly` | Scope for getting and listing roles, privileges, and role assignments. |
| Scopes for custom user schemas | Meaning |
| `https://www.googleapis.com/auth/admin.directory.userschema` | Scope for access to all custom user schema operations. |
| `https://www.googleapis.com/auth/admin.directory.userschema.readonly` | Scope for only retrieving custom user schemas. |
| Scopes for customers | Meaning |
| `https://www.googleapis.com/auth/admin.directory.customer` | Scope for access to all customer operations. |
| `https://www.googleapis.com/auth/admin.directory.customer.readonly` | Scope for only retrieving customers. |
| Scopes for domains | Meaning |
| `https://www.googleapis.com/auth/admin.directory.domain` | Scope for access to all domain operations. |
| `https://www.googleapis.com/auth/admin.directory.domain.readonly` | Scope for only retrieving domains. |
| Scopes for calendar resources | Meaning |
| `https://www.googleapis.com/auth/admin.directory.resource.calendar` | Scope for access to all calendar resources operations. |
| `https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly` | Scope for only retrieving calendar resources. |
