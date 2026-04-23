---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/changes/getStartPageToken
root: workspace
fetched_at: 2026-04-23T15:28:01.106Z
---

# Method: changes.getStartPageToken

Gets the starting pageToken for listing future changes. For more information, see [Retrieve changes](../../../../guides/manage-changes.md).

### HTTP request

`GET https://www.googleapis.com/drive/v3/changes/startPageToken`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>driveId</code></td><td><p><code>string</code></p><p>The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.</p></td></tr><tr><td><code>supportsAllDrives</code></td><td><p><code>boolean</code></p><p>Whether the requesting application supports both My Drives and shared drives.</p></td></tr><tr><td><code>supportsTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>supportsAllDrives</code> instead.</p></td></tr><tr><td><code>teamDriveId<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Use <code>driveId</code> instead.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "startPageToken": string,
  "kind": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startPageToken</code></td><td><p><code>string</code></p><p>The starting page token for listing future changes. The page token doesn't expire.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies what kind of resource this is. Value: the fixed string <code>"drive#startPageToken"</code>.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.meet.readonly`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.photos.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
