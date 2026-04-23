---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/parents/insert
root: workspace
fetched_at: 2026-04-23T15:27:54.958Z
---

# Method: parents.insert

Adds a parent folder for a file.

### HTTP request

`POST https://www.googleapis.com/drive/v2/files/{fileId}/parents`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>enforceSingleParent<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Adding files to multiple folders is no longer supported. Use <code>shortcuts</code> instead.</p></td></tr><tr><td><code>supportsAllDrives</code></td><td><p><code>boolean</code></p><p>Whether the requesting application supports both My Drives and shared drives.</p></td></tr><tr><td><code>supportsTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>supportsAllDrives</code> instead.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.file`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
