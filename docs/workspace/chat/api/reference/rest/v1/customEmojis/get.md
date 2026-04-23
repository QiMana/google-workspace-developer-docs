---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/get
root: workspace
fetched_at: 2026-04-23T15:25:03.927Z
---

# Method: customEmojis.get

## Page Summary

- This feature lets you retrieve details about a specific custom emoji using the emoji name or ID.
- You can access this feature during the Google Workspace Developer Preview Program and it requires user authentication.
- The request is made via a `GET` method to a specific URL with the emoji name or ID.
- The response will contain information on the custom emoji in the `CustomEmoji` format.
- You'll need specific authorization scopes related to custom emojis to use this functionality.

Returns details about a custom emoji.

Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085).

Requires [user authentication](../../../../../authenticate-authorize-chat-user.md) with one of the following [authorization scopes](../../../../../authenticate-authorize.md#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.customemojis.readonly`
- `https://www.googleapis.com/auth/chat.customemojis`

### HTTP request

`GET https://chat.googleapis.com/v1/{name=customEmojis/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the custom emoji.</p><p>Format: <code>customEmojis/{customEmoji}</code></p><p>You can use the emoji name as an alias for <code>{customEmoji}</code>. For example, <code>customEmojis/:example-emoji:</code> where <code>:example-emoji:</code> is the emoji name for a custom emoji.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.customemojis`
- `https://www.googleapis.com/auth/chat.customemojis.readonly`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
