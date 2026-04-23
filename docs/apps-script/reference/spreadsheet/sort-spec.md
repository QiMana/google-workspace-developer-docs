---
source: https://developers.google.com/apps-script/reference/spreadsheet/sort-spec
root: apps-script
fetched_at: 2026-04-23T15:21:59.336Z
---

# Class SortSpec

## Page Summary

- SortSpec represents the sorting specification.
- It includes methods to retrieve background and foreground colors used for sorting.
- It can get the data source column or the dimension index the sort spec acts on.
- SortSpec provides access to the sort order and indicates whether the sort order is ascending.

The sorting specification.

## Detailed documentation

### getBackgroundColor()

Returns the background color used for sorting, or `null` if absent.

#### Return

`Color|null` — The background color.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataSourceColumn()

Gets the data source column the sort spec acts on. Returns `null` if this sort spec is not acting on a data source column.

#### Return

`DataSourceColumn|null` — The data source column the sort spec acts on.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDimensionIndex()

Returns the dimension index or `null` if not linked to a local filter.

#### Return

`Integer|null` — The dimension index.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getForegroundColor()

Returns the foreground color used for sorting, or `null` if absent.

#### Return

`Color|null` — The foreground color.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSortOrder()

Returns the sort order.

#### Return

`SortOrder` — The sort order.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isAscending()

Returns whether the sort order is ascending.

#### Return

`Boolean` — `true` if the sort order is ascending, or `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
