---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.labels
root: workspace
fetched_at: 2026-04-23T15:28:58.337Z
---

# REST Resource: users.labels

## Resource: Label

Labels are used to categorize messages and threads within the user's mailbox. The maximum number of labels supported for a user's mailbox is 10,000.

JSON representation

```
{
  "id": string,
  "name": string,
  "messageListVisibility": enum (MessageListVisibility),
  "labelListVisibility": enum (LabelListVisibility),
  "type": enum (Type),
  "messagesTotal": integer,
  "messagesUnread": integer,
  "threadsTotal": integer,
  "threadsUnread": integer,
  "color": {
    object (Color)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The immutable ID of the label.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The display name of the label.</p></td></tr><tr><td><code>messageListVisibility</code></td><td><p><code>enum (<code>MessageListVisibility</code>)</code></p><p>The visibility of messages with this label in the message list in the Gmail web interface.</p></td></tr><tr><td><code>labelListVisibility</code></td><td><p><code>enum (<code>LabelListVisibility</code>)</code></p><p>The visibility of the label in the label list in the Gmail web interface.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the <code>INBOX</code> and <code>UNREAD</code> labels from messages and threads, but cannot apply or remove the <code>DRAFTS</code> or <code>SENT</code> labels from messages or threads.</p></td></tr><tr><td><code>messagesTotal</code></td><td><p><code>integer</code></p><p>The total number of messages with the label.</p></td></tr><tr><td><code>messagesUnread</code></td><td><p><code>integer</code></p><p>The number of unread messages with the label.</p></td></tr><tr><td><code>threadsTotal</code></td><td><p><code>integer</code></p><p>The total number of threads with the label.</p></td></tr><tr><td><code>threadsUnread</code></td><td><p><code>integer</code></p><p>The number of unread threads with the label.</p></td></tr><tr><td><code>color</code></td><td><p><code>object (<code>Color</code>)</code></p><p>The color to assign to the label. Color is only available for labels that have their <code>type</code> set to <code>user</code>.</p></td></tr></tbody></table>

## MessageListVisibility

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>show</code></td><td>Show the label in the message list.</td></tr><tr><td><code>hide</code></td><td>Do not show the label in the message list.</td></tr></tbody></table>

## LabelListVisibility

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>labelShow</code></td><td>Show the label in the label list.</td></tr><tr><td><code>labelShowIfUnread</code></td><td>Show the label if there are any unread messages with that label.</td></tr><tr><td><code>labelHide</code></td><td>Do not show the label in the label list.</td></tr></tbody></table>

## Type

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>system</code></td><td>Labels created by Gmail.</td></tr><tr><td><code>user</code></td><td>Custom labels created by the user or application.</td></tr></tbody></table>

## Color

JSON representation

```
{
  "textColor": string,
  "backgroundColor": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>textColor</code></td><td><p><code>string</code></p><p>The text color of the label, represented as hex string. This field is required in order to set the color of a label. Only the following predefined set of color values are allowed:<br>#000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff, #fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, #f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, #efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, #e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, #cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, #ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, #822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c, #464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff, #711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, #594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1, #c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46, #662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765</p></td></tr><tr><td><code>backgroundColor</code></td><td><p><code>string</code></p><p>The background color represented as hex string #RRGGBB (ex #000000). This field is required in order to set the color of a label. Only the following predefined set of color values are allowed:<br>#000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff, #fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, #f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, #efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, #e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, #cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, #ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, #822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c, #464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff, #711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, #594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1, #c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46, #662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a label.</td></tr><tr><td><h3>delete</h3></td><td>Immediately and permanently deletes the specified label and removes it from any messages and threads that it's applied to.</td></tr><tr><td><h3>get</h3></td><td>Gets the specified label.</td></tr><tr><td><h3>list</h3></td><td>Lists all labels in the user's mailbox.</td></tr><tr><td><h3>patch</h3></td><td>Patch the specified label.</td></tr><tr><td><h3>update</h3></td><td>Updates the specified label.</td></tr></tbody></table>
