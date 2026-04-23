---
source: https://developers.google.com/apps-script/reference/card-service/action-response
root: apps-script
fetched_at: 2026-04-23T15:18:57.083Z
---

# Class ActionResponse

## Page Summary

- ActionResponse is an object returned from a callback function to perform actions on the client.
- It can be used to open links, show notifications, or display additional cards.
- Some combinations of actions within an ActionResponse are not supported.
- The `printJson()` method is available for debugging purposes to print the JSON representation of the object.

The response object that may be returned from a callback function (e.g., a form response handler) to perform one or more actions on the client. Some combinations of actions are not supported.

```
// An action that opens a link
const actionResponse =
    CardService.newActionResponseBuilder()
        .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com'))
        .build();

// An action that shows a notification.
const notificationActionResponse = CardService.newActionResponseBuilder()
                           .setNotification(
                               CardService.newNotification().setText(
                                   'Some info to display to user'),
                               )
                           .build();

// An action that shows an additional card. It also sets a flag to indicate that
// the original state data has changed.

const cardBuilder = CardService.newCardBuilder();
// Build card ...
const navigationActionResponse = CardService.newActionResponseBuilder()
                           .setNavigation(CardService.newNavigation().pushCard(
                               cardBuilder.build()))
                           .setStateChanged(true)
                           .build();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`
