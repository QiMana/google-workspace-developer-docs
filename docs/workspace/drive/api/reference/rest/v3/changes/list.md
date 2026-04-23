---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/changes/list
root: workspace
fetched_at: 2026-04-23T15:28:00.746Z
---

# Method: changes.list

Lists the changes for a user or shared drive. For more information, see [Retrieve changes](../../../../guides/manage-changes.md).

### HTTP request

`GET https://www.googleapis.com/drive/v3/changes`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>driveId</code></td><td><p><code>string</code></p><p>The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.</p></td></tr><tr><td><code>includeCorpusRemovals</code></td><td><p><code>boolean</code></p><p>Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.</p></td></tr><tr><td><code>includeItemsFromAllDrives</code></td><td><p><code>boolean</code></p><p>Whether both My Drive and shared drive items should be included in results.</p></td></tr><tr><td><code>includeRemoved</code></td><td><p><code>boolean</code></p><p>Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.</p></td></tr><tr><td><code>includeTeamDriveItems<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>includeItemsFromAllDrives</code> instead.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of changes to return per page.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.</p></td></tr><tr><td><code>restrictToMyDrive</code></td><td><p><code>boolean</code></p><p>Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.</p></td></tr><tr><td><code>spaces</code></td><td><p><code>string</code></p><p>A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.</p></td></tr><tr><td><code>supportsAllDrives</code></td><td><p><code>boolean</code></p><p>Whether the requesting application supports both My Drives and shared drives.</p></td></tr><tr><td><code>supportsTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>supportsAllDrives</code> instead.</p></td></tr><tr><td><code>teamDriveId<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Use <code>driveId</code> instead.</p></td></tr><tr><td><code>includePermissionsForView</code></td><td><p><code>string</code></p><p>Specifies which additional view's permissions to include in the response. Only 'published' is supported.</p></td></tr><tr><td><code>includeLabels</code></td><td><p><code>string</code></p><p>A comma-separated list of IDs of labels to include in the <code>labelInfo</code> part of the response.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A list of changes for a user.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "changes": [
    {
      
    }
  ],
  "kind": string,
  "nextPageToken": string,
  "newStartPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>changes[]</code></td><td><p>The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies what kind of resource this is. Value: the fixed string <code>"drive#changeList"</code>.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The page token for the next page of changes. This will be absent if the end of the changes list has been reached. The page token doesn't expire.</p></td></tr><tr><td><code>newStartPageToken</code></td><td><p><code>string</code></p><p>The starting page token for future changes. This will be present only if the end of the current changes list has been reached. The page token doesn't expire.</p></td></tr></tbody></table>

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
