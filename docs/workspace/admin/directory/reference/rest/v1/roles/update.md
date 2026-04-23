---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/roles/update
root: workspace
fetched_at: 2026-04-23T15:23:43.586Z
---

# Method: roles.update

Updates a role.

### HTTP request

`PUT https://admin.googleapis.com/admin/directory/v1/customer/{customer}/roles/{roleId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customer</code></td><td><p><code>string</code></p><p>Immutable ID of the Google Workspace account.</p></td></tr><tr><td><code>roleId</code></td><td><p><code>string</code></p><p>Immutable ID of the role.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.rolemanagement`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
