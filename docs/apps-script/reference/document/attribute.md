---
source: https://developers.google.com/apps-script/reference/document/attribute
root: apps-script
fetched_at: 2026-04-23T15:19:29.674Z
---

# Enum Attribute

## Page Summary

- Attributes are enumerations used to define element attributes.
- You call an enum by calling its parent class, name, and property, for example, `DocumentApp.Attribute.BACKGROUND_COLOR`.
- Attributes can be used to compose custom styles, as shown in the provided example.
- The properties table lists various available attributes like BACKGROUND\_COLOR, BOLD, FONT\_SIZE, and more, along with their types and descriptions for different elements.

An enumeration of the element attributes.

To call an enum, you call its parent class, name, and property. For example, ` DocumentApp.Attribute.BACKGROUND_COLOR`.

Use attributes to compose custom styles. For example:

```
// Define a style with yellow background.
const highlightStyle = {};
highlightStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFF00';
highlightStyle[DocumentApp.Attribute.BOLD] = true;

// Insert "Hello", highlighted.
DocumentApp.getActiveDocument()
    .getActiveTab()
    .asDocumentTab()
    .editAsText()
    .insertText(0, 'Hello\n')
    .setAttributes(0, 4, highlightStyle);
```
