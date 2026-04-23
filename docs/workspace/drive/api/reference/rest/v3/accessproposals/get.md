---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/accessproposals/get
root: workspace
fetched_at: 2026-04-23T15:27:59.120Z
---

# Method: accessproposals.get

Retrieves an access proposal by ID. For more information, see [Manage pending access proposals](../../../../guides/pending-access.md).

### HTTP request

`GET https://www.googleapis.com/drive/v3/files/{fileId}/accessproposals/{proposalId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>Required. The ID of the item the request is on.</p></td></tr><tr><td><code>proposalId</code></td><td><p><code>string</code></p><p>Required. The ID of the access proposal to resolve.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
