---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/ReportingRule
root: workspace
fetched_at: 2026-04-23T15:23:25.245Z
---

# ReportingRule

Alerts from Reporting Rules configured by Admin.

JSON representation

```
{
  "alertDetails": string,
  "name": string,
  "query": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>alertDetails</code></td><td><p><code>string (bytes format)</code></p><p>Any other associated alert details, for example, AlertConfiguration.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>Rule name</p></td></tr><tr><td><code>query</code></td><td><p><code>string (bytes format)</code></p><p>Alert Rule query Sample Query query { condition { filter { expectedApplicationId: 777491262838 expectedEventName: "indexable_content_change" filterOp: IN } } conjunctionOperator: OR }</p></td></tr></tbody></table>
