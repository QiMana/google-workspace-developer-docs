---
source: https://developers.google.com/workspace/calendar/api/v3/reference/colors
root: workspace
fetched_at: 2026-04-23T15:24:56.629Z
---

# Colors

For a list of [methods](#methods) for this resource, see the end of this page.

## Resource representations

```
{
  "kind": "calendar#colors",
  "updated": datetime,
  "calendar": {
    (key): {
      "background": string,
      "foreground": string
    }
  },
  "event": {
    (key): {
      "background": string,
      "foreground": string
    }
  }
}
```

| Property name | Value | Description | Notes |
| --- | --- | --- | --- |
| `calendar` | `object` | A global palette of calendar colors, mapping from the color ID to its definition. A `calendarListEntry` resource refers to one of these color IDs in its `colorId` field. Read-only. |  |
| `calendar.(key)` | `nested object` | A calendar color definition. |  |
| `calendar.(key).background` | `string` | The background color associated with this color definition. |  |
| `calendar.(key).foreground` | `string` | The foreground color that can be used to write on top of a background with 'background' color. |  |
| `event` | `object` | A global palette of event colors, mapping from the color ID to its definition. An `event` resource may refer to one of these color IDs in its `colorId` field. Read-only. |  |
| `event.(key)` | `nested object` | An event color definition. |  |
| `event.(key).background` | `string` | The background color associated with this color definition. |  |
| `event.(key).foreground` | `string` | The foreground color that can be used to write on top of a background with 'background' color. |  |
| `kind` | `string` | Type of the resource (" `calendar#colors` "). |  |
| `updated` | `datetime` | Last modification time of the color palette (as a [RFC3339](https://tools.ietf.org/html/rfc3339) timestamp). Read-only. |  |

## Methods

[get](./colors/get.md)

Returns the color definitions for calendars and events.
