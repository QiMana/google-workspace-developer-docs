---
source: https://developers.google.com/apps-script/reference/xml-service/element
root: apps-script
fetched_at: 2026-04-23T15:22:11.742Z
---

# Class Element

## Page Summary

- The Element object represents an XML Element node and provides methods for manipulating its content, attributes, and relationships within an XML document.
- You can add, remove, and retrieve content (including child elements and other nodes) from an Element using methods like addContent, removeContent, getAllContent, getChildren, and getContent.
- Attributes of an Element can be accessed, set, and removed using methods like getAttribute, getAttributes, setAttribute, and removeAttribute.
- The name and text value of an Element can be retrieved and set using getName, getQualifiedName, getText, setText, and getValue.
- Methods are available to check the parent and document of an Element, determine if it is the root element, and detach it from its parent.

A representation of an XML `Element` node.

```
// Adds up the values listed in a sample XML document and adds a new element
// with the total.
let xml = '<things>' +
    '<plates>12</plates>' +
    '<bowls>18</bowls>' +
    '<cups>25</cups>' +
    '</things>';
const document = XmlService.parse(xml);
const root = document.getRootElement();
const items = root.getChildren();
let total = 0;
for (let i = 0; i < items.length; i++) {
  total += Number(items[i].getText());
}
const totalElement = XmlService.createElement('total').setText(total);
root.addContent(totalElement);
xml = XmlService.getPrettyFormat().format(document);
Logger.log(xml);
```

## Detailed documentation

### addContent(content)

Appends the given node as the last child of the `Element` node. The `content` argument can be a `Element` object or any node object that corresponds to a type listed in `ContentType`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `content` | `Content` | The node to append. |

#### Return

`Element` — The `Element` node, for chaining.

---

### addContent(index, content)

Inserts the given node at the given index among all nodes that are immediate children of the `Element` node. The `content` argument can be a `Element` object or any node object that corresponds to a type listed in `ContentType`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `index` | `Integer` | The index at which to insert the node among all nodes that are immediate children of the `Element` node. |
| `content` | `Content` | The node to insert. |

#### Return

`Element` — The `Element` node, for chaining.

---

### cloneContent()

Creates unattached copies of all nodes that are immediate children of the {@code Element} node.

#### Return

`Content[]` — An array of unattached copies of all nodes that are immediate children of the {@code Element} node.

---

### detach()

Detaches the node from its parent `Element` node. If the node does not have a parent, this method has no effect.

#### Return

`Content|null` — The detached node.

---

### getAllContent()

Gets all nodes that are immediate children of the {@code Element} node.

#### Return

`Content[]` — An array of all nodes that are immediate children of the {@code Element} node.

---

### getAttribute(name)

Gets the attribute for this `Element` node with the given name and no namespace. If there is no such attribute, this method returns `null`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the attribute. |

#### Return

`Attribute|null` — The attribute, or `null` if there is no attribute with the given name and no namespace.

---

### getAttribute(name, namespace)

Gets the attribute for this `Element` node with the given name and namespace. If there is no such node, this method returns `null`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the attribute. |
| `namespace` | `Namespace` | The namespace of the attribute. |

#### Return

`Attribute|null` — The attribute, or `null` if there is no attribute with the given name and namespace.

---

### getAttributes()

Gets all attributes for this `Element` node, in the order they appear in the document.

#### Return

`Attribute[]` — An array of all attributes for this `Element` node.

---

### getChild(name)

Gets the first `Element` node with the given name and no namespace that is an immediate child of this `Element` node. If there is no such node, this method returns `null`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the child `Element` node. |

#### Return

`Element|null` — The `Element` node, or `null` if there is no immediate child `Element` node with the given name and no namespace.

---

### getChild(name, namespace)

Gets the first `Element` node with the given name and namespace that is an immediate child of this `Element` node. If there is no such node, this method returns `null`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the child `Element` node. |
| `namespace` | `Namespace` | The namespace of the child `Element` node. |

#### Return

`Element|null` — The `Element` node, or `null` if there is no immediate child `Element` node with the given name and namespace.

---

### getChildText(name)

Gets the text value of the node with the given name and no namespace, if the node is an immediate child of the `Element` node. If there is no such node, this method returns `null`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the child node. |

#### Return

`String|null` — The text value of the child node, or `null` if there is no immediate child node with the given name and no namespace.

---

### getChildText(name, namespace)

Gets the text value of the node with the given name and namespace, if the node is an immediate child of the `Element` node. If there is no such node, this method returns `null`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the child node. |
| `namespace` | `Namespace` | The namespace of the child node. |

#### Return

`String|null` — The text value of the child node, or `null` if there is no immediate child node with the given name and namespace.

---

### getChildren()

Gets all `Element` nodes that are immediate children of this `Element` node, in the order they appear in the document.

#### Return

`Element[]` — An array of all `Element` nodes that are immediate children of this `Element` node.

---

### getChildren(name)

Gets all `Element` nodes with the given name and no namespace that are immediate children of this `Element` node, in the order they appear in the document.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the child `Element` nodes. |

#### Return

`Element[]` — An array of all `Element` nodes with the given name and no namespace that are immediate children of this `Element` node.

---

### getChildren(name, namespace)

Gets all `Element` nodes with the given name and namespace that are immediate children of this `Element` node, in the order they appear in the document.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the child `Element` nodes. |
| `namespace` | `Namespace` | The namespace of the child `Element` nodes. |

#### Return

`Element[]` — An array of all `Element` nodes with the given name and namespace that are immediate children of this `Element` node.

---

### getContent(index)

Gets the node at the given index among all nodes that are immediate children of the {@code Element} node. If there is no node at the given index, this method returns `null`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `index` | `Integer` | The index for the node among all nodes that are immediate children of the {@code Element} node. |

#### Return

`Content|null` — The node, or `null` if there is no node at the given index.

---

### getContentSize()

Gets the number of nodes that are immediate children of the {@code Element} node.

#### Return

`Integer` — The number of nodes that are immediate children of the {@code Element} node.

---

### getDescendants()

Gets all nodes that are direct or indirect children of the {@code Element} node, in the order they appear in the document.

#### Return

`Content[]` — An array of all nodes that are direct or indirect children of the {@code Element} node.

---

### getDocument()

Gets the XML document that contains the {@code Element} node.

#### Return

`Document` — The document that contains the {@code Element} node.

---

### getName()

Gets the local name of the `Element` node. If the node has a namespace prefix, use `getQualifiedName()` or `getNamespace()`.`getPrefix()` to get the prefix.

#### Return

`String` — The local name of the `Element` node.

---

### getNamespace()

Gets the namespace for the `Element` node.

#### Return

`Namespace` — The namespace for the `Element` node.

---

### getNamespace(prefix)

Gets the namespace with the given prefix for the `Element` node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `prefix` | `String` | The prefix for the namespace. |

#### Return

`Namespace` — The namespace with the given prefix for the `Element` node.

---

### getParentElement()

Gets the node's parent `Element` node. If the node does not have a parent, this method returns `null`.

#### Return

`Element|null` — The parent `Element` node.

---

### getQualifiedName()

Gets the local name and namespace prefix of the `Element` node, in the form `[namespacePrefix]:[localName]`. If the node does not have a namespace prefix, use `getName()`.

#### Return

`String` — The local name and namespace prefix of the `Element` node, in the form `[namespacePrefix]:[localName]`.

---

### getText()

Gets the text value of the `Element` node.

#### Return

`String` — The text value of the `Element` node.

---

### getValue()

Gets the text value of all nodes that are direct or indirect children of the node, in the order they appear in the document.

#### Return

`String` — The text value of all nodes that are direct or indirect children of the node.

---

### isAncestorOf(other)

Determines whether this `Element` node is a direct or indirect parent of a given `Element` node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `other` | `Element` | The other `Element` node. |

#### Return

`Boolean` — `true` if this `Element` node is a direct or indirect parent of the given `Element` node; `false` if not.

---

### isRootElement()

Determines whether the `Element` node is the document's root node.

#### Return

`Boolean` — `true` if the `Element` node is the document's root node; `false` if not.

---

### removeAttribute(attribute)

Removes the given attribute for this `Element` node, if such an attribute exists.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `attribute` | `Attribute` | The attribute. |

#### Return

`Boolean` — `true` if the attribute existed and was removed; `false` if not.

---

### removeAttribute(attributeName)

Removes the attribute for this `Element` node with the given name and no namespace, if such an attribute exists.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `attributeName` | `String` | The name of the attribute. |

#### Return

`Boolean` — `true` if the attribute existed and was removed; `false` if not.

---

### removeAttribute(attributeName, namespace)

Removes the attribute for this `Element` node with the given name and namespace, if such an attribute exists.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `attributeName` | `String` | The name of the attribute. |
| `namespace` | `Namespace` | The namespace of the attribute. |

#### Return

`Boolean` — `true` if the attribute existed and was removed; `false` if not.

---

### removeContent()

Removes all nodes that are immediate children of the {@code Element} node.

#### Return

`Content[]` — An array of all nodes that were immediate children of the {@code Element} node before they were removed.

---

### removeContent(content)

Removes the given node, if the node is an immediate child of the {@code Element} node. The `content` argument can be a `Element` object or any node object that corresponds to a type listed in `ContentType`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `content` | `Content` | The node to remove. |

#### Return

`Boolean` — `true` if the node was an immediate child and was removed; `false` if not.

---

### removeContent(index)

Removes the node at the given index among all nodes that are immediate children of the {@code Element} node. If there is no node at the given index, this method returns `null`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `index` | `Integer` | The index for the node among all nodes that are immediate children of the {@code Element} node. |

#### Return

`Content|null` — The node that was removed, or `null` if there is no node at the given index.

---

### setAttribute(attribute)

Sets the given attribute for this `Element` node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `attribute` | `Attribute` | The attribute to set. |

#### Return

`Element` — The `Element` node, for chaining.

---

### setAttribute(name, value)

Sets the attribute for this `Element` node with the given name, value, and no namespace.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the attribute to set. |
| `value` | `String` | The value of the attribute to set. |

#### Return

`Element` — The `Element` node, for chaining.

---

### setAttribute(name, value, namespace)

Sets the attribute for this `Element` node with the given name, value, and namespace.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the attribute to set. |
| `value` | `String` | The value of the attribute to set. |
| `namespace` | `Namespace` | The namespace of the attribute to set. |

#### Return

`Element` — The `Element` node, for chaining.

---

### setName(name)

Sets the local name of the `Element` node. To set a namespace prefix for the node, use `setNamespace(namespace)` in conjunction with `XmlService.getNamespace(prefix, uri)`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The local name to set. |

#### Return

`Element` — The `Element` node, for chaining.

---

### setNamespace(namespace)

Sets the namespace for the `Element` node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `namespace` | `Namespace` | The namespace to set. |

#### Return

`Element` — The `Element` node, for chaining.

---

### setText(text)

Sets the text value of the `Element` node. If the node already contains a text value or any child nodes, this method overwrites the old content. To append or insert content instead, use `addContent(content)` or `addContent(index, content)`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text to set. |

#### Return

`Element` — The `Element` node, for chaining.
