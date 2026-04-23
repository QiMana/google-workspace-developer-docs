---
source: https://developers.google.com/workspace/admin/data-transfer/reference/rest/v1/transfers/list
root: workspace
fetched_at: 2026-04-23T15:23:31.976Z
---

# Method: transfers.list

Lists the transfers for a customer by source user, destination user, or status.

### HTTP request

`GET https://admin.googleapis.com/admin/datatransfer/v1/transfers`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Immutable ID of the Google Workspace account.</p></td></tr><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of results to return. Default is 100.</p></td></tr><tr><td><code>newOwnerUserId</code></td><td><p><code>string</code></p><p>Destination user's profile ID.</p></td></tr><tr><td><code>oldOwnerUserId</code></td><td><p><code>string</code></p><p>Source user's profile ID.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token to specify the next page in the list.</p></td></tr><tr><td><code>status</code></td><td><p><code>string</code></p><p>Status of the transfer.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Template for a collection of DataTransfer resources.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "dataTransfers": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies the resource as a collection of data transfer requests.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>dataTransfers[]</code></td><td><p>transfers.list of data transfer requests.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to specify the next page in the list.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.datatransfer`
- `           https://www.googleapis.com/auth/admin.datatransfer.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
