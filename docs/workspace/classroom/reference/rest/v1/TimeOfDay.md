---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/TimeOfDay
root: workspace
fetched_at: 2026-04-23T15:25:52.985Z
---

# TimeOfDay

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are `google.type.Date` and `google.protobuf.Timestamp`.

JSON representation

```
{
  "hours": integer,
  "minutes": integer,
  "seconds": integer,
  "nanos": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>hours</code></td><td><p><code>integer</code></p><p>Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.</p></td></tr><tr><td><code>minutes</code></td><td><p><code>integer</code></p><p>Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.</p></td></tr><tr><td><code>seconds</code></td><td><p><code>integer</code></p><p>Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.</p></td></tr><tr><td><code>nanos</code></td><td><p><code>integer</code></p><p>Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.</p></td></tr></tbody></table>
