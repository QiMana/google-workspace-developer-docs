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

Add-on actions provide interactive behavior to [widgets](./widgets.md). By creating an action, you define what happens when the user selects or updates a widget.

In most cases, you can define add-on actions by using [`Action`](../../../apps-script/reference/card-service/action.md) objects provided by the Google Apps Script [Card service](../../../apps-script/reference/card-service/card-service.md). Each [`Action`](../../../apps-script/reference/card-service/action.md) is associated with a *callback function* when you create it. You implement the callback function to take selected steps when the user interacts with the widget. You must also link the [`Action`](../../../apps-script/reference/card-service/action.md) to the widget using an appropriate [widget handler function](#widget-handler) that defines what kind of interaction triggers the [`Action`](../../../apps-script/reference/card-service/action.md) callback.

Configure a widget with an [`Action`](../../../apps-script/reference/card-service/action.md) using this process:

1. Create the [`Action`](../../../apps-script/reference/card-service/action.md) object, specifying the callback function that it should execute along with any parameters it requires.
2. Call the appropriate [widget handler function](#widget-handler) on the widget using the [`Action`](../../../apps-script/reference/card-service/action.md) object.
3. Implement the callback function to enact the required behavior.

Don't confuse [`Action`](../../../apps-script/reference/card-service/action.md) objects with [`CardAction`](../../../apps-script/reference/card-service/card-action.md) objects. [`CardAction`](../../../apps-script/reference/card-service/card-action.md) objects are card header menu items, while [`Action`](../../../apps-script/reference/card-service/action.md) objects define responses to user interactions with the UI.

## Widget handler functions

To link a widget to an [`Action`](../../../apps-script/reference/card-service/action.md) or other behavior, use a widget handler function. The handler function determines what kind of interaction (for example, clicking the widget or editing a text field) triggers the action behavior. The handler function also defines what steps the UI takes, if any, after the action completes.

The following table lists the different handler types for widgets and what widgets they are used with:

| Handler function | Triggers action | Applicable widgets | Description |
| --- | --- | --- | --- |
| `setOnChangeAction` | The widget value changes | `         DatePicker`   `         DateTimePicker`   `         SelectionInput`   `Switch`   `         TextInput` `         TimePicker` | Sets an `Action` that executes an Apps Script function when the widget loses focus, such as when the user enters text in an input and presses Enter. The handler automatically passes an [event object](#action-event) to the function it calls. You can insert additional parameter information in this event object if selected. |
| `setOnClickAction` | The user clicks the widget | `CardAction`   `Image`   `ImageButton`   `DecoratedText`   `TextButton` | Sets an `Action` that executes an Apps Script function when the user clicks the widget. The handler automatically passes an [event object](#action-event) to the function it calls. You can insert optional parameter information in this event object. |
| `setComposeAction` | The user clicks the widget | `CardAction`   `Image`   `ImageButton`   `DecoratedText`   `TextButton` | **Gmail specific.** Sets an `Action` that builds an email draft, then presents that draft to the user in a Gmail UI compose window. You can build the draft as a new message or a reply to the open message in Gmail. When the handler calls the draft-building callback function, it passes an [event object](#action-event) to the callback function. See [Compose draft messages](../gmail/compose.md) for more details. |
| `setOnClickOpenLinkAction` | The user clicks the widget | `CardAction`   `Image`   `ImageButton`   `DecoratedText`   `TextButton` | Sets an `Action` to open a URL when the user clicks the widget. Use this handler when you must construct the URL or other actions must take place before the link opens; otherwise it is usually simpler to use `setOpenLink`. You can only open the URL in a new window. When closed, you can cause the UI to reload the add-on. |
| `setOpenLink` | The user clicks the widget | `CardAction`   `Image`   `ImageButton`   `DecoratedText`   `TextButton` | Directly opens a URL when the user clicks the widget. Use this handler when you know the URL and only need to open it; otherwise use `setOnClickOpenLinkAction`. You can open the URL in a new window or in an overlay. When closed, you can cause the UI to reload the add-on. |
| `setSuggestionsAction` | The user enters text into an input | `TextInput` | Sets an `Action` that executes an Apps Script function when the user enters text into a text input widget. The handler automatically passes an [event object](#action-event) to the function it calls. See [Autocomplete suggestions for text inputs](../how-tos/suggestions.md) for more details. |

## Callback functions

Callback functions execute when an [`Action`](../../../apps-script/reference/card-service/action.md) triggers. Because callback functions are Apps Script functions, you can have them do almost anything any other script function can do.

A callback function sometimes returns a specific response object. These types of responses indicate additional operations that need to happen after the callback finishes executing, such as displaying a new card or presenting autocomplete suggestions. When your callback function must return a specific response object, you use a builder class in the [Card service](../../../apps-script/reference/card-service/card-service.md) to construct that object.

The following table shows when your callback functions must return a specific response object for specific actions. These actions are all independent of the specific host application the add-on is extending:

| Action attempted | Callback function should return |
| --- | --- |
| [Navigate](../how-tos/navigation.md#navigation_methods) | [`ActionResponse`](../../../apps-script/reference/card-service/action-response.md) |
| Display a [`Notification`](../../../apps-script/reference/card-service/notification.md) | [`ActionResponse`](../../../apps-script/reference/card-service/action-response.md) |
| Open a link using [`setOnClickOpenLinkAction`](#widget-handler) | [`ActionResponse`](../../../apps-script/reference/card-service/action-response.md) |
| [Display autocomplete suggestions](../how-tos/suggestions.md) | [`SuggestionResponse`](../../../apps-script/reference/card-service/suggestions-response.md) |
| Use a [universal action](../how-tos/universal-actions.md) | [`UniversalActionResponse`](../../../apps-script/reference/card-service/universal-action-response.md) |
| Other actions | Nothing |

### Actions for Google Workspace host applications

In addition to these actions, each host application has its own set of actions that can only be taken in that host. For details, see the following guides:

- [Calendar actions](../calendar/calendar-actions.md)
- [Chat actions](../chat/build.md#actions)
- [Drive actions](../drive/drive-actions.md)
- [Gmail actions](../gmail/gmail-actions.md)
- [Editor actions](../editors/gsao/editor-actions.md)

When using the response builder classes, call the `build` method to produce the response objects. Failing to do so results in an error.

[Universal actions](../how-tos/universal-actions.md) are defined in the project manifest and don't need [`Action`](../../../apps-script/reference/card-service/action.md) objects, but their callback functions must return a [`UniversalActionResponse`](../../../apps-script/reference/card-service/universal-action-response.md).

## Action event objects

When your add-on triggers an [`Action`](../../../apps-script/reference/card-service/action.md), the UI automatically constructs a JSON *event object* and passes it as an argument to the [`Action`](../../../apps-script/reference/card-service/action.md) callback function. This event object contains information about the user's current client-side context, such as the current values of all the interactive widgets in the displayed card.

Action event objects have a specific JSON structure that organizes the information that they contain. The same structure is used when a [homepage trigger](./homepages.md#homepage_configuration) fires to create a homepage, or when a [contextual trigger](../guides/glossary.md#contextual_triggering) fires to update the add-on display.

See [Event objects](./event-objects.md) for a full explanation of the event object structure.

Gmail add-ons used a simplified version of this event object structure, which is now deprecated. For backward compatibility, all of the original Gmail add-ons event object fields are still contained within the new event object structure (see [event object structure](./event-objects.md#event_object_structure)). However, the same information is reproduced in the `commonEventObject` and [Gmail event](./event-objects.md#gmail_event_object) object substructures. If you are upgrading a Gmail add-on into a Google Workspace add-on, adjust your code to use the updated event object fields. Eventually, the original Gmail event object fields will be removed.
