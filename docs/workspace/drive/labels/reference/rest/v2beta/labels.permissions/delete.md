---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2beta/labels.permissions/delete
root: workspace
fetched_at: 2026-04-23T15:28:16.014Z
---

# Method: labels.permissions.delete

Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### HTTP request

`DELETE https://drivelabels.googleapis.com/v2beta/{name=labels/*/permissions/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Label Permission resource name.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Set to <code>true</code> in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive.labels`
- `           https://www.googleapis.com/auth/drive.admin.labels`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
