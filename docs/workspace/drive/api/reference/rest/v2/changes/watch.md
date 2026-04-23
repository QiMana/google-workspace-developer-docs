---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/changes/watch
root: workspace
fetched_at: 2026-04-23T15:27:49.663Z
---

# Method: changes.watch

### HTTP request

`POST https://www.googleapis.com/drive/v2/changes/watch`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>driveId</code></td><td><p><code>string</code></p><p>The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.</p></td></tr><tr><td><code>includeCorpusRemovals</code></td><td><p><code>boolean</code></p><p>Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.</p></td></tr><tr><td><code>includeDeleted</code></td><td><p><code>boolean</code></p><p>Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.</p></td></tr><tr><td><code>includeItemsFromAllDrives</code></td><td><p><code>boolean</code></p><p>Whether both My Drive and shared drive items should be included in results.</p></td></tr><tr><td><code>includeSubscribed</code></td><td><p><code>boolean</code></p><p>Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.</p></td></tr><tr><td><code>includeTeamDriveItems<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>includeItemsFromAllDrives</code> instead.</p></td></tr><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of changes to return.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The token for continuing a previous list request on the next page. This should be set to the value of <code>nextPageToken</code> from the previous response or to the response from the getStartPageToken method.</p></td></tr><tr><td><code>spaces</code></td><td><p><code>string</code></p><p>A comma-separated list of spaces to query. Supported values are <code>drive</code>, <code>appDataFolder</code> and <code>photos</code>.</p></td></tr><tr><td><code>startChangeId<br><b>(deprecated)</b></code></td><td><p><code>string (int64 format)</code></p><p>Deprecated: Use <code>pageToken</code> instead.</p></td></tr><tr><td><code>supportsAllDrives</code></td><td><p><code>boolean</code></p><p>Whether the requesting application supports both My Drives and shared drives.</p></td></tr><tr><td><code>supportsTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>supportsAllDrives</code> instead.</p></td></tr><tr><td><code>teamDriveId<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Use <code>driveId</code> instead.</p></td></tr><tr><td><code>includePermissionsForView</code></td><td><p><code>string</code></p><p>Specifies which additional view's permissions to include in the response. Only <code>published</code> is supported.</p></td></tr><tr><td><code>includeLabels</code></td><td><p><code>string</code></p><p>A comma-separated list of IDs of labels to include in the <code>labelInfo</code> part of the response.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `Channel`.

### Response body

If successful, the response body contains an instance of `Channel`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.apps.readonly`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.meet.readonly`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.photos.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
