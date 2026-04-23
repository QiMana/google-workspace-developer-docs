---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/properties/patch
root: workspace
fetched_at: 2026-04-23T15:27:57.182Z
---

# Method: properties.patch

Updates a property.

### HTTP request

`PATCH https://www.googleapis.com/drive/v2/files/{fileId}/properties/{propertyKey}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file.</p></td></tr><tr><td><code>propertyKey</code></td><td><p><code>string</code></p><p>The key of the property.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>visibility</code></td><td><p><code>string</code></p><p>The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
