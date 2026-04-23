---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget
root: apps-script
fetched_at: 2026-04-23T15:18:32.869Z
---

# Class AccessoryWidget

A builder for Chat `AccessoryWidget` objects. [Accessory widgets](https://developers.google.com/workspace/chat/create-messages#add-accessory-widgets) are interactive widgets that appear at the bottom of a message.

Available for Google Workspace add-ons that extend Google Chat.

```
const widget = CardService.newButtonSet()
    .addButton(CardService.newImageButton()
      .setIcon(CardService.Icon.PHONE)
      .setOnClickAction(CardService.newAction()
        .setFunctionName("phone")))
    .addButton(CardService.newTextButton()
      .setText("Robot")
      .setIconUrl("https://developers.google.com/chat/images/quickstart-app-avatar.png")
      .setOnClickAction(CardService.newAction()
        .setFunctionName("robot")));

const accessoryWidget = AddOnsResponseService.newAccessoryWidget()
    .addWidget(widget);
```

## Detailed documentation

### addWidget(widget)

Sets the widget for this action.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `widget` | `Widget` | The widget to set. |

#### Return

`AccessoryWidget` — This object, for chaining.
