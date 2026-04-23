---
source: https://developers.google.com/apps-script/reference/slides/page-background
root: apps-script
fetched_at: 2026-04-23T15:21:09.178Z
---

# Class PageBackground

## Page Summary

- You can retrieve the picture or solid fill of a page background using `getPictureFill()` or `getSolidFill()`, which return `null` if the background type doesn't match.
- The type of the page background can be obtained with the `getType()` method.
- You can check if the page background is visible using the `isVisible()` method.
- Page backgrounds can be set to a picture from a blob source or a URL using the `setPictureFill()` methods.
- Solid color backgrounds can be set using `setSolidFill()` with various color representations, including Color objects, RGB values, hex strings, or ThemeColorType, with optional alpha transparency.
- The page background can be set to transparent using the `setTransparent()` method.

Describes the page's background

## Detailed documentation

### getPictureFill()

Get the stretched picture fill of this background, or `null` if the background fill type is not `PageBackgroundType.PICTURE`.

#### Return

`PictureFill|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getSolidFill()

Get the solid fill of this background, or `null` if the background fill type is not `PageBackgroundType.SOLID`.

#### Return

`SolidFill|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getType()

Get the type of this page background.

#### Return

`PageBackgroundType`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### isVisible()

Whether the background is visible.

#### Return

`Boolean`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setPictureFill(blobSource)

Sets an image from the specified image blob as the page background. The image is stretched to match the dimensions of the page.

Inserting the image fetches it from the `BlobSource` once and a copy is stored for display inside the presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `blobSource` | `BlobSource` | The image data. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setPictureFill(imageUrl)

Sets the image at the provided URL as the page background. The image is stretched to match the dimensions of the page.

Inserting the image fetches it from the URL once and a copy is stored for display inside the presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.

The provided URL must be publicly accessible and no larger than 2kB. The URL itself is saved with the image and exposed via `PictureFill.getSourceUrl()`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `imageUrl` | `String` | The URL to download the image from. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(color)

Sets the solid fill to the given `Color`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The color to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(color, alpha)

Sets the solid fill to the given alpha and `Color`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The color to set. |
| `alpha` | `Number` | The alpha value (transparency). |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(red, green, blue)

Sets the solid fill to the given RGB values.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `red` | `Integer` | The red component. |
| `green` | `Integer` | The green component. |
| `blue` | `Integer` | The blue component. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(red, green, blue, alpha)

Sets the solid fill to the given alpha and RGB values.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `red` | `Integer` | The red component. |
| `green` | `Integer` | The green component. |
| `blue` | `Integer` | The blue component. |
| `alpha` | `Number` | The alpha value (transparency). |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(hexString)

Sets the solid fill to the given hex color string.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hexString` | `String` | The hex color string. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(hexString, alpha)

Sets the solid fill to the given alpha and hex color string.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hexString` | `String` | The hex color string. |
| `alpha` | `Number` | The alpha value (transparency). |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(color)

Sets the solid fill to the given `ThemeColorType`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `ThemeColorType` | The theme color type. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(color, alpha)

Sets the solid fill to the given alpha and `ThemeColorType`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `ThemeColorType` | The theme color type. |
| `alpha` | `Number` | The alpha value (transparency). |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setTransparent()

Sets the background to transparent.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
