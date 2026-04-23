---
source: https://developers.google.com/apps-script/reference/card-service/condition
root: apps-script
fetched_at: 2026-04-23T15:19:02.434Z
---

# Class Condition

A condition used to run an event action as part of [CEL expression validation](https://developers.google.com/workspace/add-ons/studio/validate-inputs#cel-validation).

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const condition = CardService.newCondition().setActionRuleId("CEL_TEXTBOX_SUCCESS_RULE_ID")
.setExpressionDataCondition(CardService.newExpressionDataCondition()
.setConditionType(CardService.ExpressionDataConditionType.EXPRESSION_EVALUATION_SUCCESS));
```

## Detailed documentation

### setActionRuleId(actionRuleId)

The unique ID of the action rule to run in response to the condition.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `actionRuleId` | `String` | The ID that uniquely identifies an event action. |

#### Return

`Condition` — This Condition object, for chaining.

---

### setExpressionDataCondition(expressionDataCondition)

Sets the [CEL expression validation](https://developers.google.com/workspace/add-ons/studio/validate-inputs#cel-validation) condition used to determine whether the event action should run.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `expressionDataCondition` | `ExpressionDataCondition` | A expression data condition. |

#### Return

`Condition` — The Condition object, for chaining.
