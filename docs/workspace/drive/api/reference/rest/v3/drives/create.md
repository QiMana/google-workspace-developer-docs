---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/drives/create
root: workspace
fetched_at: 2026-04-23T15:28:02.643Z
---

# Method: drives.create

Creates a shared drive. For more information, see [Manage shared drives](../../../../guides/manage-shareddrives.md).

### HTTP request

`POST https://www.googleapis.com/drive/v3/drives`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>requestId</code></td><td><p><code>string</code></p><p>Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/drive`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
