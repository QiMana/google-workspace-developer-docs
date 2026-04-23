---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/users/update
root: workspace
fetched_at: 2026-04-23T15:23:47.029Z
---

# Method: users.update

Updates a user.

This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared.

For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](../../../../v1/guides/manage-users.md#update_user) for more information.

### HTTP request

`PUT https://admin.googleapis.com/admin/directory/v1/users/{userKey}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userKey</code></td><td><p><code>string</code></p><p>Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.user`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
