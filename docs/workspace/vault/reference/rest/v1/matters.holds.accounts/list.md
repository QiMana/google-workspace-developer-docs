---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds.accounts/list
root: workspace
fetched_at: 2026-04-23T15:32:06.456Z
---

# Method: matters.holds.accounts.list

Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.

### HTTP request

`GET https://vault.googleapis.com/v1/matters/{matterId}/holds/{holdId}/accounts`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID.</p></td></tr><tr><td><code>holdId</code></td><td><p><code>string</code></p><p>The hold ID.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Returns a list of the accounts covered by a hold.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "accounts": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>accounts[]</code></td><td><p>The held accounts on a hold.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/ediscovery.readonly`
- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
