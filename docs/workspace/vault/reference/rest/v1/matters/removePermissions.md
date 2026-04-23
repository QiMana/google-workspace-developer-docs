---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters/removePermissions
root: workspace
fetched_at: 2026-04-23T15:32:09.350Z
---

# Method: matters.removePermissions

Removes an account as a matter collaborator.

### HTTP request

`POST https://vault.googleapis.com/v1/matters/{matterId}:removePermissions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "accountId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>accountId</code></td><td><p><code>string</code></p><p>The account ID.</p></td></tr></tbody></table>

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
