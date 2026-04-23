---
source: https://developers.google.com/apps-script/reference/charts/charts.html
root: apps-script
fetched_at: 2026-04-23T15:19:16.973Z
---

# Class Charts

## Page Summary

- The Charts service is the entry point for creating charts in scripts.
- You can create various chart types like Area, Bar, Column, Line, Pie, Scatter, and Table charts using this service.
- Data for charts is held in a DataTable, which can be built manually.
- Charts can be added to a web page as an image.

Entry point for creating Charts in scripts.

This example creates a basic data table, populates an area chart with the data, and adds it into a web page as an image:

```
function doGet() {
  const data = Charts.newDataTable()
                   .addColumn(Charts.ColumnType.STRING, 'Month')
                   .addColumn(Charts.ColumnType.NUMBER, 'In Store')
                   .addColumn(Charts.ColumnType.NUMBER, 'Online')
                   .addRow(['January', 10, 1])
                   .addRow(['February', 12, 1])
                   .addRow(['March', 20, 2])
                   .addRow(['April', 25, 3])
                   .addRow(['May', 30, 4])
                   .build();

  const chart = Charts.newAreaChart()
                    .setDataTable(data)
                    .setStacked()
                    .setRange(0, 40)
                    .setTitle('Sales per Month')
                    .build();

  const htmlOutput = HtmlService.createHtmlOutput().setTitle('My Chart');
  const imageData = Utilities.base64Encode(chart.getAs('image/png').getBytes());
  const imageUrl = \`data:image/png;base64,${encodeURI(imageData)}\`;
  htmlOutput.append('Render chart server side: <br/>');
  htmlOutput.append(\`<img border="1" src="${imageUrl}">\`);
  return htmlOutput;
}
```

## Detailed documentation

### newAreaChart()

Starts building an area chart, as described in the [Google Chart Tools](https://developers.google.com/chart/interactive/docs/gallery/areachart) documentation.

#### Return

`AreaChartBuilder` — An AreaChartBuilder, which can be used to build an area chart.

---

### newBarChart()

Starts building a bar chart, as described in the [Google Chart Tools](https://developers.google.com/chart/interactive/docs/gallery/barchart) documentation.

#### Return

`BarChartBuilder` — A BarChartBuilder, which can be used to build a bar chart.

---

### newColumnChart()

Starts building a column chart, as described in the [Google Chart Tools](https://developers.google.com/chart/interactive/docs/gallery/columnchart) documentation.

#### Return

`ColumnChartBuilder` — A ColumnChartBuilder, which can be used to build a column chart.

---

### newDataTable()

Creates an empty data table, which can have its values set manually.

Data tables hold the data for all chart types.

#### Return

`DataTableBuilder` — A DataTableBuilder, which can hold data for charts.

---

### newDataViewDefinition()

Creates a new data view definition.

Use setters to define the different properties of the data view.

#### Return

`DataViewDefinitionBuilder` — A DataViewDefinitionBuilder, which can be used to build a data view definition.

---

### newLineChart()

Starts building a line chart, as described in the [Google Chart Tools](https://developers.google.com/chart/interactive/docs/gallery/linechart) documentation.

#### Return

`LineChartBuilder` — A LineChartBuilder, which can be used to build a line chart.

---

### newPieChart()

Starts building a pie chart, as described in the [Google Chart Tools](https://developers.google.com/chart/interactive/docs/gallery/piechart) documentation.

#### Return

`PieChartBuilder` — A PieChartBuilder, which can be used to build a pie chart.

---

### newScatterChart()

Starts building a scatter chart, as described in the [Google Chart Tools](https://developers.google.com/chart/interactive/docs/gallery/scatterchart) documentation.

#### Return

`ScatterChartBuilder` — A ScatterChartBuilder, which can be used to build a scatter chart.

---

### newTableChart()

Starts building a table chart, as described in the [Google Chart Tools](https://developers.google.com/chart/interactive/docs/gallery/table) documentation.

#### Return

`TableChartBuilder` — A TableChartBuilder, which can be used to build a table chart.

---

### newTextStyle()

Creates a new text style builder.

To change the default values, use the setter functions.

#### Return

`TextStyleBuilder` — A TextStyleBuilder, which can be used to build a text style configuration object.
