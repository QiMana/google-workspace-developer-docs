---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages
root: workspace
fetched_at: 2026-04-23T15:25:05.536Z
---

# REST Resource: spaces.messages

## Page Summary

- Google Chat messages are the fundamental units of communication within spaces, containing rich content like text, cards, and attachments.
- Messages can be enriched with annotations to highlight user mentions, links, or slash commands, enabling interactive experiences.
- Messages can be organized into threads to facilitate focused conversations within a space.
- Developers can leverage the Chat API's methods to programmatically create, update, and manage messages and their interactions.
- Various widgets like buttons, images, and text paragraphs can be embedded within messages to create dynamic and engaging user interfaces.

## Resource: Message

A message in a Google Chat space.

JSON representation

```
{
  "name": string,
  "sender": {
    object (User)
  },
  "createTime": string,
  "lastUpdateTime": string,
  "deleteTime": string,
  "text": string,
  "formattedText": string,
  "cards": [
    {
      object (Card)
    }
  ],
  "cardsV2": [
    {
      object (CardWithId)
    }
  ],
  "annotations": [
    {
      object (Annotation)
    }
  ],
  "thread": {
    object (Thread)
  },
  "space": {
    
  },
  "fallbackText": string,
  "actionResponse": {
    object (ActionResponse)
  },
  "argumentText": string,
  "slashCommand": {
    object (SlashCommand)
  },
  "attachment": [
    {
      object (Attachment)
    }
  ],
  "matchedUrl": {
    object (MatchedUrl)
  },
  "threadReply": boolean,
  "clientAssignedMessageId": string,
  "emojiReactionSummaries": [
    {
      object (EmojiReactionSummary)
    }
  ],
  "privateMessageViewer": {
    object (User)
  },
  "deletionMetadata": {
    object (DeletionMetadata)
  },
  "quotedMessageMetadata": {
    object (QuotedMessageMetadata)
  },
  "attachedGifs": [
    {
      object (AttachedGif)
    }
  ],
  "accessoryWidgets": [
    {
      object (AccessoryWidget)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the message.</p><p>Format: <code>spaces/{space}/messages/{message}</code></p><p>Where <code>{space}</code> is the ID of the space where the message is posted and <code>{message}</code> is a system-assigned ID for the message. For example, <code>spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB</code>.</p><p>If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing <code>{message}</code> with the value from the <code>clientAssignedMessageId</code> field. For example, <code>spaces/AAAAAAAAAAA/messages/client-custom-name</code>. For details, see <a href="https://developers.google.com/workspace/chat/create-messages#name_a_created_message">Name a message</a>.</p></td></tr><tr><td><code>sender</code></td><td><p><code>object (<code>User</code>)</code></p><p>Output only. The user who created the message. If your Chat app <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">authenticates as a user</a>, the output populates the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/User">user</a> <code>name</code> and <code>type</code>.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Optional. Immutable. For spaces created in Chat, the time at which the message was created. This field is output only, except when used in import mode spaces.</p><p>For import mode spaces, set this field to the historical timestamp at which the message was created in the source in order to preserve the original creation time.</p></td></tr><tr><td><code>lastUpdateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time at which the message was last edited by a user. If the message has never been edited, this field is empty.</p></td></tr><tr><td><code>deleteTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time at which the message was deleted in Google Chat. If the message is never deleted, this field is empty.</p></td></tr><tr><td><code>text</code></td><td><p><code>string</code></p><p>Optional. Plain-text body of the message. The first link to an image, video, or web page generates a <a href="https://developers.google.com/workspace/chat/preview-links">preview chip</a>. You can also <a href="https://developers.google.com/workspace/chat/format-messages#messages-@mention">@mention a Google Chat user</a>, or everyone in the space.</p><p>To learn about creating text messages, see <a href="https://developers.google.com/workspace/chat/create-messages">Send a message</a>.</p></td></tr><tr><td><code>formattedText</code></td><td><p><code>string</code></p><p>Output only. Contains the message <code>text</code> with markups added to communicate formatting. This field might not capture all formatting visible in the UI, but includes the following:</p><ul><li><p><a href="https://developers.google.com/workspace/chat/format-messages">Markup syntax</a> for bold, italic, strikethrough, monospace, monospace block, bulleted list, and block quote.</p></li><li><p><a href="https://developers.google.com/workspace/chat/format-messages#messages-@mention">User mentions</a> using the format <code><users/{user}></code>.</p></li><li><p>Custom hyperlinks using the format <code><{url}|{rendered_text}></code> where the first string is the URL and the second is the rendered text—for example, <code><http://example.com|custom text></code>.</p></li><li><p>Custom emoji using the format <code>:{emojiName}:</code>—for example, <code>:smile:</code>. This doesn't apply to Unicode emoji, such as <code>U+1F600</code> for a grinning face emoji.</p></li><li><p>Bullet list items using asterisks (<code>*</code>)—for example, <code>* item</code>.</p></li></ul><p>For more information, see <a href="https://developers.google.com/workspace/chat/format-messages#view_text_formatting_sent_in_a_message">View text formatting sent in a message</a></p></td></tr><tr><td><code>cards[]<br><b>(deprecated)</b></code></td><td><p><code>object (<code>Card</code>)</code></p><p>Deprecated: Use <code>cardsV2</code> instead.</p><p>Rich, formatted, and interactive cards that you can use to display UI elements such as: formatted texts, buttons, and clickable images. Cards are normally displayed below the plain-text body of the message. <code>cards</code> and <code>cardsV2</code> can have a maximum size of 32 KB.</p></td></tr><tr><td><code>cardsV2[]</code></td><td><p><code>object (<code>CardWithId</code>)</code></p><p>Optional. An array of <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/cards">cards</a>.</p><p>Chat apps can create cards with <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">app authentication</a>. As part of the <a href="https://developers.google.com/workspace/preview">Developer Preview Program</a>, if your Chat app <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">authenticates as a user</a>, it can create card messages. If your Chat app is not part of Developer Preview Program, it can't create cards with user authentication.</p><p>To learn how to create a message that contains cards, see <a href="https://developers.google.com/workspace/chat/create-messages">Send a message</a>.</p><p>Design and preview cards with the Card Builder.</p><a href="https://addons.gsuite.google.com/uikit/builder">Open the Card Builder</a></td></tr><tr><td><code>annotations[]</code></td><td><p><code>object (<code>Annotation</code>)</code></p><p>Output only. Annotations can be associated with the plain-text body of the message or with chips that link to Google Workspace resources like Google Docs or Sheets with <code>startIndex</code> and <code>length</code> of 0.</p></td></tr><tr><td><code>thread</code></td><td><p><code>object (<code>Thread</code>)</code></p><p>The thread the message belongs to. For example usage, see <a href="https://developers.google.com/workspace/chat/create-messages#create-message-thread">Start or reply to a message thread</a>.</p></td></tr><tr><td><code>space</code></td><td><p>Output only. If your Chat app <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">authenticates as a user</a>, the output only populates the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces">space</a> <code>name</code>.</p></td></tr><tr><td><code>fallbackText</code></td><td><p><code>string</code></p><p>Optional. A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile notifications.</p></td></tr><tr><td><code>actionResponse</code></td><td><p><code>object (<code>ActionResponse</code>)</code></p><p>Input only. Parameters that a Chat app can use to configure how its response is posted.</p></td></tr><tr><td><code>argumentText</code></td><td><p><code>string</code></p><p>Output only. Plain-text body of the message with all Chat app mentions stripped out.</p></td></tr><tr><td><code>slashCommand</code></td><td><p><code>object (<code>SlashCommand</code>)</code></p><p>Output only. Slash command information, if applicable.</p></td></tr><tr><td><code>attachment[]</code></td><td><p><code>object (<code>Attachment</code>)</code></p><p>Optional. User-uploaded attachment.</p></td></tr><tr><td><code>matchedUrl</code></td><td><p><code>object (<code>MatchedUrl</code>)</code></p><p>Output only. A URL in <code>spaces.messages.text</code> that matches a link preview pattern. For more information, see <a href="https://developers.google.com/workspace/chat/preview-links">Preview links</a>.</p></td></tr><tr><td><code>threadReply</code></td><td><p><code>boolean</code></p><p>Output only. When <code>true</code>, the message is a response in a reply thread. When <code>false</code>, the message is visible in the space's top-level conversation as either the first message of a thread or a message with no threaded replies.</p><p>If the space doesn't support reply in threads, this field is always <code>false</code>.</p></td></tr><tr><td><code>clientAssignedMessageId</code></td><td><p><code>string</code></p><p>Optional. A custom ID for the message. You can use field to identify a message, or to get, delete, or update a message. To set a custom ID, specify the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/create#body.QUERY_PARAMETERS.message_id"><code>messageId</code></a> field when you create the message. For details, see <a href="https://developers.google.com/workspace/chat/create-messages#name_a_created_message">Name a message</a>.</p></td></tr><tr><td><code>emojiReactionSummaries[]</code></td><td><p><code>object (<code>EmojiReactionSummary</code>)</code></p><p>Output only. The list of emoji reaction summaries on the message.</p></td></tr><tr><td><code>privateMessageViewer</code></td><td><p><code>object (<code>User</code>)</code></p><p>Optional. Immutable. Input for creating a message, otherwise output only. The user that can view the message. When set, the message is private and only visible to the specified user and the Chat app. To include this field in your request, you must call the Chat API using <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">app authentication</a> and omit the following:</p><ul><li><a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments">Attachments</a></li><li><a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages#Message.AccessoryWidget">Accessory widgets</a></li></ul><p>For details, see <a href="https://developers.google.com/workspace/chat/create-messages#private">Send a message privately</a>.</p></td></tr><tr><td><code>attachedGifs[]</code></td><td><p><code>object (<code>AttachedGif</code>)</code></p><p>Output only. GIF images that are attached to the message.</p></td></tr><tr><td><code>accessoryWidgets[]</code></td><td><p><code>object (<code>AccessoryWidget</code>)</code></p><p>Optional. One or more interactive widgets that appear at the bottom of a message. You can add accessory widgets to messages that contain text, cards, or both text and cards. Not supported for messages that contain dialogs. For details, see <a href="https://developers.google.com/workspace/chat/create-messages#add-accessory-widgets">Add interactive widgets at the bottom of a message</a>.</p><p>Creating a message with accessory widgets requires <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">app authentication</a>.</p></td></tr></tbody></table>

### CardWithId

A [card](./cards.md) in a Google Chat message.

Chat apps can create cards with [app authentication](../../../../authenticate-authorize-chat-app.md). As part of the [Developer Preview Program](../../../../../preview.md), if your Chat app [authenticates as a user](../../../../authenticate-authorize-chat-user.md), it can create card messages. If your Chat app is not part of Developer Preview Program, it can't create cards with user authentication.

To learn how to create a message that contains cards, see [Send a message](../../../../create-messages.md).

Design and preview cards with the Card Builder.

[Open the Card Builder](https://addons.gsuite.google.com/uikit/builder)

JSON representation

```
{
  "cardId": string,
  "card": {
    object (Card)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>cardId</code></td><td><p><code>string</code></p><p>Required if the message contains multiple cards. A unique identifier for a card in a message.</p></td></tr><tr><td><code>card</code></td><td><p><code>object (<code>Card</code>)</code></p><p>A card. Maximum size is 32 KB.</p></td></tr></tbody></table>

### Annotation

Output only. Annotations can be associated with the plain-text body of the message or with chips that link to Google Workspace resources like Google Docs or Sheets with `startIndex` and `length` of 0. To add basic formatting to a text message, see [Format text messages](../../../../format-messages.md).

Example plain-text message body:

```
Hello @FooBot how are you!"
```

The corresponding annotations metadata:

```
"annotations":[{
  "type":"USER_MENTION",
  "startIndex":6,
  "length":7,
  "userMention": {
    "user": {
      "name":"users/{user}",
      "displayName":"FooBot",
      "avatarUrl":"https://goo.gl/aeDtrS",
      "type":"BOT"
    },
    "type":"MENTION"
   }
}]
```

JSON representation

```
{
  "type": enum (AnnotationType),
  "length": integer,
  "startIndex": integer,

  "userMention": {
    object (UserMentionMetadata)
  },
  "slashCommand": {
    object (SlashCommandMetadata)
  },
  "richLinkMetadata": {
    object (RichLinkMetadata)
  },
  "customEmojiMetadata": {
    object (CustomEmojiMetadata)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>AnnotationType</code>)</code></p><p>The type of this annotation.</p></td></tr><tr><td><code>length</code></td><td><p><code>integer</code></p><p>Length of the substring in the plain-text message body this annotation corresponds to. If not present, indicates a length of 0.</p></td></tr><tr><td><code>startIndex</code></td><td><p><code>integer</code></p><p>Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to.</p></td></tr><tr><td><code>userMention</code></td><td><p><code>object (<code>UserMentionMetadata</code>)</code></p><p>The metadata of user mention.</p></td></tr><tr><td><code>slashCommand</code></td><td><p><code>object (<code>SlashCommandMetadata</code>)</code></p><p>The metadata for a slash command.</p></td></tr></tbody></table>

### AnnotationType

Type of the annotation.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ANNOTATION_TYPE_UNSPECIFIED</code></td><td>Default value for the enum. Don't use.</td></tr><tr><td><code>USER_MENTION</code></td><td>A user is mentioned.</td></tr><tr><td><code>SLASH_COMMAND</code></td><td>A slash command is invoked.</td></tr><tr><td><code>RICH_LINK</code></td><td>A rich link annotation.</td></tr><tr><td><code>CUSTOM_EMOJI</code></td><td>A custom emoji annotation.</td></tr></tbody></table>

### UserMentionMetadata

JSON representation

```
{
  "user": {
    object (User)
  },
  "type": enum (Type)
}
```

### Type

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>Default value for the enum. Don't use.</td></tr><tr><td><code>ADD</code></td><td>Add user to space.</td></tr><tr><td><code>MENTION</code></td><td>Mention user in space.</td></tr></tbody></table>

### SlashCommandMetadata

JSON representation

```
{
  "bot": {
    object (User)
  },
  "type": enum (Type),
  "commandName": string,
  "commandId": string,
  "triggersDialog": boolean
}
```

### Type

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>Default value for the enum. Don't use.</td></tr><tr><td><code>ADD</code></td><td>Add Chat app to space.</td></tr><tr><td><code>INVOKE</code></td><td>Invoke slash command in space.</td></tr></tbody></table>

### RichLinkMetadata

JSON representation

```
{
  "uri": string,
  "richLinkType": enum (RichLinkType),

  "driveLinkData": {
    object (DriveLinkData)
  },
  "chatSpaceLinkData": {
    object (ChatSpaceLinkData)
  },
  "meetSpaceLinkData": {
    object (MeetSpaceLinkData)
  },
  "calendarEventLinkData": {
    object (CalendarEventLinkData)
  }
}
```

### RichLinkType

The rich link type. More types might be added in the future.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>RICH_LINK_TYPE_UNSPECIFIED</code></td><td>Default value for the enum. Don't use.</td></tr><tr><td><code>DRIVE_FILE</code></td><td>A Google Drive rich link type.</td></tr><tr><td><code>CHAT_SPACE</code></td><td>A Chat space rich link type. For example, a space smart chip.</td></tr><tr><td><code>GMAIL_MESSAGE</code></td><td>A Gmail message rich link type. Specifically, a Gmail chip from <a href="https://support.google.com/chat?p=chat_gmail">Share to Chat</a>. The API only supports reading messages with GMAIL_MESSAGE rich links.</td></tr><tr><td><code>MEET_SPACE</code></td><td>A Meet message rich link type. For example, a Meet chip.</td></tr><tr><td><code>CALENDAR_EVENT</code></td><td>A Calendar message rich link type. For example, a Calendar chip.</td></tr></tbody></table>

### DriveLinkData

Data for Google Drive links.

JSON representation

```
{
  "driveDataRef": {
    object (DriveDataRef)
  },
  "mimeType": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>driveDataRef</code></td><td><p><code>object (<code>DriveDataRef</code>)</code></p><p>A <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments#drivedataref">DriveDataRef</a> which references a Google Drive file.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>The mime type of the linked Google Drive resource.</p></td></tr></tbody></table>

### ChatSpaceLinkData

Data for Chat space links.

JSON representation

```
{
  "space": string,
  "thread": string,
  "message": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>space</code></td><td><p><code>string</code></p><p>The space of the linked Chat space resource.</p><p>Format: <code>spaces/{space}</code></p></td></tr><tr><td><code>thread</code></td><td><p><code>string</code></p><p>The thread of the linked Chat space resource.</p><p>Format: <code>spaces/{space}/threads/{thread}</code></p></td></tr><tr><td><code>message</code></td><td><p><code>string</code></p><p>The message of the linked Chat space resource.</p><p>Format: <code>spaces/{space}/messages/{message}</code></p></td></tr></tbody></table>

### MeetSpaceLinkData

Data for Meet space links.

JSON representation

```
{
  "meetingCode": string,
  "type": enum (Type),
  "huddleStatus": enum (HuddleStatus)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>meetingCode</code></td><td><p><code>string</code></p><p>Meeting code of the linked Meet space.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>Indicates the type of the Meet space.</p></td></tr><tr><td><code>huddleStatus</code></td><td><p><code>enum (<code>HuddleStatus</code>)</code></p><p>Optional. Output only. If the Meet is a Huddle, indicates the status of the huddle. Otherwise, this is unset.</p></td></tr></tbody></table>

### Type

The type of the Meet space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>Default value for the enum. Don't use.</td></tr><tr><td><code>MEETING</code></td><td>The Meet space is a meeting.</td></tr><tr><td><code>HUDDLE</code></td><td>The Meet space is a huddle.</td></tr></tbody></table>

### HuddleStatus

The status of the huddle

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>HUDDLE_STATUS_UNSPECIFIED</code></td><td>Default value for the enum. Don't use.</td></tr><tr><td><code>STARTED</code></td><td>The huddle has started.</td></tr><tr><td><code>ENDED</code></td><td>The huddle has ended. In this case the Meet space URI and identifiers will no longer be valid.</td></tr><tr><td><code>MISSED</code></td><td>The huddle has been missed. In this case the Meet space URI and identifiers will no longer be valid.</td></tr></tbody></table>

### CalendarEventLinkData

Data for Calendar event links.

JSON representation

```
{
  "calendarId": string,
  "eventId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>calendarId</code></td><td><p><code>string</code></p><p>The <a href="https://developers.google.com/workspace/calendar/api/v3/reference/calendars">Calendar identifier</a> of the linked Calendar.</p></td></tr><tr><td><code>eventId</code></td><td><p><code>string</code></p><p>The <a href="https://developers.google.com/workspace/calendar/api/v3/reference/events">Event identifier</a> of the linked Calendar event.</p></td></tr></tbody></table>

### CustomEmojiMetadata

JSON representation

```
{
  "customEmoji": {
    object (CustomEmoji)
  }
}
```

### Thread

A thread in a Google Chat space. For example usage, see [Start or reply to a message thread](../../../../create-messages.md#create-message-thread).

If you specify a thread when creating a message, you can set the [`messageReplyOption`](./spaces.messages/create.md#messagereplyoption) field to determine what happens if no matching thread is found.

JSON representation

```
{
  "name": string,
  "threadKey": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the thread.</p><p>Example: <code>spaces/{space}/threads/{thread}</code></p></td></tr><tr><td><code>threadKey</code></td><td><p><code>string</code></p><p>Optional. Input for creating or updating a thread. Otherwise, output only. ID for the thread. Supports up to 4000 characters.</p><p>This ID is unique to the Chat app that sets it. For example, if multiple Chat apps create a message using the same thread key, the messages are posted in different threads. To reply in a thread created by a person or another Chat app, specify the thread <code>name</code> field instead.</p></td></tr></tbody></table>

### ActionResponse

Parameters that a Chat app can use to configure how its response is posted.

JSON representation

```
{
  "type": enum (ResponseType),
  "url": string,
  "dialogAction": {
    object (DialogAction)
  },
  "updatedWidget": {
    object (UpdatedWidget)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>ResponseType</code>)</code></p><p>Input only. The type of Chat app response.</p></td></tr><tr><td><code>url</code></td><td><p><code>string</code></p><p>Input only. URL for users to authenticate or configure. (Only for <code>REQUEST_CONFIG</code> response types.)</p></td></tr><tr><td><code>dialogAction</code></td><td><p><code>object (<code>DialogAction</code>)</code></p><p>Input only. A response to an interaction event related to a <a href="https://developers.google.com/workspace/chat/dialogs">dialog</a>. Must be accompanied by <code>ResponseType.Dialog</code>.</p></td></tr><tr><td><code>updatedWidget</code></td><td><p><code>object (<code>UpdatedWidget</code>)</code></p><p>Input only. The response of the updated widget.</p></td></tr></tbody></table>

### ResponseType

The type of Chat app response.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>Default type that's handled as <code>NEW_MESSAGE</code>.</td></tr><tr><td><code>NEW_MESSAGE</code></td><td>Post as a new message in the topic.</td></tr><tr><td><code>UPDATE_MESSAGE</code></td><td>Update the Chat app's message. This is only permitted on a <code>CARD_CLICKED</code> event where the message sender type is <code>BOT</code>.</td></tr><tr><td><code>UPDATE_USER_MESSAGE_CARDS</code></td><td>Update the cards on a user's message. This is only permitted as a response to a <code>MESSAGE</code> event with a matched url, or a <code>CARD_CLICKED</code> event where the message sender type is <code>HUMAN</code>. Text is ignored.</td></tr><tr><td><code>REQUEST_CONFIG</code></td><td>Privately ask the user for additional authentication or configuration.</td></tr><tr><td><code>DIALOG</code></td><td>Presents a <a href="https://developers.google.com/workspace/chat/dialogs">dialog</a>.</td></tr><tr><td><code>UPDATE_WIDGET</code></td><td>Widget text autocomplete options query.</td></tr></tbody></table>

### DialogAction

Contains a [dialog](../../../../dialogs.md) and request status code.

JSON representation

```
{
  "actionStatus": {
    object (ActionStatus)
  },

  "dialog": {
    object (Dialog)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>actionStatus</code></td><td><p><code>object (<code>ActionStatus</code>)</code></p><p>Input only. Status for a request to either invoke or submit a <a href="https://developers.google.com/workspace/chat/dialogs">dialog</a>. Displays a status and message to users, if necessary. For example, in case of an error or success.</p></td></tr><tr><td colspan="2">Union field <code>action</code>. Action to perform. <code>action</code> can be only one of the following:</td></tr><tr><td><code>dialog</code></td><td><p><code>object (<code>Dialog</code>)</code></p><p>Input only. <a href="https://developers.google.com/workspace/chat/dialogs">Dialog</a> for the request.</p></td></tr></tbody></table>

### Dialog

Wrapper around the card body of the dialog.

JSON representation

```
{
  "body": {
    object (Card)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>body</code></td><td><p><code>object (<code>Card</code>)</code></p><p>Input only. Body of the dialog, which is rendered in a modal. Google Chat apps don't support the following card entities: <code>DateTimePicker</code>, <code>OnChangeAction</code>.</p></td></tr></tbody></table>

### ActionStatus

Represents the status for a request to either invoke or submit a [dialog](../../../../dialogs.md).

JSON representation

```
{
  "statusCode": enum (Code),
  "userFacingMessage": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>statusCode</code></td><td><p><code>enum (<code>Code</code>)</code></p><p>The status code.</p></td></tr><tr><td><code>userFacingMessage</code></td><td><p><code>string</code></p><p>The message to send users about the status of their request. If unset, a generic message based on the <code>statusCode</code> is sent.</p></td></tr></tbody></table>

### Code

The canonical error codes for gRPC APIs.

Sometimes multiple error codes may apply. Services should return the most specific error code that applies. For example, prefer `OUT_OF_RANGE` over `FAILED_PRECONDITION` if both codes apply. Similarly prefer `NOT_FOUND` or `ALREADY_EXISTS` over `FAILED_PRECONDITION`.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>OK</code></td><td><p>Not an error; returned on success.</p><p>HTTP Mapping: 200 OK</p></td></tr><tr><td><code>CANCELLED</code></td><td><p>The operation was cancelled, typically by the caller.</p><p>HTTP Mapping: 499 Client Closed Request</p></td></tr><tr><td><code>UNKNOWN</code></td><td><p>Unknown error. For example, this error may be returned when a <code>Status</code> value received from another address space belongs to an error space that is not known in this address space. Also errors raised by APIs that do not return enough error information may be converted to this error.</p><p>HTTP Mapping: 500 Internal Server Error</p></td></tr><tr><td><code>INVALID_ARGUMENT</code></td><td><p>The client specified an invalid argument. Note that this differs from <code>FAILED_PRECONDITION</code>. <code>INVALID_ARGUMENT</code> indicates arguments that are problematic regardless of the state of the system (e.g., a malformed file name).</p><p>HTTP Mapping: 400 Bad Request</p></td></tr><tr><td><code>DEADLINE_EXCEEDED</code></td><td><p>The deadline expired before the operation could complete. For operations that change the state of the system, this error may be returned even if the operation has completed successfully. For example, a successful response from a server could have been delayed long enough for the deadline to expire.</p><p>HTTP Mapping: 504 Gateway Timeout</p></td></tr><tr><td><code>NOT_FOUND</code></td><td><p>Some requested entity (e.g., file or directory) was not found.</p><p>Note to server developers: if a request is denied for an entire class of users, such as gradual feature rollout or undocumented allowlist, <code>NOT_FOUND</code> may be used. If a request is denied for some users within a class of users, such as user-based access control, <code>PERMISSION_DENIED</code> must be used.</p><p>HTTP Mapping: 404 Not Found</p></td></tr><tr><td><code>ALREADY_EXISTS</code></td><td><p>The entity that a client attempted to create (e.g., file or directory) already exists.</p><p>HTTP Mapping: 409 Conflict</p></td></tr><tr><td><code>PERMISSION_DENIED</code></td><td><p>The caller does not have permission to execute the specified operation. <code>PERMISSION_DENIED</code> must not be used for rejections caused by exhausting some resource (use <code>RESOURCE_EXHAUSTED</code> instead for those errors). <code>PERMISSION_DENIED</code> must not be used if the caller can not be identified (use <code>UNAUTHENTICATED</code> instead for those errors). This error code does not imply the request is valid or the requested entity exists or satisfies other pre-conditions.</p><p>HTTP Mapping: 403 Forbidden</p></td></tr><tr><td><code>UNAUTHENTICATED</code></td><td><p>The request does not have valid authentication credentials for the operation.</p><p>HTTP Mapping: 401 Unauthorized</p></td></tr><tr><td><code>RESOURCE_EXHAUSTED</code></td><td><p>Some resource has been exhausted, perhaps a per-user quota, or perhaps the entire file system is out of space.</p><p>HTTP Mapping: 429 Too Many Requests</p></td></tr><tr><td><code>FAILED_PRECONDITION</code></td><td><p>The operation was rejected because the system is not in a state required for the operation's execution. For example, the directory to be deleted is non-empty, an rmdir operation is applied to a non-directory, etc.</p><p>Service implementors can use the following guidelines to decide between <code>FAILED_PRECONDITION</code>, <code>ABORTED</code>, and <code>UNAVAILABLE</code>: (a) Use <code>UNAVAILABLE</code> if the client can retry just the failing call. (b) Use <code>ABORTED</code> if the client should retry at a higher level. For example, when a client-specified test-and-set fails, indicating the client should restart a read-modify-write sequence. (c) Use <code>FAILED_PRECONDITION</code> if the client should not retry until the system state has been explicitly fixed. For example, if an "rmdir" fails because the directory is non-empty, <code>FAILED_PRECONDITION</code> should be returned since the client should not retry unless the files are deleted from the directory.</p><p>HTTP Mapping: 400 Bad Request</p></td></tr><tr><td><code>ABORTED</code></td><td><p>The operation was aborted, typically due to a concurrency issue such as a sequencer check failure or transaction abort.</p><p>See the guidelines above for deciding between <code>FAILED_PRECONDITION</code>, <code>ABORTED</code>, and <code>UNAVAILABLE</code>.</p><p>HTTP Mapping: 409 Conflict</p></td></tr><tr><td><code>OUT_OF_RANGE</code></td><td><p>The operation was attempted past the valid range. E.g., seeking or reading past end-of-file.</p><p>Unlike <code>INVALID_ARGUMENT</code>, this error indicates a problem that may be fixed if the system state changes. For example, a 32-bit file system will generate <code>INVALID_ARGUMENT</code> if asked to read at an offset that is not in the range [0,2^32-1], but it will generate <code>OUT_OF_RANGE</code> if asked to read from an offset past the current file size.</p><p>There is a fair bit of overlap between <code>FAILED_PRECONDITION</code> and <code>OUT_OF_RANGE</code>. We recommend using <code>OUT_OF_RANGE</code> (the more specific error) when it applies so that callers who are iterating through a space can easily look for an <code>OUT_OF_RANGE</code> error to detect when they are done.</p><p>HTTP Mapping: 400 Bad Request</p></td></tr><tr><td><code>UNIMPLEMENTED</code></td><td><p>The operation is not implemented or is not supported/enabled in this service.</p><p>HTTP Mapping: 501 Not Implemented</p></td></tr><tr><td><code>INTERNAL</code></td><td><p>Internal errors. This means that some invariants expected by the underlying system have been broken. This error code is reserved for serious errors.</p><p>HTTP Mapping: 500 Internal Server Error</p></td></tr><tr><td><code>UNAVAILABLE</code></td><td><p>The service is currently unavailable. This is most likely a transient condition, which can be corrected by retrying with a backoff. Note that it is not always safe to retry non-idempotent operations.</p><p>See the guidelines above for deciding between <code>FAILED_PRECONDITION</code>, <code>ABORTED</code>, and <code>UNAVAILABLE</code>.</p><p>HTTP Mapping: 503 Service Unavailable</p></td></tr><tr><td><code>DATA_LOSS</code></td><td><p>Unrecoverable data loss or corruption.</p><p>HTTP Mapping: 500 Internal Server Error</p></td></tr></tbody></table>

### UpdatedWidget

For `selectionInput` widgets, returns autocomplete suggestions for a multiselect menu.

JSON representation

```
{
  "widget": string,

  "suggestions": {
    object (SelectionItems)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>widget</code></td><td><p><code>string</code></p><p>The ID of the updated widget. The ID must match the one for the widget that triggered the update request.</p></td></tr><tr><td colspan="2">Union field <code>updated_widget</code>. The widget updated in response to a user action. <code>updated_widget</code> can be only one of the following:</td></tr><tr><td><code>suggestions</code></td><td><p><code>object (<code>SelectionItems</code>)</code></p><p>List of widget autocomplete results</p></td></tr></tbody></table>

### SelectionItems

List of widget autocomplete results.

JSON representation

```
{
  "items": [
    {
      object (SelectionItem)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>items[]</code></td><td><p><code>object (<code>SelectionItem</code>)</code></p><p>An array of the SelectionItem objects.</p></td></tr></tbody></table>

### SlashCommand

Metadata about a [slash command](../../../../commands.md) in Google Chat.

JSON representation

```
{
  "commandId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>commandId</code></td><td><p><code>string (int64 format)</code></p><p>The ID of the slash command.</p></td></tr></tbody></table>

### MatchedUrl

A matched URL in a Chat message. Chat apps can preview matched URLs. For more information, see [Preview links](../../../../preview-links.md).

JSON representation

```
{
  "url": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>url</code></td><td><p><code>string</code></p><p>Output only. The URL that was matched.</p></td></tr></tbody></table>

### EmojiReactionSummary

The number of people who reacted to a message with a specific emoji.

JSON representation

```
{
  "emoji": {
    object (Emoji)
  },
  "reactionCount": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>emoji</code></td><td><p><code>object (<code>Emoji</code>)</code></p><p>Output only. Emoji associated with the reactions.</p></td></tr><tr><td><code>reactionCount</code></td><td><p><code>integer</code></p><p>Output only. The total number of reactions using the associated emoji.</p></td></tr></tbody></table>

### DeletionMetadata

JSON representation

```
{
  "deletionType": enum (DeletionType)
}
```

### DeletionType

Who deleted the message and how it was deleted. More values may be added in the future. See [Edit or delete a message in Google Chat](https://support.google.com/chat/answer/7653281) for details on when messages can be deleted.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DELETION_TYPE_UNSPECIFIED</code></td><td>This value is unused.</td></tr><tr><td><code>CREATOR</code></td><td>User deleted their own message.</td></tr><tr><td><code>SPACE_OWNER</code></td><td>An owner or manager deleted the message.</td></tr><tr><td><code>ADMIN</code></td><td>A Google Workspace administrator deleted the message. Administrators can delete any message in the space, including messages sent by any space member or Chat app.</td></tr><tr><td><code>APP_MESSAGE_EXPIRY</code></td><td>A Chat app deleted its own message when it expired.</td></tr><tr><td><code>CREATOR_VIA_APP</code></td><td>A Chat app deleted the message on behalf of the creator (using user authentication).</td></tr><tr><td><code>SPACE_OWNER_VIA_APP</code></td><td>A Chat app deleted the message on behalf of a space manager (using user authentication).</td></tr><tr><td><code>SPACE_MEMBER</code></td><td>A member of the space deleted the message. Users can delete messages sent by apps.</td></tr></tbody></table>

### QuotedMessageMetadata

JSON representation

```
{
  "name": string,
  "lastUpdateTime": string,
  "quoteType": enum (QuoteType),
  "quotedMessageSnapshot": {
    object (QuotedMessageSnapshot)
  },
  "forwardedMetadata": {
    object (ForwardedMetadata)
  }
}
```

### QuoteType

The quote type of the quoted message.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>QUOTE_TYPE_UNSPECIFIED</code></td><td>Reserved. This value is unused.</td></tr><tr><td><code>REPLY</code></td><td><p>If quoteType is <code>REPLY</code>, you can do the following:</p><ul><li><p>If you're replying in a thread, you can quote another message in that thread.</p></li><li><p>If you're creating a root message, you can quote another root message in that space.</p></li></ul><p>You can't quote a message reply from a different thread.</p></td></tr></tbody></table>

### QuotedMessageSnapshot

Provides a snapshot of the content of the quoted message at the time of quoting or forwarding

JSON representation

```
{
  "sender": string,
  "text": string,
  "formattedText": string,
  "annotations": [
    {
      object (Annotation)
    }
  ],
  "attachments": [
    {
      object (Attachment)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sender</code></td><td><p><code>string</code></p><p>Output only. The quoted message's author name. Populated for both REPLY & FORWARD quote types.</p></td></tr><tr><td><code>text</code></td><td><p><code>string</code></p><p>Output only. Snapshot of the quoted message's text content.</p></td></tr><tr><td><code>formattedText</code></td><td><p><code>string</code></p><p>Output only. Contains the quoted message <code>text</code> with markups added to support rich formatting like hyperlinks,custom emojis, markup, etc. Populated only for FORWARD quote type.</p></td></tr><tr><td><code>annotations[]</code></td><td><p><code>object (<code>Annotation</code>)</code></p><p>Output only. Annotations parsed from the text body of the quoted message. Populated only for FORWARD quote type.</p></td></tr><tr><td><code>attachments[]</code></td><td><p><code>object (<code>Attachment</code>)</code></p><p>Output only. Attachments that were part of the quoted message. These are copies of the quoted message's attachment metadata. Populated only for FORWARD quote type.</p></td></tr></tbody></table>

### ForwardedMetadata

JSON representation

```
{
  "space": string,
  "spaceDisplayName": string
}
```

### AttachedGif

A GIF image that's specified by a URL.

JSON representation

```
{
  "uri": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>uri</code></td><td><p><code>string</code></p><p>Output only. The URL that hosts the GIF image.</p></td></tr></tbody></table>

### AccessoryWidget

One or more interactive widgets that appear at the bottom of a message. For details, see [Add interactive widgets at the bottom of a message](../../../../create-messages.md#add-accessory-widgets).

JSON representation

```
{

  "buttonList": {
    object (ButtonList)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>action</code>. The type of action. <code>action</code> can be only one of the following:</td></tr><tr><td><code>buttonList</code></td><td><p><code>object (<code>ButtonList</code>)</code></p><p>A list of buttons.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a message in a Google Chat space.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a message.</td></tr><tr><td><h3>get</h3></td><td>Returns details about a message.</td></tr><tr><td><h3>list</h3></td><td>Lists messages in a space that the caller is a member of, including messages from blocked members and spaces.</td></tr><tr><td><h3>patch</h3></td><td>Updates a message.</td></tr><tr><td><h3>replaceCards</h3></td><td>Replaces the cards included in a message.</td></tr><tr><td><h3>update</h3></td><td>Updates a message.</td></tr></tbody></table>
