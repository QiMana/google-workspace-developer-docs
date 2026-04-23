---
source: https://developers.google.com/apps-script/reference/document/glyph-type
root: apps-script
fetched_at: 2026-04-23T15:19:38.487Z
---

# Enum GlyphType

## Page Summary

- `GlyphType` is an enumeration defining supported glyph types for list items.
- You can access specific glyph types by calling the parent class, name, and property, for example, `DocumentApp.GlyphType.BULLET`.
- The `GlyphType` enumeration is used to set the bullet type for list items.
- Examples of supported glyph types include `BULLET`, `HOLLOW_BULLET`, `SQUARE_BULLET`, `NUMBER`, `LATIN_UPPER`, `LATIN_LOWER`, `ROMAN_UPPER`, and `ROMAN_LOWER`.

An enumeration of the supported glyph types.

To call an enum, you call its parent class, name, and property. For example, ` DocumentApp.GlyphType.BULLET`.

Use the `GlyphType` enumeration to set the bullet type for list items.

```
const body =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert at list item, with the default nesting level of zero.
body.appendListItem('Item 1');

// Append a second list item, with a nesting level of one, indented one inch.
// The two items have different bullet glyphs.
body.appendListItem('Item 2')
    .setNestingLevel(1)
    .setIndentStart(72)
    .setGlyphType(DocumentApp.GlyphType.SQUARE_BULLET);
```
