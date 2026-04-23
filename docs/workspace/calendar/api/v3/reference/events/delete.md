---
source: https://developers.google.com/workspace/calendar/api/v3/reference/events/delete
root: workspace
fetched_at: 2026-04-23T15:24:53.247Z
---

# Events: delete

Deletes an event. [Try it now](#try-it).

## Request

### HTTP request

```
DELETE https://www.googleapis.com/calendar/v3/calendars/calendarId/events/eventId
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>calendarId</code></td><td><code>string</code></td><td>Calendar identifier. To retrieve calendar IDs call the <a href="https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/list">calendarList.list</a> method. If you want to access the primary calendar of the currently logged in user, use the " <code>primary</code> " keyword.</td></tr><tr><td><code>eventId</code></td><td><code>string</code></td><td>Event identifier.</td></tr><tr><td colspan="3"><b>Optional query parameters</b></td></tr><tr><td><code>sendNotifications</code></td><td><code>boolean</code></td><td>Deprecated. Please use <a href="https://developers.google.com/workspace/calendar/api/v3/reference/events/delete#sendUpdates">sendUpdates</a> instead.<br><br>Whether to send notifications about the deletion of the event. Note that some emails might still be sent even if you set the value to <code>false</code>. The default is <code>false</code>.</td></tr><tr><td><code>sendUpdates</code></td><td><code>string</code></td><td>Guests who should receive notifications about the deletion of the event.<br><br>Acceptable values are:<ul><li>" <code>all</code> ": Notifications are sent to all guests.</li><li>" <code>externalOnly</code> ": Notifications are sent to non-Google Calendar guests only.</li><li>" <code>none</code> ": No notifications are sent. For calendar migration tasks, consider using the <a href="https://developers.google.com/workspace/calendar/api/v3/reference/events/import">Events.import</a> method instead.</li></ul></td></tr></tbody></table>

### Authorization

This request requires authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.events``https://www.googleapis.com/auth/calendar.app.created``https://www.googleapis.com/auth/calendar.events.owned`

For more information, see the [authentication and authorization](https://developers.google.com/workspace/guides/configure-oauth-consent) page.

### Request body

Do not supply a request body with this method.

## Response

If successful, this method returns an empty response body.

## Try it!

Use the APIs Explorer below to call this method on live data and see the response.
