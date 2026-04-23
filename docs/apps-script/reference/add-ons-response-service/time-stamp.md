---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/time-stamp
root: apps-script
fetched_at: 2026-04-23T15:18:43.240Z
---

# Class TimeStamp

Represents a timestamp object which is can be added to a `VariableData`.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const timeStamp = AddOnsResponseService.newTimeStamp()
    .setSeconds(10086)
    .setNanos(123);
```

## Detailed documentation

### setNanos(nanos)

Sets the nanos of the timestamp, it represents the number of nanoseconds within the current second.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `nanos` | `Integer` | The nanos of the timestamp. |

#### Return

`TimeStamp` — This time stamp object, for chaining.

---

### setSeconds(seconds)

Sets the seconds of the timestamp, it represents the number of seconds since the Unix epoch(January 1, 1970, 00:00:00 UTC).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `seconds` | `Integer` | The seconds of the timestamp. |

#### Return

`TimeStamp` — This time stamp object, for chaining.
