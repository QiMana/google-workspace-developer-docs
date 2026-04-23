---
source: https://developers.google.com/apps-script/reference/card-service/expression-data-action
root: apps-script
fetched_at: 2026-04-23T15:19:06.531Z
---

# Class ExpressionDataAction

Actions for [CEL expression validation](../../../workspace/add-ons/studio/validate-inputs.md#cel-validation). Use `START_EXPRESSION_EVALUATION` for CEL validation.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const expressionDataAction = CardService.newExpressionDataAction()
.setActionType(CardService.ExpressionDataActionType.START_EXPRESSION_EVALUATION);
```

## Detailed documentation

### setActionType(type)

Sets the type of the expression data action.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `ExpressionDataActionType` | The type of the expression data action. |

#### Return

`ExpressionDataAction` — This object, for chaining.
