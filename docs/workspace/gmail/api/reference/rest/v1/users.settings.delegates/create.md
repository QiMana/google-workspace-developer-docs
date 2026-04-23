---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates/create
root: workspace
fetched_at: 2026-04-23T15:29:01.699Z
---

# Method: users.settings.delegates.create

Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same Google Workspace organization as the delegator user. For more information, see [Manage delegates](https://developers.google.com/workspace/gmail/api/guides/delegate_settings).

Gmail imposes limitations on the number of delegates and delegators each user in a Google Workspace organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators.

A delegate user must be referred to by their primary email address, and not an email alias.

When a new delegate is created, there may be up to a one minute delay before the new delegate is available for use.

This method is only available to service account clients that have been delegated domain-wide authority.

### HTTP request

`POST https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/delegates`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/gmail.settings.sharing`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
