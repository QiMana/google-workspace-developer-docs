---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters/create
root: workspace
fetched_at: 2026-04-23T15:32:08.473Z
---

# Method: matters.create

Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.

### HTTP request

`POST https://vault.googleapis.com/v1/matters`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
