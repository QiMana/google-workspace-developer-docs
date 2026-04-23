---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/Date
root: workspace
fetched_at: 2026-04-23T15:26:12.103Z
---

# Date

Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999.

JSON representation

```
{
  "year": integer,
  "month": integer,
  "day": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>year</code></td><td><p><code>integer</code></p><p>Year of date. Must be from 1 to 9999.</p></td></tr><tr><td><code>month</code></td><td><p><code>integer</code></p><p>Month of date. Must be from 1 to 12.</p></td></tr><tr><td><code>day</code></td><td><p><code>integer</code></p><p>Day of month. Must be from 1 to 31 and valid for the year and month.</p></td></tr></tbody></table>
