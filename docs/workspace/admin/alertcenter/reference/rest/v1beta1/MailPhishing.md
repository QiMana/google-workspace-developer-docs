---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/MailPhishing
root: workspace
fetched_at: 2026-04-23T15:23:25.326Z
---

# MailPhishing

Proto for all phishing alerts with common payload. Supported types are any of the following:

- User reported phishing
- User reported spam spike
- Suspicious message reported
- Phishing reclassification
- Malware reclassification
- Gmail potential employee spoofing

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
  "isInternal": boolean,
  "systemActionType": enum (SystemActionType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>domainId</code></td><td><p><code>object (<code>DomainId</code>)</code></p><p>The domain ID.</p></td></tr><tr><td><code>maliciousEntity</code></td><td><p><code>object (<code>MaliciousEntity</code>)</code></p><p>The entity whose actions triggered a Gmail phishing alert.</p></td></tr><tr><td><code>messages[]</code></td><td><p><code>object (<code>GmailMessageInfo</code>)</code></p><p>The list of messages contained by this alert.</p></td></tr><tr><td><code>isInternal</code></td><td><p><code>boolean</code></p><p>If <code>true</code>, the email originated from within the organization.</p></td></tr><tr><td><code>systemActionType</code></td><td><p><code>enum (<code>SystemActionType</code>)</code></p><p>System actions on the messages.</p></td></tr></tbody></table>
