---
source: https://developers.google.com/apps-script/reference/slides/border
root: apps-script
fetched_at: 2026-04-23T15:21:02.117Z
---

# Class Border

## Page Summary

- The Border class describes the border around an element.
- Methods are available to get and set the dash style, line fill, and weight of the border, as well as check its visibility and set it to transparent.

Describes the border around an element.

## Detailed documentation

### getDashStyle()

Gets the `DashStyle` of the border.

#### Return

`DashStyle|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getLineFill()

Gets the `LineFill` of the border.

#### Return

`LineFill`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getWeight()

Gets the thickness of the border in points. Returns `null` if the element does not have a border.

#### Return

`Number|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### isVisible()

Gets whether the border is visible or not.

#### Return

`Boolean`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setDashStyle(style)

Sets the `DashStyle` of the border.

Setting a `DashStyle` on a transparent border makes it visible.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `style` | `DashStyle` | The dash style to set. |

#### Return

`Border` — This `Border`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setTransparent()

Sets the border to be transparent.

#### Return

`Border` — This `Border`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setWeight(points)

Sets the thickness of the border in points.

Setting a weight on a transparent border makes it visible.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `points` | `Number` | The border weight in points. |

#### Return

`Border` — This `Border`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
