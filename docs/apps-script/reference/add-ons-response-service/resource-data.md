---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/resource-data
root: apps-script
fetched_at: 2026-04-23T15:18:40.768Z
---

# Class ResourceData

Represents a application specific resource data, a resource data contains a collection of key-value pairs of variable names and `VariableData`.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
let customResourceData = AddOnsResponseService.newResourceData()
  .setVariableDataMap(
    {
      "field_1": fieldData_1,
      "field_2": fieldData_2
    }
  );

let outputVariableData = AddOnsResponseService.newVariableData()
  .addResourceData(customResourceData);

let workflowAction = AddOnsResponseService.newReturnOutputVariablesAction()
  .setVariableDataMap({ "resource_data": outputVariableData });
```

## Detailed documentation

### addVariableData(key, value)

Adds a `VariableData` keyed by its variable name, a value is overwritten if the key already exists.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | The variable name to retrieve the corresponding variable data. |
| `value` | `VariableData` | The `VariableData` to be added. |

#### Return

`ResourceData` — This resource data object, for chaining.

---

### setVariableDataMap(fields)

Sets the map of the variable data keyed by variable names.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fields` | `Object` | A collection of key-value pairs of string and variable data. |

#### Return

`ResourceData` — This resource data object, for chaining.
