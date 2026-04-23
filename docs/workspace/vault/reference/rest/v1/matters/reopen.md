---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters/reopen
root: workspace
fetched_at: 2026-04-23T15:32:08.813Z
---

# Method: matters.reopen

Reopens the specified matter. Returns the matter with updated state.

### HTTP request

`POST https://vault.googleapis.com/v1/matters/{matterId}:reopen`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response to a ReopenMatterRequest.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "matter": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>matter</code></td><td><p>The updated matter, with state <strong>OPEN</strong>.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
