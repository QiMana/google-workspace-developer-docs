---
source: https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/create_event
root: workspace
fetched_at: 2026-04-23T15:24:56.282Z
---

# MCP Tools Reference: calendarmcp.googleapis.com

## Tool: create\_event

Creates a calendar event.

Use this tool for queries like:

- Create an event on my calendar for tomorrow at 2pm called 'Meeting with Jane'.
- Schedule a meeting with [john.doe@google.com](mailto:john.doe@google.com) next Monday from 10am to 11am.

Example:

```
create_event(
            summary='Meeting with Jane',
            start_time='2024-09-17T14:00:00',
            end_time='2024-09-17T15:00:00'
        )
        # Creates an event on the primary calendar for September 17, 2024 from 2pm to 3pm called 'Meeting with Jane'.
```

The following sample demonstrate how to use `curl` to invoke the `create_event` MCP tool.

Curl Request

```
curl --location 'https://calendarmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "create_event",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request message for CreateEvent.

### CreateEventRequest

JSON representation

```
{
  "summary": string,
  "startTime": string,
  "endTime": string,
  "timeZone": string,
  "attendeeEmails": [
    string
  ],
  "recurrenceData": [
    string
  ],

  "calendarId": string

  "description": string

  "location": string

  "allDay": boolean

  "notificationLevel": enum (NotificationLevel)

  "addGoogleMeetUrl": boolean

  "visibility": string

  "colorId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>summary</code></td><td><p><code>string</code></p><p>Required. Title of the event.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string</code></p><p>Required. The start time of the event formatted as per ISO 8601.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string</code></p><p>Required. The end time of the event formatted as per ISO 8601.</p></td></tr><tr><td><code>timeZone</code></td><td><p><code>string</code></p><p>Required. Time zone of the event (formatted as an IANA Time Zone Database name, e.g. <code>Europe/Zurich</code>).</p></td></tr><tr><td><code>attendeeEmails[]</code></td><td><p><code>string</code></p><p>Optional. The additional attendees of the event, as email addresses.</p></td></tr><tr><td><code>recurrenceData[]</code></td><td><p><code>string</code></p><p>Optional. The recurrence data of the event as <code>RRULE</code>, <code>RDATE</code> or <code>EXDATE</code> as per RFC 5545. Use this field to create a recurring event.</p></td></tr><tr><td colspan="2"><p>Union field <code>_calendar_id</code>.</p><p><code>_calendar_id</code> can be only one of the following:</p></td></tr><tr><td><code>calendarId</code></td><td><p><code>string</code></p><p>Optional. The calendar ID to create the event on. The default is the user's primary calendar.</p></td></tr><tr><td colspan="2"><p>Union field <code>_description</code>.</p><p><code>_description</code> can be only one of the following:</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>Optional. Description of the event. Can contain HTML.</p></td></tr><tr><td colspan="2"><p>Union field <code>_location</code>.</p><p><code>_location</code> can be only one of the following:</p></td></tr><tr><td><code>location</code></td><td><p><code>string</code></p><p>Optional. Geographic location of the event as free-form text.</p></td></tr><tr><td colspan="2"><p>Union field <code>_all_day</code>.</p><p><code>_all_day</code> can be only one of the following:</p></td></tr><tr><td><code>allDay</code></td><td><p><code>boolean</code></p><p>Optional. Whether the event is an all-day event. The default is False. If true, the start and end time must be set to midnight UTC.</p></td></tr><tr><td colspan="2"><p>Union field <code>_notification_level</code>.</p><p><code>_notification_level</code> can be only one of the following:</p></td></tr><tr><td><code>notificationLevel</code></td><td><p><code>enum (<code>NotificationLevel</code>)</code></p><p>Optional. Which email notification should be sent for this event update. Possible values are:</p><ul><li><code>NONE</code> - No email notifications are sent (default).</li><li><code>EXTERNAL_ONLY</code> - Only external (non-Calendar) attendees receive email notifications.</li><li><code>ALL</code> - All event attendees receive email notifications.</li></ul></td></tr><tr><td colspan="2"><p>Union field <code>_add_google_meet_url</code>.</p><p><code>_add_google_meet_url</code> can be only one of the following:</p></td></tr><tr><td><code>addGoogleMeetUrl</code></td><td><p><code>boolean</code></p><p>Optional. Allows to create a Google Meet url for the event. By default, no Google Meet url is created. No Google Meet url is created if Meet is disabled for the user, but the event creation will succeed.</p></td></tr><tr><td colspan="2"><p>Union field <code>_visibility</code>.</p><p><code>_visibility</code> can be only one of the following:</p></td></tr><tr><td><code>visibility</code></td><td><p><code>string</code></p><p>Optional. Visibility of the event. Possible values are:</p><ul><li><code>default</code> - Uses the default visibility for events on the calendar. This is the default value.</li><li><code>public</code> - The event is public and event details are visible to all readers of the calendar.</li><li><code>private</code> - The event is private and only event attendees may view event details.</li></ul></td></tr><tr><td colspan="2"><p>Union field <code>_color_id</code>.</p><p><code>_color_id</code> can be only one of the following:</p></td></tr><tr><td><code>colorId</code></td><td><p><code>string</code></p><p>Optional. The color of the event. This is an ID referring to an entry in the calendar's color palette. Event color ID (string <code>1</code> - <code>11</code>):</p><ul><li>1: Lavender</li><li>2: Sage</li><li>3: Grape</li><li>4: Flamingo</li><li>5: Banana</li><li>6: Tangerine</li><li>7: Peacock</li><li>8: Graphite</li><li>9: Blueberry</li><li>10: Basil</li><li>11: Tomato.</li></ul></td></tr></tbody></table>

## Output Schema

### Event

JSON representation

```
{
  "id": string,
  "status": string,
  "htmlLink": string,
  "created": string,
  "updated": string,
  "summary": string,
  "description": string,
  "location": string,
  "creator": {
    object (Principal)
  },
  "organizer": {
    object (Principal)
  },
  "start": {
    object (DateOrDateTime)
  },
  "end": {
    object (DateOrDateTime)
  },
  "recurrence": [
    string
  ],
  "recurringEventId": string,
  "originalStartTime": {
    object (DateOrDateTime)
  },
  "transparency": string,
  "visibility": string,
  "attendees": [
    {
      object (Attendee)
    }
  ],
  "eventType": string,
  "conferenceUrl": string,
  "colorId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:</p><ul><li>characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938</li><li>the length of the ID must be between 5 and 1024 characters</li><li>the ID must be unique per calendar</li></ul><p>Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.</p><p>If you do not specify an ID, it will be automatically generated by the server.</p><p>Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.</p></td></tr><tr><td><code>status</code></td><td><p><code>string</code></p><p>Status of the event. Optional. Possible values are:</p><ul><li><code>confirmed</code> - The event is confirmed. This is the default status.</li><li><code>tentative</code> - The event is tentatively confirmed.</li><li><code>cancelled</code> - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.</li></ul><p>A cancelled status represents two different states depending on the event type:</p><ol><li>Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.</li><li>All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely. Deleted events are only guaranteed to have the id field populated.</li></ol><p>On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.</p><p>If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.</p></td></tr><tr><td><code>htmlLink</code></td><td><p><code>string</code></p><p>An absolute link to this event in the Google Calendar Web UI. Read-only.</p></td></tr><tr><td><code>created</code></td><td><p><code>string</code></p><p>Creation time of the event (as a ISO 8601 formatted timestamp). Read-only.</p></td></tr><tr><td><code>updated</code></td><td><p><code>string</code></p><p>Last modification time of the main event data (as a ISO 8601 formatted timestamp). Updating event reminders will not cause this to change. Read-only.</p></td></tr><tr><td><code>summary</code></td><td><p><code>string</code></p><p>Title of the event.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>Description of the event. Can contain HTML. Optional.</p></td></tr><tr><td><code>location</code></td><td><p><code>string</code></p><p>Geographic location of the event as free-form text. Optional.</p></td></tr><tr><td><code>creator</code></td><td><p><code>object (<code>Principal</code>)</code></p><p>The creator of the event. Read-only.</p></td></tr><tr><td><code>organizer</code></td><td><p><code>object (<code>Principal</code>)</code></p><p>The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. Read-only.</p></td></tr><tr><td><code>start</code></td><td><p><code>object (<code>DateOrDateTime</code>)</code></p><p>The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance.</p></td></tr><tr><td><code>end</code></td><td><p><code>object (<code>DateOrDateTime</code>)</code></p><p>The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance.</p></td></tr><tr><td><code>recurrence[]</code></td><td><p><code>string</code></p><p>List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.</p></td></tr><tr><td><code>recurringEventId</code></td><td><p><code>string</code></p><p>For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.</p></td></tr><tr><td><code>originalStartTime</code></td><td><p><code>object (<code>DateOrDateTime</code>)</code></p><p>For an instance of a recurring event, this is the time at which this event would start according to the recurrence data in the recurring event identified by recurringEventId. It uniquely identifies the instance within the recurring event series even if the instance was moved to a different time. Immutable.</p></td></tr><tr><td><code>transparency</code></td><td><p><code>string</code></p><p>Whether the event blocks time on the calendar. Optional. Possible values are:</p><ul><li><code>opaque</code> - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI.</li><li><code>transparent</code> - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.</li></ul></td></tr><tr><td><code>visibility</code></td><td><p><code>string</code></p><p>Visibility of the event. Optional. Possible values are:</p><ul><li><code>default</code> - Uses the default visibility for events on the calendar. This is the default value.</li><li><code>public</code> - The event is public and event details are visible to all readers of the calendar.</li><li><code>private</code> - The event is private and only event attendees may view event details.</li><li><code>confidential</code> - The event is private. This value is provided for compatibility reasons.</li></ul></td></tr><tr><td><code>attendees[]</code></td><td><p><code>object (<code>Attendee</code>)</code></p><p>The attendees of the event.</p></td></tr><tr><td><code>eventType</code></td><td><p><code>string</code></p><p>Specific type of the event. This cannot be modified after the event is created. Possible values are:</p><ul><li><code>birthday</code> - A special all-day event with an annual recurrence.</li><li><code>default</code> - A regular event or not further specified.</li><li><code>focusTime</code> - A focus-time event.</li><li><code>fromGmail</code> - An event from Gmail. This type of event cannot be created.</li><li><code>outOfOffice</code> - An out-of-office event.</li><li><code>workingLocation</code> - A working location event.</li></ul></td></tr><tr><td><code>conferenceUrl</code></td><td><p><code>string</code></p><p>The Google Meet link for the event.</p></td></tr><tr><td><code>colorId</code></td><td><p><code>string</code></p><p>Event color ID (string <code>1</code> - <code>11</code>):</p><ul><li>1: Lavender</li><li>2: Sage</li><li>3: Grape</li><li>4: Flamingo</li><li>5: Banana</li><li>6: Tangerine</li><li>7: Peacock</li><li>8: Graphite</li><li>9: Blueberry</li><li>10: Basil</li><li>11: Tomato.</li></ul><p>In Google Calendar, event colors function as categories — settable per-event or per-series. Users may assign custom labels to colors in the web UI (e.g., <code>1:1s</code>, <code>Break</code>), but the API only exposes numeric IDs, not those labels. Only affects your own calendar view — each attendee controls their own event color.</p></td></tr></tbody></table>

### Principal

JSON representation

```
{
  "email": string,
  "displayName": string,
  "self": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>email</code></td><td><p><code>string</code></p><p>Email address of the principal (calendar).</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>The principal's name, if available.</p></td></tr><tr><td><code>self</code></td><td><p><code>boolean</code></p><p>Whether this principal corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.</p></td></tr></tbody></table>

### DateOrDateTime

JSON representation

```
{
  "date": string,
  "dateTime": string,
  "timeZone": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>date</code></td><td><p><code>string</code></p><p>An ISO 8601 formatted date at midnight UTC such as <code>2019-11-20T00:00:00Z</code>. If this field is set, <code>date_time</code> must not be set.</p></td></tr><tr><td><code>dateTime</code></td><td><p><code>string</code></p><p>An ISO 8601 formatted timestamp such as <code>2019-11-20T08:19:06-07:00</code> or <code>2019-11-20T08:19:06Z</code>. If this field is set, <code>date</code> must not be set.</p></td></tr><tr><td><code>timeZone</code></td><td><p><code>string</code></p><p>TZDB timezone name if available.</p></td></tr></tbody></table>

### Attendee

JSON representation

```
{
  "id": string,
  "email": string,
  "displayName": string,
  "organizer": boolean,
  "self": boolean,
  "resource": boolean,
  "optionalAttendee": boolean,
  "responseStatus": string,
  "comment": string,
  "additionalGuests": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The attendee's Profile ID, if available.</p></td></tr><tr><td><code>email</code></td><td><p><code>string</code></p><p>The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322. Required when adding an attendee.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>The attendee's name, if available. Optional.</p></td></tr><tr><td><code>organizer</code></td><td><p><code>boolean</code></p><p>Whether the attendee is the organizer of the event. Read-only. The default is False.</p></td></tr><tr><td><code>self</code></td><td><p><code>boolean</code></p><p>Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False.</p></td></tr><tr><td><code>resource</code></td><td><p><code>boolean</code></p><p>Whether the attendee is a resource. Can only be set when the attendee is added to the event for the first time. Subsequent modifications are ignored. Optional. The default is False.</p></td></tr><tr><td><code>optionalAttendee</code></td><td><p><code>boolean</code></p><p>Whether this is an optional attendee. Optional. The default is False.</p></td></tr><tr><td><code>responseStatus</code></td><td><p><code>string</code></p><p>The attendee's response status. Possible values are:</p><ul><li><code>needsAction</code> - The attendee has not responded to the invitation (recommended for new events).</li><li><code>declined</code> - The attendee has declined the invitation.</li><li><code>tentative</code> - The attendee has tentatively accepted the invitation.</li><li><code>accepted</code> - The attendee has accepted the invitation.</li></ul></td></tr><tr><td><code>comment</code></td><td><p><code>string</code></p><p>The attendee's response comment. Optional.</p></td></tr><tr><td><code>additionalGuests</code></td><td><p><code>integer</code></p><p>Number of additional guests. Optional. The default is 0.</p></td></tr></tbody></table>

### Tool Annotations

Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ❌ | Open World Hint: ❌
