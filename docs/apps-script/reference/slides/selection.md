---
source: https://developers.google.com/apps-script/reference/slides/selection
root: apps-script
fetched_at: 2026-04-23T15:21:11.956Z
---

# Class Selection

## Page Summary

- The Selection object represents the current selection in an active presentation.
- You can get the currently active page, selected page elements, selected pages in the filmstrip, selected table cells, or selected text range using methods like `getCurrentPage()`, `getPageElementRange()`, `getPageRange()`, `getTableCellRange()`, and `getTextRange()`.
- The type of the current selection can be determined using the `getSelectionType()` method.

The user's selection in the active presentation.

```
const selection = SlidesApp.getActivePresentation().getSelection();
const currentPage = selection.getCurrentPage();
const selectionType = selection.getSelectionType();
```

## Detailed documentation

### getCurrentPage()

Returns the currently active `Page` or `null` if there is no active page.

```
const selection = SlidesApp.getActivePresentation().getSelection();
const currentPage = selection.getCurrentPage();
if (currentPage != null) {
  Logger.log(\`Selected current active page ID: ${currentPage.getObjectId()}\`);
}
```

#### Return

`Page|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getPageElementRange()

Returns the `PageElementRange` collection of `PageElement` instances that are selected or `null` if there are no `PageElement` instances selected.

```
const selection = SlidesApp.getActivePresentation().getSelection();
const selectionType = selection.getSelectionType();
if (selectionType === SlidesApp.SelectionType.PAGE_ELEMENT) {
  const currentPage = selection.getCurrentPage();
  const pageElements = selection.getPageElementRange().getPageElements();
  Logger.log(\`Number of page elements selected: ${pageElements.length}\`);
}
```

#### Return

`PageElementRange|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getPageRange()

Returns the `PageRange` a collection of `Page` instances in the flimstrip that are selected or `null` if the selection is not of type `SelectionType.PAGE`.

```
const selection = SlidesApp.getActivePresentation().getSelection();
const selectionType = selection.getSelectionType();
if (selectionType === SlidesApp.SelectionType.PAGE) {
  const pageRange = selection.getPageRange();
  Logger.log(
      \`Number of pages in the flimstrip selected: ${
          pageRange.getPages().length}\`,
  );
}
```

#### Return

`PageRange|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getSelectionType()

Returns the `SelectionType`.

```
const selection = SlidesApp.getActivePresentation().getSelection();
const selectionType = selection.getSelectionType();
if (selectionType === SlidesApp.SelectionType.CURRENT_PAGE) {
  const currentPage = selection.getCurrentPage();
  Logger.log(\`Selected current active page ID: ${currentPage.getObjectId()}\`);
}
```

#### Return

`SelectionType`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getTableCellRange()

Returns the `TableCellRange` collection of `TableCell` instances that are selected or `null` if there are no `TableCell` instances selected.

```
const selection = SlidesApp.getActivePresentation().getSelection();
const selectionType = selection.getSelectionType();
if (selectionType === SlidesApp.SelectionType.TABLE_CELL) {
  const currentPage = selection.getCurrentPage();
  const tableCells = selection.getTableCellRange().getTableCells();
  const table = tableCells[0].getParentTable();
  Logger.log(\`Number of table cells selected: ${tableCells.length}\`);
}
```

#### Return

`TableCellRange|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getTextRange()

Returns the `TextRange` that is selected or `null` if the selection is not of type `SelectionType.TEXT`.

The `TextRange` represents two scenarios:

1\. Range of text selected. For example if a shape has text "Hello", and "He" is selected, the returned range has `TextRange.getStartIndex()` = 0, and `TextRange.getEndIndex()` = 2.

2\. Cursor position. For example if a shape has text "Hello", and cursor is after "H", ("H|ello"), the returned range has `TextRange.getStartIndex()` = 1 and `TextRange.getEndIndex()` = 1.

```
const selection = SlidesApp.getActivePresentation().getSelection();
const selectionType = selection.getSelectionType();
if (selectionType === SlidesApp.SelectionType.TEXT) {
  const currentPage = selection.getCurrentPage();
  const pageElement = selection.getPageElementRange().getPageElements()[0];
  const textRange = selection.getTextRange();
  Logger.log(\`Text selected: ${textRange.asString()}\`);
}
```

#### Return

`TextRange|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
