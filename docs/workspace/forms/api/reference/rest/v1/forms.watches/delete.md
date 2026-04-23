---
source: https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.watches/delete
root: workspace
fetched_at: 2026-04-23T15:28:46.236Z
---

# Method: forms.watches.delete

Delete a watch.

### HTTP request

`DELETE https://forms.googleapis.com/v1/forms/{formId}/watches/{watchId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>formId</code></td><td><p><code>string</code></p><p>Required. The ID of the Form.</p></td></tr><tr><td><code>watchId</code></td><td><p><code>string</code></p><p>Required. The ID of the Watch to delete.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.readonly`
- `           https://www.googleapis.com/auth/forms.body`
- `           https://www.googleapis.com/auth/forms.body.readonly`
- `           https://www.googleapis.com/auth/forms.responses.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
