---
source: https://developers.google.com/apps-script/reference/xml-service/content
root: apps-script
fetched_at: 2026-04-23T15:22:12.737Z
---

# Interface Content

## Page Summary

- A generic XML node is represented by this class.
- It has implementing classes for various XML node types like Cdata, Comment, DocType, Element, EntityRef, ProcessingInstruction, and Text.
- Methods allow casting the node to specific types, detaching it from its parent, getting the parent element, determining its type, and retrieving its text value.

A representation of a generic XML node.

### Implementing classes

## Detailed documentation

### asCdata()

Casts the node as a `CDATASection` node for the purposes of autocomplete. If the node's `ContentType` is not already `CDATA`, this method returns `null`.

#### Return

`Cdata|null` — The `CDATASection` node.

---

### asComment()

Casts the node as a `Comment` node for the purposes of autocomplete. If the node's `ContentType` is not already `COMMENT`, this method returns `null`.

#### Return

`Comment|null` — The `Comment` node, or `null` if the node's content type is not `COMMENT`.

---

### asDocType()

Casts the node as a `DocumentType` node for the purposes of autocomplete. If the node's `ContentType` is not already `DOCTYPE`, this method returns `null`.

#### Return

`DocType|null` — The `DocumentType` node.

---

### asElement()

Casts the node as an `Element` node for the purposes of autocomplete. If the node's `ContentType` is not already `ELEMENT`, this method returns `null`.

#### Return

`Element|null` — The `Element` node.

---

### asEntityRef()

Casts the node as a `EntityReference` node for the purposes of autocomplete. If the node's `ContentType` is not already `ENTITYREF`, this method returns `null`.

#### Return

`EntityRef|null` — The `EntityReference` node.

---

### asProcessingInstruction()

Casts the node as a `ProcessingInstruction` node for the purposes of autocomplete. If the node's `ContentType` is not already `PROCESSINGINSTRUCTION`, this method returns `null`.

#### Return

`ProcessingInstruction|null` — The `ProcessingInstruction` node.

---

### asText()

Casts the node as a `Text` node for the purposes of autocomplete. If the node's `ContentType` is not already `TEXT`, this method returns `null`.

#### Return

`Text|null` — The `Text` node.

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

### getType()

Gets the node's content type.

#### Return

`ContentType` — The node's content type.

---

### getValue()

Gets the text value of all nodes that are direct or indirect children of the node, in the order they appear in the document.

#### Return

`String` — The text value of all nodes that are direct or indirect children of the node.
