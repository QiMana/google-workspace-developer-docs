---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/notification
root: apps-script
fetched_at: 2026-04-23T15:18:39.962Z
---

# Class Notification

Displays a notification when users submit and close a dialog.

Available for Google Workspace add-ons that extend Google Chat.

```
const notification = AddOnsResponseService.newNotification().setText("You closed a dialog!");
```

## Detailed documentation

### setText(text)

Sets the text to show in the notification. Required.

```
const notification = AddOnsResponseService.newNotification().setText("You closed a dialog!");
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The notification text. |

#### Return

`Notification` — This object, for chaining.
