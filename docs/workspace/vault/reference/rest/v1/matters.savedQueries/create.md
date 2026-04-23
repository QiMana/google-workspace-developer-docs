---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.savedQueries/create
root: workspace
fetched_at: 2026-04-23T15:32:07.951Z
---

# Method: matters.savedQueries.create

Creates a saved query.

### HTTP request

`POST https://vault.googleapis.com/v1/matters/{matterId}/savedQueries`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The ID of the matter to create the saved query in.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
