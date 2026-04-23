---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/insert-widget
root: apps-script
fetched_at: 2026-04-23T15:18:39.625Z
---

# Class InsertWidget

A builder for InsertWidget objects. Developers cans insert a widget into a card by passing a `InsertWidget` to `ModifyCard`

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const newWidget = CardService.newDecoratedText().setText('New Widget');

const insertWidget = AddOnsResponseService.newInsertWidget()
                                          .insertAboveWidget('sample_id')
                                          .setWidget(newWidget);

const modifyCard = AddOnsResponseService.newModifyCard().setInsertWidget(insertWidget);
```

## Detailed documentation

### insertAboveWidget(widgetId)

Sets the widget ID, and the new widget is inserted above the widget with the given ID. An error is thrown if the widget ID is not found.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `widgetId` | `String` | The ID of the widget to insert above. |

#### Return

`InsertWidget` — The insert widget object, for chaining.

---

### insertBelowWidget(widgetId)

Sets the widget ID, and the new widget is inserted below the widget with the given ID. An error is thrown if the widget ID is not found.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `widgetId` | `String` | The ID of the widget to insert below. |

#### Return

`InsertWidget` — The insert widget object, for chaining.

---

### setWidget(widget)

Sets the `Widget` to be inserted. An error is thrown if there is a existing widget with the same ID.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `widget` | `Widget` | The widget to be inserted. |

#### Return

`InsertWidget` — The insert widget object, for chaining.
