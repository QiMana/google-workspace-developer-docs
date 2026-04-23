---
source: https://developers.google.com/workspace/add-ons/calendar/calendar-actions
root: workspace
fetched_at: 2026-04-23T15:22:32.212Z
---

# Calendar actions

## Page Summary

- Actions enable interactive behavior in Google Workspace add-ons by defining responses to user interactions with UI widgets.
- Actions are linked to widgets using handlers, triggering callback functions with event details for custom logic.
- Calendar add-ons have specific actions for attendee management, conference data, and attachments, requiring proper setup and permissions.
- Callback functions for Calendar actions return specialized response objects to manipulate event details like attendees and attachments.
- Changes made by these actions are only saved when the user saves the Calendar event itself.

[`Action`](https://developers.google.com/workspace/add-ons/concepts/actions) objects let you build interactive behavior into Google Workspace add-ons. They define what happens when a user interacts with a widget (for example, a button) in the add-on UI.

An action is attached to a given widget using a [widget handler function](https://developers.google.com/workspace/add-ons/concepts/actions#widget_handler_functions), which also defines the condition that triggers the action. When triggered, the action executes a designated [callback function](https://developers.google.com/workspace/add-ons/concepts/actions#callback_functions). The callback function is passed an [event object](https://developers.google.com/workspace/add-ons/concepts/event-objects) that carries information about the user's client-side interactions. You must implement the callback function and have it return a specific response object.

For example, say you want a button that builds and displays a new card when clicked. For this, you must create a new button widget and use the button widget handler function [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button#setOnClickAction\(Action\)) to set a card-building [`Action`](https://developers.google.com/workspace/add-ons/concepts/actions). The [`Action`](https://developers.google.com/workspace/add-ons/concepts/actions) you define specifies an Apps Script callback function that executes when the button is clicked. In this case, you implement the callback function to build the card you want and return an [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response) object. The response object tells the add-on to display the card the callback function built.

This page describes Calendar-specific widget actions you can include in your add-on.

## Google Calendar interactions

Google Workspace add-ons that extend Calendar can include additional Calendar-specific widget actions. These actions require the associated action [callback function](https://developers.google.com/workspace/add-ons/concepts/actions#callback_functions) to return specialized response objects:

| Action attempted | Callback function should return |
| --- | --- |
| [Adding attendees](#add_attendees_with_a_callback_function) | [`CalendarEventActionResponse`](https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response) |
| [Setting conference data](#set_conference_data_with_a_callback_function) | [`CalendarEventActionResponse`](https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response) |
| [Adding attachments](#add_attachments_with_a_callback_function) | [`CalendarEventActionResponse`](https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response) |

To use these widget actions and response objects, all the following must be true:

- The action is triggered while the user has a Calendar event open.
- The Google Workspace add-on's [`addOns.calendar.currentEventAccess`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.currentEventAccess) manifest field is set to `WRITE` or `READ_WRITE`.
- The add-on includes the `https://www.googleapis.com/auth/calendar.addons.current.event.write` [Calendar scope](https://developers.google.com/workspace/add-ons/concepts/workspace-scopes#calendar_scopes).

Changes made by the action callback function aren't saved until the user saves the Calendar event.

### Add attendees with a callback function

The following example shows how to create a button that adds a specific attendee to a Calendar event being edited. This example uses a basic card structure:

```
/**
 * Build a basic card with a button that sends a notification.
 * This function is called as part of the eventOpenTrigger that builds
 * a UI when the user opens an event.
 *
 * @param e The event object passed to eventOpenTrigger function.
 * @return {Card}
 */
function buildSimpleCard(e) {
  var buttonAction = CardService.newAction()
      .setFunctionName('onAddAttendeesButtonClicked');
  var button = CardService.newTextButton()
      .setText('Add new attendee')
      .setOnClickAction(buttonAction);

  // Check the event object to determine if the user can add
  // attendees and disable the button if not.
  if (!e.calendar.capabilities.canAddAttendees) {
    button.setDisabled(true);
  }

  // ...continue creating card sections and widgets, then create a Card
  // object to add them to. Return the built Card object.
}

/**
 * Callback function for a button action. Adds attendees to the
 * Calendar event being edited.
 *
 * @param {Object} e The action event object.
 * @return {CalendarEventActionResponse}
 */
function onAddAttendeesButtonClicked (e) {
  return CardService.newCalendarEventActionResponseBuilder()
      .addAttendees(["aiko@example.com", "malcom@example.com"])
      .build();
}
```

### Set conference data with a callback function

This action sets the conference data on the open event. For this conference data the conference solution ID needs to be specified, because the action was not triggered by the user selecting the desired solution.

The following example shows how to create a button that sets conference data for an event being edited:

```
/**
 * Build a basic card with a button that sends a notification.
 * This function is called as part of the eventOpenTrigger that builds
 * a UI when the user opens a Calendar event.
 *
 * @param e The event object passed to eventOpenTrigger function.
 * @return {Card}
 */
function buildSimpleCard(e) {
  var buttonAction = CardService.newAction()
      .setFunctionName('onSaveConferenceOptionsButtonClicked')
      .setParameters(
        {'phone': "1555123467", 'adminEmail': "joyce@example.com"});
  var button = CardService.newTextButton()
      .setText('Add new attendee')
      .setOnClickAction(buttonAction);

  // Check the event object to determine if the user can set
  // conference data and disable the button if not.
  if (!e.calendar.capabilities.canSetConferenceData) {
    button.setDisabled(true);
  }

  // ...continue creating card sections and widgets, then create a Card
  // object to add them to. Return the built Card object.
}

/**
 * Callback function for a button action. Sets conference data for the
 * Calendar event being edited.
 *
 * @param {Object} e The action event object.
 * @return {CalendarEventActionResponse}
 */
function onSaveConferenceOptionsButtonClicked(e) {
  var parameters = e.commonEventObject.parameters;

  // Create an entry point and a conference parameter.
  var phoneEntryPoint = ConferenceDataService.newEntryPoint()
    .setEntryPointType(ConferenceDataService.EntryPointType.PHONE)
    .setUri('tel:' + parameters['phone']);

  var adminEmailParameter = ConferenceDataService.newConferenceParameter()
      .setKey('adminEmail')
      .setValue(parameters['adminEmail']);

  // Create a conference data object to set to this Calendar event.
  var conferenceData = ConferenceDataService.newConferenceDataBuilder()
      .addEntryPoint(phoneEntryPoint)
      .addConferenceParameter(adminEmailParameter)
      .setConferenceSolutionId('myWebScheduledMeeting')
      .build();

  return CardService.newCalendarEventActionResponseBuilder()
      .setConferenceData(conferenceData)
      .build();
}
```

### Add attachments with a callback function

The following example shows how to create a button that adds an attachment to a Calendar event being edited:

```
/**
 * Build a basic card with a button that creates a new attachment.
 * This function is called as part of the eventAttachmentTrigger that
 * builds a UI when the user goes through the add-attachments flow.
 *
 * @param e The event object passed to eventAttachmentTrigger function.
 * @return {Card}
 */
function buildSimpleCard(e) {
  var buttonAction = CardService.newAction()
      .setFunctionName('onAddAttachmentButtonClicked');
  var button = CardService.newTextButton()
      .setText('Add a custom attachment')
      .setOnClickAction(buttonAction);

  // Check the event object to determine if the user can add
  // attachments and disable the button if not.
  if (!e.calendar.capabilities.canAddAttachments) {
    button.setDisabled(true);
  }

  // ...continue creating card sections and widgets, then create a Card
  // object to add them to. Return the built Card object.
}

/**
 * Callback function for a button action. Adds attachments to the
 * Calendar event being edited.
 *
 * @param {Object} e The action event object.
 * @return {CalendarEventActionResponse}
 */
function onAddAttachmentButtonClicked(e) {
  return CardService.newCalendarEventActionResponseBuilder()
           .addAttachments([
             CardService.newAttachment()
               .setResourceUrl("https://example.com/test")
               .setTitle("Custom attachment")
               .setMimeType("text/html")
               .setIconUrl("https://example.com/test.png")
           ])
      .build();
}
```

#### Set the attachment icon

The attachment icon must be hosted on Google's infrastructure. See [Provide attachment icons](https://developers.google.com/workspace/add-ons/calendar/attachment/providing-icons) for details.
