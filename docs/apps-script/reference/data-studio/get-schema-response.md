---
source: https://developers.google.com/apps-script/reference/data-studio/get-schema-response
root: apps-script
fetched_at: 2026-04-23T15:19:32.776Z
---

# Class GetSchemaResponse

## Page Summary

- GetSchemaResponse is a builder used to create a `getSchema()` response for your script project.
- The `build()` method validates and returns the object in the format Data Studio needs.
- The `printJson()` method prints the JSON representation of the object for debugging.
- The `setFields(fields)` method sets the fields for the builder.

Builder to create a `getSchema()` response for your script project.

```
function getSchema() {
  const cc = DataStudioApp.createCommunityConnector();
  const fields = cc.getFields();

  fields.newDimension()
      .setId('Created')
      .setName('Date Created')
      .setDescription('The date that this was created')
      .setType(cc.FieldType.YEAR_MONTH_DAY);

  fields.newMetric()
      .setId('Amount')
      .setName('Amount (USD)')
      .setDescription('The cost in US dollars')
      .setType(cc.FieldType.CURRENCY_USD);

  return cc.newGetSchemaResponse().setFields(fields).build();
}
```

## Detailed documentation

### build()

Validates this object and returns it in the format needed by Data Studio.

#### Return

`Object` — The validated `GetSchemaResponse` object.

---

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`

---

### setFields(fields)

Sets the `Fields` of the builder.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fields` | `Fields` | The fields to set. |

#### Return

`GetSchemaResponse` — This builder, for chaining.
