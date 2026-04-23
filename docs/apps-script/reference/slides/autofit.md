---
source: https://developers.google.com/apps-script/reference/slides/autofit
root: apps-script
fetched_at: 2026-04-23T15:21:01.758Z
---

# Class Autofit

## Page Summary

- Autofit describes the settings for how text fits within a shape's bounding box.
- When a change might affect text fitting, autofit is deactivated, and font scale and line spacing reduction are reset to default values.
- Methods are available to disable autofit, get the autofit type, font scale, and line spacing reduction of a shape.
- The `disableAutofit()` method sets the autofit type to `NONE`.
- The `getAutofitType()`, `getFontScale()`, and `getLineSpacingReduction()` methods provide information about the shape's autofit settings.

Describes the autofit settings of a shape. If a change is made that might affect text fitting within its bounding text box:

- Autofit is deactivated and set to `AutofitType.NONE`.
- The font scale is reset to the default value and applied to the font size.
- The line spacing reduction is reset to the default value and applied to the line spacing.

## Detailed documentation

### disableAutofit()

Sets the `AutofitType` of a shape to `AutofitType.NONE`.

#### Return

`Autofit` — The autofit, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getAutofitType()

Gets the `AutofitType` of the shape.

#### Return

`AutofitType` — The autofit type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getFontScale()

Gets the font scale applied to the shape. For shapes with `AutofitType` `AutofitType.NONE` or `AutofitType.SHAPE_AUTOFIT`, this value is the default value of 1. For `AutofitType.TEXT_AUTOFIT`, the value returned is what the original font size is multiplied by to fit within the shape.

#### Return

`Number` — The font scale.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getLineSpacingReduction()

Gets the line spacing reduction applied to the shape. For shapes with `AutofitType` `AutofitType.NONE` or `AutofitType.SHAPE_AUTOFIT`, this value is the default value of 0. For `AutofitType.TEXT_AUTOFIT`, the returned value is the amount of spacing subtracted from the original spacing to make the text fit within the shape.

#### Return

`Number` — The line spacing.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
