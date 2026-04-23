---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/data-type
root: apps-script
fetched_at: 2026-04-23T15:18:37.504Z
---

# Class DataType

A DataType is used to set the type of a variable. The type can be one of the basic data type or a Workspace Studio-specific resource type.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const dataType = AddOnsResponseService.newDataType()
    .setBasicDataType(
      AddOnsResponseService.BasicDataType.STRING
    )
    .setValueMetadata(
      AddOnsResponseService.newValueMetadata()
        .addEnumValue("sample_enum_value")
    );

let resourceField = AddOnsResponseService.newResourceField()
    .setSelector("question_1")
    .setDisplayText("Question 1")
    .setDataType(dataType);

}
```

## Detailed documentation

### setBasicDataType(basicDataType)

Sets the data type to one of the supported `BasicDataType` s.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `basicDataType` | `BasicDataType` | The basic data type that the variable belongs to. |

#### Return

`DataType` — This data type object, for chaining.

---

### setResourceType(resourceType)

Sets the data type to a custom defined `ResourceType`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `resourceType` | `ResourceType` | The application specific(custom) resource type of the variable. |

#### Return

`DataType` — This data type object, for chaining.
