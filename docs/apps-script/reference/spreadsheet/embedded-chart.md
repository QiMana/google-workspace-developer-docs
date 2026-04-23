---
source: https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart
root: apps-script
fetched_at: 2026-04-23T15:21:39.477Z
---

# Class EmbeddedChart

## Page Summary

- The `EmbeddedChart` class represents a chart embedded in a spreadsheet and provides methods for accessing and modifying chart properties.
- You can modify an existing chart by getting it from the sheet, using the `modify()` method, making changes with the builder, and then updating the chart on the sheet.
- New charts can be created using a `chartBuilder` obtained from the sheet, setting properties like range and chart type, and then inserting the built chart into the sheet.
- Methods like `getChartId()`, `getContainerInfo()`, `getRanges()`, and `getOptions()` allow retrieval of various chart attributes.
- The `modify()` method returns an `EmbeddedChartBuilder` for making changes, and these changes must be saved using `sheet.updateChart()`.

Represents a chart that has been embedded into a spreadsheet.

This example shows how to modify an existing chart:

```
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A2:B8');
let chart = sheet.getCharts()[0];
chart = chart.modify()
            .addRange(range)
            .setOption('title', 'Updated!')
            .setOption('animation.duration', 500)
            .setPosition(2, 2, 0, 0)
            .build();
sheet.updateChart(chart);
```

This example shows how to create a new chart:

```
function newChart(range) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const chartBuilder = sheet.newChart();
  chartBuilder.addRange(range)
      .setChartType(Charts.ChartType.LINE)
      .setOption('title', 'My Line Chart!');
  sheet.insertChart(chartBuilder.build());
}
```

## Detailed documentation

### asDataSourceChart()

Casts to a data source chart instance if the chart is a data source chart, or `null` otherwise.

#### Return

`DataSourceChart|null` — The data source chart.

---

### getAs(contentType)

Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".

To view the daily quotas for conversions, see [Quotas for Google Services](../../guides/services/quotas.md). Newly created Google Workspace domains might be temporarily subject to stricter quotas.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `contentType` | `String` | The MIME type to convert to. For most blobs, `'application/pdf'` is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of `'image/bmp'`, `'image/gif'`, `'image/jpeg'`, or `'image/png'` are also valid. For a Google Docs document, `'text/markdown'` is also valid. |

#### Return

`Blob` — The data as a blob.

---

### getBlob()

Return the data inside this object as a blob.

#### Return

`Blob` — The data as a blob.

---

### getChartId()

Returns a stable identifier for the chart that is unique across the spreadsheet containing the chart or `null` if the chart is not in a spreadsheet.

#### Return

`Integer|null` — A stable chart identifier.

---

### getContainerInfo()

Returns information about where the chart is positioned within a sheet.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const chart = sheet.newChart()
                  .setChartType(Charts.ChartType.BAR)
                  .addRange(sheet.getRange('A1:B8'))
                  .setPosition(5, 5, 0, 0)
                  .build();

const containerInfo = chart.getContainerInfo();

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

### getHiddenDimensionStrategy()

Returns the strategy to use for handling hidden rows and columns. Defaults to `IGNORE_ROWS`.

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

// Logs the strategy to use for hidden rows and columns which is
// Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS in this case.
Logger.log(chart.getHiddenDimensionStrategy());
```

#### Return

`ChartHiddenDimensionStrategy` — The strategy to use for hidden rows and columns.

---

### getMergeStrategy()

Returns the merge strategy used when more than one range exists. If `MERGE_ROWS`, row are merged; if `MERGE_COLUMNS`, columns are merged. Defaults to `MERGE_COLUMNS`.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:B10');
const range2 = sheet.getRange('C1:C10');
const chart = sheet.newChart()
                  .setChartType(Charts.ChartType.BAR)
                  .addRange(range)
                  .addRange(range2)
                  .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
                  .setPosition(5, 5, 0, 0)
                  .build();

// Logs whether rows of multiple ranges are merged, which is MERGE_ROWS in this
// case.
Logger.log(chart.getMergeStrategy());
```

#### Return

`ChartMergeStrategy` — `MERGE_ROWS` If rows are merged across multiple ranges; `MERGE_COLUMNS` if columns are merged across multiple ranges.

---

### getNumHeaders()

Returns the number of rows or columns the range that are treated as headers.

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

// Logs the number of rows or columns to use as headers, which is 1 in this
// case.
Logger.log(chart.getHeaders());
```

#### Return

`Integer` — The number of rows or columns treated as headers. Negative values indicate the headers are auto-detected.

---

### getOptions()

Returns the options for this chart, such as height, colors, and axes.

The returned options are immutable.

#### Return

`ChartOptions` — The options for this chart, such as height, colors, and axes.

---

### getRanges()

Returns the ranges that this chart uses as a data source.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const chart = sheet.newChart()
                  .setChartType(Charts.ChartType.BAR)
                  .addRange(sheet.getRange('A1:B8'))
                  .setPosition(5, 5, 0, 0)
                  .build();

const ranges = chart.getRanges();

// There's only one range as a data source for this chart,
// so this logs "A1:B8"
for (const i in ranges) {
  const range = ranges[i];
  Logger.log(range.getA1Notation());
}
```

#### Return

`Range[]` — An array of ranges that serve as this chart's data source.

---

### getTransposeRowsAndColumns()

If `true`, the rows and columns used to populate the chart are switched. Defaults to `false`.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:B5');
const chart = sheet.newChart()
                  .addRange(range)
                  .setChartType(Charts.ChartType.BAR)
                  .setTransposeRowsAndColumns(true)
                  .setPosition(5, 5, 0, 0)
                  .build();

// Logs whether rows and columns should be transposed, which is true in this
// case.
Logger.log(chart.getTransposeRowsAndColumns());
```

#### Return

`Boolean` — `True` if the rows and columns used to construct the chart are transposed.

---

### modify()

Returns an `EmbeddedChartBuilder` that can be used to modify this chart. Invoke `sheet.updateChart(chart)` to save any changes.

```
const sheet = SpreadsheetApp.getActiveSheet();
let chart = sheet.getCharts()[0];
chart = chart.modify()
            .setOption('width', 800)
            .setOption('height', 640)
            .setPosition(5, 5, 0, 0)
            .build();
sheet.updateChart(chart);
```

#### Return

`EmbeddedChartBuilder` — A builder for creating embedded charts.
