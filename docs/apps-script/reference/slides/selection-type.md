---
source: https://developers.google.com/apps-script/reference/slides/selection-type
root: apps-script
fetched_at: 2026-04-23T15:21:15.199Z
---

# Enum SelectionType

## Page Summary

- SelectionType indicates the most specific type of selected objects in Google Slides.
- Examples show how to retrieve details like TableCellRange or the parent Table based on the SelectionType.
- The SelectionType enum is accessed using its parent class, name, and property, like `SlidesApp.SelectionType.TEXT`.
- Properties like UNSUPPORTED, NONE, TEXT, TABLE\_CELL, PAGE, PAGE\_ELEMENT, and CURRENT\_PAGE represent different selection states.

The `SelectionType` represents the most specific type of one or more objects that are selected. As an example if one or more `TableCell` instances are selected in a `Table`, the selection type is `SelectionType.TABLE_CELL`. The `TableCellRange` can be retrieved by using the `Selection.getTableCellRange`. The `Table` can be retrieved by using the `Selection.getPageElementRange` and the `Page` can be retrieved from the `Selection.getCurrentPage`.

To call an enum, you call its parent class, name, and property. For example, ` SlidesApp.SelectionType.TEXT`.
