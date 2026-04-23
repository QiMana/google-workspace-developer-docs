---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos/batchChangeStatus
root: workspace
fetched_at: 2026-04-23T15:23:36.104Z
---

# Method: customer.devices.chromeos.batchChangeStatus

Changes the status of a batch of ChromeOS devices. For more information about changing a ChromeOS device state [Repair, repurpose, or retire ChromeOS devices](https://support.google.com/chrome/a/answer/3523633).

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Required. Immutable ID of the Google Workspace account.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "deviceIds": [
    string
  ],
  "changeChromeOsDeviceStatusAction": enum (ChangeChromeOsDeviceStatusAction),
  "deprovisionReason": enum (DeprovisionReason)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>deviceIds[]</code></td><td><p><code>string</code></p><p>Required. List of the IDs of the ChromeOS devices to change. Maximum 50.</p></td></tr><tr><td><code>changeChromeOsDeviceStatusAction</code></td><td><p><code>enum (<code>ChangeChromeOsDeviceStatusAction</code>)</code></p><p>Required. The action to take on the ChromeOS device in order to change its status.</p></td></tr><tr><td><code>deprovisionReason</code></td><td><p><code>enum (<code>DeprovisionReason</code>)</code></p><p>Optional. The reason behind a device deprovision. Must be provided if 'changeChromeOsDeviceStatusAction' is set to 'CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION'. Otherwise, omit this field.</p></td></tr></tbody></table>

### Response body

The response of changing the status of a batch of ChromeOS devices.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "changeChromeOsDeviceStatusResults": [
    {
      object (ChangeChromeOsDeviceStatusResult)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>changeChromeOsDeviceStatusResults[]</code></td><td><p><code>object (<code>ChangeChromeOsDeviceStatusResult</code>)</code></p><p>The results for each of the ChromeOS devices provided in the request.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.device.chromeos`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## ChangeChromeOsDeviceStatusAction

The action to perform in order to change the status of a ChromeOS device.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_UNSPECIFIED</code></td><td>Default value. Value is unused.</td></tr><tr><td><code>CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION</code></td><td>Deprovisions a ChromeOS device. If you have ChromeOS devices that are no longer being used in your organization, you should deprovision them so that you’re no longer managing them. Deprovisioning the device removes all policies that were on the device as well as device-level printers and the ability to use the device as a kiosk. Depending on the upgrade that’s associated with the device this action might release the license back into the license pool; which allows you to use the license on a different device.</td></tr><tr><td><code>CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DISABLE</code></td><td>Disables a ChromeOS device. Use this action if a user loses their device or it’s stolen, this makes it such that the device is still managed, so it will still receive policies, but no one can use it. Depending on the upgrade that’s associated with the device this action might release the license back into the license pool; which allows you to use the license on a different device.</td></tr><tr><td><code>CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_REENABLE</code></td><td>Reenables a ChromeOS device to be used after being disabled. Reenables the device once it's no longer lost or it's been recovered. This allows the device to be used again. Depending on the upgrade associated with the device this might consume one license from the license pool, meaning that if there aren't enough licenses available the operation will fail.</td></tr></tbody></table>

## ChangeChromeOsDeviceStatusResult

The result of a single ChromeOS device for a Change state operation.

JSON representation

```
{
  "deviceId": string,

  "error": {
    object (Status)
  },
  "response": {
    object (ChangeChromeOsDeviceStatusSucceeded)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>deviceId</code></td><td><p><code>string</code></p><p>The unique ID of the ChromeOS device.</p></td></tr><tr><td colspan="2"><p>Union field <code>result</code>.</p><p><code>result</code> can be only one of the following:</p></td></tr><tr><td><code>error</code></td><td><p><code>object (<code>Status</code>)</code></p><p>The error result of the operation in case of failure.</p></td></tr><tr><td><code>response</code></td><td><p><code>object (<code>ChangeChromeOsDeviceStatusSucceeded</code>)</code></p><p>The device could change its status successfully.</p></td></tr></tbody></table>

## Status

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.

You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

JSON representation

```
{
  "code": integer,
  "message": string,
  "details": [
    {
      "@type": string,
      field1: ...,
      ...
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>code</code></td><td><p><code>integer</code></p><p>The status code, which should be an enum value of <code>google.rpc.Code</code>.</p></td></tr><tr><td><code>message</code></td><td><p><code>string</code></p><p>A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the <code>google.rpc.Status.details</code> field, or localized by the client.</p></td></tr><tr><td><code>details[]</code></td><td><p><code>object</code></p><p>A list of messages that carry the error details. There is a common set of message types for APIs to use.</p><p>An object containing fields of an arbitrary type. An additional field <code>"@type"</code> contains a URI identifying the type. Example: <code>{ "id": 1234, "@type": "types.example.com/standard/id" }</code>.</p></td></tr></tbody></table>

## ChangeChromeOsDeviceStatusSucceeded

This type has no fields.

Response for a successful ChromeOS device status change.
