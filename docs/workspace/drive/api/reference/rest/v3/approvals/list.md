---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/approvals/list
root: workspace
fetched_at: 2026-04-23T15:27:59.010Z
---

# Method: approvals.list

Lists the Approvals on a file.

### HTTP request

`GET https://www.googleapis.com/drive/v3/files/{fileId}/approvals`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>Required. The ID of the file the Approval is on.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of Approvals to return. When not set, at most 100 Approvals will be returned.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The token for continuing a previous list request on the next page. This should be set to the value of nextPageToken from a previous response.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

The response of an Approvals list request.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "items": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always drive#approvalList</p></td></tr><tr><td><code>items[]</code></td><td><p>The list of Approvals. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The page token for the next page of Approvals. This will be absent if the end of the Approvals list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
