---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/DomainWideTakeoutInitiated
root: workspace
fetched_at: 2026-04-23T15:23:24.456Z
---

# DomainWideTakeoutInitiated

## DomainWideTakeoutInitiated

A takeout operation for the entire domain was initiated by an admin. Derived from audit logs.

JSON representation

```
{
  "takeoutRequestId": string,
  "email": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>takeoutRequestId</code></td><td><p><code>string</code></p><p>The takeout request ID.</p></td></tr><tr><td><code>email</code></td><td><p><code>string</code></p><p>The email of the admin who initiated the takeout.</p></td></tr></tbody></table>
