---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/ActivityRule
root: workspace
fetched_at: 2026-04-23T15:23:22.295Z
---

# ActivityRule

Alerts from Google Workspace Security Center rules service configured by an admin.

JSON representation

```
{
  "name": string,
  "displayName": string,
  "description": string,
  "windowSize": string,
  "threshold": string,
  "createTime": string,
  "updateTime": string,
  "triggerSource": string,
  "supersededAlerts": [
    string
  ],
  "supersedingAlert": string,
  "actionNames": [
    string
  ],
  "query": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Rule name.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Alert display name.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>Description of the rule.</p></td></tr><tr><td><code>windowSize</code></td><td><p><code>string (<code>Duration</code> format)</code></p><p>Rule window size. Possible values are 1 hour or 24 hours.</p></td></tr><tr><td><code>threshold</code></td><td><p><code>string</code></p><p>Alert threshold is for example “COUNT > 5”.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Rule create timestamp.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The timestamp of the last update to the rule.</p></td></tr><tr><td><code>triggerSource</code></td><td><p><code>string</code></p><p>The trigger sources for this rule.</p><ul><li>GMAIL_EVENTS</li><li>DEVICE_EVENTS</li><li>USER_EVENTS</li></ul></td></tr><tr><td><code>supersededAlerts[]</code></td><td><p><code>string</code></p><p>List of alert IDs superseded by this alert. It is used to indicate that this alert is essentially extension of superseded alerts and we found the relationship after creating these alerts.</p></td></tr><tr><td><code>supersedingAlert</code></td><td><p><code>string</code></p><p>Alert ID superseding this alert. It is used to indicate that superseding alert is essentially extension of this alert and we found the relationship after creating both alerts.</p></td></tr><tr><td><code>actionNames[]</code></td><td><p><code>string</code></p><p>List of action names associated with the rule threshold.</p></td></tr><tr><td><code>query</code></td><td><p><code>string</code></p><p>Query that is used to get the data from the associated source.</p></td></tr></tbody></table>
