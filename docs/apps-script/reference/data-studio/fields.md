---
source: https://developers.google.com/apps-script/reference/data-studio/fields
root: apps-script
fetched_at: 2026-04-23T15:19:28.596Z
---

# Class Fields

## Page Summary

- Fields define the dimensions and metrics available for use in Data Studio for a community connector.
- You can retrieve fields as an array, build them for Data Studio format, or filter them by ID.
- Methods exist to add new dimensions and metrics, and to set or get the default dimension and metric.
- Individual fields within the set can be accessed by their ID.

Contains a set of s for a community connector. This set of fields define which dimensions and metrics can be used in Data Studio.

```
const cc = DataStudioApp.createCommunityConnector();
const fields = cc.getFields();

const field1 = fields
                   .newDimension()
                   // Set other properties as needed.
                   .setId('field1_id');
```

## Detailed documentation

### asArray()

Returns a view of this object as an array.

```
const fields = DataStudioApp.createCommunityConnector().getFields();
fields.newDimension().setId('field1_id');
fields.newDimension().setId('field2_id');
fields.newDimension().setId('field3_id');

// Logging the ID of each field:
fields.asArray().map((field) => {
  Logger.log(field.getId());
});
```

#### Return

---

### build()

Validates this object and returns it in the format needed by Data Studio.

#### Return

`Object[]` — The validated field data, represented as a list of objects.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if a valid object cannot be constructed.

---

### forIds(ids)

Returns a new `Fields` object filtered to s with an ID in `ids`.

```
const fields = DataStudioApp.createCommunityConnector().getFields();
fields.newDimension().setId('field1_id');
fields.newDimension().setId('field2_id');
fields.newDimension().setId('field3_id');

// subsetFields is a Fields object that only contains field1 and field2.
const subsetFields = fields.forIds(['field1_id', 'field3_id']);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `ids` | `String[]` | The IDs of fields that should be kept. |

#### Return

`Fields` — A new `Fields` object.

---

### getDefaultDimension()

Returns the default dimension to be used for the set of fields. The default dimension is selected automatically when a new visualization is made.

#### Return

— The dimension that is set as the default dimension, or `null` if no default dimension was set.

---

### getDefaultMetric()

Returns the default metric to be used for the set of fields. The default metric is selected automatically when a new visualization is made.

#### Return

— The metric that is set as the default metric, or `null` if no default metric was set.

---

### getFieldById(fieldId)

Returns a field with a given ID, or `null` if no field with that ID is in this `Fields` object.

```
const fields = DataStudioApp.createCommunityConnector().getFields();
const field1 = fields.newDimension().setId('field1_id');

// byId is the same as field1.
const byId = fields.getFieldById('field1_id');

// byId2 is null.
const byId2 = fields.getFieldById('not present id');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fieldId` | `String` | The ID of the field to get. |

#### Return

— The with the given ID, or `null` if no such field is contained within this `Fields` object.

---

### newDimension()

#### Return

---

### newMetric()

#### Return

---

### setDefaultDimension(fieldId)

Sets the default dimension to be used for the set of fields. The default dimension is selected automatically when a new visualization is made.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fieldId` | `String` | The ID of the field to use as the default dimension. This ID must be present in the set of fields. |

---

### setDefaultMetric(fieldId)

Sets the default metric to be used for the set of fields. The default metric is selected automatically when a new visualization is made.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fieldId` | `String` | The ID of the field to use as the default metric. This ID must be present in the set of fields. |
