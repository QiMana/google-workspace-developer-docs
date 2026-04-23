---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request
root: workspace
fetched_at: 2026-04-23T15:31:35.534Z
---

# Requests

## Request

A single kind of update to apply to a spreadsheet.

JSON representation

```
{

  "updateSpreadsheetProperties": {
    object (UpdateSpreadsheetPropertiesRequest)
  },
  "updateSheetProperties": {
    object (UpdateSheetPropertiesRequest)
  },
  "updateDimensionProperties": {
    object (UpdateDimensionPropertiesRequest)
  },
  "updateNamedRange": {
    object (UpdateNamedRangeRequest)
  },
  "repeatCell": {
    object (RepeatCellRequest)
  },
  "addNamedRange": {
    object (AddNamedRangeRequest)
  },
  "deleteNamedRange": {
    object (DeleteNamedRangeRequest)
  },
  "addSheet": {
    object (AddSheetRequest)
  },
  "deleteSheet": {
    object (DeleteSheetRequest)
  },
  "autoFill": {
    object (AutoFillRequest)
  },
  "cutPaste": {
    object (CutPasteRequest)
  },
  "copyPaste": {
    object (CopyPasteRequest)
  },
  "mergeCells": {
    object (MergeCellsRequest)
  },
  "unmergeCells": {
    object (UnmergeCellsRequest)
  },
  "updateBorders": {
    object (UpdateBordersRequest)
  },
  "updateCells": {
    object (UpdateCellsRequest)
  },
  "addFilterView": {
    object (AddFilterViewRequest)
  },
  "appendCells": {
    object (AppendCellsRequest)
  },
  "clearBasicFilter": {
    object (ClearBasicFilterRequest)
  },
  "deleteDimension": {
    object (DeleteDimensionRequest)
  },
  "deleteEmbeddedObject": {
    object (DeleteEmbeddedObjectRequest)
  },
  "deleteFilterView": {
    object (DeleteFilterViewRequest)
  },
  "duplicateFilterView": {
    object (DuplicateFilterViewRequest)
  },
  "duplicateSheet": {
    object (DuplicateSheetRequest)
  },
  "findReplace": {
    object (FindReplaceRequest)
  },
  "insertDimension": {
    object (InsertDimensionRequest)
  },
  "insertRange": {
    object (InsertRangeRequest)
  },
  "moveDimension": {
    object (MoveDimensionRequest)
  },
  "updateEmbeddedObjectPosition": {
    object (UpdateEmbeddedObjectPositionRequest)
  },
  "pasteData": {
    object (PasteDataRequest)
  },
  "textToColumns": {
    object (TextToColumnsRequest)
  },
  "updateFilterView": {
    object (UpdateFilterViewRequest)
  },
  "deleteRange": {
    object (DeleteRangeRequest)
  },
  "appendDimension": {
    object (AppendDimensionRequest)
  },
  "addConditionalFormatRule": {
    object (AddConditionalFormatRuleRequest)
  },
  "updateConditionalFormatRule": {
    object (UpdateConditionalFormatRuleRequest)
  },
  "deleteConditionalFormatRule": {
    object (DeleteConditionalFormatRuleRequest)
  },
  "sortRange": {
    object (SortRangeRequest)
  },
  "setDataValidation": {
    object (SetDataValidationRequest)
  },
  "setBasicFilter": {
    object (SetBasicFilterRequest)
  },
  "addProtectedRange": {
    object (AddProtectedRangeRequest)
  },
  "updateProtectedRange": {
    object (UpdateProtectedRangeRequest)
  },
  "deleteProtectedRange": {
    object (DeleteProtectedRangeRequest)
  },
  "autoResizeDimensions": {
    object (AutoResizeDimensionsRequest)
  },
  "addChart": {
    object (AddChartRequest)
  },
  "updateChartSpec": {
    object (UpdateChartSpecRequest)
  },
  "updateBanding": {
    object (UpdateBandingRequest)
  },
  "addBanding": {
    object (AddBandingRequest)
  },
  "deleteBanding": {
    object (DeleteBandingRequest)
  },
  "createDeveloperMetadata": {
    object (CreateDeveloperMetadataRequest)
  },
  "updateDeveloperMetadata": {
    object (UpdateDeveloperMetadataRequest)
  },
  "deleteDeveloperMetadata": {
    object (DeleteDeveloperMetadataRequest)
  },
  "randomizeRange": {
    object (RandomizeRangeRequest)
  },
  "addDimensionGroup": {
    object (AddDimensionGroupRequest)
  },
  "deleteDimensionGroup": {
    object (DeleteDimensionGroupRequest)
  },
  "updateDimensionGroup": {
    object (UpdateDimensionGroupRequest)
  },
  "trimWhitespace": {
    object (TrimWhitespaceRequest)
  },
  "deleteDuplicates": {
    object (DeleteDuplicatesRequest)
  },
  "updateEmbeddedObjectBorder": {
    object (UpdateEmbeddedObjectBorderRequest)
  },
  "addSlicer": {
    object (AddSlicerRequest)
  },
  "updateSlicerSpec": {
    object (UpdateSlicerSpecRequest)
  },
  "addDataSource": {
    object (AddDataSourceRequest)
  },
  "updateDataSource": {
    object (UpdateDataSourceRequest)
  },
  "deleteDataSource": {
    object (DeleteDataSourceRequest)
  },
  "refreshDataSource": {
    object (RefreshDataSourceRequest)
  },
  "cancelDataSourceRefresh": {
    object (CancelDataSourceRefreshRequest)
  },
  "addTable": {
    object (AddTableRequest)
  },
  "updateTable": {
    object (UpdateTableRequest)
  },
  "deleteTable": {
    object (DeleteTableRequest)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kind of update. Exactly one field is required. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>updateSpreadsheetProperties</code></td><td><p><code>object (<code>UpdateSpreadsheetPropertiesRequest</code>)</code></p><p>Updates the spreadsheet's properties.</p></td></tr><tr><td><code>updateSheetProperties</code></td><td><p><code>object (<code>UpdateSheetPropertiesRequest</code>)</code></p><p>Updates a sheet's properties.</p></td></tr><tr><td><code>updateDimensionProperties</code></td><td><p><code>object (<code>UpdateDimensionPropertiesRequest</code>)</code></p><p>Updates dimensions' properties.</p></td></tr><tr><td><code>updateNamedRange</code></td><td><p><code>object (<code>UpdateNamedRangeRequest</code>)</code></p><p>Updates a named range.</p></td></tr><tr><td><code>repeatCell</code></td><td><p><code>object (<code>RepeatCellRequest</code>)</code></p><p>Repeats a single cell across a range.</p></td></tr><tr><td><code>addNamedRange</code></td><td><p><code>object (<code>AddNamedRangeRequest</code>)</code></p><p>Adds a named range.</p></td></tr><tr><td><code>deleteNamedRange</code></td><td><p><code>object (<code>DeleteNamedRangeRequest</code>)</code></p><p>Deletes a named range.</p></td></tr><tr><td><code>addSheet</code></td><td><p><code>object (<code>AddSheetRequest</code>)</code></p><p>Adds a sheet.</p></td></tr><tr><td><code>deleteSheet</code></td><td><p><code>object (<code>DeleteSheetRequest</code>)</code></p><p>Deletes a sheet.</p></td></tr><tr><td><code>autoFill</code></td><td><p><code>object (<code>AutoFillRequest</code>)</code></p><p>Automatically fills in more data based on existing data.</p></td></tr><tr><td><code>cutPaste</code></td><td><p><code>object (<code>CutPasteRequest</code>)</code></p><p>Cuts data from one area and pastes it to another.</p></td></tr><tr><td><code>copyPaste</code></td><td><p><code>object (<code>CopyPasteRequest</code>)</code></p><p>Copies data from one area and pastes it to another.</p></td></tr><tr><td><code>mergeCells</code></td><td><p><code>object (<code>MergeCellsRequest</code>)</code></p><p>Merges cells together.</p></td></tr><tr><td><code>unmergeCells</code></td><td><p><code>object (<code>UnmergeCellsRequest</code>)</code></p><p>Unmerges merged cells.</p></td></tr><tr><td><code>updateBorders</code></td><td><p><code>object (<code>UpdateBordersRequest</code>)</code></p><p>Updates the borders in a range of cells.</p></td></tr><tr><td><code>updateCells</code></td><td><p><code>object (<code>UpdateCellsRequest</code>)</code></p><p>Updates many cells at once.</p></td></tr><tr><td><code>addFilterView</code></td><td><p><code>object (<code>AddFilterViewRequest</code>)</code></p><p>Adds a filter view.</p></td></tr><tr><td><code>appendCells</code></td><td><p><code>object (<code>AppendCellsRequest</code>)</code></p><p>Appends cells after the last row with data in a sheet.</p></td></tr><tr><td><code>clearBasicFilter</code></td><td><p><code>object (<code>ClearBasicFilterRequest</code>)</code></p><p>Clears the basic filter on a sheet.</p></td></tr><tr><td><code>deleteDimension</code></td><td><p><code>object (<code>DeleteDimensionRequest</code>)</code></p><p>Deletes rows or columns in a sheet.</p></td></tr><tr><td><code>deleteEmbeddedObject</code></td><td><p><code>object (<code>DeleteEmbeddedObjectRequest</code>)</code></p><p>Deletes an embedded object (e.g, chart, image) in a sheet.</p></td></tr><tr><td><code>deleteFilterView</code></td><td><p><code>object (<code>DeleteFilterViewRequest</code>)</code></p><p>Deletes a filter view from a sheet.</p></td></tr><tr><td><code>duplicateFilterView</code></td><td><p><code>object (<code>DuplicateFilterViewRequest</code>)</code></p><p>Duplicates a filter view.</p></td></tr><tr><td><code>duplicateSheet</code></td><td><p><code>object (<code>DuplicateSheetRequest</code>)</code></p><p>Duplicates a sheet.</p></td></tr><tr><td><code>findReplace</code></td><td><p><code>object (<code>FindReplaceRequest</code>)</code></p><p>Finds and replaces occurrences of some text with other text.</p></td></tr><tr><td><code>insertDimension</code></td><td><p><code>object (<code>InsertDimensionRequest</code>)</code></p><p>Inserts new rows or columns in a sheet.</p></td></tr><tr><td><code>insertRange</code></td><td><p><code>object (<code>InsertRangeRequest</code>)</code></p><p>Inserts new cells in a sheet, shifting the existing cells.</p></td></tr><tr><td><code>moveDimension</code></td><td><p><code>object (<code>MoveDimensionRequest</code>)</code></p><p>Moves rows or columns to another location in a sheet.</p></td></tr><tr><td><code>updateEmbeddedObjectPosition</code></td><td><p><code>object (<code>UpdateEmbeddedObjectPositionRequest</code>)</code></p><p>Updates an embedded object's (e.g. chart, image) position.</p></td></tr><tr><td><code>pasteData</code></td><td><p><code>object (<code>PasteDataRequest</code>)</code></p><p>Pastes data (HTML or delimited) into a sheet.</p></td></tr><tr><td><code>textToColumns</code></td><td><p><code>object (<code>TextToColumnsRequest</code>)</code></p><p>Converts a column of text into many columns of text.</p></td></tr><tr><td><code>updateFilterView</code></td><td><p><code>object (<code>UpdateFilterViewRequest</code>)</code></p><p>Updates the properties of a filter view.</p></td></tr><tr><td><code>deleteRange</code></td><td><p><code>object (<code>DeleteRangeRequest</code>)</code></p><p>Deletes a range of cells from a sheet, shifting the remaining cells.</p></td></tr><tr><td><code>appendDimension</code></td><td><p><code>object (<code>AppendDimensionRequest</code>)</code></p><p>Appends dimensions to the end of a sheet.</p></td></tr><tr><td><code>addConditionalFormatRule</code></td><td><p><code>object (<code>AddConditionalFormatRuleRequest</code>)</code></p><p>Adds a new conditional format rule.</p></td></tr><tr><td><code>updateConditionalFormatRule</code></td><td><p><code>object (<code>UpdateConditionalFormatRuleRequest</code>)</code></p><p>Updates an existing conditional format rule.</p></td></tr><tr><td><code>deleteConditionalFormatRule</code></td><td><p><code>object (<code>DeleteConditionalFormatRuleRequest</code>)</code></p><p>Deletes an existing conditional format rule.</p></td></tr><tr><td><code>sortRange</code></td><td><p><code>object (<code>SortRangeRequest</code>)</code></p><p>Sorts data in a range.</p></td></tr><tr><td><code>setDataValidation</code></td><td><p><code>object (<code>SetDataValidationRequest</code>)</code></p><p>Sets data validation for one or more cells.</p></td></tr><tr><td><code>setBasicFilter</code></td><td><p><code>object (<code>SetBasicFilterRequest</code>)</code></p><p>Sets the basic filter on a sheet.</p></td></tr><tr><td><code>addProtectedRange</code></td><td><p><code>object (<code>AddProtectedRangeRequest</code>)</code></p><p>Adds a protected range.</p></td></tr><tr><td><code>updateProtectedRange</code></td><td><p><code>object (<code>UpdateProtectedRangeRequest</code>)</code></p><p>Updates a protected range.</p></td></tr><tr><td><code>deleteProtectedRange</code></td><td><p><code>object (<code>DeleteProtectedRangeRequest</code>)</code></p><p>Deletes a protected range.</p></td></tr><tr><td><code>autoResizeDimensions</code></td><td><p><code>object (<code>AutoResizeDimensionsRequest</code>)</code></p><p>Automatically resizes one or more dimensions based on the contents of the cells in that dimension.</p></td></tr><tr><td><code>addChart</code></td><td><p><code>object (<code>AddChartRequest</code>)</code></p><p>Adds a chart.</p></td></tr><tr><td><code>updateChartSpec</code></td><td><p><code>object (<code>UpdateChartSpecRequest</code>)</code></p><p>Updates a chart's specifications.</p></td></tr><tr><td><code>updateBanding</code></td><td><p><code>object (<code>UpdateBandingRequest</code>)</code></p><p>Updates a banded range</p></td></tr><tr><td><code>addBanding</code></td><td><p><code>object (<code>AddBandingRequest</code>)</code></p><p>Adds a new banded range</p></td></tr><tr><td><code>deleteBanding</code></td><td><p><code>object (<code>DeleteBandingRequest</code>)</code></p><p>Removes a banded range</p></td></tr><tr><td><code>randomizeRange</code></td><td><p><code>object (<code>RandomizeRangeRequest</code>)</code></p><p>Randomizes the order of the rows in a range.</p></td></tr><tr><td><code>addDimensionGroup</code></td><td><p><code>object (<code>AddDimensionGroupRequest</code>)</code></p><p>Creates a group over the specified range.</p></td></tr><tr><td><code>deleteDimensionGroup</code></td><td><p><code>object (<code>DeleteDimensionGroupRequest</code>)</code></p><p>Deletes a group over the specified range.</p></td></tr><tr><td><code>updateDimensionGroup</code></td><td><p><code>object (<code>UpdateDimensionGroupRequest</code>)</code></p><p>Updates the state of the specified group.</p></td></tr><tr><td><code>trimWhitespace</code></td><td><p><code>object (<code>TrimWhitespaceRequest</code>)</code></p><p>Trims cells of whitespace (such as spaces, tabs, or new lines).</p></td></tr><tr><td><code>deleteDuplicates</code></td><td><p><code>object (<code>DeleteDuplicatesRequest</code>)</code></p><p>Removes rows containing duplicate values in specified columns of a cell range.</p></td></tr><tr><td><code>updateEmbeddedObjectBorder</code></td><td><p><code>object (<code>UpdateEmbeddedObjectBorderRequest</code>)</code></p><p>Updates an embedded object's border.</p></td></tr><tr><td><code>addSlicer</code></td><td><p><code>object (<code>AddSlicerRequest</code>)</code></p><p>Adds a slicer.</p></td></tr><tr><td><code>updateSlicerSpec</code></td><td><p><code>object (<code>UpdateSlicerSpecRequest</code>)</code></p><p>Updates a slicer's specifications.</p></td></tr><tr><td><code>addDataSource</code></td><td><p><code>object (<code>AddDataSourceRequest</code>)</code></p><p>Adds a data source.</p></td></tr><tr><td><code>updateDataSource</code></td><td><p><code>object (<code>UpdateDataSourceRequest</code>)</code></p><p>Updates a data source.</p></td></tr><tr><td><code>deleteDataSource</code></td><td><p><code>object (<code>DeleteDataSourceRequest</code>)</code></p><p>Deletes a data source.</p></td></tr><tr><td><code>refreshDataSource</code></td><td><p><code>object (<code>RefreshDataSourceRequest</code>)</code></p><p>Refreshes one or multiple data sources and associated dbobjects.</p></td></tr><tr><td><code>cancelDataSourceRefresh</code></td><td><p><code>object (<code>CancelDataSourceRefreshRequest</code>)</code></p><p>Cancels refreshes of one or multiple data sources and associated dbobjects.</p></td></tr><tr><td><code>addTable</code></td><td><p><code>object (<code>AddTableRequest</code>)</code></p><p>Adds a table.</p></td></tr><tr><td><code>updateTable</code></td><td><p><code>object (<code>UpdateTableRequest</code>)</code></p><p>Updates a table.</p></td></tr><tr><td><code>deleteTable</code></td><td><p><code>object (<code>DeleteTableRequest</code>)</code></p><p>A request for deleting a table.</p></td></tr></tbody></table>

## UpdateSpreadsheetPropertiesRequest

Updates properties of a spreadsheet.

JSON representation

```
{
  "properties": {
    
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>properties</code></td><td><p>The properties to update.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated. At least one field must be specified. The root 'properties' is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr></tbody></table>

## UpdateSheetPropertiesRequest

Updates properties of the sheet with the specified `sheetId`.

JSON representation

```
{
  "properties": {
    object (SheetProperties)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>properties</code></td><td><p><code>object (<code>SheetProperties</code>)</code></p><p>The properties to update.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>properties</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr></tbody></table>

## UpdateDimensionPropertiesRequest

Updates properties of dimensions within the specified range.

JSON representation

```
{
  "properties": {
    object (DimensionProperties)
  },
  "fields": string,

  "range": {
    object (DimensionRange)
  },
  "dataSourceSheetRange": {
    object (DataSourceSheetDimensionRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>properties</code></td><td><p><code>object (<code>DimensionProperties</code>)</code></p><p>Properties to update.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>properties</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr><tr><td colspan="2">Union field <code>dimension_range</code>. The dimension range. <code>dimension_range</code> can be only one of the following:</td></tr><tr><td><code>range</code></td><td><p><code>object (<code>DimensionRange</code>)</code></p><p>The rows or columns to update.</p></td></tr><tr><td><code>dataSourceSheetRange</code></td><td><p><code>object (<code>DataSourceSheetDimensionRange</code>)</code></p><p>The columns on a data source sheet to update.</p></td></tr></tbody></table>

## DataSourceSheetDimensionRange

A range along a single dimension on a `DATA_SOURCE` sheet.

JSON representation

```
{
  "sheetId": integer,
  "columnReferences": [
    {
      object (DataSourceColumnReference)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The ID of the data source sheet the range is on.</p></td></tr><tr><td><code>columnReferences[]</code></td><td><p><code>object (<code>DataSourceColumnReference</code>)</code></p><p>The columns on the data source sheet.</p></td></tr></tbody></table>

## UpdateNamedRangeRequest

JSON representation

```
{
  "namedRange": {
    
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>namedRange</code></td><td><p>The named range to update with the new properties.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>namedRange</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr></tbody></table>

## RepeatCellRequest

Updates all cells in the range to the values in the given Cell object. Only the fields listed in the `fields` field are updated; others are unchanged.

If writing a cell with a formula, the formula's ranges will automatically increment for each field in the range. For example, if writing a cell with formula `=A1` into range B2:C4, B2 would be `=A1`, B3 would be `=A2`, B4 would be `=A3`, C2 would be `=B1`, C3 would be `=B2`, C4 would be `=B3`.

To keep the formula's ranges static, use the `$` indicator. For example, use the formula `=$A$1` to prevent both the row and the column from incrementing.

JSON representation

```
{
  "range": {
    object (GridRange)
  },
  "cell": {
    object (CellData)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range to repeat the cell in.</p></td></tr><tr><td><code>cell</code></td><td><p><code>object (<code>CellData</code>)</code></p><p>The data to write.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>cell</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr></tbody></table>

## AddNamedRangeRequest

Adds a named range to the spreadsheet.

JSON representation

```
{
  "namedRange": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>namedRange</code></td><td><p>The named range to add. The field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a range that already exists.)</p></td></tr></tbody></table>

## DeleteNamedRangeRequest

Removes the named range with the given ID from the spreadsheet.

JSON representation

```
{
  "namedRangeId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>namedRangeId</code></td><td><p><code>string</code></p><p>The ID of the named range to delete.</p></td></tr></tbody></table>

## AddSheetRequest

Adds a new sheet. When a sheet is added at a given index, all subsequent sheets' indexes are incremented. To add an object sheet, use `AddChartRequest` instead and specify `EmbeddedObjectPosition.sheetId` or `EmbeddedObjectPosition.newSheet`.

JSON representation

```
{
  "properties": {
    object (SheetProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>properties</code></td><td><p><code>object (<code>SheetProperties</code>)</code></p><p>The properties the new sheet should have. All properties are optional. The <code>sheetId</code> field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a sheet that already exists.)</p></td></tr></tbody></table>

## DeleteSheetRequest

Deletes the requested sheet.

JSON representation

```
{
  "sheetId": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The ID of the sheet to delete.</p><p>If the sheet is of <code>DATA_SOURCE</code> type, the associated is also deleted.</p></td></tr></tbody></table>

## AutoFillRequest

Fills in more data based on existing data.

JSON representation

```
{
  "useAlternateSeries": boolean,

  "range": {
    object (GridRange)
  },
  "sourceAndDestination": {
    object (SourceAndDestination)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>useAlternateSeries</code></td><td><p><code>boolean</code></p><p>True if we should generate data with the "alternate" series. This differs based on the type and amount of source data.</p></td></tr><tr><td colspan="2">Union field <code>area</code>. The area to autofill. <code>area</code> can be only one of the following:</td></tr><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range to autofill. This will examine the range and detect the location that has data and automatically fill that data in to the rest of the range.</p></td></tr><tr><td><code>sourceAndDestination</code></td><td><p><code>object (<code>SourceAndDestination</code>)</code></p><p>The source and destination areas to autofill. This explicitly lists the source of the autofill and where to extend that data.</p></td></tr></tbody></table>

## SourceAndDestination

A combination of a source range and how to extend that source.

JSON representation

```
{
  "source": {
    object (GridRange)
  },
  "dimension": enum (Dimension),
  "fillLength": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>source</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The location of the data to use as the source of the autofill.</p></td></tr><tr><td><code>dimension</code></td><td><p><code>enum (<code>Dimension</code>)</code></p><p>The dimension that data should be filled into.</p></td></tr><tr><td><code>fillLength</code></td><td><p><code>integer</code></p><p>The number of rows or columns that data should be filled into. Positive numbers expand beyond the last row or last column of the source. Negative numbers expand before the first row or first column of the source.</p></td></tr></tbody></table>

## CutPasteRequest

Moves data from the source to the destination.

JSON representation

```
{
  "source": {
    object (GridRange)
  },
  "destination": {
    object (GridCoordinate)
  },
  "pasteType": enum (PasteType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>source</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The source data to cut.</p></td></tr><tr><td><code>destination</code></td><td><p><code>object (<code>GridCoordinate</code>)</code></p><p>The top-left coordinate where the data should be pasted.</p></td></tr><tr><td><code>pasteType</code></td><td><p><code>enum (<code>PasteType</code>)</code></p><p>What kind of data to paste. All the source data will be cut, regardless of what is pasted.</p></td></tr></tbody></table>

## PasteType

What kind of data should be pasted.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PASTE_NORMAL</code></td><td>Paste values, formulas, formats, and merges.</td></tr><tr><td><code>PASTE_VALUES</code></td><td>Paste the values ONLY without formats, formulas, or merges.</td></tr><tr><td><code>PASTE_FORMAT</code></td><td>Paste the format and data validation only.</td></tr><tr><td><code>PASTE_NO_BORDERS</code></td><td>Like <code>PASTE_NORMAL</code> but without borders.</td></tr><tr><td><code>PASTE_FORMULA</code></td><td>Paste the formulas only.</td></tr><tr><td><code>PASTE_DATA_VALIDATION</code></td><td>Paste the data validation only.</td></tr><tr><td><code>PASTE_CONDITIONAL_FORMATTING</code></td><td>Paste the conditional formatting rules only.</td></tr></tbody></table>

## CopyPasteRequest

Copies data from the source to the destination.

JSON representation

```
{
  "source": {
    object (GridRange)
  },
  "destination": {
    object (GridRange)
  },
  "pasteType": enum (PasteType),
  "pasteOrientation": enum (PasteOrientation)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>source</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The source range to copy.</p></td></tr><tr><td><code>destination</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The location to paste to. If the range covers a span that's a multiple of the source's height or width, then the data will be repeated to fill in the destination range. If the range is smaller than the source range, the entire source data will still be copied (beyond the end of the destination range).</p></td></tr><tr><td><code>pasteType</code></td><td><p><code>enum (<code>PasteType</code>)</code></p><p>What kind of data to paste.</p></td></tr><tr><td><code>pasteOrientation</code></td><td><p><code>enum (<code>PasteOrientation</code>)</code></p><p>How that data should be oriented when pasting.</p></td></tr></tbody></table>

## PasteOrientation

How a paste operation should be performed.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>NORMAL</code></td><td>Paste normally.</td></tr><tr><td><code>TRANSPOSE</code></td><td>Paste transposed, where all rows become columns and vice versa.</td></tr></tbody></table>

## MergeCellsRequest

Merges all cells in the range.

JSON representation

```
{
  "range": {
    object (GridRange)
  },
  "mergeType": enum (MergeType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range of cells to merge.</p></td></tr><tr><td><code>mergeType</code></td><td><p><code>enum (<code>MergeType</code>)</code></p><p>How the cells should be merged.</p></td></tr></tbody></table>

## MergeType

The type of merge to create.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>MERGE_ALL</code></td><td>Create a single merge from the range</td></tr><tr><td><code>MERGE_COLUMNS</code></td><td>Create a merge for each column in the range</td></tr><tr><td><code>MERGE_ROWS</code></td><td>Create a merge for each row in the range</td></tr></tbody></table>

## UnmergeCellsRequest

Unmerges cells in the given range.

JSON representation

```
{
  "range": {
    object (GridRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range within which all cells should be unmerged. If the range spans multiple merges, all will be unmerged. The range must not partially span any merge.</p></td></tr></tbody></table>

## UpdateBordersRequest

Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest:

1. range: A1:A5 `{ top: RED, bottom: WHITE }`
2. range: A1:A5 `{ left: BLUE }`

That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to `NONE`.

JSON representation

```
{
  "range": {
    object (GridRange)
  },
  "top": {
    object (Border)
  },
  "bottom": {
    object (Border)
  },
  "left": {
    object (Border)
  },
  "right": {
    object (Border)
  },
  "innerHorizontal": {
    object (Border)
  },
  "innerVertical": {
    object (Border)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range whose borders should be updated.</p></td></tr><tr><td><code>top</code></td><td><p><code>object (<code>Border</code>)</code></p><p>The border to put at the top of the range.</p></td></tr><tr><td><code>bottom</code></td><td><p><code>object (<code>Border</code>)</code></p><p>The border to put at the bottom of the range.</p></td></tr><tr><td><code>left</code></td><td><p><code>object (<code>Border</code>)</code></p><p>The border to put at the left of the range.</p></td></tr><tr><td><code>right</code></td><td><p><code>object (<code>Border</code>)</code></p><p>The border to put at the right of the range.</p></td></tr><tr><td><code>innerHorizontal</code></td><td><p><code>object (<code>Border</code>)</code></p><p>The horizontal border to put within the range.</p></td></tr><tr><td><code>innerVertical</code></td><td><p><code>object (<code>Border</code>)</code></p><p>The vertical border to put within the range.</p></td></tr></tbody></table>

## UpdateCellsRequest

Updates all cells in a range with new data.

JSON representation

```
{
  "rows": [
    {
      object (RowData)
    }
  ],
  "fields": string,

  "start": {
    object (GridCoordinate)
  },
  "range": {
    object (GridRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>rows[]</code></td><td><p><code>object (<code>RowData</code>)</code></p><p>The data to write.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr><tr><td colspan="2">Union field <code>area</code>. The location data should be written. Exactly one value must be set. <code>area</code> can be only one of the following:</td></tr><tr><td><code>start</code></td><td><p><code>object (<code>GridCoordinate</code>)</code></p><p>The coordinate to start writing data at. Any number of rows and columns (including a different number of columns per row) may be written.</p></td></tr><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range to write data to.</p><p>If the data in rows does not cover the entire requested range, the fields matching those set in <code>fields</code> will be cleared.</p></td></tr></tbody></table>

## AddFilterViewRequest

Adds a filter view.

JSON representation

```
{
  "filter": {
    object (FilterView)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>filter</code></td><td><p><code>object (<code>FilterView</code>)</code></p><p>The filter to add. The <code>filterViewId</code> field is optional. If one is not set, an ID will be randomly generated. (It is an error to specify the ID of a filter that already exists.)</p></td></tr></tbody></table>

## AppendCellsRequest

Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.

JSON representation

```
{
  "sheetId": integer,
  "rows": [
    {
      object (RowData)
    }
  ],
  "fields": string,

  "tableId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The sheet ID to append the data to.</p></td></tr><tr><td><code>rows[]</code></td><td><p><code>object (<code>RowData</code>)</code></p><p>The data to append.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr><tr><td colspan="2">Union field <code>area</code>. The location data should be written. <code>area</code> can be only one of the following:</td></tr><tr><td><code>tableId</code></td><td><p><code>string</code></p><p>The ID of the table to append data to. The data will be only appended to the table body.</p><p>This field also takes precedence over the <code>sheetId</code> field.</p></td></tr></tbody></table>

## ClearBasicFilterRequest

Clears the basic filter, if any exists on the sheet.

JSON representation

```
{
  "sheetId": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The sheet ID on which the basic filter should be cleared.</p></td></tr></tbody></table>

## DeleteDimensionRequest

Deletes the dimensions from the sheet.

JSON representation

```
{
  "range": {
    object (DimensionRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>DimensionRange</code>)</code></p><p>The dimensions to delete from the sheet.</p></td></tr></tbody></table>

## DeleteEmbeddedObjectRequest

Deletes the embedded object with the given ID.

JSON representation

```
{
  "objectId": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>integer</code></p><p>The ID of the embedded object to delete.</p></td></tr></tbody></table>

## DeleteFilterViewRequest

Deletes a particular filter view.

JSON representation

```
{
  "filterId": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>filterId</code></td><td><p><code>integer</code></p><p>The ID of the filter to delete.</p></td></tr></tbody></table>

## DuplicateFilterViewRequest

Duplicates a particular filter view.

JSON representation

```
{
  "filterId": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>filterId</code></td><td><p><code>integer</code></p><p>The ID of the filter being duplicated.</p></td></tr></tbody></table>

## DuplicateSheetRequest

Duplicates the contents of a sheet.

JSON representation

```
{
  "sourceSheetId": integer,
  "insertSheetIndex": integer,
  "newSheetId": integer,
  "newSheetName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sourceSheetId</code></td><td><p><code>integer</code></p><p>The sheet to duplicate.</p><p>If the source sheet is of <code>DATA_SOURCE</code> type, its backing is also duplicated and associated with the new copy of the sheet. No data execution is triggered, the grid data of this sheet is also copied over but only available after the batch request completes.</p></td></tr><tr><td><code>insertSheetIndex</code></td><td><p><code>integer</code></p><p>The zero-based index where the new sheet should be inserted. The index of all sheets after this are incremented.</p></td></tr><tr><td><code>newSheetId</code></td><td><p><code>integer</code></p><p>If set, the ID of the new sheet. If not set, an ID is chosen. If set, the ID must not conflict with any existing sheet ID. If set, it must be non-negative.</p></td></tr><tr><td><code>newSheetName</code></td><td><p><code>string</code></p><p>The name of the new sheet. If empty, a new name is chosen for you.</p></td></tr></tbody></table>

## FindReplaceRequest

Finds and replaces data in cells over a range, sheet, or all sheets.

JSON representation

```
{
  "find": string,
  "replacement": string,
  "matchCase": boolean,
  "matchEntireCell": boolean,
  "searchByRegex": boolean,
  "includeFormulas": boolean,

  "range": {
    object (GridRange)
  },
  "sheetId": integer,
  "allSheets": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>find</code></td><td><p><code>string</code></p><p>The value to search.</p></td></tr><tr><td><code>replacement</code></td><td><p><code>string</code></p><p>The value to use as the replacement.</p></td></tr><tr><td><code>matchCase</code></td><td><p><code>boolean</code></p><p>True if the search is case sensitive.</p></td></tr><tr><td><code>matchEntireCell</code></td><td><p><code>boolean</code></p><p>True if the find value should match the entire cell.</p></td></tr><tr><td><code>searchByRegex</code></td><td><p><code>boolean</code></p><p>True if the find value is a regex. The regular expression and replacement should follow Java regex rules at <a href="https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html">https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html</a>. The replacement string is allowed to refer to capturing groups. For example, if one cell has the contents <code>"Google Sheets"</code> and another has <code>"Google Docs"</code>, then searching for <code>"o.* (.*)"</code> with a replacement of <code>"$1 Rocks"</code> would change the contents of the cells to <code>"GSheets Rocks"</code> and <code>"GDocs Rocks"</code> respectively.</p></td></tr><tr><td><code>includeFormulas</code></td><td><p><code>boolean</code></p><p>True if the search should include cells with formulas. False to skip cells with formulas.</p></td></tr><tr><td colspan="2">Union field <code>scope</code>. The scope over which to find/replace -- one and only one must be set. <code>scope</code> can be only one of the following:</td></tr><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range to find/replace over.</p></td></tr><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The sheet to find/replace over.</p></td></tr><tr><td><code>allSheets</code></td><td><p><code>boolean</code></p><p>True to find/replace over all sheets.</p></td></tr></tbody></table>

## InsertDimensionRequest

Inserts rows or columns in a sheet at a particular index.

JSON representation

```
{
  "range": {
    object (DimensionRange)
  },
  "inheritFromBefore": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>DimensionRange</code>)</code></p><p>The dimensions to insert. Both the start and end indexes must be bounded.</p></td></tr><tr><td><code>inheritFromBefore</code></td><td><p><code>boolean</code></p><p>Whether dimension properties should be extended from the dimensions before or after the newly inserted dimensions. True to inherit from the dimensions before (in which case the start index must be greater than 0), and false to inherit from the dimensions after.</p><p>For example, if row index 0 has red background and row index 1 has a green background, then inserting 2 rows at index 1 can inherit either the green or red background. If <code>inheritFromBefore</code> is true, the two new rows will be red (because the row before the insertion point was red), whereas if <code>inheritFromBefore</code> is false, the two new rows will be green (because the row after the insertion point was green).</p></td></tr></tbody></table>

## InsertRangeRequest

Inserts cells into a range, shifting the existing cells over or down.

JSON representation

```
{
  "range": {
    object (GridRange)
  },
  "shiftDimension": enum (Dimension)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range to insert new cells into. The range is constrained to the current sheet boundaries.</p></td></tr><tr><td><code>shiftDimension</code></td><td><p><code>enum (<code>Dimension</code>)</code></p><p>The dimension which will be shifted when inserting cells. If <code>ROWS</code>, existing cells will be shifted down. If <code>COLUMNS</code>, existing cells will be shifted right.</p></td></tr></tbody></table>

## MoveDimensionRequest

Moves one or more rows or columns.

JSON representation

```
{
  "source": {
    object (DimensionRange)
  },
  "destinationIndex": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>source</code></td><td><p><code>object (<code>DimensionRange</code>)</code></p><p>The source dimensions to move.</p></td></tr><tr><td><code>destinationIndex</code></td><td><p><code>integer</code></p><p>The zero-based start index of where to move the source data to, based on the coordinates <em>before</em> the source data is removed from the grid. Existing data will be shifted down or right (depending on the dimension) to make room for the moved dimensions. The source dimensions are removed from the grid, so the the data may end up in a different index than specified.</p><p>For example, given <code>A1..A5</code> of <code>0, 1, 2, 3, 4</code> and wanting to move <code>"1"</code> and <code>"2"</code> to between <code>"3"</code> and <code>"4"</code>, the source would be <code>ROWS [1..3)</code>,and the destination index would be <code>"4"</code> (the zero-based index of row 5). The end result would be <code>A1..A5</code> of <code>0, 3, 1, 2, 4</code>.</p></td></tr></tbody></table>

## UpdateEmbeddedObjectPositionRequest

Update an embedded object's position (such as a moving or resizing a chart or image).

JSON representation

```
{
  "objectId": integer,
  "newPosition": {
    object (EmbeddedObjectPosition)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>integer</code></p><p>The ID of the object to moved.</p></td></tr><tr><td><code>newPosition</code></td><td><p><code>object (<code>EmbeddedObjectPosition</code>)</code></p><p>An explicit position to move the embedded object to. If <code>newPosition.sheetId</code> is set, a new sheet with that ID will be created. If <code>newPosition.newSheet</code> is set to true, a new sheet will be created with an ID that will be chosen for you.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields of <code>OverlayPosition</code> that should be updated when setting a new position. Used only if <code>newPosition.overlayPosition</code> is set, in which case at least one field must be specified. The root <code>newPosition.overlayPosition</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr></tbody></table>

## PasteDataRequest

Inserts data into the spreadsheet starting at the specified coordinate.

JSON representation

```
{
  "coordinate": {
    object (GridCoordinate)
  },
  "data": string,
  "type": enum (PasteType),

  "delimiter": string,
  "html": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>coordinate</code></td><td><p><code>object (<code>GridCoordinate</code>)</code></p><p>The coordinate at which the data should start being inserted.</p></td></tr><tr><td><code>data</code></td><td><p><code>string</code></p><p>The data to insert.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>PasteType</code>)</code></p><p>How the data should be pasted.</p></td></tr><tr><td colspan="2">Union field <code>kind</code>. How to interpret the data, exactly one value must be set. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>delimiter</code></td><td><p><code>string</code></p><p>The delimiter in the data.</p></td></tr><tr><td><code>html</code></td><td><p><code>boolean</code></p><p>True if the data is HTML.</p></td></tr></tbody></table>

## TextToColumnsRequest

Splits a column of text into multiple columns, based on a delimiter in each cell.

JSON representation

```
{
  "source": {
    object (GridRange)
  },
  "delimiter": string,
  "delimiterType": enum (DelimiterType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>source</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The source data range. This must span exactly one column.</p></td></tr><tr><td><code>delimiter</code></td><td><p><code>string</code></p><p>The delimiter to use. Used only if delimiterType is <code>CUSTOM</code>.</p></td></tr><tr><td><code>delimiterType</code></td><td><p><code>enum (<code>DelimiterType</code>)</code></p><p>The delimiter type to use.</p></td></tr></tbody></table>

## DelimiterType

The delimiter to split on.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DELIMITER_TYPE_UNSPECIFIED</code></td><td>Default value. This value must not be used.</td></tr><tr><td><code>COMMA</code></td><td>","</td></tr><tr><td><code>SEMICOLON</code></td><td>";"</td></tr><tr><td><code>PERIOD</code></td><td>"."</td></tr><tr><td><code>SPACE</code></td><td>" "</td></tr><tr><td><code>CUSTOM</code></td><td>A custom value as defined in delimiter.</td></tr><tr><td><code>AUTODETECT</code></td><td>Automatically detect columns.</td></tr></tbody></table>

## UpdateFilterViewRequest

Updates properties of the filter view.

JSON representation

```
{
  "filter": {
    object (FilterView)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>filter</code></td><td><p><code>object (<code>FilterView</code>)</code></p><p>The new properties of the filter view.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>filter</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr></tbody></table>

## DeleteRangeRequest

Deletes a range of cells, shifting other cells into the deleted area.

JSON representation

```
{
  "range": {
    object (GridRange)
  },
  "shiftDimension": enum (Dimension)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range of cells to delete.</p></td></tr><tr><td><code>shiftDimension</code></td><td><p><code>enum (<code>Dimension</code>)</code></p><p>The dimension from which deleted cells will be replaced with. If <code>ROWS</code>, existing cells will be shifted upward to replace the deleted cells. If <code>COLUMNS</code>, existing cells will be shifted left to replace the deleted cells.</p></td></tr></tbody></table>

## AppendDimensionRequest

Appends rows or columns to the end of a sheet.

JSON representation

```
{
  "sheetId": integer,
  "dimension": enum (Dimension),
  "length": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The sheet to append rows or columns to.</p></td></tr><tr><td><code>dimension</code></td><td><p><code>enum (<code>Dimension</code>)</code></p><p>Whether rows or columns should be appended.</p></td></tr><tr><td><code>length</code></td><td><p><code>integer</code></p><p>The number of rows or columns to append.</p></td></tr></tbody></table>

## AddConditionalFormatRuleRequest

Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented.

JSON representation

```
{
  "rule": {
    object (ConditionalFormatRule)
  },
  "index": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>rule</code></td><td><p><code>object (<code>ConditionalFormatRule</code>)</code></p><p>The rule to add.</p></td></tr><tr><td><code>index</code></td><td><p><code>integer</code></p><p>The zero-based index where the rule should be inserted.</p></td></tr></tbody></table>

## UpdateConditionalFormatRuleRequest

Updates a conditional format rule at the given index, or moves a conditional format rule to another index.

JSON representation

```
{
  "index": integer,
  "sheetId": integer,

  "rule": {
    object (ConditionalFormatRule)
  },
  "newIndex": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>index</code></td><td><p><code>integer</code></p><p>The zero-based index of the rule that should be replaced or moved.</p></td></tr><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The sheet of the rule to move. Required if <code>newIndex</code> is set, unused otherwise.</p></td></tr><tr><td colspan="2">Union field <code>instruction</code>. The kind of update that should happen. <code>instruction</code> can be only one of the following:</td></tr><tr><td><code>rule</code></td><td><p><code>object (<code>ConditionalFormatRule</code>)</code></p><p>The rule that should replace the rule at the given index.</p></td></tr><tr><td><code>newIndex</code></td><td><p><code>integer</code></p><p>The zero-based new index the rule should end up at.</p></td></tr></tbody></table>

## DeleteConditionalFormatRuleRequest

Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented.

JSON representation

```
{
  "index": integer,
  "sheetId": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>index</code></td><td><p><code>integer</code></p><p>The zero-based index of the rule to be deleted.</p></td></tr><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The sheet the rule is being deleted from.</p></td></tr></tbody></table>

## SortRangeRequest

Sorts data in rows based on a sort order per column.

JSON representation

```
{
  "range": {
    object (GridRange)
  },
  "sortSpecs": [
    {
      object (SortSpec)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range to sort.</p></td></tr><tr><td><code>sortSpecs[]</code></td><td><p><code>object (<code>SortSpec</code>)</code></p><p>The sort order per column. Later specifications are used when values are equal in the earlier specifications.</p></td></tr></tbody></table>

## SetDataValidationRequest

Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified.

JSON representation

```
{
  "range": {
    object (GridRange)
  },
  "rule": {
    object (DataValidationRule)
  },
  "filteredRowsIncluded": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range the data validation rule should apply to.</p></td></tr><tr><td><code>rule</code></td><td><p><code>object (<code>DataValidationRule</code>)</code></p><p>The data validation rule to set on each cell in the range, or empty to clear the data validation in the range.</p></td></tr><tr><td><code>filteredRowsIncluded</code></td><td><p><code>boolean</code></p><p>Optional. If true, the data validation rule will be applied to the filtered rows as well.</p></td></tr></tbody></table>

## SetBasicFilterRequest

Sets the basic filter associated with a sheet.

JSON representation

```
{
  "filter": {
    object (BasicFilter)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>filter</code></td><td><p><code>object (<code>BasicFilter</code>)</code></p><p>The filter to set.</p></td></tr></tbody></table>

## AddProtectedRangeRequest

Adds a new protected range.

JSON representation

```
{
  "protectedRange": {
    object (ProtectedRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>protectedRange</code></td><td><p><code>object (<code>ProtectedRange</code>)</code></p><p>The protected range to be added. The <code>protectedRangeId</code> field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a range that already exists.)</p></td></tr></tbody></table>

## UpdateProtectedRangeRequest

Updates an existing protected range with the specified `protectedRangeId`.

JSON representation

```
{
  "protectedRange": {
    object (ProtectedRange)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>protectedRange</code></td><td><p><code>object (<code>ProtectedRange</code>)</code></p><p>The protected range to update with the new properties.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>protectedRange</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr></tbody></table>

## DeleteProtectedRangeRequest

Deletes the protected range with the given ID.

JSON representation

```
{
  "protectedRangeId": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>protectedRangeId</code></td><td><p><code>integer</code></p><p>The ID of the protected range to delete.</p></td></tr></tbody></table>

## AutoResizeDimensionsRequest

Automatically resizes one or more dimensions based on the contents of the cells in that dimension.

JSON representation

```
{

  "dimensions": {
    object (DimensionRange)
  },
  "dataSourceSheetDimensions": {
    object (DataSourceSheetDimensionRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>dimension_range</code>. The dimension range. <code>dimension_range</code> can be only one of the following:</td></tr><tr><td><code>dimensions</code></td><td><p><code>object (<code>DimensionRange</code>)</code></p><p>The dimensions to automatically resize.</p></td></tr><tr><td><code>dataSourceSheetDimensions</code></td><td><p><code>object (<code>DataSourceSheetDimensionRange</code>)</code></p><p>The dimensions on a data source sheet to automatically resize.</p></td></tr></tbody></table>

## AddChartRequest

Adds a chart to a sheet in the spreadsheet.

JSON representation

```
{
  "chart": {
    object (EmbeddedChart)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>chart</code></td><td><p><code>object (<code>EmbeddedChart</code>)</code></p><p>The chart that should be added to the spreadsheet, including the position where it should be placed. The <code>chartId</code> field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of an embedded object that already exists.)</p></td></tr></tbody></table>

## UpdateChartSpecRequest

Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use `UpdateEmbeddedObjectPositionRequest`.)

JSON representation

```
{
  "chartId": integer,
  "spec": {
    object (ChartSpec)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>chartId</code></td><td><p><code>integer</code></p><p>The ID of the chart to update.</p></td></tr><tr><td><code>spec</code></td><td><p><code>object (<code>ChartSpec</code>)</code></p><p>The specification to apply to the chart.</p></td></tr></tbody></table>

## UpdateBandingRequest

Updates properties of the supplied banded range.

JSON representation

```
{
  "bandedRange": {
    object (BandedRange)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>bandedRange</code></td><td><p><code>object (<code>BandedRange</code>)</code></p><p>The banded range to update with the new properties.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>bandedRange</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr></tbody></table>

## AddBandingRequest

Adds a new banded range to the spreadsheet.

JSON representation

```
{
  "bandedRange": {
    object (BandedRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>bandedRange</code></td><td><p><code>object (<code>BandedRange</code>)</code></p><p>The banded range to add. The <code>bandedRangeId</code> field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a range that already exists.)</p></td></tr></tbody></table>

## DeleteBandingRequest

Removes the banded range with the given ID from the spreadsheet.

JSON representation

```
{
  "bandedRangeId": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>bandedRangeId</code></td><td><p><code>integer</code></p><p>The ID of the banded range to delete.</p></td></tr></tbody></table>

## CreateDeveloperMetadataRequest

JSON representation

```
{
  "developerMetadata": {
    object (DeveloperMetadata)
  }
}
```

## UpdateDeveloperMetadataRequest

JSON representation

```
{
  "dataFilters": [
    {
      object (DataFilter)
    }
  ],
  "developerMetadata": {
    object (DeveloperMetadata)
  },
  "fields": string
}
```

## DeleteDeveloperMetadataRequest

JSON representation

```
{
  "dataFilter": {
    object (DataFilter)
  }
}
```

## RandomizeRangeRequest

Randomizes the order of the rows in a range.

JSON representation

```
{
  "range": {
    object (GridRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range to randomize.</p></td></tr></tbody></table>

## AddDimensionGroupRequest

Creates a group over the specified range.

If the requested range is a superset of the range of an existing group G, then the depth of G is incremented and this new group G' has the depth of that group. For example, a group \[C:D, depth 1\] + \[B:E\] results in groups \[B:E, depth 1\] and \[C:D, depth 2\]. If the requested range is a subset of the range of an existing group G, then the depth of the new group G' becomes one greater than the depth of G. For example, a group \[B:E, depth 1\] + \[C:D\] results in groups \[B:E, depth 1\] and \[C:D, depth 2\]. If the requested range starts before and ends within, or starts within and ends after, the range of an existing group G, then the range of the existing group G becomes the union of the ranges, and the new group G' has depth one greater than the depth of G and range as the intersection of the ranges. For example, a group \[B:D, depth 1\] + \[C:E\] results in groups \[B:E, depth 1\] and \[C:D, depth 2\].

JSON representation

```
{
  "range": {
    object (DimensionRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>DimensionRange</code>)</code></p><p>The range over which to create a group.</p></td></tr></tbody></table>

## DeleteDimensionGroupRequest

Deletes a group over the specified range by decrementing the depth of the dimensions in the range.

For example, assume the sheet has a depth-1 group over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the sheet with a depth-1 group over B:D and a depth-2 group over C:C.

JSON representation

```
{
  "range": {
    object (DimensionRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>DimensionRange</code>)</code></p><p>The range of the group to be deleted.</p></td></tr></tbody></table>

## UpdateDimensionGroupRequest

Updates the state of the specified group.

JSON representation

```
{
  "dimensionGroup": {
    object (DimensionGroup)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dimensionGroup</code></td><td><p><code>object (<code>DimensionGroup</code>)</code></p><p>The group whose state should be updated. The range and depth of the group should specify a valid group on the sheet, and all other fields updated.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>dimensionGroup</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr></tbody></table>

## TrimWhitespaceRequest

Trims the whitespace (such as spaces, tabs, or new lines) in every cell in the specified range. This request removes all whitespace from the start and end of each cell's text, and reduces any subsequence of remaining whitespace characters to a single space. If the resulting trimmed text starts with a '+' or '=' character, the text remains as a string value and isn't interpreted as a formula.

JSON representation

```
{
  "range": {
    object (GridRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range whose cells to trim.</p></td></tr></tbody></table>

## DeleteDuplicatesRequest

Removes rows within this range that contain values in the specified columns that are duplicates of values in any previous row. Rows with identical values but different letter cases, formatting, or formulas are considered to be duplicates.

This request also removes duplicate rows hidden from view (for example, due to a filter). When removing duplicates, the first instance of each duplicate row scanning from the top downwards is kept in the resulting range. Content outside of the specified range isn't removed, and rows considered duplicates do not have to be adjacent to each other in the range.

JSON representation

```
{
  "range": {
    object (GridRange)
  },
  "comparisonColumns": [
    {
      object (DimensionRange)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range to remove duplicates rows from.</p></td></tr><tr><td><code>comparisonColumns[]</code></td><td><p><code>object (<code>DimensionRange</code>)</code></p><p>The columns in the range to analyze for duplicate values. If no columns are selected then all columns are analyzed for duplicates.</p></td></tr></tbody></table>

## UpdateEmbeddedObjectBorderRequest

Updates an embedded object's border property.

JSON representation

```
{
  "objectId": integer,
  "border": {
    object (EmbeddedObjectBorder)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>integer</code></p><p>The ID of the embedded object to update.</p></td></tr><tr><td><code>border</code></td><td><p><code>object (<code>EmbeddedObjectBorder</code>)</code></p><p>The border that applies to the embedded object.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>border</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr></tbody></table>

## AddSlicerRequest

Adds a slicer to a sheet in the spreadsheet.

JSON representation

```
{
  "slicer": {
    object (Slicer)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>slicer</code></td><td><p><code>object (<code>Slicer</code>)</code></p><p>The slicer that should be added to the spreadsheet, including the position where it should be placed. The <code>slicerId</code> field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a slicer that already exists.)</p></td></tr></tbody></table>

## UpdateSlicerSpecRequest

Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use `UpdateEmbeddedObjectPositionRequest`.

JSON representation

```
{
  "slicerId": integer,
  "spec": {
    object (SlicerSpec)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>slicerId</code></td><td><p><code>integer</code></p><p>The id of the slicer to update.</p></td></tr><tr><td><code>spec</code></td><td><p><code>object (<code>SlicerSpec</code>)</code></p><p>The specification to apply to the slicer.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>SlicerSpec</code> is implied and should not be specified. A single "*"` can be used as short-hand for listing every field.</p></td></tr></tbody></table>

## AddDataSourceRequest

Adds a data source. After the data source is added successfully, an associated `DATA_SOURCE` sheet is created and an execution is triggered to refresh the sheet to read data from the data source.

The request requires an additional `bigquery.readonly` OAuth scope if you are adding a BigQuery data source.

JSON representation

```
{
  "dataSource": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataSource</code></td><td><p>The data source to add.</p></td></tr></tbody></table>

## UpdateDataSourceRequest

Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the associated `DATA_SOURCE` sheet to read data from the updated data source.

The request requires an additional `bigquery.readonly` OAuth scope if you are updating a BigQuery data source.

JSON representation

```
{
  "dataSource": {
    
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataSource</code></td><td><p>The data source to update.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>dataSource</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr></tbody></table>

## DeleteDataSourceRequest

Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source objects.

JSON representation

```
{
  "dataSourceId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataSourceId</code></td><td><p><code>string</code></p><p>The ID of the data source to delete.</p></td></tr></tbody></table>

## RefreshDataSourceRequest

Refreshes one or multiple data source objects in the spreadsheet by the specified references.

The request requires an additional `bigquery.readonly` OAuth scope if you are refreshing a BigQuery data source.

If there are multiple refresh requests referencing the same data source objects in one batch, only the last refresh request is processed, and all those requests will have the same response accordingly.

JSON representation

```
{
  "force": boolean,

  "references": {
    object (DataSourceObjectReferences)
  },
  "dataSourceId": string,
  "isAll": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>force</code></td><td><p><code>boolean</code></p><p>Refreshes the data source objects regardless of the current state. If not set and a referenced data source object was in error state, the refresh will fail immediately.</p></td></tr><tr><td colspan="2">Union field <code>target</code>. Specifies what to refresh. <code>target</code> can be only one of the following:</td></tr><tr><td><code>references</code></td><td><p><code>object (<code>DataSourceObjectReferences</code>)</code></p><p>References to data source objects to refresh.</p></td></tr><tr><td><code>dataSourceId</code></td><td><p><code>string</code></p><p>Reference to a . If specified, refreshes all associated data source objects for the data source.</p></td></tr><tr><td><code>isAll</code></td><td><p><code>boolean</code></p><p>Refreshes all existing data source objects in the spreadsheet.</p></td></tr></tbody></table>

## DataSourceObjectReferences

A list of references to data source objects.

JSON representation

```
{
  "references": [
    {
      object (DataSourceObjectReference)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>references[]</code></td><td><p><code>object (<code>DataSourceObjectReference</code>)</code></p><p>The references.</p></td></tr></tbody></table>

## DataSourceObjectReference

Reference to a data source object.

JSON representation

```
{

  "sheetId": string,
  "chartId": integer,
  "dataSourceTableAnchorCell": {
    object (GridCoordinate)
  },
  "dataSourcePivotTableAnchorCell": {
    object (GridCoordinate)
  },
  "dataSourceFormulaCell": {
    object (GridCoordinate)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>value</code>. The reference type. <code>value</code> can be only one of the following:</td></tr><tr><td><code>sheetId</code></td><td><p><code>string</code></p><p>References to a <code>DATA_SOURCE</code> sheet.</p></td></tr><tr><td><code>chartId</code></td><td><p><code>integer</code></p><p>References to a data source chart.</p></td></tr><tr><td><code>dataSourceTableAnchorCell</code></td><td><p><code>object (<code>GridCoordinate</code>)</code></p><p>References to a <code>DataSourceTable</code> anchored at the cell.</p></td></tr><tr><td><code>dataSourcePivotTableAnchorCell</code></td><td><p><code>object (<code>GridCoordinate</code>)</code></p><p>References to a data source <code>PivotTable</code> anchored at the cell.</p></td></tr><tr><td><code>dataSourceFormulaCell</code></td><td><p><code>object (<code>GridCoordinate</code>)</code></p><p>References to a cell containing <code>DataSourceFormula</code>.</p></td></tr></tbody></table>

## CancelDataSourceRefreshRequest

Cancels one or multiple refreshes of data source objects in the spreadsheet by the specified references.

The request requires an additional `bigquery.readonly` OAuth scope if you are cancelling a refresh on a BigQuery data source.

JSON representation

```
{

  "references": {
    object (DataSourceObjectReferences)
  },
  "dataSourceId": string,
  "isAll": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>target</code>. Specifies what to cancel. <code>target</code> can be only one of the following:</td></tr><tr><td><code>references</code></td><td><p><code>object (<code>DataSourceObjectReferences</code>)</code></p><p>References to data source objects whose refreshes are to be cancelled.</p></td></tr><tr><td><code>dataSourceId</code></td><td><p><code>string</code></p><p>Reference to a . If specified, cancels all associated data source object refreshes for this data source.</p></td></tr><tr><td><code>isAll</code></td><td><p><code>boolean</code></p><p>Cancels all existing data source object refreshes for all data sources in the spreadsheet.</p></td></tr></tbody></table>

## AddTableRequest

Adds a new table to the spreadsheet.

JSON representation

```
{
  "table": {
    object (Table)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>table</code></td><td><p><code>object (<code>Table</code>)</code></p><p>Required. The table to add.</p></td></tr></tbody></table>

## UpdateTableRequest

Updates a table in the spreadsheet.

JSON representation

```
{
  "table": {
    object (Table)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>table</code></td><td><p><code>object (<code>Table</code>)</code></p><p>Required. The table to update.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>Required. The fields that should be updated. At least one field must be specified. The root <code>table</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr></tbody></table>

## DeleteTableRequest

Removes the table with the given ID from the spreadsheet.

JSON representation

```
{
  "tableId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableId</code></td><td><p><code>string</code></p><p>The ID of the table to delete.</p></td></tr></tbody></table>
