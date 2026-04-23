---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.filters
root: workspace
fetched_at: 2026-04-23T15:29:02.551Z
---

# REST Resource: users.settings.filters

## Resource: Filter

Resource definition for Gmail filters. Filters apply to specific messages instead of an entire email thread.

JSON representation

```
{
  "id": string,
  "criteria": {
    object (Criteria)
  },
  "action": {
    object (Action)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The server assigned ID of the filter.</p></td></tr><tr><td><code>criteria</code></td><td><p><code>object (<code>Criteria</code>)</code></p><p>Matching criteria for the filter.</p></td></tr><tr><td><code>action</code></td><td><p><code>object (<code>Action</code>)</code></p><p>Action that the filter performs.</p></td></tr></tbody></table>

## Criteria

Message matching criteria.

JSON representation

```
{
  "from": string,
  "to": string,
  "subject": string,
  "query": string,
  "negatedQuery": string,
  "hasAttachment": boolean,
  "excludeChats": boolean,
  "size": integer,
  "sizeComparison": enum (SizeComparison)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>from</code></td><td><p><code>string</code></p><p>The sender's display name or email address.</p></td></tr><tr><td><code>to</code></td><td><p><code>string</code></p><p>The recipient's display name or email address. Includes recipients in the "to", "cc", and "bcc" header fields. You can use simply the local part of the email address. For example, "example" and "example@" both match "example@gmail.com". This field is case-insensitive.</p></td></tr><tr><td><code>subject</code></td><td><p><code>string</code></p><p>Case-insensitive phrase found in the message's subject. Trailing and leading whitespace are be trimmed and adjacent spaces are collapsed.</p></td></tr><tr><td><code>query</code></td><td><p><code>string</code></p><p>Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, <code>"from:someuser@example.com rfc822msgid:<somemsgid@example.com>
                  is:unread"</code>.</p></td></tr><tr><td><code>negatedQuery</code></td><td><p><code>string</code></p><p>Only return messages not matching the specified query. Supports the same query format as the Gmail search box. For example, <code>"from:someuser@example.com rfc822msgid:<somemsgid@example.com>
                  is:unread"</code>.</p></td></tr><tr><td><code>hasAttachment</code></td><td><p><code>boolean</code></p><p>Whether the message has any attachment.</p></td></tr><tr><td><code>excludeChats</code></td><td><p><code>boolean</code></p><p>Whether the response should exclude chats.</p></td></tr><tr><td><code>size</code></td><td><p><code>integer</code></p><p>The size of the entire RFC822 message in bytes, including all headers and attachments.</p></td></tr><tr><td><code>sizeComparison</code></td><td><p><code>enum (<code>SizeComparison</code>)</code></p><p>How the message size in bytes should be in relation to the size field.</p></td></tr></tbody></table>

## SizeComparison

Determines how the size field should be compared to the message size.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>unspecified</code></td><td></td></tr><tr><td><code>smaller</code></td><td>Find messages smaller than the given size.</td></tr><tr><td><code>larger</code></td><td>Find messages larger than the given size.</td></tr></tbody></table>

## Action

A set of actions to perform on a message.

JSON representation

```
{
  "addLabelIds": [
    string
  ],
  "removeLabelIds": [
    string
  ],
  "forward": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>addLabelIds[]</code></td><td><p><code>string</code></p><p>List of labels to add to the message.</p></td></tr><tr><td><code>removeLabelIds[]</code></td><td><p><code>string</code></p><p>List of labels to remove from the message.</p></td></tr><tr><td><code>forward</code></td><td><p><code>string</code></p><p>Email address that the message should be forwarded to.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a filter.</td></tr><tr><td><h3>delete</h3></td><td>Immediately and permanently deletes the specified filter.</td></tr><tr><td><h3>get</h3></td><td>Gets a filter.</td></tr><tr><td><h3>list</h3></td><td>Lists the message filters of a Gmail user.</td></tr></tbody></table>
