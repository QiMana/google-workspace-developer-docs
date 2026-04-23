---
source: https://developers.google.com/workspace/calendar/api/v3/reference/calendars/update
root: workspace
fetched_at: 2026-04-23T15:24:54.004Z
---

# Calendars: update

Updates metadata for a calendar. [Try it now](#try-it).

## Request

### HTTP request

```
PUT https://www.googleapis.com/calendar/v3/calendars/calendarId
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>calendarId</code></td><td><code>string</code></td><td>Calendar identifier. To retrieve calendar IDs call the <a href="https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/list">calendarList.list</a> method. If you want to access the primary calendar of the currently logged in user, use the " <code>primary</code> " keyword.</td></tr></tbody></table>

### Authorization

This request requires authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.app.created``https://www.googleapis.com/auth/calendar.calendars`

For more information, see the [authentication and authorization](../../../../../guides/configure-oauth-consent.md) page.

### Request body

In the request body, supply a [Calendars resource](../calendars.md#resource) with the following properties:

<table><thead><tr><th>Property name</th><th>Value</th><th>Description</th><th>Notes</th></tr></thead><tbody><tr><td colspan="4"><b>Optional Properties</b></td></tr><tr><td><code>description</code></td><td><code>string</code></td><td>Description of the calendar. Optional.</td><td>writable</td></tr><tr><td><code>location</code></td><td><code>string</code></td><td>Geographic location of the calendar as free-form text. Optional.</td><td>writable</td></tr><tr><td><code>summary</code></td><td><code>string</code></td><td>Title of the calendar.</td><td>writable</td></tr><tr><td><code>timeZone</code></td><td><code>string</code></td><td>The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.</td><td>writable</td></tr></tbody></table>

## Response

If successful, this method returns a [Calendars resource](../calendars.md#resource) in the response body.

## Try it!

Use the APIs Explorer below to call this method on live data and see the response.
