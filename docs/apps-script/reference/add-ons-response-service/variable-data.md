---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/variable-data
root: apps-script
fetched_at: 2026-04-23T15:18:44.100Z
---

# Class VariableData

Represents a variable data which can contain a collection of values in various types.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const variableData = AddOnsResponseService.newVariableData()
    .addBooleanValue(true)
    .addIntegerValue(123);
```

## Detailed documentation

### addBooleanValue(value)

Adds a boolean value to the variable data.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `Boolean` | The boolean value to be added. |

#### Return

`VariableData` — This variable data object, for chaining.

---

### addEmailAddress(emailAddress)

Adds an email address to the variable data.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address text value to be added. |

#### Return

`VariableData` — This variable data object, for chaining.

---

### addFloatValue(value)

Adds a float value to the variable data.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `Number` | The float value to be added. |

#### Return

`VariableData` — This variable data object, for chaining.

---

### addGoogleUser(googleUser)

Adds a google user to the variable data.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `googleUser` | `String` | The google user text value to be added, should have format of user/xxxx. |

#### Return

`VariableData` — This variable data object, for chaining.

---

### addIntegerValue(value)

Adds an integer value to the variable data.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `Integer` | The integer value to be added. |

#### Return

`VariableData` — This variable data object, for chaining.

---

### addResourceData(resourceData)

Adds a `ResourceData` value to the variable data.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `resourceData` | `ResourceData` | The resource data value to be added. |

#### Return

`VariableData` — This variable data object, for chaining.

---

### addResourceReference(resourceReference)

Adds a resource reference ID to the variable data.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `resourceReference` | `String` | The resource ID to the variable data, for example "space/123". |

#### Return

`VariableData` — This variable data object, for chaining.

---

### addStringValue(value)

Adds a string value to the variable data.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | The string value to be added. |

#### Return

`VariableData` — This variable data object, for chaining.

---

### addWorkflowTextFormat(workflowTextFormat)

Adds a `WorkflowTextFormat` value to the variable data.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `workflowTextFormat` | `WorkflowTextFormat` | The workflow text format to be added. |

#### Return

`VariableData` — This variable data object, for chaining.
