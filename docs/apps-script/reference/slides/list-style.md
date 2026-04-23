---
source: https://developers.google.com/apps-script/reference/slides/list-style
root: apps-script
fetched_at: 2026-04-23T15:21:08.386Z
---

# Class ListStyle

## Page Summary

- ListStyle represents the list styling for a range of text.
- Methods are available to apply a list preset, get the glyph, retrieve the list the text belongs to, get the nesting level, check if the text is in a list, and remove the text from a list.
- Applying a list preset applies the style to overlapping paragraphs, removing leading tabs and potentially adding the paragraphs to a preceding list if applicable.
- Authorization with specific scopes is required for scripts using these ListStyle methods.

The list styling for a range of text.

## Detailed documentation

### applyListPreset(listPreset)

Applies the specified `ListPreset` to all of the paragraphs that overlap with the text.

The nesting level of each paragraph is determined by counting leading tabs in front of each paragraph. To avoid excess space between the glyphs and the corresponding paragraph, these leading tabs are removed by this method.

If the paragraph immediately before paragraphs being updated is in a with a matching list preset and the paragraphs being updated are not already in a different list, the

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `listPreset` | `ListPreset` | The list preset to apply. |

#### Return

`ListStyle` — This `ListStyle`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getGlyph()

Returns the rendered glyph for the text. Returns `null` if the text spans more than one paragraph or the text is not in a list.

#### Return

`String|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getList()

Returns the the text is in, or `null` if none of the text is in a list, or part of the text is in a list, or the text is in multiple lists. Call `isInList()` to determine whether the text is in a list.

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getNestingLevel()

Returns the 0-based nesting level of the text. Returns `null` if the text is not in a list or there are mixed values.

#### Return

`Integer|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### isInList()

Returns `true` if the text is in exactly one list, `false` if none of the text is in a list, and `null` if only some of the text is in a list or if the text is in multiple lists.

#### Return

`Boolean|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### removeFromList()

Removes the paragraphs that overlap with the text from any lists.

The nesting level of each paragraph is visually preserved by adding indent to the start of

#### Return

`ListStyle` — This `ListStyle`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
