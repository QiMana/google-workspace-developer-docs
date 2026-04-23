---
source: https://developers.google.com/apps-script/reference/gmail/gmail-thread
root: apps-script
fetched_at: 2026-04-23T15:20:37.280Z
---

# Class GmailThread

## Page Summary

- A GmailThread object represents a conversation thread in a user's Gmail account and provides various methods to interact with the thread.
- You can add or remove labels from a thread using the `addLabel()` and `removeLabel()` methods.
- Methods like `createDraftReply()`, `createDraftReplyAll()`, `reply()`, and `replyAll()` allow for creating draft replies or sending replies directly to the thread participants.
- Information about the thread such as its ID, the subject of the first message, the date of the last message, the number of messages, and the messages themselves can be retrieved using methods like `getId()`, `getFirstMessageSubject()`, `getLastMessageDate()`, `getMessageCount()`, and `getMessages()`.
- You can check the status of a thread (starred, important, in chats, in inbox, in priority inbox, in spam, in trash, or unread) using methods like `hasStarredMessages()`, `isImportant()`, `isInChats()`, `isInInbox()`, `isInPriorityInbox()`, `isInSpam()`, `isInTrash()`, and `isUnread()`.

A thread in a user's Gmail account.

## Detailed documentation

### addLabel(label)

Adds this label to the thread.

```
// Add label MyLabel to the first thread in the inbox
const label = GmailApp.getUserLabelByName('MyLabel');
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
firstThread.addLabel(label);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `GmailLabel` | the label to apply to this thread |

#### Return

`GmailThread` — this thread, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `removeLabel(label)`

---

### createDraftReply(body)

Creates a draft message replying to the sender of the last message in this thread using the reply-to address. The size of the email (including headers) is [quota limited](https://developers.google.com/apps-script/guides/services/quotas#current_limitations).

```
// Create a draft reply to the message author with an acknowledgement.
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
firstThread.createDraftReply('Got your message');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | the body of the email |

#### Return

`GmailDraft` — the newly created draft message

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `reply(body)`
- `createDraftReply(body, options)`
- `createDraftReplyAll(body)`
- `createDraftReplyAll(body, options)`

---

### createDraftReply(body, options)

Creates a draft message replying to the sender of the last message in this thread using the reply-to address, with optional arguments.

The email can contain both plain text and an HTML body. The size of the email (including headers) is [quota limited](https://developers.google.com/apps-script/guides/services/quotas#current_limitations).

```
// Create a draft response with an HTML text body.
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
firstThread.createDraftReply('incapable of HTML', {
  htmlBody: '<b>some HTML body text</b>',
  cc: 'another@example.com',
});
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | the body of the email |
| `options` | `Object` | a JavaScript object that specifies advanced parameters, as listed below |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `attachments` | `BlobSource[]` | an array of files to send with the email |
| `bcc` | `String` | a comma-separated list of email addresses to BCC |
| `cc` | `String` | a comma-separated list of email addresses to CC |
| `from` | `String` | the address that the email should be sent from, which must be one of the values returned by `GmailApp.getAliases()` |
| `htmlBody` | `String` | if set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional `inlineImages` field in HTML body if you have inlined images for your email |
| `inlineImages` | `Object` | a JavaScript object containing a mapping from image key (`String`) to image data (`BlobSource`); this assumes that the `htmlBody` parameter is used and contains references to these images in the format `<img src="cid:imageKey" />` |
| `name` | `String` | the name of the sender of the email (default: the user's name) |
| `replyTo` | `String` | an email address to use as the default reply-to address (default: the user's email address) |
| `subject` | `String` | a new subject line for the email (250 characters maximum) |

#### Return

`GmailDraft` — the newly created draft message

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `reply(body, options)`
- `createDraftReply(body)`
- `createDraftReplyAll(body)`
- `createDraftReplyAll(body, options)`

---

### createDraftReplyAll(body)

Creates a draft message replying to the sender of the last message in this thread, using the reply-to address and all recipients of this message. The size of the email (including headers) is [quota limited](https://developers.google.com/apps-script/guides/services/quotas#current_limitations).

```
// Create a draft reply to all recipients (except those bcc'd) of the last email
// in this thread.
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const message = firstThread.getMessages()[0];
message.createDraftReplyAll('Got your message');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | the body of the email |

#### Return

`GmailDraft` — the newly created draft message

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `replyAll(body)`
- `createDraftReply(body)`
- `createDraftReply(body, options)`
- `createDraftReplyAll(body, options)`

---

### createDraftReplyAll(body, options)

Creates a draft message replying to the sender of the last message in this thread, using the reply-to address and all recipients, with optional arguments.

The email can contain both plain text and an HTML body. The size of the email (including headers) is [quota limited](https://developers.google.com/apps-script/guides/services/quotas#current_limitations).

```
// Create a draft reply, using an HTML text body, to all recipients (except
// those bcc'd) of the last email of in this thread.
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
firstThread.createDraftReplyAll('incapable of HTML', {
  htmlBody: '<b>some HTML body text</b>',
  cc: 'another@example.com',
});
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | the body of the email |
| `options` | `Object` | a JavaScript object that specifies advanced parameters, as listed below |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `attachments` | `BlobSource[]` | an array of files to send with the email |
| `bcc` | `String` | a comma-separated list of email addresses to BCC |
| `cc` | `String` | a comma-separated list of email addresses to CC |
| `from` | `String` | the address that the email should be sent from, which must be one of the values returned by `GmailApp.getAliases()` |
| `htmlBody` | `String` | if set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional `inlineImages` field in HTML body if you have inlined images for your email |
| `inlineImages` | `Object` | a JavaScript object containing a mapping from image key (`String`) to image data (`BlobSource`); this assumes that the `htmlBody` parameter is used and contains references to these images in the format `<img src="cid:imageKey" />` |
| `name` | `String` | the name of the sender of the email (default: the user's name) |
| `replyTo` | `String` | an email address to use as the default reply-to address (default: the user's email address) |
| `subject` | `String` | a new subject line for the email. Max size is 250 chars. |

#### Return

`GmailDraft` — the newly created draft message

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `replyAll(body, options)`
- `createDraftReply(body)`
- `createDraftReply(body, options)`
- `createDraftReplyAll(body)`

---

### getFirstMessageSubject()

Gets the subject of the first message in the thread.

```
// Log the subject of the first message in the first thread in the inbox
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
Logger.log(firstThread.getFirstMessageSubject());
```

#### Return

`String` — the subject of the first message in the thread

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getLastMessageDate()`

---

### getId()

Gets the ID of this thread. The ID of a thread varies based on the messages it contains; for a consistent ID for a particular message in the thread, call `getMessages()[0].getId()` instead.

```
// Log the subject of the first message in the first thread in the inbox.
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const id = firstThread.getId();
// Get same thread by its ID.
const thread = GmailApp.getThreadById(id);
Logger.log(
    thread.getFirstMessageSubject() === firstThread.getFirstMessageSubject(),
);  // True
```

#### Return

`String` — the ID of this thread

---

### getLabels()

Returns the user-created labels on this thread.

```
// Log the names of the labels attached to the first thread in the inbox
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const labels = firstThread.getLabels();
for (let i = 0; i < labels.length; i++) {
  Logger.log(labels[i].getName());
}
```

#### Return

`GmailLabel[]` — an array of labels for this thread

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getLastMessageDate()

Gets the date of this thread's most recent message.

```
// Log the date of the most recent message on the first thread in the inbox
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
Logger.log(firstThread.getLastMessageDate());
```

#### Return

`Date` — the date of the most recent message in the thread

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getFirstMessageSubject()`

---

### getMessageCount()

Returns the number of messages in the thread.

```
// Log the number of messages in the thread
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
Logger.log(firstThread.getMessageCount());
```

#### Return

`Integer` — the number of messages in the thread

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getMessages()`

---

### getMessages()

Gets the messages in this thread.

```
// Log the subjects of the messages in the thread
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const messages = firstThread.getMessages();
for (let i = 0; i < messages.length; i++) {
  Logger.log(messages[i].getSubject());
}
```

#### Return

`GmailMessage[]` — an array of Gmail messages in this thread

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getMessageCount()`

---

### getPermalink()

Gets a permalink for this thread.

Note that this only works with the classic Gmail interface, not Inbox.

```
// Logs the permalink for the first thread in the inbox
const thread = GmailApp.getInboxThreads(0, 1)[0];
Logger.log(thread.getPermalink());
```

#### Return

`String` — the permalink for this thread

---

### hasStarredMessages()

Returns whether the thread has any starred messages.

```
// Log if this thread has starred messages
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
Logger.log(\`has starred : ${firstThread.hasStarredMessages()}\`);
```

#### Return

`Boolean` — true if the thread has any starred messages

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### isImportant()

Returns whether the thread is marked as important.

```
// Log if this thread is marked as important
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
Logger.log(\`Important? : ${firstThread.isImportant()}\`);
```

#### Return

`Boolean` — Whether the thread is marked as important.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### isInChats()

Returns whether the thread is labeled a chat.

```
// Log if this thread is a chat
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
Logger.log(\`is in chats? : ${firstThread.isInChats()}\`);
```

#### Return

`Boolean` — true if the thread is labeled a chat

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### isInInbox()

Returns whether the thread is in the inbox.

```
// Log if this thread is in the inbox
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
Logger.log(\`is in the inbox? : ${firstThread.isInInbox()}\`);
```

#### Return

`Boolean` — true if the thread is in the inbox

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### isInPriorityInbox()

Returns true if this thread is in the priority inbox; returns false otherwise.

```
// Log if this thread is in the priority inbox
const firstThread = GmailApp.getPriorityInboxThreads(0, 1)[0];
Logger.log(\`is in priority inbox? ${firstThread.isInPriorityInbox()}\`);
```

#### Return

`Boolean` — true if the thread is in the priority inbox

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### isInSpam()

Returns whether the thread is marked as spam.

```
// Log if this thread is in the spam folder
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
Logger.log(\`Spam? ${firstThread.isInSpam()}\`);
```

#### Return

`Boolean` — Whether this thread is marked as spam.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### isInTrash()

Returns whether the thread is in the trash.

```
// Log if this thread is in the trash
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
Logger.log(\`Trashed? ${firstThread.isInTrash()}\`);
```

#### Return

`Boolean` — true if the thread is in the trash

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### isUnread()

Returns whether the thread has any unread messages.

```
// Log if this thread is unread
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
Logger.log(\`Unread? ${firstThread.isUnread()}\`);
```

#### Return

`Boolean` — true if there are unread messages

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### markImportant()

Marks this thread as important.

```
// Mark first inbox thread as important
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
firstThread.markImportant();
```

#### Return

`GmailThread` — this thread, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markUnimportant()`

---

### markRead()

Marks this thread as read.

```
// Mark first inbox thread as read
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
firstThread.markRead();
```

#### Return

`GmailThread` — this thread, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markUnread()`

---

### markUnimportant()

Marks this thread as unimportant.

```
// Mark first inbox thread as unimportant
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
firstThread.markUnimportant();
```

#### Return

`GmailThread` — this thread, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markImportant()`

---

### markUnread()

Marks this thread as unread.

```
// Mark first inbox thread as unread
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
firstThread.markUnread();
```

#### Return

`GmailThread` — this thread, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markRead()`

---

### moveToArchive()

Moves this thread to the archive.

```
// Archive first inbox thread
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
firstThread.moveToArchive();
```

#### Return

`GmailThread` — this thread, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### moveToInbox()

Moves this thread to the inbox.

```
// Move first non-inbox thread to inbox
const firstThread = GmailApp.search('-in:inbox')[0];
firstThread.moveToInbox();
```

#### Return

`GmailThread` — this thread, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### moveToSpam()

Moves this thread to spam.

```
// Move first inbox thread to spam
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
firstThread.moveToSpam();
```

#### Return

`GmailThread` — this thread, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### moveToTrash()

Moves this thread to the trash.

```
// Move first inbox thread to trash
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
firstThread.moveToTrash();
```

#### Return

`GmailThread` — this thread, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### refresh()

Reloads this thread, and associated state from Gmail (useful in case the labels, read state, etc., have changed).

```
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
// ...Do something that may take a while here....
firstThread.refresh();  // Make sure it's up-to-date
// ...Do more stuff with firstThread ...
```

#### Return

`GmailThread` — this thread, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### removeLabel(label)

Removes this label from the thread.

```
const myLabel = GmailApp.getUserLabelByName('<your label>');
const threads = myLabel.getThreads();
for (const thread of threads) {
  thread.removeLabel(myLabel);
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `GmailLabel` | the label to remove from this thread |

#### Return

`GmailThread` — this thread, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `addLabel(label)`

---

### reply(body)

Reply to the sender of the last message on this thread using the replyTo address.

Note that the total size of the email (including all headers) may not exceed 20KB.

```
// Respond to author of last email in thread with acknowledgment
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
firstThread.reply('Got your message');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | the body of the email |

#### Return

`GmailThread` — this thread, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `reply(body, options)`
- `replyAll(body)`
- `replyAll(body, options)`

---

### reply(body, options)

Reply to the sender of the last message on this thread using the replyTo address, with optional arguments. The email can contain both plain text, and also an HTML body. Note that the total size of the email (including all headers, but excluding attachments) may not exceed 20KB.

```
// Respond with HTML body text.
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
firstThread.reply('incapable of HTML', {
  htmlBody: 'some HTML body text',
  noReply: true,
});
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | the body of the email |
| `options` | `Object` | a JavaScript object that specifies advanced parameters, as listed below |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `cc` | `String` | a comma separated list of email addresses to CC |
| `bcc` | `String` | a comma separated list of email addresses to BCC |
| `htmlBody` | `String` | if set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional `inlineImages` field in HTML body if you have inlined images for your email |
| `name` | `String` | the name of the sender of the email (default: the user's name) |
| `from` | `String` | the address that the email should be sent from, which must be one of the values returned by `GmailApp.getAliases()` |
| `replyTo` | `String` | an email address to use as the default reply-to address (default: the user's email address) |
| `noReply` | `Boolean` | `true` if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for Google Workspace accounts, not Gmail users |
| `attachments` | `BlobSource[]` | an array of files to send with the email |
| `inlineImages` | `Object` | a JavaScript object containing a mapping from image key (`String`) to image data (`BlobSource`); this assumes that the `htmlBody` parameter is used and contains references to these images in the format `<img src="cid:imageKey" />` |

#### Return

`GmailThread` — this thread, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `reply(body)`
- `replyAll(body)`
- `replyAll(body, options)`

---

### replyAll(body)

Reply to the sender (using the replyTo address), and all recipients of the last message on this thread.

Note that the total size of the email (including all headers) may not exceed 20KB.

```
// Respond to all with acknowledgment to the first thread in the inbox
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
firstThread.replyAll('Got your message');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | the body of the email |

#### Return

`GmailThread` — this thread, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `reply(body, options)`
- `reply(body)`
- `replyAll(body, options)`

---

### replyAll(body, options)

Reply to the sender (using the `replyTo` address), and all recipients of the last message on this thread, with optional arguments. The email can contain both plain text, and also an HTML body. Note that the total size of the email (including all headers, but excluding attachments) may not exceed 20KB.

```
// Respond with HTML body text.
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
firstThread.replyAll('incapable of HTML', {
  htmlBody: 'some HTML body text',
  noReply: true,
});
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `body` | `String` | the body of the email |
| `options` | `Object` | a JavaScript object that specifies advanced parameters, as listed below |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `cc` | `String` | a comma separated list of email addresses to CC |
| `bcc` | `String` | a comma separated list of email addresses to BCC |
| `htmlBody` | `String` | if set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional `inlineImages` field in HTML body if you have inlined images for your email |
| `name` | `String` | the name of the sender of the email (default: the user's name) |
| `from` | `String` | the address that the email should be sent from, which must be one of the values returned by `GmailApp.getAliases()` |
| `replyTo` | `String` | an email address to use as the default reply-to address (default: the user's email address) |
| `noReply` | `Boolean` | `true` if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for G Suite accounts, not Gmail users |
| `attachments` | `BlobSource[]` | an array of files to send with the email |
| `inlineImages` | `Object` | a JavaScript object containing a mapping from image key (`String`) to image data (`BlobSource`); this assumes that the `htmlBody` parameter is used and contains references to these images in the format `<img src="cid:imageKey" />` |

#### Return

`GmailThread` — this thread, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `reply(body)`
- `replyAll(body)`
- `replyAll(body, options)`
