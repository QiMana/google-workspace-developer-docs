---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages.attachments
root: workspace
fetched_at: 2026-04-23T15:28:59.423Z
---

# REST Resource: users.messages.attachments

## Resource: MessagePartBody

The body of a single MIME message part.

JSON representation

```
{
  "attachmentId": string,
  "size": integer,
  "data": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>attachmentId</code></td><td><p><code>string</code></p><p>When present, contains the ID of an external attachment that can be retrieved in a separate <code>messages.attachments.get</code> request. When not present, the entire content of the message part body is contained in the data field.</p></td></tr><tr><td><code>size</code></td><td><p><code>integer</code></p><p>Number of bytes for the message part data (encoding notwithstanding).</p></td></tr><tr><td><code>data</code></td><td><p><code>string (bytes format)</code></p><p>The body data of a MIME message part as a base64url encoded string. May be empty for MIME container types that have no message body or when the body data is sent as a separate attachment. An attachment ID is present if the body data is contained in a separate attachment.</p><p>A base64-encoded string.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets the specified message attachment.</td></tr></tbody></table>
