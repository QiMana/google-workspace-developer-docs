---
source: https://developers.google.com/apps-script/reference/card-service/expression-data
root: apps-script
fetched_at: 2026-04-23T15:19:06.666Z
---

# Class ExpressionData

The expression data that is used to evaluate an expression.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const expressionData = CardService.newExpressionData();
```

## Detailed documentation

### addCondition(condition)

Adds a condition to the current expression data.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `condition` | `Condition` | The Condition to add. |

#### Return

`ExpressionData` — This ExpressionData, for chaining.

---

### addEventAction(eventAction)

Adds an event action to the current expression data.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `eventAction` | `EventAction` | The EventAction to add. |

#### Return

`ExpressionData` — This ExpressionData, for chaining.

---

### setExpression(expression)

Sets the expression data value.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `expression` | `String` | The uncompiled CEL expression. |

#### Return

`ExpressionData` — This ExpressionData, for chaining.

---

### setId(id)

Sets the expression data id.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The unique identifier of the ExpressionData. |

#### Return

`ExpressionData` — This ExpressionData, for chaining.
