---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/SuspiciousActivity
root: workspace
fetched_at: 2026-04-23T15:23:26.646Z
---

# SuspiciousActivity

A mobile suspicious activity alert. Derived from audit logs.

JSON representation

```
{
  "email": string,
  "events": [
    {
      object (SuspiciousActivitySecurityDetail)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>email</code></td><td><p><code>string</code></p><p>The email of the user this alert was created for.</p></td></tr><tr><td><code>events[]</code></td><td><p><code>object (<code>SuspiciousActivitySecurityDetail</code>)</code></p><p>Required. The list of security events.</p></td></tr></tbody></table>

## SuspiciousActivitySecurityDetail

Detailed information of a single MDM suspicious activity event.

JSON representation

```
{
  "deviceId": string,
  "serialNumber": string,
  "deviceType": string,
  "deviceModel": string,
  "resourceId": string,
  "iosVendorId": string,
  "deviceProperty": string,
  "oldValue": string,
  "newValue": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>deviceId</code></td><td><p><code>string</code></p><p>Required. The device ID.</p></td></tr><tr><td><code>serialNumber</code></td><td><p><code>string</code></p><p>The serial number of the device.</p></td></tr><tr><td><code>deviceType</code></td><td><p><code>string</code></p><p>The type of the device.</p></td></tr><tr><td><code>deviceModel</code></td><td><p><code>string</code></p><p>The model of the device.</p></td></tr><tr><td><code>resourceId</code></td><td><p><code>string</code></p><p>The device resource ID.</p></td></tr><tr><td><code>iosVendorId</code></td><td><p><code>string</code></p><p>Required for iOS, empty for others.</p></td></tr><tr><td><code>deviceProperty</code></td><td><p><code>string</code></p><p>The device property which was changed.</p></td></tr><tr><td><code>oldValue</code></td><td><p><code>string</code></p><p>The old value of the device property before the change.</p></td></tr><tr><td><code>newValue</code></td><td><p><code>string</code></p><p>The new value of the device property after the change.</p></td></tr></tbody></table>
