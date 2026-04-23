---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds.accounts/create
root: workspace
fetched_at: 2026-04-23T15:32:06.753Z
---

# Method: matters.holds.accounts.create

Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.

### HTTP request

`POST https://vault.googleapis.com/v1/matters/{matterId}/holds/{holdId}/accounts`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID.</p></td></tr><tr><td><code>holdId</code></td><td><p><code>string</code></p><p>The hold ID.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
