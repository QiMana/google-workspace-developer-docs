---
source: https://developers.google.com/workspace/add-ons/calendar/building-calendar-interfaces
root: workspace
fetched_at: 2026-04-23T15:22:31.422Z
---

# Build Google Calendar interfaces

## Page Summary

- Google Workspace add-ons can customize interfaces for viewing and editing Google Calendar events, enabling task automation and third-party system connections.
- Add-ons can offer a homepage and a dedicated interface for interacting with calendar events, triggered by user actions.
- Add-on interfaces are built using Card objects and event objects, which provide contextual information about the user's interaction.
- When a calendar event is opened or updated, specific triggers execute functions defined in the add-on manifest to dynamically update the interface or synchronize data.
- Add-ons can integrate third-party conferencing solutions into Google Calendar, offering users additional options for online meetings.

Google Workspace add-ons can provide customized interfaces when the user is viewing or editing calendars and Calendar events. This lets you provide the user with additional relevant information, automate tasks, and connect third-party systems to Calendar.

When building an Google Workspace add-on interface for Calendar, you can provide a [homepage](https://developers.google.com/workspace/add-ons/concepts/homepages). You can use the same homepage for multiple hosts, or design a specific one for Calendar.

Your add-on can also define an interface that appears when the user has a Calendar event open.

## Access the add-on UI

Your UI can appear in several ways depending on the context. For example, an add-on can define a homepage interface, a Calendar event interface, an attachment selection interface, or all three:

- If a user clicks the add-on icon while in a calendar view, the add-on executes the corresponding [`calendar.homepageTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.homepageTrigger) function (if present). This function builds and returns a homepage card to Calendar for display. If no [`calendar.homepageTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.homepageTrigger) function is defined, a generic homepage card is displayed instead.
- If the user opens a Calendar event and then clicks the add-on icon, or the add-on is open when the user opens an event, the add-on executes the corresponding [`eventOpenTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.eventOpenTrigger) function (if present). This function builds the add-on's Calendar event interface and returns to Calendar for display.
- If the add-on defines an [`eventAttachmentTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.eventAttachmentTrigger) function, the add-on appears as an attachment provider when the user clicks **Add attachment** while editing a Calendar event. When the add-on is selected, the [`eventAttachmentTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.eventAttachmentTrigger) function builds the add-on's attachment selection interface and returns it to Calendar for display.

## Build the add-on Calendar interface

Follow these steps to build your UI. You can extend Calendar with a Google Workspace add-on by following these steps:

1. Decide whether you want your add-on to have a Calendar-specific [homepage](https://developers.google.com/workspace/add-ons/concepts/homepages). Also decide if you want to provide a custom interface while the user is editing Calendar events.
2. Add the appropriate [`addOns.common`](https://developers.google.com/apps-script/manifest/addons#AddOns.FIELDS.common) and [`addOns.calendar`](https://developers.google.com/apps-script/manifest/addons#AddOns.FIELDS.calendar) fields to the add-on script project [manifest](https://developers.google.com/workspace/add-ons/concepts/workspace-manifests), including any [scopes](https://developers.google.com/workspace/add-ons/concepts/workspace-scopes#calendar_scopes) required.
3. If you are providing a Calendar-specific [homepage](https://developers.google.com/workspace/add-ons/concepts/homepages), implement the [`calendar.homepageTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.homepageTrigger) function to build this interface. You can also choose to use the [`common.homepageTrigger`](https://developers.google.com/apps-script/manifest/addons#Common.FIELDS.homepageTrigger) interface for multiple host applications.
4. If you are providing a Calendar event interface, implement a [`calendar.eventOpenTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.eventOpenTrigger) function to build this interface. See [Extending the Calendar event interface](#extending_the_calendar_event_interface) for details.
5. Implement the associated callback functions needed to respond to the user's UI interactions, such as button clicks.

### Calendar homepages

add-ons support displaying Google Workspace add-on [homepages](https://developers.google.com/workspace/add-ons/concepts/homepages). To show your add-on's common homepage in Calendar, make sure there is an [`addOns.calendar`](https://developers.google.com/apps-script/manifest/addons#AddOns.FIELDS.calendar) field in the add-on's manifest.

Alternatively, add a [`calendar.homepageTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.homepageTrigger) to the add-on manifest to provide a Calendar-specific homepage.

In either case, you must provide the name of a homepage trigger function in your add-on's script project. This function is automatically called to build the Calendar homepage when it is needed. Implement this function to build and return a single [`Card`](https://developers.google.com/apps-script/reference/card-service/card) or an array of [`Card`](https://developers.google.com/apps-script/reference/card-service/card) objects that make up the homepage. The homepage trigger function is passed an [event object](https://developers.google.com/workspace/add-ons/concepts/event-objects) as a parameter that contains some general information such as the client's platform. Use the event object data to tailor the construction of the homepage.

### Extend the Calendar event interface

Calendar relies on a contextual trigger to determine what interface (if any) to display when the user edits a Calendar event. When the trigger fires, it executes the contextual trigger function specified by the [`calendar.eventOpenTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.eventOpenTrigger) field in the add-on manifest.

Implement the function named in the [`calendar.eventOpenTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.eventOpenTrigger) field. This function accepts an [event object](#calendar_event_objects) as an argument and must return either a single [`Card`](https://developers.google.com/apps-script/reference/card-service/card) object or an array of [`Card`](https://developers.google.com/apps-script/reference/card-service/card) objects for Calendar to display while the user has the event open.

### Event objects

An [event object](https://developers.google.com/workspace/add-ons/concepts/event-objects) is created and passed to the [`calendar.eventOpenTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.eventOpenTrigger) contextual trigger function when a user opens a Calendar event. The trigger function can use the information in this event object to determine how to construct add-on cards or control the add-on behavior. Event objects are also created and passed to [`homepageTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.homepageTrigger) functions when an add-on is first opened, and when the user clicks or selects interactive widgets.

The full structure of event objects is described in [Event objects](https://developers.google.com/workspace/add-ons/concepts/event-objects). When Calendar is the acting host app of the add-on, contextual trigger and widget interaction event objects include the [Calendar event object](https://developers.google.com/workspace/add-ons/concepts/event-objects#calendar_event_object) field that carries Calendar-specific client information.

### Update Calendar events

In addition to the contextual [`calendar.eventOpenTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.eventOpenTrigger) that fires when a user opens a Calendar event for editing, you can also define an [`calendar.eventUpdateTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.eventUpdateTrigger) that fires when the user updates and saves a Calendar event. This trigger only fires if the user makes one or more of the following edits:

- Adds one or more attendees.
- Removes one or more attendees.
- Adds or switches to a different conferencing solution.

When this trigger fires, it executes the trigger function specified by the [`calendar.eventUpdateTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.eventUpdateTrigger) manifest field. The function is executed before the Calendar event edit is saved.

The [`calendar.eventUpdateTrigger`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.eventUpdateTrigger) is typically used to do one or more of the following:

- Update the add-on's Calendar event interface in response to user changes to the Calendar event.
- Sync Calendar event data with a third-party system, such as a conferencing system that is connected to Calendar.

If you need your add-on to make adjustments to a Calendar event's data (such as its attendee list), set the add-on [`calendar.currentEventAccess`](https://developers.google.com/apps-script/manifest/calendar-addons#Calendar.FIELDS.currentEventAccess) manifest field to `WRITE` or `READ_WRITE`. This also requires the add-on to have the `https://www.googleapis.com/auth/calendar.addons.current.event.write` [scope](https://developers.google.com/workspace/add-ons/concepts/workspace-scopes#calendar_scopes).

## Add conferencing solutions

If you maintain a third-party conferencing system, you can integrate it with Calendar by adding conferencing solutions. This feature was previously in beta as *Calendar conferencing add-ons*.

[Conferencing solutions](https://developers.google.com/workspace/add-ons/calendar/conferencing/overview#conference_solutions) represent third-party conference options that users can attach to Calendar events. The [Third-party conferencing overview](https://developers.google.com/workspace/add-ons/calendar/conferencing/overview) documentation provides details on how to build an add-on that adds new conferencing solutions. It isn't necessary to build a UI for this type of extension; added solutions appear as options in the drop-down menu of the Calendar event UI.
