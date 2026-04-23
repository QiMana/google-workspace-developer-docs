---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/files/listLabels
root: workspace
fetched_at: 2026-04-23T15:28:04.587Z
---

# Method: files.listLabels

Lists the labels on a file. For more information, see [List labels on a file](../../../../guides/list-labels.md).

### HTTP request

`GET https://www.googleapis.com/drive/v3/files/{fileId}/listLabels`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID for the file.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>The maximum number of labels to return per page. When not set, defaults to 100.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The token for continuing a previous list request on the next page. This should be set to the value of <code>nextPageToken</code> from the previous response.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A list of labels applied to a file.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "labels": [
    {
      object (Label)
    }
  ],
  "nextPageToken": string,
  "kind": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>labels[]</code></td><td><p><code>object (<code>Label</code>)</code></p><p>The list of labels.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The page token for the next page of labels. This field will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always <code>"drive#labelList"</code>.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.meet.readonly`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
