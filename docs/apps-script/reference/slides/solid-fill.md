---
source: https://developers.google.com/apps-script/reference/slides/solid-fill
root: apps-script
fetched_at: 2026-04-23T15:21:17.052Z
---

# Class SolidFill

## Page Summary

- `SolidFill` represents a solid color fill and is detached and immutable.
- The `getAlpha()` method returns the opacity of the color as a number between 0 and 1.0.
- The `getColor()` method returns the color of the fill as a `Color` object.

A solid color fill.

`SolidFill` objects are detached and immutable, so do not reflect changes made after they have been created.

## Detailed documentation

### getAlpha()

Get the opacity of the color, in the interval from \[0, 1.0\], where 1.0 means fully opaque.

#### Return

`Number`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getColor()

Get the color of the fill.

#### Return

`Color`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
