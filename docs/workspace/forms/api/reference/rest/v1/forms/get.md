---
source: https://developers.google.com/workspace/forms/api/reference/rest/v1/forms/get
root: workspace
fetched_at: 2026-04-23T15:28:46.526Z
---

# Method: forms.get

Get a form.

### HTTP request

`GET https://forms.googleapis.com/v1/forms/{formId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>formId</code></td><td><p><code>string</code></p><p>Required. The form ID.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.readonly`
- `           https://www.googleapis.com/auth/forms.body`
- `           https://www.googleapis.com/auth/forms.body.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
