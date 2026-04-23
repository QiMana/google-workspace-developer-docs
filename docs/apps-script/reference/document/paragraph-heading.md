---
source: https://developers.google.com/apps-script/reference/document/paragraph-heading
root: apps-script
fetched_at: 2026-04-23T15:19:47.746Z
---

# Enum ParagraphHeading

## Page Summary

- ParagraphHeading is an enumeration used to configure heading styles for ParagraphElement.
- Enums are called using their parent class, name, and property, such as DocumentApp.ParagraphHeading.NORMAL.
- The provided code example demonstrates how to set different heading styles for paragraphs using appendParagraph and setHeading.
- Available ParagraphHeading properties include NORMAL, HEADING1 through HEADING6, TITLE, and SUBTITLE.

An enumeration of the standard paragraph headings.

To call an enum, you call its parent class, name, and property. For example, ` DocumentApp.ParagraphHeading.NORMAL`.

Use the `ParagraphHeading` enumeration to configure the heading style for `ParagraphElement`.

```
const body =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Append a paragraph, with heading 1.
const par1 = body.appendParagraph('Title');
par1.setHeading(DocumentApp.ParagraphHeading.HEADING1);

// Append a paragraph, with heading 2.
const par2 = body.appendParagraph('SubTitle');
par2.setHeading(DocumentApp.ParagraphHeading.HEADING2);

// Append a paragraph, with normal heading.
const par3 = body.appendParagraph('Text');
par3.setHeading(DocumentApp.ParagraphHeading.NORMAL);
```
