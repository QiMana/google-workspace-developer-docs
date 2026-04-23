---
source: https://developers.google.com/workspace/calendar/api/concepts/reminders
root: workspace
fetched_at: 2026-04-23T15:24:47.561Z
---

# Reminders & notifications

The Calendar API provides support for reminders and notifications.

- *Reminders* are alarms triggered at a specified time before an event starts.
- *Notifications* allow users to find out about changes to events in their calendar.

The latter item should not be confused with [push notifications](../guides/push.md) which, instead of being delivered to a user, notify another server of changes to a calendar.

> For more details about notifications in Google Calendar, go to [Modify Google Calendar notifications](https://support.google.com/calendar/answer/37242).

## Reminders

A reminder consists of:

- When to show the reminder, expressed as minutes before the event start time
- The delivery method to use (see [Delivery mechanisms](./reminders.md#delivery_mechanisms))

Reminders can be specified for whole calendars and for individual events. Users can set *default reminders* for each of their calendars; these defaults apply to all events within that calendar. However, users can also override these defaults for individual events, replacing them with a different set of reminders.

### Default reminders

Reminders are private information, specific to an authenticated user; they're *not* shared across multiple users. As a result:

- Default reminders are manipulated through the CalendarList collection, which contains user-specific calendar metadata
- They're *not* accessible through the Calendars collection, which contains global metadata shared across all users.

Default reminders are also returned when doing an Events list query.

### Overriding default reminders

To override the default reminders when you insert or modify an event, set [reminders.useDefault](../v3/reference/events.md#reminders.useDefault) to `false` and populate [reminders.overrides](../v3/reference/events.md#reminders.overrides) with the new reminder set.

```
"reminders": {
  "useDefault": false,
  # Overrides can be set if and only if useDefault is false.
  "overrides": [
      {
        "method": "reminderMethod",
        "minutes": "reminderMinutes"
      },
      # ...
  ]
}
```

To revert to the default set of reminders, perform an update setting [reminders.useDefault](../v3/reference/events.md#reminders.useDefault) back to `true`.

## Notifications

Calendar supports the following notification types:

- *Event creation*: a new event is added to one of the user's calendars.
- *Event change*: the organizer modified an event the user was invited to.
- *Event cancellation*: an event is canceled the user was invited to.
- *Attendee response*: an attendee to an event created by the user changed their response status.
- *Agenda*: a list of all the events in the user’s calendar, sent at the start of the day.

The user can decide what notifications to enable per calendar and the delivery method for each notification type. These settings are not shared with other users. Similar to default reminders, they’re accessible through the CalendarList collection.

To send email notifications to attendees for events that were inserted or updated with the API, call the [`insert`](../v3/reference/events/insert.md) or [`update`](../v3/reference/events/update.md) method and set the `sendUpdates` parameter to `"all"` or `"externalOnly"`.

## Delivery mechanisms

The delivery methods offered by Google Calendar are:

- *Pop-up*. These are supported on mobile platforms and on web clients.
- *Email* sent by the server.

The following table shows the supported methods for each reminder or notification type:

<table><tbody><tr><th></th><th></th><th>Pop-up</th><th>Email</th></tr><tr><td rowspan="2"><b>Reminders</b></td><td>Default reminders</td><td>✓</td><td>✓</td></tr><tr><td>Override reminders</td><td>✓</td><td>✓</td></tr><tr><td rowspan="5"><b>Notifications</b></td><td>Event creation</td><td>❌</td><td>✓</td></tr><tr><td>Event change</td><td>❌</td><td>✓</td></tr><tr><td>Event cancellation</td><td>❌</td><td>✓</td></tr><tr><td>Attendee response</td><td>❌</td><td>✓</td></tr><tr><td>Agenda</td><td>❌</td><td>✓</td></tr></tbody></table>
