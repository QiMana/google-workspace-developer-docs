---
source: https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder
root: apps-script
fetched_at: 2026-04-23T15:21:25.270Z
---

# Class CellImageBuilder

## Page Summary

- CellImageBuilder is used to create the image value needed to add an image to a cell.
- The value type for a CellImage is `ValueType.IMAGE`.
- Key methods include `build()` to create the image value, `setSourceUrl()` to set the image source, and methods to get and set alt text (`getAltTextDescription`, `setAltTextDescription`, `getAltTextTitle`, `setAltTextTitle`).
- The `getContentUrl()` method returns a temporary Google-hosted URL for the image.
- The `getUrl()` method is deprecated and will often return an empty string.

Builder for `CellImage`. This builder creates the image value needed to add an image to a cell.

## Detailed documentation

### build()

Creates the image value type needed to add an image to a cell. The image value is built from the image properties added to the builder, such as the source URL.

#### Return

— A representation of the image to add to a cell.

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

### getContentUrl()

Returns a Google-hosted URL to the image. This URL is tagged with the account of the requester, so anyone with the URL effectively accesses the image as the original requester. Access to the image might be lost if the spreadsheet's sharing settings change. The returned URL expires after a short period of time.

```
const range = SpreadsheetApp.getActiveSpreadsheet().getRange("Sheet1!A1");
const value = range.getValue();
if (value.valueType == SpreadsheetApp.ValueType.IMAGE) {
  console.log(value.getContentUrl());
}
```

#### Return

`String` — The Google-hosted URL of the image.

---

### setAltTextDescription(description)

Sets the alt-text description for this image.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `description` | `String` | The new alt text description for the image. |

#### Return

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

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setSourceUrl(url)

Sets the image source URL.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The URL for the image. |

#### Return

`CellImageBuilder` — This builder, for chaining.

---

### toBuilder()

Creates a cell image builder based on the current image properties. Use `setSourceUrl(url)` to set the source URL of the new image. Then you can add it to a cell using `Range.setValue(value)` or `Range.setValues(values)`.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const range = ss.getRange("Sheet1!A1");
const value = range.getValue();
if (value.valueType == SpreadsheetApp.ValueType.IMAGE) {
  const newImage =
      value.toBuilder()
          .setSourceUrl(
              'https://www.gstatic.com/images/branding/productlogos/apps_script/v10/web-64dp/logo_apps_script_color_1x_web_64dp.png',
              )
          .build();
  const newRange = ss.getRange("Sheet1!A2");
  newRange.setValue(newImage);
}
```

#### Return

`CellImageBuilder` — A builder that creates an image value type based on the given image properties.

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
