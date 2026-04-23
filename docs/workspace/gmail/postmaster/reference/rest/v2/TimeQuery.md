---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v2/TimeQuery
root: workspace
fetched_at: 2026-04-23T15:30:02.278Z
---

# TimeQuery

The date ranges or specific dates for which you want to retrieve data.

JSON representation

```
{

  "dateRanges": {
    object (DateRanges)
  },
  "dateList": {
    object (DateList)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>time_specification</code>. The type of time specification. <code>time_specification</code> can be only one of the following:</td></tr><tr><td><code>dateRanges</code></td><td><p><code>object (<code>DateRanges</code>)</code></p><p>A list of date ranges.</p></td></tr><tr><td><code>dateList</code></td><td><p><code>object (<code>DateList</code>)</code></p><p>A list of specific dates.</p></td></tr></tbody></table>

## DateRanges

A set of date ranges.

JSON representation

```
{
  "dateRanges": [
    {
      object (DateRange)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dateRanges[]</code></td><td><p><code>object (<code>DateRange</code>)</code></p><p>Required. The list of date ranges for which to retrieve data.</p></td></tr></tbody></table>

## DateRange

A single date range defined by a start and end date.

JSON representation

```
{
  "start": {
    object (Date)
  },
  "end": {
    object (Date)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>start</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Required. The inclusive start date of the date range.</p></td></tr><tr><td><code>end</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Required. The inclusive end date of the date range.</p></td></tr></tbody></table>

## DateList

A set of specific dates.

JSON representation

```
{
  "dates": [
    {
      object (Date)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dates[]</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Required. The list of specific dates for which to retrieve data.</p></td></tr></tbody></table>
