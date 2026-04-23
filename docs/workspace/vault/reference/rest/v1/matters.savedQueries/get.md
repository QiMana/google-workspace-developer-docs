---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.savedQueries/get
root: workspace
fetched_at: 2026-04-23T15:32:08.346Z
---

# Method: matters.savedQueries.get

Retrieves the specified saved query.

### HTTP request

`GET https://vault.googleapis.com/v1/matters/{matterId}/savedQueries/{savedQueryId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The ID of the matter to get the saved query from.</p></td></tr><tr><td><code>savedQueryId</code></td><td><p><code>string</code></p><p>ID of the saved query to retrieve.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/ediscovery.readonly`
- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
