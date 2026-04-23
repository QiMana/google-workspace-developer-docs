---
source: https://developers.google.com/apps-script/reference/spreadsheet/pivot-group-limit
root: apps-script
fetched_at: 2026-04-23T15:21:42.534Z
---

# Class PivotGroupLimit

## Page Summary

- PivotGroupLimit allows access and modification of pivot table group limits.
- You can get the count limit on rows or columns in the pivot group using `getCountLimit()`.
- The pivot group the limit belongs to can be retrieved using `getPivotGroup()`.
- You can remove the pivot group limit using `remove()`.
- The count limit on rows or columns in the pivot group can be set using `setCountLimit(countLimit)`.

Access and modify pivot table group limit.

## Detailed documentation

### getCountLimit()

Gets the count limit on rows or columns in the pivot group.

#### Return

`Integer` — The count limit on rows or columns.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getPivotGroup()

Returns the pivot group the limit belongs to.

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### remove()

Removes the pivot group limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setCountLimit(countLimit)

Sets the count limit on rows or columns in the pivot group.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `countLimit` | `Integer` | The count limit on rows or columns to set. Must be positive. |

#### Return

`PivotGroupLimit` — The pivot group limit, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
