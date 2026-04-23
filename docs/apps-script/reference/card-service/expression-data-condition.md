---
source: https://developers.google.com/apps-script/reference/card-service/expression-data-condition
root: apps-script
fetched_at: 2026-04-23T15:19:05.470Z
---

# Class ExpressionDataCondition

Represents a [CEL expression validation](https://developers.google.com/workspace/add-ons/studio/validate-inputs#cel-validation) result.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const expressionDataCondition = CardService.newExpressionDataCondition()
.setConditionType(CardService.ExpressionDataConditionType.EXPRESSION_EVALUATION_SUCCESS);
```

## Detailed documentation

### setConditionType(type)

Sets condition type for a [CEL expression validation](https://developers.google.com/workspace/add-ons/studio/validate-inputs#cel-validation) to indicate whether the expression evaluated successfully.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `ExpressionDataConditionType` | The type of the expression data condition. |

#### Return

`ExpressionDataCondition` — This object, for chaining.
