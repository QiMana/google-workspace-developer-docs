---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/value-metadata
root: apps-script
fetched_at: 2026-04-23T15:18:44.794Z
---

# Class ValueMetadata

A valueMetadata contains information about the potential values of a variable.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
let allowedValue1 = "001";
let allowedValue2 = "002";

const valueMetadata = AddOnsResponseService.newValueMetadata()
   .addEnumValue(allowedValue1);
   .addEnumValue(allowedValue2)
   .setDefaultValue(allowedValue1)
   .addCastableType(AddOnsResponseService.BasicDataType.STRING)
   .addCastableType(AddOnsResponseService.BasicDataType.INTEGER);
```

## Detailed documentation

### addCastableType(dataType)

Adds a optional allowed types that can be dynamically casted for a variable data to this value metadata.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dataType` | `BasicDataType` | A `BasicDataType` the variable can be casted to. |

#### Return

`ValueMetadata` — This value metadata object, for chaining.

---

### addEnumValue(enumValue)

Adds an optional string value to the allowed enum values of a variable, this field can only be set if the `DataType` is set to String type.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `enumValue` | `String` | The allowed value to add to the enumeration. |

#### Return

`ValueMetadata` — This value metadata object, for chaining.

---

### setDefaultValue(defaultValue)

Sets the optional default value of the variable, example, if the variable type is boolean, defaultValue may be set to " `true` " or " `false` ".

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `defaultValue` | `String` | The default value of the variable. |

#### Return

`ValueMetadata` — This value metadata object, for chaining.
