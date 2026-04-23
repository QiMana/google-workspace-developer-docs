---
source: https://developers.google.com/workspace/calendar/api/v3/reference/events/get
root: workspace
fetched_at: 2026-04-23T15:24:54.953Z
---

# Events: get

Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the [events.list method using the `iCalUID` parameter](https://developers.google.com/workspace/calendar/api/v3/reference/events/list#iCalUID). [Try it now](#try-it).

## Request

### HTTP request

```
GET https://www.googleapis.com/calendar/v3/calendars/calendarId/events/eventId
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>calendarId</code></td><td><code>string</code></td><td>Calendar identifier. To retrieve calendar IDs call the <a href="https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/list">calendarList.list</a> method. If you want to access the primary calendar of the currently logged in user, use the " <code>primary</code> " keyword.</td></tr><tr><td><code>eventId</code></td><td><code>string</code></td><td>Event identifier.</td></tr><tr><td colspan="3"><b>Optional query parameters</b></td></tr><tr><td><code>alwaysIncludeEmail</code></td><td><code>boolean</code></td><td>Deprecated and ignored. A value will always be returned in the <code>email</code> field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).</td></tr><tr><td><code>maxAttendees</code></td><td><code>integer</code></td><td>The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.</td></tr><tr><td><code>timeZone</code></td><td><code>string</code></td><td>Time zone used in the response. Optional. The default is the time zone of the calendar.</td></tr></tbody></table>

### Authorization

This request allows authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar.readonly``https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.events.readonly``https://www.googleapis.com/auth/calendar.events``https://www.googleapis.com/auth/calendar.app.created``https://www.googleapis.com/auth/calendar.events.freebusy``https://www.googleapis.com/auth/calendar.events.owned``https://www.googleapis.com/auth/calendar.events.owned.readonly``https://www.googleapis.com/auth/calendar.events.public.readonly`

For more information, see the [authentication and authorization](https://developers.google.com/workspace/guides/configure-oauth-consent) page.

### Request body

Do not supply a request body with this method.

## Response

If successful, this method returns an [Events resource](https://developers.google.com/workspace/calendar/api/v3/reference/events#resource) in the response body.

## Try it!

Use the APIs Explorer below to call this method on live data and see the response.
