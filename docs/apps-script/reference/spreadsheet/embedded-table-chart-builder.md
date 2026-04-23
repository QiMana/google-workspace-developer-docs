---
source: https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder
root: apps-script
fetched_at: 2026-04-23T15:21:37.989Z
---

# Class EmbeddedTableChartBuilder

## Page Summary

- EmbeddedTableChartBuilder is a builder specifically for table charts, offering various methods to configure their appearance and behavior.
- You can add or remove data ranges, set the chart type to other embedded chart types, and build the chart with the `build()` method.
- Key table-specific options include enabling paging and sorting, setting the first row number, enabling right-to-left support, showing row numbers, and using alternating row styles.
- Additional methods allow setting advanced chart options, the position of the chart on the sheet, the merge strategy for multiple ranges, and the strategy for hidden dimensions.
- You can also retrieve information about the chart's current type, container, and data ranges.

Builder for table charts. For more details, see the Gviz [documentation](http://developers.google.com/chart/interactive/docs/gallery/table.html).

## Detailed documentation

### addRange(range)

Adds a range to the chart this builder modifies. Does not add the range if it has already been added to the chart.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const chart = sheet.newChart()
                  .setChartType(Charts.ChartType.BAR)
                  .addRange(sheet.getRange('A1:B8'))
                  .setPosition(5, 5, 0, 0)
                  .build();

sheet.insertChart(chart);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `range` | `Range` | The range to add. |

#### Return

`EmbeddedChartBuilder` — This builder, for chaining.

---

### asAreaChart()

Sets the chart type to AreaChart and returns an `EmbeddedAreaChartBuilder`.

#### Return

`EmbeddedAreaChartBuilder` — A builder for an area chart.

---

### asBarChart()

Sets the chart type to BarChart and returns an `EmbeddedBarChartBuilder`.

#### Return

`EmbeddedBarChartBuilder` — A builder for a bar chart.

---

### asColumnChart()

Sets the chart type to ColumnChart and returns an `EmbeddedColumnChartBuilder`.

#### Return

`EmbeddedColumnChartBuilder` — A builder for a column chart.

---

### asComboChart()

Sets the chart type to ComboChart and returns an `EmbeddedComboChartBuilder`.

#### Return

`EmbeddedComboChartBuilder` — A builder for a combo chart.

---

### asHistogramChart()

Sets the chart type to HistogramChart and returns an `EmbeddedHistogramChartBuilder`.

#### Return

`EmbeddedHistogramChartBuilder` — A builder for a histogram chart.

---

### asLineChart()

Sets the chart type to LineChart and returns an `EmbeddedLineChartBuilder`.

#### Return

`EmbeddedLineChartBuilder` — A builder for a line chart.

---

### asPieChart()

Sets the chart type to PieChart and returns an `EmbeddedPieChartBuilder`.

#### Return

`EmbeddedPieChartBuilder` — A builder for a pie chart.

---

### asScatterChart()

Sets the chart type to ScatterChart and returns an `EmbeddedScatterChartBuilder`.

#### Return

`EmbeddedScatterChartBuilder` — A builder for a scatter chart.

---

### asTableChart()

Sets the chart type to TableChart and returns an `EmbeddedTableChartBuilder`.

#### Return

`EmbeddedTableChartBuilder` — A builder for a table chart.

---

### build()

Builds the chart to reflect all changes made to it.

This method does not automatically draw the chart on top of the spreadsheet. A new chart must be inserted via `sheet.insertChart(chart)`, and an existing chart should be updated via `sheet.updateChart(chart)`.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:B5');
const chart = sheet.newChart()
                  .setChartType(Charts.ChartType.BAR)
                  .addRange(range)
                  .setPosition(5, 5, 0, 0)
                  .build();

sheet.insertChart(chart);
```

#### Return

`EmbeddedChart` — The created chart, which must still be added to the spreadsheet.

---

### clearRanges()

Removes all ranges from the chart this builder modifies.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This code updates the chart to use only the new ranges while preserving the
// existing formatting of the chart.
const chart = sheet.getCharts()[0];
const newChart = chart.modify()
                     .clearRanges()
                     .addRange(sheet.getRange('A1:A5'))
                     .addRange(sheet.getRange('B1:B5'))
                     .build();
sheet.updateChart(newChart);
```

#### Return

`EmbeddedChartBuilder` — This builder, for chaining.

---

### enablePaging(enablePaging)

Sets whether to enable paging through the data.

The default behavior is paging disabled. If paging is enabled the default page size is 10.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `enablePaging` | `Boolean` | `true` if paging should be enabled, `false` otherwise. |

#### Return

`EmbeddedTableChartBuilder` — This builder, useful for chaining.

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

`EmbeddedTableChartBuilder` — This builder, useful for chaining.

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

`EmbeddedTableChartBuilder` — This builder, useful for chaining.

---

### enableRtlTable(rtlEnabled)

Adds basic support for right-to-left languages (such as Arabic or Hebrew) by reversing the column order of the table, so that column zero is the right-most column, and the last column is the left-most column.

This does not affect the column index in the underlying data, only the order of display. Full bi-directional (BiDi) language display is not supported by the table visualization even with this option. This option is ignored if you enable paging (using the page option), or if the table has scroll bars because you have specified height and width options smaller than the required table size. The default behavior is RTL support disabled.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rtlEnabled` | `Boolean` | `true` if right-to-left support should be enabled, `false` otherwise. |

#### Return

`EmbeddedTableChartBuilder` — This builder, useful for chaining.

---

### enableSorting(enableSorting)

Sets whether to sort columns when the user clicks a column heading.

If sorting is enabled, when users click on the column header the rows are automatically sorted. The default behavior is sorting enabled.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `enableSorting` | `Boolean` | `true` to enable sorting by clicking on column headers, `false` otherwise. |

#### Return

`EmbeddedTableChartBuilder` — This builder, useful for chaining.

---

### getChartType()

Returns the current chart type.

#### Return

`ChartType` — The chart type.

---

### getContainer()

Return the chart `ContainerInfo`, which encapsulates where the chart appears on the sheet.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const chartBuilder = sheet.newChart()
                         .setChartType(Charts.ChartType.BAR)
                         .addRange(sheet.getRange('A1:B8'))
                         .setPosition(5, 5, 0, 0);

// This method returns the exact same data as Chart#getContainerInfo()
const containerInfo = chartBuilder.getContainer();

// Logs the values used in setPosition()
Logger.log(
    'Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s',
    containerInfo.getAnchorColumn(),
    containerInfo.getAnchorRow(),
    containerInfo.getOffsetX(),
    containerInfo.getOffsetY(),
);
```

#### Return

`ContainerInfo` — An object containing the chart container's position.

---

### getRanges()

Returns a copy of the list of ranges currently providing data for this chart. Use `addRange(range)` and `removeRange(range)` to modify this list.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const chartBuilder = sheet.newChart()
                         .setChartType(Charts.ChartType.BAR)
                         .addRange(sheet.getRange('A1:B8'))
                         .setPosition(5, 5, 0, 0);

const ranges = chartBuilder.getRanges();

// There's only one range as a data source for this chart,
// so this logs "A1:B8"
for (const i in ranges) {
  const range = ranges[i];
  Logger.log(range.getA1Notation());
}
```

#### Return

`Range[]` — An array of ranges that serve as the chart to be built's data source.

---

### removeRange(range)

Removes the specified range from the chart this builder modifies. Does not throw an error if the range is not in this chart.

The range removed must match up with a range added via `addRange(range)`; otherwise no change is made to the chart. This method cannot be used to partially remove values from a range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const firstRange = sheet.getRange('A1:B5');
const secondRange = sheet.getRange('A6:B8');

const chartBuilder = sheet.newChart()
                         .setChartType(Charts.ChartType.BAR)
                         .addRange(firstRange)
                         // This range renders in a different color
                         .addRange(secondRange)
                         .setPosition(5, 5, 0, 0);

// Note that you can use either of these two formats, but the range
// MUST match up with a range that was added via addRange(), or it
// is not removed, and does not throw an exception
chartBuilder.removeRange(firstRange);
chartBuilder.removeRange(sheet.getRange('A6:B8'));

const chart = chartBuilder.build();

sheet.insertChart(chart);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `range` | `Range` | The range to remove. |

#### Return

`EmbeddedChartBuilder` — This builder, for chaining.

---

### setChartType(type)

Changes the type of chart. Not all embedded chart types are currently supported. See `ChartType`.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:B5');
const chart = sheet.newChart()
                  .setChartType(Charts.ChartType.BAR)
                  .addRange(range)
                  .setPosition(5, 5, 0, 0)
                  .build();

sheet.insertChart(chart);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `ChartType` | The type to change this chart into. |

#### Return

`EmbeddedChartBuilder` — This builder, for chaining.

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

`EmbeddedTableChartBuilder` — This builder, useful for chaining.

---

### setHiddenDimensionStrategy(strategy)

Sets the strategy to use for hidden rows and columns. Defaults to `IGNORE_ROWS`.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:B5');
const chart = sheet.newChart()
                  .setChartType(Charts.ChartType.BAR)
                  .addRange(range)
                  .setHiddenDimensionStrategy(
                      Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS,
                      )
                  .setPosition(5, 5, 0, 0)
                  .build();

sheet.insertChart(chart);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `strategy` | `ChartHiddenDimensionStrategy` | The strategy to use for hidden rows and columns. |

#### Return

`EmbeddedChartBuilder` — This builder, for chaining.

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

`EmbeddedTableChartBuilder` — This builder, useful for chaining.

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

`EmbeddedTableChartBuilder` — This builder, useful for chaining.

---

### setMergeStrategy(mergeStrategy)

Sets the merge strategy to use when more than one range exists. If `MERGE_ROWS`, rows are merged; if `MERGE_COLUMNS`, columns are merged. Defaults to `MERGE_COLUMNS`.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:B10');
const range2 = sheet.getRange('C:C10');
const chart = sheet.newChart()
                  .setChartType(Charts.ChartType.BAR)
                  .addRange(range)
                  .addRange(range2)
                  .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
                  .setPosition(5, 5, 0, 0)
                  .build();

sheet.insertChart(chart);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `mergeStrategy` | `ChartMergeStrategy` | The merge strategy to use. |

#### Return

`EmbeddedChartBuilder` — This builder, for chaining.

---

### setNumHeaders(headers)

Sets the number of rows or columns of the range that should be treated as headers.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:B5');
const chart = sheet.newChart()
                  .setChartType(Charts.ChartType.BAR)
                  .addRange(range)
                  .setNumHeaders(1)
                  .setPosition(5, 5, 0, 0)
                  .build();

sheet.insertChart(chart);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `headers` | `Integer` | The number of rows or columns to treat as headers. Negative values cause headers to be auto-detected. |

#### Return

`EmbeddedChartBuilder` — This builder, for chaining.

---

### setOption(option, value)

Sets advanced options for this chart. To view a list of the available options, see [Chart configuration options](https://developers.google.com/apps-script/chart-configuration-options).

This method doesn't validate the option you specify is valid for this chart type nor if the value is of the correct format/structure.

This example shows how to change the title and set a legend.

```
const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
const sheet = spreadsheet.getSheets()[0];
const chart = sheet.newChart()
 .setOption('title', 'Earnings projections')
 .setOption('legend', {
   position: 'top',
   textStyle: { color: 'blue', fontSize: 16 },
 }).build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `option` | `String` | The name of the option. |
| `value` | `Object` | The value of the option. |

#### Return

`EmbeddedChartBuilder` — This builder, for chaining.

---

### setPosition(anchorRowPos, anchorColPos, offsetX, offsetY)

Sets the position, changing where the chart appears on the sheet. `anchorRowPos` and `anchorColPos` are 1-indexed.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:B5');
const chart = sheet.newChart()
                  .setChartType(Charts.ChartType.BAR)
                  .addRange(range)
                  .setPosition(5, 5, 0, 0)
                  .build();

sheet.insertChart(chart);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `anchorRowPos` | `Integer` | The chart's top side is anchored in this row. |
| `anchorColPos` | `Integer` | The chart's left side is anchored in this column. |
| `offsetX` | `Integer` | The chart's upper right-hand corner is offset by this many pixels. |
| `offsetY` | `Integer` | The chart's lower left-hand corner is offset by this many pixels. |

#### Return

`EmbeddedChartBuilder` — This builder, for chaining.

---

### setTransposeRowsAndColumns(transpose)

Sets whether the chart's rows and columns are transposed. If set to `true`, the rows and columns are switched. Defaults to `false`.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:B5');
const chart = sheet.newChart()
                  .setChartType(Charts.ChartType.BAR)
                  .addRange(range)
                  .setTransposeRowsAndColumns(true)
                  .setPosition(5, 5, 0, 0)
                  .build();

sheet.insertChart(chart);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `transpose` | `Boolean` | If `true`, the rows and columns used to construct the chart are transposed. |

#### Return

`EmbeddedChartBuilder` — This builder, for chaining.

---

### showRowNumberColumn(showRowNumber)

Sets whether to show the row number as the first column of the table.

The default behavior is not showing row numbers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `showRowNumber` | `Boolean` | `true` if the first column of the table should show the row number, `false` otherwise. |

#### Return

`EmbeddedTableChartBuilder` — This builder, useful for chaining.

---

### useAlternatingRowStyle(alternate)

Sets whether alternating color style is assigned to odd and even rows of a table chart.

The default behavior is the rows having alternating color style.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alternate` | `Boolean` | `true` if color styles should be alternating, `false` otherwise. |

#### Return

`EmbeddedTableChartBuilder` — This builder, useful for chaining.
