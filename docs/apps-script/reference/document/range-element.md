---
source: https://developers.google.com/apps-script/reference/document/range-element
root: apps-script
fetched_at: 2026-04-23T15:19:59.827Z
---

# Class RangeElement

## Page Summary

- RangeElement is a wrapper around an Element with possible start and end offsets, useful for representing partial selections within Text elements.
- The getElement() method retrieves the Element corresponding to the RangeElement.
- The getStartOffset() and getEndOffsetInclusive() methods provide the character positions for the start and end of a partial range, returning -1 for non-Text elements or full ranges.
- The isPartial() method indicates whether the RangeElement covers the entire element or just a portion of its characters.

A wrapper around an `Element` with a possible start and end offset. These offsets allow a range of characters within a `Text` element to be represented in search results, document selections, and named ranges.

## Detailed documentation

### getElement()

Gets the `Element` that corresponds to this `RangeElement`.

```
const rangeElement = DocumentApp.getActiveDocument().getSelection().getRangeElements()[0];

// Log debug information about a range element.
Logger.log(\`Element type: ${rangeElement.getElement().getType()}\`);
if (rangeElement.isPartial()) {
  Logger.log(\`The character range begins at ${rangeElement.getStartOffset()}\`);
  Logger.log(
      \`The character range ends at ${rangeElement.getEndOffsetInclusive()}\`,
  );
} else {
  Logger.log('The entire range element is included.');
}
```

#### Return

`Element` — the element that corresponds to this `RangeElement`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getEndOffsetInclusive()

Gets the position of the end of a partial range within the range element. If the element is a `Text` element and `isPartial()` returns `true`, the offset is the number of characters before the last character in the range (that is, the index of the last character in the range); in any other case, this method returns `-1`.

#### Return

`Integer` — for `Text` elements, the number of character before the last character in the range; for other elements, `-1`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getStartOffset()

Gets the position of the start of a partial range within the range element. If the element is a `Text` element and `isPartial()` returns `true`, the offset is the number of characters before the start of the range (that is, the index of the first character in the range); in any other case, this method returns `-1`.

#### Return

`Integer` — for `Text` elements, the number of characters before the start of the range; for other elements, `-1`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### isPartial()

Determines whether this range element covers the entire element or a partial selection of the element's characters. The beginning and end of a partial range element's range can be determined using `getStartOffset()` and `getEndOffsetInclusive()`, respectively.

#### Return

`Boolean` — `true` if the element is partially included; `false` if not

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
