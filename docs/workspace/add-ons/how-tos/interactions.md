---
source: https://developers.google.com/workspace/add-ons/how-tos/interactions
root: workspace
fetched_at: 2026-04-23T15:22:58.674Z
---

# Build interactive cards

## Page Summary

- Card-based add-ons use interactive widgets like buttons and menus to collect user input and enhance user interactions.
- Widgets are made interactive by linking them to actions, which trigger callback functions to execute specific behaviors when interacted with.
- When defining widget actions, you can specify a callback function and any necessary parameters using the `Action` object and appropriate handler functions.
- For opening URLs, `setOpenLink()` or `setOnClickOpenLinkAction()` can be used with an `OpenLink` object to define the URL and behavior.
- Keep callback functions concise, as they have execution time limits, and consider using `setStateChanged()` to update the UI when backend data changes due to user interactions.

In addition to presenting data, most add-ons require users to enter information. When you build a card-based add-on, use interactive [widgets](https://developers.google.com/workspace/add-ons/concepts/widgets) such as buttons, toolbar menu items, or checkboxes to request data or provide interaction controls.

## Add actions to widgets

Make widgets interactive by linking them to specific *actions* and implementing behavior in a callback function. See [add-on actions](https://developers.google.com/workspace/add-ons/concepts/actions).

To configure a widget to take an action when selected or updated, follow these steps:

1. Create an [`Action`](https://developers.google.com/apps-script/reference/card-service/action) object, specifying the callback function that should execute, along with any required parameters.
2. Link the widget to the `Action` by calling the appropriate [widget handler function](https://developers.google.com/workspace/add-ons/concepts/actions#widget_handler_functions).
3. Implement the [callback function](https://developers.google.com/workspace/add-ons/concepts/actions#callback_functions) to enact the required behavior.

## Example

The following example defines a button that displays a notification after you select it. The selection triggers the `notifyUser` callback function. Returning an [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response) displays the notification.

```
/**
 * Build a card with a button that sends a notification.
 * @return {Card}
 */
function buildSimpleCard() {
  var buttonAction = CardService.newAction()
      .setFunctionName('notifyUser')
      .setParameters({'notifyText': 'Button clicked!'});
  var button = CardService.newTextButton()
      .setText('Notify')
      .setOnClickAction(buttonAction);

  // ...continue creating widgets, then create a Card object
  // to add them to. Return the built Card object.
}

/**
 * Callback function for a button action. Constructs a
 * notification action response and returns it.
 * @param {Object} e the action event object
 * @return {ActionResponse}
 */
function notifyUser(e) {
  var parameters = e.parameters;
  var notificationText = parameters['notifyText'];
  return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification()
          .setText(notificationText))
      .build();      // Don't forget to build the response!
}
```

## Design effective interactions

When designing interactive cards, keep the following in mind:

- Interactive widgets usually need at least one handler method to define their behavior.
- Use the [`setOpenLink`](https://developers.google.com/workspace/add-ons/concepts/actions#setOpenLink) widget handler function to open a URL in a tab. This way, you don't need to define an [`Action`](https://developers.google.com/apps-script/reference/card-service/action) object and callback function. To build the URL first, or take additional steps before opening the URL, define an [`Action`](https://developers.google.com/apps-script/reference/card-service/action) and use [`setOnClickOpenLinkAction`](https://developers.google.com/workspace/add-ons/concepts/actions#setOnClickOpenLinkAction) instead.
- When using the [`setOpenLink`](https://developers.google.com/workspace/add-ons/concepts/actions#setOpenLink) or [`setOnClickOpenLinkAction`](https://developers.google.com/workspace/add-ons/concepts/actions#setOnClickOpenLinkAction) widget handler functions, provide an [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link) object to define which URL to open. Use this object to specify opening and closing behavior using the [`OpenAs`](https://developers.google.com/apps-script/reference/card-service/open-as) and [`OnClose`](https://developers.google.com/apps-script/reference/card-service/on-close) enums.
- Multiple widgets can use the same [`Action`](https://developers.google.com/apps-script/reference/card-service/action) object. However, define different [`Action`](https://developers.google.com/apps-script/reference/card-service/action) objects to provide the callback function different parameters.
- Keep callback functions concise. To keep the add-ons responsive, the [Card service](https://developers.google.com/apps-script/reference/card-service/card-service) limits callback functions to a maximum of 30 seconds of execution time. If the execution takes longer, the UI might not update properly in response to the [`Action`](https://developers.google.com/apps-script/reference/card-service/action).
- If data on a third-party backend changes after a user interaction, set a 'state changed' bit to `true` so that client-side cache is cleared. See [`ActionResponseBuilder.setStateChanged()`](https://developers.google.com/apps-script/reference/card-service/action-response-builder#setStateChanged\(Boolean\)) for details.
