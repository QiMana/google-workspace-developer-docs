---
source: https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder
root: apps-script
fetched_at: 2026-04-23T15:21:41.001Z
---

# Class FilterCriteriaBuilder

## Page Summary

- FilterCriteriaBuilder is used to create filter criteria for spreadsheets.
- To create filter criteria, you must use SpreadsheetApp.newFilterCriteria(), add settings using the builder's methods, and then use build() to assemble the criteria.
- Common uses include hiding values and showing only non-empty cells.
- The builder offers methods for setting criteria based on values, colors, dates, numbers, text, formulas, and boolean conditions.

Builder for filter criteria. To add criteria to a filter, you must do the following:

1. Create the criteria builder using `SpreadsheetApp.newFilterCriteria()`.
2. Add settings to the builder using the methods from this class.
3. Use `build()` to assemble the criteria with your specified settings.

### Common uses

#### Hide values on a sheet

The following sample gets a sheet's existing filter and adds criteria that hides the cells in column C that contain "hello" or "world." The criteria in this sample can only be used with filters on `Grid` sheets, the default type of sheet.

```
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
const criteria = SpreadsheetApp.newFilterCriteria()
                     .setHiddenValues(['hello', 'world'])
                     .build();
filter.setColumnFilterCriteria(3, criteria);
```

#### Only show non-empty cells

The following sample adds a filter to a `DataSource` sheet, a sheet that's connected to a database, with criteria that only shows cells in the "Category" column that aren't empty.

```
// Gets the sheet named "Connected sheet," which is connected to a database.
const sheet = SpreadsheetApp.getActiveSpreadsheet()
                  .getSheetByName('Connected sheet')
                  .asDataSourceSheet();
// Creates criteria that only shows non-empty cells.
const criteria = SpreadsheetApp.newFilterCriteria().whenCellNotEmpty().build();
// Applies the criteria to the column named "Category."
sheet.addFilter('Category', criteria);
```

## Detailed documentation

### build()

Assembles the filter criteria using the settings you add to the criteria builder.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
const criteria = SpreadsheetApp
                     .newFilterCriteria()  // Creates a criteria builder.
                     .whenCellNotEmpty()   // Adds settings to the builder.
                     .build();             // Assembles the criteria.
filter.setColumnFilterCriteria(2, criteria);
```

#### Return

---

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
- To use the criteria type and criteria values to create or modify filter criteria, see `withCriteria(criteria, args)`.

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
- To use the criteria type and criteria values to create or modify a filter criteria, see `withCriteria(criteria, args)`.
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

---

### setHiddenValues(values)

Sets the values to hide. Clears any existing visible or hidden values.

You can only use this criteria for filters on `Grid` sheets, the default type of sheet.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');
const filter = range.getFilter();
// Sets the values to hide and applies the criteria to column C.
const criteria = SpreadsheetApp.newFilterCriteria()
                     .setHiddenValues(['Hello', 'World'])
                     .build();
filter.setColumnFilterCriteria(3, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `values` | `String[]` | The list of values to hide. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — If any of the values are `null`.

---

### setVisibleBackgroundColor(visibleBackgroundColor)

Sets the background color used as filter criteria. Cells with this background color remain visible. Setting a background color filter criteria removes any current color filter criteria from this builder.

You can only use this criteria for filters on `Grid` sheets, the default type of sheet.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that filters by background color and sets it to column B.
const color = SpreadsheetApp.newColor().setRgbColor('#185ABC').build();
const criteria =
    SpreadsheetApp.newFilterCriteria().setVisibleBackgroundColor(color).build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibleBackgroundColor` | `Color` | The background color to set. The color must be an RGB-style color. This method doesn't support theme colors. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### setVisibleForegroundColor(visibleForegroundColor)

Sets the foreground color used as filter criteria. Cells with this foreground color remain visible. Setting a foreground color filter criteria removes any current color filter criteria from this builder.

You can only use this criteria for filters on `Grid` sheets, the default type of sheet.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that filters by foreground color and sets it to column B.
const color = SpreadsheetApp.newColor().setRgbColor('#185ABC').build();
const criteria =
    SpreadsheetApp.newFilterCriteria().setVisibleForegroundColor(color).build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibleForegroundColor` | `Color` | The foreground color to set. The color must be an RGB-style color. This method doesn't support theme colors. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### setVisibleValues(values)

Sets the values to show on a pivot table. Clears any existing visible or hidden values.

You can only use this criteria for filters on pivot tables that aren't connected to a database.

```
// Gets the active sheet.
const ss = SpreadsheetApp.getActiveSheet();
// Gets the first pivot table on the sheet and adds a filter to it that
// sets the visible values to "Northeast" and "Southwest."
const pivotTable = ss.getPivotTables()[0];
const criteria = SpreadsheetApp.newFilterCriteria()
                     .setVisibleValues(['Northeast', 'Southwest'])
                     .build();
pivotTable.addFilter(2, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `values` | `String[]` | The list of values to show. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — If any of the values are `null`.

---

### whenCellEmpty()

Sets the filter criteria to show empty cells.

You can use this criteria with any type of filter.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');
const filter = range.getFilter();
// Sets criteria to column B that only shows empty cells.
const criteria = SpreadsheetApp.newFilterCriteria().whenCellEmpty().build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenCellNotEmpty()

Sets the filter criteria to show cells that aren't empty.

You can use this criteria with any type of filter.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');
const filter = range.getFilter();
// Sets criteria to column B that only shows cells that aren't empty.
const criteria = SpreadsheetApp.newFilterCriteria().whenCellNotEmpty().build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenDateAfter(date)

Sets filter criteria that shows cells with dates that are after the specified date.

You can use this criteria with any type of filter. If you use this criteria with data that's connected to a database, the data type of the column you're filtering by must be a date. If the data isn't connected to a database, the data type of the column you're filtering by doesn't need to be a date, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');
const filter = range.getFilter();
// Creates criteria that only shows cells with dates after June 1, 2022
// and sets it to column A.
const date = new Date('June 1, 2022');
const criteria = SpreadsheetApp.newFilterCriteria().whenDateAfter(date).build();
filter.setColumnFilterCriteria(1, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | The latest date to hide. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenDateAfter(date)

Sets filter criteria that shows cells with dates that are after the specified relative date. To view the relative date options, refer to [Enum `RelativeDate`](https://developers.google.com/apps-script/reference/spreadsheet/relative-date).

You can use this criteria with any type of filter. If you use this criteria with data that's connected to a database, the data type of the column you're filtering by must be a date. If the data isn't connected to a database, the data type of the column you're filtering by doesn't need to be a date, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');
const filter = range.getFilter();
// Creates criteria that only shows cells with dates after today's date
// and sets it to column A.

const criteria = SpreadsheetApp.newFilterCriteria()
                     .whenDateAfter(SpreadsheetApp.RelativeDate.TODAY)
                     .build();
filter.setColumnFilterCriteria(1, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `RelativeDate` | The latest relative date. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenDateBefore(date)

Sets filter criteria that shows cells with dates that are before the specified date.

You can use this criteria with any type of filter. If you use this criteria with data that's connected to a database, the data type of the column you're filtering by must be a date. If the data isn't connected to a database, the data type of the column you're filtering by doesn't need to be a date, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');
const filter = range.getFilter();
// Creates criteria that only shows cells with dates before June 1, 2022
// and sets it to column A.
const date = new Date('June 1, 2022');
const criteria =
    SpreadsheetApp.newFilterCriteria().whenDateBefore(date).build();
filter.setColumnFilterCriteria(1, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | The earliest date to hide. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenDateBefore(date)

Sets filter criteria that shows cells with dates that are before the specified relative date. To view the relative date options, refer to [Enum `RelativeDate`](https://developers.google.com/apps-script/reference/spreadsheet/relative-date).

You can use this criteria with any type of filter. If you use this criteria with data that's connected to a database, the data type of the column you're filtering by must be a date. If the data isn't connected to a database, the data type of the column you're filtering by doesn't need to be a date, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');
const filter = range.getFilter();
// Creates criteria that only shows cells with dates before today's date
// and sets it to column A.

const criteria = SpreadsheetApp.newFilterCriteria()
                     .whenDateBefore(SpreadsheetApp.RelativeDate.TODAY)
                     .build();
filter.setColumnFilterCriteria(1, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `RelativeDate` | The earliest relative date to hide. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenDateEqualTo(date)

Sets filter criteria that shows cells with dates that are equal to the specified date.

You can use this criteria with any type of filter. If you use this criteria with data that's connected to a database, the data type of the column you're filtering by must be a date. If the data isn't connected to a database, the data type of the column you're filtering by doesn't need to be a date, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');
const filter = range.getFilter();
// Creates criteria that only shows cells with dates equal to June 1, 2022
// and sets it to column A.
const date = new Date('June 1, 2022');
const criteria =
    SpreadsheetApp.newFilterCriteria().whenDateEqualTo(date).build();
filter.setColumnFilterCriteria(1, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | The date that cell values must match. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenDateEqualTo(date)

Sets filter criteria that shows cells with dates that are equal to the specified relative date. To view the relative date options, refer to [Enum `RelativeDate`](https://developers.google.com/apps-script/reference/spreadsheet/relative-date).

You can use this criteria with any type of filter. If you use this criteria with data that's connected to a database, the data type of the column you're filtering by must be a date. If the data isn't connected to a database, the data type of the column you're filtering by doesn't need to be a date, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');
const filter = range.getFilter();
// Creates criteria that only shows cells with dates that fall within the past
// month and sets it to column A.

const criteria = SpreadsheetApp.newFilterCriteria()
                     .whenDateEqualTo(SpreadsheetApp.RelativeDate.PAST_MONTH)
                     .build();
filter.setColumnFilterCriteria(1, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `RelativeDate` | The relative date that cell values must match. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenDateEqualToAny(dates)

Sets the filter criteria to show cells with dates that are equal to any of the specified dates.

You can only use this criteria with data connected to a database. For example, use this criteria with filters on a `DataSource` sheet, a sheet that's connected to a database, or a `DataSourcePivotTable`, a pivot table created from a `DataSource` sheet.

```
// Gets the sheet that's connected to a database.
const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data Sheet');
const dataSheet = ss.asDataSourceSheet();
// Adds criteria to the "date" column that shows cells with any of the below
// dates.
const date1 = new Date('June 1, 2022');
const date2 = new Date('June 2, 2022');
const date3 = new Date('June 3, 2022');
const criteria = SpreadsheetApp.newFilterCriteria()
                     .whenDateEqualToAny([date1, date2, date3])
                     .build();
dataSheet.addFilter('date', criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dates` | `Date[]` | The dates to show. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenDateNotEqualTo(date)

Sets the filter criteria to show cells that aren't equal to the specified date.

You can only use this criteria with data connected to a database. For example, use this criteria with filters on a `DataSource` sheet, a sheet that's connected to a database, or a `DataSourcePivotTable`, a pivot table created from a `DataSource` sheet.

The data type of the column you're filtering by must be a date.

```
// Gets a pivot table that's connected to a database.
const ss =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Pivot Table Sheet');
const dataPivotTable = ss.getDataSourcePivotTables()[0];
// Creates criteria that only shows cells that don't equal June 16, 2022
// and sets it to the "date" column.
const date = new Date('June 16, 2022');
const criteria =
    SpreadsheetApp.newFilterCriteria().whenDateNotEqualTo(date).build();
dataPivotTable.addFilter('date', criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | The date to hide. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenDateNotEqualToAny(dates)

Sets the filter criteria to show cells with dates that aren't equal to any of the specified dates.

You can only use this criteria with data connected to a database. For example, use this criteria with filters on a `DataSource` sheet, a sheet that's connected to a database, or a `DataSourcePivotTable`, a pivot table created from a `DataSource` sheet.

```
// Gets the sheet that's connected to a database.
const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data Sheet');
const dataSheet = ss.asDataSourceSheet();
// Adds criteria to the "date" column that hides cells with any of the below
// dates.
const date1 = new Date('June 1, 2022');
const date2 = new Date('June 2, 2022');
const date3 = new Date('June 3, 2022');
const criteria = SpreadsheetApp.newFilterCriteria()
                     .whenDateNotEqualToAny([date1, date2, date3])
                     .build();
dataSheet.addFilter('date', criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dates` | `Date[]` | The dates to hide. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenFormulaSatisfied(formula)

Sets the filter criteria to show cells with a specified formula (such as `=B:B<C:C`) that evaluates to `true`.

You can only use this criteria to filter data that isn't connected to a database.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that shows the rows where the value in column B is less than
// the value in column C and sets it to column A.
const formula = '=B:B<C:C';
const criteria =
    SpreadsheetApp.newFilterCriteria().whenFormulaSatisfied(formula).build();
filter.setColumnFilterCriteria(1, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `formula` | `String` | A custom formula that evaluates to `true` if the input is valid. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenNumberBetween(start, end)

Sets the filter criteria to show cells with a number that falls between, or is either of, 2 specified numbers.

You can use this criteria with any type of filter. If you use this criteria with data that's connected to a database, the data type of the column you're filtering by must be a number. If the data isn't connected to a database, the data type of the column you're filtering by doesn't need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that only shows cells with numbers that fall between 1-25,
// inclusively, and sets it to column A.
const criteria =
    SpreadsheetApp.newFilterCriteria().whenNumberBetween(1, 25).build();
filter.setColumnFilterCriteria(1, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Number` | The lowest number to show. |
| `end` | `Number` | The highest number to show. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenNumberEqualTo(number)

Sets the filter criteria to show cells with a number that's equal to the specified number.

You can use this criteria with any type of filter. If you use this criteria with data that's connected to a database, the data type of the column you're filtering by must be a number. If the data isn't connected to a database, the data type of the column you're filtering by doesn't need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that only shows cells that are equal to 25 and sets it to
// column B.
const criteria =
    SpreadsheetApp.newFilterCriteria().whenNumberEqualTo(25).build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The number to show. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenNumberEqualToAny(numbers)

Sets the filter criteria to show cells with a number that's equal to any of the specified numbers.

You can only use this criteria with data connected to a database. For example, use this criteria with filters on a `DataSource` sheet, a sheet that's connected to a database, or a `DataSourcePivotTable`, a pivot table created from a `DataSource` sheet.

```
// Gets the sheet that's connected to a database.
const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data Sheet');
const dataSheet = ss.asDataSourceSheet();
// Adds criteria to the "amount" column that only shows cells with the number
// 10, 20, or 30.
const criteria = SpreadsheetApp.newFilterCriteria()
                     .whenNumberEqualToAny([10, 20, 30])
                     .build();
dataSheet.addFilter('amount', criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `numbers` | `Number[]` | The numbers to show. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenNumberGreaterThan(number)

Sets the filter criteria to show cells with a number greater than the specified number

You can use this criteria with any type of filter. If you use this criteria with data that's connected to a database, the data type of the column you're filtering by must be a number. If the data isn't connected to a database, the data type of the column you're filtering by doesn't need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that shows cells greater than 10 and sets it to column B.
const criteria =
    SpreadsheetApp.newFilterCriteria().whenNumberGreaterThan(10).build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The highest number to hide. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenNumberGreaterThanOrEqualTo(number)

Sets the filter criteria to show cells with a number greater than or equal to the specified number.

You can use this criteria with any type of filter. If you use this criteria with data that's connected to a database, the data type of the column you're filtering by must be a number. If the data isn't connected to a database, the data type of the column you're filtering by doesn't need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that shows cells greater than or equal to 10 and sets it to
// column B.
const criteria = SpreadsheetApp.newFilterCriteria()
                     .whenNumberGreaterThanOrEqualTo(10)
                     .build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The lowest number to show. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenNumberLessThan(number)

Sets the filter criteria to show cells with a number that's less than the specified number.

You can use this criteria with any type of filter. If you use this criteria with data that's connected to a database, the data type of the column you're filtering by must be a number. If the data isn't connected to a database, the data type of the column you're filtering by doesn't need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that shows cells less than 10 and sets it to column B.
const criteria =
    SpreadsheetApp.newFilterCriteria().whenNumberLessThan(10).build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The lowest number to hide. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenNumberLessThanOrEqualTo(number)

Sets the filter criteria to show cells with a number less than or equal to the specified number.

You can use this criteria with any type of filter. If you use this criteria with data that's connected to a database, the data type of the column you're filtering by must be a number. If the data isn't connected to a database, the data type of the column you're filtering by doesn't need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that shows cells less than or equal to 10 and sets it to
// column B.
const criteria =
    SpreadsheetApp.newFilterCriteria().whenNumberLessThanOrEqualTo(10).build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The highest number to show. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenNumberNotBetween(start, end)

Sets the filter criteria to show cells with a number doesn't fall between, and is neither of, 2 specified numbers.

You can use this criteria with any type of filter. If you use this criteria with data that's connected to a database, the data type of the column you're filtering by must be a number. If the data isn't connected to a database, the data type of the column you're filtering by doesn't need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that hides cells with numbers that fall between 1-25,
// inclusively, and sets it to column B.
const criteria =
    SpreadsheetApp.newFilterCriteria().whenNumberNotBetween(1, 25).build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Number` | The lowest number hide. |
| `end` | `Number` | The highest number to hide. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenNumberNotEqualTo(number)

Sets the filter criteria to show cells with a number that isn't equal to the specified number.

You can use this criteria with any type of filter. If you use this criteria with data that's connected to a database, the data type of the column you're filtering by must be a number. If the data isn't connected to a database, the data type of the column you're filtering by doesn't need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that hides cells that are equal to 25 and sets it to column
// B.
const criteria =
    SpreadsheetApp.newFilterCriteria().whenNumberNotEqualTo(25).build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The number to hide. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenNumberNotEqualToAny(numbers)

Sets the filter criteria to show cells with a number that isn't equal to any of the specified numbers.

You can only use this criteria with data connected to a database. For example, use this criteria with filters on a `DataSource` sheet, a sheet that's connected to a database, or a `DataSourcePivotTable`, a pivot table created from a `DataSource` sheet.

```
// Gets the sheet that's connected to a database.
const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data Sheet');
const dataSheet = ss.asDataSourceSheet();
// Adds criteria to the "amount" column that hides cells with the number 10, 20,
// or 30.
const criteria = SpreadsheetApp.newFilterCriteria()
                     .whenNumberNotEqualToAny([10, 20, 30])
                     .build();
dataSheet.addFilter('amount', criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `numbers` | `Number[]` | The numbers to hide. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenTextContains(text)

Sets the filter criteria to show cells with text that contains the specified text. The text isn't case-sensitive.

You can use this criteria with any type of filter.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that shows cells that contain "Northwest" and sets it to
// column B.
const criteria =
    SpreadsheetApp.newFilterCriteria().whenTextContains('Northwest').build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text that the cell must contain. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenTextDoesNotContain(text)

Sets the filter criteria to show cells with text that doesn't contain the specified text. The text isn't case-sensitive.

You can use this criteria with any type of filter.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that hides cells that contain "Northwest" and sets it to
// column B.
const criteria = SpreadsheetApp.newFilterCriteria()
                     .whenTextDoesNotContain('Northwest')
                     .build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text that the cell must not contain. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenTextEndsWith(text)

Sets the filter criteria to show cells with text that ends with the specified text. The text isn't case-sensitive.

You can use this criteria with any type of filter.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that shows cells with text that ends with "est" and sets it
// to column B.
const criteria =
    SpreadsheetApp.newFilterCriteria().whenTextEndsWith('est').build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | Text that the end of the cell's text must contain. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenTextEqualTo(text)

Sets the filter criteria to show cells with text that's equal to the specified text. The text isn't case-sensitive.

You can use this criteria with any type of filter.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that shows cells with text that equals "hello" and sets it
// to column B.
const criteria =
    SpreadsheetApp.newFilterCriteria().whenTextEqualTo('hello').build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text that the cell's text must equal. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenTextEqualToAny(texts)

Sets the filter criteria to show cells with text that's equal to any of the specified text values. The text isn't case-sensitive.

You can only use this criteria with data connected to a database. For example, use this criteria with filters on a `DataSource` sheet, a sheet that's connected to a database, or a `DataSourcePivotTable`, a pivot table created from a `DataSource` sheet.

```
// Gets the sheet that's connected to a database.
const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data Sheet');
const dataSheet = ss.asDataSourceSheet();
// Adds criteria to the "category" column that shows cells with the text "tech"
// or "business."
const criteria = SpreadsheetApp.newFilterCriteria()
                     .whenTextEqualToAny(['tech', 'business'])
                     .build();
dataSheet.addFilter('category', criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `texts` | `String[]` | The text values that a cell must equal. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenTextNotEqualTo(text)

Sets the filter criteria to show cells with text that isn't equal to the specified text. The text isn't case-sensitive.

You can only use this criteria with data connected to a database. For example, use this criteria with filters on a `DataSource` sheet, a sheet that's connected to a database, or a `DataSourcePivotTable`, a pivot table created from a `DataSource` sheet.

```
// Gets the sheet that's connected to a database.
const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data Sheet');
const dataSheet = ss.asDataSourceSheet();
// Adds criteria to the "category" column that hides cells with text equal to
// "tech."
const criteria =
    SpreadsheetApp.newFilterCriteria().whenTextNotEqualTo('tech').build();
dataSheet.addFilter('category', criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text that the cell's text can't equal. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenTextNotEqualToAny(texts)

Sets the filter criteria to show cells with text that isn't equal to any of the specified values. The text isn't case-sensitive.

You can only use this criteria with data connected to a database. For example, use this criteria with filters on a `DataSource` sheet, a sheet that's connected to a database, or a `DataSourcePivotTable`, a pivot table created from a `DataSource` sheet.

```
// Gets the sheet that's connected to a database.
const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data Sheet');
const dataSheet = ss.asDataSourceSheet();
// Adds criteria to the "category" column that hides cells with the text "tech"
// or "business."
const criteria = SpreadsheetApp.newFilterCriteria()
                     .whenTextNotEqualToAny(['tech', 'business'])
                     .build();
dataSheet.addFilter('category', criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `texts` | `String[]` | The text values that a cell can't equal. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### whenTextStartsWith(text)

Sets the filter criteria to show cells with text that starts with the specified text. The text isn't case-sensitive.

You can use this criteria with any type of filter.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Creates criteria that shows cells with text that starts with "pre" and sets
// it to column B.
const criteria =
    SpreadsheetApp.newFilterCriteria().whenTextStartsWith('pre').build();
filter.setColumnFilterCriteria(2, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | Text that the start of the cell's text must contain. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.

---

### withCriteria(criteria, args)

Sets the filter criteria to a boolean condition defined by `BooleanCriteria` values, such as `CELL_EMPTY` or `NUMBER_GREATER_THAN`. To copy the boolean condition from existing criteria, define the parameters for this method using `getCriteriaType()` and `getCriteriaValues()` on an existing criteria.

You can use this criteria with any type of filter, but some `BooleanCriteria` aren't applicable for all filters.

```
// Builds a filter criteria that is based on existing boolean conditions from
// another criteria. Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
// Gets the existing boolean conditions applied to Column B and adds criteria to
// column C that has the same boolean conditions and additional criteria that
// hides the value, "Northwest."
const filterCriteria = filter.getColumnFilterCriteria(2);
const criteria = SpreadsheetApp.newFilterCriteria()
                     .withCriteria(
                         filterCriteria.getCriteriaType(),
                         filterCriteria.getCriteriaValues(),
                         )
                     .setHiddenValues(['Northwest'])
                     .build();
filter.setColumnFilterCriteria(3, criteria);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `criteria` | `BooleanCriteria` | The type of boolean criteria. |
| `args` | `Object[]` | An array of arguments appropriate to the criteria type; the number of arguments and their type match the corresponding `when...()` methods above. |

#### Return

`FilterCriteriaBuilder` — This builder, for chaining.
