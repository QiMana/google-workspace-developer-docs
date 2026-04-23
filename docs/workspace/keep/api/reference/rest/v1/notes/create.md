---
source: https://developers.google.com/workspace/keep/api/reference/rest/v1/notes/create
root: workspace
fetched_at: 2026-04-23T15:30:08.754Z
---

# Method: notes.create

## Method: notes.create

Creates a new note.

### HTTP request

`POST https://keep.googleapis.com/v1/notes`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body contains an instance of `Note`.

### Response body

If successful, the response body contains a newly created instance of `Note`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/keep`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
