---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/pivot-tables
root: workspace
fetched_at: 2026-04-23T15:31:33.588Z
---

# Pivot Tables

## PivotTable

A pivot table.

JSON representation

```
{
  "rows": [
    {
      object (PivotGroup)
    }
  ],
  "columns": [
    {
      object (PivotGroup)
    }
  ],
  "criteria": {
    integer: {
      object (PivotFilterCriteria)
    },
    ...
  },
  "filterSpecs": [
    {
      object (PivotFilterSpec)
    }
  ],
  "values": [
    {
      object (PivotValue)
    }
  ],
  "valueLayout": enum (PivotValueLayout),
  "dataExecutionStatus": {
    object (DataExecutionStatus)
  },

  "source": {
    object (GridRange)
  },
  "dataSourceId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>rows[]</code></td><td><p><code>object (<code>PivotGroup</code>)</code></p><p>Each row grouping in the pivot table.</p></td></tr><tr><td><code>columns[]</code></td><td><p><code>object (<code>PivotGroup</code>)</code></p><p>Each column grouping in the pivot table.</p></td></tr><tr><td><code>criteria
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>map (key: integer, value: object (
        <code>PivotFilterCriteria</code>))</code></p><p>An optional mapping of filters per source column offset.</p><p>The filters are applied before aggregating data into the pivot table. The map's key is the column offset of the source range that you want to filter, and the value is the criteria for that column.</p><p>For example, if the source was <code>C10:E15</code>, a key of <code>0</code> will have the filter for column <code>C</code>, whereas the key <code>1</code> is for column <code>D</code>.</p><p>This field is deprecated in favor of <code>filterSpecs</code>.</p></td></tr><tr><td><code>filterSpecs[]</code></td><td><p><code>object (<code>PivotFilterSpec</code>)</code></p><p>The filters applied to the source columns before aggregating data for the pivot table.</p><p>Both <code>criteria</code> and <code>filterSpecs</code> are populated in responses. If both fields are specified in an update request, this field takes precedence.</p></td></tr><tr><td><code>values[]</code></td><td><p><code>object (<code>PivotValue</code>)</code></p><p>A list of values to include in the pivot table.</p></td></tr><tr><td><code>valueLayout</code></td><td><p><code>enum (<code>PivotValueLayout</code>)</code></p><p>Whether values should be listed horizontally (as columns) or vertically (as rows).</p></td></tr><tr><td><code>dataExecutionStatus</code></td><td><p><code>object (<code>DataExecutionStatus</code>)</code></p><p>Output only. The data execution status for data source pivot tables.</p></td></tr><tr><td colspan="2">Union field <code>source_data</code>. The source of the pivot table data. <code>source_data</code> can be only one of the following:</td></tr><tr><td><code>source</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range the pivot table is reading data from.</p></td></tr><tr><td><code>dataSourceId</code></td><td><p><code>string</code></p><p>The ID of the data source the pivot table is reading data from.</p></td></tr></tbody></table>

## PivotGroup

A single grouping (either row or column) in a pivot table.

JSON representation

```
{
  "showTotals": boolean,
  "valueMetadata": [
    {
      object (PivotGroupValueMetadata)
    }
  ],
  "sortOrder": enum (SortOrder),
  "valueBucket": {
    object (PivotGroupSortValueBucket)
  },
  "repeatHeadings": boolean,
  "label": string,
  "groupRule": {
    object (PivotGroupRule)
  },
  "groupLimit": {
    object (PivotGroupLimit)
  },

  "sourceColumnOffset": integer,
  "dataSourceColumnReference": {
    object (DataSourceColumnReference)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>showTotals</code></td><td><p><code>boolean</code></p><p>True if the pivot table should include the totals for this grouping.</p></td></tr><tr><td><code>sortOrder</code></td><td><p><code>enum (<code>SortOrder</code>)</code></p><p>The order the values in this group should be sorted.</p></td></tr><tr><td><code>valueBucket</code></td><td><p><code>object (<code>PivotGroupSortValueBucket</code>)</code></p><p>The bucket of the opposite pivot group to sort by. If not specified, sorting is alphabetical by this group's values.</p></td></tr><tr><td><code>repeatHeadings</code></td><td><p><code>boolean</code></p><p>True if the headings in this pivot group should be repeated. This is only valid for row groupings and is ignored by columns.</p><p>By default, we minimize repetition of headings by not showing higher level headings where they are the same. For example, even though the third row below corresponds to "Q1 Mar", "Q1" is not shown because it is redundant with previous rows. Setting repeatHeadings to true would cause "Q1" to be repeated for "Feb" and "Mar".</p><div><pre><code>+--------------+
| Q1     | Jan |
|        | Feb |
|        | Mar |
+--------+-----+
| Q1 Total     |
+--------------+</code></pre></div></td></tr><tr><td><code>label</code></td><td><p><code>string</code></p><p>The labels to use for the row/column groups which can be customized. For example, in the following pivot table, the row label is <code>Region</code> (which could be renamed to <code>State</code>) and the column label is <code>Product</code> (which could be renamed <code>Item</code>). Pivot tables created before December 2017 do not have header labels. If you'd like to add header labels to an existing pivot table, please delete the existing pivot table and then create a new pivot table with same parameters.</p><div><pre><code>+--------------+---------+-------+
| SUM of Units | Product |       |
| Region       | Pen     | Paper |
+--------------+---------+-------+
| New York     |     345 |    98 |
| Oregon       |     234 |   123 |
| Tennessee    |     531 |   415 |
+--------------+---------+-------+
| Grand Total  |    1110 |   636 |
+--------------+---------+-------+</code></pre></div></td></tr><tr><td><code>groupRule</code></td><td><p><code>object (<code>PivotGroupRule</code>)</code></p><p>The group rule to apply to this row/column group.</p></td></tr><tr><td><code>groupLimit</code></td><td><p><code>object (<code>PivotGroupLimit</code>)</code></p><p>The count limit on rows or columns to apply to this pivot group.</p></td></tr><tr><td colspan="2">Union field <code>source</code>. The data source of the pivot group. <code>source</code> can be only one of the following:</td></tr><tr><td><code>sourceColumnOffset</code></td><td><p><code>integer</code></p><p>The column offset of the source range that this grouping is based on.</p><p>For example, if the source was <code>C10:E15</code>, a <code>sourceColumnOffset</code> of <code>0</code> means this group refers to column <code>C</code>, whereas the offset <code>1</code> would refer to column <code>D</code>.</p></td></tr><tr><td><code>dataSourceColumnReference</code></td><td><p><code>object (<code>DataSourceColumnReference</code>)</code></p><p>The reference to the data source column this grouping is based on.</p></td></tr></tbody></table>

## PivotGroupValueMetadata

JSON representation

```
{
  "value": {
    object (ExtendedValue)
  },
  "collapsed": boolean
}
```

## PivotGroupSortValueBucket

Information about which values in a pivot group should be used for sorting.

JSON representation

```
{
  "valuesIndex": integer,
  "buckets": [
    {
      object (ExtendedValue)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>valuesIndex</code></td><td><p><code>integer</code></p><p>The offset in the <code>PivotTable.values</code> list which the values in this grouping should be sorted by.</p></td></tr><tr><td><code>buckets[]</code></td><td><p><code>object (<code>ExtendedValue</code>)</code></p><p>Determines the bucket from which values are chosen to sort.</p><p>For example, in a pivot table with one row group & two column groups, the row group can list up to two values. The first value corresponds to a value within the first column group, and the second value corresponds to a value in the second column group. If no values are listed, this would indicate that the row should be sorted according to the "Grand Total" over the column groups. If a single value is listed, this would correspond to using the "Total" of that bucket.</p></td></tr></tbody></table>

## PivotGroupRule

An optional setting on a `PivotGroup` that defines buckets for the values in the source data column rather than breaking out each individual value. Only one `PivotGroup` with a group rule may be added for each column in the source data, though on any given column you may add both a `PivotGroup` that has a rule and a `PivotGroup` that does not.

JSON representation

```
{

  "manualRule": {
    object (ManualRule)
  },
  "histogramRule": {
    object (HistogramRule)
  },
  "dateTimeRule": {
    object (DateTimeRule)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>rule</code>. The rule to apply to the <code>PivotGroup</code>. <code>rule</code> can be only one of the following:</td></tr><tr><td><code>manualRule</code></td><td><p><code>object (<code>ManualRule</code>)</code></p><p>A <code>ManualRule</code>.</p></td></tr><tr><td><code>histogramRule</code></td><td><p><code>object (<code>HistogramRule</code>)</code></p><p>A <code>HistogramRule</code>.</p></td></tr><tr><td><code>dateTimeRule</code></td><td><p><code>object (<code>DateTimeRule</code>)</code></p><p>A <code>DateTimeRule</code>.</p></td></tr></tbody></table>

## ManualRule

Allows you to manually organize the values in a source data column into buckets with names of your choosing. For example, a pivot table that aggregates population by state:

```
+-------+-------------------+
| State | SUM of Population |
+-------+-------------------+
| AK    |               0.7 |
| AL    |               4.8 |
| AR    |               2.9 |
...
+-------+-------------------+
```

could be turned into a pivot table that aggregates population by time zone by providing a list of groups (for example, groupName = 'Central', items = \['AL', 'AR', 'IA',...\]) to a manual group rule. Note that a similar effect could be achieved by adding a time zone column to the source data and adjusting the pivot table.

```
+-----------+-------------------+
| Time Zone | SUM of Population |
+-----------+-------------------+
| Central   |             106.3 |
| Eastern   |             151.9 |
| Mountain  |              17.4 |
...
+-----------+-------------------+
```

JSON representation

```
{
  "groups": [
    {
      object (ManualRuleGroup)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>groups[]</code></td><td><p><code>object (<code>ManualRuleGroup</code>)</code></p><p>The list of group names and the corresponding items from the source data that map to each group name.</p></td></tr></tbody></table>

## ManualRuleGroup

A group name and a list of items from the source data that should be placed in the group with this name.

JSON representation

```
{
  "groupName": {
    object (ExtendedValue)
  },
  "items": [
    {
      object (ExtendedValue)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>groupName</code></td><td><p><code>object (<code>ExtendedValue</code>)</code></p><p>The group name, which must be a string. Each group in a given <code>ManualRule</code> must have a unique group name.</p></td></tr><tr><td><code>items[]</code></td><td><p><code>object (<code>ExtendedValue</code>)</code></p><p>The items in the source data that should be placed into this group. Each item may be a string, number, or boolean. Items may appear in at most one group within a given <code>ManualRule</code>. Items that do not appear in any group will appear on their own.</p></td></tr></tbody></table>

## HistogramRule

Allows you to organize the numeric values in a source data column into buckets of a constant size. All values from `HistogramRule.start` to `HistogramRule.end` are placed into groups of size `HistogramRule.interval`. In addition, all values below `HistogramRule.start` are placed in one group, and all values above `HistogramRule.end` are placed in another. Only `HistogramRule.interval` is required, though if `HistogramRule.start` and `HistogramRule.end` are both provided, `HistogramRule.start` must be less than `HistogramRule.end`. For example, a pivot table showing average purchase amount by age that has 50+ rows:

```
+-----+-------------------+
| Age | AVERAGE of Amount |
+-----+-------------------+
| 16  |            $27.13 |
| 17  |             $5.24 |
| 18  |            $20.15 |
...
+-----+-------------------+
```

could be turned into a pivot table that looks like the one below by applying a histogram group rule with a `HistogramRule.start` of 25, an `HistogramRule.interval` of 20, and an `HistogramRule.end` of 65.

```
+-------------+-------------------+
| Grouped Age | AVERAGE of Amount |
+-------------+-------------------+
| < 25        |            $19.34 |
| 25-45       |            $31.43 |
| 45-65       |            $35.87 |
| > 65        |            $27.55 |
+-------------+-------------------+
| Grand Total |            $29.12 |
+-------------+-------------------+
```

JSON representation

```
{
  "interval": number,
  "start": number,
  "end": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>interval</code></td><td><p><code>number</code></p><p>The size of the buckets that are created. Must be positive.</p></td></tr><tr><td><code>start</code></td><td><p><code>number</code></p><p>The minimum value at which items are placed into buckets of constant size. Values below start are lumped into a single bucket. This field is optional.</p></td></tr><tr><td><code>end</code></td><td><p><code>number</code></p><p>The maximum value at which items are placed into buckets of constant size. Values above end are lumped into a single bucket. This field is optional.</p></td></tr></tbody></table>

## DateTimeRule

Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. For example, consider a pivot table showing sales transactions by date:

```
+----------+--------------+
| Date     | SUM of Sales |
+----------+--------------+
| 1/1/2017 |      $621.14 |
| 2/3/2017 |      $708.84 |
| 5/8/2017 |      $326.84 |
...
+----------+--------------+
```

Applying a date-time group rule with a `DateTimeRuleType` of YEAR\_MONTH results in the following pivot table.

```
+--------------+--------------+
| Grouped Date | SUM of Sales |
+--------------+--------------+
| 2017-Jan     |   $53,731.78 |
| 2017-Feb     |   $83,475.32 |
| 2017-Mar     |   $94,385.05 |
...
+--------------+--------------+
```

JSON representation

```
{
  "type": enum (DateTimeRuleType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>DateTimeRuleType</code>)</code></p><p>The type of date-time grouping to apply.</p></td></tr></tbody></table>

## DateTimeRuleType

The available types of date-time grouping rules. This documentation assumes the spreadsheet locale is "en-US", though the actual rendering of the dates and times uses the locale of the spreadsheet for some rule types.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DATE_TIME_RULE_TYPE_UNSPECIFIED</code></td><td>The default type, do not use.</td></tr><tr><td><code>SECOND</code></td><td>Group dates by second, from 0 to 59.</td></tr><tr><td><code>MINUTE</code></td><td>Group dates by minute, from 0 to 59.</td></tr><tr><td><code>HOUR</code></td><td>Group dates by hour using a 24-hour system, from 0 to 23.</td></tr><tr><td><code>HOUR_MINUTE</code></td><td>Group dates by hour and minute using a 24-hour system, for example 19:45.</td></tr><tr><td><code>HOUR_MINUTE_AMPM</code></td><td>Group dates by hour and minute using a 12-hour system, for example 7:45 PM. The AM/PM designation is translated based on the spreadsheet locale.</td></tr><tr><td><code>DAY_OF_WEEK</code></td><td>Group dates by day of week, for example Sunday. The days of the week will be translated based on the spreadsheet locale.</td></tr><tr><td><code>DAY_OF_YEAR</code></td><td>Group dates by day of year, from 1 to 366. Note that dates after Feb. 29 fall in different buckets in leap years than in non-leap years.</td></tr><tr><td><code>DAY_OF_MONTH</code></td><td>Group dates by day of month, from 1 to 31.</td></tr><tr><td><code>DAY_MONTH</code></td><td>Group dates by day and month, for example 22-Nov. The month is translated based on the spreadsheet locale.</td></tr><tr><td><code>MONTH</code></td><td>Group dates by month, for example Nov. The month is translated based on the spreadsheet locale.</td></tr><tr><td><code>QUARTER</code></td><td>Group dates by quarter, for example Q1 (which represents Jan-Mar).</td></tr><tr><td><code>YEAR</code></td><td>Group dates by year, for example 2008.</td></tr><tr><td><code>YEAR_MONTH</code></td><td>Group dates by year and month, for example 2008-Nov. The month is translated based on the spreadsheet locale.</td></tr><tr><td><code>YEAR_QUARTER</code></td><td>Group dates by year and quarter, for example 2008 Q4.</td></tr><tr><td><code>YEAR_MONTH_DAY</code></td><td>Group dates by year, month, and day, for example 2008-11-22.</td></tr></tbody></table>

## PivotGroupLimit

The count limit on rows or columns in the pivot group.

JSON representation

```
{
  "countLimit": integer,
  "applyOrder": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>countLimit</code></td><td><p><code>integer</code></p><p>The count limit.</p></td></tr><tr><td><code>applyOrder</code></td><td><p><code>integer</code></p><p>The order in which the group limit is applied to the pivot table.</p><p>Pivot group limits are applied from lower to higher order number. Order numbers are normalized to consecutive integers from 0.</p><p>For write request, to fully customize the applying orders, all pivot group limits should have this field set with an unique number. Otherwise, the order is determined by the index in the <code>PivotTable.rows</code> list and then the <code>PivotTable.columns</code> list.</p></td></tr></tbody></table>

## PivotFilterCriteria

Criteria for showing/hiding rows in a pivot table.

JSON representation

```
{
  "visibleValues": [
    string
  ],
  "condition": {
    object (BooleanCondition)
  },
  "visibleByDefault": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>visibleValues[]</code></td><td><p><code>string</code></p><p>Values that should be included. Values not listed here are excluded.</p></td></tr><tr><td><code>condition</code></td><td><p><code>object (<code>BooleanCondition</code>)</code></p><p>A condition that must be true for values to be shown. ( <code>visibleValues</code> does not override this -- even if a value is listed there, it is still hidden if it does not meet the condition.)</p><p>Condition values that refer to ranges in A1-notation are evaluated relative to the pivot table sheet. References are treated absolutely, so are not filled down the pivot table. For example, a condition value of <code>=A1</code> on "Pivot Table 1" is treated as <code>'Pivot Table 1'!$A$1</code>.</p><p>The source data of the pivot table can be referenced by column header name. For example, if the source data has columns named "Revenue" and "Cost" and a condition is applied to the "Revenue" column with type <code>NUMBER_GREATER</code> and value <code>=Cost</code>, then only columns where "Revenue" > "Cost" are included.</p></td></tr><tr><td><code>visibleByDefault</code></td><td><p><code>boolean</code></p><p>Whether values are visible by default. If true, the <code>visibleValues</code> are ignored, all values that meet <code>condition</code> (if specified) are shown. If false, values that are both in <code>visibleValues</code> and meet <code>condition</code> are shown.</p></td></tr></tbody></table>

## PivotFilterSpec

The pivot table filter criteria associated with a specific source column offset.

JSON representation

```
{
  "filterCriteria": {
    object (PivotFilterCriteria)
  },

  "columnOffsetIndex": integer,
  "dataSourceColumnReference": {
    object (DataSourceColumnReference)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>filterCriteria</code></td><td><p><code>object (<code>PivotFilterCriteria</code>)</code></p><p>The criteria for the column.</p></td></tr><tr><td colspan="2">Union field <code>source</code>. The source column that this filter applies to. <code>source</code> can be only one of the following:</td></tr><tr><td><code>columnOffsetIndex</code></td><td><p><code>integer</code></p><p>The zero-based column offset of the source range.</p></td></tr><tr><td><code>dataSourceColumnReference</code></td><td><p><code>object (<code>DataSourceColumnReference</code>)</code></p><p>The reference to the data source column.</p></td></tr></tbody></table>

## PivotValue

The definition of how a value in a pivot table should be calculated.

JSON representation

```
{
  "summarizeFunction": enum (PivotValueSummarizeFunction),
  "name": string,
  "calculatedDisplayType": enum (PivotValueCalculatedDisplayType),

  "sourceColumnOffset": integer,
  "formula": string,
  "dataSourceColumnReference": {
    object (DataSourceColumnReference)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>summarizeFunction</code></td><td><p><code>enum (<code>PivotValueSummarizeFunction</code>)</code></p><p>A function to summarize the value. If <code>formula</code> is set, the only supported values are <code>SUM</code> and <code>CUSTOM</code>. If <code>sourceColumnOffset</code> is set, then <code>CUSTOM</code> is not supported.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>A name to use for the value.</p></td></tr><tr><td><code>calculatedDisplayType</code></td><td><p><code>enum (<code>PivotValueCalculatedDisplayType</code>)</code></p><p>If specified, indicates that pivot values should be displayed as the result of a calculation with another pivot value. For example, if calculatedDisplayType is specified as PERCENT_OF_GRAND_TOTAL, all the pivot values are displayed as the percentage of the grand total. In the Sheets editor, this is referred to as "Show As" in the value section of a pivot table.</p></td></tr><tr><td colspan="2">Union field <code>value</code>. The data to use for the values in the pivot table. Exactly one value must be set. <code>value</code> can be only one of the following:</td></tr><tr><td><code>sourceColumnOffset</code></td><td><p><code>integer</code></p><p>The column offset of the source range that this value reads from.</p><p>For example, if the source was <code>C10:E15</code>, a <code>sourceColumnOffset</code> of <code>0</code> means this value refers to column <code>C</code>, whereas the offset <code>1</code> would refer to column <code>D</code>.</p></td></tr><tr><td><code>formula</code></td><td><p><code>string</code></p><p>A custom formula to calculate the value. The formula must start with an <code>=</code> character.</p></td></tr><tr><td><code>dataSourceColumnReference</code></td><td><p><code>object (<code>DataSourceColumnReference</code>)</code></p><p>The reference to the data source column that this value reads from.</p></td></tr></tbody></table>

## PivotValueSummarizeFunction

A function to summarize a pivot value.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED</code></td><td>The default, do not use.</td></tr><tr><td><code>SUM</code></td><td>Corresponds to the <code>SUM</code> function.</td></tr><tr><td><code>COUNTA</code></td><td>Corresponds to the <code>COUNTA</code> function.</td></tr><tr><td><code>COUNT</code></td><td>Corresponds to the <code>COUNT</code> function.</td></tr><tr><td><code>COUNTUNIQUE</code></td><td>Corresponds to the <code>COUNTUNIQUE</code> function.</td></tr><tr><td><code>AVERAGE</code></td><td>Corresponds to the <code>AVERAGE</code> function.</td></tr><tr><td><code>MAX</code></td><td>Corresponds to the <code>MAX</code> function.</td></tr><tr><td><code>MIN</code></td><td>Corresponds to the <code>MIN</code> function.</td></tr><tr><td><code>MEDIAN</code></td><td>Corresponds to the <code>MEDIAN</code> function.</td></tr><tr><td><code>PRODUCT</code></td><td>Corresponds to the <code>PRODUCT</code> function.</td></tr><tr><td><code>STDEV</code></td><td>Corresponds to the <code>STDEV</code> function.</td></tr><tr><td><code>STDEVP</code></td><td>Corresponds to the <code>STDEVP</code> function.</td></tr><tr><td><code>VAR</code></td><td>Corresponds to the <code>VAR</code> function.</td></tr><tr><td><code>VARP</code></td><td>Corresponds to the <code>VARP</code> function.</td></tr><tr><td><code>CUSTOM</code></td><td>Indicates the formula should be used as-is. Only valid if <code>PivotValue.formula</code> was set.</td></tr><tr><td><code>NONE</code></td><td>Indicates that the value is already summarized, and the summarization function is not explicitly specified. Used for Looker data source pivot tables where the value is already summarized.</td></tr></tbody></table>

## PivotValueCalculatedDisplayType

The possible ways that pivot values may be calculated for display.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>PERCENT_OF_ROW_TOTAL</code></td><td>Shows the pivot values as percentage of the row total values.</td></tr><tr><td><code>PERCENT_OF_COLUMN_TOTAL</code></td><td>Shows the pivot values as percentage of the column total values.</td></tr><tr><td><code>PERCENT_OF_GRAND_TOTAL</code></td><td>Shows the pivot values as percentage of the grand total values.</td></tr></tbody></table>

## PivotValueLayout

The layout of pivot values.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>HORIZONTAL</code></td><td>Values are laid out horizontally (as columns).</td></tr><tr><td><code>VERTICAL</code></td><td>Values are laid out vertically (as rows).</td></tr></tbody></table>
