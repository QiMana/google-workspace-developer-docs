---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets
root: workspace
fetched_at: 2026-04-23T15:31:36.327Z
---

# Sheets

## Sheet

A sheet in a spreadsheet.

JSON representation

```
{
  "properties": {
    object (SheetProperties)
  },
  "data": [
    {
      object (GridData)
    }
  ],
  "merges": [
    {
      object (GridRange)
    }
  ],
  "conditionalFormats": [
    {
      object (ConditionalFormatRule)
    }
  ],
  "filterViews": [
    {
      object (FilterView)
    }
  ],
  "protectedRanges": [
    {
      object (ProtectedRange)
    }
  ],
  "basicFilter": {
    object (BasicFilter)
  },
  "charts": [
    {
      object (EmbeddedChart)
    }
  ],
  "bandedRanges": [
    {
      object (BandedRange)
    }
  ],
  "developerMetadata": [
    {
      object (DeveloperMetadata)
    }
  ],
  "rowGroups": [
    {
      object (DimensionGroup)
    }
  ],
  "columnGroups": [
    {
      object (DimensionGroup)
    }
  ],
  "slicers": [
    {
      object (Slicer)
    }
  ],
  "tables": [
    {
      object (Table)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>properties</code></td><td><p><code>object (<code>SheetProperties</code>)</code></p><p>The properties of the sheet.</p></td></tr><tr><td><code>data[]</code></td><td><p><code>object (<code>GridData</code>)</code></p><p>Data in the grid, if this is a grid sheet.</p><p>The number of GridData objects returned is dependent on the number of ranges requested on this sheet. For example, if this is representing <code>Sheet1</code>, and the spreadsheet was requested with ranges <code>Sheet1!A1:C10</code> and <code>Sheet1!D15:E20</code>, then the first GridData will have a <code>startRow</code> / <code>startColumn</code> of <code>0</code>, while the second one will have <code>startRow 14</code> (zero-based row 15), and <code>startColumn 3</code> (zero-based column D).</p><p>For a <code>DATA_SOURCE</code> sheet, you can not request a specific range, the GridData contains all the values.</p></td></tr><tr><td><code>merges[]</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The ranges that are merged together.</p></td></tr><tr><td><code>conditionalFormats[]</code></td><td><p><code>object (<code>ConditionalFormatRule</code>)</code></p><p>The conditional format rules in this sheet.</p></td></tr><tr><td><code>filterViews[]</code></td><td><p><code>object (<code>FilterView</code>)</code></p><p>The filter views in this sheet.</p></td></tr><tr><td><code>protectedRanges[]</code></td><td><p><code>object (<code>ProtectedRange</code>)</code></p><p>The protected ranges in this sheet.</p></td></tr><tr><td><code>basicFilter</code></td><td><p><code>object (<code>BasicFilter</code>)</code></p><p>The filter on this sheet, if any.</p></td></tr><tr><td><code>charts[]</code></td><td><p><code>object (<code>EmbeddedChart</code>)</code></p><p>The specifications of every chart on this sheet.</p></td></tr><tr><td><code>bandedRanges[]</code></td><td><p><code>object (<code>BandedRange</code>)</code></p><p>The banded (alternating colors) ranges on this sheet.</p></td></tr><tr><td><code>rowGroups[]</code></td><td><p><code>object (<code>DimensionGroup</code>)</code></p><p>All row groups on this sheet, ordered by increasing range start index, then by group depth.</p></td></tr><tr><td><code>columnGroups[]</code></td><td><p><code>object (<code>DimensionGroup</code>)</code></p><p>All column groups on this sheet, ordered by increasing range start index, then by group depth.</p></td></tr><tr><td><code>slicers[]</code></td><td><p><code>object (<code>Slicer</code>)</code></p><p>The slicers on this sheet.</p></td></tr><tr><td><code>tables[]</code></td><td><p><code>object (<code>Table</code>)</code></p><p>The tables on this sheet.</p></td></tr></tbody></table>

## SheetProperties

Properties of a sheet.

JSON representation

```
{
  "sheetId": integer,
  "title": string,
  "index": integer,
  "sheetType": enum (SheetType),
  "gridProperties": {
    object (GridProperties)
  },
  "hidden": boolean,
  "tabColor": {
    object (Color)
  },
  "tabColorStyle": {
    object (ColorStyle)
  },
  "rightToLeft": boolean,
  "dataSourceSheetProperties": {
    object (DataSourceSheetProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The ID of the sheet. Must be non-negative. This field cannot be changed once set.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The name of the sheet.</p></td></tr><tr><td><code>index</code></td><td><p><code>integer</code></p><p>The index of the sheet within the spreadsheet. When adding or updating sheet properties, if this field is excluded then the sheet is added or moved to the end of the sheet list. When updating sheet indices or inserting sheets, movement is considered in "before the move" indexes. For example, if there were three sheets (S1, S2, S3) in order to move S1 ahead of S2 the index would have to be set to 2. A sheet index update request is ignored if the requested index is identical to the sheets current index or if the requested new index is equal to the current sheet index + 1.</p></td></tr><tr><td><code>sheetType</code></td><td><p><code>enum (<code>SheetType</code>)</code></p><p>The type of sheet. Defaults to <code>GRID</code>. This field cannot be changed once set.</p></td></tr><tr><td><code>gridProperties</code></td><td><p><code>object (<code>GridProperties</code>)</code></p><p>Additional properties of the sheet if this sheet is a grid. (If the sheet is an object sheet, containing a chart or image, then this field will be absent.) When writing it is an error to set any grid properties on non-grid sheets.</p><p>If this sheet is a <code>DATA_SOURCE</code> sheet, this field is output only but contains the properties that reflect how a data source sheet is rendered in the UI, e.g. <code>rowCount</code>.</p></td></tr><tr><td><code>hidden</code></td><td><p><code>boolean</code></p><p>True if the sheet is hidden in the UI, false if it's visible.</p></td></tr><tr><td><code>tabColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The color of the tab in the UI. Deprecated: Use <code>tabColorStyle</code>.</p></td></tr><tr><td><code>tabColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The color of the tab in the UI. If <code>tabColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>rightToLeft</code></td><td><p><code>boolean</code></p><p>True if the sheet is an RTL sheet instead of an LTR sheet.</p></td></tr><tr><td><code>dataSourceSheetProperties</code></td><td><p><code>object (<code>DataSourceSheetProperties</code>)</code></p><p>Output only. If present, the field contains <code>DATA_SOURCE</code> sheet specific properties.</p></td></tr></tbody></table>

## SheetType

The kind of sheet.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SHEET_TYPE_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>GRID</code></td><td>The sheet is a grid.</td></tr><tr><td><code>OBJECT</code></td><td>The sheet has no grid and instead has an object like a chart or image.</td></tr><tr><td><code>DATA_SOURCE</code></td><td>The sheet connects with an external and shows the preview of data.</td></tr></tbody></table>

## GridProperties

Properties of a grid.

JSON representation

```
{
  "rowCount": integer,
  "columnCount": integer,
  "frozenRowCount": integer,
  "frozenColumnCount": integer,
  "hideGridlines": boolean,
  "rowGroupControlAfter": boolean,
  "columnGroupControlAfter": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>rowCount</code></td><td><p><code>integer</code></p><p>The number of rows in the grid.</p></td></tr><tr><td><code>columnCount</code></td><td><p><code>integer</code></p><p>The number of columns in the grid.</p></td></tr><tr><td><code>frozenRowCount</code></td><td><p><code>integer</code></p><p>The number of rows that are frozen in the grid.</p></td></tr><tr><td><code>frozenColumnCount</code></td><td><p><code>integer</code></p><p>The number of columns that are frozen in the grid.</p></td></tr><tr><td><code>hideGridlines</code></td><td><p><code>boolean</code></p><p>True if the grid isn't showing gridlines in the UI.</p></td></tr><tr><td><code>rowGroupControlAfter</code></td><td><p><code>boolean</code></p><p>True if the row grouping control toggle is shown after the group.</p></td></tr><tr><td><code>columnGroupControlAfter</code></td><td><p><code>boolean</code></p><p>True if the column grouping control toggle is shown after the group.</p></td></tr></tbody></table>

## DataSourceSheetProperties

Additional properties of a `DATA_SOURCE` sheet.

JSON representation

```
{
  "dataSourceId": string,
  "columns": [
    {
      object (DataSourceColumn)
    }
  ],
  "dataExecutionStatus": {
    object (DataExecutionStatus)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataSourceId</code></td><td><p><code>string</code></p></td></tr><tr><td><code>columns[]</code></td><td><p><code>object (<code>DataSourceColumn</code>)</code></p><p>The columns displayed on the sheet, corresponding to the values in <code>RowData</code>.</p></td></tr><tr><td><code>dataExecutionStatus</code></td><td><p><code>object (<code>DataExecutionStatus</code>)</code></p><p>The data execution status.</p></td></tr></tbody></table>

## GridData

Data in the grid, as well as metadata about the dimensions.

JSON representation

```
{
  "startRow": integer,
  "startColumn": integer,
  "rowData": [
    {
      object (RowData)
    }
  ],
  "rowMetadata": [
    {
      object (DimensionProperties)
    }
  ],
  "columnMetadata": [
    {
      object (DimensionProperties)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startRow</code></td><td><p><code>integer</code></p><p>The first row this GridData refers to, zero-based.</p></td></tr><tr><td><code>startColumn</code></td><td><p><code>integer</code></p><p>The first column this GridData refers to, zero-based.</p></td></tr><tr><td><code>rowData[]</code></td><td><p><code>object (<code>RowData</code>)</code></p><p>The data in the grid, one entry per row, starting with the row in startRow. The values in RowData will correspond to columns starting at <code>startColumn</code>.</p></td></tr></tbody></table>

## RowData

Data about each cell in a row.

JSON representation

```
{
  "values": [
    {
      object (CellData)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>object (<code>CellData</code>)</code></p><p>The values in the row, one per column.</p></td></tr></tbody></table>

## DimensionProperties

Properties about a dimension.

JSON representation

```
{
  "hiddenByFilter": boolean,
  "hiddenByUser": boolean,
  "pixelSize": integer,
  "developerMetadata": [
    {
      object (DeveloperMetadata)
    }
  ],
  "dataSourceColumnReference": {
    object (DataSourceColumnReference)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>hiddenByFilter</code></td><td><p><code>boolean</code></p><p>True if this dimension is being filtered. This field is read-only.</p></td></tr><tr><td><code>hiddenByUser</code></td><td><p><code>boolean</code></p><p>True if this dimension is explicitly hidden.</p></td></tr><tr><td><code>pixelSize</code></td><td><p><code>integer</code></p><p>The height (if a row) or width (if a column) of the dimension in pixels.</p></td></tr><tr><td><code>dataSourceColumnReference</code></td><td><p><code>object (<code>DataSourceColumnReference</code>)</code></p><p>Output only. If set, this is a column in a data source sheet.</p></td></tr></tbody></table>

## ConditionalFormatRule

A rule describing a conditional format.

JSON representation

```
{
  "ranges": [
    {
      object (GridRange)
    }
  ],

  "booleanRule": {
    object (BooleanRule)
  },
  "gradientRule": {
    object (GradientRule)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>ranges[]</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The ranges that are formatted if the condition is true. All the ranges must be on the same grid.</p></td></tr><tr><td colspan="2">Union field <code>rule</code>. The rule controlling this conditional format, exactly one must be set. <code>rule</code> can be only one of the following:</td></tr><tr><td><code>booleanRule</code></td><td><p><code>object (<code>BooleanRule</code>)</code></p><p>The formatting is either "on" or "off" according to the rule.</p></td></tr><tr><td><code>gradientRule</code></td><td><p><code>object (<code>GradientRule</code>)</code></p><p>The formatting will vary based on the gradients in the rule.</p></td></tr></tbody></table>

## BooleanRule

A rule that may or may not match, depending on the condition.

JSON representation

```
{
  "condition": {
    object (BooleanCondition)
  },
  "format": {
    object (CellFormat)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>condition</code></td><td><p><code>object (<code>BooleanCondition</code>)</code></p><p>The condition of the rule. If the condition evaluates to true, the format is applied.</p></td></tr><tr><td><code>format</code></td><td><p><code>object (<code>CellFormat</code>)</code></p><p>The format to apply. Conditional formatting can only apply a subset of formatting: <code>bold</code>, <code>italic</code>, <code>strikethrough</code>, <code>foreground color</code> and, <code>background color</code>.</p></td></tr></tbody></table>

## GradientRule

A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points.

JSON representation

```
{
  "minpoint": {
    object (InterpolationPoint)
  },
  "midpoint": {
    object (InterpolationPoint)
  },
  "maxpoint": {
    object (InterpolationPoint)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>minpoint</code></td><td><p><code>object (<code>InterpolationPoint</code>)</code></p><p>The starting interpolation point.</p></td></tr><tr><td><code>midpoint</code></td><td><p><code>object (<code>InterpolationPoint</code>)</code></p><p>An optional midway interpolation point.</p></td></tr><tr><td><code>maxpoint</code></td><td><p><code>object (<code>InterpolationPoint</code>)</code></p><p>The final interpolation point.</p></td></tr></tbody></table>

## InterpolationPoint

A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen.

JSON representation

```
{
  "color": {
    object (Color)
  },
  "colorStyle": {
    object (ColorStyle)
  },
  "type": enum (InterpolationPointType),
  "value": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>color
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The color this interpolation point should use. Deprecated: Use <code>colorStyle</code>.</p></td></tr><tr><td><code>colorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The color this interpolation point should use. If <code>color</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>InterpolationPointType</code>)</code></p><p>How the value should be interpreted.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>The value this interpolation point uses. May be a formula. Unused if <code>type</code> is <code>MIN</code> or <code>MAX</code>.</p></td></tr></tbody></table>

## InterpolationPointType

The kind of interpolation point.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>INTERPOLATION_POINT_TYPE_UNSPECIFIED</code></td><td>The default value, do not use.</td></tr><tr><td><code>MIN</code></td><td>The interpolation point uses the minimum value in the cells over the range of the conditional format.</td></tr><tr><td><code>MAX</code></td><td>The interpolation point uses the maximum value in the cells over the range of the conditional format.</td></tr><tr><td><code>NUMBER</code></td><td>The interpolation point uses exactly the value in <code>InterpolationPoint.value</code>.</td></tr><tr><td><code>PERCENT</code></td><td><p>The interpolation point is the given percentage over all the cells in the range of the conditional format. This is equivalent to <code>NUMBER</code> if the value was: <code>=(MAX(FLATTEN(range)) * (value / 100))
  + (MIN(FLATTEN(range)) * (1 - (value / 100)))</code> (where errors in the range are ignored when flattening).</p></td></tr><tr><td><code>PERCENTILE</code></td><td>The interpolation point is the given percentile over all the cells in the range of the conditional format. This is equivalent to <code>NUMBER</code> if the value was: <code>=PERCENTILE(FLATTEN(range), value / 100)</code> (where errors in the range are ignored when flattening).</td></tr></tbody></table>

## FilterView

A filter view. For more information, see [Manage data visibility with filters](../../../../guides/filters.md).

JSON representation

```
{
  "filterViewId": integer,
  "title": string,
  "range": {
    object (GridRange)
  },
  "namedRangeId": string,
  "tableId": string,
  "sortSpecs": [
    {
      object (SortSpec)
    }
  ],
  "criteria": {
    integer: {
      object (FilterCriteria)
    },
    ...
  },
  "filterSpecs": [
    {
      object (FilterSpec)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>filterViewId</code></td><td><p><code>integer</code></p><p>The ID of the filter view.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The name of the filter view.</p></td></tr><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range this filter view covers.</p><p>When writing, only one of <code>range</code>, <code>namedRangeId</code>, or <code>tableId</code> may be set.</p></td></tr><tr><td><code>namedRangeId</code></td><td><p><code>string</code></p><p>The named range this filter view is backed by, if any.</p><p>When writing, only one of <code>range</code>, <code>namedRangeId</code>, or <code>tableId</code> may be set.</p></td></tr><tr><td><code>tableId</code></td><td><p><code>string</code></p><p>The table this filter view is backed by, if any.</p><p>When writing, only one of <code>range</code>, <code>namedRangeId</code>, or <code>tableId</code> may be set.</p></td></tr><tr><td><code>sortSpecs[]</code></td><td><p><code>object (<code>SortSpec</code>)</code></p><p>The sort order per column. Later specifications are used when values are equal in the earlier specifications.</p></td></tr><tr><td><code>criteria
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>map (key: integer, value: object (
        <code>FilterCriteria</code>))</code></p><p>The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column.</p><p>This field is deprecated in favor of <code>filterSpecs</code>.</p></td></tr><tr><td><code>filterSpecs[]</code></td><td><p><code>object (<code>FilterSpec</code>)</code></p><p>The filter criteria for showing or hiding values per column.</p><p>Both <code>criteria</code> and <code>filterSpecs</code> are populated in responses. If both fields are specified in an update request, this field takes precedence.</p></td></tr></tbody></table>

## ProtectedRange

A protected range.

JSON representation

```
{
  "protectedRangeId": integer,
  "range": {
    object (GridRange)
  },
  "namedRangeId": string,
  "tableId": string,
  "description": string,
  "warningOnly": boolean,
  "requestingUserCanEdit": boolean,
  "unprotectedRanges": [
    {
      object (GridRange)
    }
  ],
  "editors": {
    object (Editors)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>protectedRangeId</code></td><td><p><code>integer</code></p><p>The ID of the protected range. This field is read-only.</p></td></tr><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range that is being protected. The range may be fully unbounded, in which case this is considered a protected sheet.</p><p>When writing, only one of <code>range</code> or <code>namedRangeId</code> or <code>tableId</code> may be set.</p></td></tr><tr><td><code>namedRangeId</code></td><td><p><code>string</code></p><p>The named range this protected range is backed by, if any.</p><p>When writing, only one of <code>range</code> or <code>namedRangeId</code> or <code>tableId</code> may be set.</p></td></tr><tr><td><code>tableId</code></td><td><p><code>string</code></p><p>The table this protected range is backed by, if any.</p><p>When writing, only one of <code>range</code> or <code>namedRangeId</code> or <code>tableId</code> may be set.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The description of this protected range.</p></td></tr><tr><td><code>warningOnly</code></td><td><p><code>boolean</code></p><p>True if this protected range will show a warning when editing. Warning-based protection means that every user can edit data in the protected range, except editing will prompt a warning asking the user to confirm the edit.</p><p>When writing: if this field is true, then <code>editors</code> are ignored. Additionally, if this field is changed from true to false and the <code>editors</code> field is not set (nor included in the field mask), then the editors will be set to all the editors in the document.</p></td></tr><tr><td><code>requestingUserCanEdit</code></td><td><p><code>boolean</code></p><p>True if the user who requested this protected range can edit the protected area. This field is read-only.</p></td></tr><tr><td><code>unprotectedRanges[]</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The list of unprotected ranges within a protected sheet. Unprotected ranges are only supported on protected sheets.</p></td></tr><tr><td><code>editors</code></td><td><p><code>object (<code>Editors</code>)</code></p><p>The users and groups with edit access to the protected range. This field is only visible to users with edit access to the protected range and the document. Editors are not supported with <code>warningOnly</code> protection.</p></td></tr></tbody></table>

## Editors

The editors of a protected range.

JSON representation

```
{
  "users": [
    string
  ],
  "groups": [
    string
  ],
  "domainUsersCanEdit": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>users[]</code></td><td><p><code>string</code></p><p>The email addresses of users with edit access to the protected range.</p></td></tr><tr><td><code>groups[]</code></td><td><p><code>string</code></p><p>The email addresses of groups with edit access to the protected range.</p></td></tr><tr><td><code>domainUsersCanEdit</code></td><td><p><code>boolean</code></p><p>True if anyone in the document's domain has edit access to the protected range. Domain protection is only supported on documents within a domain.</p></td></tr></tbody></table>

## BasicFilter

The default filter associated with a sheet. For more information, see [Manage data visibility with filters](../../../../guides/filters.md).

JSON representation

```
{
  "range": {
    object (GridRange)
  },
  "tableId": string,
  "sortSpecs": [
    {
      object (SortSpec)
    }
  ],
  "criteria": {
    integer: {
      object (FilterCriteria)
    },
    ...
  },
  "filterSpecs": [
    {
      object (FilterSpec)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range the filter covers.</p></td></tr><tr><td><code>tableId</code></td><td><p><code>string</code></p><p>The table this filter is backed by, if any. When writing, only one of <code>range</code> or <code>tableId</code> may be set.</p></td></tr><tr><td><code>sortSpecs[]</code></td><td><p><code>object (<code>SortSpec</code>)</code></p><p>The sort order per column. Later specifications are used when values are equal in the earlier specifications.</p></td></tr><tr><td><code>criteria
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>map (key: integer, value: object (
        <code>FilterCriteria</code>))</code></p><p>The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column.</p><p>This field is deprecated in favor of <code>filterSpecs</code>.</p></td></tr><tr><td><code>filterSpecs[]</code></td><td><p><code>object (<code>FilterSpec</code>)</code></p><p>The filter criteria per column.</p><p>Both <code>criteria</code> and <code>filterSpecs</code> are populated in responses. If both fields are specified in an update request, this field takes precedence.</p></td></tr></tbody></table>

## BandedRange

A banded (alternating colors) range in a sheet.

JSON representation

```
{
  "bandedRangeId": integer,
  "bandedRangeReference": string,
  "range": {
    object (GridRange)
  },
  "rowProperties": {
    object (BandingProperties)
  },
  "columnProperties": {
    object (BandingProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>bandedRangeId</code></td><td><p><code>integer</code></p><p>The ID of the banded range. If unset, refer to <code>bandedRangeReference</code>.</p></td></tr><tr><td><code>bandedRangeReference</code></td><td><p><code>string</code></p><p>Output only. The reference of the banded range, used to identify the ID that is not supported by the <code>bandedRangeId</code>.</p></td></tr><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range over which these properties are applied.</p></td></tr><tr><td><code>rowProperties</code></td><td><p><code>object (<code>BandingProperties</code>)</code></p><p>Properties for row bands. These properties are applied on a row-by-row basis throughout all the rows in the range. At least one of <code>rowProperties</code> or <code>columnProperties</code> must be specified.</p></td></tr><tr><td><code>columnProperties</code></td><td><p><code>object (<code>BandingProperties</code>)</code></p><p>Properties for column bands. These properties are applied on a column- by-column basis throughout all the columns in the range. At least one of <code>rowProperties</code> or <code>columnProperties</code> must be specified.</p></td></tr></tbody></table>

## BandingProperties

Properties referring a single dimension (either row or column). If both `BandedRange.row_properties` and `BandedRange.column_properties` are set, the fill colors are applied to cells according to the following rules:

- `headerColor` and `footerColor` take priority over band colors.
- `firstBandColor` takes priority over `secondBandColor`.
- `rowProperties` takes priority over `columnProperties`.

For example, the first row color takes priority over the first column color, but the first column color takes priority over the second row color. Similarly, the row header takes priority over the column header in the top left cell, but the column header takes priority over the first row color if the row header is not set.

JSON representation

```
{
  "headerColor": {
    object (Color)
  },
  "headerColorStyle": {
    object (ColorStyle)
  },
  "firstBandColor": {
    object (Color)
  },
  "firstBandColorStyle": {
    object (ColorStyle)
  },
  "secondBandColor": {
    object (Color)
  },
  "secondBandColorStyle": {
    object (ColorStyle)
  },
  "footerColor": {
    object (Color)
  },
  "footerColorStyle": {
    object (ColorStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>headerColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The color of the first row or column. If this field is set, the first row or column is filled with this color and the colors alternate between <code>firstBandColor</code> and <code>secondBandColor</code> starting from the second row or column. Otherwise, the first row or column is filled with <code>firstBandColor</code> and the colors proceed to alternate as they normally would. Deprecated: Use <code>headerColorStyle</code>.</p></td></tr><tr><td><code>headerColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The color of the first row or column. If this field is set, the first row or column is filled with this color and the colors alternate between <code>firstBandColor</code> and <code>secondBandColor</code> starting from the second row or column. Otherwise, the first row or column is filled with <code>firstBandColor</code> and the colors proceed to alternate as they normally would. If <code>headerColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>firstBandColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The first color that is alternating. (Required) Deprecated: Use <code>firstBandColorStyle</code>.</p></td></tr><tr><td><code>firstBandColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The first color that is alternating. (Required) If <code>firstBandColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>secondBandColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The second color that is alternating. (Required) Deprecated: Use <code>secondBandColorStyle</code>.</p></td></tr><tr><td><code>secondBandColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The second color that is alternating. (Required) If <code>secondBandColor</code> is also set, this field takes precedence.</p></td></tr></tbody></table>

## DimensionGroup

A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet.

JSON representation

```
{
  "range": {
    object (DimensionRange)
  },
  "depth": integer,
  "collapsed": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>DimensionRange</code>)</code></p><p>The range over which this group exists.</p></td></tr><tr><td><code>depth</code></td><td><p><code>integer</code></p><p>The depth of the group, representing how many groups have a range that wholly contains the range of this group.</p></td></tr><tr><td><code>collapsed</code></td><td><p><code>boolean</code></p><p>This field is true if this group is collapsed. A collapsed group remains collapsed if an overlapping group at a shallower depth is expanded.</p><p>A true value does not imply that all dimensions within the group are hidden, since a dimension's visibility can change independently from this group property. However, when this property is updated, all dimensions within it are set to hidden if this field is true, or set to visible if this field is false.</p></td></tr></tbody></table>

## Slicer

A slicer in a sheet.

JSON representation

```
{
  "slicerId": integer,
  "spec": {
    object (SlicerSpec)
  },
  "position": {
    object (EmbeddedObjectPosition)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>slicerId</code></td><td><p><code>integer</code></p><p>The ID of the slicer.</p></td></tr><tr><td><code>spec</code></td><td><p><code>object (<code>SlicerSpec</code>)</code></p><p>The specification of the slicer.</p></td></tr><tr><td><code>position</code></td><td><p><code>object (<code>EmbeddedObjectPosition</code>)</code></p><p>The position of the slicer. Note that slicer can be positioned only on existing sheet. Also, width and height of slicer can be automatically adjusted to keep it within permitted limits.</p></td></tr></tbody></table>

## SlicerSpec

The specifications of a slicer.

JSON representation

```
{
  "dataRange": {
    object (GridRange)
  },
  "filterCriteria": {
    object (FilterCriteria)
  },
  "columnIndex": integer,
  "applyToPivotTables": boolean,
  "title": string,
  "textFormat": {
    object (TextFormat)
  },
  "backgroundColor": {
    object (Color)
  },
  "backgroundColorStyle": {
    object (ColorStyle)
  },
  "horizontalAlignment": enum (HorizontalAlign)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataRange</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The data range of the slicer.</p></td></tr><tr><td><code>filterCriteria</code></td><td><p><code>object (<code>FilterCriteria</code>)</code></p><p>The filtering criteria of the slicer.</p></td></tr><tr><td><code>columnIndex</code></td><td><p><code>integer</code></p><p>The zero-based column index in the data table on which the filter is applied to.</p></td></tr><tr><td><code>applyToPivotTables</code></td><td><p><code>boolean</code></p><p>True if the filter should apply to pivot tables. If not set, default to <code>True</code>.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the slicer.</p></td></tr><tr><td><code>textFormat</code></td><td><p><code>object (<code>TextFormat</code>)</code></p><p>The text format of title in the slicer. The link field is not supported.</p></td></tr><tr><td><code>backgroundColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The background color of the slicer. Deprecated: Use <code>backgroundColorStyle</code>.</p></td></tr><tr><td><code>backgroundColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The background color of the slicer. If <code>backgroundColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>horizontalAlignment</code></td><td><p><code>enum (<code>HorizontalAlign</code>)</code></p><p>The horizontal alignment of title in the slicer. If unspecified, defaults to <code>LEFT</code></p></td></tr></tbody></table>

## Table

A table.

JSON representation

```
{
  "tableId": string,
  "name": string,
  "range": {
    object (GridRange)
  },
  "rowsProperties": {
    object (TableRowsProperties)
  },
  "columnProperties": [
    {
      object (TableColumnProperties)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableId</code></td><td><p><code>string</code></p><p>The id of the table.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The table name. This is unique to all tables in the same spreadsheet.</p></td></tr><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The table range.</p></td></tr><tr><td><code>rowsProperties</code></td><td><p><code>object (<code>TableRowsProperties</code>)</code></p><p>The table rows properties.</p></td></tr><tr><td><code>columnProperties[]</code></td><td><p><code>object (<code>TableColumnProperties</code>)</code></p><p>The table column properties.</p></td></tr></tbody></table>

## TableRowsProperties

The table row properties.

JSON representation

```
{
  "headerColorStyle": {
    object (ColorStyle)
  },
  "firstBandColorStyle": {
    object (ColorStyle)
  },
  "secondBandColorStyle": {
    object (ColorStyle)
  },
  "footerColorStyle": {
    object (ColorStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>headerColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The color of the header row. If this field is set, the header row is filled with the specified color. Otherwise, the header row is filled with a default color.</p></td></tr><tr><td><code>firstBandColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The first color that is alternating. If this field is set, the first banded row is filled with the specified color. Otherwise, the first banded row is filled with a default color.</p></td></tr><tr><td><code>secondBandColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The second color that is alternating. If this field is set, the second banded row is filled with the specified color. Otherwise, the second banded row is filled with a default color.</p></td></tr></tbody></table>

## TableColumnProperties

The table column.

JSON representation

```
{
  "columnIndex": integer,
  "columnName": string,
  "columnType": enum (ColumnType),
  "dataValidationRule": {
    object (TableColumnDataValidationRule)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>columnIndex</code></td><td><p><code>integer</code></p><p>The 0-based column index. This index is relative to its position in the table and is not necessarily the same as the column index in the sheet.</p></td></tr><tr><td><code>columnName</code></td><td><p><code>string</code></p><p>The column name.</p></td></tr><tr><td><code>columnType</code></td><td><p><code>enum (<code>ColumnType</code>)</code></p><p>The column type.</p></td></tr><tr><td><code>dataValidationRule</code></td><td><p><code>object (<code>TableColumnDataValidationRule</code>)</code></p><p>The column data validation rule. Only set for dropdown column type.</p></td></tr></tbody></table>

## ColumnType

The column type for a given column in a table.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>COLUMN_TYPE_UNSPECIFIED</code></td><td>An unspecified column type.</td></tr><tr><td><code>DOUBLE</code></td><td>The number column type.</td></tr><tr><td><code>CURRENCY</code></td><td>The currency column type.</td></tr><tr><td><code>PERCENT</code></td><td>The percent column type.</td></tr><tr><td><code>DATE</code></td><td>The date column type.</td></tr><tr><td><code>TIME</code></td><td>The time column type.</td></tr><tr><td><code>DATE_TIME</code></td><td>The date and time column type.</td></tr><tr><td><code>TEXT</code></td><td>The text column type.</td></tr><tr><td><code>BOOLEAN</code></td><td>The boolean column type.</td></tr><tr><td><code>FILES_CHIP</code></td><td>The files chip column type</td></tr><tr><td><code>PEOPLE_CHIP</code></td><td>The people chip column type</td></tr><tr><td><code>FINANCE_CHIP</code></td><td>The finance chip column type</td></tr><tr><td><code>PLACE_CHIP</code></td><td>The place chip column type</td></tr><tr><td><code>RATINGS_CHIP</code></td><td>The ratings chip column type</td></tr></tbody></table>

## TableColumnDataValidationRule

A data validation rule for a column in a table.

JSON representation

```
{
  "condition": {
    object (BooleanCondition)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>condition</code></td><td><p><code>object (<code>BooleanCondition</code>)</code></p><p>The condition that data in the cell must match. Valid only if the [BooleanCondition.type] is ONE_OF_LIST.</p></td></tr></tbody></table>
