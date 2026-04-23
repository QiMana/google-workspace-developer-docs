---
source: https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/get
root: workspace
fetched_at: 2026-04-23T15:24:52.389Z
---

# CalendarList: get

Returns a calendar from the user's calendar list. [Try it now](#try-it).

## Request

### HTTP request

```
GET https://www.googleapis.com/calendar/v3/users/me/calendarList/calendarId
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>calendarId</code></td><td><code>string</code></td><td>Calendar identifier. To retrieve calendar IDs call the <a href="https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/list">calendarList.list</a> method. If you want to access the primary calendar of the currently logged in user, use the " <code>primary</code> " keyword.</td></tr></tbody></table>

### Authorization

This request requires authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar.readonly``https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.app.created``https://www.googleapis.com/auth/calendar.calendarlist``https://www.googleapis.com/auth/calendar.calendarlist.readonly`

For more information, see the [authentication and authorization](https://developers.google.com/workspace/guides/configure-oauth-consent) page.

### Request body

Do not supply a request body with this method.

## Response

If successful, this method returns a [CalendarList resource](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList#resource) in the response body.

## Try it!

Use the APIs Explorer below to call this method on live data and see the response.
