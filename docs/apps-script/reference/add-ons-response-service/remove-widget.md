---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/remove-widget
root: apps-script
fetched_at: 2026-04-23T15:18:40.371Z
---

# Class RemoveWidget

A builder for RemoveWidget objects. Developers can remove a widget from the card by passing a `RemoveWidget` to `ModifyCard`.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const removeWidget = AddOnsResponseService.newRemoveWidget().setWidgetId('sample_id');

const modifyCard = AddOnsResponseService.newModifyCard().setRemoveWidget(removeWidget);
```

## Detailed documentation

### setWidgetId(widgetId)

Sets the widget ID of the widget to be removed.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `widgetId` | `String` | The ID of the widget to remove. |

#### Return

`RemoveWidget` — The remove widget object.
