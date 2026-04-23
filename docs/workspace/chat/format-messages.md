---
source: https://developers.google.com/workspace/chat/format-messages
root: workspace
fetched_at: 2026-04-23T15:25:24.787Z
---

# Format messages

## Page Summary

- Google Chat apps can format text messages using Markdown syntax for bold, italic, strikethrough, monospace, and bulleted lists.
- Chat apps can format text within cards using a subset of HTML tags for bold, italics, underline, strikethrough, font color, hyperlinks, and newlines.
- You can @mention specific users or all users in a space within text messages using `<users/{user}>` or `<users/all>` respectively.
- Google Chat apps can use built-in icons, Google Material icons, or custom icons within cards to add visuals alongside text.

This page explains how Google Chat apps can format text to send messages that contain any of the following:

- Rich text that contains hyperlinks or @mentions one or all users in a Chat space.
- Text that appears in a card interface, including as paragraph text or UI text that displays alongside an icon, such as a button.

## Format a text message

Chat lets you add basic formatting to a text message, including bold, italic, and strikethrough, by using a small subset of Markdown syntax. You format text differently in text messages than in card messages because text messages are formatted with the same syntax that Chat users use.

To format text messages, use the following syntax:

| Format | Symbol | Example syntax | Text displayed in Google Chat |
| --- | --- | --- | --- |
| Bold | \* | \*hello\* | **hello** |
| Italic | \_ (underscore) | \_hello\_ | *hello* |
| Strikethrough | ~ | ~hello~ | ~~hello~~ |
| Monospace | \` (backquote) | \`hello\` | `hello` |
| Monospace block | \` \` \` (three backquotes) | \`\`\`   Hello   World   \`\`\` | `Hello   World` |
| Bulleted list | \* or - (hyphen) followed by a space | \* This is the first item in the list  \* This is the second item in the list | - This is the first item in the list - This is the second item in the list |
| Block quote | \> (greater than sign) | \>hello | > ![block quote format icon](https://developers.google.com/static/workspace/chat/images/block-quote-icon.svg) hello |
| Hyperlink | `<hyperlink\|display text>` | `<https://example.com\|Example website>` | [Example website](https://example.com/)  To learn more about hyperlinking, see [Format links](#include-links). |
| Mention user | `<users/{user}>` where `{user}` is the user ID. | `<users/123456789012345678901>` | @Mahan S  To learn more about mentioning users, see [Mention users in a text message](#messages-@mention). |

For example, consider the following JSON:

```
{
  "text": "Your pizza delivery *has arrived*!\nThank you for using _Cymbal Pizza!_"
}
```

This formatted text message displays the following in a Chat space:

![Cymbal Pizza app sends a text message that the delivery has arrived.](https://developers.google.com/static/workspace/chat/images/pizza-text.png)

### View text formatting sent in a message

When a user sends a message, the plain-text body of the message is in the `text` field. Some formatting that is applied to the text message using Markdown syntax, is in the `text` field. Additional formatting is in the output-only `formattedText` field, including the following:

- Additional Markdown syntax for text
- User mentions
- Custom hyperlinks
- Custom emoji

For example, consider the following text sent by a user:

If the message was formatted by using the **Format** menu in the Chat UI, the `text` field contains the text only, while the `formattedText` field contains the markups, the text, and the hyperlink. The following example shows the draft of a text message with a word hyperlinked, items in a list, and one word bolded:

![Message draft with the word ](https://developers.google.com/static/workspace/chat/images/formatted-in-ui.png)

The message is received in the following format:

```
{
  "text": "I can meet there at:\nNoon\n3 pm\n5 pm\nWhat time works for you?",
  "formattedText": "I can meet <http://example.com|there> at:\n* Noon\n* 3 pm\n* 5 pm\nWhat time works for *you*?",
}
```

### Format links

If you include a plain link URL in your message text, such as `http://www.example.com/`, Google Chat uses this as the link text and automatically hyperlinks that text to the specified URL.

To provide alternate link text for your link, use the following syntax:

| Example syntax | Text displayed in Google Chat |
| --- | --- |
| `<https://example.com\|Example website>` | [Example website](https://www.example.com/) |

The pipe and link text are optional, so that `<https://www.example.com/>` and `https://www.example.com/` are equivalent.

### Use custom emoji in a text message

Chat apps can [send text messages](./create-messages.md) with custom emoji to personalize messages. Custom emojis are only available for Google Workspace organizations, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085).

To create messages with custom emojis, your app must use [user authentication](./authenticate-authorize-chat-user.md). Custom emojis aren't supported in [messages created as a webhook](./quickstart/webhooks.md) or in [messages created with app authentication](./create-messages.md#send-message-app).

To add custom emoji to the text of a message, specify the `name` or `emoji_name` of the `customEmoji` resource:

```
{
    "text": "Hello <customEmojis/CUSTOM_EMOJI_ID>."
}
```

To use this sample, replace `CUSTOM_EMOJI_ID` with the ID for the custom emoji. You can find this ID in the [`name`](./api/reference/rest/v1/customEmojis.md#CustomEmoji.FIELDS.name) or [`emoji_name`](./api/reference/rest/v1/customEmojis.md#CustomEmoji.FIELDS.emoji_name) field of the `customEmoji` resource.

### Mention users in a text message

Chat apps can [send text messages](./create-messages.md) that @mention one or all users in a Chat space. Chat apps can also mention users that haven't joined the space or are members of a [space that is in import mode](./import-data.md).

#### @mention specific users

To @mention a specific user, add `<users/{user}>` to the text message where `{user}` is the ID of the user. For example, consider the following text message where `123456789012345678901` represents the ID for the user Mahan S.:

```
{
    "text": "A customer has reported an issue. Assigning ticket #942 to <users/123456789012345678901>."
}
```

The text message displays as the following:

![Chat app mentions a person in a text message.](https://developers.google.com/static/workspace/chat/images/text-message-mention.png)

You can specify the `users/{user}` value in the following ways:

- If your Google Chat app is responding to a message sent by the user, you can use the `message.sender.name` field of the [`MESSAGE` interaction event](./receive-respond-interactions.md#message).
- If your Google Chat app is creating an [asynchronous text message](./create-messages.md#create-text), you can specify the value for `users/{user}` in the following ways:
	- Use the `name` field of the Google Chat [`User`](./api/reference/rest/v1/User.md) resource, such as `users/123456789012345678901`.
		- Use the user's email address as an alias for the `{user}` value. For example, if the email address is `mahan@example.com`, you can specify the user as `users/mahan@example.com`. To use an email alias, your Google Chat app must [authenticate as a user](./authenticate-authorize-chat-user.md).
- If you use the People API, you can also use the [`people.get` method](https://developers.google.com/people/api/rest/v1/people/get) to identify the user ID.

#### @mention all users

To create a text message that @mentions everyone in a space, replace `{user}` with `all`. The following JSON example mentions all users in a message:

```
{
    "text": "Important message for <users/all>: Code freeze starts at midnight tonight!"
}
```

## Format text that appears in cards

Inside cards, most text fields support basic text formatting by using a small subset of HTML tags. You format text differently in card messages than in text messages because text messages are formatted with the same syntax that Chat users use.

---

Use the Card Builder to design and preview messaging and user interfaces for Chat apps:

[Open the Card Builder](https://addons.gsuite.google.com/uikit/builder)

---

### Format paragraph text

The supported tags and their purpose are shown in the following table:

| Format | Example | Rendered result |
| --- | --- | --- |
| Bold | `"This is <b>bold</b>."` | This is **bold**. |
| Italics | `"This is <i>italics</i>."` | This is *italics*. |
| Underline | `"This is <u>underline</u>."` | This is underline. |
| Strikethrough | `"This is <s>strikethrough</s>."` | This is ~~strikethrough~~. |
| Font color | `"This is <font color=\"#FF0000\">red font</font>."` | This is red font. |
| Hyperlink | `"This is a <a href=\"https://www.google.com\">hyperlink</a>."` | This is a [hyperlink](https://www.google.com/). |
| Time | `"This is a time format: <time>2023-02-16 15:00</time>."` | This is a time format: 2023-02-16 15:00. |
| Newline | `"This is the first line. <br> This is a new line.`" | This is the first line.   This is a new line. |

To define lists and code blocks, use the following tags:

| Format | Example | Rendered result |
| --- | --- | --- |
| New line | `"Line 1<br>Line 2"` | Line 1   Line 2 |
| Monospace | `"This is an <code>inline code</code>."` | This is an `inline code`. |
| Monospace block | `"<pre><code>This a code block.</code></pre>"` | ``` This is a code block. ``` |
| Bulleted list | `"<ul><li>List item 1</li><li>List item 2</li></ul>"` | - List item 1 - List item 2 |
| Ordered list | `"<ol><li>List item 1</li><li>List item 2</li></ol>"` | 1. List item 1 2. List item 2 |

#### Markdown

When [Markdown syntax](./api/reference/rest/v1/cards.md#Message.TextSyntax) is turned on, you can use the following syntax:

<table><tbody><tr><th>Format</th><th>Example</th><th>Rendered result</th></tr><tr><td>Bold</td><td>**hello** or __hello__</td><td><b>hello</b></td></tr><tr><td>Italic</td><td>*hello* or _hello_</td><td><i>hello</i></td></tr><tr><td>Strikethrough</td><td>~hello~</td><td><s>hello</s></td></tr><tr><td>Monospace</td><td>`hello`</td><td><code>hello</code></td></tr><tr><td>Monospace block</td><td>```<br>Hello<br>World<br>```</td><td><code>Hello<br>World</code></td></tr><tr><td rowspan="2">Bulleted list</td><td><p>- This is the first item in the list</p><p>- This is the second item in the list</p></td><td><ul><li>This is the first item in the list</li><li>This is the second item in the list</li></ul></td></tr><tr><td><p>* This is the first item in the list</p><p>* This is the second item in the list</p></td><td><ul><li>This is the first item in the list</li><li>This is the second item in the list</li></ul></td></tr><tr><td>Ordered list</td><td><p>1. This is the first item in the list</p><p>2. This is the second item in the list</p></td><td><ol><li>This is the first item in the list</li><li>This is the second item in the list</li></ol></td></tr><tr><td>Hyperlink</td><td>[Example website](https://example.com)</td><td><a href="https://example.com/">Example website</a></td></tr></tbody></table>

### Add icons to text

To display icons alongside text in a card, you can use the [`DecoratedText`](./add-text-image-card-dialog.md) and [`ButtonList`](./design-interactive-card-dialog.md) widgets.

The following sections explain how to use built-in icons, Google Material icons, or custom icons in decorated text or buttons.

#### Use icons from Chat

To use a built-in icons available in Chat, specify one of the following:

The following table lists the built-in icons that are available for card messages:

|  | **AIRPLANE** |  | **BOOKMARK** |
| --- | --- | --- | --- |
|  | **BUS** |  | **CAR** |
|  | **CLOCK** |  | **CONFIRMATION\_NUMBER\_ICON** |
|  | **DESCRIPTION** |  | **DOLLAR** |
|  | **EMAIL** |  | **EVENT\_SEAT** |
|  | **FLIGHT\_ARRIVAL** |  | **FLIGHT\_DEPARTURE** |
|  | **HOTEL** |  | **HOTEL\_ROOM\_TYPE** |
|  | **INVITE** |  | **MAP\_PIN** |
|  | **MEMBERSHIP** |  | **MULTIPLE\_PEOPLE** |
|  | **PERSON** |  | **PHONE** |
|  | **RESTAURANT\_ICON** |  | **SHOPPING\_CART** |
|  | **STAR** |  | **STORE** |
|  | **TICKET** |  | **TRAIN** |
|  | **VIDEO\_CAMERA** |  | **VIDEO\_PLAY** |

The following is an example of a card with an email icon:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=icon&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with email icon"></iframe>

#### Use Google Material icons

You can use [Google Material icons](https://fonts.google.com/icons) to select from over 2500+ icon options and customize the weight, fill, and grade of the icons.

The following is an example of card with a Google Material icon:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=material-icon&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with email icon from Google Material Design"></iframe>

#### Use custom icons

To add a custom icon, include the `iconUrl` field and specify the icon's corresponding URL.

The following is an example of a custom icon:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=custom-icon&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with custom icon"></iframe>
