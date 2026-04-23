---
source: https://developers.google.com/workspace/calendar/api/v3/reference/calendars/insert
root: workspace
fetched_at: 2026-04-23T15:24:52.918Z
---

# Calendars: insert

Creates a secondary calendar.

The authenticated user for the request is made the data owner of the new calendar.

[Try it now](#try-it).

## Request

### HTTP request

```
POST https://www.googleapis.com/calendar/v3/calendars
```

### Authorization

This request requires authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.app.created``https://www.googleapis.com/auth/calendar.calendars`

For more information, see the [authentication and authorization](../../../../../guides/configure-oauth-consent.md) page.

### Request body

In the request body, supply a [Calendars resource](../calendars.md#resource) with the following properties:

<table><thead><tr><th>Property name</th><th>Value</th><th>Description</th><th>Notes</th></tr></thead><tbody><tr><td colspan="4"><b>Required Properties</b></td></tr><tr><td><code>summary</code></td><td><code>string</code></td><td>Title of the calendar.</td><td>writable</td></tr></tbody></table>

## Response

If successful, this method returns a [Calendars resource](../calendars.md#resource) in the response body.

## Try it!

Use the APIs Explorer below to call this method on live data and see the response.
