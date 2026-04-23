---
source: https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image
root: apps-script
fetched_at: 2026-04-23T15:21:41.283Z
---

# Class OverGridImage

## Page Summary

- OverGridImage represents an image placed over the grid in a spreadsheet.
- You can assign a function to an OverGridImage and retrieve or set its alt text, anchor cell, and dimensions.
- Methods are available to remove or replace an OverGridImage with a new image from a BlobSource or URL.
- The deprecated getUrl() method for OverGridImage may not return a URL for newly inserted images.

Represents an image over the grid in a spreadsheet.

## Detailed documentation

### assignScript(functionName)

Assigns the function with the specified function name to this image.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `functionName` | `String` | The name of the function being specified. This must be a public top level function, not one ending in underscore such as `privateFunction_`. |

#### Return

`OverGridImage` — This image, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getAltTextDescription()

Returns the alt text description for this image.

#### Return

`String` — The alt text description.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getAltTextTitle()

Returns the alt text title for this image.

#### Return

`String` — The alt text title.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getAnchorCell()

Returns the cell where an image is anchored.

#### Return

`Range` — The anchor cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getAnchorCellXOffset()

Returns the horizontal pixel offset from the anchor cell.

#### Return

`Integer` — The horizontal pixel offset.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getAnchorCellYOffset()

Returns the vertical pixel offset from the anchor cell.

#### Return

`Integer` — The vertical pixel offset.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getHeight()

Returns the actual height of this image in pixels.

```
// Logs the height of all images in a spreadsheet
const images = SpreadsheetApp.getActiveSpreadsheet().getImages();
for (let i = 0; i < images.length; i++) {
  Logger.log(images[i].getHeight());
}
```

#### Return

`Integer` — The height of the image in pixels.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getInherentHeight()

Returns the inherent height of this image in pixels.

#### Return

`Integer` — The inherent height in pixels.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getInherentWidth()

Returns the inherent height of this image in pixels.

#### Return

`Integer` — The inherent width in pixels.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getScript()

Returns the name of the function assigned to this image.

#### Return

`String` — The name of the function.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSheet()

Returns the sheet this image appears on.

```
// Logs the parent sheet of all images in a spreadsheet
const images = SpreadsheetApp.getActiveSpreadsheet().getImages();
for (let i = 0; i < images.length; i++) {
  Logger.log(images[i].getSheet());
}
```

#### Return

`Sheet` — The sheet the image appears on.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getWidth()

Returns the actual width of this image in pixels.

```
// Logs the width of all images in a spreadsheet
const images = SpreadsheetApp.getActiveSpreadsheet().getImages();
for (let i = 0; i < images.length; i++) {
  Logger.log(images[i].getWidth());
}
```

#### Return

`Integer` — The width of the image in pixels.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### remove()

Deletes this image from the spreadsheet. Any further operation on the image results in a script error.

```
// Deletes all images in a spreadsheet
const images = SpreadsheetApp.getActiveSpreadsheet().getImages();
for (let i = 0; i < images.length; i++) {
  images[i].remove();
}
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### replace(blob)

Replaces this image with the one specified by the provided `BlobSource`. The maximum supported blob size is 2MB.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `blob` | `BlobSource` | The new image as a Blob. |

#### Return

`OverGridImage` — This image, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### replace(url)

Replaces this image with the one from the specified URL.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The URL of the new image. |

#### Return

`OverGridImage` — This image, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### resetSize()

Resets this image to its inherent dimensions.

#### Return

`OverGridImage` — This image, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setAltTextDescription(description)

Sets the alt-text description for this image.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `description` | `String` | The new alt text description for the image. |

#### Return

`OverGridImage` — This image, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setAltTextTitle(title)

Sets the alt text title for this image.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The new alt text title for the image. |

#### Return

`OverGridImage` — This image, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setAnchorCell(cell)

Sets the cell where an image is anchored.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cell` | `Range` | The new anchor cell. |

#### Return

`OverGridImage` — This image, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setAnchorCellXOffset(offset)

Sets the horizontal pixel offset from the anchor cell.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `offset` | `Integer` | The new horizonal pixel offset. |

#### Return

`OverGridImage` — This image, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setAnchorCellYOffset(offset)

Sets the vertical pixel offset from the anchor cell.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `offset` | `Integer` | The new vertical pixel offset. |

#### Return

`OverGridImage` — This image, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setHeight(height)

Sets the actual height of this image in pixels.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `height` | `Integer` | The desired height in pixels. |

#### Return

`OverGridImage` — The image for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setWidth(width)

Sets the actual width of this image in pixels.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | `Integer` | The desired width in pixels. |

#### Return

`OverGridImage` — The image for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

## Deprecated methods

### getUrl()

**Deprecated.** For most newly inserted images, the source URL is unavailable.

Gets the image's source URL. Returns an empty string if the URL is unavailable. For most newly inserted images, the source URL is unavailable regardless how the image is inserted.

#### Return

`String` — The image's source URL if available; returns an empty string otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
