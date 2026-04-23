---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds/addHeldAccounts
root: workspace
fetched_at: 2026-04-23T15:32:06.597Z
---

# Method: matters.holds.addHeldAccounts

Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.

### HTTP request

`POST https://vault.googleapis.com/v1/matters/{matterId}/holds/{holdId}:addHeldAccounts`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID.</p></td></tr><tr><td><code>holdId</code></td><td><p><code>string</code></p><p>The hold ID.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "emails": [
    string
  ],
  "accountIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>emails[]</code></td><td><p><code>string</code></p><p>A comma-separated list of the emails of the accounts to add to the hold. Specify either <strong>emails</strong> or <strong>accountIds</strong>, but not both.</p></td></tr><tr><td><code>accountIds[]</code></td><td><p><code>string</code></p><p>A comma-separated list of the account IDs of the accounts to add to the hold. Specify either <strong>emails</strong> or <strong>accountIds</strong>, but not both.</p></td></tr></tbody></table>

### Response body

Response for batch create held accounts.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "responses": [
    {
      object (AddHeldAccountResult)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>responses[]</code></td><td><p><code>object (<code>AddHeldAccountResult</code>)</code></p><p>The list of responses, in the same order as the batch request.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## AddHeldAccountResult

The status of each account creation, and the **HeldAccount**, if successful.

JSON representation

```
{
  "account": {
    object (HeldAccount)
  },
  "status": {
    object (Status)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>account</code></td><td><p><code>object (<code>HeldAccount</code>)</code></p><p>Returned when the account was successfully created.</p></td></tr><tr><td><code>status</code></td><td><p><code>object (<code>Status</code>)</code></p><p>Reports the request status. If it failed, returns an error message.</p></td></tr></tbody></table>
