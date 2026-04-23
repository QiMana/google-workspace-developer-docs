---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/get
root: workspace
fetched_at: 2026-04-23T15:28:12.035Z
---

# Method: labels.get

Get a label by its resource name. For more information, see [Search for labels](https://developers.google.com/workspace/drive/labels/guides/search-label).

Resource name may be any of:

- `labels/{id}` - See `labels/{id}@latest`
- `labels/{id}@latest` - Gets the latest revision of the label.
- `labels/{id}@published` - Gets the current published revision of the label.
- `labels/{id}@{revisionId}` - Gets the label at the specified revision ID.

### HTTP request

`GET https://drivelabels.googleapis.com/v2/{name=labels/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Label resource name.</p><p>May be any of:</p><ul><li><code>labels/{id}</code> (equivalent to labels/{id}@latest)</li><li><code>labels/{id}@latest</code></li><li><code>labels/{id}@published</code></li><li><code>labels/{id}@{revisionId}</code></li></ul></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Set to <code>true</code> in order to use the user's admin credentials. The server verifies that the user is an admin for the label before allowing access.</p></td></tr><tr><td><code>languageCode</code></td><td><p><code>string</code></p><p>The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used.</p></td></tr><tr><td><code>view</code></td><td><p><code>enum (<code>LabelView</code>)</code></p><p>When specified, only certain fields belonging to the indicated view are returned.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive.labels`
- `           https://www.googleapis.com/auth/drive.labels.readonly`
- `           https://www.googleapis.com/auth/drive.admin.labels`
- `           https://www.googleapis.com/auth/drive.admin.labels.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
