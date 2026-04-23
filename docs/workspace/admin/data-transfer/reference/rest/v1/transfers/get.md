---
source: https://developers.google.com/workspace/admin/data-transfer/reference/rest/v1/transfers/get
root: workspace
fetched_at: 2026-04-23T15:23:33.060Z
---

# Method: transfers.get

Retrieves a data transfer request by its resource ID.

### HTTP request

`GET https://admin.googleapis.com/admin/datatransfer/v1/transfers/{dataTransferId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>dataTransferId</code></td><td><p><code>string</code></p><p>ID of the resource to be retrieved. This is returned in the response from the insert method.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.datatransfer`
- `           https://www.googleapis.com/auth/admin.datatransfer.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
