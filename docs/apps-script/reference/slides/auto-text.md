---
source: https://developers.google.com/apps-script/reference/slides/auto-text
root: apps-script
fetched_at: 2026-04-23T15:21:01.292Z
---

# Class AutoText

## Page Summary

- AutoText is a dynamic text element that changes over time, like a slide number.
- The `getAutoTextType()` method returns the type of auto text.
- The `getIndex()` method returns the index of the auto text.
- The `getRange()` method returns a `TextRange` spanning the auto text.
- These methods require specific authorization scopes.

An element of text that is dynamically replaced with content that can change over time, such as a slide number.

## Detailed documentation

### getAutoTextType()

Returns the type of auto text. Returns `null` if the auto text has been deleted.

#### Return

`AutoTextType|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getIndex()

Returns the index of the auto text. Returns `null` if the auto text has been deleted.

#### Return

`Integer|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getRange()

Returns a `TextRange` spanning the auto text. Returns `null` if the auto text has been deleted.

#### Return

`TextRange|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
