---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response
root: apps-script
fetched_at: 2026-04-23T15:18:36.007Z
---

# Class CalendarEventActionResponse

Represents a response that makes changes to the calendar event that the user is currently editing in reaction to an action taken in the UI, such as a button click.

```
// A CalendarEventActionResponse that adds two attendees to an event.
const calendarEventActionResponse =
    AddOnsResponseService.newCalendarEventActionResponseBuilder()
        .addAttendees(['user1@example.com', 'user2@example.com'])
        .build();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`
