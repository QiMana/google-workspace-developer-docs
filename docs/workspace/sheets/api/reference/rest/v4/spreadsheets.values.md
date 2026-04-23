---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values
root: workspace
fetched_at: 2026-04-23T15:31:28.855Z
---

# REST Resource: spreadsheets.values

## Resource: ValueRange

Data within a range of the spreadsheet.

JSON representation

```
{
  "range": string,
  "majorDimension": enum (Dimension),
  "values": [
    array
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p><code>string</code></p><p>The range the values cover, in <a href="https://developers.google.com/workspace/sheets/api/guides/concepts#cell">A1 notation</a>. For output, this range indicates the entire requested range, even though the values will exclude trailing rows and columns. When appending values, this field represents the range to search for a table, after which values will be appended.</p></td></tr><tr><td><code>majorDimension</code></td><td><p><code>enum (<code>Dimension</code>)</code></p><p>The major dimension of the values.</p><p>For output, if the spreadsheet data is: <code>A1=1,B1=2,A2=3,B2=4</code>, then requesting <code>range=A1:B2,majorDimension=ROWS</code> will return <code>[[1,2],[3,4]]</code>, whereas requesting <code>range=A1:B2,majorDimension=COLUMNS</code> will return <code>[[1,3],[2,4]]</code>.</p><p>For input, with <code>range=A1:B2,majorDimension=ROWS</code> then <code>[[1,2],[3,4]]</code> will set <code>A1=1,B1=2,A2=3,B2=4</code>. With <code>range=A1:B2,majorDimension=COLUMNS</code> then <code>[[1,2],[3,4]]</code> will set <code>A1=1,B1=3,A2=2,B2=4</code>.</p><p>When writing, if this field is not set, it defaults to ROWS.</p></td></tr><tr><td><code>values[]</code></td><td><p><code>array (<code>ListValue</code> format)</code></p><p>The data that was read or to be written. This is an array of arrays, the outer array representing all the data and each inner array representing a major dimension. Each item in the inner array corresponds with one cell.</p><p>For output, empty trailing rows and columns will not be included.</p><p>For input, supported value types are: bool, string, and double. Null values will be skipped. To set a cell to an empty value, set the string value to an empty string.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>append</h3></td><td>Appends values to a spreadsheet.</td></tr><tr><td><h3>batchClear</h3></td><td>Clears one or more ranges of values from a spreadsheet.</td></tr><tr><td><h3>batchClearByDataFilter</h3></td><td>Clears one or more ranges of values from a spreadsheet.</td></tr><tr><td><h3>batchGet</h3></td><td>Returns one or more ranges of values from a spreadsheet.</td></tr><tr><td><h3>batchGetByDataFilter</h3></td><td>Returns one or more ranges of values that match the specified data filters.</td></tr><tr><td><h3>batchUpdate</h3></td><td>Sets values in one or more ranges of a spreadsheet.</td></tr><tr><td><h3>batchUpdateByDataFilter</h3></td><td>Sets values in one or more ranges of a spreadsheet.</td></tr><tr><td><h3>clear</h3></td><td>Clears values from a spreadsheet.</td></tr><tr><td><h3>get</h3></td><td>Returns a range of values from a spreadsheet.</td></tr><tr><td><h3>update</h3></td><td>Sets values in a range of a spreadsheet.</td></tr></tbody></table>
