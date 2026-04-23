---
source: https://developers.google.com/apps-script/reference/slides/table-row
root: apps-script
fetched_at: 2026-04-23T15:21:16.001Z
---

# Class TableRow

## Page Summary

- A TableRow represents a row in a table and consists of a list of table cells, identified by its index.
- Methods are available to get a specific cell by index, retrieve the row's index, get the minimum height, find the number of cells, access the parent table, and remove the row.
- Detailed documentation for each method provides information on parameters, return types, and required authorization scopes.

A row in a table. A row consists of a list of table cells. A row is identified by the row index.

## Detailed documentation

### getCell(cellIndex)

Returns the cell at the specified index.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cellIndex` | `Integer` | The 0-based index of the cell to retrieve. |

#### Return

`TableCell` — The cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getIndex()

Returns the 0-based index of the row.

#### Return

`Integer` — The 0-based index of the row.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getMinimumHeight()

Returns the minimum height of the row in points. The actual height depends on the length of the content of the cell.

#### Return

`Number` — The minimum height of the row in points.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getNumCells()

Returns the number of cells in this row.

#### Return

`Integer` — The number of cells in this row.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getParentTable()

Returns the table containing the current row.

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### remove()

Removes the table row.

If all the cells in the row are merged with other rows, the common rows spanned by these cells are removed.

If no rows remain in the table after this removal, the whole table is removed.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
