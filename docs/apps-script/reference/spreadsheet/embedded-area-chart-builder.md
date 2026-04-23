---
source: https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder
root: apps-script
fetched_at: 2026-04-23T15:21:32.387Z
---

# Class EmbeddedAreaChartBuilder

## Page Summary

- EmbeddedAreaChartBuilder is a builder specifically for area charts, providing methods to configure various aspects of the chart.
- You can add or remove data ranges, set the chart's position, and build the final EmbeddedChart object using this builder.
- The builder allows customization of chart appearance, including background color, line colors, legend position and style, point style, and axis titles and text styles.
- You can change the chart type to other embedded chart types such as bar, column, line, pie, scatter, table, combo, or histogram charts using specific methods.
- Advanced options can be set using the `setOption(option, value)` method, and you can also control hidden dimensions and data merging strategies.

Builder for area charts. For more details, see the Gviz [documentation](http://code.google.com/apis/visualization/documentation/gallery/areachart.html).

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

### reverseCategories()

Reverses the drawing of series in the domain axis. For vertical-range charts (such as line, area or column charts), this means the horizontal axis is drawn from right to left. For horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to bottom. For pie charts, this means the slices are drawn counterclockwise.

```
// Creates a pie chart builder and sets drawing of the slices in a
// counter-clockwise manner.
const builder = Charts.newPieChart();
builder.reverseCategories();
```

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

---

### setBackgroundColor(cssValue)

Sets the background color for the chart.

```
// Creates a line chart builder and sets the background color to gray
const builder = Charts.newLineChart();
builder.setBackgroundColor('gray');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cssValue` | `String` | The CSS value for the color (such as `"blue"` or `"#00f"`). |

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

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

### setColors(cssValues)

Sets the colors for the lines in the chart.

```
// Creates a line chart builder and sets the first two lines to be drawn in
// green and red, respectively.
const builder = Charts.newLineChart();
builder.setColors(['green', 'red']);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cssValues` | `String[]` | An array of color CSS values, such as `["red", "#acf"]`. The nth element in the array represents the color of the nth line in the chart. |

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

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

### setLegendPosition(position)

Sets the position of the legend with respect to the chart. By default, there is no legend.

```
// Creates a line chart builder and sets the legend position to right.
const builder = Charts.newLineChart();
builder.setLegendPosition(Charts.Position.RIGHT);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `position` | `Position` | The position of the legend. |

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

---

### setLegendTextStyle(textStyle)

Sets the text style of the chart legend.

```
// Creates a line chart builder and sets it up for a  blue, 26-point legend.
const textStyleBuilder =
    Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
const style = textStyleBuilder.build();
const builder = Charts.newLineChart();
builder.setLegendTextStyle(style);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `textStyle` | `TextStyle` | The text style to use for the chart legend. |

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

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

### setPointStyle(style)

Sets the style for points in the line. By default, points have no particular styles, and only the line is visible.

```
// Creates a line chart builder and sets large point style.
const builder = Charts.newLineChart();
builder.setPointStyle(Charts.PointStyle.LARGE);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `style` | `PointStyle` | The style to use for points in the line. |

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

#### See also

- `PointStyle`

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

### setRange(start, end)

Sets the range for the chart.

If any data points fall outside the range, the range is expanded to include those data points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Number` | The value for the lowest grid line of the range axis. |
| `end` | `Number` | The value for the highest grid line of the range axis. |

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

---

### setStacked()

Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default, there is no stacking.

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

---

### setTitle(chartTitle)

Sets the title of the chart. The title is displayed centered above the chart.

```
// Creates a line chart builder and title to 'My Line Chart'.
const builder = Charts.newLineChart();
builder.setTitle('My Line Chart');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `chartTitle` | `String` | the chart title. |

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

---

### setTitleTextStyle(textStyle)

Sets the text style of the chart title.

```
// Creates a line chart builder and sets it up for a  blue, 26-point title.
const textStyleBuilder =
    Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
const style = textStyleBuilder.build();
const builder = Charts.newLineChart();
builder.setTitleTextStyle(style);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `textStyle` | `TextStyle` | The text style to use for the chart title. You can create a `TextStyleBuilder` object by calling `Charts.newTextStyle()`. |

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

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

### setXAxisTextStyle(textStyle)

Sets the horizontal axis text style.

```
// Creates a line chart builder and sets the X-axis text style to blue, 18-point
// font.
const textStyle =
    Charts.newTextStyle().setColor('blue').setFontSize(18).build();
const builder = Charts.newLineChart();
builder.setXAxisTextStyle(textStyle);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `textStyle` | `TextStyle` | The text style to use for the horizontal axis title. You can create a `TextStyleBuilder` object by calling `Charts.newTextStyle()`. |

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

---

### setXAxisTitle(title)

Adds a title to the horizontal axis. The title is centered and appears below the axis value labels.

```
// Creates a line chart builder and sets the X-axis title.
const builder = Charts.newLineChart();
builder.setTitle('X-axis Title');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title for the X-axis. |

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

---

### setXAxisTitleTextStyle(textStyle)

Sets the horizontal axis title text style.

```
// Creates a line chart builder and sets the X-axis title text style to blue,
// 18-point font.
const textStyle =
    Charts.newTextStyle().setColor('blue').setFontSize(18).build();
const builder = Charts.newLineChart();
builder.setXAxisTitleTextStyle(textStyle);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `textStyle` | `TextStyle` | The text style to use for the horizontal axis title. You can create a `TextStyleBuilder` object by calling `Charts.newTextStyle()`. |

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

---

### setYAxisTextStyle(textStyle)

Sets the vertical axis text style.

```
// Creates a line chart builder and sets the Y-axis text style to blue, 18-point
// font.
const textStyle =
    Charts.newTextStyle().setColor('blue').setFontSize(18).build();
const builder = Charts.newLineChart();
builder.setYAxisTextStyle(textStyle);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `textStyle` | `TextStyle` | The text style to use for the horizontal axis title. You can create a `TextStyleBuilder` object by calling `Charts.newTextStyle()`. |

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

---

### setYAxisTitle(title)

Adds a title to the vertical axis. The title is centered and appears to the left of the value labels.

```
// Creates a line chart builder and sets the Y-axis title.
const builder = Charts.newLineChart();
builder.setYAxisTitle('Y-axis Title');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title for the Y-axis. |

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

---

### setYAxisTitleTextStyle(textStyle)

Sets the vertical axis title text style.

```
// Creates a line chart builder and sets the Y-axis title text style to blue,
// 18-point font.
const textStyle =
    Charts.newTextStyle().setColor('blue').setFontSize(18).build();
const builder = Charts.newLineChart();
builder.setYAxisTitleTextStyle(textStyle);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `textStyle` | `TextStyle` | The text style to use for the horizontal axis title. You can create a `TextStyleBuilder` object by calling `Charts.newTextStyle()`. |

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.

---

### useLogScale()

Makes the range axis into a logarithmic scale (requires all values to be positive). The range axis are the vertical axis for vertical charts (such as line, area, or column) and the horizontal axis for horizontal charts (such as bar).

#### Return

`EmbeddedAreaChartBuilder` — This builder, useful for chaining.
