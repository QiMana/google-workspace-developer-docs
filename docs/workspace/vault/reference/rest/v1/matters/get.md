---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters/get
root: workspace
fetched_at: 2026-04-23T15:32:09.231Z
---

# Method: matters.get

Gets the specified matter.

### HTTP request

`GET https://vault.googleapis.com/v1/matters/{matterId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>view</code></td><td><p><code>enum (<code>MatterView</code>)</code></p><p>Specifies how much information about the matter to return in the response.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/ediscovery.readonly`
- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
