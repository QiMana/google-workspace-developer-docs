---
source: https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations.pages/tables
root: workspace
fetched_at: 2026-04-23T15:31:55.442Z
---

# Tables

### Table

JSON representation

```
{
  "rows": integer,
  "columns": integer,
  "tableRows": [
    {
      object (TableRow)
    }
  ],
  "tableColumns": [
    {
      object (TableColumnProperties)
    }
  ],
  "horizontalBorderRows": [
    {
      object (TableBorderRow)
    }
  ],
  "verticalBorderRows": [
    {
      object (TableBorderRow)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>rows</code></td><td><p><code>integer</code></p><p>Number of rows in the table.</p></td></tr><tr><td><code>columns</code></td><td><p><code>integer</code></p><p>Number of columns in the table.</p></td></tr><tr><td><code>tableRows[]</code></td><td><p><code>object (<code>TableRow</code>)</code></p><p>Properties and contents of each row.</p><p>Cells that span multiple rows are contained in only one of these rows and have a <code>rowSpan</code> greater than 1.</p></td></tr><tr><td><code>tableColumns[]</code></td><td><p><code>object (<code>TableColumnProperties</code>)</code></p><p>Properties of each column.</p></td></tr><tr><td><code>horizontalBorderRows[]</code></td><td><p><code>object (<code>TableBorderRow</code>)</code></p><p>Properties of horizontal cell borders.</p><p>A table's horizontal cell borders are represented as a grid. The grid has one more row than the number of rows in the table and the same number of columns as the table. For example, if the table is 3 x 3, its horizontal borders will be represented as a grid with 4 rows and 3 columns.</p></td></tr><tr><td><code>verticalBorderRows[]</code></td><td><p><code>object (<code>TableBorderRow</code>)</code></p><p>Properties of vertical cell borders.</p><p>A table's vertical cell borders are represented as a grid. The grid has the same number of rows as the table and one more column than the number of columns in the table. For example, if the table is 3 x 3, its vertical borders will be represented as a grid with 3 rows and 4 columns.</p></td></tr></tbody></table>

### TableRow

Properties and contents of each row in a table.

JSON representation

```
{
  "rowHeight": {
    object (Dimension)
  },
  "tableRowProperties": {
    object (TableRowProperties)
  },
  "tableCells": [
    {
      object (TableCell)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>rowHeight</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>Height of a row.</p></td></tr><tr><td><code>tableRowProperties</code></td><td><p><code>object (<code>TableRowProperties</code>)</code></p><p>Properties of the row.</p></td></tr><tr><td><code>tableCells[]</code></td><td><p><code>object (<code>TableCell</code>)</code></p><p>Properties and contents of each cell.</p><p>Cells that span multiple columns are represented only once with a <code>columnSpan</code> greater than 1. As a result, the length of this collection does not always match the number of columns of the entire table.</p></td></tr></tbody></table>

### TableRowProperties

Properties of each row in a table.

JSON representation

```
{
  "minRowHeight": {
    object (Dimension)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>minRowHeight</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>Minimum height of the row. The row will be rendered in the Slides editor at a height equal to or greater than this value in order to show all the text in the row's cell(s).</p></td></tr></tbody></table>

### TableCell

Properties and contents of each table cell.

JSON representation

```
{
  "location": {
    object (TableCellLocation)
  },
  "rowSpan": integer,
  "columnSpan": integer,
  "text": {
    object (TextContent)
  },
  "tableCellProperties": {
    object (TableCellProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>location</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The location of the cell within the table.</p></td></tr><tr><td><code>rowSpan</code></td><td><p><code>integer</code></p><p>Row span of the cell.</p></td></tr><tr><td><code>columnSpan</code></td><td><p><code>integer</code></p><p>Column span of the cell.</p></td></tr><tr><td><code>text</code></td><td><p><code>object (<code>TextContent</code>)</code></p><p>The text content of the cell.</p></td></tr><tr><td><code>tableCellProperties</code></td><td><p><code>object (<code>TableCellProperties</code>)</code></p><p>The properties of the table cell.</p></td></tr></tbody></table>

### TableCellLocation

A location of a single table cell within a table.

JSON representation

```
{
  "rowIndex": integer,
  "columnIndex": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>rowIndex</code></td><td><p><code>integer</code></p><p>The 0-based row index.</p></td></tr><tr><td><code>columnIndex</code></td><td><p><code>integer</code></p><p>The 0-based column index.</p></td></tr></tbody></table>

### TableCellProperties

The properties of the `TableCell`.

JSON representation

```
{
  "tableCellBackgroundFill": {
    object (TableCellBackgroundFill)
  },
  "contentAlignment": enum (ContentAlignment)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableCellBackgroundFill</code></td><td><p><code>object (<code>TableCellBackgroundFill</code>)</code></p><p>The background fill of the table cell. The default fill matches the fill for newly created table cells in the Slides editor.</p></td></tr><tr><td><code>contentAlignment</code></td><td><p><code>enum (<code>ContentAlignment</code>)</code></p><p>The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Slides editor.</p></td></tr></tbody></table>

### TableCellBackgroundFill

The table cell background fill.

JSON representation

```
{
  "propertyState": enum (PropertyState),

  "solidFill": {
    object (SolidFill)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>propertyState</code></td><td><p><code>enum (<code>PropertyState</code>)</code></p><p>The background fill property state.</p><p>Updating the fill on a table cell will implicitly update this field to <code>RENDERED</code>, unless another value is specified in the same request. To have no fill on a table cell, set this field to <code>NOT_RENDERED</code>. In this case, any other fill fields set in the same request will be ignored.</p></td></tr><tr><td colspan="2">Union field <code>kind</code>. The kind of background fill. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>solidFill</code></td><td><p><code>object (<code>SolidFill</code>)</code></p><p>Solid color fill.</p></td></tr></tbody></table>

### TableColumnProperties

Properties of each column in a table.

JSON representation

```
{
  "columnWidth": {
    object (Dimension)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>columnWidth</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>Width of a column.</p></td></tr></tbody></table>

### TableBorderRow

Contents of each border row in a table.

JSON representation

```
{
  "tableBorderCells": [
    {
      object (TableBorderCell)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableBorderCells[]</code></td><td><p><code>object (<code>TableBorderCell</code>)</code></p><p>Properties of each border cell. When a border's adjacent table cells are merged, it is not included in the response.</p></td></tr></tbody></table>

### TableBorderCell

The properties of each border cell.

JSON representation

```
{
  "location": {
    object (TableCellLocation)
  },
  "tableBorderProperties": {
    object (TableBorderProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>location</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The location of the border within the border table.</p></td></tr><tr><td><code>tableBorderProperties</code></td><td><p><code>object (<code>TableBorderProperties</code>)</code></p><p>The border properties.</p></td></tr></tbody></table>

### TableBorderProperties

The border styling properties of the `TableBorderCell`.

JSON representation

```
{
  "tableBorderFill": {
    object (TableBorderFill)
  },
  "weight": {
    object (Dimension)
  },
  "dashStyle": enum (DashStyle)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableBorderFill</code></td><td><p><code>object (<code>TableBorderFill</code>)</code></p><p>The fill of the table border.</p></td></tr><tr><td><code>weight</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The thickness of the border.</p></td></tr><tr><td><code>dashStyle</code></td><td><p><code>enum (<code>DashStyle</code>)</code></p><p>The dash style of the border.</p></td></tr></tbody></table>

### TableBorderFill

The fill of the border.

JSON representation

```
{

  "solidFill": {
    object (SolidFill)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kind of fill. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>solidFill</code></td><td><p><code>object (<code>SolidFill</code>)</code></p><p>Solid fill.</p></td></tr></tbody></table>
