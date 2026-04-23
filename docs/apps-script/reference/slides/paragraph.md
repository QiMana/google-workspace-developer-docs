---
source: https://developers.google.com/apps-script/reference/slides/paragraph
root: apps-script
fetched_at: 2026-04-23T15:21:08.978Z
---

# Class Paragraph

## Page Summary

- A Paragraph is a segment of text terminated by a newline character.
- The `getIndex()` method returns the index of the paragraph's newline.
- The `getRange()` method returns a TextRange spanning the text in the paragraph.
- Both `getIndex()` and `getRange()` require specific authorization scopes.

A segment of text terminated by a newline character.

## Detailed documentation

### getIndex()

Returns the index of the paragraph's newline. Returns `null` if the newline has been deleted.

#### Return

`Integer|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getRange()

Returns a `TextRange` spanning the text in the paragraph ended by this object's newline character. Returns `null` if the paragraph's newline has been deleted.

#### Return

`TextRange|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
