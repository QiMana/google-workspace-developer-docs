---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/replies/list
root: workspace
fetched_at: 2026-04-23T15:27:57.501Z
---

# Method: replies.list

Lists all of the replies to a comment.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file.</p></td></tr><tr><td><code>commentId</code></td><td><p><code>string</code></p><p>The ID of the comment.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>includeDeleted</code></td><td><p><code>boolean</code></p><p>If set, all replies, including deleted replies (with content stripped) will be returned.</p></td></tr><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>The maximum number of replies to include in the response, used for paging.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A list of replies to a comment on a file in Google Drive.

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>items[]</code></td><td><p>The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always <code>drive#commentReplyList</code>.</p></td></tr><tr><td><code>selfLink</code></td><td><p><code>string</code></p><p>A link back to this list.</p></td></tr><tr><td><code>nextLink</code></td><td><p><code>string</code></p><p>A link to the next page of replies.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.meet.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
