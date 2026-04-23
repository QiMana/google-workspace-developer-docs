---
source: https://developers.google.com/workspace/keep/api/reference/rest/v1/notes/get
root: workspace
fetched_at: 2026-04-23T15:30:09.117Z
---

# Method: notes.get

Gets a note.

### HTTP request

`GET https://keep.googleapis.com/v1/{name=notes/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Name of the resource.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/keep`
- `https://www.googleapis.com/auth/keep.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
