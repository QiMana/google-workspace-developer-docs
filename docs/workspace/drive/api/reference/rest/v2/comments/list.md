---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/comments/list
root: workspace
fetched_at: 2026-04-23T15:27:50.509Z
---

# Method: comments.list

### HTTP request

`GET https://www.googleapis.com/drive/v2/files/{fileId}/comments`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>includeDeleted</code></td><td><p><code>boolean</code></p><p>If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.</p></td></tr><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>The maximum number of discussions to include in the response, used for paging.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.</p></td></tr><tr><td><code>updatedMin</code></td><td><p><code>string</code></p><p>Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A list of comments on a file in Google Drive.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "items": [
    {
      
    }
  ],
  "kind": string,
  "selfLink": string,
  "nextLink": string,
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>items[]</code></td><td><p>The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always drive#commentList.</p></td></tr><tr><td><code>selfLink</code></td><td><p><code>string</code></p><p>A link back to this list.</p></td></tr><tr><td><code>nextLink</code></td><td><p><code>string</code></p><p>A link to the next page of comments.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.meet.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
