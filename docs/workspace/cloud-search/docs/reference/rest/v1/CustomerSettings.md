---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/CustomerSettings
root: workspace
fetched_at: 2026-04-23T15:26:11.666Z
---

# CustomerSettings

Represents settings at a customer level.

JSON representation

```
{
  "vpcSettings": {
    object (VPCSettings)
  },
  "auditLoggingSettings": {
    object (AuditLoggingSettings)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>vpcSettings</code></td><td><p><code>object (<code>VPCSettings</code>)</code></p><p>VPC SC settings for the customer. If updateMask is empty then this field will be updated based on settings.updateCustomer request.</p></td></tr><tr><td><code>auditLoggingSettings</code></td><td><p><code>object (<code>AuditLoggingSettings</code>)</code></p><p>Audit Logging settings for the customer. If updateMask is empty then this field will be updated based on settings.updateCustomer request.</p></td></tr></tbody></table>

## VPCSettings

JSON representation

```
{
  "project": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>project</code></td><td><p><code>string</code></p><p>The resource name of the GCP Project to be used for VPC SC policy check. VPC security settings on this project will be honored for Cloud Search APIs after project_name has been updated through CustomerService. Format: projects/{projectId}</p></td></tr></tbody></table>

## AuditLoggingSettings

Represents the settings for Cloud audit logging

JSON representation

```
{
  "project": string,
  "logAdminReadActions": boolean,
  "logDataWriteActions": boolean,
  "logDataReadActions": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>project</code></td><td><p><code>string</code></p><p>The resource name of the GCP Project to store audit logs. Cloud audit logging will be enabled after project_name has been updated through CustomerService. Format: projects/{projectId}</p></td></tr><tr><td><code>logAdminReadActions</code></td><td><p><code>boolean</code></p><p>Indicates whether audit logging is on/off for admin activity read APIs i.e. Get/List DataSources, Get/List SearchApplications etc.</p></td></tr><tr><td><code>logDataWriteActions</code></td><td><p><code>boolean</code></p><p>Indicates whether audit logging is on/off for data access write APIs i.e. items.index etc.</p></td></tr><tr><td><code>logDataReadActions</code></td><td><p><code>boolean</code></p><p>Indicates whether audit logging is on/off for data access read APIs i.e. items.list, items.get etc.</p></td></tr></tbody></table>
