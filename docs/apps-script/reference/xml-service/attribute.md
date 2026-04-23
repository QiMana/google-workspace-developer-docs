---
source: https://developers.google.com/apps-script/reference/xml-service/attribute
root: apps-script
fetched_at: 2026-04-23T15:22:12.260Z
---

# Class Attribute

## Page Summary

- An Attribute object represents an XML attribute and is used in conjunction with XmlService.
- Attributes have methods to get and set their name, namespace, and value.
- The provided example demonstrates how to parse XML, retrieve attributes, and add a new attribute with a combined value.

A representation of an XML attribute.

```
// Reads the first and last name of each person and adds a new attribute with
// the full name.
let xml = '<roster>' +
    '<person first="John" last="Doe"/>' +
    '<person first="Mary" last="Smith"/>' +
    '</roster>';
const document = XmlService.parse(xml);
const people = document.getRootElement().getChildren('person');
for (let i = 0; i < people.length; i++) {
  const person = people[i];
  const firstName = person.getAttribute('first').getValue();
  const lastName = person.getAttribute('last').getValue();
  person.setAttribute('full', \`${firstName} ${lastName}\`);
}
xml = XmlService.getPrettyFormat().format(document);
Logger.log(xml);
```

## Detailed documentation

### getName()

Gets the local name of the attribute. If the attribute has a namespace prefix, use `getNamespace()`.`getPrefix()` to get the prefix.

#### Return

`String` — The local name of the attribute.

---

### getNamespace()

Gets the namespace for the attribute.

#### Return

`Namespace|null` — The namespace for the attribute.

---

### getValue()

Gets the value of the attribute.

#### Return

`String` — The value of the attribute.

---

### setName(name)

Sets the local name of the attribute. To set a namespace prefix for the attribute, use `setNamespace(namespace)` in conjunction with `XmlService.getNamespace(prefix, uri)`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The local name to set. |

#### Return

`Attribute` — The attribute, for chaining.

---

### setNamespace(namespace)

Sets the namespace for the attribute. The namespace must have a prefix.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `namespace` | `Namespace` | The namespace to set. |

#### Return

`Attribute` — The attribute, for chaining.

---

### setValue(value)

Sets the value of the attribute.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | The value to set. |

#### Return

`Attribute` — The attribute, for chaining.
