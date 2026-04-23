---
source: https://developers.google.com/apps-script/reference/gmail/gmail-draft.html
root: apps-script
fetched_at: 2026-04-23T15:20:36.234Z
---

# Class GmailDraft

## Page Summary

- GmailDraft represents a user-created draft message in a user's Gmail account.
- You can perform various actions on a GmailDraft, including deleting, sending, and updating its content.
- You can retrieve information about a GmailDraft, such as its ID and the underlying GmailMessage it represents.
- Updating a draft allows you to replace its contents with new recipient, subject, and body information, with options for attachments and HTML body.

A user-created draft message in a user's Gmail account.

## Detailed documentation

### deleteDraft()

Deletes this draft message.

```
const draft =
    GmailApp.getDrafts()[0];  // The first draft message in the drafts folder
draft.deleteDraft();
draft.getMessage();  // Throws exception.
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getId()

Gets the ID of this draft message.

```
const draft =
    GmailApp.getDrafts()[0];  // The first draft message in the drafts folder
const draftId = draft.getId();
const draftById = GmailApp.getDraft(draftId);
Logger.log(
    draft.getMessage().getSubject() === draftById.getMessage().getSubject(),
);
```

#### Return

`String` — the draft ID

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getMessage()

Returns a GmailMessage representing this draft.

```
const draft =
    GmailApp.getDrafts()[0];  // The first draft message in the drafts folder
const message = draft.getMessage();
Logger.log(message.getSubject());
```

#### Return

`GmailMessage` — the message that represents the contents of this draft

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getMessageId()

Returns the ID of the `GmailMessage` representing this draft.

```
const draft =
    GmailApp.getDrafts()[0];  // The first draft message in the drafts folder
const messageId = draft.getMessageId();
Logger.log(messageId === draft.getMessage().getId());
```

#### Return

`String` — the message ID

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### send()

Sends this draft email message. The size of the email (including headers) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
const draft =
    GmailApp.getDrafts()[0];  // The first draft message in the drafts folder
const msg = draft.send();     // Send it
Logger.log(msg.getDate());    // Should be approximately the current timestamp
```

#### Return

`GmailMessage` — the newly sent message

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### update(recipient, subject, body)

Replaces the contents of this draft message. The size of the email (including headers) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
// The code below will update a draft email with the current date and time.
const draft =
    GmailApp.getDrafts()[0];  // The first draft message in the drafts folder
const now = new Date();
draft.update(
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

`GmailDraft` — the newly updated draft

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `GmailApp.createDraft(recipient, subject, body)`

---

### update(recipient, subject, body, options)

Replaces the contents of this draft message using optional arguments. The email can contain plain text or an HTML body. The size of the email (including headers) is [quota limited](../../guides/services/quotas.md#current_limitations).

```
// Update a draft email with a file from Google Drive attached as a PDF.
const draft =
    GmailApp.getDrafts()[0];  // The first draft message in the drafts folder
const file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
draft.update(
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
| `recipient` | `String` | comma separated list of email addresses |
| `subject` | `String` | subject of the email (250 characters maximum) |
| `body` | `String` | body of the email |
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

#### Return

`GmailDraft` — the newly updated draft

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `GmailApp.createDraft(recipient, subject, body, options)`
