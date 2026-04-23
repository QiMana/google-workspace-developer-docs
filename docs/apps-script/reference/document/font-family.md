---
source: https://developers.google.com/apps-script/reference/document/font-family
root: apps-script
fetched_at: 2026-04-23T15:19:37.932Z
---

# Enum FontFamily

## Page Summary

- The `FontFamily` enumeration is deprecated.
- The methods `getFontFamily()` and `setFontFamily(String)` now use string names for fonts.
- The `FontFamily` enumeration remains available for compatibility with older scripts.
- You can use the `FontFamily` enumeration to set the font for text, elements, or documents.

**Deprecated.** The methods `getFontFamily()` and `setFontFamily(String)` now use string names for fonts instead of this enum. Although this enum is deprecated, it will remain available for compatibility with older scripts.

An enumeration of the supported fonts.

Use the `FontFamily` enumeration to set the font for a range of text, element or document.

```
const body =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert a paragraph at the start of the document.
body.insertParagraph(0, 'Hello, Apps Script!');

// Set the tab font to Calibri.
body.editAsText().setFontFamily(DocumentApp.FontFamily.CALIBRI);

// Set the first paragraph font to Arial.
body.getParagraphs()[0].setFontFamily(DocumentApp.FontFamily.ARIAL);

// Set "Apps Script" to Comic Sans MS.
const text = 'Apps Script';
const a = body.getText().indexOf(text);
const b = a + text.length - 1;
body.editAsText().setFontFamily(a, b, DocumentApp.FontFamily.COMIC_SANS_MS);
```
