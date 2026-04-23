---
source: https://developers.google.com/workspace/forms/api/reference/rest/v1/forms/setPublishSettings
root: workspace
fetched_at: 2026-04-23T15:28:46.342Z
---

# Method: forms.setPublishSettings

Updates the publish settings of a form.

Legacy forms aren't supported because they don't have the `publishSettings` field.

### HTTP request

`POST https://forms.googleapis.com/v1/forms/{formId}:setPublishSettings`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>formId</code></td><td><p><code>string</code></p><p>Required. The ID of the form. You can get the id from field.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "publishSettings": {
    
  },
  "updateMask": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>publishSettings</code></td><td><p>Required. The desired publish settings to apply to the form.</p></td></tr><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Optional. The <code>publishSettings</code> fields to update. This field mask accepts the following values:</p><ul><li><code>publishState</code>: Updates or replaces all <code>publishState</code> settings.</li><li><code>"*"</code>: Updates or replaces all <code>publishSettings</code> fields.</li></ul><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

### Response body

The response of a `forms.setPublishSettings` request.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "formId": string,
  "publishSettings": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>formId</code></td><td><p><code>string</code></p><p>Required. The ID of the Form. This is same as the field.</p></td></tr><tr><td><code>publishSettings</code></td><td><p>The publish settings of the form.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/forms.body`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
