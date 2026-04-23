---
source: https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/suggest_time
root: workspace
fetched_at: 2026-04-23T15:24:57.763Z
---

# MCP Tools Reference: calendarmcp.googleapis.com

## Tool: suggest\_time

Suggests time periods across one or more calendars. To access the primary calendar, add 'primary' in the attendee\_emails field.

Use this tool for queries like:

- When are all of us free for a meeting?
- Find a 30 minute slot where we are both available.
- Check if [jane.doe@google.com](mailto:jane.doe@google.com) is free on Monday morning.

Example:

```
suggest_time(
            attendee_emails=['joedoe@gmail.com', 'janedoe@gmail.com'],
            start_time='2024-09-10T00:00:00',
            end_time='2024-09-17T00:00:00',
            duration_minutes=60,
            preferences={
                'start_hour': '09:00',
                'end_hour': '17:00',
                'exclude_weekends': True
            }
        )
        # Returns up to 5 suggested time slots where both users are available for at least one hour between 9:00 AM and 5:00 PM on weekdays from September 10 through September 16, 2024.
```

The following sample demonstrate how to use `curl` to invoke the `suggest_time` MCP tool.

Curl Request

```
curl --location 'https://calendarmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "suggest_time",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request message for SuggestTime.

### SuggestTimeRequest

JSON representation

```
{
  "attendeeEmails": [
    string
  ],
  "startTime": string,
  "endTime": string,

  "timeZone": string

  "durationMinutes": integer

  "preferences": {
    object (Preferences)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>attendeeEmails[]</code></td><td><p><code>string</code></p><p>Required. The attendee emails to find free time for.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string</code></p><p>Required. The start of the interval for the query formatted as per ISO 8601.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string</code></p><p>Required. The end of the interval for the query formatted as per ISO 8601.</p></td></tr><tr><td colspan="2"><p>Union field <code>_time_zone</code>.</p><p><code>_time_zone</code> can be only one of the following:</p></td></tr><tr><td><code>timeZone</code></td><td><p><code>string</code></p><p>Optional. Time zone used for the time values. This field accepts IANA Time Zone database names, e.g., <code>America/Los_Angeles</code>. The default is the time zone of the user's primary calendar.</p></td></tr><tr><td colspan="2"><p>Union field <code>_duration_minutes</code>.</p><p><code>_duration_minutes</code> can be only one of the following:</p></td></tr><tr><td><code>durationMinutes</code></td><td><p><code>integer</code></p><p>Optional. Minimum duration of a free time slot in minutes. The default is 30 minutes.</p></td></tr><tr><td colspan="2"><p>Union field <code>_preferences</code>.</p><p><code>_preferences</code> can be only one of the following:</p></td></tr><tr><td><code>preferences</code></td><td><p><code>object (<code>Preferences</code>)</code></p><p>The preferences to find suggested time for.</p></td></tr></tbody></table>

### Preferences

JSON representation

```
{

  "startHour": string

  "endHour": string

  "excludeWeekends": boolean

  "pageSize": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>_start_hour</code>.</p><p><code>_start_hour</code> can be only one of the following:</p></td></tr><tr><td><code>startHour</code></td><td><p><code>string</code></p><p>The preferred start hour of day (e.g., <code>09:00</code>).</p></td></tr><tr><td colspan="2"><p>Union field <code>_end_hour</code>.</p><p><code>_end_hour</code> can be only one of the following:</p></td></tr><tr><td><code>endHour</code></td><td><p><code>string</code></p><p>The preferred end hour of day (e.g., <code>17:00</code>).</p></td></tr><tr><td colspan="2"><p>Union field <code>_exclude_weekends</code>.</p><p><code>_exclude_weekends</code> can be only one of the following:</p></td></tr><tr><td><code>excludeWeekends</code></td><td><p><code>boolean</code></p><p>Whether to exclude weekends.</p></td></tr><tr><td colspan="2"><p>Union field <code>_page_size</code>.</p><p><code>_page_size</code> can be only one of the following:</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of time slots to return. Default is 5.</p></td></tr></tbody></table>

## Output Schema

Response message for SuggestTime.

### SuggestTimeResponse

JSON representation

```
{
  "timeSlots": [
    {
      object (TimeSlot)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>timeSlots[]</code></td><td><p><code>object (<code>TimeSlot</code>)</code></p><p>List of suggested time slots.</p></td></tr></tbody></table>

### TimeSlot

JSON representation

```
{
  "startTime": string,
  "endTime": string,
  "durationMinutes": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startTime</code></td><td><p><code>string</code></p><p>The start time of the free time slot as an ISO 8601 formatted timestamp.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string</code></p><p>The end time of the free time slot as an ISO 8601 formatted timestamp.</p></td></tr><tr><td><code>durationMinutes</code></td><td><p><code>integer</code></p><p>The duration of the free time slot in minutes.</p></td></tr></tbody></table>

### Tool Annotations

Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
