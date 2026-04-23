---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.filters/delete
root: workspace
fetched_at: 2026-04-23T15:29:02.269Z
---

# Method: users.settings.filters.delete

Immediately and permanently deletes the specified filter. For more information, see [Manage Gmail filters](../../../../guides/filter_settings.md).

### HTTP request

`DELETE https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/filters/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the filter to be deleted.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/gmail.settings.basic`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
