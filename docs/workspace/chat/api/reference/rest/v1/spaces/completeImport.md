---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/completeImport
root: workspace
fetched_at: 2026-04-23T15:25:08.032Z
---

# Method: spaces.completeImport

## Page Summary

- Completes the import process for a specified space and makes it visible to users, requiring app authentication and domain-wide delegation.
- Uses a POST HTTP request with the URL `https://chat.googleapis.com/v1/{name=spaces/*}:completeImport` and an empty request body.
- Requires the `https://www.googleapis.com/auth/chat.import` OAuth scope for authorization.
- If successful, the response body provides a JSON representation containing the imported space's details.

Completes the [import process](https://developers.google.com/workspace/chat/import-data) for the specified space and makes it visible to users.

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) and domain-wide delegation with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.import`

For more information, see [Authorize Google Chat apps to import data](https://developers.google.com/workspace/chat/authorize-import).

### HTTP request

`POST https://chat.googleapis.com/v1/{name=spaces/*}:completeImport`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the import mode space.</p><p>Format: <code>spaces/{space}</code></p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response message for completing the import process for a space.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "space": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>space</code></td><td><p>The import mode space.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.import`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
