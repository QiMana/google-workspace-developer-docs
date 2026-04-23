---
source: https://developers.google.com/apps-script/reference/charts/table-chart-builder
root: apps-script
fetched_at: 2026-04-23T15:19:20.335Z
---

# Class TableChartBuilder

## Page Summary

- TableChartBuilder is a tool for building table charts.
- Data for the table chart can be imported from an external source like a Google spreadsheet.
- You can configure various aspects of the table chart including dimensions, paging, sorting, and data source.
- The `build()` method is used to create the final Chart object from the builder.

A builder for table charts. For more details, see the [Google Charts documentation](https://developers.google.com/chart/interactive/docs/gallery/table).

Here is an example that shows how to build a table chart. The data is [imported from a Google spreadsheet](https://developers.google.com/chart/interactive/docs/spreadsheets#Google_Spreadsheets_as_a_Data_Source).

```
// Get sample data from a spreadsheet.
const dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?range=A1%3AF' +
    '&key=0Aq4s9w_HxMs7dHpfX05JdmVSb1FpT21sbXd4NVE3UEE&gid=4&headers=-1';

const chartBuilder = Charts.newTableChart()
                         .setDimensions(600, 500)
                         .enablePaging(20)
                         .setDataSourceUrl(dataSourceUrl);

const chart = chartBuilder.build();
```

## Detailed documentation

### build()

Builds the chart.

#### Return

`Chart` — A Chart object, which can be embedded into documents, UI elements, or used as a static image.

---

### enablePaging(enablePaging)

Sets whether to enable paging through the data.

The default behavior is paging disabled. If paging is enabled the default page size is 10.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `enablePaging` | `Boolean` | `true` if paging should be enabled, `false` otherwise. |

#### Return

`TableChartBuilder` — This builder, useful for chaining.

---

### enablePaging(pageSize)

Enables paging and sets the number of rows in each page.

The default page size is 10.

```
// Creates a table chart builder and enables paging with page size of 5.
const builder = Charts.newTableChart();
builder.enablePaging(5);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pageSize` | `Integer` | The number of rows in each page of the table. |

#### Return

`TableChartBuilder` — This builder, useful for chaining.

---

### enablePaging(pageSize, startPage)

Enables paging, sets the number of rows in each page and the first table page to display (page numbers are zero based).

The default page size is 10, and the default start page is 0.

```
// Creates a table chart builder and enables paging with page size of 5 and
// displays page 2 first.
const builder = Charts.newTableChart();
builder.enablePaging(5, 2);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pageSize` | `Integer` | The number of rows in each page of the table. |
| `startPage` | `Integer` | The first table page to display (page numbers are zero-based). |

#### Return

`TableChartBuilder` — This builder, useful for chaining.

---

### enableRtlTable(rtlEnabled)

Adds basic support for right-to-left languages (such as Arabic or Hebrew) by reversing the column order of the table, so that column zero is the right-most column, and the last column is the left-most column.

This does not affect the column index in the underlying data, only the order of display. Full bi-directional (BiDi) language display is not supported by the table visualization even with this option. This option is ignored if you enable paging (using the page option), or if the table has scroll bars because you have specified height and width options smaller than the required table size. The default behavior is RTL support disabled.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rtlEnabled` | `Boolean` | `true` if right-to-left support should be enabled, `false` otherwise. |

#### Return

`TableChartBuilder` — This builder, useful for chaining.

---

### enableSorting(enableSorting)

Sets whether to sort columns when the user clicks a column heading.

If sorting is enabled, when users click on the column header the rows are automatically sorted. The default behavior is sorting enabled.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `enableSorting` | `Boolean` | `true` to enable sorting by clicking on column headers, `false` otherwise. |

#### Return

`TableChartBuilder` — This builder, useful for chaining.

---

### setDataSourceUrl(url)

Sets the data source URL that is used to pull data in from an external source, such as Google Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.

For more information about querying data sources, check out the [Google Charts documentation](https://developers.google.com/chart/interactive/docs/queries).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The data source URL, including any query parameters. |

#### Return

`TableChartBuilder` — This builder, useful for chaining.

---

### setDataTable(tableBuilder)

Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method for setting the data table without needing to call `build()`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `tableBuilder` | `DataTableBuilder` | A data table builder. A new data table is created instantly as part of this call, so any further updates to the builder won't be reflected in the chart. |

#### Return

`TableChartBuilder` — This builder, useful for chaining.

---

### setDataTable(table)

Sets the data table which contains the lines for the chart, as well as the X-axis labels. The first column should be a string, and contain the horizontal axis labels. Any number of columns can follow, all must be numeric. Each column is displayed as a separate line.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `table` | `DataTableSource` | The data table to use for the chart. |

#### Return

`TableChartBuilder` — This builder, useful for chaining.

---

### setDataViewDefinition(dataViewDefinition)

Sets the data view definition to use for the chart.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dataViewDefinition` | `DataViewDefinition` | A data view definition object that defines the view that should be derived from the given data source for the chart drawing. |

#### Return

`TableChartBuilder` — This builder, useful for chaining.

---

### setDimensions(width, height)

Sets the dimensions for the chart.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | `Integer` | The width of the chart, in pixels. |
| `height` | `Integer` | The height of the chart, in pixels. |

#### Return

`TableChartBuilder` — This builder, useful for chaining.

---

### setFirstRowNumber(number)

Sets the row number for the first row in the data table.

The default row number of the first row is 1.

```
// Creates a table chart builder and sets the first row to be 2.
const builder = Charts.newTableChart();
builder.setFirstRowNumber(2);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Integer` | The row number for the first row in the data table. |

#### Return

`TableChartBuilder` — This builder, useful for chaining.

---

### setInitialSortingAscending(column)

Sets the index of the column according to which the table should be initially sorted (ascending).

The column os sorted in ascending order and is marked with a small arrow indicating that.

```
// Creates a table chart builder and sorts it by the second column (ascending).
const builder = Charts.newTableChart();
builder.setInitialSortingAscending(2);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The number of the column according to which the table should be initially sorted. |

#### Return

`TableChartBuilder` — This builder, useful for chaining.

---

### setInitialSortingDescending(column)

Sets the index of the column according to which the table should be initially sorted (descending).

The column os sorted in descending order and is marked with a a small arrow indicating that.

```
// Creates a table chart builder and sorts it by the second column (descending).
const builder = Charts.newTableChart();
builder.setInitialSortingDescending(2);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The number of the column according to which the table should be initially sorted. |

#### Return

`TableChartBuilder` — This builder, useful for chaining.

---

### setOption(option, value)

Sets advanced options for this chart. See [the available options for this chart](https://developers.google.com/chart/interactive/docs/gallery/table). This method has no effect if the given option is invalid.

```
// Build a table chart which renders HTML.
const builder = Charts.newTableChart();
builder.setOption('allowHtml', {@code true});
const chart = builder.build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `option` | `String` | The option to set. |
| `value` | `Object` | The value to set. |

#### Return

`TableChartBuilder` — This builder, useful for chaining.

---

### showRowNumberColumn(showRowNumber)

Sets whether to show the row number as the first column of the table.

The default behavior is not showing row numbers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `showRowNumber` | `Boolean` | `true` if the first column of the table should show the row number, `false` otherwise. |

#### Return

`TableChartBuilder` — This builder, useful for chaining.

---

### useAlternatingRowStyle(alternate)

Sets whether alternating color style is assigned to odd and even rows of a table chart.

The default behavior is the rows having alternating color style.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alternate` | `Boolean` | `true` if color styles should be alternating, `false` otherwise. |

#### Return

`TableChartBuilder` — This builder, useful for chaining.
