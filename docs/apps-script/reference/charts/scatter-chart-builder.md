---
source: https://developers.google.com/apps-script/reference/charts/scatter-chart-builder
root: apps-script
fetched_at: 2026-04-23T15:19:19.791Z
---

# Class ScatterChartBuilder

## Page Summary

- ScatterChartBuilder is used to create scatter charts.
- Data for the scatter chart can be imported from external sources like Google Spreadsheets using `setDataSourceUrl()`.
- You can customize various aspects of the chart using methods like `setTitle()`, `setXAxisTitle()`, `setYAxisTitle()`, and `setDimensions()`.
- The `build()` method is used to generate the final Chart object.

Builder for scatter charts. For more details, see the [Google Charts documentation](https://developers.google.com/chart/interactive/docs/gallery/scatterchart).

Here is an example that shows how to build a scatter chart. The data is [imported from a Google spreadsheet](https://developers.google.com/chart/interactive/docs/spreadsheets#Google_Spreadsheets_as_a_Data_Source).

```
// Get sample data from a spreadsheet.
const dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?range=C1%3AD' +
    '&key=0Aq4s9w_HxMs7dHpfX05JdmVSb1FpT21sbXd4NVE3UEE&gid=4&headers=-1';

const chartBuilder = Charts.newScatterChart()
                         .setTitle('Adjusted GDP & U.S. Population')
                         .setXAxisTitle('U.S. Population (millions)')
                         .setYAxisTitle('Adjusted GDP ($ billions)')
                         .setDimensions(600, 500)
                         .setLegendPosition(Charts.Position.NONE)
                         .setDataSourceUrl(dataSourceUrl);

const chart = chartBuilder.build();
```

## Detailed documentation

### build()

Builds the chart.

#### Return

`Chart` — A Chart object, which can be embedded into documents, UI elements, or used as a static image.

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

`ScatterChartBuilder` — This builder, useful for chaining.

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

`ScatterChartBuilder` — This builder, useful for chaining.

---

### setDataSourceUrl(url)

Sets the data source URL that is used to pull data in from an external source, such as Google Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.

For more information about querying data sources, check out the [Google Charts documentation](https://developers.google.com/chart/interactive/docs/queries).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The data source URL, including any query parameters. |

#### Return

`ScatterChartBuilder` — This builder, useful for chaining.

---

### setDataTable(tableBuilder)

Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method for setting the data table without needing to call `build()`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `tableBuilder` | `DataTableBuilder` | A data table builder. A new data table is created instantly as part of this call, so any further updates to the builder won't be reflected in the chart. |

#### Return

`ScatterChartBuilder` — This builder, useful for chaining.

---

### setDataTable(table)

Sets the data table which contains the lines for the chart, as well as the X-axis labels. The first column should be a string, and contain the horizontal axis labels. Any number of columns can follow, all must be numeric. Each column is displayed as a separate line.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `table` | `DataTableSource` | The data table to use for the chart. |

#### Return

`ScatterChartBuilder` — This builder, useful for chaining.

---

### setDataViewDefinition(dataViewDefinition)

Sets the data view definition to use for the chart.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dataViewDefinition` | `DataViewDefinition` | A data view definition object that defines the view that should be derived from the given data source for the chart drawing. |

#### Return

`ScatterChartBuilder` — This builder, useful for chaining.

---

### setDimensions(width, height)

Sets the dimensions for the chart.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | `Integer` | The width of the chart, in pixels. |
| `height` | `Integer` | The height of the chart, in pixels. |

#### Return

`ScatterChartBuilder` — This builder, useful for chaining.

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

`ScatterChartBuilder` — This builder, useful for chaining.

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

`ScatterChartBuilder` — This builder, useful for chaining.

---

### setOption(option, value)

Sets advanced options for this chart. See [the available options for this chart](https://developers.google.com/chart/interactive/docs/gallery/scatterchart). This method has no effect if the given option is invalid.

```
// Build a scatter chart with a 1-second animation duration.
const builder = Charts.newScatterChart();
builder.setOption('animation.duration', 1000);
const chart = builder.build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `option` | `String` | The option to set. |
| `value` | `Object` | The value to set. |

#### Return

`ScatterChartBuilder` — This builder, useful for chaining.

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

`ScatterChartBuilder` — This builder, useful for chaining.

#### See also

- `PointStyle`

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

`ScatterChartBuilder` — This builder, useful for chaining.

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

`ScatterChartBuilder` — This builder, useful for chaining.

---

### setXAxisLogScale()

Makes the horizontal axis into a logarithmic scale (requires all values to be positive).

#### Return

`ScatterChartBuilder` — This builder, useful for chaining.

---

### setXAxisRange(start, end)

Sets the range for the horizontal axis of the chart.

If any data points fall outside the range, the range is expanded to include those data points.

```
// Creates a scatter chart builder and sets the X-axis range to be 0 to 100.
const builder = Charts.newTableChart();
builder.setXAxisRange(0, 100);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Number` | The value for the lowest grid line of the horizontal axis. |
| `end` | `Number` | The value for the highest grid line of the horizontal axis. |

#### Return

`ScatterChartBuilder` — This builder, useful for chaining.

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

`ScatterChartBuilder` — This builder, useful for chaining.

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

`ScatterChartBuilder` — This builder, useful for chaining.

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

`ScatterChartBuilder` — This builder, useful for chaining.

---

### setYAxisLogScale()

Makes the vertical axis into a logarithmic scale (requires all values to be positive).

#### Return

`ScatterChartBuilder` — This builder, useful for chaining.

---

### setYAxisRange(start, end)

Sets the range for the vertical axis of the chart. If any data points fall outside the range, the range is expanded to include those data points.

```
// Creates a scatter chart builder and sets the Y-axis range to be 0 to 100.
const builder = Charts.newTableChart();
builder.setYAxisRange(0, 100);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Number` | The value for the lowest grid line of the vertical axis. |
| `end` | `Number` | The value for the highest grid line of the vertical axis. |

#### Return

`ScatterChartBuilder` — This builder, useful for chaining.

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

`ScatterChartBuilder` — This builder, useful for chaining.

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

`ScatterChartBuilder` — This builder, useful for chaining.

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

`ScatterChartBuilder` — This builder, useful for chaining.
