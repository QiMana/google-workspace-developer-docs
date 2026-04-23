---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/accessproposals/list
root: workspace
fetched_at: 2026-04-23T15:27:59.423Z
---

# Method: accessproposals.list

List the access proposals on a file. For more information, see [Manage pending access proposals](../../../../guides/pending-access.md).

Note: Only approvers are able to list access proposals on a file. If the user isn't an approver, a 403 error is returned.

### HTTP request

`GET https://www.googleapis.com/drive/v3/files/{fileId}/accessproposals`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>Required. The ID of the item the request is on.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. The continuation token on the list of access requests.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The number of results per page.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

The response to an access proposal list request.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "accessProposals": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>accessProposals[]</code></td><td><p>The list of access proposals. This field is only populated in Drive API v3.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The continuation token for the next page of results. This will be absent if the end of the results list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
