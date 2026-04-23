---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/DeviceCompromised
root: workspace
fetched_at: 2026-04-23T15:23:23.894Z
---

# DeviceCompromised

A mobile device compromised alert. Derived from audit logs.

JSON representation

```
{
  "email": string,
  "events": [
    {
      object (DeviceCompromisedSecurityDetail)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>email</code></td><td><p><code>string</code></p><p>The email of the user this alert was created for.</p></td></tr><tr><td><code>events[]</code></td><td><p><code>object (<code>DeviceCompromisedSecurityDetail</code>)</code></p><p>Required. The list of security events.</p></td></tr></tbody></table>

## DeviceCompromisedSecurityDetail

Detailed information of a single MDM device compromised event.

JSON representation

```
{
  "deviceId": string,
  "serialNumber": string,
  "deviceType": string,
  "deviceModel": string,
  "resourceId": string,
  "iosVendorId": string,
  "deviceCompromisedState": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>deviceId</code></td><td><p><code>string</code></p><p>Required. The device ID.</p></td></tr><tr><td><code>serialNumber</code></td><td><p><code>string</code></p><p>The serial number of the device.</p></td></tr><tr><td><code>deviceType</code></td><td><p><code>string</code></p><p>The type of the device.</p></td></tr><tr><td><code>deviceModel</code></td><td><p><code>string</code></p><p>The model of the device.</p></td></tr><tr><td><code>resourceId</code></td><td><p><code>string</code></p><p>The device resource ID.</p></td></tr><tr><td><code>iosVendorId</code></td><td><p><code>string</code></p><p>Required for iOS, empty for others.</p></td></tr><tr><td><code>deviceCompromisedState</code></td><td><p><code>string</code></p><p>The device compromised state. Possible values are " <code>Compromised</code> " or " <code>Not Compromised</code> ".</p></td></tr></tbody></table>
