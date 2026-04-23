---
source: https://developers.google.com/workspace/add-ons/concepts/actions
root: workspace
fetched_at: 2026-04-23T15:22:37.852Z
---

# Add-on actions

## Page Summary

- Add-on actions provide interactive behavior to widgets by defining what happens when a user interacts with them, such as selecting or updating a widget.
- You define actions using `Action` objects, which are associated with callback functions that execute when the action is triggered.
- Widget handler functions link widgets to specific actions and determine the type of user interaction that triggers the action's callback function.
- Callback functions can perform various tasks and may need to return specific response objects, like `ActionResponse` for navigation or `SuggestionResponse` for autocomplete suggestions.
- Action event objects, containing client-side context information, are automatically passed to callback functions when an action is triggered.

Add-on actions provide interactive behavior to [widgets](https://developers.google.com/workspace/add-ons/concepts/widgets). By creating an action, you define what happens when the user selects or updates a widget.

In most cases, you can define add-on actions by using [`Action`](https://developers.google.com/apps-script/reference/card-service/action) objects provided by the Google Apps Script [Card service](https://developers.google.com/apps-script/reference/card-service/card-service). Each [`Action`](https://developers.google.com/apps-script/reference/card-service/action) is associated with a *callback function* when you create it. You implement the callback function to take selected steps when the user interacts with the widget. You must also link the [`Action`](https://developers.google.com/apps-script/reference/card-service/action) to the widget using an appropriate [widget handler function](#widget-handler) that defines what kind of interaction triggers the [`Action`](https://developers.google.com/apps-script/reference/card-service/action) callback.

Configure a widget with an [`Action`](https://developers.google.com/apps-script/reference/card-service/action) using this process:

1. Create the [`Action`](https://developers.google.com/apps-script/reference/card-service/action) object, specifying the callback function that it should execute along with any parameters it requires.
2. Call the appropriate [widget handler function](#widget-handler) on the widget using the [`Action`](https://developers.google.com/apps-script/reference/card-service/action) object.
3. Implement the callback function to enact the required behavior.

Don't confuse [`Action`](https://developers.google.com/apps-script/reference/card-service/action) objects with [`CardAction`](https://developers.google.com/apps-script/reference/card-service/card-action) objects. [`CardAction`](https://developers.google.com/apps-script/reference/card-service/card-action) objects are card header menu items, while [`Action`](https://developers.google.com/apps-script/reference/card-service/action) objects define responses to user interactions with the UI.

## Widget handler functions

To link a widget to an [`Action`](https://developers.google.com/apps-script/reference/card-service/action) or other behavior, use a widget handler function. The handler function determines what kind of interaction (for example, clicking the widget or editing a text field) triggers the action behavior. The handler function also defines what steps the UI takes, if any, after the action completes.

The following table lists the different handler types for widgets and what widgets they are used with:

| Handler function | Triggers action | Applicable widgets | Description |
| --- | --- | --- | --- |
| `setOnChangeAction` | The widget value changes | `         DatePicker`   `         DateTimePicker`   `         SelectionInput`   `Switch`   `         TextInput` `         TimePicker` | Sets an `Action` that executes an Apps Script function when the widget loses focus, such as when the user enters text in an input and presses Enter. The handler automatically passes an [event object](#action-event) to the function it calls. You can insert additional parameter information in this event object if selected. |
| `setOnClickAction` | The user clicks the widget | `CardAction`   `Image`   `ImageButton`   `DecoratedText`   `TextButton` | Sets an `Action` that executes an Apps Script function when the user clicks the widget. The handler automatically passes an [event object](#action-event) to the function it calls. You can insert optional parameter information in this event object. |
| `setComposeAction` | The user clicks the widget | `CardAction`   `Image`   `ImageButton`   `DecoratedText`   `TextButton` | **Gmail specific.** Sets an `Action` that builds an email draft, then presents that draft to the user in a Gmail UI compose window. You can build the draft as a new message or a reply to the open message in Gmail. When the handler calls the draft-building callback function, it passes an [event object](#action-event) to the callback function. See [Compose draft messages](https://developers.google.com/workspace/add-ons/gmail/compose) for more details. |
| `setOnClickOpenLinkAction` | The user clicks the widget | `CardAction`   `Image`   `ImageButton`   `DecoratedText`   `TextButton` | Sets an `Action` to open a URL when the user clicks the widget. Use this handler when you must construct the URL or other actions must take place before the link opens; otherwise it is usually simpler to use `setOpenLink`. You can only open the URL in a new window. When closed, you can cause the UI to reload the add-on. |
| `setOpenLink` | The user clicks the widget | `CardAction`   `Image`   `ImageButton`   `DecoratedText`   `TextButton` | Directly opens a URL when the user clicks the widget. Use this handler when you know the URL and only need to open it; otherwise use `setOnClickOpenLinkAction`. You can open the URL in a new window or in an overlay. When closed, you can cause the UI to reload the add-on. |
| `setSuggestionsAction` | The user enters text into an input | `TextInput` | Sets an `Action` that executes an Apps Script function when the user enters text into a text input widget. The handler automatically passes an [event object](#action-event) to the function it calls. See [Autocomplete suggestions for text inputs](https://developers.google.com/workspace/add-ons/how-tos/suggestions) for more details. |

## Callback functions

Callback functions execute when an [`Action`](https://developers.google.com/apps-script/reference/card-service/action) triggers. Because callback functions are Apps Script functions, you can have them do almost anything any other script function can do.

A callback function sometimes returns a specific response object. These types of responses indicate additional operations that need to happen after the callback finishes executing, such as displaying a new card or presenting autocomplete suggestions. When your callback function must return a specific response object, you use a builder class in the [Card service](https://developers.google.com/apps-script/reference/card-service/card-service) to construct that object.

The following table shows when your callback functions must return a specific response object for specific actions. These actions are all independent of the specific host application the add-on is extending:

| Action attempted | Callback function should return |
| --- | --- |
| [Navigate](https://developers.google.com/workspace/add-ons/how-tos/navigation#navigation_methods) | [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response) |
| Display a [`Notification`](https://developers.google.com/apps-script/reference/card-service/notification) | [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response) |
| Open a link using [`setOnClickOpenLinkAction`](#widget-handler) | [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response) |
| [Display autocomplete suggestions](https://developers.google.com/workspace/add-ons/how-tos/suggestions) | [`SuggestionResponse`](https://developers.google.com/apps-script/reference/card-service/suggestions-response) |
| Use a [universal action](https://developers.google.com/workspace/add-ons/how-tos/universal-actions) | [`UniversalActionResponse`](https://developers.google.com/apps-script/reference/card-service/universal-action-response) |
| Other actions | Nothing |

### Actions for Google Workspace host applications

In addition to these actions, each host application has its own set of actions that can only be taken in that host. For details, see the following guides:

- [Calendar actions](https://developers.google.com/workspace/add-ons/calendar/calendar-actions)
- [Chat actions](https://developers.google.com/workspace/add-ons/chat/build#actions)
- [Drive actions](https://developers.google.com/workspace/add-ons/drive/drive-actions)
- [Gmail actions](https://developers.google.com/workspace/add-ons/gmail/gmail-actions)
- [Editor actions](https://developers.google.com/workspace/add-ons/editors/gsao/editor-actions)

When using the response builder classes, call the `build` method to produce the response objects. Failing to do so results in an error.

[Universal actions](https://developers.google.com/workspace/add-ons/how-tos/universal-actions) are defined in the project manifest and don't need [`Action`](https://developers.google.com/apps-script/reference/card-service/action) objects, but their callback functions must return a [`UniversalActionResponse`](https://developers.google.com/apps-script/reference/card-service/universal-action-response).

## Action event objects

When your add-on triggers an [`Action`](https://developers.google.com/apps-script/reference/card-service/action), the UI automatically constructs a JSON *event object* and passes it as an argument to the [`Action`](https://developers.google.com/apps-script/reference/card-service/action) callback function. This event object contains information about the user's current client-side context, such as the current values of all the interactive widgets in the displayed card.

Action event objects have a specific JSON structure that organizes the information that they contain. The same structure is used when a [homepage trigger](https://developers.google.com/workspace/add-ons/concepts/homepages#homepage_configuration) fires to create a homepage, or when a [contextual trigger](https://developers.google.com/workspace/add-ons/guides/glossary#contextual_triggering) fires to update the add-on display.

See [Event objects](https://developers.google.com/workspace/add-ons/concepts/event-objects) for a full explanation of the event object structure.

Gmail add-ons used a simplified version of this event object structure, which is now deprecated. For backward compatibility, all of the original Gmail add-ons event object fields are still contained within the new event object structure (see [event object structure](https://developers.google.com/workspace/add-ons/concepts/event-objects#event_object_structure)). However, the same information is reproduced in the `commonEventObject` and [Gmail event](https://developers.google.com/workspace/add-ons/concepts/event-objects#gmail_event_object) object substructures. If you are upgrading a Gmail add-on into a Google Workspace add-on, adjust your code to use the updated event object fields. Eventually, the original Gmail event object fields will be removed.
