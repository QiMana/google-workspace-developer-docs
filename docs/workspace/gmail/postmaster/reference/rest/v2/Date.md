---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v2/Date
root: workspace
fetched_at: 2026-04-23T15:30:01.648Z
---

# Date

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:

- A full date, with non-zero year, month, and day values.
- A month and day, with a zero year (for example, an anniversary).
- A year on its own, with a zero month and a zero day.
- A year and month, with a zero day (for example, a credit card expiration date).

Related types:

- `google.type.TimeOfDay`
- `google.type.DateTime`
- `google.protobuf.Timestamp`

JSON representation

```
{
  "year": integer,
  "month": integer,
  "day": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>year</code></td><td><p><code>integer</code></p><p>Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.</p></td></tr><tr><td><code>month</code></td><td><p><code>integer</code></p><p>Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.</p></td></tr><tr><td><code>day</code></td><td><p><code>integer</code></p><p>Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.</p></td></tr></tbody></table>
