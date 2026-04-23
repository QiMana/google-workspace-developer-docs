---
source: https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations.pages/get
root: workspace
fetched_at: 2026-04-23T15:31:51.706Z
---

# Method: presentations.pages.get

Gets the latest version of the specified page in the presentation.

### HTTP request

`GET https://slides.googleapis.com/v1/presentations/{presentationId}/pages/{pageObjectId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>presentationId</code></td><td><p><code>string</code></p><p>The ID of the presentation to retrieve.</p></td></tr><tr><td><code>pageObjectId</code></td><td><p><code>string</code></p><p>The object ID of the page to retrieve.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/presentations`
- `https://www.googleapis.com/auth/presentations.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
