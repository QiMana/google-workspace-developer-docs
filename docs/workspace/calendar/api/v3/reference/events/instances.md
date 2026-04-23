---
source: https://developers.google.com/workspace/calendar/api/v3/reference/events/instances
root: workspace
fetched_at: 2026-04-23T15:24:53.393Z
---

# Events: instances

Returns instances of the specified recurring event. [Try it now](#try-it).

## Request

### HTTP request

```
GET https://www.googleapis.com/calendar/v3/calendars/calendarId/events/eventId/instances
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>calendarId</code></td><td><code>string</code></td><td>Calendar identifier. To retrieve calendar IDs call the <a href="https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/list">calendarList.list</a> method. If you want to access the primary calendar of the currently logged in user, use the " <code>primary</code> " keyword.</td></tr><tr><td><code>eventId</code></td><td><code>string</code></td><td>Recurring event identifier.</td></tr><tr><td colspan="3"><b>Optional query parameters</b></td></tr><tr><td><code>alwaysIncludeEmail</code></td><td><code>boolean</code></td><td>Deprecated and ignored. A value will always be returned in the <code>email</code> field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).</td></tr><tr><td><code>maxAttendees</code></td><td><code>integer</code></td><td>The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.</td></tr><tr><td><code>maxResults</code></td><td><code>integer</code></td><td>Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.</td></tr><tr><td><code>originalStart</code></td><td><code>string</code></td><td>The original start time of the instance in the result. Optional.</td></tr><tr><td><code>pageToken</code></td><td><code>string</code></td><td>Token specifying which result page to return. Optional.</td></tr><tr><td><code>showDeleted</code></td><td><code>boolean</code></td><td>Whether to include deleted events (with <code>status</code> equals " <code>cancelled</code> ") in the result. Cancelled instances of recurring events will still be included if <code>singleEvents</code> is False. Optional. The default is False.</td></tr><tr><td><code>timeMax</code></td><td><code>datetime</code></td><td>Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset.</td></tr><tr><td><code>timeMin</code></td><td><code>datetime</code></td><td>Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset.</td></tr><tr><td><code>timeZone</code></td><td><code>string</code></td><td>Time zone used in the response. Optional. The default is the time zone of the calendar.</td></tr></tbody></table>

### Authorization

This request allows authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar.readonly``https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.events.readonly``https://www.googleapis.com/auth/calendar.events``https://www.googleapis.com/auth/calendar.app.created``https://www.googleapis.com/auth/calendar.events.freebusy``https://www.googleapis.com/auth/calendar.events.owned``https://www.googleapis.com/auth/calendar.events.owned.readonly``https://www.googleapis.com/auth/calendar.events.public.readonly`

For more information, see the [authentication and authorization](https://developers.google.com/workspace/guides/configure-oauth-consent) page.

### Request body

Do not supply a request body with this method.

## Response

If successful, this method returns a response body with the following structure:

```
{
  "kind": "calendar#events",
  "etag": etag,
  "summary": string,
  "description": string,
  "updated": datetime,
  "timeZone": string,
  "accessRole": string,
  "defaultReminders": [
    {
      "method": string,
      "minutes": integer
    }
  ],
  "nextPageToken": string,
  "nextSyncToken": string,
  "items": [
    events Resource
  ]
}
```

| Property name | Value | Description | Notes |
| --- | --- | --- | --- |
| `kind` | `string` | Type of the collection (" `calendar#events` "). |  |
| `etag` | `etag` | ETag of the collection. |  |
| `summary` | `string` | Title of the calendar. Read-only. |  |
| `description` | `string` | Description of the calendar. Read-only. |  |
| `updated` | `datetime` | Last modification time of the calendar (as a [RFC3339](https://tools.ietf.org/html/rfc3339) timestamp). Read-only. |  |
| `timeZone` | `string` | The time zone of the calendar. Read-only. |  |
| `accessRole` | `string` | The user's access role for this calendar. Read-only. Possible values are: - " `none` " - The user has no access. - " `freeBusyReader` " - The user has read access to free/busy information. - " `reader` " - The user has read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. - " `writer` " - The user has read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. - " `owner` " - The user has manager access to the calendar. This role has all of the permissions of the writer role with the additional ability to see and modify access levels of other users. |  |
| `defaultReminders[]` | `list` | The default reminders on the calendar for the authenticated user. These reminders apply to all events on this calendar that do not explicitly override them (i.e. do not have `reminders.useDefault` set to True). |  |
| `defaultReminders[].method` | `string` | The method used by this reminder. Possible values are: - " `email` " - Reminders are sent via email. - " `popup` " - Reminders are sent via a UI popup.  Required when adding a reminder. | writable |
| `defaultReminders[].minutes` | `integer` | Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).  Required when adding a reminder. | writable |
| `nextPageToken` | `string` | Token used to access the next page of this result. Omitted if no further results are available, in which case `nextSyncToken` is provided. |  |
| `items[]` | `list` | List of events on the calendar. |  |
| `nextSyncToken` | `string` | Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case `nextPageToken` is provided. |  |

## Try it!

Use the APIs Explorer below to call this method on live data and see the response.
