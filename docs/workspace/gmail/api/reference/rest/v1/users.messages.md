---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages
root: workspace
fetched_at: 2026-04-23T15:28:58.923Z
---

# REST Resource: users.messages

## Resource: Message

An email message.

JSON representation

```
{
  "id": string,
  "threadId": string,
  "labelIds": [
    string
  ],
  "snippet": string,
  "historyId": string,
  "internalDate": string,
  "payload": {
    object (MessagePart)
  },
  "sizeEstimate": integer,
  "raw": string,
  "classificationLabelValues": [
    {
      object (ClassificationLabelValue)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The immutable ID of the message.</p></td></tr><tr><td><code>threadId</code></td><td><p><code>string</code></p><p>The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met:</p><ol><li>The requested <code>threadId</code> must be specified on the <code>Message</code> or <code>Draft.Message</code> you supply with your request.</li><li>The <code>References</code> and <code>In-Reply-To</code> headers must be set in compliance with the <a href="https://tools.ietf.org/html/rfc2822">RFC 2822</a> standard.</li><li>The <code>Subject</code> headers must match.</li></ol></td></tr><tr><td><code>labelIds[]</code></td><td><p><code>string</code></p><p>List of IDs of labels applied to this message.</p></td></tr><tr><td><code>snippet</code></td><td><p><code>string</code></p><p>A short part of the message text.</p></td></tr><tr><td><code>historyId</code></td><td><p><code>string</code></p><p>The ID of the last history record that modified this message.</p></td></tr><tr><td><code>internalDate</code></td><td><p><code>string (int64 format)</code></p><p>The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received email, this represents the time the message was originally accepted by Google, which is more reliable than the <code>Date</code> header. However, for API-migrated mail, it can be configured by client to be based on the <code>Date</code> header.</p></td></tr><tr><td><code>payload</code></td><td><p><code>object (<code>MessagePart</code>)</code></p><p>The parsed email structure in the message parts.</p></td></tr><tr><td><code>sizeEstimate</code></td><td><p><code>integer</code></p><p>Estimated size in bytes of the message.</p></td></tr><tr><td><code>raw</code></td><td><p><code>string (bytes format)</code></p><p>The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in <code>messages.get</code> and <code>drafts.get</code> responses when the <code>format=RAW</code> parameter is supplied.</p><p>A base64-encoded string.</p></td></tr><tr><td><code>classificationLabelValues[]</code></td><td><p><code>object (<code>ClassificationLabelValue</code>)</code></p><p>Classification Label values on the message. Available Classification Label schemas can be queried using the Google Drive Labels API. Each classification label ID must be unique. If duplicate IDs are provided, only one will be retained, and the selection is arbitrary. Only used for Google Workspace accounts.</p></td></tr></tbody></table>

### MessagePart

A single MIME message part.

JSON representation

```
{
  "partId": string,
  "mimeType": string,
  "filename": string,
  "headers": [
    {
      object (Header)
    }
  ],
  "body": {
    object (MessagePartBody)
  },
  "parts": [
    {
      object (MessagePart)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>partId</code></td><td><p><code>string</code></p><p>The immutable ID of the message part.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>The MIME type of the message part.</p></td></tr><tr><td><code>filename</code></td><td><p><code>string</code></p><p>The filename of the attachment. Only present if this message part represents an attachment.</p></td></tr><tr><td><code>headers[]</code></td><td><p><code>object (<code>Header</code>)</code></p><p>List of headers on this message part. For the top-level message part, representing the entire message payload, it will contain the standard RFC 2822 email headers such as <code>To</code>, <code>From</code>, and <code>Subject</code>.</p></td></tr><tr><td><code>body</code></td><td><p><code>object (<code>MessagePartBody</code>)</code></p><p>The message part body for this part, which may be empty for container MIME message parts.</p></td></tr><tr><td><code>parts[]</code></td><td><p><code>object (<code>MessagePart</code>)</code></p><p>The child MIME message parts of this part. This only applies to container MIME message parts, for example <code>multipart/*</code>. For non- container MIME message part types, such as <code>text/plain</code>, this field is empty. For more information, see <a href="http://www.ietf.org/rfc/rfc1521.txt">RFC 1521</a>.</p></td></tr></tbody></table>

JSON representation

```
{
  "name": string,
  "value": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the header before the <code>:</code> separator. For example, <code>To</code>.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>The value of the header after the <code>:</code> separator. For example, <code>someuser@example.com</code>.</p></td></tr></tbody></table>

### ClassificationLabelValue

Classification Labels applied to the email message. Classification Labels are different from Gmail inbox labels. Only used for Google Workspace accounts. [Learn more about classification labels](https://support.google.com/a/answer/9292382).

JSON representation

```
{
  "labelId": string,
  "fields": [
    {
      object (ClassificationLabelFieldValue)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>labelId</code></td><td><p><code>string</code></p><p>Required. The canonical or raw alphanumeric classification label ID. Maps to the ID field of the Google Drive Label resource.</p></td></tr><tr><td><code>fields[]</code></td><td><p><code>object (<code>ClassificationLabelFieldValue</code>)</code></p><p>Field values for the given classification label ID.</p></td></tr></tbody></table>

### ClassificationLabelFieldValue

Field values for a classification label.

JSON representation

```
{
  "fieldId": string,
  "selection": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>Required. The field ID for the Classification Label Value. Maps to the ID field of the Google Drive <code>Label.Field</code> object.</p></td></tr><tr><td><code>selection</code></td><td><p><code>string</code></p><p>Selection choice ID for the selection option. Should only be set if the field type is <code>SELECTION</code> in the Google Drive <code>Label.Field</code> object. Maps to the id field of the Google Drive <code>Label.Field.SelectionOptions</code> resource.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>batchDelete</h3></td><td>Deletes many messages by message ID.</td></tr><tr><td><h3>batchModify</h3></td><td>Modifies the labels on the specified messages.</td></tr><tr><td><h3>delete</h3></td><td>Immediately and permanently deletes the specified message.</td></tr><tr><td><h3>get</h3></td><td>Gets the specified message.</td></tr><tr><td><h3>import</h3></td><td>Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP.</td></tr><tr><td><h3>insert</h3></td><td>Directly inserts a message into only this user's mailbox similar to <code>IMAP APPEND</code>, bypassing most scanning and classification.</td></tr><tr><td><h3>list</h3></td><td>Lists the messages in the user's mailbox.</td></tr><tr><td><h3>modify</h3></td><td>Modifies the labels on the specified message.</td></tr><tr><td><h3>send</h3></td><td>Sends the specified message to the recipients in the <code>To</code>, <code>Cc</code>, and <code>Bcc</code> headers.</td></tr><tr><td><h3>trash</h3></td><td>Moves the specified message to the trash.</td></tr><tr><td><h3>untrash</h3></td><td>Removes the specified message from the trash.</td></tr></tbody></table>
