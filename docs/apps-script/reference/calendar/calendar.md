---
source: https://developers.google.com/apps-script/reference/calendar/calendar
root: apps-script
fetched_at: 2026-04-23T15:18:50.194Z
---

# Class Calendar

## Page Summary

- The `Calendar` class represents a calendar owned or subscribed to by the user and provides methods for managing events.
- You can create all-day events, standard events, and recurring event series with various options like description, location, and guests.
- The `Calendar` class allows you to retrieve events by ID, time range, or day, with options for filtering results.
- You can get and set calendar properties such as color, description, name, and time zone.
- The class also provides methods to check calendar visibility, ownership, and selection status, as well as delete or unsubscribe from a calendar.

Represents a calendar that the user owns or is subscribed to.

## Detailed documentation

### createAllDayEvent(title, date)

Creates a new all-day event.

```
// Creates an all-day event for the moon landing and logs the ID.
const event = CalendarApp.getDefaultCalendar().createAllDayEvent(
    'Apollo 11 Landing',
    new Date('July 20, 1969'),
);
Logger.log(\`Event ID: ${event.getId()}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title of the event. |
| `date` | `Date` | The date of the event (only the day is used; the time is ignored). |

#### Return

`CalendarEvent` — The created event.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### createAllDayEvent(title, startDate, endDate)

Creates a new all-day event that can span multiple days.

```
// Creates an all-day event for the Woodstock festival (August 15th to 17th) and
// logs the ID.
const event = CalendarApp.getDefaultCalendar().createAllDayEvent(
    'Woodstock Festival',
    new Date('August 15, 1969'),
    new Date('August 18, 1969'),
);
Logger.log(\`Event ID: ${event.getId()}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title of the event. |
| `startDate` | `Date` | The date when the event starts (only the day is used; the time is ignored). |
| `endDate` | `Date` | The date when the event ends (only the day is used; the time is ignored). The end date is exclusive. |

#### Return

`CalendarEvent` — The created event.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### createAllDayEvent(title, startDate, endDate, options)

Creates a new all-day event that can span multiple days.

```
// Creates an all-day event for the Woodstock festival (August 15th to 17th) and
// logs the ID.
const event = CalendarApp.getDefaultCalendar().createAllDayEvent(
    'Woodstock Festival',
    new Date('August 15, 1969'),
    new Date('August 18, 1969'),
    {location: 'Bethel, White Lake, New York, U.S.', sendInvites: true},
);
Logger.log(\`Event ID: ${event.getId()}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title of the event. |
| `startDate` | `Date` | The date when the event starts (only the day is used; the time is ignored). |
| `endDate` | `Date` | The date when the event ends (only the day is used; the time is ignored). The end date is exclusive. |
| `options` | `Object` | A JavaScript object that specifies advanced parameters, as listed below. |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `description` | `String` | The description of the event. |
| `location` | `String` | The location of the event. |
| `guests` | `String` | A comma-separated list of email addresses that should be added as guests. |
| `sendInvites` | `Boolean` | Whether to send invitation emails (default: `false`). |

#### Return

`CalendarEvent` — The created event.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### createAllDayEvent(title, date, options)

Creates a new all-day event.

```
// Creates an all-day event for the moon landing and logs the ID.
const event = CalendarApp.getDefaultCalendar().createAllDayEvent(
    'Apollo 11 Landing',
    new Date('July 20, 1969'),
    {location: 'The Moon'},
);
Logger.log(\`Event ID: ${event.getId()}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title of the event. |
| `date` | `Date` | The date of the event (only the day is used; the time is ignored). |
| `options` | `Object` | A JavaScript object that specifies advanced parameters, as listed below. |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `description` | `String` | The description of the event. |
| `location` | `String` | The location of the event. |
| `guests` | `String` | A comma-separated list of email addresses that should be added as guests. |
| `sendInvites` | `Boolean` | Whether to send invitation emails (default: `false`). |

#### Return

`CalendarEvent` — The created event.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### createAllDayEventSeries(title, startDate, recurrence)

Creates a new all-day event series.

```
// Creates an event series for a no-meetings day, taking place every Wednesday
// in 2013.
const eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries(
    'No Meetings',
    new Date('January 2, 2013 03:00:00 PM EST'),
    CalendarApp.newRecurrence()
        .addWeeklyRule()
        .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
        .until(new Date('January 1, 2014')),
);
Logger.log(\`Event Series ID: ${eventSeries.getId()}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | the title of the events in the series |
| `startDate` | `Date` | the date of the first event in the series (only the day is used; the time is ignored) |
| `recurrence` | `EventRecurrence` | the recurrence settings of the event series |

#### Return

`CalendarEventSeries` — the created event series

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### createAllDayEventSeries(title, startDate, recurrence, options)

Creates a new all-day event series.

```
// Creates an event series for a no-meetings day, taking place every Wednesday
// in 2013.
const eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries(
    'No Meetings',
    new Date('January 2, 2013 03:00:00 PM EST'),
    CalendarApp.newRecurrence()
        .addWeeklyRule()
        .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
        .until(new Date('January 1, 2014')),
    {guests: 'everyone@example.com'},
);
Logger.log(\`Event Series ID: ${eventSeries.getId()}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | the title of the events in the series |
| `startDate` | `Date` | the date of the first event in the series (only the day is used; the time is ignored) |
| `recurrence` | `EventRecurrence` | the recurrence settings of the event series |
| `options` | `Object` | a JavaScript object that specifies advanced parameters, as listed below |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `description` | `String` | the description of the events in the series |
| `location` | `String` | the location of the events in the series |
| `guests` | `String` | a comma-separated list of email addresses that should be added as guests to the events in the series |
| `sendInvites` | `Boolean` | whether to send invitation emails (default: `false`) |

#### Return

`CalendarEventSeries` — the created event series

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### createEvent(title, startTime, endTime)

Creates a new event.

If no time zone is specified, the time values are interpreted in the context of the script's time zone, which may be different than the calendar's time zone.

```
// Creates an event for the moon landing and logs the ID.
const event = CalendarApp.getDefaultCalendar().createEvent(
    'Apollo 11 Landing',
    new Date('July 20, 1969 20:00:00 UTC'),
    new Date('July 21, 1969 21:00:00 UTC'),
);
Logger.log(\`Event ID: ${event.getId()}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | the title of the event |
| `startTime` | `Date` | the date and time when the event starts |
| `endTime` | `Date` | the date and time when the event ends |

#### Return

`CalendarEvent` — the created event

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### createEvent(title, startTime, endTime, options)

Creates a new event.

If no time zone is specified, the time values are interpreted in the context of the script's time zone, which may be different than the calendar's time zone.

```
// Creates an event for the moon landing and logs the ID.
const event = CalendarApp.getDefaultCalendar().createEvent(
    'Apollo 11 Landing',
    new Date('July 20, 1969 20:00:00 UTC'),
    new Date('July 20, 1969 21:00:00 UTC'),
    {location: 'The Moon'},
);
Logger.log(\`Event ID: ${event.getId()}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | the title of the event |
| `startTime` | `Date` | the date and time when the event starts |
| `endTime` | `Date` | the date and time when the event ends |
| `options` | `Object` | a JavaScript object that specifies advanced parameters, as listed below |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `description` | `String` | the description of the event |
| `location` | `String` | the location of the event |
| `guests` | `String` | a comma-separated list of email addresses that should be added as guests |
| `sendInvites` | `Boolean` | whether to send invitation emails (default: `false`) |

#### Return

`CalendarEvent` — the created event

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### createEventFromDescription(description)

Creates an event from a free-form description.

The description should use the same format as the UI's ["Quick Add"](http://support.google.com/calendar/answer/36604) feature.

```
// Creates a new event and logs its ID.
const event = CalendarApp.getDefaultCalendar().createEventFromDescription(
    'Lunch with Mary, Friday at 1PM',
);
Logger.log(\`Event ID: ${event.getId()}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `description` | `String` | a free-form description of the event |

#### Return

`CalendarEvent` — the created event

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### createEventSeries(title, startTime, endTime, recurrence)

Creates a new event series.

```
// Creates an event series for a team meeting, taking place every Tuesday and
// Thursday in 2013.
const eventSeries = CalendarApp.getDefaultCalendar().createEventSeries(
    'Team Meeting',
    new Date('January 1, 2013 03:00:00 PM EST'),
    new Date('January 1, 2013 04:00:00 PM EST'),
    CalendarApp.newRecurrence()
        .addWeeklyRule()
        .onlyOnWeekdays(
            [CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
        .until(new Date('January 1, 2014')),
);
Logger.log(\`Event Series ID: ${eventSeries.getId()}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | the title of the events in the series |
| `startTime` | `Date` | the date and time when the first event in the series starts |
| `endTime` | `Date` | the date and time when the first event in the series ends |
| `recurrence` | `EventRecurrence` | the recurrence settings of the event series |

#### Return

`CalendarEventSeries` — the created event series

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### createEventSeries(title, startTime, endTime, recurrence, options)

Creates a new event series.

```
// Creates an event series for a team meeting, taking place every Tuesday and
// Thursday in 2013.
const eventSeries = CalendarApp.getDefaultCalendar().createEventSeries(
    'Team Meeting',
    new Date('January 1, 2013 03:00:00 PM EST'),
    new Date('January 1, 2013 04:00:00 PM EST'),
    CalendarApp.newRecurrence()
        .addWeeklyRule()
        .onlyOnWeekdays(
            [CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
        .until(new Date('January 1, 2014')),
    {location: 'Conference Room'},
);
Logger.log(\`Event Series ID: ${eventSeries.getId()}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | the title of the events in the series |
| `startTime` | `Date` | the date and time when the first event in the series starts |
| `endTime` | `Date` | the date and time when the first event in the series ends |
| `recurrence` | `EventRecurrence` | the recurrence settings of the event series |
| `options` | `Object` | a JavaScript object that specifies advanced parameters, as listed below |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `description` | `String` | the description of the events in the series |
| `location` | `String` | the location of the events in the series |
| `guests` | `String` | a comma-separated list of email addresses that should be added as guests to the events in the series |
| `sendInvites` | `Boolean` | whether to send invitation emails (default: `false`) |

#### Return

`CalendarEventSeries` — the created event series

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### deleteCalendar()

Deletes the calendar permanently. A user can only delete a calendar they own.

```
// Creates a calendar to delete.
const calendar = CalendarApp.createCalendar('Test');

// Deletes the 'Test' calendar permanently.
calendar.deleteCalendar();
```

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if this is an imported calendar.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### getColor()

Gets the color of the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Gets the color of the calendar and logs it to the console.
// For the default calendar, you can use CalendarApp.getColor() instead.
const calendarColor = calendar.getColor();
console.log(calendarColor);
```

#### Return

`String` — A hexadecimal color string ("#rrggbb").

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getDescription()

Gets the description of the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Sets the description of the calendar to 'Test description.'
calendar.setDescription('Test description');

// Gets the description of the calendar and logs it to the console.
// For the default calendar, you can use CalendarApp.getDescription() instead.
const description = calendar.getDescription();
console.log(description);
```

#### Return

`String` — The description of this calendar.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getEventById(iCalId)

Gets the event with the given ID. If the series belongs to a calendar other than the default calendar, this method must be called from that calendar. Calling `CalendarApp.getEventById(iCalId)` only returns an event in the default calendar.

Multiple events may have the same ID if they are part of an event series. In this case this method returns only the first event from that series.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Creates an event for the moon landing.
const event = calendar.createEvent(
    'Apollo 11 Landing',
    new Date('July 20, 1969 20:05:00 UTC'),
    new Date('July 20, 1969 20:17:00 UTC'),
);

// Gets the calendar event ID and logs it to the console.
const iCalId = event.getId();
console.log(iCalId);

// Gets the event by its ID and logs the title of the event to the console.
// For the default calendar, you can use CalendarApp.getEventById(iCalId)
// instead.
const myEvent = calendar.getEventById(iCalId);
console.log(myEvent.getTitle());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `iCalId` | `String` | ID of the event. |

#### Return

`CalendarEvent` — The event with the given ID, or `null` if the event doesn't exist or the user cannot access it.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getEventSeriesById(iCalId)

Gets the event series with the given ID. If the ID given is for a single `CalendarEvent`, then a `CalendarEventSeries` is returned with a single event in the series. Note that if the event series belongs to a calendar other than the default calendar, this method must be called from that `Calendar`; calling `CalendarApp.getEventSeriesById(iCalId)` directly only returns an event series that exists in the default calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Creates an event series for a daily team meeting from 1 PM to 2 PM.
// The series adds the daily event from January 1, 2023 through December 31,
// 2023.
const eventSeries = calendar.createEventSeries(
    'Team meeting',
    new Date('Jan 1, 2023 13:00:00'),
    new Date('Jan 1, 2023 14:00:00'),
    CalendarApp.newRecurrence().addDailyRule().until(new Date('Jan 1, 2024')),
);

// Gets the ID of the event series.
const iCalId = eventSeries.getId();

// Gets the event series by its ID and logs the series title to the console.
// For the default calendar, you can use CalendarApp.getEventSeriesById(iCalId)
// instead.
console.log(calendar.getEventSeriesById(iCalId).getTitle());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `iCalId` | `String` | ID of the event series. |

#### Return

`CalendarEventSeries` — The series with the given ID, or `null` if the series doesn't exist or the user cannot access it.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getEvents(startTime, endTime)

Gets all events that occur within a given time range.

This method returns events that start during the given time range, end during the time range, or encompass the time range. If no time zone is specified, the time values are interpreted in the context of the script's time zone, which may be different from the calendar's time zone.

```
// Determines how many events are happening in the next two hours.
const now = new Date();
const twoHoursFromNow = new Date(now.getTime() + 2 * 60 * 60 * 1000);
const events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow);
Logger.log(\`Number of events: ${events.length}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startTime` | `Date` | the start of the time range |
| `endTime` | `Date` | the end of the time range, non-inclusive |

#### Return

`CalendarEvent[]` — the events that occur within the time range

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getEvents(startTime, endTime, options)

Gets all events that occur within a given time range and meet the specified criteria.

This method returns events that start during the given time range, ends during the time range, or encompasses the time range. If no time zone is specified, the time values are interpreted in the context of the script's time zone, which may be different from the calendar's time zone.

Be aware that filtering on `author`, `search`, or `statusFilters` takes place after applying `start` and `max`. This means that the number of events returned may be less than `max`, even though additional events meet the criteria.

```
// Determines how many events are happening in the next two hours that contain
// the term "meeting".
const now = new Date();
const twoHoursFromNow = new Date(now.getTime() + 2 * 60 * 60 * 1000);
const events = CalendarApp.getDefaultCalendar().getEvents(
    now,
    twoHoursFromNow,
    {search: 'meeting'},
);
Logger.log(\`Number of events: ${events.length}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startTime` | `Date` | the start of the time range |
| `endTime` | `Date` | the end of the time range, non-inclusive |
| `options` | `Object` | a JavaScript object that specifies advanced parameters, as listed below |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Integer` | the index of the first event to return |
| `max` | `Integer` | the maximum number of events to return |
| `author` | `String` | an email address used to filter results by the event creator |
| `search` | `String` | a full-text search query used to filter results |
| `statusFilters[]` | `GuestStatus` | an array of statuses used to filter results |

#### Return

`CalendarEvent[]` — the events that take place within the time range and match the criteria

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getEventsForDay(date)

Gets all events that occur on a given day.

This method returns events if they start during the given day, end during the day, or encompass the day.

Note that only the date portion of the Date object is used, and the time portion is ignored. The date is interpreted as midnight that day to midnight the next day in the calendar's time zone.

```
// Determines how many events are happening today.
const today = new Date();
const events = CalendarApp.getDefaultCalendar().getEventsForDay(today);
Logger.log(\`Number of events: ${events.length}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | the date to retrieve events for (only the day is used; the time is ignored) |

#### Return

`CalendarEvent[]` — the events that occur on the given date

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getEventsForDay(date, options)

Gets all events that occur on a given day and meet specified criteria.

This method returns events if they start during the given day, end during the day, or encompass the day.

Note that only the date portion of the Date object is used, and the time portion is ignored. The date is interpreted as midnight that day to midnight the next day in the calendar's time zone.

Be aware that filtering on `author`, `search`, or `statusFilters` takes place after applying `start` and `max`. This means that the number of events returned may be less than `max`, even though additional events meet the criteria.

```
// Determines how many events are happening today and contain the term
// "meeting".
const today = new Date();
const events = CalendarApp.getDefaultCalendar().getEventsForDay(today, {
  search: 'meeting',
});
Logger.log(\`Number of events: ${events.length}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | the date to retrieve events for (only the day is used; the time is ignored) |
| `options` | `Object` | advanced filtering options |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Integer` | the index of the first event to return |
| `max` | `Integer` | the maximum number of events to return |
| `author` | `String` | an email address used to filter results by the event creator |
| `search` | `String` | a full-text search query used to filter results |
| `statusFilters[]` | `GuestStatus` | an array of statuses used to filter results |

#### Return

`CalendarEvent[]` — the events that occur on the given date and match the criteria

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getId()

Gets the ID of the calendar. The ID for a user's default calendar is their email address.

```
// Opens the calendar by its ID.
// To get the user's default calendar, use CalendarApp.getDefaultCalendar().
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Gets the ID of the calendar and logs it to the console.
const calendarId = calendar.getId();
console.log(calendarId);
```

#### Return

`String` — The ID of the calendar.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getName()

Gets the name of the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Gets the name of the calendar and logs it to the console.
// For the default calendar, you can use CalendarApp.getName() instead.
const calendarName = calendar.getName();
console.log(calendarName);
```

#### Return

`String` — This calendar's name.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getTimeZone()

Gets the time zone of the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Gets the time zone of the calendar and logs it to the console.
// For the default calendar, you can use CalendarApp.getTimeZone() instead.
const timeZone = calendar.getTimeZone();
console.log(timeZone);
```

#### Return

`String` — The time zone, specified in "long" format (for example, "America/New\_York", as listed by [Joda.org](http://joda-time.sourceforge.net/timezones.html)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### isHidden()

Determines whether the calendar is hidden in the user interface.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Determines whether the calendar is hidden in the user interface and logs it
// to the console. For the default calendar, you can use CalendarApp.isHidden()
// instead.
const isHidden = calendar.isHidden();
console.log(isHidden);
```

#### Return

`Boolean` — `true` if the calendar is hidden in the user interface; `false` if it isn't.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### isMyPrimaryCalendar()

Determines whether the calendar is the primary calendar for the effective user.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Determines whether the calendar is the default calendar for
// the effective user and logs it to the console.
// For the default calendar, you can use CalendarApp.isMyPrimaryCalendar()
// instead.
const isMyPrimaryCalendar = calendar.isMyPrimaryCalendar();
console.log(isMyPrimaryCalendar);
```

#### Return

`Boolean` — `true` if the calendar is the default calendar for the effective user; `false` if it isn't.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### isOwnedByMe()

Determines whether the calendar is owned by you.

```
// Gets a calendar by its ID. To get the user's default calendar, use
// CalendarApp.getDefault() instead.
// TODO(developer): Replace the ID with the calendar ID that you want to use.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Determines whether the calendar is owned by you and logs it.
console.log(calendar.isOwnedByMe());
```

#### Return

`Boolean` — `true` if the calendar is owned by you; `false` if not.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### isSelected()

Determines whether the calendar's events are displayed in the user interface.

```
// Gets the user's default calendar. To get a different calendar,
// use getCalendarById() instead.
const calendar = CalendarApp.getDefaultCalendar();

// Determines whether the calendar's events are displayed in the user interface
// and logs it.
console.log(calendar.isSelected());
```

#### Return

`Boolean` — `true` if the calendar's events are displayed in the user interface; `false` if not

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### setColor(color)

Sets the color of the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Sets the color of the calendar to pink using the Calendar Color enum.
// For the default calendar, you can use CalendarApp.setColor() instead.
calendar.setColor(CalendarApp.Color.PINK);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | A `CalendarApp.Color` or a hexadecimal color string ("#rrggbb"). |

#### Return

`Calendar` — This calendar for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setDescription(description)

Sets the description of a calendar.

```
// Gets the user's default calendar. To get a different calendar,
// use getCalendarById() instead.
const calendar = CalendarApp.getDefaultCalendar();

// Sets the description of the calendar.
// TODO(developer): Update the string with the description that you want to use.
calendar.setDescription('Updated calendar description.');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `description` | `String` | the description of this calendar |

#### Return

`Calendar` — this calendar for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setHidden(hidden)

Sets whether the calendar is visible in the user interface.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hidden` | `Boolean` | `true` to hide the calendar in the user interface; `false` to show it |

#### Return

`Calendar` — this calendar for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setName(name)

Sets the name of the calendar.

```
// Gets the user's default calendar. To get a different calendar,
// use getCalendarById() instead.
const calendar = CalendarApp.getDefaultCalendar();

// Sets the name of the calendar.
// TODO(developer): Update the string with the name that you want to use.
calendar.setName('Example calendar name');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | the new name |

#### Return

`Calendar` — this calendar for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setSelected(selected)

Sets whether the calendar's events are displayed in the user interface.

```
// Gets the user's default calendar. To get a different calendar,
// use getCalendarById() instead.
const calendar = CalendarApp.getDefaultCalendar();

// Selects the calendar so that its events are displayed in the user interface.
// To unselect the calendar, set the parameter to false.
calendar.setSelected(true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `selected` | `Boolean` | `true` to show the calendar's events in the user interface; `false` to hide them |

#### Return

`Calendar` — this calendar for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setTimeZone(timeZone)

Sets the time zone of the calendar.

```
// Gets the user's default calendar. To get a different calendar,
// use getCalendarById() instead.
const calendar = CalendarApp.getDefaultCalendar();

// Sets the time zone of the calendar to America/New York (US/Eastern) time.
calendar.setTimeZone('America/New_York');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `timeZone` | `String` | The time zone, specified in "long" format (such as "America/New\_York", as listed by [Joda.org](http://joda-time.sourceforge.net/timezones.html)). |

#### Return

`Calendar` — This calendar for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### unsubscribeFromCalendar()

Unsubscribes the user from a calendar. A user can't unsubscribe from calendars listed under the **My calendars** list. They can unsubscribe from calendars listed under **Other calendars**.

```
// Gets the calendar by its ID.
// TODO(developer): Replace the calendar ID with the calendar ID that you want
// to get.
const calendar = CalendarApp.getCalendarById(
    'abc123456@group.calendar.google.com',
);

// Unsubscribes the user from the calendar.
const result = calendar.unsubscribeFromCalendar();
```

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if this is an owned calendar

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`
