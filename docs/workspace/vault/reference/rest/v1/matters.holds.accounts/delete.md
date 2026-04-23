---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds.accounts/delete
root: workspace
fetched_at: 2026-04-23T15:32:06.517Z
---

# Method: matters.holds.accounts.delete

Removes an account from a hold.

### HTTP request

`DELETE https://vault.googleapis.com/v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID.</p></td></tr><tr><td><code>holdId</code></td><td><p><code>string</code></p><p>The hold ID.</p></td></tr><tr><td><code>accountId</code></td><td><p><code>string</code></p><p>The ID of the account to remove from the hold.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
