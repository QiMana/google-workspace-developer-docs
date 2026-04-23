---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2beta/labels/updateLabelEnabledAppSettings
root: workspace
fetched_at: 2026-04-23T15:28:19.265Z
---

# Method: labels.updateLabelEnabledAppSettings

Updates a Label's EabledAppSettings. Enabling a Label in a Workspace Application allows it to be used in that application. This change is not revisioned, does not require publishing, and takes effect immediately.

### HTTP request

`POST https://drivelabels.googleapis.com/v2beta/{name=labels/*}:updateLabelEnabledAppSettings`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The resource name of the Label to update. The resource name of the Label to update.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "enabledAppSettings": {
    
  },
  "useAdminAccess": boolean,
  "languageCode": string,
  "view": enum (LabelView)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>enabledAppSettings</code></td><td><p>Required. The new <code>EnabledAppSettings</code> value for the Label.</p></td></tr><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Optional. Set to <code>true</code> in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.</p></td></tr><tr><td><code>languageCode</code></td><td><p><code>string</code></p><p>Optional. The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.</p></td></tr><tr><td><code>view</code></td><td><p><code>enum (<code>LabelView</code>)</code></p><p>Optional. When specified, only certain fields belonging to the indicated view will be returned.</p></td></tr></tbody></table>
