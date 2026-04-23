---
source: https://developers.google.com/apps-script/reference/xml-service/comment
root: apps-script
fetched_at: 2026-04-23T15:22:12.161Z
---

# Class Comment

## Page Summary

- Comment is a representation of an XML `Comment` node.
- Methods are available to detach the Comment node, get its parent element, and get or set its text value.
- The `getValue()` method retrieves the text value of all direct or indirect children of the node.

A representation of an XML `Comment` node.

## Detailed documentation

### detach()

Detaches the node from its parent `Element` node. If the node does not have a parent, this method has no effect.

#### Return

`Content|null` — The detached node.

---

### getParentElement()

Gets the node's parent `Element` node. If the node does not have a parent, this method returns `null`.

#### Return

`Element|null` — The parent `Element` node.

---

### getText()

Gets the text value of the `Comment` node.

#### Return

`String` — The text value of the `Comment` node.

---

### getValue()

Gets the text value of all nodes that are direct or indirect children of the node, in the order they appear in the document.

#### Return

`String` — The text value of all nodes that are direct or indirect children of the node.

---

### setText(text)

Sets the text value of the `Comment` node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text value to set. |

#### Return

`Comment` — The `Comment` node, for chaining.
