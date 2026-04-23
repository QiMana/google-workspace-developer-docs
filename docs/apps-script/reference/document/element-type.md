---
source: https://developers.google.com/apps-script/reference/document/element-type
root: apps-script
fetched_at: 2026-04-23T15:19:34.327Z
---

# Enum ElementType

## Page Summary

- ElementType is an enumeration listing all possible element types in a document.
- You access ElementType enum values using the parent class, name, and property like `DocumentApp.ElementType.BODY_SECTION`.
- ElementType can be used to check the type of a specific element in a document, as shown in the provided code example.
- The table lists various ElementType properties and their corresponding document elements.

An enumeration of all the element types.

To call an enum, you call its parent class, name, and property. For example, ` DocumentApp.ElementType.BODY_SECTION`.

Use the `ElementType` enumeration to check the type of a given element, for instance:

```
const documentTab =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
const firstChild = documentTab.getBody().getChild(0);
if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
  // It's a paragraph, apply a paragraph heading.
  firstChild.asParagraph().setHeading(DocumentApp.ParagraphHeading.HEADING1);
}
```
