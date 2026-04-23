---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/DeviceManagementRule
root: workspace
fetched_at: 2026-04-23T15:23:23.979Z
---

# DeviceManagementRule

Alerts from Device Management Rules configured by Admin.

JSON representation

```
{
  "email": string,
  "deviceId": string,
  "serialNumber": string,
  "deviceType": string,
  "deviceModel": string,
  "resourceId": string,
  "iosVendorId": string,
  "ruleAction": string,
  "ownerId": string,
  "id": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>email</code></td><td><p><code>string</code></p><p>The email of the user this alert was created for.</p></td></tr><tr><td><code>deviceId</code></td><td><p><code>string</code></p><p>Required. The device ID.</p></td></tr><tr><td><code>serialNumber</code></td><td><p><code>string</code></p><p>The serial number of the device.</p></td></tr><tr><td><code>deviceType</code></td><td><p><code>string</code></p><p>The type of the device.</p></td></tr><tr><td><code>deviceModel</code></td><td><p><code>string</code></p><p>The model of the device.</p></td></tr><tr><td><code>resourceId</code></td><td><p><code>string</code></p><p>The device resource ID.</p></td></tr><tr><td><code>iosVendorId</code></td><td><p><code>string</code></p><p>Required for iOS, empty for others.</p></td></tr><tr><td><code>ruleAction</code></td><td><p><code>string</code></p><p>Action taken as result of the rule</p></td></tr><tr><td><code>ownerId</code></td><td><p><code>string</code></p><p>Obfuscated ID of the owner of the device</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>ID of the rule that triggered the alert</p></td></tr></tbody></table>
