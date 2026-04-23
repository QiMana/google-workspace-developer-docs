---
source: https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/patch
root: workspace
fetched_at: 2026-04-23T15:24:53.026Z
---

# CalendarList: patch

Updates an existing calendar on the user's calendar list. This method supports patch semantics. Note that each patch request consumes three quota units; prefer using a `get` followed by an `update`. The field values you specify replace the existing values. Fields that you don't specify in the request remain unchanged. Array fields, if specified, overwrite the existing arrays; this discards any previous array elements. [Try it now](#try-it).

## Request

### HTTP request

```
PATCH https://www.googleapis.com/calendar/v3/users/me/calendarList/calendarId
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>calendarId</code></td><td><code>string</code></td><td>Calendar identifier. To retrieve calendar IDs call the <a href="https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/list">calendarList.list</a> method. If you want to access the primary calendar of the currently logged in user, use the " <code>primary</code> " keyword.</td></tr><tr><td colspan="3"><b>Optional query parameters</b></td></tr><tr><td><code>colorRgbFormat</code></td><td><code>boolean</code></td><td>Whether to use the <code>foregroundColor</code> and <code>backgroundColor</code> fields to write the calendar colors (RGB). If this feature is used, the index-based <code>colorId</code> field will be set to the best matching option automatically. Optional. The default is False.</td></tr></tbody></table>

### Authorization

This request requires authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.app.created``https://www.googleapis.com/auth/calendar.calendarlist`

For more information, see the [authentication and authorization](../../../../../guides/configure-oauth-consent.md) page.

### Request body

In the request body, supply the relevant portions of a [CalendarList resource](../calendarList.md#resource), according to the rules of patch semantics.

## Response

If successful, this method returns a [CalendarList resource](../calendarList.md#resource) in the response body.

## Try it!

Use the APIs Explorer below to call this method on live data and see the response.
