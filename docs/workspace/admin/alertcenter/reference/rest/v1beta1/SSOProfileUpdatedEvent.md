---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/SSOProfileUpdatedEvent
root: workspace
fetched_at: 2026-04-23T15:23:26.147Z
---

# SSOProfileUpdatedEvent

## SSOProfileUpdatedEvent

Event occurred when SSO Profile updated in customer's account. The event are being received from insight forwarder

JSON representation

```
{
  "inboundSsoProfileName": string,
  "inboundSsoProfileChanges": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>inboundSsoProfileName</code></td><td><p><code>string</code></p><p>sso profile name which got updated</p></td></tr><tr><td><code>inboundSsoProfileChanges</code></td><td><p><code>string</code></p><p>changes made to sso profile</p></td></tr></tbody></table>
