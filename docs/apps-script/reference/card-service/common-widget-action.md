---
source: https://developers.google.com/apps-script/reference/card-service/common-widget-action
root: apps-script
fetched_at: 2026-04-23T15:19:02.638Z
---

# Class CommonWidgetAction

Defines actions that don't involve evaluations, such as updating widget visibility. For example, can reveal or hide widgets based on the value of an input as part of [CEL validation](https://developers.google.com/workspace/add-ons/studio/validate-inputs#cel-validation).

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const commonWidgetAction = CardService.newCommonWidgetAction()
.setUpdateVisibilityAction(CardService.Visibility.VISIBLE);
```

## Detailed documentation

### setUpdateVisibilityAction(updateVisibilityAction)

Sets the update visibility action for widgets.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `updateVisibilityAction` | `UpdateVisibilityAction` | The update visibility action. |

#### Return

`CommonWidgetAction` — The CommonWidgetAction, for chaining.
