---
source: https://developers.google.com/apps-script/reference/xml-service/xml-service
root: apps-script
fetched_at: 2026-04-23T15:22:13.467Z
---

# Class XmlService

## Page Summary

- The XmlService allows scripts to parse, navigate, and programmatically create XML documents.
- It provides methods to create various XML nodes such as CDATA, Comments, DocTypes, Elements, and Text.
- You can create empty XML documents or documents with a specified root element.
- The service offers different formatting options (Compact, Pretty, Raw) for outputting XML documents.
- You can parse existing XML strings into a Document object for manipulation.

This service allows scripts to parse, navigate, and programmatically create XML documents.

```
// Log the title and labels for the first page of blog posts on the
// Google Workspace Developer blog.
function parseXml() {
  const url = 'https://gsuite-developers.googleblog.com/atom.xml';
  const xml = UrlFetchApp.fetch(url).getContentText();
  const document = XmlService.parse(xml);
  const root = document.getRootElement();
  const atom = XmlService.getNamespace('http://www.w3.org/2005/Atom');

  const entries = root.getChildren('entry', atom);
  for (let i = 0; i < entries.length; i++) {
    const title = entries[i].getChild('title', atom).getText();
    const categoryElements = entries[i].getChildren('category', atom);
    const labels = [];
    for (let j = 0; j < categoryElements.length; j++) {
      labels.push(categoryElements[j].getAttribute('term').getValue());
    }
    Logger.log('%s (%s)', title, labels.join(', '));
  }
}

// Create and log an XML representation of the threads in your Gmail inbox.
function createXml() {
  const root = XmlService.createElement('threads');
  const threads = GmailApp.getInboxThreads();
  for (let i = 0; i < threads.length; i++) {
    const child =
        XmlService.createElement('thread')
            .setAttribute('messageCount', threads[i].getMessageCount())
            .setAttribute('isUnread', threads[i].isUnread())
            .setText(threads[i].getFirstMessageSubject());
    root.addContent(child);
  }
  const document = XmlService.createDocument(root);
  const xml = XmlService.getPrettyFormat().format(document);
  Logger.log(xml);
}
```

## Detailed documentation

### createCdata(text)

Creates an unattached `CDATASection` node with the given value.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The value to set. |

#### Return

`Cdata` — The newly created `CDATASection` node.

---

### createComment(text)

Creates an unattached `Comment` node with the given value.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The value to set. |

#### Return

`Comment` — The newly created `Comment` node.

---

### createDocType(elementName)

Creates an unattached `DocumentType` node for the root `Element` node with the given name.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `elementName` | `String` | The name of the root `Element` node to specify in the `DocType` declaration. |

#### Return

`DocType` — The newly created `DocumentType` node.

---

### createDocType(elementName, systemId)

Creates an unattached `DocumentType` node for the root `Element` node with the given name, and the given system ID for the external subset data.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `elementName` | `String` | The name of the root `Element` node to specify in the `DocType` declaration. |
| `systemId` | `String` | The system ID of the external subset data to set. |

#### Return

`DocType` — The newly created `DocumentType` node.

---

### createDocType(elementName, publicId, systemId)

Creates an unattached `DocumentType` node for the root `Element` node with the given name, and the given public ID and system ID for the external subset data.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `elementName` | `String` | The name of the root `Element` node to specify in the `DocType` declaration. |
| `publicId` | `String` | The public ID of the external subset data to set. |
| `systemId` | `String` | The system ID of the external subset data to set. |

#### Return

`DocType` — The newly created `DocumentType` node.

---

### createDocument()

Creates an empty XML document.

#### Return

`Document` — The newly created document.

---

### createDocument(rootElement)

Creates an XML document with the given root `Element` node.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rootElement` | `Element` | The root `Element` node to set. |

#### Return

`Document` — The newly created document.

---

### createElement(name)

Creates an unattached `Element` node with the given local name and no namespace.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The local name to set. |

#### Return

`Element` — The newly created `Element` node.

---

### createElement(name, namespace)

Creates an unattached `Element` node with the given local name and namespace.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The local name to set. |
| `namespace` | `Namespace` | The namespace to set. |

#### Return

`Element` — The newly created `Element` node.

---

### createText(text)

Creates an unattached `Text` node with the given value.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The value to set. |

#### Return

`Text` — The newly created `Text` node.

---

### getCompactFormat()

Creates a `Format` object for outputting a compact XML document. The formatter defaults to `UTF-8` encoding, no indentation, and no additional line breaks, but includes the XML declaration and its encoding.

```
// Log an XML document in compact form.
const xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
const document = XmlService.parse(xml);
const output = XmlService.getCompactFormat().format(document);
Logger.log(output);
```

#### Return

`Format` — The newly created formatter.

---

### getNamespace(uri)

Creates a `Namespace` with the given URI.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `uri` | `String` | The URI for the namespace. |

#### Return

`Namespace` — The newly created namespace.

---

### getNamespace(prefix, uri)

Creates a `Namespace` with the given prefix and URI.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `prefix` | `String` | The prefix for the namespace. |
| `uri` | `String` | The URI for the namespace. |

#### Return

`Namespace` — The newly created namespace.

---

### getNoNamespace()

Creates a `Namespace` that represents the absence of a real namespace.

#### Return

`Namespace` — The newly created namespace.

---

### getPrettyFormat()

Creates a `Format` object for outputting a human-readable XML document. The formatter defaults to `UTF-8` encoding, two-space indentation, `\r\n` line separators after every node, and includes the XML declaration and its encoding.

```
// Log an XML document in human-readable form.
const xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
const document = XmlService.parse(xml);
const output = XmlService.getPrettyFormat().format(document);
Logger.log(output);
```

#### Return

`Format` — The newly created formatter.

---

### getRawFormat()

Creates a `Format` object for outputting a raw XML document. The formatter defaults to `UTF-8` encoding, no indentation and no line breaks other than those provided in the XML document itself, and includes the XML declaration and its encoding.

```
// Log an XML document in raw form.
const xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
const document = XmlService.parse(xml);
const output = XmlService.getRawFormat().format(document);
Logger.log(output);
```

#### Return

`Format` — The newly created formatter.

---

### getXmlNamespace()

Creates a `Namespace` with the standard `xml` prefix.

#### Return

`Namespace` — The newly created namespace.

---

### parse(xml)

Creates an `Document` from the given XML, without validating the XML.

```
const xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
const doc = XmlService.parse(xml);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `xml` | `String` | The XML to parse. |

#### Return

`Document` — The newly created document.
