---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/schemas/patch
root: workspace
fetched_at: 2026-04-23T15:23:45.034Z
---

# Method: schemas.patch

Patches a schema.

### HTTP request

`PATCH https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Immutable ID of the Google Workspace account.</p></td></tr><tr><td><code>schemaKey</code></td><td><p><code>string</code></p><p>Name or immutable ID of the schema.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.userschema`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
