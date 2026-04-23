---
source: https://developers.google.com/apps-script/reference/xml-service/text
root: apps-script
fetched_at: 2026-04-23T15:22:12.985Z
---

# Class Text

## Page Summary

- The `Text` class represents an XML text node.
- Methods are available to append, detach, get the parent element, get the text value, get the combined value of child nodes, and set the text value.
- The `append()` method adds text to the existing content and returns the `Text` node for chaining.
- The `detach()` method removes the node from its parent and returns the detached node.
- The `getParentElement()` method returns the node's parent `Element` or `null` if there is no parent.
- The `getText()` method retrieves the specific text content of the `Text` node.
- The `getValue()` method retrieves the combined text content of all child nodes, direct and indirect.
- The `setText()` method replaces the existing text content and returns the `Text` node for chaining.

A representation of an XML `Text` node.

## Detailed documentation

### append(text)

Appends the given text to any content that already exists in the node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text to append to the node. |

#### Return

`Text` — The `Text` node, for chaining.

---

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

Gets the text value of the `Text` node.

#### Return

`String` — The text value of the `Text` node.

---

### getValue()

Gets the text value of all nodes that are direct or indirect children of the node, in the order they appear in the document.

#### Return

`String` — The text value of all nodes that are direct or indirect children of the node.

---

### setText(text)

Sets the text value of the `Text` node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text value to set. |

#### Return

`Text` — The `Text` node, for chaining.
