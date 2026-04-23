---
source: https://developers.google.com/workspace/calendar/api/v3/reference/settings
root: workspace
fetched_at: 2026-04-23T15:24:58.547Z
---

# Settings

Setting resources represent settings that users can change from the Calendar UI, such as the user's time zone. They can be retrieved via [list](./settings/list.md) and [get](./settings/get.md) methods. Note that if a setting has its default value, it might not be returned.  
  
The list of supported settings:

| Setting id | Description | Allowed values | Default value |
| --- | --- | --- | --- |
| autoAddHangouts | Whether to automatically add video conferences (Meet or add-on) to all events. Note this setting is ignored by the server if the conferenceDataVersion is larger than 0 as it is the client’s responsibility to handle the logic according to this setting. Read only. | “true”, “false” | “false” |
| dateFieldOrder | What should the order of day (D), month (M) and year (Y) be when displaying dates. | ”MDY”, “DMY”, “YMD” | ”MDY” |
| defaultEventLength | The default length of events (in minutes) that were created without an explicit duration. | positive number | “60” |
| format24HourTime | Whether to show the time in 24 hour format. | “true”, “false” | “false” |
| hideInvitations | Whether to hide events to which the user is invited but hasn’t acted on (for example by responding). | “true”, “false” | “false” |
| hideWeekends | Whether the weekends should be hidden when displaying a week. | “true”, “false” | “false” |
| locale | User’s locale. | "in", "ca","cs", "da", "de", "en\_GB", "en", "es", "es\_419", "tl", "fr", "hr", "it", "lv", "lt", "hu", "nl", "no", "pl", "pt\_BR", "pt\_PT", "ro", "sk", "sl", "fi", "sv", "tr", "vi", "el", "ru", "sr", "uk", "bg", "iw", "ar", "fa", "hi", "th", "zh\_TW", "zh\_CN", "ja", "ko" | “en” |
| remindOnRespondedEventsOnly | Whether event reminders should be sent only for events with the user’s response status “Yes” and “Maybe”. | “true”, “false” | “false” |
| showDeclinedEvents | Whether events to which the user responded “No” should be shown on the user’s calendar. | “true”, “false” | “true” |
| timezone | The ID of the user’s timezone. | See [http://www.iana.org/time-zones](http://www.iana.org/time-zones) | “Etc/GMT” |
| useKeyboardShortcuts | Whether the keyboard shortcuts are enabled. | “true”, “false” | “true” |
| weekStart | Whether the week should start on Sunday (0), Monday (1) or Saturday (6). | "0", "1", "6" | “0” |

For a list of [methods](#methods) for this resource, see the end of this page.

## Resource representations

```
{
  "kind": "calendar#setting",
  "etag": etag,
  "id": string,
  "value": string
}
```

| Property name | Value | Description | Notes |
| --- | --- | --- | --- |
| `etag` | `etag` | ETag of the resource. |  |
| `id` | `string` | The id of the user setting. |  |
| `kind` | `string` | Type of the resource (" `calendar#setting` "). |  |
| `value` | `string` | Value of the user setting. The format of the value depends on the ID of the setting. It must always be a UTF-8 string of length up to 1024 characters. |  |

## Methods

[get](./settings/get.md)

Returns a single user setting.

[list](./settings/list.md)

Returns all user settings for the authenticated user.

[watch](./settings/watch.md)

Watch for changes to Settings resources.
