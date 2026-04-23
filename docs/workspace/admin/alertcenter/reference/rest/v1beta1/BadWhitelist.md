---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/BadWhitelist
root: workspace
fetched_at: 2026-04-23T15:23:23.186Z
---

# BadWhitelist

Alert for setting the domain or IP that malicious email comes from as whitelisted domain or IP in Gmail advanced settings.

JSON representation

```
{
  "domainId": {
    object (DomainId)
  },
  "maliciousEntity": {
    object (MaliciousEntity)
  },
  "messages": [
    {
      object (GmailMessageInfo)
    }
  ],
  "sourceIp": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>domainId</code></td><td><p><code>object (<code>DomainId</code>)</code></p><p>The domain ID.</p></td></tr><tr><td><code>maliciousEntity</code></td><td><p><code>object (<code>MaliciousEntity</code>)</code></p><p>The entity whose actions triggered a Gmail phishing alert.</p></td></tr><tr><td><code>messages[]</code></td><td><p><code>object (<code>GmailMessageInfo</code>)</code></p><p>The list of messages contained by this alert.</p></td></tr><tr><td><code>sourceIp</code></td><td><p><code>string</code></p><p>The source IP address of the malicious email, for example, <code>127.0.0.1</code>.</p></td></tr></tbody></table>
