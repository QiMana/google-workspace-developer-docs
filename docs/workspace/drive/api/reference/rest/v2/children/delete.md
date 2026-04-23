---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/children/delete
root: workspace
fetched_at: 2026-04-23T15:27:51.104Z
---

# Method: children.delete

Removes a child from a folder.

### HTTP request

`DELETE https://www.googleapis.com/drive/v2/files/{folderId}/children/{childId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>folderId</code></td><td><p><code>string</code></p><p>The ID of the folder.</p></td></tr><tr><td><code>childId</code></td><td><p><code>string</code></p><p>The ID of the child.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>enforceSingleParent<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: If an item is not in a shared drive and its last parent is removed, the item is placed under its owner's root.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
