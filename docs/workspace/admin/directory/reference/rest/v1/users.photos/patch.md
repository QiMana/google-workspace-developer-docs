---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/users.photos/patch
root: workspace
fetched_at: 2026-04-23T15:23:45.690Z
---

# Method: users.photos.patch

Adds a photo for the user. This method supports [patch semantics](../../../../v1/guides/performance.md#patch).

### HTTP request

`PATCH https://admin.googleapis.com/admin/directory/v1/users/{userKey}/photos/thumbnail`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userKey</code></td><td><p><code>string</code></p><p>Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `UserPhoto`.

### Response body

If successful, the response body contains an instance of `UserPhoto`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.user`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
