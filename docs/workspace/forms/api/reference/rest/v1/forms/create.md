---
source: https://developers.google.com/workspace/forms/api/reference/rest/v1/forms/create
root: workspace
fetched_at: 2026-04-23T15:28:45.424Z
---

# Method: forms.create

Create a new form using the title given in the provided form message in the request.

**Important:** Only the and fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call `forms.create` to create an empty form with a title and (optional) document title, and then call `forms.update` to add the items.

### HTTP request

`POST https://forms.googleapis.com/v1/forms`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>unpublished</code></td><td><p><code>boolean</code></p><p>Optional. Whether the form is unpublished. If set to <code>true</code>, the form doesn't accept responses. If set to <code>false</code> or unset, the form is published and accepts responses.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/forms.body`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
