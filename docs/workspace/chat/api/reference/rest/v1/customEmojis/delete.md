---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/delete
root: workspace
fetched_at: 2026-04-23T15:25:04.057Z
---

# Method: customEmojis.delete

## Page Summary

- Deletes a custom emoji using the DELETE HTTP request method with required user authentication.
- Requires the `chat.customemojis` OAuth scope for authorization.
- The custom emoji is identified by its resource name, specified as a path parameter called `name`.
- The request body must be empty, and a successful deletion results in an empty response body.
- This feature is currently available as a developer preview within the Google Workspace Developer Preview Program.

Deletes a custom emoji. By default, users can only delete custom emoji they created. [Emoji managers](https://support.google.com/a/answer/12850085) assigned by the administrator can delete any custom emoji in the organization. See [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149).

Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.customemojis`

### HTTP request

`DELETE https://chat.googleapis.com/v1/{name=customEmojis/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the custom emoji to delete.</p><p>Format: <code>customEmojis/{customEmoji}</code></p><p>You can use the emoji name as an alias for <code>{customEmoji}</code>. For example, <code>customEmojis/:example-emoji:</code> where <code>:example-emoji:</code> is the emoji name for a custom emoji.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.customemojis`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
