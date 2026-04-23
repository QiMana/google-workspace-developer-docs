---
source: https://developers.google.com/apps-script/reference/card-service/expression-data-condition-type
root: apps-script
fetched_at: 2026-04-23T15:19:06.338Z
---

# Enum ExpressionDataConditionType

## Enum ExpressionDataConditionType

Represents whether the [CEL expression](../../../workspace/add-ons/studio/validate-inputs.md#cel-validation) evaluated successfully.

Only available through the [Gemini Alpha program](https://support.google.com/a/answer/14170809) for Google Workspace add-ons that extend Google Workspace Flows.

```
const expressionDataCondition = CardService.newExpressionDataCondition()
.setConditionType(CardService.ExpressionDataConditionType.EXPRESSION_EVALUATION_SUCCESS);
```
