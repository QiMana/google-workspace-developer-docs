---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/delete
root: workspace
fetched_at: 2026-04-23T15:25:06.660Z
---

# Method: spaces.messages.reactions.delete

## Page Summary

- Deletes a reaction, specifically unicode emojis, from a message within Google Chat spaces.
- Requires user authentication and utilizes a DELETE HTTP request with specific path parameters to target the reaction.
- The request body should be empty, and a successful deletion results in an empty response body.
- Authorization is necessary, using one of the specified OAuth scopes for chat import, messages, or message reactions.

Deletes a reaction to a message. For an example, see [Delete a reaction](../../../../../delete-reactions.md).

Requires [user authentication](../../../../../authenticate-authorize-chat-user.md) with one of the following [authorization scopes](../../../../../authenticate-authorize.md#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.messages.reactions`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)

### HTTP request

`DELETE https://chat.googleapis.com/v1/{name=spaces/*/messages/*/reactions/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Name of the reaction to delete.</p><p>Format: <code>spaces/{space}/messages/{message}/reactions/{reaction}</code></p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.reactions`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
