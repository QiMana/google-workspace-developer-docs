---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/drives/unhide
root: workspace
fetched_at: 2026-04-23T15:27:51.503Z
---

# Method: drives.unhide

Restores a shared drive to the default view.

### HTTP request

`POST https://www.googleapis.com/drive/v2/drives/{driveId}/unhide`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>driveId</code></td><td><p><code>string</code></p><p>The ID of the shared drive.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/drive`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
