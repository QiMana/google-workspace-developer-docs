---
source: https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/update
root: workspace
fetched_at: 2026-04-23T15:24:52.605Z
---

# CalendarList: update

Updates an existing calendar on the user's calendar list. [Try it now](#try-it).

## Request

### HTTP request

```
PUT https://www.googleapis.com/calendar/v3/users/me/calendarList/calendarId
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>calendarId</code></td><td><code>string</code></td><td>Calendar identifier. To retrieve calendar IDs call the <a href="https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/list">calendarList.list</a> method. If you want to access the primary calendar of the currently logged in user, use the " <code>primary</code> " keyword.</td></tr><tr><td colspan="3"><b>Optional query parameters</b></td></tr><tr><td><code>colorRgbFormat</code></td><td><code>boolean</code></td><td>Whether to use the <code>foregroundColor</code> and <code>backgroundColor</code> fields to write the calendar colors (RGB). If this feature is used, the index-based <code>colorId</code> field will be set to the best matching option automatically. Optional. The default is False.</td></tr></tbody></table>

### Authorization

This request requires authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.app.created``https://www.googleapis.com/auth/calendar.calendarlist`

For more information, see the [authentication and authorization](../../../../../guides/configure-oauth-consent.md) page.

### Request body

In the request body, supply a [CalendarList resource](../calendarList.md#resource) with the following properties:

<table><thead><tr><th>Property name</th><th>Value</th><th>Description</th><th>Notes</th></tr></thead><tbody><tr><td colspan="4"><b>Optional Properties</b></td></tr><tr><td><code>backgroundColor</code></td><td><code>string</code></td><td>The main color of the calendar in the hexadecimal format " <code>#0088aa</code> ". This property supersedes the index-based <code>colorId</code> property. To set or change this property, you need to specify <code>colorRgbFormat=true</code> in the parameters of the <a href="https://developers.google.com/calendar/v3/reference/calendarList/insert">insert</a>, <a href="https://developers.google.com/calendar/v3/reference/calendarList/update">update</a> and <a href="https://developers.google.com/calendar/v3/reference/calendarList/patch">patch</a> methods. Optional.</td><td>writable</td></tr><tr><td><code>colorId</code></td><td><code>string</code></td><td>The color of the calendar. This is an ID referring to an entry in the <code>calendar</code> section of the colors definition (see the <a href="https://developers.google.com/calendar/v3/reference/colors">colors endpoint</a>). This property is superseded by the <code>backgroundColor</code> and <code>foregroundColor</code> properties and can be ignored when using these properties. Optional.</td><td>writable</td></tr><tr><td><code>defaultReminders[]</code></td><td><code>list</code></td><td>The default reminders that the authenticated user has for this calendar.</td><td>writable</td></tr><tr><td><code>defaultReminders[].method</code></td><td><code>string</code></td><td>The method used by this reminder. Possible values are:<ul><li>" <code>email</code> " - Reminders are sent via email.</li><li>" <code>popup</code> " - Reminders are sent via a UI popup.</li></ul><p>Required when adding a reminder.</p></td><td>writable</td></tr><tr><td><code>defaultReminders[].minutes</code></td><td><code>integer</code></td><td>Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).<p>Required when adding a reminder.</p></td><td>writable</td></tr><tr><td><code>foregroundColor</code></td><td><code>string</code></td><td>The foreground color of the calendar in the hexadecimal format " <code>#ffffff</code> ". This property supersedes the index-based <code>colorId</code> property. To set or change this property, you need to specify <code>colorRgbFormat=true</code> in the parameters of the <a href="https://developers.google.com/calendar/v3/reference/calendarList/insert">insert</a>, <a href="https://developers.google.com/calendar/v3/reference/calendarList/update">update</a> and <a href="https://developers.google.com/calendar/v3/reference/calendarList/patch">patch</a> methods. Optional.</td><td>writable</td></tr><tr><td><code>hidden</code></td><td><code>boolean</code></td><td>Whether the calendar has been hidden from the list. Optional. The attribute is only returned when the calendar is hidden, in which case the value is <code>true</code>.</td><td>writable</td></tr><tr><td><code>notificationSettings</code></td><td><code>object</code></td><td>The notifications that the authenticated user is receiving for this calendar.</td><td>writable</td></tr><tr><td><code>notificationSettings.notifications[].method</code></td><td><code>string</code></td><td>The method used to deliver the notification. The possible value is:<ul><li>" <code>email</code> " - Notifications are sent via email.</li></ul><p>Required when adding a notification.</p></td><td>writable</td></tr><tr><td><code>notificationSettings.notifications[].type</code></td><td><code>string</code></td><td>The type of notification. Possible values are:<ul><li>" <code>eventCreation</code> " - Notification sent when a new event is put on the calendar.</li><li>" <code>eventChange</code> " - Notification sent when an event is changed.</li><li>" <code>eventCancellation</code> " - Notification sent when an event is cancelled.</li><li>" <code>eventResponse</code> " - Notification sent when an attendee responds to the event invitation.</li><li>" <code>agenda</code> " - An agenda with the events of the day (sent out in the morning).</li></ul><p>Required when adding a notification.</p></td><td>writable</td></tr><tr><td><code>selected</code></td><td><code>boolean</code></td><td>Whether the calendar content shows up in the calendar UI. Optional. The default is False.</td><td>writable</td></tr><tr><td><code>summaryOverride</code></td><td><code>string</code></td><td>The summary that the authenticated user has set for this calendar. Optional.</td><td>writable</td></tr></tbody></table>

## Response

If successful, this method returns a [CalendarList resource](../calendarList.md#resource) in the response body.

## Try it!

Use the APIs Explorer below to call this method on live data and see the response.
