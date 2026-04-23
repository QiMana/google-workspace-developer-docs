---
source: https://developers.google.com/apps-script/reference/xml-service/doc-type
root: apps-script
fetched_at: 2026-04-23T15:22:11.079Z
---

# Class DocType

## Page Summary

- DocType represents an XML DocumentType node.
- It provides methods to get and set various properties of the DocType, such as the element name, internal and external subset data, and its parent element.
- The `detach()` method removes the DocType node from its parent.

A representation of an XML `DocumentType` node.

## Detailed documentation

### detach()

Detaches the node from its parent `Element` node. If the node does not have a parent, this method has no effect.

#### Return

`Content|null` — The detached node.

---

### getElementName()

Gets the name of the root `Element` node specified in the `DocType` declaration.

#### Return

`String` — The name of the root `Element` node specified in the `DocType` declaration.

---

### getInternalSubset()

Gets the internal subset data for the `DocumentType` node.

#### Return

`String` — The internal subset data.

---

### getParentElement()

Gets the node's parent `Element` node. If the node does not have a parent, this method returns `null`.

#### Return

`Element|null` — The parent `Element` node.

---

### getPublicId()

Gets the public ID of the external subset data for the `DocumentType` node.

#### Return

`String` — The public ID of the external subset data.

---

### getSystemId()

Gets the system ID of the external subset data for the `DocumentType` node.

#### Return

`String` — The system ID of the external subset data.

---

### getValue()

Gets the text value of all nodes that are direct or indirect children of the node, in the order they appear in the document.

#### Return

`String` — The text value of all nodes that are direct or indirect children of the node.

---

### setElementName(name)

Sets the name of the root `Element` node to specify in the `DocType` declaration.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the root `Element` node to specify in the `DocType` declaration. |

#### Return

`DocType` — The `DocumentType` node, for chaining.

---

### setInternalSubset(data)

Sets the internal subset data for the `DocumentType` node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `data` | `String` | The internal subset data to set. |

#### Return

`DocType` — The `DocumentType` node, for chaining.

---

### setPublicId(id)

Sets the public ID of the external subset data for the `DocumentType` node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The public ID of the external subset data to set. |

#### Return

`DocType` — The `DocumentType` node, for chaining.

---

### setSystemId(id)

Sets the system ID of the external subset data for the `DocumentType` node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The system ID of the external subset data to set. |

#### Return

`DocType` — The `DocumentType` node, for chaining.
