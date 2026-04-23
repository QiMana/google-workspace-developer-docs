---
source: https://developers.google.com/workspace/keep/api/reference/rest/v1/notes/list
root: workspace
fetched_at: 2026-04-23T15:30:09.024Z
---

# Method: notes.list

Lists notes.

Every list call returns a page of results with `pageSize` as the upper bound of returned items. A `pageSize` of zero allows the server to choose the upper bound.

The ListNotesResponse contains at most `pageSize` entries. If there are more things left to list, it provides a `nextPageToken` value. (Page tokens are opaque values.)

To get the next page of results, copy the result's `nextPageToken` into the next request's `pageToken`. Repeat until the `nextPageToken` returned with a page of results is empty.

notes.list return consistent results in the face of concurrent changes, or signals that it cannot with an ABORTED error.

### HTTP request

`GET https://keep.googleapis.com/v1/notes`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of results to return.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The previous page's <code>nextPageToken</code> field.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Filter for list results. If no filter is supplied, the <code>trashed</code> filter is applied by default. Valid fields to filter by are: <code>createTime</code>, <code>updateTime</code>, <code>trashTime</code>, and <code>trashed</code>.</p><p>Filter syntax follows the <a href="https://aip.dev/160">Google AIP filtering spec</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

The response when listing a page of notes.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "notes": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>notes[]</code></td><td><p>A page of notes.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Next page's <code>pageToken</code> field.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/keep`
- `https://www.googleapis.com/auth/keep.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
