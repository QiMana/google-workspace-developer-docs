---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/about/get
root: workspace
fetched_at: 2026-04-23T15:27:48.745Z
---

# Method: about.get

Gets the information about the current user along with Drive API settings

### HTTP request

`GET https://www.googleapis.com/drive/v2/about`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>includeSubscribed</code></td><td><p><code>boolean</code></p><p>Whether to count changes outside the My Drive hierarchy. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the <code>maxChangeIdCount</code>.</p></td></tr><tr><td><code>maxChangeIdCount</code></td><td><p><code>string (int64 format)</code></p><p>Maximum number of remaining change IDs to count</p></td></tr><tr><td><code>startChangeId</code></td><td><p><code>string (int64 format)</code></p><p>Change ID to start counting from when calculating number of remaining change IDs</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.photos.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
