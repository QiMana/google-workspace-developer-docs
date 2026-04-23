---
source: https://developers.google.com/workspace/admin/reports/reference/rest/v1/Status
root: workspace
fetched_at: 2026-04-23T15:23:59.468Z
---

# Status

Status of the event. Note: Not all events have status.

JSON representation

```
{
  "httpStatusCode": integer,
  "eventStatus": string,
  "errorCode": string,
  "errorMessage": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>httpStatusCode</code></td><td><p><code>integer</code></p><p>Status code of the event. Note: Field can be empty.</p></td></tr><tr><td><code>eventStatus</code></td><td><p><code>string</code></p><p>Status of the event.<br>Possible values if not empty:</p><ul><li>UNKNOWN_EVENT_STATUS</li><li>SUCCEEDED</li><li>SUCCEEDED_WITH_WARNINGS</li><li>FAILED</li><li>SKIPPED</li></ul></td></tr><tr><td><code>errorCode</code></td><td><p><code>string</code></p><p>Error code of the event. Note: Field can be empty.</p></td></tr><tr><td><code>errorMessage</code></td><td><p><code>string</code></p><p>Error message of the event. Note: Field can be empty.</p></td></tr></tbody></table>
