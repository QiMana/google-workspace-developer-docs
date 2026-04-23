---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2beta/labels/publish
root: workspace
fetched_at: 2026-04-23T15:28:18.366Z
---

# Method: labels.publish

Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information.

Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed.

Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: \* The label cannot be directly deleted. It must be disabled first, then deleted. \* Field.FieldType cannot be changed. \* Changes to Field validation options cannot reject something that was previously accepted. \* Reducing the max entries.

### HTTP request

`POST https://drivelabels.googleapis.com/v2beta/{name=labels/*}:publish`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Label resource name.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "useAdminAccess": boolean,
  "writeControl": {
    object (WriteControl)
  },
  "languageCode": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Set to <code>true</code> in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.</p></td></tr><tr><td><code>writeControl</code></td><td><p><code>object (<code>WriteControl</code>)</code></p><p>Provides control over how write requests are executed. Defaults to unset, which means last write wins.</p></td></tr><tr><td><code>languageCode</code></td><td><p><code>string</code></p><p>The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.</p></td></tr></tbody></table>

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive.labels`
- `           https://www.googleapis.com/auth/drive.admin.labels`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
