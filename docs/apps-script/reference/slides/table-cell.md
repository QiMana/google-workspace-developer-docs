---
source: https://developers.google.com/apps-script/reference/slides/table-cell
root: apps-script
fetched_at: 2026-04-23T15:21:16.348Z
---

# Class TableCell

## Page Summary

- TableCell represents a single cell within a table structure.
- Methods are available to retrieve information about the cell's position, span, content alignment, fill, merge state, and parent elements.
- You can get the text content of a TableCell using the `getText()` method.
- The content alignment of the text within a TableCell can be set using the `setContentAlignment()` method.
- All methods for TableCell require specific authorization scopes related to presentations.

A cell in a table.

## Detailed documentation

### getColumnIndex()

Returns the 0-based column index of the table cell.

#### Return

`Integer`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getColumnSpan()

Returns the column span of the table cell.

#### Return

`Integer`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getContentAlignment()

Returns the `ContentAlignment` of the text in the table cell.

#### Return

`ContentAlignment`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getFill()

Returns the fill of the table cell.

#### Return

`Fill`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getHeadCell()

Returns the head cell of this table cell. Returns `null` if this cell has not been merged or if this cell is the head cell.

#### Return

`TableCell|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getMergeState()

Returns the merge state of the table cell.

#### Return

`CellMergeState`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getParentColumn()

Returns the table column containing the current cell.

#### Return

`TableColumn`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getParentRow()

Returns the table row containing the current cell.

#### Return

`TableRow`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getParentTable()

Returns the table containing the current cell.

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getRowIndex()

Returns the 0-based row index of the table cell.

#### Return

`Integer`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getRowSpan()

Returns the row span of the table cell.

#### Return

`Integer`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getText()

Returns the text content of the table cell. Returns `null` if the cell is merged but is not a head cell.

Text within a table cell always terminates with a newline character.

#### Return

`TextRange`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setContentAlignment(contentAlignment)

Sets the `ContentAlignment` of the text in the table cell.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `contentAlignment` | `ContentAlignment` | The content alignment to set. |

#### Return

`TableCell` — This `TableCell`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
