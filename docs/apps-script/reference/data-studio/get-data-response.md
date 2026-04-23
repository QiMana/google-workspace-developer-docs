---
source: https://developers.google.com/apps-script/reference/data-studio/get-data-response
root: apps-script
fetched_at: 2026-04-23T15:19:28.135Z
---

# Class GetDataResponse

## Page Summary

- GetDataResponse is a builder used to create a `getData()` response for your script project.
- You can add single rows of data using `addRow()` or multiple rows using `addAllRows()`.
- `setFields()` is used to set the fields of the builder.
- The `build()` method validates the object and returns it in the format needed by Data Studio.

Builder to create a `getData()` response for your script project.

```
function getFields() {
  //...
}

function getData() {
  const cc = DataStudioApp.createCommunityConnector();

  return cc.newGetDataResponse()
      .setFields(getFields())
      .addRow(['3', 'Foobar.com'])
      .addRow(['4', 'Foobaz.com'])
      .addRows([
        ['5', 'Fizzbuz.com'],
        ['6', 'Fizzbaz.com'],
      ])
      .build();
}
```

## Detailed documentation

### addAllRows(rows)

Adds multiple rows of data to this `GetDataResponse`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rows` | `String[][]` | The rows of data to set. |

#### Return

`GetDataResponse` — This builder, for chaining.

---

### addRow(row)

Adds a row of data to this `GetDataResponse`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `row` | `String[]` | The row of data to set. |

#### Return

`GetDataResponse` — This builder, for chaining.

---

### build()

Validates this object and returns it in the format needed by Data Studio.

#### Return

`Object` — The validated `GetDataResponse` object.

---

### setFields(fields)

Sets the `Fields` of the builder.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fields` | `Fields` | The fields to set. |

#### Return

`GetDataResponse` — This builder, for chaining.

---

### setFiltersApplied(filtersApplied)

Sets the filters applied status for this builder. Set to `true` if all filters were successfully applied, `false` otherwise.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `filtersApplied` | `Boolean` | \- The filters applied status to set. |

#### Return

`GetDataResponse` — This builder, for chaining.
