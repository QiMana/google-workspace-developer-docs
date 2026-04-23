---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/timerange
root: workspace
fetched_at: 2026-04-23T15:27:32.789Z
---

# TimeRange

## TimeRange

Information about time ranges.

JSON representation

```
{
  "startTime": string,
  "endTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code>
        format)</code></p><p>The start of the time range.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (<code>Timestamp</code>
        format)</code></p><p>The end of the time range.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr></tbody></table>
