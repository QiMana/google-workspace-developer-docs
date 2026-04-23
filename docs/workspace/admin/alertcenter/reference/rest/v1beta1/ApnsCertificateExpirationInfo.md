---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/ApnsCertificateExpirationInfo
root: workspace
fetched_at: 2026-04-23T15:23:22.404Z
---

# ApnsCertificateExpirationInfo

The explanation message associated with "APNS certificate is expiring soon" and "APNS certificate has expired" alerts.

JSON representation

```
{
  "expirationTime": string,
  "appleId": string,
  "uid": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>expirationTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The expiration date of the APNS certificate.</p></td></tr><tr><td><code>appleId</code></td><td><p><code>string</code></p><p>The Apple ID used to create the certificate. It may be blank if admins didn't enter it.</p></td></tr><tr><td><code>uid</code></td><td><p><code>string</code></p><p>The UID of the certificate.</p></td></tr></tbody></table>
