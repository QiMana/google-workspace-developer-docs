---
source: https://developers.google.com/workspace/calendar/api/v3/reference/calendars/clear
root: workspace
fetched_at: 2026-04-23T15:24:52.489Z
---

# Calendars: clear

Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account. [Try it now](#try-it).

## Request

### HTTP request

```
POST https://www.googleapis.com/calendar/v3/calendars/calendarId/clear
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>calendarId</code></td><td><code>string</code></td><td>Calendar identifier. To retrieve calendar IDs call the <a href="https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/list">calendarList.list</a> method. If you want to access the primary calendar of the currently logged in user, use the " <code>primary</code> " keyword.</td></tr></tbody></table>

### Authorization

This request requires authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.calendars`

For more information, see the [authentication and authorization](../../../../../guides/configure-oauth-consent.md) page.

### Request body

Do not supply a request body with this method.

## Response

If successful, this method returns an empty response body.

## Try it!

Use the APIs Explorer below to call this method on live data and see the response.
