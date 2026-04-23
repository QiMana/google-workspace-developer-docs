---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/action-response
root: apps-script
fetched_at: 2026-04-23T15:18:32.753Z
---

# Class ActionResponse

The actions that add-ons can use in cards or the host application.

Available for Google Workspace add-ons that extend Google Chat.

```
const notification = AddOnsResponseService.newNotification().setText("You closed a dialog!");

const navigation = AddOnsResponseService.newNavigation()
    .setEndNavigation(AddOnsResponseService.EndNavigation.CLOSE_DIALOG);

// An action that closes the dialog and shows a notification.
const action = AddOnsResponseService.newActionResponseBuilder()
    .setNavigation(navigation)
    .setNotification(notification)
    .build();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`
