---
source: https://developers.google.com/workspace/forms/api/reference/rest/v1beta/forms.responses/get
root: workspace
fetched_at: 2026-04-23T15:28:46.463Z
---

# Method: forms.responses.get

Get one response from the form.

### Path parameters

<table><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>formId</code></td><td><p><code>string</code></p><p>Required. The form ID.</p></td></tr><tr><td><code>responseId</code></td><td><p><code>string</code></p><p>Required. The response ID within the form.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `FormResponse`.

### Authorization Scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/forms.responses.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
