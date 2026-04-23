---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/children/list
root: workspace
fetched_at: 2026-04-23T15:27:50.989Z
---

# Method: children.list

Lists a folder's children.

### HTTP request

`GET https://www.googleapis.com/drive/v2/files/{folderId}/children`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>folderId</code></td><td><p><code>string</code></p><p>The ID of the folder.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of children to return.</p></td></tr><tr><td><code>orderBy</code></td><td><p><code>string</code></p><p>A comma-separated list of sort keys. Valid keys are <code>createdDate</code>, <code>folder</code>, <code>lastViewedByMeDate</code>, <code>modifiedByMeDate</code>, <code>modifiedDate</code>, <code>quotaBytesUsed</code>, <code>recency</code>, <code>sharedWithMeDate</code>, <code>starred</code>, and <code>title</code>. Each key sorts ascending by default, but may be reversed with the <code>desc</code> modifier. Example usage:?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Page token for children.</p></td></tr><tr><td><code>q</code></td><td><p><code>string</code></p><p>Query string for searching children.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A list of children of a file.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "items": [
    {
      
    }
  ],
  "nextPageToken": string,
  "kind": string,
  "etag": string,
  "selfLink": string,
  "nextLink": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>items[]</code></td><td><p>The list of children. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The page token for the next page of children. This will be absent if the end of the children list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always <code>drive#childList</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>The ETag of the list.</p></td></tr><tr><td><code>selfLink</code></td><td><p><code>string</code></p><p>A link back to this list.</p></td></tr><tr><td><code>nextLink</code></td><td><p><code>string</code></p><p>A link to the next page of children.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.meet.readonly`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.photos.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
