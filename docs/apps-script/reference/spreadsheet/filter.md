---
source: https://developers.google.com/apps-script/reference/spreadsheet/filter
root: apps-script
fetched_at: 2026-04-23T15:21:37.373Z
---

# Class Filter

## Page Summary

- The Filter class is used to modify existing filters on Grid sheets.
- To use the Filter class, you must first access the filter using Range.getFilter() or Sheet.getFilter().
- Common uses of the Filter class include removing a filter and getting the range the filter applies to.
- The Filter class provides methods for managing filter criteria on columns and sorting the filtered range.

Use this class to modify existing filters on `Grid` sheets, the default type of sheet. Grid sheets are regular sheets with data that aren't connected to a database.

If a filter doesn’t exist on the sheet yet, create one using `Range.createFilter()`.

To use this class, you must first access the grid sheet filter using `Range.getFilter()` or `Sheet.getFilter()`.

### Common uses

#### Remove a filter

The below sample gets the filter on the active sheet and removes it.

```
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Removes the filter from the active sheet.
filter.remove();
```

#### Get the range that the filter applies to

The below sample gets the filter on the active sheet, then uses the `getRange()` method from this class to log the range that the filter applies to.

```
const ss = SpreadsheetApp.getActiveSheet();
// Gets the existing filter on the active sheet.
const filter = ss.getFilter();
// Logs the range that the filter applies to in A1 notation.
console.log(filter.getRange().getA1Notation());
```

## Detailed documentation

### getColumnFilterCriteria(columnPosition)

Gets the filter criteria on the specified column, or `null` if the column doesn't have filter criteria applied to it.

To get more details about the filter criteria, chain this method with methods from the `FilterCriteria` class.

```
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Gets the filter criteria applied to column B of the active sheet
// and logs the hidden values.
const filterCriteria = filter.getColumnFilterCriteria(2).getHiddenValues();
console.log(filterCriteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnPosition` | `Integer` | The 1-indexed position of the column. For example, column B's index is 2. |

#### Return

`FilterCriteria|null` — The filter criteria.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRange()

Gets the range this filter applies to.

```
// Gets the existing filter on the active sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Logs the range that the filter applies to in A1 notation.
console.log(filter.getRange().getA1Notation());
```

#### Return

`Range` — The filter's range. To get the range in A1 notation, chain this method with `Range.getA1Notation()`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### remove()

Removes this filter.

```
// Removes the filter from the active sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
filter.remove();
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### removeColumnFilterCriteria(columnPosition)

Removes the filter criteria from the specified column.

```
// Removes the filter criteria from column B.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
filter.removeColumnFilterCriteria(2);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnPosition` | `Integer` | The 1-indexed position of the column. For example, column B's index is 2. |

#### Return

`Filter` — The filter, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setColumnFilterCriteria(columnPosition, filterCriteria)

Sets the filter criteria on the specified column. First, create the filter criteria builder using `SpreadsheetApp.newFilterCriteria()`. Then add criteria to the builder using the `FilterCriteriaBuilder` class. After you've built your criteria, set it as the `filterCriteria` parameter for this method.

```
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Builds the filter criteria to use as a parameter for setColumnFilterCriteria.
const criteria = SpreadsheetApp.newFilterCriteria()
                     .setHiddenValues(['Hello', 'World'])
                     .build();
// Sets the filter criteria for column C.
filter.setColumnFilterCriteria(3, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnPosition` | `Integer` | The 1-indexed position of the column. For example, column B's index is 2. |
| `filterCriteria` | `FilterCriteria` | The filter criteria to set. If you set the criteria to `null`, it removes filter criteria from the specified column. You can also use `removeColumnFilterCriteria(columnPosition)`. |

#### Return

`Filter` — The filter, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### sort(columnPosition, ascending)

Sorts the filtered range by the specified column, excluding the first row (the header row) in the range this filter applies to.

```
// Gets the existing filter and sorts it by column B in ascending order.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
filter.sort(2, true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnPosition` | `Integer` | The 1-indexed position of the column. For example, column B's index is 2. |
| `ascending` | `Boolean` | If `true`, sorts the filtered range in ascending order; if `false`, sorts the filtered range in descending order. |

#### Return

`Filter` — The filter, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
