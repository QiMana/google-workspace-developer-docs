---
source: https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/batchUpdate
root: workspace
fetched_at: 2026-04-23T15:27:14.124Z
---

# Method: documents.batchUpdate

Applies one or more updates to the document.

Each `request` is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied.

Some requests have `replies` to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests.

For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order.

Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.

### HTTP request

`POST https://docs.googleapis.com/v1/documents/{documentId}:batchUpdate`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>documentId</code></td><td><p><code>string</code></p><p>The ID of the document to update.</p></td></tr></tbody></table>

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requests[]</code></td><td><p><code>object (<code>Request</code>)</code></p><p>A list of updates to apply to the document.</p></td></tr><tr><td><code>writeControl</code></td><td><p><code>object (<code>WriteControl</code>)</code></p><p>Provides control over how write requests are executed.</p></td></tr></tbody></table>

### Response body

Response message from a `documents.batchUpdate` request.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "documentId": string,
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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>documentId</code></td><td><p><code>string</code></p><p>The ID of the document to which the updates were applied to.</p></td></tr><tr><td><code>replies[]</code></td><td><p><code>object (<code>Response</code>)</code></p><p>The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.</p></td></tr><tr><td><code>writeControl</code></td><td><p><code>object (<code>WriteControl</code>)</code></p><p>The updated write control after applying the request.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/documents`
- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## WriteControl

Provides control over how write requests are executed.

JSON representation

```
{

  "requiredRevisionId": string,
  "targetRevisionId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>control</code>. Determines the revision of the document to write to and how the request should behave if that revision is not the current revision of the document. If neither field is specified, updates are applied to the latest revision. <code>control</code> can be only one of the following:</td></tr><tr><td><code>requiredRevisionId</code></td><td><p><code>string</code></p><p>The optional of the document the write request is applied to. If this is not the latest revision of the document, the request is not processed and returns a 400 bad request error.</p><p>When a required revision ID is returned in a response, it indicates the revision ID of the document after the request was applied.</p></td></tr><tr><td><code>targetRevisionId</code></td><td><p><code>string</code></p><p>The optional target of the document the write request is applied to.</p><p>If collaborator changes have occurred after the document was read using the API, the changes produced by this write request are applied against the collaborator changes. This results in a new revision of the document that incorporates both the collaborator changes and the changes in the request, with the Docs server resolving conflicting changes. When using target revision ID, the API client can be thought of as another collaborator of the document.</p><p>The target revision ID can only be used to write to recent versions of a document. If the target revision is too far behind the latest revision, the request is not processed and returns a 400 bad request error. The request should be tried again after retrieving the latest version of the document. Usually a revision ID remains valid for use as a target revision for several minutes after it's read, but for frequently edited documents this window might be shorter.</p></td></tr></tbody></table>
