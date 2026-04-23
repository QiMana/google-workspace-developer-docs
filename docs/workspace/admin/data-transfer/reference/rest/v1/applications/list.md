---
source: https://developers.google.com/workspace/admin/data-transfer/reference/rest/v1/applications/list
root: workspace
fetched_at: 2026-04-23T15:23:32.669Z
---

# Method: applications.list

Lists the applications available for data transfer for a customer.

### HTTP request

`GET https://admin.googleapis.com/admin/datatransfer/v1/applications`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Immutable ID of the Google Workspace account.</p></td></tr><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of results to return. Default is 100.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token to specify next page in the list.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Template for a collection of Applications.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "applications": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies the resource as a collection of Applications.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>applications[]</code></td><td><p>The list of applications that support data transfer and are also installed for the customer.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to specify the next page in the list.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.datatransfer`
- `           https://www.googleapis.com/auth/admin.datatransfer.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
