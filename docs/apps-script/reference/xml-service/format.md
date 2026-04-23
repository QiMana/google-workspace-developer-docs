---
source: https://developers.google.com/apps-script/reference/xml-service/format
root: apps-script
fetched_at: 2026-04-23T15:22:12.522Z
---

# Class Format

## Page Summary

- The Format class is used for outputting an XML document with customizable formatting options.
- You can format an entire XML Document or a specific Element node into a string.
- Formatting options can be set for encoding, indent strings, line separators, and whether to omit the XML declaration or encoding.
- Methods like `setEncoding()`, `setIndent()`, `setLineSeparator()`, `setOmitDeclaration()`, and `setOmitEncoding()` allow for chaining to configure the format.

A formatter for outputting an XML document, with three pre-defined formats that can be further customized.

```
// Log an XML document with specified formatting options.
const xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
const document = XmlService.parse(xml);
const output = XmlService.getCompactFormat()
                   .setLineSeparator('\n')
                   .setEncoding('UTF-8')
                   .setIndent('   ')
                   .format(document);
Logger.log(output);
```

## Detailed documentation

### format(document)

Outputs the given `Document` as a formatted string.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `document` | `Document` | The document to format. |

#### Return

`String` — The formatted document.

---

### format(element)

Outputs the given `Element` node as a formatted string.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `element` | `Element` | The element to format. |

#### Return

`String` — The formatted element.

---

### setEncoding(encoding)

Sets the character encoding that the formatter should use. The `encoding` argument must be an accepted XML encoding like `ISO-8859-1`, `US-ASCII`, `UTF-8`, or `UTF-16`.

```
// Log an XML document with encoding that does not support certain special
// characters.
const xml = '<root><a><b>ಠ‿ಠ</b><b>ಠ‿ಠ</b></a></root>';
const document = XmlService.parse(xml);
const output =
    XmlService.getRawFormat().setEncoding('ISO-8859-1').format(document);
Logger.log(output);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `encoding` | `String` | The encoding to use. |

#### Return

`Format` — The formatter, for chaining.

---

### setIndent(indent)

Sets the string used to indent child nodes relative to their parents. Setting an indent other than `null` will cause the formatter to insert a line break after every node.

```
// Log an XML document with each child node indented four spaces.
const xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
const document = XmlService.parse(xml);
const output = XmlService.getCompactFormat().setIndent('    ').format(document);
Logger.log(output);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `indent` | `String` | The indent to use. |

#### Return

`Format` — The formatter, for chaining.

---

### setLineSeparator(separator)

Sets the string to insert whenever the formatter would normally insert a line break. The three pre-defined formatters have different conditions under which they insert a line break. The default line separator is `\r\n`.

```
// Log an XML document with several spaces and a pipe character in place of line
// breaks.
const xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
const document = XmlService.parse(xml);
const output =
    XmlService.getRawFormat().setLineSeparator(' | ').format(document);
Logger.log(output);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `separator` | `String` | The separator to use. |

#### Return

`Format` — The formatter, for chaining.

---

### setOmitDeclaration(omitDeclaration)

Sets whether the formatter should omit the XML declaration, such as `<?xml version="1.0" encoding="UTF-8"?>`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `omitDeclaration` | `Boolean` | `true` to omit the XML declaration; `false` to include it. |

#### Return

`Format` — The formatter, for chaining.

---

### setOmitEncoding(omitEncoding)

Sets whether the formatter should omit the encoding in the XML declaration, such as the encoding field in `<?xml version="1.0" encoding="UTF-8"?>`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `omitEncoding` | `Boolean` | `true` to omit the encoding in the XML declaration; `false` to include it. |

#### Return

`Format` — The formatter, for chaining.
