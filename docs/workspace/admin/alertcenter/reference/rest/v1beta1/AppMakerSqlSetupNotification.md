---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/AppMakerSqlSetupNotification
root: workspace
fetched_at: 2026-04-23T15:23:22.149Z
---

# AppMakerSqlSetupNotification

Alerts from App Maker to notify admins to set up default SQL instance.

JSON representation

```
{
  "requestInfo": [
    {
      object (RequestInfo)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requestInfo[]</code></td><td><p><code>object (<code>RequestInfo</code>)</code></p><p>List of applications with requests for default SQL set up.</p></td></tr></tbody></table>

## RequestInfo

Requests for one application that needs default SQL setup.

JSON representation

```
{
  "appKey": string,
  "appDeveloperEmail": [
    string
  ],
  "numberOfRequests": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>appKey</code></td><td><p><code>string</code></p><p>Required. The application that requires the SQL setup.</p></td></tr><tr><td><code>appDeveloperEmail[]</code></td><td><p><code>string</code></p><p>List of app developers who triggered notifications for above application.</p></td></tr><tr><td><code>numberOfRequests</code></td><td><p><code>string (int64 format)</code></p><p>Required. Number of requests sent for this application to set up default SQL instance.</p></td></tr></tbody></table>
