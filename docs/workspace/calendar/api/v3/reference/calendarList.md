---
source: https://developers.google.com/workspace/calendar/api/v3/reference/calendarList
root: workspace
fetched_at: 2026-04-23T15:24:51.926Z
---

# CalendarList

The collection of calendars in the user's calendar list. See also [Calendars vs CalendarList](../../concepts/events-calendars.md#calendar_and_calendar_list).

For a list of [methods](#methods) for this resource, see the end of this page.

## Resource representations

```
{
  "kind": "calendar#calendarListEntry",
  "etag": etag,
  "id": string,
  "summary": string,
  "description": string,
  "location": string,
  "timeZone": string,
  "dataOwner": string,
  "summaryOverride": string,
  "colorId": string,
  "backgroundColor": string,
  "foregroundColor": string,
  "hidden": boolean,
  "selected": boolean,
  "accessRole": string,
  "defaultReminders": [
    {
      "method": string,
      "minutes": integer
    }
  ],
  "notificationSettings": {
    "notifications": [
      {
        "type": string,
        "method": string
      }
    ]
  },
  "primary": boolean,
  "deleted": boolean,
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      string
    ]
  },
  "autoAcceptInvitations": boolean
}
```

| Property name | Value | Description | Notes |
| --- | --- | --- | --- |
| `accessRole` | `string` | The effective access role that the authenticated user has on the calendar. Read-only. Possible values are: - " `freeBusyReader` " - Provides read access to free/busy information. - " `reader` " - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. - " `writer` " - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. - " `owner` " - Provides manager access to the calendar. This role has all of the permissions of the writer role with the additional ability to see and modify access levels of other users. |  |
| `autoAcceptInvitations` | `boolean` | Whether this calendar automatically accepts invitations. Only valid for resource calendars. Read-only. |  |
| `backgroundColor` | `string` | The main color of the calendar in the hexadecimal format " `#0088aa` ". This property supersedes the index-based `colorId` property. To set or change this property, you need to specify `colorRgbFormat=true` in the parameters of the [insert](./calendarList/insert.md), [update](./calendarList/update.md) and [patch](./calendarList/patch.md) methods. Optional. | writable |
| `colorId` | `string` | The color of the calendar. This is an ID referring to an entry in the `calendar` section of the colors definition (see the [colors endpoint](./colors.md)). This property is superseded by the `backgroundColor` and `foregroundColor` properties and can be ignored when using these properties. Optional. | writable |
| `conferenceProperties` | `nested object` | Conferencing properties for this calendar, for example what types of conferences are allowed. |  |
| `conferenceProperties.allowedConferenceSolutionTypes[]` | `list` | The types of conference solutions that are supported for this calendar.  The possible values are:  - `"eventHangout"` - `"eventNamedHangout"` - `"hangoutsMeet"` Optional. |  |
| `dataOwner` | `string` | The email of the owner of the calendar. Set only for secondary calendars. Read-only. |  |
| `defaultReminders[]` | `list` | The default reminders that the authenticated user has for this calendar. | writable |
| `defaultReminders[].method` | `string` | The method used by this reminder. Possible values are: - " `email` " - Reminders are sent via email. - " `popup` " - Reminders are sent via a UI popup.  Required when adding a reminder. | writable |
| `defaultReminders[].minutes` | `integer` | Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).  Required when adding a reminder. | writable |
| `deleted` | `boolean` | Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False. |  |
| `description` | `string` | Description of the calendar. Optional. Read-only. |  |
| `etag` | `etag` | ETag of the resource. |  |
| `foregroundColor` | `string` | The foreground color of the calendar in the hexadecimal format " `#ffffff` ". This property supersedes the index-based `colorId` property. To set or change this property, you need to specify `colorRgbFormat=true` in the parameters of the [insert](./calendarList/insert.md), [update](./calendarList/update.md) and [patch](./calendarList/patch.md) methods. Optional. | writable |
| `hidden` | `boolean` | Whether the calendar has been hidden from the list. Optional. The attribute is only returned when the calendar is hidden, in which case the value is `true`. | writable |
| `id` | `string` | Identifier of the calendar. |  |
| `kind` | `string` | Type of the resource ("calendar#calendarListEntry"). |  |
| `location` | `string` | Geographic location of the calendar as free-form text. Optional. Read-only. |  |
| `notificationSettings` | `object` | The notifications that the authenticated user is receiving for this calendar. | writable |
| `notificationSettings.notifications[]` | `list` | The list of notifications set for this calendar. |  |
| `notificationSettings.notifications[].method` | `string` | The method used to deliver the notification. The possible value is: - " `email` " - Notifications are sent via email.  Required when adding a notification. | writable |
| `notificationSettings.notifications[].type` | `string` | The type of notification. Possible values are: - " `eventCreation` " - Notification sent when a new event is put on the calendar. - " `eventChange` " - Notification sent when an event is changed. - " `eventCancellation` " - Notification sent when an event is cancelled. - " `eventResponse` " - Notification sent when an attendee responds to the event invitation. - " `agenda` " - An agenda with the events of the day (sent out in the morning).  Required when adding a notification. | writable |
| `primary` | `boolean` | Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False. |  |
| `selected` | `boolean` | Whether the calendar content shows up in the calendar UI. Optional. The default is False. | writable |
| `summary` | `string` | Title of the calendar. Read-only. |  |
| `summaryOverride` | `string` | The summary that the authenticated user has set for this calendar. Optional. | writable |
| `timeZone` | `string` | The time zone of the calendar. Optional. Read-only. |  |

## Methods

[delete](./calendarList/delete.md)

Removes a calendar from the user's calendar list.

[get](./calendarList/get.md)

Returns a calendar from the user's calendar list.

[insert](./calendarList/insert.md)

Inserts an existing calendar into the user's calendar list.

[list](./calendarList/list.md)

Returns the calendars on the user's calendar list.

[patch](./calendarList/patch.md)

Updates an existing calendar on the user's calendar list. This method supports patch semantics. Note that each patch request consumes three quota units; prefer using a `get` followed by an `update`. The field values you specify replace the existing values. Fields that you don't specify in the request remain unchanged. Array fields, if specified, overwrite the existing arrays; this discards any previous array elements.

[update](./calendarList/update.md)

Updates an existing calendar on the user's calendar list.

[watch](./calendarList/watch.md)

Watch for changes to CalendarList resources.
