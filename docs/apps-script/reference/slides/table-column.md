---
source: https://developers.google.com/apps-script/reference/slides/table-column
root: apps-script
fetched_at: 2026-04-23T15:21:15.919Z
---

# Class TableColumn

## Page Summary

- TableColumn represents a column in a table, identified by its index and consisting of a list of table cells.
- You can access a specific cell within the column using its index with `getCell()`.
- Methods are available to retrieve the column's index, the number of cells it contains, and its parent table.
- You can also get the width of the column in points using `getWidth()`.
- The column can be removed using the `remove()` method, which may also remove the table or other columns if cells are merged.

A column in a table. A column consists of a list of table cells. A column is identified by the column index.

## Detailed documentation

### getCell(cellIndex)

Returns the cell at the specified index.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cellIndex` | `Integer` | The 0-based index of the cell to retrieve. |

#### Return

`TableCell` — The cell at the specified index.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getIndex()

Returns the 0-based index of the column.

#### Return

`Integer`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getNumCells()

Returns the number of cells in this column.

#### Return

`Integer`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getParentTable()

Returns the table containing the current column.

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getWidth()

Returns the width of the column in points.

#### Return

`Number`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### remove()

Removes the table column.

If all the cells in the column are merged with other columns, the common columns spanned by these cells are removed.

If no columns remain in the table after this removal, the whole table is removed.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
