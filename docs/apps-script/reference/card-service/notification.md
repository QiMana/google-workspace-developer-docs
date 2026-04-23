---
source: https://developers.google.com/apps-script/reference/card-service/notification
root: apps-script
fetched_at: 2026-04-23T15:19:08.703Z
---

# Class Notification

## Page Summary

- Notifications are displayed to users after interacting with a UI element.
- Notifications are created using `CardService.newNotification()` and can be set with `setText(text)`.
- The `setText(text)` method is required and sets the string content of the notification.

A notification shown to the user as a response to interacting with a UI element.

```
const action = CardService.newAction().setFunctionName('notificationCallback');
CardService.newTextButton().setText('Save').setOnClickAction(action);

// ...

function notificationCallback() {
  return CardService.newActionResponseBuilder()
      .setNotification(
          CardService.newNotification().setText('Some info to display to user'),
          )
      .build();
}
```

## Detailed documentation

### setText(text)

Sets the text to show in the notification. Required.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The notification text. |

#### Return

`Notification` — This object, for chaining.
