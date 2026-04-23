---
source: https://developers.google.com/apps-script/reference/calendar/calendar-event-series
root: apps-script
fetched_at: 2026-04-23T15:18:53.401Z
---

# Class CalendarEventSeries

## Page Summary

- The `CalendarEventSeries` object in Google Calendar represents a recurring event and offers methods to manage its properties.
- You can add or remove guests, manage their permissions, and retrieve guest information.
- The object provides functionality to add, retrieve, and remove various types of reminders.
- You can access core event details such as title, description, location, color, and dates.
- The object allows modification of event properties like title, description, location, recurrence, and visibility.
- The entire event series or specific tags can be deleted using the provided methods.

Represents a series of events (a recurring event).

## Detailed documentation

### addEmailReminder(minutesBefore)

Adds a new email reminder to the event. The reminder must be at least 5 minutes, and at most 4 weeks (40320 minutes), before the event.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId)
// instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');

// Adds an email notification for 15 minutes before the event.
event.addEmailReminder(15);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `minutesBefore` | `Integer` | the number of minutes before the event |

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if there are more than 5 reminders on the event or the time is not within the legal range

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### addGuest(email)

Adds a guest to the event.

```
// Example 1: Add a guest to one event
function addAttendeeToEvent() {
  // Replace the below values with your own
  const attendeeEmail =
      'user@example.com';  // Email address of the person you need to add
  const calendarId =
      'calendar_123@group.calendar.google.com';  // ID of calendar containing
  // event
  const eventId = '123abc';  // ID of event instance

  const calendar = CalendarApp.getCalendarById(calendarId);
  if (calendar === null) {
    // Calendar not found
    console.log('Calendar not found', calendarId);
    return;
  }
  const event = calendar.getEventById(eventId);
  if (event === null) {
    // Event not found
    console.log('Event not found', eventId);
    return;
  }
  event.addGuest(attendeeEmail);
}

// Example 2: Add a guest to all events on a calendar within a specified
// timeframe
function addAttendeeToAllEvents() {
  // Replace the following values with your own
  const attendeeEmail =
      'user@example.com';  // Email address of the person you need to add
  const calendarId =
      'calendar_123@group.calendar.google.com';  // ID of calendar with the
  // events
  const startDate =
      new Date('YYYY-MM-DD');  // The first date to add the guest to the events
  const endDate =
      new Date('YYYY-MM-DD');  // The last date to add the guest to the events

  const calendar = CalendarApp.getCalendarById(calendarId);
  if (calendar === null) {
    // Calendar not found
    console.log('Calendar not found', calendarId);
    return;
  }
  // Get the events within the specified timeframe
  const calEvents = calendar.getEvents(startDate, endDate);
  console.log(calEvents.length);  // Checks how many events are found
  // Loop through all events and add the attendee to each of them
  for (let i = 0; i < calEvents.length; i++) {
    const event = calEvents[i];
    event.addGuest(attendeeEmail);
  }
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `email` | `String` | The email address of the guest. |

#### Return

`CalendarEventSeries` — This `CalendarEventSeries` for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### addPopupReminder(minutesBefore)

Adds a new pop-up notification to the event. The notification must be at least 5 minutes, and at most 4 weeks (40320 minutes), before the event.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId)
// instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');

// Adds a pop-up notification for 15 minutes before the event.
event.addPopupReminder(15);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `minutesBefore` | `Integer` | the number of minutes before the event |

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### addSmsReminder(minutesBefore)

Adds a new SMS reminder to the event. The reminder must be at least 5 minutes, and at most 4 weeks (40320 minutes), before the event.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `minutesBefore` | `Integer` | the number of minutes before the event |

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if there are more than 5 reminders on the event or the time is not within the legal range

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### anyoneCanAddSelf()

Determines whether people can add themselves as guests to a Calendar event.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId)
// instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');

// Determines whether people can add themselves as guests to the event and logs
// it.
console.log(event.anyoneCanAddSelf());
```

#### Return

`Boolean` — `true` if non-guests can add themselves to the event; `false` if not

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### deleteEventSeries()

Deletes the event series.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### deleteTag(key)

Deletes a key/value tag from the event.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | the tag key |

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### getAllTagKeys()

Gets all keys for tags that have been set on the event.

#### Return

`String[]` — an array of string keys

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getColor()

Returns the color of the calendar event.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId)
// instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');

// Gets the color of the calendar event and logs it.
const eventColor = event.getColor();
console.log(eventColor);
```

#### Return

`String` — The string representation of the event color, as an index (1-11) of values from `CalendarApp.EventColor`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getCreators()

Gets the creators of an event.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId)
// instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');

// Gets a list of the creators of the event and logs it.
console.log(event.getCreators());
```

#### Return

`String[]` — the email addresses of the event's creators

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getDateCreated()

Gets the date the event was created. You must have access to the calendar.

```
// Opens the calendar by using its ID.
// To get the user's default calendar use CalendarApp.getDefault() instead.
// TODO(developer): Replace the calendar ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 1st, 2023 that takes
// place between 8:10 AM and 4:25 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 01, 2023 08:10:00'),
    new Date('Feb 01, 2023 16:25:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, gets the date that the
  // event was created and logs it.
  const eventCreated = event.getDateCreated();
  console.log(eventCreated);
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Return

`Date` — the date of creation

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getDescription()

Gets the description of the event. You must have edit access to the calendar.

```
// Opens the calendar by its ID.
// To get the user's default calendar use CalendarApp.getDefault() instead.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 4th, 2023 that takes
// place between 4:00 PM and 5:00 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 04, 2023 16:00:00'),
    new Date('Feb 04, 2023 17:00:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, sets the description of the
  // event.
  event.setDescription('Important meeting');

  // Gets the description of the event and logs it.
  const description = event.getDescription();
  console.log(description);
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Return

`String` — the description

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getEmailReminders()

Gets the minute values for all email reminders for the event. You must have edit access to the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 4th, 2023 that takes
// place between 5:00 PM and 6:00 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 04, 2023 15:00:00'),
    new Date('Feb 04, 2023 18:00:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, adds email reminders for
  // the user to be sent at 4 and 7 minutes before the event.
  event.addEmailReminder(4);
  event.addEmailReminder(7);

  // Gets the minute values for all email reminders that are set up for the user
  // for this event and logs it.
  const emailReminder = event.getEmailReminders();
  console.log(emailReminder);
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Return

`Integer[]` — an array in which each value corresponds to the number of minutes before the event that a reminder triggers

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getEventType()

Gets the `EventType` of this event.

```
// Opens the default calendar and logs all out-of-office events for the current day.
const calendar = CalendarApp.getDefaultCalendar();
const events = calendar.getEventsForDay(new Date());
console.log(events.filter(e => e.getEventType() === CalendarApp.EventType.OUT_OF_OFFICE));
```

#### Return

`EventType` — The event type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getGuestByEmail(email)

Gets a guest by email address.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 25th, 2023 that takes
// place between 5:00 PM and 5:25 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 25,2023 17:00:00'),
    new Date('Feb 25,2023 17:25:00'),
    )[0];

// Gets a guest by email address.
const guestEmailId = event.getGuestByEmail('alex@example.com');

// If the email address corresponds to an event guest, logs the email address.
if (guestEmailId) {
  console.log(guestEmailId.getEmail());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `email` | `String` | the address of the guest |

#### Return

`EventGuest` — the guest, or null if the email address does not correspond to a guest

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### getGuestList()

Gets the guests for the event, not including the event owner.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 25th, 2023 that takes
// place between 5:00 PM and 5:25 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 25,2023 17:00:00'),
    new Date('Feb 25,2023 17:25:00'),
    )[0];

// Adds two guests to the event by using their email addresses.
event.addGuest('alex@example.com');
event.addGuest('cruz@example.com');

// Gets the guests list for the event.
const guestList = event.getGuestList();

// Loops through the list to get all the guests and logs their email addresses.
for (const guest of guestList) {
  console.log(guest.getEmail());
}
```

#### Return

`EventGuest[]` — an array of the guests

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getGuestList(includeOwner)

Gets the guests for the event, potentially including the event owners.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 25th, 2023 that takes
// place between 5:00 PM and 5:25 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 25,2023 17:00:00'),
    new Date('Feb 25,2023 17:25:00'),
    )[0];

// Gets the guests list for the event, including the owner of the event.
const guestList = event.getGuestList(true);

// Loops through the list to get all the guests and logs it.
for (const guest of guestList) {
  console.log(guest.getEmail());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `includeOwner` | `Boolean` | whether to include the owners as a guest |

#### Return

`EventGuest[]` — an array of the guests

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getId()

Gets the unique iCalUID of the event. Note that the iCalUID and the event [`id`](../../../workspace/calendar/api/v3/reference/events.md#resource-representations) used by the [Calendar v3 API](../../../workspace/calendar/api/v3/reference.md) and [Calendar advanced service](../../advanced/calendar.md) are not identical and cannot be used interchangeably. One difference in their semantics is that in recurring events all occurrences of one event have different `ids` while they all share the same iCalUIDs.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for January 5th, 2023 that takes place
// between 9:00 AM and 9:25 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event = calendar.getEvents(
    new Date('Jan 05, 2023 09:00:00'),
    new Date('Jan 05, 2023 09:25:00'),
    )[0];

// Gets the ID of the event and logs it.
console.log(event.getId());
```

#### Return

`String` — the iCalUID of the event

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getLastUpdated()

Gets the date the event was last updated.

```
// Opens the calendar by its ID. You must have view access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 1st, 2023 that takes
// place between 4:00 PM and 5:00 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 01, 2023 16:00:00'),
    new Date('Feb 01, 2023 17:00:00'),
    )[0];

// Gets the date the event was last updated and logs it.
const eventUpdatedDate = event.getLastUpdated();
console.log(eventUpdatedDate);
```

#### Return

`Date` — the last updated date

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getLocation()

Gets the location of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 1st, 2023 that takes
// place between 4:10 PM and 4:25 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 01, 2023 16:10:00'),
    new Date('Feb 01, 2023 16:25:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, sets the location of the
  // event to Mumbai.
  event.setLocation('Mumbai');

  // Gets the location of the event and logs it.
  const eventLocation = event.getLocation();
  console.log(eventLocation);
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Return

`String` — the event location

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getMyStatus()

Gets the event status (such as attending or invited) of the effective user. Always returns `GuestStatus.OWNER` if the effective user is the owner of the event.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.',
);

// Gets the first event from the calendar for February 1st, 2023 that takes
// place between 4:10 PM and 4:25 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 01, 2023 16:10:00'),
    new Date('Feb 01, 2023 16:25:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, gets the event status of
  // the effective user and logs it.
  const myStatus = event.getMyStatus();
  console.log(myStatus.toString());
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Return

`GuestStatus` — the status

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getOriginalCalendarId()

Get the ID of the calendar where this event was originally created.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 25th, 2023 that takes
// place between 4:00 PM and 4:25 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 25,2023 16:00:00'),
    new Date('Feb 25,2023 16:25:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, gets the ID of the calendar
  // where the event was originally created and logs it.
  const calendarId = event.getOriginalCalendarId();
  console.log(calendarId);
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Return

`String` — the ID of the original calendar

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getPopupReminders()

Gets the minute values for all pop-up reminders for the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 4th, 2023 that takes
// place between 5:05 PM and 5:35 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 04, 2023 17:05:00'),
    new Date('Feb 04, 2023 17:35:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, adds two pop-up reminders
  // to the event. The first reminder pops up 5 minutes before the event starts
  // and the second reminder pops up 3 minutes before the event starts.
  event.addPopupReminder(3);
  event.addPopupReminder(5);

  // Gets the minute values for all pop-up reminders for the event and logs it.
  const popUpReminder = event.getPopupReminders();
  console.log(popUpReminder);
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Return

`Integer[]` — an array in which each value corresponds to the number of minutes before the event that a reminder triggers

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getSmsReminders()

Gets the minute values for all SMS reminders for the event.

#### Return

`Integer[]` — an array in which each value corresponds to the number of minutes before the event that a reminder triggers

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getTag(key)

Gets a tag value of the event.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | the key |

#### Return

`String` — the tag value

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getTitle()

Gets the title of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for January 31st, 2023 that takes
// place between 9:05 AM and 9:15 AM. For an event series, use
// calendar.getEventSeriesById('abc123456@example.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Jan 31, 2023 09:05:00'),
    new Date('Jan 31, 2023 09:15:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, logs the title of the
  // event.
  console.log(event.getTitle());
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Return

`String` — the title

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getTransparency()

Gets the transparency of the event. Use this method to determine whether an event is ` TRANSPARENT`, meaning the calendar shows as Available during that time, or `OPAQUE `, meaning the calendar shows as Busy during that time.

```
// Gets the first event from the default calendar for today.
const today = new Date();
const event = CalendarApp.getDefaultCalendar().getEventsForDay(today)[0];
// Gets the event's transparency and logs it.
const transparency = event.getTransparency();
Logger.log(transparency);
```

#### Return

`EventTransparency` — The transparency value.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getVisibility()

Gets the visibility of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 1st, 2023 that takes
// place between 4:10 PM and 4:25 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 01, 2023 16:10:00'),
    new Date('Feb 01, 2023 16:25:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, gets the visibility of the
  // event and logs it.
  const eventVisibility = event.getVisibility();
  console.log(eventVisibility.toString());
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Return

`Visibility` — the visibility value

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### guestsCanInviteOthers()

Determines whether guests can invite other guests.

```
// Opens the calendar by its ID. You must have view access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 1st, 2023 that takes
// place between 9:35 AM and 9:40 AM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 01, 2023 09:35:00'),
    new Date('Feb 01, 2023 09:40:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, determines whether guests
  // can invite other guests and logs it.
  console.log(event.guestsCanInviteOthers());
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Return

`Boolean` — `true` if guests can invite others; `false` if not

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### guestsCanModify()

Determines whether guests can modify the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 1st, 2023 that takes
// place between 9:35 AM and 9:40 AM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 01, 2023 09:35:00'),
    new Date('Feb 01, 2023 09:40:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, sets the event so that
  // guests can't modify it.
  event.setGuestsCanModify(false);

  // Determines whether guests can modify the event and logs it.
  console.log(event.guestsCanModify());
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Return

`Boolean` — `true` if guests can modify the event; `false` if not

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### guestsCanSeeGuests()

Determines whether guests can see other guests.

```
// Opens the calendar by its ID. You must have view access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 1st, 2023 that takes
// place between 9:35 AM and 9:40 AM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 01, 2023 09:35:00'),
    new Date('Feb 01, 2023 09:40:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, determines whether guests
  // can see other guests and logs it.
  console.log(event.guestsCanSeeGuests());
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Return

`Boolean` — `true` if guests can see other guests; `false` if not

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### isOwnedByMe()

Determines whether you're the owner of the event.

```
// Opens the calendar by its ID. You must have view access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for January 31st, 2023 that takes
// place between 9:05 AM and 9:15 AM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Jan 31, 2023 09:05:00'),
    new Date('Jan 31, 2023 09:15:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, determines whether you're
  // the owner of the event and logs it.
  console.log(event.isOwnedByMe());
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Return

`Boolean` — `true` if the event is owned by the effective user; `false` if not

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### removeAllReminders()

Removes all reminders from the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 1st, 2023 that takes
// place between 4:10 PM and 4:25 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 1,2023 16:10:00'),
    new Date('Feb 1,2023 16:25:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, removes all reminders from
  // the event.
  event.removeAllReminders();
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### removeGuest(email)

Removes a guest from the event.

```
// Example 1: Remove a guest from one event
function removeGuestFromEvent() {
  // Replace the below values with your own
  const attendeeEmail =
      'user@example.com';  // Email address of the person you need to remove
  const calendarId =
      'calendar_123@group.calendar.google.com';  // ID of calendar containing
  // event
  const eventId = '123abc';  // ID of event instance

  const calendar = CalendarApp.getCalendarById(calendarId);
  if (calendar === null) {
    // Calendar not found
    console.log('Calendar not found', calendarId);
    return;
  }
  const event = calendar.getEventById(eventId);
  if (event === null) {
    // Event not found
    console.log('Event not found', eventId);
    return;
  }
  event.removeGuest(attendeeEmail);
}

// Example 2: Remove a guest from all events on a calendar within a specified
// timeframe
function removeGuestFromAllEvents() {
  // Replace the following values with your own
  const attendeeEmail =
      'user@example.com';  // Email address of the person you need to remove
  const calendarId =
      'calendar_123@group.calendar.google.com';  // ID of calendar with the
  // events
  const startDate = new Date(
      'YYYY-MM-DD');  // The first date to remove the guest from the events
  const endDate = new Date(
      'YYYY-MM-DD');  // The last date to remove the attendee from the events

  const calendar = CalendarApp.getCalendarById(calendarId);
  if (calendar === null) {
    // Calendar not found
    console.log('Calendar not found', calendarId);
    return;
  }
  // Get the events within the specified timeframe
  const calEvents = calendar.getEvents(startDate, endDate);
  console.log(calEvents.length);  // Checks how many events are found
  // Loop through all events and remove the attendee from each of them
  for (let i = 0; i < calEvents.length; i++) {
    const event = calEvents[i];
    event.removeGuest(attendeeEmail);
  }
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `email` | `String` | the email address of the guest |

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### resetRemindersToDefault()

Resets the reminders using the calendar's default settings.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 1st, 2023 that takes
// place between 4:10 PM and 4:25 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 1, 2023 16:10:00'),
    new Date('Feb 1, 2023 16:25:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, resets the reminders using
  // the calendar's default settings.
  event.resetRemindersToDefault();
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setAnyoneCanAddSelf(anyoneCanAddSelf)

Sets whether non-guests can add themselves to the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 15th, 2023 that takes
// place between 3:30 PM and 4:30 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 15, 2023 15:30:00'),
    new Date('Feb 15, 2023 16:30:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, sets the event so that
  // non-guests can't add themselves to the event.
  event.setAnyoneCanAddSelf(false);
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `anyoneCanAddSelf` | `Boolean` | whether anyone can invite themselves |

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setColor(color)

Sets the color of the calendar event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 1st, 2023 that takes
// place between 4:10 PM and 4:25 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 01, 2023 16:10:00'),
    new Date('Feb 01, 2023 16:25:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, sets the color of the
  // calendar event to green.
  event.setColor(CalendarApp.EventColor.GREEN);
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | An integer color index as a string, or a value from `CalendarApp.EventColor`. |

#### Return

`CalendarEventSeries` — This calendar event, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setDescription(description)

Sets the description of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 4th, 2023 that takes
// place between 5:05 PM and 5:35 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 04, 2023 17:05:00'),
    new Date('Feb 04, 2023 17:35:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, sets the description of the
  // event to 'Meeting.'
  event.setDescription('Meeting');
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `description` | `String` | the new description |

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setGuestsCanInviteOthers(guestsCanInviteOthers)

Sets whether guests can invite other guests.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own. You must have edit access to
// the calendar.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 1st, 2023 that takes
// place between 9:35 AM and 9:40 AM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 01, 2023 09:35:00'),
    new Date('Feb 01, 2023 09:40:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, sets the event so that
  // guests can invite other guests.
  event.setGuestsCanInviteOthers(true);
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `guestsCanInviteOthers` | `Boolean` | whether guests can invite others |

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setGuestsCanModify(guestsCanModify)

Sets whether guests can modify the event.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `guestsCanModify` | `Boolean` | whether guests can modify the event |

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setGuestsCanSeeGuests(guestsCanSeeGuests)

Sets whether guests can see other guests.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `guestsCanSeeGuests` | `Boolean` | whether guests can see others |

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setLocation(location)

Sets the location of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 1st, 2023 that takes
// place between 4:10 PM and 4:25 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 01, 2023 16:10:00'),
    new Date('Feb 01, 2023 16:25:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, sets the location of the
  // event to Noida.
  event.setLocation('Noida');
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `location` | `String` | the new location |

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setMyStatus(status)

Sets the event status (such as attending or invited) of the effective user.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for February 1st, 2023 that takes
// place between 4:10 PM and 4:25 PM. For an event series, use
// calendar.getEventSeriesById('abc123456@google.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Feb 01, 2023 16:10:00'),
    new Date('Feb 01, 2023 16:25:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, sets the event status for
  // the current user to maybe.
  event.setMyStatus(CalendarApp.GuestStatus.MAYBE);
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `status` | `GuestStatus` | the new status |

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### setRecurrence(recurrence, startDate)

Sets the recurrence rules for an all-day event series. Applying this method changes a regular event series into an all-day event series.

```
// Sets the events in a series to take place every Wednesday in 2013.
const eventSeries = CalendarApp.getDefaultCalendar().getEventSeriesById(
    '123456789@example.com',
);
const startDate = new Date('January 2, 2013 03:00:00 PM EST');
const recurrence = CalendarApp.newRecurrence()
                       .addWeeklyRule()
                       .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
                       .until(new Date('January 1, 2014'));
eventSeries.setRecurrence(recurrence, startDate);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `recurrence` | `EventRecurrence` | the recurrence rules to use |
| `startDate` | `Date` | the date of the first event in the series (only the day is used; the time is ignored) |

#### Return

`CalendarEventSeries` — this CalendarEventSeries for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setRecurrence(recurrence, startTime, endTime)

Sets the recurrence rules for this event series. Applying this method changes an all-day event series into a regular event series.

```
// Sets the events in a series to take place from 3pm to 4pm every Tuesday and
// Thursday in 2013.
const eventSeries = CalendarApp.getDefaultCalendar().getEventSeriesById(
    '123456789@example.com',
);
const startTime = new Date('January 1, 2013 03:00:00 PM EST');
const endTime = new Date('January 1, 2013 04:00:00 PM EST');
const recurrence =
    CalendarApp.newRecurrence()
        .addWeeklyRule()
        .onlyOnWeekdays(
            [CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
        .until(new Date('January 1, 2014'));
eventSeries.setRecurrence(recurrence, startTime, endTime);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `recurrence` | `EventRecurrence` | the recurrence rules to use |
| `startTime` | `Date` | the date and time when the first event in the series starts |
| `endTime` | `Date` | the date and time when the first event in the series ends |

#### Return

`CalendarEventSeries` — this CalendarEventSeries for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setTag(key, value)

Sets a key/value tag on the event, for storing custom metadata.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | the tag key |
| `value` | `String` | the tag value |

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setTitle(title)

Sets the title of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Gets the first event from the calendar for January 31st, 2023 that takes
// place between 9:05 AM and 9:15 AM. For an event series, use
// calendar.getEventSeriesById('abc123456@example.com'); and replace the series
// ID with your own.
const event = calendar.getEvents(
    new Date('Jan 31, 2023 09:05:00'),
    new Date('Jan 31, 2023 09:15:00'),
    )[0];

if (event) {
  // If an event exists within the given time frame, changes its title to
  // Event1.
  event.setTitle('Event1');
} else {
  // If no event exists within the given time frame, logs that information to
  // the console.
  console.log('No events exist for the specified range');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | the new title |

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setTransparency(transparency)

Sets the transparency of the event. Use this method to set whether an event is ` TRANSPARENT`, meaning the calendar shows as Available during that time, or `OPAQUE `, meaning the calendar shows as Busy during that time.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId)
// instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');
// Sets the event's transparency to TRANSPARENT.
event.setTransparency(CalendarApp.EventTransparency.TRANSPARENT);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `transparency` | `EventTransparency` | The transparency value. |

#### Return

`CalendarEventSeries` — This `CalendarEventSeries` for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setVisibility(visibility)

Sets the visibility of the event.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibility` | `Visibility` |  |

#### Return

`CalendarEventSeries` — this `CalendarEventSeries` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`
