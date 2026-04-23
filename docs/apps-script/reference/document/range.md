---
source: https://developers.google.com/apps-script/reference/document/range
root: apps-script
fetched_at: 2026-04-23T15:19:50.093Z
---

# Class Range

## Page Summary

- A Range represents a range of elements within a document, and the user's selection is a common use case.
- Scripts can only access the user's selection if they are bound to the document.
- The `getRangeElements()` method retrieves all elements within a Range, including partially selected text elements.
- The `getSelectedElements()` method is deprecated and has been renamed to `getRangeElements()`.

A range of elements in a document. The user's selection is represented as a `Range`, among other uses. Scripts can only access the selection of the user who is running the script, and only if the script is [bound](https://developers.google.com/apps-script/scripts_containers) to the document.

```
// Bold all selected text.
const selection = DocumentApp.getActiveDocument().getSelection();
if (selection) {
  const elements = selection.getRangeElements();
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    // Only modify elements that can be edited as text; skip images and other
    // non-text elements.
    if (element.getElement().editAsText) {
      const text = element.getElement().editAsText();

      // Bold the selected part of the element, or the full element if it's
      // completely selected.
      if (element.isPartial()) {
        text.setBold(
            element.getStartOffset(),
            element.getEndOffsetInclusive(),
            true,
        );
      } else {
        text.setBold(true);
      }
    }
  }
}
```

## Detailed documentation

### getRangeElements()

Gets all elements in this `Range`, including any partial `Text` elements (for example, in the case of a selection that includes only part of a `Text` element). To determine whether a `Text` element is only partially included in the range, see `RangeElement.isPartial()`.

#### Return

`RangeElement[]` — an array of elements, in the order they appear in the document

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

## Deprecated methods

### getSelectedElements()

**Deprecated.** Renamed to `getRangeElements()`.

Gets all elements that the user has selected in the open instance of the document, including any partially selected `Text` elements.

#### Return

`RangeElement[]` — an array of selected or partially selected elements, in the order they appear in the document

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
