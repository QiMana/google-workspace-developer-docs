---
source: https://developers.google.com/workspace/admin/data-transfer/reference/rest/v1/applications/get
root: workspace
fetched_at: 2026-04-23T15:23:32.784Z
---

# Method: applications.get

Retrieves information about an application for the given application ID.

### HTTP request

`GET https://admin.googleapis.com/admin/datatransfer/v1/applications/{applicationId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>applicationId</code></td><td><p><code>string (int64 format)</code></p><p>ID of the application resource to be retrieved.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.datatransfer`
- `           https://www.googleapis.com/auth/admin.datatransfer.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
