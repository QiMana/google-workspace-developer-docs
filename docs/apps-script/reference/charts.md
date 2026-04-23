---
source: https://developers.google.com/apps-script/reference/charts
root: apps-script
fetched_at: 2026-04-23T15:19:15.187Z
---

# Charts Service

## Page Summary

- The Charts service facilitates server-side chart creation using Google Charts Tools, whereas client-side rendering utilizes the Google Charts API.
- An example is provided illustrating the process of creating a data table, populating an area chart, and displaying it as an image.
- The documentation details various classes and methods for building different chart types such as Area, Bar, Column, Line, Pie, and Scatter charts, as well as data table and text style objects.
- Supported chart types are listed, including Timeline, Area, Bar, Bubble, Candlestick, Column, Combo, Gauge, Geo, Histogram, Radar, Line, Org, Pie, Scatter, Sparkline, Stepped Area, Table, Treemap, and Waterfall charts.
- Enums are defined for handling hidden data, merging data ranges, specifying column types, setting curve and point styles, defining legend positions, handling string matching in filters, setting orientation, and specifying picker values layout.

This service allows users to create charts using [Google Charts Tools](https://developers.google.com/chart/interactive/docs/gallery) and render them server side. If you want to render charts in a web browser, use the [Google Charts API](https://developers.google.com/chart/interactive/docs/reference) instead.

This example creates a basic data table, populates an area chart with the data, and adds it to a web page as an image:

```
function doGet() {
  var data = Charts.newDataTable()
      .addColumn(Charts.ColumnType.STRING, 'Month')
      .addColumn(Charts.ColumnType.NUMBER, 'In Store')
      .addColumn(Charts.ColumnType.NUMBER, 'Online')
      .addRow(['January', 10, 1])
      .addRow(['February', 12, 1])
      .addRow(['March', 20, 2])
      .addRow(['April', 25, 3])
      .addRow(['May', 30, 4])
      .build();

  var chart = Charts.newAreaChart()
      .setDataTable(data)
      .setStacked()
      .setRange(0, 40)
      .setTitle('Sales per Month')
      .build();

  var htmlOutput = HtmlService.createHtmlOutput().setTitle('My Chart');
  var imageData = Utilities.base64Encode(chart.getAs('image/png').getBytes());
  var imageUrl = "data:image/png;base64," + encodeURI(imageData);
  htmlOutput.append("Render chart server side: <br/>");
  htmlOutput.append("<img border=\"1\" src=\"" + imageUrl + "\">");
  return htmlOutput;

}
```
