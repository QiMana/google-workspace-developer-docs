---
source: https://developers.google.com/apps-script/reference/card-service/workflow-data-source
root: apps-script
fetched_at: 2026-04-23T15:19:14.094Z
---

# Class WorkflowDataSource

For a `SelectionInput`,`DateTimePicker` \` or `TextInput` widget, a data source used in Google Workspace Studio. The data source populates available options for a widget.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const workflowDataSource = CardService.newWorkflowDataSource().setIncludeVariables(true)
.setType(CardService.WorkflowDataSourceType.USER);
```

## Detailed documentation

### setIncludeVariables(includeVariables)

Whether to include variables from the previous step in the data source.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `includeVariables` | `Boolean` | Whether to include variables in the data source. |

#### Return

`WorkflowDataSource` — This object, for chaining.

---

### setType(type)

Sets the type of the workflow data source.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `WorkflowDataSourceType` | The type of the workflow data source. |

#### Return

`WorkflowDataSource` — This object, for chaining.

---

### setVariableButtonLabel(variableButtonLabel)

Sets the label of the variable picker button, which displays after the \`+\` sign in FULL\_SIZE button size.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `variableButtonLabel` | `String` | The label of the variable picker button. |

#### Return

`WorkflowDataSource` — This object, for chaining.

---

### setVariableButtonSize(variableButtonSize)

Sets the size of the variable picker button, Workflow automatically uses COMPACT in side panel and FULL\_SIZE in other cases if UNSPECIFIED is selected. A COMPACT button only displays the \`+\` sign.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `variableButtonSize` | `VariableButtonSize` | The size of the variable picker button. |

#### Return

`WorkflowDataSource` — This object, for chaining.
