---
source: https://developers.google.com/apps-script/reference/document/vertical-alignment
root: apps-script
fetched_at: 2026-04-23T15:20:05.227Z
---

# Enum VerticalAlignment

## Page Summary

- VerticalAlignment is an enumeration of supported vertical alignment types.
- You call an enum by calling its parent class, name, and property, such as `DocumentApp.VerticalAlignment.BOTTOM`.
- The VerticalAlignment enumeration is used to set the vertical alignment of table cells.
- The available properties for VerticalAlignment are BOTTOM, CENTER, and TOP.

An enumeration of the supported vertical alignment types.

To call an enum, you call its parent class, name, and property. For example, ` DocumentApp.VerticalAlignment.BOTTOM`.

Use the `VerticalAlignment` enumeration to set the vertical alignment of table cells.

```
const body =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Append table containing two cells.
const table = body.appendTable([['Top', 'Center', 'Bottom']]);

// Align the first cell's contents to the top.
table.getCell(0, 0).setVerticalAlignment(DocumentApp.VerticalAlignment.TOP);

// Align the second cell's contents to the center.
table.getCell(0, 1).setVerticalAlignment(DocumentApp.VerticalAlignment.CENTER);

// Align the third cell's contents to the bottom.
table.getCell(0, 2).setVerticalAlignment(DocumentApp.VerticalAlignment.BOTTOM);
```
