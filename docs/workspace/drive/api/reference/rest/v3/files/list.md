---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/files/list
root: workspace
fetched_at: 2026-04-23T15:28:04.406Z
---

# Method: files.list

Lists the user's files. For more information, see [Search for files and folders](../../../../guides/search-files.md).

This method accepts the `q` parameter, which is a search query combining one or more search terms.

This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.

### HTTP request

`GET https://www.googleapis.com/drive/v3/files`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>corpora</code></td><td><p><code>string</code></p><p>Specifies a collection of items (files or documents) to which the query applies. Supported items include:</p><ul><li><code>user</code></li><li><code>domain</code></li><li><code>drive</code></li><li><code>allDrives</code></li></ul><p>Prefer <code>user</code> or <code>drive</code> to <code>allDrives</code> for efficiency. By default, corpora is set to <code>user</code>. However, this can change depending on the filter set through the <code>q</code> parameter. For more information, see <a href="https://developers.google.com/workspace/drive/api/guides/about-files#file-organization">File organization</a>.</p></td></tr><tr><td><code>corpus<br><b>(deprecated)</b></code></td><td><p><code>enum (<code>Corpus</code>)</code></p><p>Deprecated: The source of files to list. Use <code>corpora</code> instead.</p></td></tr><tr><td><code>driveId</code></td><td><p><code>string</code></p><p>ID of the shared drive to search.</p></td></tr><tr><td><code>includeItemsFromAllDrives</code></td><td><p><code>boolean</code></p><p>Whether both My Drive and shared drive items should be included in results.</p></td></tr><tr><td><code>includeTeamDriveItems<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>includeItemsFromAllDrives</code> instead.</p></td></tr><tr><td><code>orderBy</code></td><td><p><code>string</code></p><p>A comma-separated list of sort keys. Valid keys are:</p><ul><li><code>createdTime</code>: When the file was created. Avoid using this key for queries on large item collections as it might result in timeouts or other issues. For time-related sorting on large item collections, use <code>modifiedTime</code> instead.</li><li><code>folder</code>: The folder ID. This field is sorted using alphabetical ordering.</li><li><code>modifiedByMeTime</code>: The last time the file was modified by the user.</li><li><code>modifiedTime</code>: The last time the file was modified by anyone.</li><li><code>name</code>: The name of the file. This field is sorted using alphabetical ordering, so 1, 12, 2, 22.</li><li><code>name_natural</code>: The name of the file. This field is sorted using natural sort ordering, so 1, 2, 12, 22.</li><li><code>quotaBytesUsed</code>: The number of storage quota bytes used by the file.</li><li><code>recency</code>: The most recent timestamp from the file's date-time fields.</li><li><code>sharedWithMeTime</code>: When the file was shared with the user, if applicable.</li><li><code>starred</code>: Whether the user has starred the file.</li><li><code>viewedByMeTime</code>: The last time the file was viewed by the user.</li></ul><p>Each key sorts ascending by default, but can be reversed with the <code>desc</code> modifier. Example usage: <code>?orderBy=folder,modifiedTime desc,name</code>.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The token for continuing a previous list request on the next page. This should be set to the value of <code>nextPageToken</code> from the previous response.</p></td></tr><tr><td><code>q</code></td><td><p><code>string</code></p><p>A query for filtering the file results. For supported syntax, see <a href="https://developers.google.com/workspace/drive/api/guides/search-files">Search for files and folders</a>.</p></td></tr><tr><td><code>spaces</code></td><td><p><code>string</code></p><p>A comma-separated list of spaces to query within the corpora. Supported values are <code>drive</code> and <code>appDataFolder</code>. For more information, see <a href="https://developers.google.com/workspace/drive/api/guides/about-files#file-organization">File organization</a>.</p></td></tr><tr><td><code>supportsAllDrives</code></td><td><p><code>boolean</code></p><p>Whether the requesting application supports both My Drives and shared drives.</p></td></tr><tr><td><code>supportsTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>supportsAllDrives</code> instead.</p></td></tr><tr><td><code>teamDriveId<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Use <code>driveId</code> instead.</p></td></tr><tr><td><code>includePermissionsForView</code></td><td><p><code>string</code></p><p>Specifies which additional view's permissions to include in the response. Only <code>published</code> is supported.</p></td></tr><tr><td><code>includeLabels</code></td><td><p><code>string</code></p><p>A comma-separated list of IDs of labels to include in the <code>labelInfo</code> part of the response.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A list of files.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "files": [
    {
      
    }
  ],
  "nextPageToken": string,
  "kind": string,
  "incompleteSearch": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>files[]</code></td><td><p>The list of files. If <code>nextPageToken</code> is populated, then this list may be incomplete and an additional page of results should be fetched.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies what kind of resource this is. Value: the fixed string <code>"drive#fileList"</code>.</p></td></tr></tbody></table>

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

## Corpus

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>user</code></td><td>Files owned by or shared to the user.</td></tr><tr><td><code>domain</code></td><td>Files shared to the user's domain.</td></tr></tbody></table>
