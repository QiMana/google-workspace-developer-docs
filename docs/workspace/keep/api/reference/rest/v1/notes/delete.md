---
source: https://developers.google.com/workspace/keep/api/reference/rest/v1/notes/delete
root: workspace
fetched_at: 2026-04-23T15:30:08.968Z
---

# Method: notes.delete

Deletes a note. Caller must have the `OWNER` role on the note to delete. Deleting a note removes the resource immediately and cannot be undone. Any collaborators will lose access to the note.

### HTTP request

`DELETE https://keep.googleapis.com/v1/{name=notes/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Name of the note to delete.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/keep`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
