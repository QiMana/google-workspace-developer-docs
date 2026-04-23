---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-source-parameter
root: apps-script
fetched_at: 2026-04-23T15:21:27.278Z
---

# Class DataSourceParameter

## Page Summary

- DataSourceParameter allows you to access existing data source parameters, but should only be used with data connected to a database.
- You can use `getName()` to retrieve the parameter name.
- You can use `getSourceCell()` to get the source cell the parameter is valued based on, or `null` if the type is not CELL.
- You can use `getType()` to get the parameter type.

Access existing data source parameters.

**Only use this class with data that's connected to a database.**

## Detailed documentation

### getName()

Gets the parameter name.

#### Return

`String` — The parameter name.

---

### getSourceCell()

Gets the source cell the parameter is valued based on, or `null` if the parameter type is not `DataSourceParameterType.CELL`.

#### Return

`String|null` — The source cell, as specified in A1 notation.

---

### getType()

Gets the parameter type.

#### Return

`DataSourceParameterType` — The parameter type.
