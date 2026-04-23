---
source: https://developers.google.com/apps-script/reference/xml-service/entity-ref
root: apps-script
fetched_at: 2026-04-23T15:22:12.348Z
---

# Class EntityRef

## Page Summary

- EntityRef represents an XML EntityReference node.
- It provides methods to get and set the name, public ID, and system ID of the node.
- You can detach an EntityRef node from its parent element.
- You can get the text value of all child nodes.

A representation of an XML `EntityReference` node.

## Detailed documentation

### detach()

Detaches the node from its parent `Element` node. If the node does not have a parent, this method has no effect.

#### Return

`Content|null` — The detached node.

---

### getName()

Gets the name of the `EntityReference` node.

#### Return

`String` — The name of the `EntityReference` node.

---

### getParentElement()

Gets the node's parent `Element` node. If the node does not have a parent, this method returns `null`.

#### Return

`Element|null` — The parent `Element` node.

---

### getPublicId()

Gets the public ID of the `EntityReference` node. If the node does not have a public ID, this method returns `null`.

#### Return

`String|null` — The public ID of the `EntityReference` node, or `null` if it has none.

---

### getSystemId()

Gets the system ID of the `EntityReference` node. If the node does not have a system ID, this method returns `null`.

#### Return

`String|null` — The system ID of the `EntityReference` node, or `null` if it has none.

---

### getValue()

Gets the text value of all nodes that are direct or indirect children of the node, in the order they appear in the document.

#### Return

`String` — The text value of all nodes that are direct or indirect children of the node.

---

### setName(name)

Sets the name of the `EntityReference` node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name to set. |

#### Return

`EntityRef` — The `EntityReference` node, for chaining.

---

### setPublicId(id)

Sets the public ID of the `EntityReference` node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The public ID to set. |

#### Return

`EntityRef` — The `EntityReference` node, for chaining.

---

### setSystemId(id)

Sets the system ID of the `EntityReference` node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The system ID to set. |

#### Return

`EntityRef` — The `EntityReference` node, for chaining.
