---
source: https://developers.google.com/apps-script/reference/document/text-alignment
root: apps-script
fetched_at: 2026-04-23T15:19:55.612Z
---

# Enum TextAlignment

## Page Summary

- TextAlignment is an enumeration used to specify text alignment types.
- Text alignment enums are accessed via `DocumentApp.TextAlignment`.
- Examples include NORMAL, SUPERSCRIPT, and SUBSCRIPT.

An enumeration of the type of text alignments.

To call an enum, you call its parent class, name, and property. For example, ` DocumentApp.TextAlignment.NORMAL`.

```
// Make the first character in the first paragraph of the active tab be
// superscript.
const documentTab =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
const text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(0, 0, DocumentApp.TextAlignment.SUPERSCRIPT);
```
