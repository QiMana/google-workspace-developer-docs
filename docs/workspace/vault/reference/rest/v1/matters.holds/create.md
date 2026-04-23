---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds/create
root: workspace
fetched_at: 2026-04-23T15:32:06.884Z
---

# Method: matters.holds.create

Creates a hold in the specified matter.

### HTTP request

`POST https://vault.googleapis.com/v1/matters/{matterId}/holds`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
