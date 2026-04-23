---
source: https://developers.google.com/apps-script/reference/spreadsheet/drawing
root: apps-script
fetched_at: 2026-04-23T15:21:31.281Z
---

# Class Drawing

## Page Summary

- The `Drawing` class represents a drawing object placed on a spreadsheet sheet.
- You can retrieve information about a drawing's position, dimensions (height and width), attached macro, parent sheet, and z-index.
- Drawings can be removed from the spreadsheet using the `remove()` method.
- You can set the height, width, position, and z-index of a drawing using dedicated methods.
- Macros can be assigned to drawings using the `setOnAction()` method.

Represents a drawing over a sheet in a spreadsheet.

## Detailed documentation

### getContainerInfo()

Gets information about where the drawing is positioned in the sheet.

#### Return

`ContainerInfo` — An object containing the drawing's container position.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getHeight()

Returns the actual height of this drawing in pixels.

```
// Logs the height of all drawings in a sheet
const drawings = SpreadsheetApp.getActiveSheet().getDrawings();
for (let i = 0; i < drawings.length; i++) {
  Logger.log(drawings[i].getHeight());
}
```

#### Return

`Integer` — The height of the drawing in pixels.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getOnAction()

Returns the name of the macro attached to this drawing.

```
// Logs the macro name of all drawings on the active sheet.
const drawings = SpreadsheetApp.getActiveSheet().getDrawings();
for (let i = 0; i < drawings.length; i++) {
  Logger.log(drawings[i].getOnAction());
}
```

#### Return

`String|null` — The macro name attached to this drawing.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSheet()

Returns the sheet this drawing appears on.

```
// Logs the parent sheet of all drawings on the active sheet.
const drawings = SpreadsheetApp.getActiveSheet().getDrawings();
for (let i = 0; i < drawings.length; i++) {
  Logger.log(drawings[i].getSheet());
}
```

#### Return

`Sheet` — The sheet the drawing appears on.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getWidth()

Returns the actual width of this drawing in pixels.

```
// Logs the width of all drawings in a sheet
const drawings = SpreadsheetApp.getActiveSheet().getDrawings();
for (let i = 0; i < drawings.length; i++) {
  Logger.log(drawings[i].getWidth());
}
```

#### Return

`Integer` — The width of the drawing in pixels.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getZIndex()

Returns the z-index of this drawing.

```
// Logs the z-index of all drawings on the active sheet.
const drawings = SpreadsheetApp.getActiveSheet().getDrawings();
for (let i = 0; i < drawings.length; i++) {
  Logger.log(drawings[i].getZIndex());
}
```

#### Return

`Number` — Z-Index of this drawing.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### remove()

Deletes this drawing from the spreadsheet. Any further operation on the drawing results in a script error.

```
// Deletes all drawings from the active sheet.
const drawings = SpreadsheetApp.getActiveSheet().getDrawings();
for (let i = 0; i < drawings.length; i++) {
  drawings[i].remove();
}
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setHeight(height)

Sets the actual height of this drawing in pixels.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `height` | `Integer` | The desired height in pixels. |

#### Return

`Drawing` — This drawing, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setOnAction(macroName)

Assigns a macro function to this drawing.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `macroName` | `String` | Name of the macro function. |

#### Return

`Drawing` — This drawing, for chaining.

---

### setPosition(anchorRowPos, anchorColPos, offsetX, offsetY)

Sets the position where the drawing appears on the sheet. The anchor row and column position indices are 1-indexed.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `anchorRowPos` | `Integer` | The drawing's top side is anchored in this row. |
| `anchorColPos` | `Integer` | The drawing's top side is anchored in this col. |
| `offsetX` | `Integer` | The horizontal offset from the cell corner in pixels. |
| `offsetY` | `Integer` | The vertical offset from the cell corner in pixels. |

#### Return

`Drawing` — This drawing, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setWidth(width)

Sets the actual width of this drawing in pixels.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | `Integer` | The desired width in pixels. |

#### Return

`Drawing` — This drawing, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setZIndex(zIndex)

Sets the z-index of this drawing.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `zIndex` | `Number` | Z-Index of this drawing. |

#### Return

`Drawing` — This drawing, for chaining.
