---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/AppsOutage
root: workspace
fetched_at: 2026-04-23T15:23:22.951Z
---

# AppsOutage

An outage incident reported for a Google Workspace service.

JSON representation

```
{
  "products": [
    string
  ],
  "nextUpdateTime": string,
  "resolutionTime": string,
  "dashboardUri": string,
  "status": enum (Status),
  "incidentTrackingId": string,
  "mergeInfo": {
    object (MergeInfo)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>products[]</code></td><td><p><code>string</code></p><p>List of products impacted by the outage.</p></td></tr><tr><td><code>nextUpdateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Timestamp by which the next update is expected to arrive.</p></td></tr><tr><td><code>resolutionTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Timestamp when the outage is expected to be resolved, or has confirmed resolution. Provided only when known.</p></td></tr><tr><td><code>dashboardUri</code></td><td><p><code>string</code></p><p>Link to the outage event in Google Workspace Status Dashboard</p></td></tr><tr><td><code>status</code></td><td><p><code>enum (<code>Status</code>)</code></p><p>Current outage status.</p></td></tr><tr><td><code>incidentTrackingId</code></td><td><p><code>string</code></p><p>Incident tracking ID.</p></td></tr><tr><td><code>mergeInfo</code></td><td><p><code>object (<code>MergeInfo</code>)</code></p><p>Indicates new alert details under which the outage is communicated. Only populated when Status is MERGED.</p></td></tr></tbody></table>

## MergeInfo

New alert tracking numbers.

JSON representation

```
{
  "newIncidentTrackingId": string,
  "newAlertId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>newIncidentTrackingId</code></td><td><p><code>string</code></p><p>The new tracking ID from the parent incident.</p></td></tr><tr><td><code>newAlertId</code></td><td><p><code>string</code></p><p>Optional. New alert ID. Reference the [google.apps.alertcenter.Alert] with this ID for the current state.</p></td></tr></tbody></table>
