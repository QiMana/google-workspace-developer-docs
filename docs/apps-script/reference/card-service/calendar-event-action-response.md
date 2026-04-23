---
source: https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response
root: apps-script
fetched_at: 2026-04-23T15:18:59.625Z
---

# Class CalendarEventActionResponse

## Page Summary

- CalendarEventActionResponse represents a response that modifies a calendar event being edited based on a user action.
- You can use the CalendarEventActionResponseBuilder to create a response, for example, to add attendees to an event.
- The printJson() method is available for debugging purposes, returning a JSON representation of the object.

Represents a response that makes changes to the calendar event that the user is currently editing in reaction to an action taken in the UI, such as a button click.

```
// A CalendarEventActionResponse that adds two attendees to an event.
const calendarEventActionResponse =
    CardService.newCalendarEventActionResponseBuilder()
        .addAttendees(['user1@example.com', 'user2@example.com'])
        .build();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`
