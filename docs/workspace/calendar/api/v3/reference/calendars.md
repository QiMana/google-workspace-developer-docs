---
source: https://developers.google.com/workspace/calendar/api/v3/reference/calendars
root: workspace
fetched_at: 2026-04-23T15:24:52.442Z
---

# Calendars

A collection of all existing calendars. See also [Calendars vs CalendarList](../../concepts/events-calendars.md#calendar_and_calendar_list).

For a list of [methods](#methods) for this resource, see the end of this page.

## Resource representations

```
{
  "kind": "calendar#calendar",
  "etag": etag,
  "id": string,
  "summary": string,
  "description": string,
  "location": string,
  "timeZone": string,
  "dataOwner": string,
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
| `autoAcceptInvitations` | `boolean` | Whether this calendar automatically accepts invitations. Only valid for resource calendars. |  |
| `conferenceProperties` | `nested object` | Conferencing properties for this calendar, for example what types of conferences are allowed. |  |
| `conferenceProperties.allowedConferenceSolutionTypes[]` | `list` | The types of conference solutions that are supported for this calendar.  The possible values are:  - `"eventHangout"` - `"eventNamedHangout"` - `"hangoutsMeet"` Optional. |  |
| `dataOwner` | `string` | The email of the owner of the calendar. Set only for secondary calendars. Read-only. |  |
| `description` | `string` | Description of the calendar. Optional. | writable |
| `etag` | `etag` | ETag of the resource. |  |
| `id` | `string` | Identifier of the calendar. To retrieve IDs call the [calendarList.list()](./calendarList/list.md) method. |  |
| `kind` | `string` | Type of the resource (" `calendar#calendar` "). |  |
| `location` | `string` | Geographic location of the calendar as free-form text. Optional. | writable |
| `summary` | `string` | Title of the calendar. | writable |
| `timeZone` | `string` | The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional. | writable |

## Methods

[clear](./calendars/clear.md)

Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.

[delete](./calendars/delete.md)

Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.

[get](./calendars/get.md)

Returns metadata for a calendar.

[insert](./calendars/insert.md)

Creates a secondary calendar.

The authenticated user for the request is made the data owner of the new calendar.

[patch](./calendars/patch.md)

Updates metadata for a calendar. This method supports patch semantics. Note that each patch request consumes three quota units; prefer using a `get` followed by an `update`. The field values you specify replace the existing values. Fields that you don't specify in the request remain unchanged. Array fields, if specified, overwrite the existing arrays; this discards any previous array elements.

[update](./calendars/update.md)

Updates metadata for a calendar.
