---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/schemas/delete
root: workspace
fetched_at: 2026-04-23T15:23:43.641Z
---

# Method: schemas.delete

Deletes a schema.

### HTTP request

`DELETE https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Immutable ID of the Google Workspace account.</p></td></tr><tr><td><code>schemaKey</code></td><td><p><code>string</code></p><p>Name or immutable ID of the schema.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response is a generic HTTP response whose format is defined by the method.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.userschema`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
