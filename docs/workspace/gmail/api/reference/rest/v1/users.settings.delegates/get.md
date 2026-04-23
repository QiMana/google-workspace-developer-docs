---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates/get
root: workspace
fetched_at: 2026-04-23T15:29:02.073Z
---

# Method: users.settings.delegates.get

Gets the specified delegate. For more information, see [Manage delegates](https://developers.google.com/workspace/gmail/api/guides/delegate_settings).

A delegate user must be referred to by their primary email address, and not an email alias.

This method is only available to service account clients that have been delegated domain-wide authority.

### HTTP request

`GET https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/delegates/{delegateEmail}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr><tr><td><code>delegateEmail</code></td><td><p><code>string</code></p><p>The email address of the user whose delegate relationship is to be retrieved.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/gmail.settings.basic`
- `           https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
