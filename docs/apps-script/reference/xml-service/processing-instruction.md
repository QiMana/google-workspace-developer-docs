---
source: https://developers.google.com/apps-script/reference/xml-service/processing-instruction
root: apps-script
fetched_at: 2026-04-23T15:22:13.183Z
---

# Class ProcessingInstruction

## Page Summary

- ProcessingInstruction represents an XML ProcessingInstruction node.
- It includes methods to detach the node, get its raw data, retrieve its parent element, get its target, and get its text value.
- The `detach()` method removes the node from its parent, returning the detached node.
- The `getData()` method returns the raw data of the instructions within the node as a string.
- The `getParentElement()` method returns the parent Element node or null if no parent exists.
- The `getTarget()` method returns the target of the ProcessingInstruction node as a string.
- The `getValue()` method returns the combined text value of all direct and indirect child nodes as a string.

A representation of an XML `ProcessingInstruction` node.

## Detailed documentation

### detach()

Detaches the node from its parent `Element` node. If the node does not have a parent, this method has no effect.

#### Return

`Content|null` — The detached node.

---

### getData()

Gets the raw data for every instruction in the `ProcessingInstruction` node.

#### Return

`String` — The raw data for every instruction in the `ProcessingInstruction` node.

---

### getParentElement()

Gets the node's parent `Element` node. If the node does not have a parent, this method returns `null`.

#### Return

`Element|null` — The parent `Element` node.

---

### getTarget()

Gets the target for the `ProcessingInstruction` node.

#### Return

`String` — The target for the `ProcessingInstruction` node.

---

### getValue()

Gets the text value of all nodes that are direct or indirect children of the node, in the order they appear in the document.

#### Return

`String` — The text value of all nodes that are direct or indirect children of the node.
