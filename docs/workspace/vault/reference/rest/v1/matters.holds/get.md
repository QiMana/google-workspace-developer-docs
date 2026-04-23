---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds/get
root: workspace
fetched_at: 2026-04-23T15:32:08.195Z
---

# Method: matters.holds.get

Gets the specified hold.

### HTTP request

`GET https://vault.googleapis.com/v1/matters/{matterId}/holds/{holdId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID.</p></td></tr><tr><td><code>holdId</code></td><td><p><code>string</code></p><p>The hold ID.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>view</code></td><td><p><code>enum (<code>HoldView</code>)</code></p><p>The amount of detail to return for a hold.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/ediscovery.readonly`
- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
