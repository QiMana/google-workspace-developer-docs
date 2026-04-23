---
source: https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria
root: apps-script
fetched_at: 2026-04-23T15:21:42.301Z
---

# Class FilterCriteria

## Page Summary

- FilterCriteria allows you to get information about or copy the criteria on existing filters.
- You can create criteria for any filter type using `SpreadsheetApp.newFilterCriteria()` and `FilterCriteriaBuilder`.
- You can copy filter criteria from one column to another using the `copy()` method.
- The `getHiddenValues()` method returns the values that a filter hides in Grid sheets.
- Methods like `getVisibleBackgroundColor()` and `getVisibleForegroundColor()` return color-based filter criteria for Grid sheets.

Use this class to get information about or copy the criteria on existing filters.

- To create a new filter, refer to the following:
	- For sheets, use `Range.createFilter()`.
		- For pivot tables, use `PivotTable.addFilter(sourceDataColumn, filterCriteria)`.
		- For sheets that are connected to a database, use `DataSourceSheet.addFilter(columnName, filterCriteria)`.
		- For pivot tables that are connected to a database, use `DataSourcePivotTable.addFilter(columnName, filterCriteria)`.
- To create the criteria for any type of filter, refer to `SpreadsheetApp.newFilterCriteria()` and `FilterCriteriaBuilder`.

### Common uses

#### Copy criteria

The following sample gets the filter that applies to the range `A1:C20`, gets the criteria applied to column C, and copies the criteria to column B.

```
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');
// Copies the filter criteria applied to column C.
const filter = range.getFilter();
const criteria = filter.getColumnFilterCriteria(3).copy().build();
// Applies the copied criteria to column B. The copied criteria overwrites any
// existing criteria on column B.
filter.setColumnFilterCriteria(2, criteria);
```

#### Get values hidden by the filter

The following sample gets the filter that applies to the given range and logs the values from column B that the filter hides.

```
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');
const filter = range.getFilter();
// Gets the filter criteria applied to column B, then gets the hidden values.
const filterCriteria = filter.getColumnFilterCriteria(2).getHiddenValues();
// Logs the hidden values.
console.log(filterCriteria);
```

## Detailed documentation

### copy()

Copies this filter criteria and creates a criteria builder that you can apply to another filter.

You can use this method with any type of filter. If you're using a sheet filter, you can copy the criteria to another column.

```
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Makes a copy of the filter criteria applied to column C.
const criteria = filter.getColumnFilterCriteria(3).copy().build();
// Applies the copied criteria to column B. The copied criteria overwrites any
// existing criteria on column B.
filter.setColumnFilterCriteria(2, criteria);
```

#### Return

`FilterCriteriaBuilder` — A filter criteria builder based on this filter criteria.

---

### getCriteriaType()

Returns the criteria's boolean type, for example, `CELL_EMPTY`. To learn about the types of boolean criteria, see the `BooleanCriteria` enum.

People often use this method to add boolean condition criteria to a filter without replacing existing criteria.

- To get the arguments for the criteria, use `getCriteriaValues()`.
- To use the criteria type and criteria values to create or modify filter criteria, see `FilterCriteriaBuilder.withCriteria(criteria, args)`.

You can use this method for any type of filter. If the filter criteria isn't a boolean condition, returns `null`.

```
const ss = SpreadsheetApp.getActiveSheet();
// Gets the filter on the active sheet.
const filter = ss.getFilter();
// Gets the criteria type and returns a string representing the criteria type
// object.
const criteriaType =
    filter.getColumnFilterCriteria(2).getCriteriaType().toString();
// Logs the criteria type.
console.log(criteriaType);
```

#### Return

`BooleanCriteria|null` — The type of boolean criteria, or `null` if the criteria isn't a boolean condition.

---

### getCriteriaValues()

Returns an array of arguments for boolean criteria. Some boolean criteria types don't have arguments and return an empty array, for example, `CELL_NOT_EMPTY`.

People often use this method to add boolean condition criteria to a filter without replacing existing criteria.

- To get the boolean criteria type, use `getCriteriaType()`.
- To use the criteria type and criteria values to create or modify a filter criteria, see `FilterCriteriaBuilder.withCriteria(criteria, args)`.
	You can use this method for any type of filter.
	```
	const ss = SpreadsheetApp.getActiveSheet();
	const filter = ss.getFilter();
	// Gets the values of the boolean criteria and logs them. For example, if the
	// boolean condition is whenNumberGreaterThan(10), then the logged value is 10.
	const criteriaValues = filter.getColumnFilterCriteria(2).getCriteriaValues();
	console.log(criteriaValues);
	```
	#### Return
	`Object[]` — An array of arguments appropriate to the boolean criteria type. The number of arguments and their type match the corresponding `when...()` method of the `FilterCriteriaBuilder` class.

---

### getHiddenValues()

Returns the values that the filter hides.

Use this criteria with filters on `Grid` sheets, the default type of sheet. Returns `null` if you call this method for other types of filters.

```
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');
const filter = range.getFilter();
// Gets the filter criteria applied to column B, then gets the hidden values.
const filterCriteria = filter.getColumnFilterCriteria(2).getHiddenValues();
// Logs the hidden values.
console.log(filterCriteria);
```

#### Return

`String[]` — An array of values that the filter hides.

---

### getVisibleBackgroundColor()

Returns the background color used as filter criteria. Cells with this background color remain visible.

Use this criteria with filters on `Grid` sheets, the default type of sheet. Returns `null` if you call this method for other types of filters.

```
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');
// Logs the background color that column B is filtered by as a hexadecimal
// string.
const filter = range.getFilter();
const color = filter.getColumnFilterCriteria(2)
                  .getVisibleBackgroundColor()
                  .asRgbColor()
                  .asHexString();
console.log(color);
```

#### Return

`Color|null` — The background color used as filter criteria.

---

### getVisibleForegroundColor()

Returns the foreground color used as a filter criteria. Cells with this foreground color remain visible.

Use this criteria with filters on `Grid` sheets, the default type of sheet. Returns `null` if you call this method for other types of filters.

```
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');
// Logs the foreground color that column B is filtered by as a hexadecimal
// string.
const filter = range.getFilter();
const color = filter.getColumnFilterCriteria(2)
                  .getVisibleForegroundColor()
                  .asRgbColor()
                  .asHexString();
console.log(color);
```

#### Return

`Color|null` — The foreground color used as a filter criteria.

---

### getVisibleValues()

Returns the values that the pivot table filter shows.

This criteria is only for filters on pivot tables that aren't connected to a database. Returns an empty array for other types of filters.

```
const ss = SpreadsheetApp.getActiveSheet();
// Gets the first pivot table on the sheet, then gets the visible values of its
// first filter.
const pivotTable = ss.getPivotTables()[0];
const pivotFilterValues =
    pivotTable.getFilters()[0].getFilterCriteria().getVisibleValues();
// Logs the visible values.
console.log(pivotFilterValues);
```

#### Return

`String[]` — An array of values that the pivot table filter shows.
