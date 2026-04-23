---
source: https://developers.google.com/apps-script/reference/gmail/gmail-app
root: apps-script
fetched_at: 2026-04-23T15:20:29.742Z
---

# Class GmailApp

## Page Summary

- The `GmailApp` class in Google Apps Script provides methods to interact with Gmail, managing threads, messages, and labels.
- Key functionalities include managing drafts, retrieving threads and messages by various criteria, and handling labels.
- You can use `GmailApp` to get unread counts, mark items as read/unread or important/unimportant, and move items to different folders like trash, archive, inbox, or spam.
- The service allows refreshing item states from Gmail, searching threads using queries, and sending emails with various options including attachments and HTML bodies.
- Most methods return a `GmailApp` object or specific Gmail objects, and all methods require authorization with the `https://mail.google.com/` scope.

Provides access to Gmail threads, messages, and labels.

## Detailed documentation

### createDraft(recipient, subject, body)

Creates a draft email message. The size of the email (including headers) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
// The code below creates a draft email with the current date and time.
const now = new Date();
GmailApp.createDraft(
    'mike@example.com',
    'current time',
    \`The time is: ${now.toString()}\`,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `recipient` | `String` | comma separated list of email addresses |
| `subject` | `String` | subject of the email |
| `body` | `String` | body of the email |

#### Return

`GmailDraft` — the newly created GmailDraft

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `createDraft(recipient, subject, body, options)`

---

### createDraft(recipient, subject, body, options)

Creates a draft email message with optional arguments. The email can contain plain text or an HTML body. The size of the email (including headers, but excluding attachments) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
// Create a draft email with a file from Google Drive attached as a PDF.
const file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
GmailApp.createDraft(
    'mike@example.com',
    'Attachment example',
    'Please see attached file.',
    {
      attachments: [file.getAs(MimeType.PDF)],
      name: 'Automatic Emailer Script',
    },
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `recipient` | `String` | the addresses of the recipient |
| `subject` | `String` | the subject line |
| `body` | `String` | the body of the email |
| `options` | `Object` | a JavaScript object that specifies advanced parameters, as listed below |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `attachments` | `BlobSource[]` | an array of files to send with the email |
| `bcc` | `String` | a comma-separated list of email addresses to BCC |
| `cc` | `String` | a comma-separated list of email addresses to CC |
| `from` | `String` | the address that the email should be sent from, which must be one of the values returned by `getAliases()` |
| `htmlBody` | `String` | if set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional `inlineImages` field in HTML body if you have inlined images for your email |
| `inlineImages` | `Object` | a JavaScript object containing a mapping from image key (`String`) to image data (`BlobSource`); this assumes that the `htmlBody` parameter is used and contains references to these images in the format `<img src="cid:imageKey" />` |
| `name` | `String` | the name of the sender of the email (default: the user's name) |
| `replyTo` | `String` | an email address to use as the default reply-to address (default: the user's email address) |

#### Return

`GmailDraft` — the newly created GmailDraft

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `createDraft(recipient, subject, body)`

---

### createLabel(name)

Create a new user label of the given name.

```
// Creates the label @FOO and logs label: FOO
Logger.log(\`label: ${GmailApp.createLabel('FOO')}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | the name of the new label |

#### Return

`GmailLabel` — the newly created label

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `deleteLabel(label)`

---

### deleteLabel(label)

Deletes the specified label.

```
// Have to get the label by name first
const label = GmailApp.getUserLabelByName('FOO');
GmailApp.deleteLabel(label);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `GmailLabel` | the label to delete |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `createLabel(name)`

---

### getAliases()

Gets a list of the emails that are set up as aliases for this account in Gmail.

You can send a message from any of these aliases by using the "from" optional argument.

```
// Log the aliases for this Gmail account and send an email as the first one.
const me = Session.getActiveUser().getEmail();
const aliases = GmailApp.getAliases();
Logger.log(aliases);
if (aliases.length > 0) {
  GmailApp.sendEmail(me, 'From an alias', 'A message from an alias!', {
    from: aliases[0],
  });
} else {
  GmailApp.sendEmail(me, 'No aliases found', 'You have no aliases.');
}
```

#### Return

`String[]` — an array of aliases for this account

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `sendEmail(recipient, subject, body, options)`

---

### getDraft(draftId)

Retrieve an email message draft by ID.

Use this in conjunction with getId() on Gmail drafts.

```
// Get the first draft message in your drafts folder
const draft = GmailApp.getDrafts()[0];
// Get its ID
const draftId = draft.getId();
// Now fetch the same draft using that ID.
const draftById = GmailApp.getDraft(draftId);
// Should always log true as they should be the same message
Logger.log(
    draft.getMessage().getSubject() === draftById.getMessage().getSubject(),
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `draftId` | `String` | the ID of the draft to retrieve |

#### Return

`GmailDraft` — the draft with the given ID

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if no draft with the given ID can be found

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getDraftMessages()

Retrieves all draft messages.

```
// Logs the number of draft messages
const drafts = GmailApp.getDraftMessages();
Logger.log(drafts.length);
```

#### Return

`GmailMessage[]` — an array of draft Gmail messages

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getDrafts()

Gets all Gmail draft messages.

```
const drafts = GmailApp.getDrafts();
for (let i = 0; i < drafts.length; i++) {
  Logger.log(drafts[i].getId());
}
```

#### Return

`GmailDraft[]` — an array of Gmail draft messages

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getInboxThreads()

Retrieves all Inbox threads irrespective of labels.

This call will fail when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, please use the 'paged' call, and specify ranges of the threads to retrieve in each call.

```
// Log the subject lines of your Inbox
const threads = GmailApp.getInboxThreads();
for (let i = 0; i < threads.length; i++) {
  Logger.log(threads[i].getFirstMessageSubject());
}
```

#### Return

`GmailThread[]` — an array of Gmail threads in the Inbox

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getInboxThreads(start, max)

Retrieves a range of Inbox threads irrespective of labels.

```
// Log the subject lines of up to the first 50 emails in your Inbox
const threads = GmailApp.getInboxThreads(0, 50);
for (let i = 0; i < threads.length; i++) {
  Logger.log(threads[i].getFirstMessageSubject());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Integer` | the index of the first thread to retrieve |
| `max` | `Integer` | the maximum number of threads to retrieve |

#### Return

`GmailThread[]` — an array of Gmail threads in the Inbox

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getInboxUnreadCount()

Gets the number of unread threads in the inbox.

```
Logger.log(\`Messages unread in inbox: ${GmailApp.getInboxUnreadCount()}\`);
```

#### Return

`Integer` — the number of threads in the inbox that have unread messages

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getMessageById(id)

Gets a message by ID.

Use this in conjunction with getId() on Gmail messages.

```
// Get the first message in the first thread of your inbox
const message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
// Get its ID
const messageId = message.getId();
// Now fetch the same message using that ID.
const messageById = GmailApp.getMessageById(messageId);
// Should always log true as they should be the same message
Logger.log(message.getSubject() === messageById.getSubject());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | the ID of the message to retrieve |

#### Return

`GmailMessage` — the message with the given ID

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if no message with the given ID can be found

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getThreadById(id)`

---

### getMessagesForThread(thread)

Retrieve all messages in the specified thread.

```
// Log all the subject lines in the first thread of your inbox
const thread = GmailApp.getInboxThreads(0, 1)[0];
const messages = GmailApp.getMessagesForThread(thread);
for (let i = 0; i < messages.length; i++) {
  Logger.log(\`subject: ${messages[i].getSubject()}\`);
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `thread` | `GmailThread` | the thread of messages to retrieve |

#### Return

`GmailMessage[]` — array of messages corresponding to this thread

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getMessagesForThreads(threads)`

---

### getMessagesForThreads(threads)

Retrieve all messages in the specified threads.

```
// Log the subject lines of all messages in the first two threads of your inbox
const thread = GmailApp.getInboxThreads(0, 2);
const messages = GmailApp.getMessagesForThreads(thread);
for (let i = 0; i < messages.length; i++) {
  for (let j = 0; j < messages[i].length; j++) {
    Logger.log(\`subject: ${messages[i][j].getSubject()}\`);
  }
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `threads` | `GmailThread[]` | the threads of messages to retrieve |

#### Return

`GmailMessage[][]` — an array of arrays of messages, where each item in the outer array corresponds to a thread and the inner array contains the messages in that thread

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getMessagesForThread(thread)`

---

### getPriorityInboxThreads()

Retrieves all Priority Inbox threads irrespective of labels.

This call will fail when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, please use the 'paged' call, and specify ranges of the threads to retrieve in each call.

```
Logger.log(
    \`# of messages in your Priority Inbox: ${
        GmailApp.getPriorityInboxThreads().length}\`,
);
```

#### Return

`GmailThread[]` — an array of Gmail threads in the Priority Inbox

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getPriorityInboxThreads(start, max)

Retrieves a range of Priority Inbox threads irrespective of labels.

```
// Will log some number 2 or less
Logger.log(
    \`# of messages in your Priority Inbox: ${
        GmailApp.getPriorityInboxThreads(0, 2).length}\`,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Integer` | the index of the first thread to retrieve |
| `max` | `Integer` | the maximum number of threads to retrieve |

#### Return

`GmailThread[]` — an array of Gmail threads in the Priority Inbox

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getPriorityInboxUnreadCount()

Gets the number of unread threads in the Priority Inbox.

```
Logger.log(
    \`Number of unread emails in your Priority Inbox : ${
        GmailApp.getPriorityInboxUnreadCount()}\`,
);
```

#### Return

`Integer` — the number of threads in the Priority Inbox that have unread messages

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getSpamThreads()

Retrieves all spam threads irrespective of labels.

This call will fail when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, please use the 'paged' call, and specify ranges of the threads to retrieve in each call.

```
Logger.log(\`# of total spam threads: ${GmailApp.getSpamThreads().length}\`);
```

#### Return

`GmailThread[]` — an array of Gmail threads in the spam folder

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getSpamThreads(start, max)

Retrieves a range of spam threads irrespective of labels.

```
// Will log a number at most 5
Logger.log(\`# of total spam threads: ${GmailApp.getSpamThreads(0, 5).length}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Integer` | the index of the first thread to retrieve |
| `max` | `Integer` | the maximum number of threads to retrieve |

#### Return

`GmailThread[]` — an array of Gmail threads in the spam folder

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getSpamUnreadCount()

Gets the number of unread threads that are spam.

```
// Unless you actually read stuff in your spam folder, this should be the same
// as the number of messages in your spam folder.
Logger.log(\`# unread threads that are spam: ${GmailApp.getSpamUnreadCount()}\`);
```

#### Return

`Integer` — the number spam threads that have unread messages

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getStarredThreads()

Retrieves all starred threads irrespective of labels.

This call will fail when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, please use the 'paged' call, and specify ranges of the threads to retrieve in each call.

```
// Logs the number of starred threads
Logger.log(\`# Starred threads: ${GmailApp.getStarredThreads().length}\`);
```

#### Return

`GmailThread[]` — an array of starred Gmail threads

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getStarredThreads(start, max)

Retrieves a range of starred threads irrespective of labels.

```
// Logs the number of starred threads to a maximum of 5
Logger.log(\`# Starred threads: ${GmailApp.getStarredThreads(0, 5).length}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Integer` | the index of the first thread to retrieve |
| `max` | `Integer` | the maximum number of threads to retrieve |

#### Return

`GmailThread[]` — an array of starred Gmail threads

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getStarredUnreadCount()

Gets the number of unread threads that are starred.

```
Logger.log(\`# unread and starred: ${GmailApp.getStarredUnreadCount()}\`);
```

#### Return

`Integer` — the number of starred threads that have unread messages

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getThreadById(id)

Gets a thread by ID.

Use this in conjunction with getId() on Gmail threads.

```
// Gets the first inbox thread.
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
// Gets the same thread by ID.
const threadById = GmailApp.getThreadById(firstThread.getId());
// Verifies that they are the same.
console.log(
    firstThread.getFirstMessageSubject() ===
        threadById.getFirstMessageSubject(),
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID of the thread to retrieve. |

#### Return

`GmailThread|null` — The thread with the given ID or `null` if not found.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getMessageById(id)`

---

### getTrashThreads()

Retrieves all trash threads irrespective of labels.

This call will fail when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, please use the 'paged' call, and specify ranges of the threads to retrieve in each call.

```
Logger.log(\`# of total trash threads: ${GmailApp.getTrashThreads().length}\`);
```

#### Return

`GmailThread[]` — an array of Gmail threads in the trash

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getTrashThreads(start, max)

Retrieves a range of trash threads irrespective of labels.

```
// Will log a number at most 5
Logger.log(
    \`# of total trash threads: ${GmailApp.getTrashThreads(0, 5).length}\`,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Integer` | the index of the first thread to retrieve |
| `max` | `Integer` | the maximum number of threads to retrieve |

#### Return

`GmailThread[]` — an array of Gmail threads in the trash

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getUserLabelByName(name)

Retrieves a label given the label name.

```
const labelObject = GmailApp.getUserLabelByName('myLabel');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | the name of the label to retrieve |

#### Return

`GmailLabel` — the Gmail label with the given name

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getUserLabels()

Retrieves a list of user-created labels.

```
// Logs all of the names of your labels
const labels = GmailApp.getUserLabels();
for (let i = 0; i < labels.length; i++) {
  Logger.log(\`label: ${labels[i].getName()}\`);
}
```

#### Return

`GmailLabel[]` — array of user created labels

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### markMessageRead(message)

Marks this message read and forces the message to refresh.

```
// Mark the first message in the first thread of your inbox as read
const message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
GmailApp.markMessageRead(message);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `message` | `GmailMessage` | the message to mark as read |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markMessageUnread(message)`

---

### markMessageUnread(message)

Marks this message unread and forces the message to refresh.

```
// Mark the first message in the first thread of your inbox as unread
const message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
GmailApp.markMessageUnread(message);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `message` | `GmailMessage` | the message to mark as unread |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markMessageRead(message)`

---

### markMessagesRead(messages)

Marks these messages read and forces the messages to refresh.

```
// Mark first three messages in the first inbox thread as read.
// Assumes that the first inbox thread has 3 messages in it.
const threadMessages = GmailApp.getInboxThreads(0, 1)[0].getMessages();
const messages = [threadMessages[0], threadMessages[1], threadMessages[2]];
GmailApp.markMessagesRead(messages);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `messages` | `GmailMessage[]` | an array of messages to mark as read |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markMessagesUnread(messages)`

---

### markMessagesUnread(messages)

Marks these messages unread and forces the messages to refresh.

```
// Mark first three messages in the first inbox thread as unread.
// Assumes that the first inbox thread has 3 messages in it
const threadMessages = GmailApp.getInboxThreads(0, 1)[0].getMessages();
const messages = [threadMessages[0], threadMessages[1], threadMessages[2]];
GmailApp.markMessagesUnread(messages);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `messages` | `GmailMessage[]` | an array of messages to mark as unread |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markMessagesRead(messages)`

---

### markThreadImportant(thread)

Marks this thread as important and forces the thread to refresh.

```
// Marks first inbox thread as important
const thread = GmailApp.getInboxThreads(0, 1)[0];
GmailApp.markThreadImportant(thread);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `thread` | `GmailThread` | the thread to mark as important |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markThreadUnimportant(thread)`

---

### markThreadRead(thread)

Marks this thread as read and forces the thread to refresh.

```
// Marks first inbox thread as read
const thread = GmailApp.getInboxThreads(0, 1)[0];
GmailApp.markThreadRead(thread);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `thread` | `GmailThread` | the thread to mark as read |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markThreadUnread(thread)`

---

### markThreadUnimportant(thread)

Marks this thread as unimportant and forces the thread to refresh.

```
// Marks first inbox thread as unimportant
const thread = GmailApp.getInboxThreads(0, 1)[0];
GmailApp.markThreadUnimportant(thread);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `thread` | `GmailThread` | the thread to mark as unimportant |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markThreadImportant(thread)`

---

### markThreadUnread(thread)

Marks this thread unread and forces the thread to refresh.

```
// Marks first inbox thread as unread
const thread = GmailApp.getInboxThreads(0, 1)[0];
GmailApp.markThreadUnread(thread);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `thread` | `GmailThread` | the thread to mark as unread |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markThreadRead(thread)`

---

### markThreadsImportant(threads)

Marks these threads as important and forces the threads to refresh.

```
// Marks first two threads in inbox as important
const threads = GmailApp.getInboxThreads(0, 2);
GmailApp.markThreadsImportant(threads);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `threads` | `GmailThread[]` | an array of threads to mark as important |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markThreadsUnimportant(threads)`

---

### markThreadsRead(threads)

Marks these threads as read and forces the threads to refresh.

```
// Marks first two threads in inbox as read
const threads = GmailApp.getInboxThreads(0, 2);
GmailApp.markThreadsRead(threads);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `threads` | `GmailThread[]` | an array of threads to mark as read |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markThreadsUnread(threads)`

---

### markThreadsUnimportant(threads)

Marks these threads as unimportant and forces the threads to refresh.

```
// Marks first two threads in inbox as unimportant
const threads = GmailApp.getInboxThreads(0, 2);
GmailApp.markThreadsUnimportant(threads);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `threads` | `GmailThread[]` | an array of threads to mark as unimportant |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markThreadsImportant(threads)`

---

### markThreadsUnread(threads)

Marks these threads as unread and forces the threads to refresh.

```
// Marks first two threads in inbox as unread
const threads = GmailApp.getInboxThreads(0, 2);
GmailApp.markThreadsUnread(threads);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `threads` | `GmailThread[]` | an array of threads to mark as unread |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `markThreadsRead(threads)`

---

### moveMessageToTrash(message)

Moves the message to the trash and forces the message to refresh.

```
// Move the first message in your inbox to trash
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const firstMessage = firstThread.getMessages()[0];
GmailApp.moveMessageToTrash(firstMessage);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `message` | `GmailMessage` | the message to be trashed |

#### Return

`GmailApp` — the Gmail service (useful for chaining)

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `moveMessagesToTrash(messages)`

---

### moveMessagesToTrash(messages)

Moves the specified messages to the trash and forces the messages to refresh.

```
// Move first two messages in your inbox to trash
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const messages = firstThread.getMessages();
const toDelete = [messages[0], messages[1]];
GmailApp.moveMessagesToTrash(toDelete);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `messages` | `GmailMessage[]` | the messages to be trashed |

#### Return

`GmailApp` — the Gmail service (useful for chaining)

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `moveMessageToTrash(message)`

---

### moveThreadToArchive(thread)

Moves this thread to the archive and forces the thread to refresh.

```
// Archive the first thread in your inbox
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
GmailApp.moveThreadToArchive(firstThread);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `thread` | `GmailThread` | the thread to be archive |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `moveThreadToInbox(thread)`
- `moveThreadToSpam(thread)`
- `moveThreadToTrash(thread)`

---

### moveThreadToInbox(thread)

Moves this thread to the inbox and forces the thread to refresh.

```
// Find a thread not already in your inbox
const thread = GmailApp.search('-in:inbox')[0];  // Get the first one
GmailApp.moveThreadToInbox(thread);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `thread` | `GmailThread` | the thread to be moved to the inbox |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `moveThreadToTrash(thread)`
- `moveThreadToSpam(thread)`
- `moveThreadToArchive(thread)`

---

### moveThreadToSpam(thread)

Moves this thread to spam and forces the thread to refresh.

```
// Tag first thread in inbox as spam
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
GmailApp.moveThreadToSpam(firstThread);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `thread` | `GmailThread` | the thread to be moved to spam |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `moveThreadToTrash(thread)`
- `moveThreadToInbox(thread)`
- `moveThreadToArchive(thread)`

---

### moveThreadToTrash(thread)

Moves this thread to the trash and forces the thread to refresh.

```
// Move first thread in inbox to trash
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
GmailApp.moveThreadToTrash(firstThread);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `thread` | `GmailThread` | the thread to be trashed |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `moveThreadToInbox(thread)`
- `moveThreadToSpam(thread)`
- `moveThreadToArchive(thread)`

---

### moveThreadsToArchive(threads)

Moves these threads to the archive and forces the threads to refresh.

```
// Move first two threads in your inbox to the archive
const firstTwoThreads = GmailApp.getInboxThreads(0, 2);
GmailApp.moveThreadsToArchive(firstTwoThreads);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `threads` | `GmailThread[]` | an array of threads to be archived |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `moveThreadsToInbox(threads)`
- `moveThreadsToSpam(threads)`
- `moveThreadsToTrash(threads)`

---

### moveThreadsToInbox(threads)

Moves these threads to the inbox and forces the threads to refresh.

```
// Find two threads not already in your inbox
const firstTwoThreads = GmailApp.search('-in:inbox', 0, 2);
GmailApp.moveThreadsToInbox(firstTwoThreads);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `threads` | `GmailThread[]` | an array of threads to be moved to the inbox |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `moveThreadsToTrash(threads)`
- `moveThreadsToSpam(threads)`
- `moveThreadsToArchive(threads)`

---

### moveThreadsToSpam(threads)

Moves these threads to spam and forces the threads to refresh.

```
// Move first two threads in your inbox to spam
const firstTwoThreads = GmailApp.getInboxThreads(0, 2);
GmailApp.moveThreadsToSpam(firstTwoThreads);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `threads` | `GmailThread[]` | an array of threads to be moved to spam |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `moveThreadsToInbox(threads)`
- `moveThreadsToTrash(threads)`
- `moveThreadsToArchive(threads)`

---

### moveThreadsToTrash(threads)

Moves these threads to the trash and forces the threads to refresh.

```
// Move first two threads in your inbox to trash
const firstTwoThreads = GmailApp.getInboxThreads(0, 2);
GmailApp.moveThreadsToTrash(firstTwoThreads);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `threads` | `GmailThread[]` | an array of threads to be trashed |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `moveThreadsToInbox(threads)`
- `moveThreadsToSpam(threads)`
- `moveThreadsToArchive(threads)`

---

### refreshMessage(message)

Reloads the message and associated state from Gmail (useful in case the labels, read state, etc., have changed).

```
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const firstMessage = firstThread.getMessages()[0];
// ...Do something that may take a while here....
GmailApp.refreshMessage(firstMessage);
// ...Do more stuff with firstMessage...
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `message` | `GmailMessage` | the message to be refreshed |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `refreshMessages(messages)`

---

### refreshMessages(messages)

Reloads the messages and associated state from Gmail (useful in case the labels, read state, etc., have changed).

```
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const coupleOfMessages = firstThread.getMessages().slice(0, 2);
// ...Do something that may take a while here....
GmailApp.refreshMessages(coupleOfMessages);
// ...Do more stuff with coupleOfMessages...
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `messages` | `GmailMessage[]` | the messages to be refreshed |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `refreshMessage(message)`

---

### refreshThread(thread)

Reloads the thread and associated state from Gmail (useful in case the labels, read state, etc., have changed).

```
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
// ...Do something that may take a while here....
GmailApp.refreshThread(firstThread);
// ... Do more stuff with the thread ...
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `thread` | `GmailThread` | the thread to be refreshed |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `refreshThreads(threads)`

---

### refreshThreads(threads)

Reloads the threads and associated state from Gmail (useful in case the labels, read state, etc., have changed).

```
const threads = GmailApp.getInboxThreads(0, 3);
// ...Do something that may take a while here....
GmailApp.refreshThreads(threads);
// ... Do more stuff with threads ...
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `threads` | `GmailThread[]` | the threads to be refreshed |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `refreshThread(thread)`

---

### search(query)

Search Gmail with the given query.

This call will fail when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, please use the 'paged' call, and specify ranges of the threads to retrieve in each call.

```
// Find starred messages with subject IMPORTANT
const threads = GmailApp.search('is:starred subject:"IMPORTANT"');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the search query, as you would type it into Gmail |

#### Return

`GmailThread[]` — an array of Gmail threads matching this query

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### search(query, start, max)

Search Gmail with the given query.

```
// Find starred messages with subject IMPORTANT and return second batch of 10.
// Assumes there are at least 11 of them, otherwise this will return an empty
// array.
const threads = GmailApp.search('is:starred subject:"IMPORTANT"', 10, 10);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the search query, as you would type it into Gmail |
| `start` | `Integer` | the index of the starting thread |
| `max` | `Integer` | the maximum number of threads to return |

#### Return

`GmailThread[]` — an array of Gmail threads matching this query

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### sendEmail(recipient, subject, body)

Sends an email message. The size of the email (including headers) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
// The code below will send an email with the current date and time.
const now = new Date();
GmailApp.sendEmail(
    'mike@example.com',
    'current time',
    \`The time is: ${now.toString()}\`,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `recipient` | `String` | comma separated list of email addresses |
| `subject` | `String` | subject of the email (250 characters maximum) |
| `body` | `String` | body of the email |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `sendEmail(recipient, subject, body, options)`

---

### sendEmail(recipient, subject, body, options)

Sends an email message with optional arguments. The email can contain plain text or an HTML body. The size of the email (including headers, but excluding attachments) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
// Send an email with a file from Google Drive attached as a PDF.
const file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
GmailApp.sendEmail(
    'mike@example.com',
    'Attachment example',
    'Please see the attached file.',
    {
      attachments: [file.getAs(MimeType.PDF)],
      name: 'Automatic Emailer Script',
    },
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `recipient` | `String` | the addresses of the recipient |
| `subject` | `String` | the subject line (250 characters maximum) |
| `body` | `String` | the body of the email |
| `options` | `Object` | a JavaScript object that specifies advanced parameters, as listed below |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `attachments` | `BlobSource[]` | an array of files to send with the email |
| `bcc` | `String` | a comma-separated list of email addresses to BCC |
| `cc` | `String` | a comma-separated list of email addresses to CC |
| `from` | `String` | the address that the email should be sent from, which must be one of the values returned by `getAliases()` |
| `htmlBody` | `String` | if set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional `inlineImages` field in HTML body if you have inlined images for your email |
| `inlineImages` | `Object` | a JavaScript object containing a mapping from image key (`String`) to image data (`BlobSource`); this assumes that the `htmlBody` parameter is used and contains references to these images in the format `<img src="cid:imageKey" />` |
| `name` | `String` | the name of the sender of the email (default: the user's name) |
| `noReply` | `Boolean` | `true` if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for Google Workspace accounts, not Gmail users |
| `replyTo` | `String` | an email address to use as the default reply-to address (default: the user's email address) |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `sendEmail(recipient, subject, body)`

---

### setCurrentMessageAccessToken(accessToken)

Sets the [current message access token](../../../workspace/add-ons/concepts/workspace-scopes.md#access_tokens) that enables the script to access the current `GmailMessage` properties.

Only [Google Workspace add-on](../../../workspace/add-ons/gmail.md) projects using Gmail [current message scopes](../../../workspace/add-ons/concepts/workspace-scopes.md#gmail-scopes) require this method.

```
function handleAddonActionEvent(e) {
  GmailApp.setCurrentMessageAccessToken(e.messageMetadata.accessToken);
  const mailMessage = GmailApp.getMessageById(e.messageMetadata.messageId);
  // Do something with mailMessage
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `accessToken` | `String` | the temporary access token obtained from a Gmail add-on [action event object](../../../workspace/add-ons/concepts/actions.md#action_event_objects). |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### starMessage(message)

Adds a star to this message and forces the message to refresh.

```
// Stars the first message in the first thread in your inbox
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const message = firstThread.getMessages()[0];
GmailApp.starMessage(message);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `message` | `GmailMessage` | the message to star |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `starMessages(messages)`

---

### starMessages(messages)

Adds stars to these messages and forces the messages to refresh.

```
// Stars the first three messages in the first thread in your inbox
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const coupleOfMessages = firstThread.getMessages().slice(0, 3);
GmailApp.starMessages(coupleOfMessages);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `messages` | `GmailMessage[]` | an array of messages to star |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `starMessage(message)`

---

### unstarMessage(message)

Removes a star from this message and forces the message to refresh.

```
// Unstars the first message in the first thread in your inbox
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const message = firstThread.getMessages()[0];
GmailApp.unstarMessage(message);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `message` | `GmailMessage` | the message to unstar |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `unstarMessages(messages)`

---

### unstarMessages(messages)

Removes stars from these messages and forces the messages to refresh.

```
// Unstars the first three messages in the first thread in your inbox
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
const coupleOfMessages = firstThread.getMessages().slice(0, 3);
GmailApp.unstarMessages(coupleOfMessages);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `messages` | `GmailMessage[]` | an array of messages to unstar |

#### Return

`GmailApp` — the Gmail service, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `unstarMessage(message)`

## Deprecated methods

### getChatThreads()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all classic Google Hangouts threads and Google Chat threads until Google switches all users of classic Hangouts to Chat later this year. To learn more, see [Learn about the switch from classic Hangouts to Google Chat](https://support.google.com/chat/answer/9854901).

This call fails when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, use the 'paged' call, and specify ranges of the threads to retrieve in each call.

```
const threads = GmailApp.getChatThreads();
Logger.log(\`# of chat threads: ${threads.length}\`);
```

#### Return

`GmailThread[]` — An array of chat threads from Gmail.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getChatThreads(start, max)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets a range of classic Google Hangouts threads and Google Chat threads until Google switches all users of classic Hangouts to Chat later this year. To learn more, see [Learn about the switch from classic Hangouts to Google Chat](https://support.google.com/chat/answer/9854901).

```
// Get first 50 chat threads
const threads = GmailApp.getChatThreads(0, 50);
// Will log no more than 50.0
Logger.log(threads.length);
Logger.log(threads[0].getFirstMessageSubject());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Integer` | the index of the first thread to retrieve |
| `max` | `Integer` | the maximum number of threads to retrieve |

#### Return

`GmailThread[]` — an array of chat Gmail threads

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`
