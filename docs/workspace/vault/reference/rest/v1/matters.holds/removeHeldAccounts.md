---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds/removeHeldAccounts
root: workspace
fetched_at: 2026-04-23T15:32:08.429Z
---

# Method: matters.holds.removeHeldAccounts

Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.

### HTTP request

`POST https://vault.googleapis.com/v1/matters/{matterId}/holds/{holdId}:removeHeldAccounts`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID.</p></td></tr><tr><td><code>holdId</code></td><td><p><code>string</code></p><p>The hold ID.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "accountIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>accountIds[]</code></td><td><p><code>string</code></p><p>The account IDs of the accounts to remove from the hold.</p></td></tr></tbody></table>

### Response body

Response for batch delete held accounts.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "statuses": [
    {
      object (Status)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>statuses[]</code></td><td><p><code>object (<code>Status</code>)</code></p><p>A list of statuses for the deleted accounts. Results have the same order as the request.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
