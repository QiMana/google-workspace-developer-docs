---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/action
root: workspace
fetched_at: 2026-04-23T15:23:33.645Z
---

# Method: chromeosdevices.action

Use [BatchChangeChromeOsDeviceStatus](../customer.devices.chromeos/batchChangeStatus.md) instead. Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>. The <code>customerId</code> is also returned as part of the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users">Users resource</a>.</p></td></tr><tr><td><code>resourceId</code></td><td><p><code>string</code></p><p>The unique ID of the device. The <code>resourceId</code> s are returned in the response from the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list">chromeosdevices.list</a> method.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `ChromeOsDeviceAction`.

### Response body

If successful, the response is a generic HTTP response whose format is defined by the method.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.device.chromeos`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## ChromeOsDeviceAction

Data about an update to the status of a Chrome OS device.

JSON representation

```
{
  "action": string,
  "deprovisionReason": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>action</code></td><td><p><code>string</code></p><p>chromeosdevices.action to be taken on the Chrome OS device.</p><p>Acceptable values are:</p><ul><li><code>deprovision</code>: Remove a device from management that is no longer active, being resold, or is being submitted for return / repair, use the deprovision action to dissociate it from management.</li><li><code>disable</code>: If you believe a device in your organization has been lost or stolen, you can disable the device so that no one else can use it. When a device is disabled, all the user can see when turning on the Chrome device is a screen telling them that it’s been disabled, and your desired contact information of where to return the device.</li><li><code>reenable</code>: Re-enable a disabled device when a misplaced device is found or a lost device is returned. You can also use this feature if you accidentally mark a Chrome device as disabled.</li><li><code>pre_provisioned_disable</code>: A pre-provisioned device that cannot enroll. An admin can re-enable the device to allow Zero-Touch Enrollment by changing the status to "pre_provisioned_reenable". <b>Note</b>: From this state the device can be deprovisioned.</li><li><code>pre_provisioned_reenable</code>: Device is pre-provisioned by OEMs. Devices in this state are eligible for Zero-Touch Enrollment.</li></ul></td></tr><tr><td><code>deprovisionReason</code></td><td><p><code>string</code></p><p>Only used when the action is deprovision. With the deprovision action, this field is required.</p><p>Acceptable values are:</p><ul><li><code>different_model_replacement</code>: Use if you're upgrading or replacing your device with a newer model of the same device.</li><li><code>retiring_device</code>: Use if you're reselling, donating, or permanently removing the device from use.</li><li><code>same_model_replacement</code>: Use if a hardware issue was encountered on a device and it is being replaced with the same model or a like-model replacement from a repair vendor / manufacturer.</li><li><code>upgrade_transfer</code>: Use if you're replacing your Cloud Ready devices with Chromebooks within one year.</li></ul></td></tr></tbody></table>
