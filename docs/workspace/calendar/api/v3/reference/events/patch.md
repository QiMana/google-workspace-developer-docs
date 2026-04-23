---
source: https://developers.google.com/workspace/calendar/api/v3/reference/events/patch
root: workspace
fetched_at: 2026-04-23T15:24:55.937Z
---

# Events: patch

Updates an event. This method supports patch semantics. Note that each patch request consumes three quota units; prefer using a `get` followed by an `update`. The field values you specify replace the existing values. Fields that you don't specify in the request remain unchanged. Array fields, if specified, overwrite the existing arrays; this discards any previous array elements. [Try it now](#try-it).

## Request

### HTTP request

```
PATCH https://www.googleapis.com/calendar/v3/calendars/calendarId/events/eventId
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>calendarId</code></td><td><code>string</code></td><td>Calendar identifier. To retrieve calendar IDs call the <a href="https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/list">calendarList.list</a> method. If you want to access the primary calendar of the currently logged in user, use the " <code>primary</code> " keyword.</td></tr><tr><td><code>eventId</code></td><td><code>string</code></td><td>Event identifier.</td></tr><tr><td colspan="3"><b>Optional query parameters</b></td></tr><tr><td><code>alwaysIncludeEmail</code></td><td><code>boolean</code></td><td>Deprecated and ignored. A value will always be returned in the <code>email</code> field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).</td></tr><tr><td><code>conferenceDataVersion</code></td><td><code>integer</code></td><td>Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. Acceptable values are <code>0</code> to <code>1</code>, inclusive.</td></tr><tr><td><code>maxAttendees</code></td><td><code>integer</code></td><td>The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.</td></tr><tr><td><code>sendNotifications</code></td><td><code>boolean</code></td><td>Deprecated. Please use <a href="https://developers.google.com/workspace/calendar/api/v3/reference/events/update#sendUpdates">sendUpdates</a> instead.<br><br>Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to <code>false</code>. The default is <code>false</code>.</td></tr><tr><td><code>sendUpdates</code></td><td><code>string</code></td><td>Guests who should receive notifications about the event update (for example, title changes, etc.).<br><br>Acceptable values are:<ul><li>" <code>all</code> ": Notifications are sent to all guests.</li><li>" <code>externalOnly</code> ": Notifications are sent to non-Google Calendar guests only.</li><li>" <code>none</code> ": No notifications are sent. For calendar migration tasks, consider using the <a href="https://developers.google.com/workspace/calendar/api/v3/reference/events/import">Events.import</a> method instead.</li></ul></td></tr><tr><td><code>supportsAttachments</code></td><td><code>boolean</code></td><td>Whether API client performing operation supports event attachments. Optional. The default is False.</td></tr></tbody></table>

### Authorization

This request requires authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.events``https://www.googleapis.com/auth/calendar.app.created``https://www.googleapis.com/auth/calendar.events.owned`

For more information, see the [authentication and authorization](../../../../../guides/configure-oauth-consent.md) page.

### Request body

In the request body, supply the relevant portions of an [Events resource](../events.md#resource), according to the rules of patch semantics.

## Response

If successful, this method returns an [Events resource](../events.md#resource) in the response body.

## Try it!

Use the APIs Explorer below to call this method on live data and see the response.
