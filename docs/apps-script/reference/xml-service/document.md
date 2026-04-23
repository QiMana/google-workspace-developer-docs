---
source: https://developers.google.com/apps-script/reference/xml-service/document
root: apps-script
fetched_at: 2026-04-23T15:22:12.645Z
---

# Class Document

## Page Summary

- A Document represents an XML document.
- It includes methods for adding, getting, removing, and cloning content nodes that are immediate children or descendants of the document.
- The Document object allows for managing the root element and Document Type declaration.
- Methods are available to check for the presence of a root element and determine the number of immediate child nodes.

A representation of an XML document.

## Detailed documentation

### addContent(content)

Appends the given node to the end of the document. The `content` argument can be a `Content` object or any node object that corresponds to a type listed in `ContentType`. Note, however, that a document can only have one child `Element` node, which is implicitly the root `Element` node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `content` | `Content` | The node to append. |

#### Return

`Document` — The document, for chaining.

---

### addContent(index, content)

Inserts the given node at the given index among all nodes that are immediate children of the document. The `content` argument can be a `Content` object or any node object that corresponds to a type listed in `ContentType`. Note, however, that a document can only have one child `Element` node, which is implicitly the root `Element` node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `index` | `Integer` | The index at which to insert the node among all nodes that are immediate children of the document. |
| `content` | `Content` | The node to insert. |

#### Return

`Document` — The document, for chaining.

---

### cloneContent()

Creates unattached copies of all nodes that are immediate children of the document.

#### Return

`Content[]` — An array of unattached copies of all nodes that are immediate children of the document.

---

### detachRootElement()

Detaches and returns the document's root `Element` node. If the document does not have a root `Element` node, this method returns `null`.

#### Return

`Element|null` — The detached `Element` node, or `null` if the document does not have a root `Element` node.

---

### getAllContent()

Gets all nodes that are immediate children of the document.

#### Return

`Content[]` — An array of all nodes that are immediate children of the document.

---

### getContent(index)

Gets the node at the given index among all nodes that are immediate children of the document. If there is no node at the given index, this method returns `null`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `index` | `Integer` | The index for the node among all nodes that are immediate children of the document. |

#### Return

`Content|null` — The node, or `null` if there is no node at the given index.

---

### getContentSize()

Gets the number of nodes that are immediate children of the document.

#### Return

`Integer` — The number of nodes that are immediate children of the document.

---

### getDescendants()

Gets all nodes that are direct or indirect children of the document, in the order they appear in the document.

#### Return

`Content[]` — An array of all nodes that are direct or indirect children of the document.

---

### getDocType()

Gets the document's `DocType` declaration. If the document does not have a `DocumentType` node, this method returns `null`.

#### Return

`DocType|null` — The `DocumentType` node, or `null` if the document does not have a `DocumentType` node.

---

### getRootElement()

Gets the document's root `Element` node. If the document does not have a root `Element` node, this method returns `null`.

#### Return

`Element|null` — The root `Element` node, or `null` if the document does not have a root `Element` node.

---

### hasRootElement()

Determines whether the document has a root `Element` node.

#### Return

`Boolean` — `true` if the document has a root `Element` node; `false` if not.

---

### removeContent()

Removes all nodes that are immediate children of the document.

#### Return

`Content[]` — An array of all nodes that were immediate children of the document before they were removed.

---

### removeContent(content)

Removes the given node, if the node is an immediate child of the document. The `content` argument can be a `Content` object or any node object that corresponds to a type listed in `ContentType`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `content` | `Content` | The node to remove. |

#### Return

`Boolean` — `true` if the node was an immediate child and was removed; `false` if not.

---

### removeContent(index)

Removes the node at the given index among all nodes that are immediate children of the document. If there is no node at the given index, this method returns `null`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `index` | `Integer` | The index for the node among all nodes that are immediate children of the document. |

#### Return

`Content|null` — The node that was removed, or `null` if there is no node at the given index.

---

### setDocType(docType)

Sets the document's `DocType` declaration. If the document already has a different `DocType` node, this method overwrites the old node. This method throws an exception if the document already contains the same `DocType` node that is being set.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `docType` | `DocType` | The `DocumentType` to set. |

#### Return

`Document` — The document, for chaining.

---

### setRootElement(element)

Sets the document's root `Element` node. If the document already has a root `Element` node, this method overwrites the old node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `element` | `Element` | The root `Element` node to set. |

#### Return

`Document` — The document, for chaining.
