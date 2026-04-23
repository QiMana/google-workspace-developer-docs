---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds/update
root: workspace
fetched_at: 2026-04-23T15:32:08.128Z
---

# Method: matters.holds.update

Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.

### HTTP request

`PUT https://vault.googleapis.com/v1/matters/{matterId}/holds/{holdId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID.</p></td></tr><tr><td><code>holdId</code></td><td><p><code>string</code></p><p>The ID of the hold.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
