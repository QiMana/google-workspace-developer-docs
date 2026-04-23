---
source: https://developers.google.com/workspace/add-ons/gmail/gmail-actions
root: workspace
fetched_at: 2026-04-23T15:22:45.619Z
---

# Gmail actions

## Page Summary

- `Action` objects enable interactive behavior in Google Workspace add-ons by defining responses to user interactions with widgets.
- Actions are linked to widgets via handler functions and trigger callback functions that process user interactions and return response objects to update the add-on UI.
- Gmail add-ons have a specific action for composing draft messages, requiring a `ComposeActionResponse` object from the callback function and a specific scope in the add-on's manifest.
- Add-ons can generate draft messages in Gmail by associating a widget with a callback function that returns a `ComposeActionResponse` object, which Gmail uses to populate a draft compose window.

[`Action`](https://developers.google.com/workspace/add-ons/concepts/actions) objects let you build interactive behavior into Google Workspace add-ons. They define what happens when a user interacts with a widget (for example, a button) in the add-on UI.

An action is attached to a given widget using a [widget handler function](https://developers.google.com/workspace/add-ons/concepts/actions#widget_handler_functions), which also defines the condition that triggers the action. When triggered, the action executes a designated [callback function](https://developers.google.com/workspace/add-ons/concepts/actions#callback_functions). The callback function is passed an [event object](https://developers.google.com/workspace/add-ons/concepts/event-objects) that carries information about the user's client-side interactions. You must implement the callback function and have it return a specific response object.

For example, say you want a button that builds and displays a new card when clicked. For this, you must create a new button widget and use the button widget handler function [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button#setOnClickAction\(Action\)) to set a card-building [`Action`](https://developers.google.com/workspace/add-ons/concepts/actions). The [`Action`](https://developers.google.com/workspace/add-ons/concepts/actions) you define specifies an Apps Script callback function that executes when the button is clicked. In this case, you implement the callback function to build the card you want and return an [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response) object. The response object tells the add-on to display the card the callback function built.

This page describes Gmail-specific widget actions you can include in your add-on.

## Gmail interactions

Google Workspace add-ons that extend Gmail can include an additional Gmail-specific widget action to compose draft messages. This action requires the associated action [callback function](https://developers.google.com/workspace/add-ons/concepts/actions#callback_functions) to return a specialized response object:

| Action attempted | Callback function should return |
| --- | --- |
| [Compose draft messages](https://developers.google.com/workspace/add-ons/gmail/compose) | [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response) |

To use these widget actions and response objects, the Google Workspace add-on must include the `https://www.googleapis.com/auth/gmail.addons.current.action.compose` [scope](https://developers.google.com/workspace/add-ons/concepts/workspace-scopes#gmail_add-on_scopes) in its manifest.

### Compose a message

Add-ons that extend Gmail can define a widget that, when interacted with, generates draft messages in Gmail (either new messages or replies). To do this,ys associate the triggering widget with a callback function that returns a [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response) object. When the callback function finishes executing, Gmail uses this response object to open and populate a draft compose window.

For more details and an example, see [Compose draft messages](https://developers.google.com/workspace/add-ons/gmail/compose).
