---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters/update
root: workspace
fetched_at: 2026-04-23T15:32:08.992Z
---

# Method: matters.update

Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.

### HTTP request

`PUT https://vault.googleapis.com/v1/matters/{matterId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
