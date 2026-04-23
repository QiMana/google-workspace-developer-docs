---
source: https://developers.google.com/apps-script/reference/data-studio/field
root: apps-script
fetched_at: 2026-04-23T15:19:28.864Z
---

# Class Field

## Page Summary

- A Field object contains data-related information and its properties determine how it's used in Data Studio.
- You can create a new field using `fields.newDimension()` or similar methods.
- Field objects have methods to get and set various properties like ID, name, description, type, and aggregation.
- Methods starting with `get` retrieve the current value of a field property.
- Methods starting with `set` modify the value of a field property and return the Field object for chaining.

Contains field-related data. Its properties determine how the field is used in Data Studio.

```
const cc = DataStudioApp.createCommunityConnector();
const fields = cc.getFields();

const field1 = fields.newDimension()
                   .setId('field1_id')
                   .setName('Field 1 ID')
                   .setDescription('The first field.')
                   .setType(cc.FieldType.YEAR_MONTH)
                   .setGroup('DATETIME');
```

## Detailed documentation

### getAggregation()

Returns the `AggregationType` of this `Field`. `AggregationType` determines how Data Studio combines similar data into dimensions.

#### Return

`AggregationType` — The aggregationType for this field.

---

### getDescription()

Returns the description of this `Field`. Descriptions are short explanations of a field's purpose.

#### Return

`String` — The description for this field.

---

### getFormula()

Returns the formula of this `Field`. Formulas define a data transformation that Data Studio runs at query-time.

#### Return

`String` — The formula for this field.

---

### getGroup()

Returns the group of this `Field`. Fields collected into a group are presented together in the Data Studio UI.

#### Return

`String` — The group for this field.

---

### getId()

Returns the ID of this `Field`. IDs are unique per set of fields and are used in formulas to refer to fields.

#### Return

`String` — The ID for this field.

---

### getIsReaggregatable()

Returns `true` if this field can be reaggregated, `false` otherwise.

#### Return

`Boolean` — `true` if this field can be reaggregated, `false` otherwise.

---

### getName()

Returns the name of this `Field`. Names are shown to the user to distinguish fields.

#### Return

`String` — The name for this field.

---

### getType()

Returns the `FieldType` of this `Field`.

#### Return

`FieldType` — The type for this field.

---

### isDefault()

Returns `true` if this `Field` is the default metric or dimension.

#### Return

`Boolean` — `true` if this `Field` is the default metric or dimension; `false` otherwise.

---

### isDimension()

Returns `true` if this field is a dimension.

#### Return

`Boolean` — `true` if this field is a dimension; returns `false` otherwise.

---

### isHidden()

Returns `true` if this `Field` is hidden. You can use hidden fields in formulas, but not in charts. You cannot hide fields containing formulas.

#### Return

`Boolean` — `true` if this `Field` is hidden; `false` otherwise.

---

### isMetric()

Returns `true` if this field is a metric.

#### Return

`Boolean` — `true` if this field is a metric; returns `false` otherwise.

---

### setAggregation(aggregation)

Sets the aggregation type of this `Field`. `AggregationType` determines how Data Studio combines similar data into dimensions. This throws an error if called on a metric.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `aggregation` | `AggregationType` | The aggregation type to set. |

#### Return

`Field` — This builder, for chaining.

---

### setDescription(description)

Sets the description of this `Field`. Descriptions are short explanations of a field's purpose.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `description` | `String` | The description to set. |

#### Return

`Field` — This builder, for chaining.

---

### setFormula(formula)

Sets the formula of this `Field`. Formulas define a data transformation that Data Studio runs at query-time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `formula` | `String` | The formula to set. |

#### Return

`Field` — This builder, for chaining.

---

### setGroup(group)

Sets the group of this `Field`. Fields collected into a group are presented together in the Data Studio UI.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `group` | `String` | The group to set. |

#### Return

`Field` — This builder, for chaining.

---

### setId(id)

Sets the ID of this `Field`. IDs are unique per set of fields and are used in formulas to refer to fields.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID to set. |

#### Return

`Field` — This builder, for chaining.

---

### setIsHidden(isHidden)

Sets the hidden status of this `Field`. You can use hidden fields in formulas, but not in charts. You cannot hide fields containing formulas.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `isHidden` | `Boolean` | The hidden status to set. |

#### Return

`Field` — This builder, for chaining.

---

### setIsReaggregatable(isReaggregatable)

Sets the reaggregation-permitted status for a `Field`. Attempting to set an aggregation type on a field that can't be reaggregated results in an error.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `isReaggregatable` | `Boolean` | The reaggregation-permitted status to set. |

#### Return

`Field` — This builder, for chaining.

---

### setName(name)

Sets the name of this `Field`. Names are shown to the user to distinguish fields.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name to set. |

#### Return

`Field` — This builder, for chaining.

---

### setType(type)

Sets the `FieldType` of this `Field`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `FieldType` | The type to set. |

#### Return

`Field` — This builder, for chaining.
