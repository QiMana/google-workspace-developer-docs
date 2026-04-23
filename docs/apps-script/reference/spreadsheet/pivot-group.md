---
source: https://developers.google.com/apps-script/reference/spreadsheet/pivot-group
root: apps-script
fetched_at: 2026-04-23T15:21:43.506Z
---

# Class PivotGroup

## Page Summary

- PivotGroup provides methods to access and modify pivot table breakout groups.
- You can add or remove manual grouping rules and clear existing grouping rules or sorting.
- Methods are available to get details about the group, such as its dimension, index, parent pivot table, and source data column.
- You can control the display of labels and totals, and set date-time or histogram grouping rules.
- Sorting can be set to ascending or descending, and you can sort by a specific pivot value.

Access and modify pivot table breakout groups.

## Detailed documentation

### addManualGroupingRule(groupName, groupMembers)

Adds a manual grouping rule for this pivot group.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `groupName` | `String` | The name of this grouping rule. |
| `groupMembers` | `Object[]` | The values that are included in this grouping rule. |

#### Return

`PivotGroup` — the pivot group for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### areLabelsRepeated()

Returns whether labels are displayed as repeated.

#### Return

`Boolean` — `true` if labels are repeated; otherwise returns `false`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clearGroupingRule()

Removes any grouping rules from this pivot group.

#### Return

`PivotGroup` — the pivot group for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clearSort()

Removes any sorting applied to this group.

#### Return

`PivotGroup` — the pivot group for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDateTimeGroupingRule()

Returns the date-time grouping rule on the pivot group, or `null` if no date-time grouping rule is set.

#### Return

`DateTimeGroupingRule|null` — The date-time grouping rule.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDimension()

Returns whether this is a row or column group.

#### Return

`Dimension` — the dimension representing this group's type

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getGroupLimit()

Returns the pivot group limit on the pivot group. Returns `null` if no pivot group limit is set.

#### Return

`PivotGroupLimit|null` — The pivot group limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getIndex()

Returns the index of this pivot group in the current group order.

#### Return

`Integer` — the pivot group's index

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getPivotTable()

Returns the `PivotTable` which this grouping belongs to.

#### Return

`PivotTable` — the pivot table this group belongs to.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSourceDataColumn()

Returns the number of the source data column this group summarizes. This index is 1-based, if this group summarizes source data in column "A" of the spreadsheet this method returns `1`.

#### Return

`Integer` — the source data column number

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSourceDataSourceColumn()

Returns the data source column the pivot group operates on. Returns `null` if the pivot table is not a {DataSourcePivotTableApi}.

#### Return

`DataSourceColumn|null` — The data source column the pivot group operates on.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### hideRepeatedLabels()

Hides repeated labels for this grouping. If labels are already hidden this results in a no-op. If this method is called before there are multiple row or column groupings, when an additional grouping is added repeated labels are hidden.

#### Return

`PivotGroup` — the pivot group for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isSortAscending()

Returns `true` if the sort is ascending, returns `false` if the sort order is descending.

#### Return

`Boolean` — `true` if the sort order is ascending.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### moveToIndex(index)

Moves this group to the specified position in the current list of row or column groups. These indices are 0-based. For example, if this group should be moved to the first position this method should be called with `0`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `index` | `Integer` | The index to move this grouping to. |

#### Return

`PivotGroup` — the pivot group for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### remove()

Removes this pivot group from the table.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### removeManualGroupingRule(groupName)

Removes the manual grouping rule with the specified `groupName`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `groupName` | `String` | The name of the grouping rule to remove. |

#### Return

`PivotGroup` — the pivot group for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### resetDisplayName()

Resets the display name of this group in the pivot table to its default value.

#### Return

`PivotGroup` — the pivot group for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setDateTimeGroupingRule(dateTimeGroupingRuleType)

Sets the date-time grouping rule on the pivot group.

To remove the rule, use `clearGroupingRule()`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dateTimeGroupingRuleType` | `DateTimeGroupingRuleType` | The rule type to set. |

#### Return

`PivotGroup` — The pivot group, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setDisplayName(name)

Sets the display name of this group in the pivot table.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The display name to set. |

#### Return

`PivotGroup` — the pivot group for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setGroupLimit(countLimit)

Sets the pivot group limit on the pivot group. The operation is only supported for `DataSourcePivotTable`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `countLimit` | `Integer` | The count limit of rows or columns to set. Must be positive. |

#### Return

`PivotGroup` — The pivot group for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setHistogramGroupingRule(minValue, maxValue, intervalSize)

Sets a histogram grouping rule for this pivot group. A histogram rule organizes values in a source data column into buckets of a constant size. All values from `minValue` to `maxValue` are placed into groups of size `interval`. All values below `minValue` are placed into one bucket, as are all values greater than `maxValue`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `minValue` | `Integer` | The minimum value for items to be placed into buckets. Values less than this are combined into a single bucket. |
| `maxValue` | `Integer` | The maximum value for items to be placed into buckets. Values greater than this are combined into a single bucket. |
| `intervalSize` | `Integer` |  |

#### Return

`PivotGroup` — the pivot group for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### showRepeatedLabels()

When there is more than one row or column grouping, this method displays this grouping's label for each entry of the subsequent grouping. If labels are already repeated this results in a no-op. If this method is called before there are multiple row or column groupings, when an additional grouping is added repeated labels are shown.

#### Return

`PivotGroup` — the pivot group for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### showTotals(showTotals)

Sets whether to show total values for this pivot group in the table.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `showTotals` | `Boolean` | Whether to show totals or not. |

#### Return

`PivotGroup` — the pivot group for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### sortAscending()

Sets the sort order to be ascending.

#### Return

`PivotGroup` — the pivot group for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### sortBy(value, oppositeGroupValues)

Sorts this group by the specified `PivotValue` for the values from the `oppositeGroupValues`.

```
// Sorts the item group by the "SUM of Quantity" pivot value for the specified
// salespersons.
const sheet = SpreadsheetApp.getActiveSheet();
const pivotTable = sheet.getPivotTables()[0];
const itemGroup = pivotTable.getRowGroups()[0];
const sumQuantityValue = pivotTable.getPivotValues()[0];
itemGroup.sortBy(sumQuantityValue, ['Beth', 'Amir', 'Devyn']);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `PivotValue` | The pivot value to sort by. |
| `oppositeGroupValues` | `Object[]` | The values of an opposite pivot group (a column group if sorting a row group, or a row group if sorting a column group) that are used to sort. The order of these values determines precedence for tie breaking. |

#### Return

`PivotGroup` — the pivot group for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### sortDescending()

Sets the sort order to be descending.

#### Return

`PivotGroup` — the pivot group for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### totalsAreShown()

Returns whether total values are currently shown for this pivot group.

#### Return

`Boolean` — `true` if total values are displayed for this pivot group; otherwise returns `false`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
