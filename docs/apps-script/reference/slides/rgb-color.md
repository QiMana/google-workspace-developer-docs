---
source: https://developers.google.com/apps-script/reference/slides/rgb-color
root: apps-script
fetched_at: 2026-04-23T15:21:13.292Z
---

# Class RgbColor

## Page Summary

- RgbColor defines a color using red, green, and blue channels.
- You can get the red, green, or blue channel value of an RgbColor as an integer between 0 and 255.
- An RgbColor can be returned as a CSS-style hexadecimal string using `asHexString()`.
- The type of the color can be retrieved using `getColorType()`.

A color defined by red, green, blue color channels.

## Detailed documentation

### asHexString()

Returns the color as a CSS-style 7 character hexadecimal string, #rrggbb.

#### Return

`String`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getBlue()

The blue channel of this color, as a number from 0 to 255.

#### Return

`Integer`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getColorType()

Get the type of this color.

#### Return

`ColorType`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getGreen()

The green channel of this color, as a number from 0 to 255.

#### Return

`Integer`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getRed()

The red channel of this color, as a number from 0 to 255.

#### Return

`Integer`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
