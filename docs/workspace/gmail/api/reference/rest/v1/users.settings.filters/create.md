---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.filters/create
root: workspace
fetched_at: 2026-04-23T15:29:03.375Z
---

# Method: users.settings.filters.create

Creates a filter. Note: you can only create a maximum of 1,000 filters. For more information, see [Manage Gmail filters](https://developers.google.com/workspace/gmail/api/guides/filter_settings).

### HTTP request

`POST https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/filters`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/gmail.settings.basic`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
