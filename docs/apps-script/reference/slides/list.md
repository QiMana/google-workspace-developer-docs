---
source: https://developers.google.com/apps-script/reference/slides/list
root: apps-script
fetched_at: 2026-04-23T15:21:08.639Z
---

# Class List

## Page Summary

- The `List` object represents a list in the text and has methods to retrieve its ID and paragraphs.
- The `getListId()` method returns the unique identifier for the list as a string.
- The `getListParagraphs()` method returns an array of `Paragraph` objects contained within the list.
- Both methods require specific authorization scopes related to accessing presentations.

A list in the text.

## Detailed documentation

### getListId()

Returns the ID of the list.

#### Return

`String`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getListParagraphs()

Returns all the `Paragraphs` in the list.

#### Return

`Paragraph[]`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
