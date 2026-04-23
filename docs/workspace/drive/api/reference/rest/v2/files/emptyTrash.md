---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/files/emptyTrash
root: workspace
fetched_at: 2026-04-23T15:27:51.433Z
---

# Method: files.emptyTrash

Permanently deletes all of the user's trashed files.

### HTTP request

`DELETE https://www.googleapis.com/drive/v2/files/trash`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>enforceSingleParent<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root.</p></td></tr><tr><td><code>driveId</code></td><td><p><code>string</code></p><p>If set, empties the trash of the provided shared drive.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
