---
source: https://developers.google.com/apps-script/reference/charts/data-view-definition-builder
root: apps-script
fetched_at: 2026-04-23T15:19:18.391Z
---

# Class DataViewDefinitionBuilder

## Page Summary

- DataViewDefinitionBuilder is used to build DataViewDefinition objects.
- The `setColumns` method allows specifying which columns to include in the data view and can also define column roles.
- The `build` method finalizes and returns the DataViewDefinition object.
- An example demonstrates using `setColumns` to display a subset of data from a spreadsheet in a chart.
- Another example shows how to use `setColumns` with column roles to style chart elements based on data.

Here's an example of using the builder. The data is [imported from a Google spreadsheet](https://developers.google.com/chart/interactive/docs/spreadsheets#Google_Spreadsheets_as_a_Data_Source).

```
function doGet() {
  // This example creates two table charts side by side. One uses a data view
  // definition to restrict the number of displayed columns.

  // Get sample data from a spreadsheet.
  const dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?range=A1%3AF' +
      '&key=0Aq4s9w_HxMs7dHpfX05JdmVSb1FpT21sbXd4NVE3UEE&gid=4&headers=-1';

  // Create a chart to display all of the data.
  const originalChart = Charts.newTableChart()
                            .setDimensions(600, 500)
                            .setDataSourceUrl(dataSourceUrl)
                            .build();

  // Create another chart to display a subset of the data (only columns 1 and
  // 4).
  const dataViewDefinition = Charts.newDataViewDefinition().setColumns([0, 3]);
  const limitedChart = Charts.newTableChart()
                           .setDimensions(200, 500)
                           .setDataSourceUrl(dataSourceUrl)
                           .setDataViewDefinition(dataViewDefinition)
                           .build();

  const htmlOutput = HtmlService.createHtmlOutput();
  const originalChartData = Utilities.base64Encode(
      originalChart.getAs('image/png').getBytes(),
  );
  const originalChartUrl =
      \`data:image/png;base64,${encodeURI(originalChartData)}\`;
  const limitedChartData = Utilities.base64Encode(
      limitedChart.getAs('image/png').getBytes(),
  );
  const limitedChartUrl =
      \`data:image/png;base64,${encodeURI(limitedChartData)}\`;
  htmlOutput.append('<table><tr><td>');
  htmlOutput.append(\`<img border="1" src="${originalChartUrl}">\`);
  htmlOutput.append('</td><td>');
  htmlOutput.append(\`<img border="1" src="${limitedChartUrl}">\`);
  htmlOutput.append('</td></tr></table>');
  return htmlOutput;
}
```

## Detailed documentation

### build()

Builds and returns the data view definition object that was built using this builder.

#### Return

— A data view definition object that was built using this builder.

---

### setColumns(columns)

Sets the indexes of the columns to include in the data view as well as specifying role-column information. This subset of column indexes refer to the columns of the data source that the data view is derived from.

A column role describes the purpose of the data in that column: for example, a column might hold data describing tooltip text, data point annotations, or uncertainty indicators. For more details, see [DataTable Roles](https://developers.google.com/chart/interactive/docs/roles) in the Google Charts documentation.

Assuming a spreadsheet with the following data in A1:C3:

```
'abc', 20, 'blue';
'def', 30, 'red';
'ghi', 40, 'orange';
```

The following code creates a bar chart where each bar is a different color. The colors are assigned via a style "role column".

```
const COLUMN_SPEC = [
  0,  // categories
  1,  // counts
  {sourceColumn: 2, role: 'style'},
];

function roleColumnChart() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getActiveSheet();
  const viewSpec =
      Charts.newDataViewDefinition().setColumns(COLUMN_SPEC).build();
  const chartBuilder = sheet.newChart()
                           .setChartType(Charts.ChartType.BAR)
                           .setDataViewDefinition(viewSpec)
                           .setOption('useFirstColumnAsDomain', true)
                           .setPosition(5, 1, 0, 0)
                           .setOption('hAxis', {title: 'Counts'})
                           .setOption('vAxis', {title: 'Categories'})
                           .addRange(sheet.getRange('A1:C3'));
  sheet.insertChart(chartBuilder.build());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columns` | `Object[]` | An array of column indexes, or column descriptions (an object), to include in the data view. The column descriptions define a column role. The data table and the enumeration for data view columns are zero-based. |

#### Return

`DataViewDefinitionBuilder` — This builder, useful for chaining.
