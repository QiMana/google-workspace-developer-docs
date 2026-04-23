---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/response
root: workspace
fetched_at: 2026-04-23T15:31:36.887Z
---

# Responses

## Response

A single response from an update.

JSON representation

```
{

  "addNamedRange": {
    object (AddNamedRangeResponse)
  },
  "addSheet": {
    object (AddSheetResponse)
  },
  "addFilterView": {
    object (AddFilterViewResponse)
  },
  "duplicateFilterView": {
    object (DuplicateFilterViewResponse)
  },
  "duplicateSheet": {
    object (DuplicateSheetResponse)
  },
  "findReplace": {
    object (FindReplaceResponse)
  },
  "updateEmbeddedObjectPosition": {
    object (UpdateEmbeddedObjectPositionResponse)
  },
  "updateConditionalFormatRule": {
    object (UpdateConditionalFormatRuleResponse)
  },
  "deleteConditionalFormatRule": {
    object (DeleteConditionalFormatRuleResponse)
  },
  "addProtectedRange": {
    object (AddProtectedRangeResponse)
  },
  "addChart": {
    object (AddChartResponse)
  },
  "addBanding": {
    object (AddBandingResponse)
  },
  "createDeveloperMetadata": {
    object (CreateDeveloperMetadataResponse)
  },
  "updateDeveloperMetadata": {
    object (UpdateDeveloperMetadataResponse)
  },
  "deleteDeveloperMetadata": {
    object (DeleteDeveloperMetadataResponse)
  },
  "addDimensionGroup": {
    object (AddDimensionGroupResponse)
  },
  "deleteDimensionGroup": {
    object (DeleteDimensionGroupResponse)
  },
  "trimWhitespace": {
    object (TrimWhitespaceResponse)
  },
  "deleteDuplicates": {
    object (DeleteDuplicatesResponse)
  },
  "addSlicer": {
    object (AddSlicerResponse)
  },
  "addDataSource": {
    object (AddDataSourceResponse)
  },
  "updateDataSource": {
    object (UpdateDataSourceResponse)
  },
  "refreshDataSource": {
    object (RefreshDataSourceResponse)
  },
  "cancelDataSourceRefresh": {
    object (CancelDataSourceRefreshResponse)
  },
  "addTable": {
    object (AddTableResponse)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kind of reply. May have no fields set if the request had no response. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>addNamedRange</code></td><td><p><code>object (<code>AddNamedRangeResponse</code>)</code></p><p>A reply from adding a named range.</p></td></tr><tr><td><code>addSheet</code></td><td><p><code>object (<code>AddSheetResponse</code>)</code></p><p>A reply from adding a sheet.</p></td></tr><tr><td><code>addFilterView</code></td><td><p><code>object (<code>AddFilterViewResponse</code>)</code></p><p>A reply from adding a filter view.</p></td></tr><tr><td><code>duplicateFilterView</code></td><td><p><code>object (<code>DuplicateFilterViewResponse</code>)</code></p><p>A reply from duplicating a filter view.</p></td></tr><tr><td><code>duplicateSheet</code></td><td><p><code>object (<code>DuplicateSheetResponse</code>)</code></p><p>A reply from duplicating a sheet.</p></td></tr><tr><td><code>findReplace</code></td><td><p><code>object (<code>FindReplaceResponse</code>)</code></p><p>A reply from doing a find/replace.</p></td></tr><tr><td><code>updateEmbeddedObjectPosition</code></td><td><p><code>object (<code>UpdateEmbeddedObjectPositionResponse</code>)</code></p><p>A reply from updating an embedded object's position.</p></td></tr><tr><td><code>updateConditionalFormatRule</code></td><td><p><code>object (<code>UpdateConditionalFormatRuleResponse</code>)</code></p><p>A reply from updating a conditional format rule.</p></td></tr><tr><td><code>deleteConditionalFormatRule</code></td><td><p><code>object (<code>DeleteConditionalFormatRuleResponse</code>)</code></p><p>A reply from deleting a conditional format rule.</p></td></tr><tr><td><code>addProtectedRange</code></td><td><p><code>object (<code>AddProtectedRangeResponse</code>)</code></p><p>A reply from adding a protected range.</p></td></tr><tr><td><code>addChart</code></td><td><p><code>object (<code>AddChartResponse</code>)</code></p><p>A reply from adding a chart.</p></td></tr><tr><td><code>addBanding</code></td><td><p><code>object (<code>AddBandingResponse</code>)</code></p><p>A reply from adding a banded range.</p></td></tr><tr><td><code>addDimensionGroup</code></td><td><p><code>object (<code>AddDimensionGroupResponse</code>)</code></p><p>A reply from adding a dimension group.</p></td></tr><tr><td><code>deleteDimensionGroup</code></td><td><p><code>object (<code>DeleteDimensionGroupResponse</code>)</code></p><p>A reply from deleting a dimension group.</p></td></tr><tr><td><code>trimWhitespace</code></td><td><p><code>object (<code>TrimWhitespaceResponse</code>)</code></p><p>A reply from trimming whitespace.</p></td></tr><tr><td><code>deleteDuplicates</code></td><td><p><code>object (<code>DeleteDuplicatesResponse</code>)</code></p><p>A reply from removing rows containing duplicate values.</p></td></tr><tr><td><code>addSlicer</code></td><td><p><code>object (<code>AddSlicerResponse</code>)</code></p><p>A reply from adding a slicer.</p></td></tr><tr><td><code>addDataSource</code></td><td><p><code>object (<code>AddDataSourceResponse</code>)</code></p><p>A reply from adding a data source.</p></td></tr><tr><td><code>updateDataSource</code></td><td><p><code>object (<code>UpdateDataSourceResponse</code>)</code></p><p>A reply from updating a data source.</p></td></tr><tr><td><code>refreshDataSource</code></td><td><p><code>object (<code>RefreshDataSourceResponse</code>)</code></p><p>A reply from refreshing data source objects.</p></td></tr><tr><td><code>cancelDataSourceRefresh</code></td><td><p><code>object (<code>CancelDataSourceRefreshResponse</code>)</code></p><p>A reply from cancelling data source object refreshes.</p></td></tr><tr><td><code>addTable</code></td><td><p><code>object (<code>AddTableResponse</code>)</code></p><p>A reply from adding a table.</p></td></tr></tbody></table>

## AddNamedRangeResponse

The result of adding a named range.

JSON representation

```
{
  "namedRange": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>namedRange</code></td><td><p>The named range to add.</p></td></tr></tbody></table>

## AddSheetResponse

The result of adding a sheet.

JSON representation

```
{
  "properties": {
    object (SheetProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>properties</code></td><td><p><code>object (<code>SheetProperties</code>)</code></p><p>The properties of the newly added sheet.</p></td></tr></tbody></table>

## AddFilterViewResponse

The result of adding a filter view.

JSON representation

```
{
  "filter": {
    object (FilterView)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>filter</code></td><td><p><code>object (<code>FilterView</code>)</code></p><p>The newly added filter view.</p></td></tr></tbody></table>

## DuplicateFilterViewResponse

The result of a filter view being duplicated.

JSON representation

```
{
  "filter": {
    object (FilterView)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>filter</code></td><td><p><code>object (<code>FilterView</code>)</code></p><p>The newly created filter.</p></td></tr></tbody></table>

## DuplicateSheetResponse

The result of duplicating a sheet.

JSON representation

```
{
  "properties": {
    object (SheetProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>properties</code></td><td><p><code>object (<code>SheetProperties</code>)</code></p><p>The properties of the duplicate sheet.</p></td></tr></tbody></table>

## FindReplaceResponse

The result of the find/replace.

JSON representation

```
{
  "valuesChanged": integer,
  "formulasChanged": integer,
  "rowsChanged": integer,
  "sheetsChanged": integer,
  "occurrencesChanged": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>valuesChanged</code></td><td><p><code>integer</code></p><p>The number of non-formula cells changed.</p></td></tr><tr><td><code>formulasChanged</code></td><td><p><code>integer</code></p><p>The number of formula cells changed.</p></td></tr><tr><td><code>rowsChanged</code></td><td><p><code>integer</code></p><p>The number of rows changed.</p></td></tr><tr><td><code>sheetsChanged</code></td><td><p><code>integer</code></p><p>The number of sheets changed.</p></td></tr><tr><td><code>occurrencesChanged</code></td><td><p><code>integer</code></p><p>The number of occurrences (possibly multiple within a cell) changed. For example, if replacing <code>"e"</code> with <code>"o"</code> in <code>"Google Sheets"</code>, this would be <code>"3"</code> because <code>"Google Sheets"</code> -> <code>"Googlo Shoots"</code>.</p></td></tr></tbody></table>

## UpdateEmbeddedObjectPositionResponse

The result of updating an embedded object's position.

JSON representation

```
{
  "position": {
    object (EmbeddedObjectPosition)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>position</code></td><td><p><code>object (<code>EmbeddedObjectPosition</code>)</code></p><p>The new position of the embedded object.</p></td></tr></tbody></table>

## UpdateConditionalFormatRuleResponse

The result of updating a conditional format rule.

JSON representation

```
{
  "newRule": {
    object (ConditionalFormatRule)
  },
  "newIndex": integer,

  "oldRule": {
    object (ConditionalFormatRule)
  },
  "oldIndex": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>newRule</code></td><td><p><code>object (<code>ConditionalFormatRule</code>)</code></p><p>The new rule that replaced the old rule (if replacing), or the rule that was moved (if moved)</p></td></tr><tr><td><code>newIndex</code></td><td><p><code>integer</code></p><p>The index of the new rule.</p></td></tr><tr><td colspan="2">Union field <code>old_info</code>. Information about the prior rule. <code>old_info</code> can be only one of the following:</td></tr><tr><td><code>oldRule</code></td><td><p><code>object (<code>ConditionalFormatRule</code>)</code></p><p>The old (deleted) rule. Not set if a rule was moved (because it is the same as <code>newRule</code>).</p></td></tr><tr><td><code>oldIndex</code></td><td><p><code>integer</code></p><p>The old index of the rule. Not set if a rule was replaced (because it is the same as <code>newIndex</code>).</p></td></tr></tbody></table>

## DeleteConditionalFormatRuleResponse

The result of deleting a conditional format rule.

JSON representation

```
{
  "rule": {
    object (ConditionalFormatRule)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>rule</code></td><td><p><code>object (<code>ConditionalFormatRule</code>)</code></p><p>The rule that was deleted.</p></td></tr></tbody></table>

## AddProtectedRangeResponse

The result of adding a new protected range.

JSON representation

```
{
  "protectedRange": {
    object (ProtectedRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>protectedRange</code></td><td><p><code>object (<code>ProtectedRange</code>)</code></p><p>The newly added protected range.</p></td></tr></tbody></table>

## AddChartResponse

The result of adding a chart to a spreadsheet.

JSON representation

```
{
  "chart": {
    object (EmbeddedChart)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>chart</code></td><td><p><code>object (<code>EmbeddedChart</code>)</code></p><p>The newly added chart.</p></td></tr></tbody></table>

## AddBandingResponse

The result of adding a banded range.

JSON representation

```
{
  "bandedRange": {
    object (BandedRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>bandedRange</code></td><td><p><code>object (<code>BandedRange</code>)</code></p><p>The banded range that was added.</p></td></tr></tbody></table>

## CreateDeveloperMetadataResponse

JSON representation

```
{
  "developerMetadata": {
    object (DeveloperMetadata)
  }
}
```

## UpdateDeveloperMetadataResponse

JSON representation

```
{
  "developerMetadata": [
    {
      object (DeveloperMetadata)
    }
  ]
}
```

## DeleteDeveloperMetadataResponse

JSON representation

```
{
  "deletedDeveloperMetadata": [
    {
      object (DeveloperMetadata)
    }
  ]
}
```

## AddDimensionGroupResponse

The result of adding a group.

JSON representation

```
{
  "dimensionGroups": [
    {
      object (DimensionGroup)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dimensionGroups[]</code></td><td><p><code>object (<code>DimensionGroup</code>)</code></p><p>All groups of a dimension after adding a group to that dimension.</p></td></tr></tbody></table>

## DeleteDimensionGroupResponse

The result of deleting a group.

JSON representation

```
{
  "dimensionGroups": [
    {
      object (DimensionGroup)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dimensionGroups[]</code></td><td><p><code>object (<code>DimensionGroup</code>)</code></p><p>All groups of a dimension after deleting a group from that dimension.</p></td></tr></tbody></table>

## TrimWhitespaceResponse

The result of trimming whitespace in cells.

JSON representation

```
{
  "cellsChangedCount": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>cellsChangedCount</code></td><td><p><code>integer</code></p><p>The number of cells that were trimmed of whitespace.</p></td></tr></tbody></table>

## DeleteDuplicatesResponse

The result of removing duplicates in a range.

JSON representation

```
{
  "duplicatesRemovedCount": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>duplicatesRemovedCount</code></td><td><p><code>integer</code></p><p>The number of duplicate rows removed.</p></td></tr></tbody></table>

## AddSlicerResponse

The result of adding a slicer to a spreadsheet.

JSON representation

```
{
  "slicer": {
    object (Slicer)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>slicer</code></td><td><p><code>object (<code>Slicer</code>)</code></p><p>The newly added slicer.</p></td></tr></tbody></table>

## AddDataSourceResponse

The result of adding a data source.

JSON representation

```
{
  "dataSource": {
    
  },
  "dataExecutionStatus": {
    object (DataExecutionStatus)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataSource</code></td><td><p>The data source that was created.</p></td></tr><tr><td><code>dataExecutionStatus</code></td><td><p><code>object (<code>DataExecutionStatus</code>)</code></p><p>The data execution status.</p></td></tr></tbody></table>

## UpdateDataSourceResponse

The response from updating data source.

JSON representation

```
{
  "dataSource": {
    
  },
  "dataExecutionStatus": {
    object (DataExecutionStatus)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataSource</code></td><td><p>The updated data source.</p></td></tr><tr><td><code>dataExecutionStatus</code></td><td><p><code>object (<code>DataExecutionStatus</code>)</code></p><p>The data execution status.</p></td></tr></tbody></table>

## RefreshDataSourceResponse

The response from refreshing one or multiple data source objects.

JSON representation

```
{
  "statuses": [
    {
      object (RefreshDataSourceObjectExecutionStatus)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>statuses[]</code></td><td><p><code>object (<code>RefreshDataSourceObjectExecutionStatus</code>)</code></p><p>All the refresh status for the data source object references specified in the request. If <code>isAll</code> is specified, the field contains only those in failure status.</p></td></tr></tbody></table>

## RefreshDataSourceObjectExecutionStatus

The execution status of refreshing one data source object.

JSON representation

```
{
  "reference": {
    object (DataSourceObjectReference)
  },
  "dataExecutionStatus": {
    object (DataExecutionStatus)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reference</code></td><td><p><code>object (<code>DataSourceObjectReference</code>)</code></p><p>Reference to a data source object being refreshed.</p></td></tr><tr><td><code>dataExecutionStatus</code></td><td><p><code>object (<code>DataExecutionStatus</code>)</code></p><p>The data execution status.</p></td></tr></tbody></table>

## CancelDataSourceRefreshResponse

The response from cancelling one or multiple data source object refreshes.

JSON representation

```
{
  "statuses": [
    {
      object (CancelDataSourceRefreshStatus)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>statuses[]</code></td><td><p><code>object (<code>CancelDataSourceRefreshStatus</code>)</code></p><p>The cancellation statuses of refreshes of all data source objects specified in the request. If <code>isAll</code> is specified, the field contains only those in failure status. Refreshing and canceling refresh the same data source object is also not allowed in the same <code>batchUpdate</code>.</p></td></tr></tbody></table>

## CancelDataSourceRefreshStatus

The status of cancelling a single data source object refresh.

JSON representation

```
{
  "reference": {
    object (DataSourceObjectReference)
  },
  "refreshCancellationStatus": {
    object (RefreshCancellationStatus)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reference</code></td><td><p><code>object (<code>DataSourceObjectReference</code>)</code></p><p>Reference to the data source object whose refresh is being cancelled.</p></td></tr><tr><td><code>refreshCancellationStatus</code></td><td><p><code>object (<code>RefreshCancellationStatus</code>)</code></p><p>The cancellation status.</p></td></tr></tbody></table>

## RefreshCancellationStatus

The status of a refresh cancellation.

You can send a `cancel request` to explicitly cancel one or multiple data source object refreshes.

JSON representation

```
{
  "state": enum (RefreshCancellationState),
  "errorCode": enum (RefreshCancellationErrorCode)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>state</code></td><td><p><code>enum (<code>RefreshCancellationState</code>)</code></p><p>The state of a call to cancel a refresh in Sheets.</p></td></tr><tr><td><code>errorCode</code></td><td><p><code>enum (<code>RefreshCancellationErrorCode</code>)</code></p><p>The error code.</p></td></tr></tbody></table>

## RefreshCancellationState

An enumeration of refresh cancellation states.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>REFRESH_CANCELLATION_STATE_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>CANCEL_SUCCEEDED</code></td><td>The API call to Sheets to cancel a refresh has succeeded. This does not mean that the cancel happened successfully, but that the call has been made successfully.</td></tr><tr><td><code>CANCEL_FAILED</code></td><td>The API call to Sheets to cancel a refresh has failed.</td></tr></tbody></table>

## RefreshCancellationErrorCode

An enumeration of the refresh cancellation error codes.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>REFRESH_CANCELLATION_ERROR_CODE_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>EXECUTION_NOT_FOUND</code></td><td>Execution to be cancelled not found in the query engine or in Sheets.</td></tr><tr><td><code>CANCEL_PERMISSION_DENIED</code></td><td>The user does not have permission to cancel the query.</td></tr><tr><td><code>QUERY_EXECUTION_COMPLETED</code></td><td>The query execution has already completed and thus could not be cancelled.</td></tr><tr><td><code>CONCURRENT_CANCELLATION</code></td><td>There is already another cancellation in process.</td></tr><tr><td><code>CANCEL_OTHER_ERROR</code></td><td>All other errors.</td></tr></tbody></table>

## AddTableResponse

The result of adding a table.

JSON representation

```
{
  "table": {
    object (Table)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>table</code></td><td><p><code>object (<code>Table</code>)</code></p><p>Output only. The table that was added.</p></td></tr></tbody></table>
