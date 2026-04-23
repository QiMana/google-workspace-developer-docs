---
source: https://developers.google.com/apps-script/reference/gmail/gmail-message
root: apps-script
fetched_at: 2026-04-23T15:20:35.957Z
---

# Class GmailMessage

## Page Summary

- GmailMessage represents a single email message within a user's Gmail account.
- You can create draft replies, draft replies to all recipients, forward messages, and reply to messages or reply to all recipients with various options for the message body and additional parameters.
- The `GmailMessage` object provides methods to retrieve message details such as attachments, recipients (To, Cc, Bcc), date, sender, subject, and body content in both HTML and plain text formats.
- You can check the status of a message, including whether it is a draft, in chats, in the inbox, in priority inbox, in trash, starred, or unread.
- Actions like marking a message as read or unread, moving it to trash, starring or unstarring it, and refreshing its state are available methods.

A message in a user's Gmail account.

## Detailed documentation

### createDraftReply(body)

Creates a draft message replying to the sender of this message using the reply-to address. The size of the email (including headers) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
// Create a draft reply to the original message with an acknowledgment.
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const message = firstThread.getMessages()[0];
message.createDraftReply('Got your message');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | The body of the email. |

#### Return

`GmailDraft` — The newly created draft message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `reply(body)`
- `createDraftReply(body, options)`
- `createDraftReplyAll(body)`
- `createDraftReplyAll(body, options)`

---

### createDraftReply(body, options)

Creates a draft message replying to the sender of this message using the reply-to address, with optional arguments.

The email can contain both plain text and an HTML body. The size of the email (including headers) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
// Create a draft response with an HTML text body.
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const message = firstThread.getMessages()[0];
message.createDraftReply('incapable of HTML', {
  htmlBody: '<b>some HTML body text</b>',
  cc: 'another@example.com',
});
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | The body of the email. |
| `options` | `Object` | A JavaScript object that specifies advanced parameters, as listed below. |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `attachments` | `BlobSource[]` | an array of files to send with the email |
| `bcc` | `String` | a comma-separated list of email addresses to BCC |
| `cc` | `String` | a comma-separated list of email addresses to CC |
| `from` | `String` | the address that the email should be sent from, which must be one of the values returned by `GmailApp.getAliases()` |
| `htmlBody` | `String` | when set, devices capable of rendering HTML use it instead of the required body argument; you can add an optional `inlineImages` field in HTML body if you have inlined images for your email |
| `inlineImages` | `Object` | a JavaScript object containing a mapping from image key (`String`) to image data (`BlobSource`); this assumes that the `htmlBody` parameter is used and contains references to these images in the format `<img src="cid:imageKey" />` |
| `name` | `String` | the name of the sender of the email (default: the user's name) |
| `replyTo` | `String` | an email address to use as the default reply-to address (default: the user's email address) |
| `subject` | `String` | A new subject line for the email, up to 250 characters. |

#### Return

`GmailDraft` — The newly created draft message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `reply(body, options)`
- `createDraftReply(body)`
- `createDraftReplyAll(body)`
- `createDraftReplyAll(body, options)`

---

### createDraftReplyAll(body)

Creates a draft message replying to the sender using the reply-to address and all recipients of this message. The size of the email (including headers) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
// Create a draft response to all recipients (except those bcc'd) with an
// acknowledgment.
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const message = firstThread.getMessages()[0];
message.createDraftReplyAll('Got your message');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | The body of the email. |

#### Return

`GmailDraft` — The newly created draft message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `replyAll(body)`
- `createDraftReply(body)`
- `createDraftReply(body, options)`
- `createDraftReplyAll(body, options)`

---

### createDraftReplyAll(body, options)

Creates a draft message replying to the sender of this message using the reply-to address and all recipients, with optional arguments.

The email can contain both plain text and an HTML body. The size of the email (including headers) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
// Create a draft response to all recipients (except those bcc'd) using an HTML
// text body.
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const message = firstThread.getMessages()[0];
message.createDraftReplyAll('incapable of HTML', {
  htmlBody: '<b>some HTML body text</b>',
  cc: 'another@example.com',
});
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | The body of the email. |
| `options` | `Object` | A JavaScript object that specifies advanced parameters, as listed below. |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `attachments` | `BlobSource[]` | an array of files to send with the email |
| `bcc` | `String` | a comma-separated list of email addresses to BCC |
| `cc` | `String` | a comma-separated list of email addresses to CC |
| `from` | `String` | the address that the email should be sent from, which must be one of the values returned by `GmailApp.getAliases()` |
| `htmlBody` | `String` | when set, devices capable of rendering HTML use it instead of the required body argument; you can add an optional `inlineImages` field in HTML body if you have inlined images for your email |
| `inlineImages` | `Object` | a JavaScript object containing a mapping from image key (`String`) to image data (`BlobSource`); this assumes that the `htmlBody` parameter is used and contains references to these images in the format `<img src="cid:imageKey" />` |
| `name` | `String` | the name of the sender of the email (default: the user's name) |
| `replyTo` | `String` | an email address to use as the default reply-to address (default: the user's email address) |
| `subject` | `String` | A new subject line for the email, up to 250 characters. |

#### Return

`GmailDraft` — The newly created draft message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `replyAll(body, options)`
- `createDraftReply(body)`
- `createDraftReply(body, options)`
- `createDraftReplyAll(body)`

---

### forward(recipient)

Forwards this message to new recipients. The size of the email (including headers) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
// Forward first message of first inbox thread to recipient1 & recipient2,
// both @example.com
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const message = firstThread.getMessages()[0];
message.forward('recipient1@example.com,recipient2@example.com');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `recipient` | `String` | A comma-separated list of email addresses. |

#### Return

`GmailMessage` — This message, useful for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `forward(recipient, options)`

---

### forward(recipient, options)

Forwards this message to new recipients, with optional arguments.

The email can contain both plain text, and also an HTML body. The size of the email (including headers) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const message = firstThread.getMessages()[0];
message.forward('recipient1@example.com,recipient2@example.com', {
  cc: 'myboss@example.com',
  bcc: 'mybosses-boss@example.com,vp@example.com',
});
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `recipient` | `String` | A comma-separated list of email addresses. |
| `options` | `Object` | A JavaScript object that specifies advanced parameters, as listed below. |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `attachments` | `BlobSource[]` | an array of files to send with the email |
| `bcc` | `String` | a comma-separated list of email addresses to BCC |
| `cc` | `String` | a comma-separated list of email addresses to CC |
| `from` | `String` | the address that the email should be sent from, which must be one of the values returned by `GmailApp.getAliases()` |
| `htmlBody` | `String` | when set, devices capable of rendering HTML use it instead of the required body argument; you can add an optional `inlineImages` field in HTML body if you have inlined images for your email |
| `inlineImages` | `Object` | a JavaScript object containing a mapping from image key (`String`) to image data (`BlobSource`); this assumes that the `htmlBody` parameter is used and contains references to these images in the format `<img src="cid:imageKey" />` |
| `name` | `String` | the name of the sender of the email (default: the user's name) |
| `noReply` | `Boolean` | `true` if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for Google Workspace accounts, not Gmail users |
| `replyTo` | `String` | an email address to use as the default reply-to address (default: the user's email address) |
| `subject` | `String` | A new subject line for the email, up to 250 characters. |

#### Return

`GmailMessage` — This message, useful for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `forward(recipient)`

---

### getAttachments()

Gets all the attachments for this message.

#### Return

`GmailAttachment[]` — An array of Blob attachments for this message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getAttachments(options)

Gets all the attachments for this message.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Object` | A JavaScript object that specifies advanced parameters, as listed below. |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `includeInlineImages` | `Boolean` | `true` if the returned array of Blob attachments should include inline images (default is `true`). |
| `includeAttachments` | `Boolean` | `true` if the returned array of Blob attachments should include regular (non-inline) attachments (default is `true`). |

#### Return

`GmailAttachment[]` — An array of Blob attachments for this message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getBcc()

Gets the comma-separated recipients bcc'd on this message.

This is empty for all received messages, by definition.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(message.getBcc());                      // Log bcc'd addresses
```

#### Return

`String` — The comma-separated recipients bcc'd on this message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getTo()`

---

### getBody()

Gets the HTML content of the body of this message.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(message.getBody());                     // Log contents of the body
```

#### Return

`String` — The body content of this message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getSubject()`

---

### getCc()

Gets the comma-separated recipients cc'd on this message.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(message.getCc());                       // Log cc'd addresses
```

#### Return

`String` — The comma-separated recipients cc'd on this message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getTo()`

---

### getDate()

Gets the date and time of this message.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(message.getDate());  // Log date and time of the message
```

#### Return

`Date` — The date and time of this message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getFrom()

Gets the sender of this message.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(message.getFrom());  // Log from address of the message
```

#### Return

`String` — The email address of the message sender.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getReplyTo()`

---

### getHeader(name)

Gets the value of an RFC 2822 header given the header name.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox.
const message = thread.getMessages()[0];           // Get the first message.
Logger.log(
    message.getHeader('Message-ID'));  // Logs the Message-ID RFC 2822 header.
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the RFC header, without the colon separating it from the value. |

#### Return

`String` — The value of the header, or an empty string if the header doesn't exist in the message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getId()

Gets the ID of this message.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
const id = message.getId();
const messageById = GmailApp.getMessageById(id);
Logger.log(
    message.getSubject() === messageById.getMessage());  // Always logs true
```

#### Return

`String` — The message ID.

---

### getPlainBody()

Gets the content of the body of this message without HTML formatting. This is more complex than `getBody()` and takes longer.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(message.getPlainBody());                // Log contents of the body
```

#### Return

`String` — The plain body content of this message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getSubject()`

---

### getRawContent()

Gets the raw content of this message. This is equivalent to "Show Original" in the Gmail UI.

#### Return

`String` — The raw content of this message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getReplyTo()

Gets the reply-to address of this message (usually the sender).

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(message.getReplyTo());                  // Logs reply-to address
```

#### Return

`String` — The email address for replies.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getCc()`

---

### getSubject()

Gets the subject of this message.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(message.getSubject());                  // Log subject line
```

#### Return

`String` — The subject of this message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getAttachments()`

---

### getThread()

Gets the thread that contains this message.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(
    message.getThread().getFirstMessageSubject() ===
        thread.getFirstMessageSubject(),
);  // Always logs true
```

#### Return

`GmailThread` — The GmailThread that contains this message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getTo()

Gets the comma-separated recipients of this message.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(message.getTo());  // Log the recipient of message
```

#### Return

`String` — The comma-separated recipients of this message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getCc()`

---

### isDraft()

Gets whether this message is a draft.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(\`is draft? ${message.isDraft()}\`);
```

#### Return

`Boolean` — Whether this message is a draft.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### isInChats()

Gets whether this message is a chat.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(\`is a chat? ${message.isInChats()}\`);
```

#### Return

`Boolean` — Whether this message is a chat.

---

### isInInbox()

Gets whether this message is in the inbox.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(\`is in inbox? ${message.isInInbox()}\`);
```

#### Return

`Boolean` — Whether this message is in the inbox.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### isInPriorityInbox()

Returns `true` if this message is in the priority inbox; returns `false` otherwise.

```
const thread = GmailApp.getPriorityInboxThreads(
    0, 1)[0];  // Get first thread in priority inbox
const messages = thread.getMessages();
for (let i = 0; i < messages.length; i++) {
  // At least one of the messages is in priority inbox
  Logger.log(\`is in priority inbox? ${messages[i].isInPriorityInbox()}\`);
}
```

#### Return

`Boolean` — Whether this message is in the priority inbox.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### isInTrash()

Gets whether this message is in the trash.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(\`is in the trash? ${message.isInTrash()}\`);
```

#### Return

`Boolean` — Whether this message is in the trash.

---

### isStarred()

Gets whether this message is starred.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(\`is starred? ${message.isStarred()}\`);
```

#### Return

`Boolean` — Whether this message is starred.

---

### isUnread()

Gets whether this message is unread.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
Logger.log(\`is unread? ${message.isUnread()}\`);
```

#### Return

`Boolean` — The unread status of this message.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### markRead()

Marks the message as read.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
message.markRead();                                // Mark as read
```

#### Return

`GmailMessage` — This GmailMessage, useful for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `isUnread()`

---

### markUnread()

Marks the message as unread.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
message.markUnread();                              // Mark as unread
```

#### Return

`GmailMessage` — This GmailMessage, useful for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `isUnread()`

---

### moveToTrash()

Moves the message to the trash.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
message.moveToTrash();                             // Move message to trash
```

#### Return

`GmailMessage` — This GmailMessage, useful for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `isInTrash()`

---

### refresh()

Reloads this message and associated state from Gmail (useful in case the labels, read state, etc., have changed).

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
// .. Do bunch of stuff here
message.refresh();  // Make sure it's up to date
// Do more stuff to message
```

#### Return

`GmailMessage` — This message for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### reply(body)

Replies to the sender of this message using the reply-to address. The size of the email (including headers) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
// Respond to author of message with acknowledgment
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const message = firstThread.getMessages()[0];
message.reply('Got your message');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | The body of the email. |

#### Return

`GmailMessage` — This message, useful for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `reply(body, options)`
- `replyAll(body)`
- `replyAll(body, options)`

---

### reply(body, options)

Replies to the sender of this message using the reply-to address, with optional arguments.

The email can contain both plain text, and also an HTML body. The size of the email (including headers) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
// Respond with HTML body text
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const message = firstThread.getMessages()[0];
message.reply('incapable of HTML', {
  htmlBody: '<b>some HTML body text</b>',
  noReply: true,
});
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | The body of the email. |
| `options` | `Object` | A JavaScript object that specifies advanced parameters, as listed below. |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `attachments` | `BlobSource[]` | an array of files to send with the email |
| `bcc` | `String` | a comma-separated list of email addresses to BCC |
| `cc` | `String` | a comma-separated list of email addresses to CC |
| `from` | `String` | the address that the email should be sent from, which must be one of the values returned by `GmailApp.getAliases()` |
| `htmlBody` | `String` | when set, devices capable of rendering HTML use it instead of the required body argument; you can add an optional `inlineImages` field in HTML body if you have inlined images for your email |
| `inlineImages` | `Object` | a JavaScript object containing a mapping from image key (`String`) to image data (`BlobSource`); this assumes that the `htmlBody` parameter is used and contains references to these images in the format `<img src="cid:imageKey" />` |
| `name` | `String` | the name of the sender of the email (default: the user's name) |
| `noReply` | `Boolean` | `true` if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for Google Workspace accounts, not Gmail users |
| `replyTo` | `String` | an email address to use as the default reply-to address (default: the user's email address) |
| `subject` | `String` | A new subject line for the email, up to 250 characters. |

#### Return

`GmailMessage` — This message, useful for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `reply(body)`
- `replyAll(body)`
- `replyAll(body, options)`

---

### replyAll(body)

Replies to the sender using the reply-to address and all recipients of this message. The size of the email (including headers) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
// Respond to all recipients (except bcc'd) of last email in thread with
// acknowledgment
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const message = firstThread.getMessages()[0];
message.replyAll('Got your message');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | The body of the email. |

#### Return

`GmailMessage` — This message,useful for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `reply(body)`
- `reply(body, options)`
- `replyAll(body, options)`

---

### replyAll(body, options)

Replies to the sender of this message using the reply-to address and all recipients, with optional arguments.

The email can contain both plain text, and also an HTML body. The size of the email (including headers) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
// Respond with HTML body text
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const message = firstThread.getMessages()[0];
message.replyAll('incapable of HTML', {
  htmlBody: '<b>some HTML body text</b>',
  noReply: true,
});
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | The body of the email. |
| `options` | `Object` | A JavaScript object that specifies advanced parameters, as listed below. |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `attachments` | `BlobSource[]` | an array of files to send with the email |
| `bcc` | `String` | a comma-separated list of email addresses to BCC |
| `cc` | `String` | a comma-separated list of email addresses to CC |
| `from` | `String` | the address that the email should be sent from, which must be one of the values returned by `GmailApp.getAliases()` |
| `htmlBody` | `String` | when set, devices capable of rendering HTML use it instead of the required body argument; you can add an optional `inlineImages` field in HTML body if you have inlined images for your email |
| `inlineImages` | `Object` | a JavaScript object containing a mapping from image key (`String`) to image data (`BlobSource`); this assumes that the `htmlBody` parameter is used and contains references to these images in the format `<img src="cid:imageKey" />` |
| `name` | `String` | the name of the sender of the email (default: the user's name) |
| `noReply` | `Boolean` | `true` if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for Google Workspace accounts, not Gmail users |
| `replyTo` | `String` | an email address to use as the default reply-to address (default: the user's email address) |
| `subject` | `String` | A new subject line for the email, up to 250 characters. |

#### Return

`GmailMessage` — This message, useful for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `reply(body)`
- `reply(body, options)`
- `replyAll(body)`

---

### star()

Stars the message.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
message.star();                                    // Star the message
```

#### Return

`GmailMessage` — This GmailMessage, useful for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `unstar()`

---

### unstar()

Unstars the message.

```
const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
const message = thread.getMessages()[0];           // Get first message
message.unstar();                                  // Unstar the message
```

#### Return

`GmailMessage` — This GmailMessage, useful for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `star()`
