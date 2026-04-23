---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/PrimaryAdminChangedEvent
root: workspace
fetched_at: 2026-04-23T15:23:25.660Z
---

# PrimaryAdminChangedEvent

Event occurred when primary admin changed in customer's account. The event are being received from insight forwarder

JSON representation

```
{
  "domain": string,
  "previousAdminEmail": string,
  "updatedAdminEmail": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>domain</code></td><td><p><code>string</code></p><p>domain in which actioned occurred</p></td></tr><tr><td><code>previousAdminEmail</code></td><td><p><code>string</code></p><p>Email of person who was the primary admin before the action</p></td></tr><tr><td><code>updatedAdminEmail</code></td><td><p><code>string</code></p><p>Email of person who is the primary admin after the action</p></td></tr></tbody></table>
