---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch
root: workspace
fetched_at: 2026-04-23T15:25:07.185Z
---

# Method: spaces.messages.patch

## Page Summary

- Updates a Google Chat message using the `PATCH` method, preferably over the `update` method which uses `PUT`.
- Supports both app and user authentication, with app authentication limited to updating messages created by the calling Chat app.
- Requires specifying the message to update using its resource name in the URL path and the fields to update using the `updateMask` query parameter.
- Allows creation of a new message if the original is not found when `allowMissing` query parameter is set to `true` and a client-assigned message ID is provided.
- Requires authorization with one of the specified OAuth scopes (`chat.bot`, `chat.import`, or `chat.messages`).

Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/workspace/chat/update-messages).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope:
	- `https://www.googleapis.com/auth/chat.bot`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.messages`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)

When using app authentication, requests can only update messages created by the calling Chat app.

### HTTP request

`PATCH https://chat.googleapis.com/v1/{message.name=spaces/*/messages/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>message.name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the message.</p><p>Format: <code>spaces/{space}/messages/{message}</code></p><p>Where <code>{space}</code> is the ID of the space where the message is posted and <code>{message}</code> is a system-assigned ID for the message. For example, <code>spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB</code>.</p><p>If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing <code>{message}</code> with the value from the <code>clientAssignedMessageId</code> field. For example, <code>spaces/AAAAAAAAAAA/messages/client-custom-name</code>. For details, see <a href="https://developers.google.com/workspace/chat/create-messages#name_a_created_message">Name a message</a>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Required. The field paths to update. Separate multiple values with commas or use <code>*</code> to update all field paths.</p><p>Currently supported field paths:</p><ul><li><p><code>text</code></p></li><li><p><code>attachment</code></p></li><li><p><code>cards</code> (Requires <a href="https://developers.google.com/chat/api/guides/auth/service-accounts">app authentication</a>.)</p></li><li><p><code>cardsV2</code> (Requires <a href="https://developers.google.com/chat/api/guides/auth/service-accounts">app authentication</a>.)</p></li><li><p><code>accessoryWidgets</code> (Requires <a href="https://developers.google.com/chat/api/guides/auth/service-accounts">app authentication</a>.)</p></li><li><p><code>quotedMessageMetadata</code> (Only allows removal of the quoted message.)</p></li></ul></td></tr><tr><td><code>allowMissing</code></td><td><p><code>boolean</code></p><p>Optional. If <code>true</code> and the message isn't found, a new message is created and <code>updateMask</code> is ignored. The specified message ID must be <a href="https://developers.google.com/workspace/chat/create-messages#name_a_created_message">client-assigned</a> or the request fails.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.bot`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.messages`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
