---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/create
root: workspace
fetched_at: 2026-04-23T15:25:06.819Z
---

# Method: spaces.messages.create

## Page Summary

- Creates a message in a Google Chat space, attributing it to the Chat app or user based on authentication.
- Supports sending text, cards, and widgets using app authentication, while user authentication only allows text.
- Offers different message reply options for starting new threads or replying within existing ones.
- Requires specific authorization scopes for the request, such as `chat.bot` or `chat.messages`.
- Provides a way to name a message with a custom ID for easy retrieval and management within a space.

Creates a message in a Google Chat space. For an example, see [Send a message](https://developers.google.com/workspace/chat/create-messages).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope:
	- `https://www.googleapis.com/auth/chat.bot`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.messages.create`
		- `https://www.googleapis.com/auth/chat.messages`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)

Chat attributes the message sender differently depending on the type of authentication that you use in your request.

The following image shows how Chat attributes a message when you use app authentication. Chat displays the Chat app as the message sender. The content of the message can contain text (`text`), cards (`cardsV2`), and accessory widgets (`accessoryWidgets`).

![Message sent with app authentication](https://developers.google.com/workspace/chat/images/message-app-auth.svg)

The following image shows how Chat attributes a message when you use user authentication. Chat displays the user as the message sender and attributes the Chat app to the message by displaying its name. The content of message can only contain text (`text`).

![Message sent with user authentication](https://developers.google.com/workspace/chat/images/message-user-auth.svg)

The maximum message size, including the message contents, is 32,000 bytes.

For [webhook](https://developers.google.com/workspace/chat/quickstart/webhooks) requests, the response doesn't contain the full message. The response only populates the `name` and `thread.name` fields in addition to the information that was in the request.

### HTTP request

`POST https://chat.googleapis.com/v1/{parent=spaces/*}/messages`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The resource name of the space in which to create a message.</p><p>Format: <code>spaces/{space}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>threadKey<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Optional. Deprecated: Use instead. ID for the thread. Supports up to 4000 characters. To start or add to a thread, create a message and specify a <code>threadKey</code> or the . For example usage, see <a href="https://developers.google.com/workspace/chat/create-messages#create-message-thread">Start or reply to a message thread</a>.</p></td></tr><tr><td><code>requestId</code></td><td><p><code>string</code></p><p>Optional. A unique request ID for this message. Specifying an existing request ID returns the message created with that ID instead of creating a new message.</p></td></tr><tr><td><code>messageReplyOption</code></td><td><p><code>enum (<code>MessageReplyOption</code>)</code></p><p>Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces.</p><p>When <a href="https://developers.google.com/workspace/chat/receive-respond-interactions">responding to user interactions</a>, this field is ignored. For interactions within a thread, the reply is created in the same thread. Otherwise, the reply is created as a new thread.</p></td></tr><tr><td><code>messageId</code></td><td><p><code>string</code></p><p>Optional. A custom ID for a message. Lets Chat apps get, update, or delete a message without needing to store the system-assigned ID in the message's resource name (represented in the message <code>name</code> field).</p><p>The value for this field must meet the following requirements:</p><ul><li>Begins with <code>client-</code>. For example, <code>client-custom-name</code> is a valid custom ID, but <code>custom-name</code> is not.</li><li>Contains up to 63 characters and only lowercase letters, numbers, and hyphens.</li><li>Is unique within a space. A Chat app can't use the same custom ID for different messages.</li></ul><p>For details, see <a href="https://developers.google.com/workspace/chat/create-messages#name_a_created_message">Name a message</a>.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.bot`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.create`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

## MessageReplyOption

Specifies how to reply to a message. More states might be added in the future.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>MESSAGE_REPLY_OPTION_UNSPECIFIED</code></td><td>Default. Starts a new thread. Using this option ignores any or that's included.</td></tr><tr><td><code>REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD</code></td><td>Creates the message as a reply to the thread specified by or . If it fails, the message starts a new thread instead.</td></tr><tr><td><code>REPLY_MESSAGE_OR_FAIL</code></td><td>Creates the message as a reply to the thread specified by or . If a new <code>threadKey</code> is used, a new thread is created. If the message creation fails, a <code>NOT_FOUND</code> error is returned instead.</td></tr></tbody></table>
