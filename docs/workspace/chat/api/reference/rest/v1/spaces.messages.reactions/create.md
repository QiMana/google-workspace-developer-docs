---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create
root: workspace
fetched_at: 2026-04-23T15:25:06.734Z
---

# Method: spaces.messages.reactions.create

## Page Summary

- Creates a reaction and adds it to a Google Chat message using unicode emojis.
- Requires user authentication and authorization with specific scopes for accessing and modifying chat messages.
- The API endpoint uses a POST request to `https://chat.googleapis.com/v1/{parent=spaces/*/messages/*}/reactions` with path and request body parameters to specify the message and reaction.
- A successful response returns the newly created reaction object.

Creates a reaction and adds it to a message. For an example, see [Add a reaction to a message](../../../../../create-reactions.md).

Requires [user authentication](../../../../../authenticate-authorize-chat-user.md) with one of the following [authorization scopes](../../../../../authenticate-authorize.md#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.messages.reactions.create`
- `https://www.googleapis.com/auth/chat.messages.reactions`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)

### HTTP request

`POST https://chat.googleapis.com/v1/{parent=spaces/*/messages/*}/reactions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The message where the reaction is created.</p><p>Format: <code>spaces/{space}/messages/{message}</code></p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.reactions`
- `https://www.googleapis.com/auth/chat.messages.reactions.create`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
