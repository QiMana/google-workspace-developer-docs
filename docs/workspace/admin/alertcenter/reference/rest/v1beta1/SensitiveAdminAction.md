---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/SensitiveAdminAction
root: workspace
fetched_at: 2026-04-23T15:23:26.828Z
---

# SensitiveAdminAction

Alert that is triggered when Sensitive Admin Action occur in customer account.

JSON representation

```
{
  "eventTime": string,
  "actorEmail": string,

  "primaryAdminChangedEvent": {
    object (PrimaryAdminChangedEvent)
  },
  "ssoProfileCreatedEvent": {
    object (SSOProfileCreatedEvent)
  },
  "ssoProfileUpdatedEvent": {
    object (SSOProfileUpdatedEvent)
  },
  "ssoProfileDeletedEvent": {
    object (SSOProfileDeletedEvent)
  },
  "superAdminPasswordResetEvent": {
    object (SuperAdminPasswordResetEvent)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>eventTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The time at which event occurred</p></td></tr><tr><td><code>actorEmail</code></td><td><p><code>string</code></p><p>Email of person who performed the action</p></td></tr><tr><td colspan="2">Union field <code>action</code>. Sensitive event which have occurred <code>action</code> can be only one of the following:</td></tr><tr><td><code>primaryAdminChangedEvent</code></td><td><p><code>object (<code>PrimaryAdminChangedEvent</code>)</code></p><p>Event occurred when primary admin changed in customer's account</p></td></tr><tr><td><code>superAdminPasswordResetEvent</code></td><td><p><code>object (<code>SuperAdminPasswordResetEvent</code>)</code></p><p>Event occurred when password was reset for super admin in customer's account</p></td></tr></tbody></table>

## SuperAdminPasswordResetEvent

Event occurred when password was reset for super admin in customer's account. The event are being received from insight forwarder

JSON representation

```
{
  "userEmail": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>userEmail</code></td><td><p><code>string</code></p><p>email of person whose password was reset</p></td></tr></tbody></table>
