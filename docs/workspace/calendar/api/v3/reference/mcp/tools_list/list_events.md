---
source: https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/list_events
root: workspace
fetched_at: 2026-04-23T15:24:57.653Z
---

# MCP Tools Reference: calendarmcp.googleapis.com

## Tool: list\_events

Lists calendar events in a given calendar satisfying the given conditions.

Key Features:

- Any Calendar ID, which can be user's primary calendar or others.
- Keyword matching.
- Time range filtering.
- Retrieves ALL events matching the time and keyword constraints.

Use search\_events tool instead if:

- You need to find the (top K) most relevant events rather than all events satisfying the constraints.
- You need semantic search capabilities.
- You are searching only the user's primary calendar for specific information.

Use this tool for queries like:

- What's on my calendar tomorrow?
- What's on my calendar for July 14th 2025?
- What are my meetings next week?
- Do I have any conflicts this afternoon?

Example:

```
list_events(
            start_time='2024-09-17T06:00:00',
            end_time='2024-09-17T12:00:00',
            page_size=10
        )
        # Returns up to 10 calendar events between 6:00 AM and 12:00 PM on September 17, 2024 from the user's primary calendar.
```

The following sample demonstrate how to use `curl` to invoke the `list_events` MCP tool.

Curl Request

```
curl --location 'https://calendarmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "list_events",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

### ListEventsRequest

JSON representation

```
{
  "eventTypeFilter": [
    string
  ],

  "calendarId": string

  "pageSize": integer

  "pageToken": string

  "startTime": string

  "endTime": string

  "timeZone": string

  "orderBy": string

  "fullText": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>eventTypeFilter[]</code></td><td><p><code>string</code></p><p>Optional. The event types to return. Possible values are:</p><ul><li><code>default</code> - Regular events (default).</li><li><code>outOfOffice</code> - Out of office events.</li><li><code>focusTime</code> - Focus time events.</li><li><code>workingLocation</code> - Working location events.</li><li><code>birthday</code> - Birthday events.</li><li><code>fromGmail</code> - Events from Gmail.</li></ul><p>If empty, only the following event types are returned: <code>default</code>, <code>outOfOffice</code>, <code>focusTime</code>, <code>fromGmail</code></p></td></tr><tr><td colspan="2"><p>Union field <code>_calendar_id</code>.</p><p><code>_calendar_id</code> can be only one of the following:</p></td></tr><tr><td><code>calendarId</code></td><td><p><code>string</code></p><p>Optional. The calendar ID to list events from. The default is the user's primary calendar.</p></td></tr><tr><td colspan="2"><p>Union field <code>_page_size</code>.</p><p><code>_page_size</code> can be only one of the following:</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty <code>next_page_token</code> field in the response. By default the value is 250 events. The page size can never be larger than 2500 events.</p></td></tr><tr><td colspan="2"><p>Union field <code>_page_token</code>.</p><p><code>_page_token</code> can be only one of the following:</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. Token specifying which result page to return.</p></td></tr><tr><td colspan="2"><p>Union field <code>_start_time</code>.</p><p><code>_start_time</code> can be only one of the following:</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string</code></p><p>Optional. Lower bound (exclusive) for an event's end time. Only events ending strictly after this time are returned (i.e., the start of the time window to search). Defaults to the current time if neither <code>start_time</code> nor <code>end_time</code> is provided. If specified, must be less than or equal to <code>end_time</code>. Must be an ISO 8601 timestamp. For example, 2026-06-03T10:00:00-07:00, 2026-06-03T10:00:00Z, or 2026-06-03T10:00:00. Milliseconds may be provided but are ignored.</p></td></tr><tr><td colspan="2"><p>Union field <code>_end_time</code>.</p><p><code>_end_time</code> can be only one of the following:</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string</code></p><p>Optional. Upper bound (exclusive) for an event's start time. Only events starting strictly before this time are returned (i.e., the end of the time window to search). If specified, must be greater than or equal to <code>start_time</code>. Must be an ISO 8601 timestamp. For example, 2026-06-03T10:00:00-07:00, 2026-06-03T10:00:00Z, or 2026-06-03T10:00:00. Milliseconds may be provided but are ignored.</p></td></tr><tr><td colspan="2"><p>Union field <code>_time_zone</code>.</p><p><code>_time_zone</code> can be only one of the following:</p></td></tr><tr><td><code>timeZone</code></td><td><p><code>string</code></p><p>Optional. Time zone used in the response and to resolve timezone-less dates in the request (formatted as an IANA Time Zone Database name, e.g. <code>Europe/Zurich</code>). The default is the time zone of the calendar.</p></td></tr><tr><td colspan="2"><p>Union field <code>_order_by</code>.</p><p><code>_order_by</code> can be only one of the following:</p></td></tr><tr><td><code>orderBy</code></td><td><p><code>string</code></p><p>Optional. The order in which events should be returned. Possible values are:</p><ul><li><code>default</code> - Unspecified, but deterministic ordering (default).</li><li><code>startTime</code> - Order by start time ascending.</li><li><code>startTimeDesc</code> - Order by start time descending.</li><li><code>lastModified</code> - Order by last modification time ascending.</li></ul></td></tr><tr><td colspan="2"><p>Union field <code>_full_text</code>.</p><p><code>_full_text</code> can be only one of the following:</p></td></tr><tr><td><code>fullText</code></td><td><p><code>string</code></p><p>Optional. Free-form search query to search across title, description, location and attendees.</p></td></tr></tbody></table>

## Output Schema

### ListEventsResponse

JSON representation

```
{
  "summary": string,
  "description": string,
  "updated": string,
  "timeZone": string,
  "accessRole": string,
  "defaultReminders": [
    {
      object (Reminder)
    }
  ],
  "events": [
    {
      object (Event)
    }
  ],

  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>summary</code></td><td><p><code>string</code></p><p>Title of the calendar.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>Description of the calendar.</p></td></tr><tr><td><code>updated</code></td><td><p><code>string</code></p><p>Last modification time of the calendar (as a ISO 8601 timestamp).</p></td></tr><tr><td><code>timeZone</code></td><td><p><code>string</code></p><p>The time zone of the calendar.</p></td></tr><tr><td><code>accessRole</code></td><td><p><code>string</code></p><p>The user's access role for this calendar. Read-only. Possible values are:</p><ul><li><code>none</code> - The user has no access.</li><li><code>freeBusyReader</code> - The user has read access to free/busy information.</li><li><code>reader</code> - The user has read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.</li><li><code>writer</code> - The user has read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.</li><li><code>owner</code> - The user has manager access to the calendar. This role has all of the permissions of the writer role with the additional ability to see and modify access levels of other users. Important: the owner role is different from the calendar's data owner. A calendar has a single data owner, but can have multiple users with owner role.</li></ul></td></tr><tr><td><code>defaultReminders[]</code></td><td><p><code>object (<code>Reminder</code>)</code></p><p>The default reminders on the calendar for the authenticated user. These reminders apply to all events on this calendar that do not explicitly override them (i.e. do not have reminders.useDefault set to True).</p></td></tr><tr><td><code>events[]</code></td><td><p><code>object (<code>Event</code>)</code></p><p>List of events on the calendar.</p></td></tr><tr><td colspan="2"><p>Union field <code>_next_page_token</code>.</p><p><code>_next_page_token</code> can be only one of the following:</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token used to access the next page of this result. Omitted if no further results are available.</p></td></tr></tbody></table>

### Reminder

JSON representation

```
{
  "method": string,
  "minutes": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>method</code></td><td><p><code>string</code></p><p>How the reminder is delivered to the user. Possible values are:</p><ul><li><code>email</code> - Reminders are sent via email.</li><li><code>popup</code> - Reminders are sent via a UI popup.</li></ul><p>Required when adding a reminder.</p></td></tr><tr><td><code>minutes</code></td><td><p><code>integer</code></p><p>Number of minutes in advance that the reminder should be delivered.</p></td></tr></tbody></table>

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

Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
