---
source: https://developers.google.com/apps-script/reference/xml-service/cdata
root: apps-script
fetched_at: 2026-04-23T15:22:11.828Z
---

# Class Cdata

## Page Summary

- The Cdata object represents an XML `CDATASection` node.
- Special characters are stored differently in `CDATASection` nodes compared to Text nodes.
- Methods are available to manipulate Cdata nodes, such as appending text, detaching from a parent, getting the parent element, and getting or setting the text value.

A representation of an XML `CDATASection` node.

```
// Create and log an XML document that shows how special characters like '<',
// '>', and '&' are stored in a CDATASection node as compared to in a Text node.
const illegalCharacters = '<em>The Amazing Adventures of Kavalier & Clay</em>';
const cdata = XmlService.createCdata(illegalCharacters);
const text = XmlService.createText(illegalCharacters);
const root =
    XmlService.createElement('root').addContent(cdata).addContent(text);
const document = XmlService.createDocument(root);
const xml = XmlService.getPrettyFormat().format(document);
Logger.log(xml);
```

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
