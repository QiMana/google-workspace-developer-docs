---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/disable
root: workspace
fetched_at: 2026-04-23T15:28:12.326Z
---

# Method: labels.disable

Disable a published label. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label).

Disabling a label will result in a new disabled published revision based on the current published revision. If there's a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted.

Once disabled, a label may be deleted with `labels.delete`.

### HTTP request

`POST https://drivelabels.googleapis.com/v2/{name=labels/*}:disable`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Label resource name.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "updateMask": string,
  "useAdminAccess": boolean,
  "writeControl": {
    object (WriteControl)
  },
  "disabledPolicy": {
    
  },
  "languageCode": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>disabledPolicy</code> is implied and should not be specified. A single <code>*</code> can be used as a short-hand for updating every field.</p></td></tr><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Set to <code>true</code> in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access.</p></td></tr><tr><td><code>writeControl</code></td><td><p><code>object (<code>WriteControl</code>)</code></p><p>Provides control over how write requests are executed. Defaults to unset, which means the last write wins.</p></td></tr><tr><td><code>disabledPolicy</code></td><td><p>Disabled policy to use.</p></td></tr><tr><td><code>languageCode</code></td><td><p><code>string</code></p><p>The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.</p></td></tr></tbody></table>

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive.labels`
- `           https://www.googleapis.com/auth/drive.admin.labels`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
