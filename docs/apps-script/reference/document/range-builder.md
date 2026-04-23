---
source: https://developers.google.com/apps-script/reference/document/range-builder
root: apps-script
fetched_at: 2026-04-23T15:19:53.817Z
---

# Class RangeBuilder

## Page Summary

- RangeBuilder is used to construct `Range` objects from document elements.
- It offers methods to add entire or partial elements, elements between two points, or contents of another range.
- The `build()` method constructs the final `Range` object.
- The `getRangeElements()` method retrieves all elements within the built range.
- `getSelectedElements()` is a deprecated method, replaced by `getRangeElements()`.

A builder used to construct `Range` objects from document elements.

```
// Change the user's selection to a range that includes every table in the
// active tab.
const doc = DocumentApp.getActiveDocument();
const documentTab = doc.getActiveTab().asDocumentTab();
const rangeBuilder = documentTab.newRange();
const tables = documentTab.getBody().getTables();
for (let i = 0; i < tables.length; i++) {
  rangeBuilder.addElement(tables[i]);
}
doc.setSelection(rangeBuilder.build());
```

## Detailed documentation

### addElement(element)

Adds an entire `Element` to this `RangeBuilder`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `element` | `Element` | the element to be added |

#### Return

`RangeBuilder` — this builder, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addElement(textElement, startOffset, endOffsetInclusive)

Adds a partial `Text` element to this `RangeBuilder`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `textElement` | `Text` | the text element to be partially added |
| `startOffset` | `Integer` | the number of characters before the first character to be included (that is, the index of the first character in the range) |
| `endOffsetInclusive` | `Integer` | the number of characters before the last character to be included (that is, the index of the last character in the range) |

#### Return

`RangeBuilder` — this builder, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addElementsBetween(startElement, endElementInclusive)

Adds two entire elements, and all elements between them, to this `RangeBuilder`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startElement` | `Element` | the first element to be added |
| `endElementInclusive` | `Element` | the last element to be added |

#### Return

`RangeBuilder` — this builder, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addElementsBetween(startTextElement, startOffset, endTextElementInclusive, endOffsetInclusive)

Adds two partial `Text` elements, and all elements between them, to the `RangeBuilder`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startTextElement` | `Text` | the first text element to be partially added |
| `startOffset` | `Integer` | the number of characters before the first character of `startTextElement` to be included (that is, the index of the first character in the range) |
| `endTextElementInclusive` | `Text` | the last text element to be partially added |
| `endOffsetInclusive` | `Integer` | the number of characters before the last character of `endTextElementInclusive` to be included (that is, the index of the last character in the range) |

#### Return

`RangeBuilder` — this builder, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addRange(range)

Adds the contents of another `Range` to this `RangeBuilder`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `range` |  | the range whose elements should be added |

#### Return

`RangeBuilder` — this builder, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### build()

Constructs a `Range` from the settings applied to the builder.

#### Return

---

### getRangeElements()

Gets all elements in this `Range`, including any partial `Text` elements (for example, in the case of a selection that includes only part of a `Text` element). To determine whether a `Text` element is only partially included in the range, see `RangeElement.isPartial()`.

#### Return

`RangeElement[]` — an array of elements, in the order they appear in the document

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

## Deprecated methods

### getSelectedElements()

**Deprecated.** Renamed to `getRangeElements()`.

Gets all elements that the user has selected in the open instance of the document, including any partially selected `Text` elements.

#### Return

`RangeElement[]` — an array of selected or partially selected elements, in the order they appear in the document

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
