---
source: https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/batchUpdate
root: workspace
fetched_at: 2026-04-23T15:31:55.748Z
---

# Method: presentations.batchUpdate

Applies one or more updates to the presentation.

Each `request` is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied.

Some requests have `replies` to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests.

For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order.

Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.

### HTTP request

`POST https://slides.googleapis.com/v1/presentations/{presentationId}:batchUpdate`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>presentationId</code></td><td><p><code>string</code></p><p>The presentation to apply the updates to.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "requests": [
    {
      object (Request)
    }
  ],
  "writeControl": {
    object (WriteControl)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requests[]</code></td><td><p><code>object (<code>Request</code>)</code></p><p>A list of updates to apply to the presentation.</p></td></tr><tr><td><code>writeControl</code></td><td><p><code>object (<code>WriteControl</code>)</code></p><p>Provides control over how write requests are executed.</p></td></tr></tbody></table>

### Response body

Response message from a batch update.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "presentationId": string,
  "replies": [
    {
      object (Response)
    }
  ],
  "writeControl": {
    object (WriteControl)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>presentationId</code></td><td><p><code>string</code></p><p>The presentation the updates were applied to.</p></td></tr><tr><td><code>replies[]</code></td><td><p><code>object (<code>Response</code>)</code></p><p>The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.</p></td></tr><tr><td><code>writeControl</code></td><td><p><code>object (<code>WriteControl</code>)</code></p><p>The updated write control after applying the request.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/presentations`
- `https://www.googleapis.com/auth/spreadsheets`
- `https://www.googleapis.com/auth/spreadsheets.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## WriteControl

Provides control over how write requests are executed.

JSON representation

```
{
  "requiredRevisionId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requiredRevisionId</code></td><td><p><code>string</code></p><p>The of the presentation required for the write request. If specified and the required revision ID doesn't match the presentation's current revision ID, the request is not processed and returns a 400 bad request error.</p><p>When a required revision ID is returned in a response, it indicates the revision ID of the document after the request was applied.</p></td></tr></tbody></table>
