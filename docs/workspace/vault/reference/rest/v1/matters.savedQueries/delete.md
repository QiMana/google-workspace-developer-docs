---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.savedQueries/delete
root: workspace
fetched_at: 2026-04-23T15:32:07.794Z
---

# Method: matters.savedQueries.delete

Deletes the specified saved query.

### HTTP request

`DELETE https://vault.googleapis.com/v1/matters/{matterId}/savedQueries/{savedQueryId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The ID of the matter to delete the saved query from.</p></td></tr><tr><td><code>savedQueryId</code></td><td><p><code>string</code></p><p>ID of the saved query to delete.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
