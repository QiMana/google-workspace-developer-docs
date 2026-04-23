---
source: https://developers.google.com/apps-script/reference/charts/data-table-builder
root: apps-script
fetched_at: 2026-04-23T15:19:17.666Z
---

# Class DataTableBuilder

## Page Summary

- DataTableBuilder is used to build DataTable objects by first specifying columns and then adding rows.
- The `addColumn(type, label)` method adds a column to the data table with a specified type and label.
- The `addRow(values)` method adds a row to the data table using an array of values.
- The `build()` method finalizes the data table construction and returns the complete DataTable object.
- The `setValue(row, column, value)` method allows setting a specific value at a given row and column index.

Builder of DataTable objects. Building a data table consists of first specifying its columns, and then adding its rows, one at a time. Example:

```
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
```

## Detailed documentation

### addColumn(type, label)

Adds a column to the data table. Columns will be added from 0 to n.

The first column is often used by charts for labels (for instance, X-axis labels on line charts, or slice labels in pie charts). The other columns are often used for data and therefore often require numeric values.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `ColumnType` | type of data in the column (number, string, or date) |
| `label` | `String` | label of the column (it's used for chart legends). |

#### Return

`DataTableBuilder` — this builder, for chaining.

---

### addRow(values)

Adds a row to the data table.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `values` | `Object[]` | values for the row, specified in the same order that the columns are entered. |

#### Return

`DataTableBuilder` — this builder, for chaining.

---

### build()

Builds and returns a data table.

#### Return

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the data table is empty or otherwise malformed

---

### setValue(row, column, value)

Sets a specific value in the table.

You may set a value before adding the column to the data table. However, unless the column is added at some point, the value will be ignored.

Not all column values need to be filled in. Those missing will be considered `null`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `row` | `Integer` | the row index (the first row has index 0) |
| `column` | `Integer` | the column index (the first column has index 0) |
| `value` | `Object` | the value of the table cell (should have the right type for the column). |

#### Return

`DataTableBuilder` — this builder, for chaining
