---
source: https://developers.google.com/apps-script/reference/spreadsheet/cell-image
root: apps-script
fetched_at: 2026-04-23T15:21:25.087Z
---

# Class CellImage

## Page Summary

- CellImage represents an image value in a cell and is added using `SpreadsheetApp.newCellImage()` and `CellImageBuilder`.
- CellImage has a `valueType` property which is always `ValueType.IMAGE`.
- Key methods include retrieving alt text (`getAltTextDescription`, `getAltTextTitle`), getting a Google-hosted content URL (`getContentUrl`), and creating a builder based on current properties (`toBuilder`).
- The `getUrl()` method is deprecated as the source URL is often unavailable for newly inserted images.

Represents an image value in a cell. To add an image to a cell, you must create a new image value for the image using `SpreadsheetApp.newCellImage()` and `CellImageBuilder`. Then you can use `Range.setValue(value)` or `Range.setValues(values)` to add the image value to the cell.

## Detailed documentation

### getAltTextDescription()

Returns the alt text description for this image.

#### Return

`String` — The alt text description.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getAltTextTitle()

Returns the alt text title for this image.

#### Return

`String` — The alt text title.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

### toBuilder()

Creates a cell image builder based on the current image properties. Use `CellImageBuilder.setSourceUrl(url)` to set the source URL of the new image. Then you can add it to a cell using `Range.setValue(value)` or `Range.setValues(values)`.

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
