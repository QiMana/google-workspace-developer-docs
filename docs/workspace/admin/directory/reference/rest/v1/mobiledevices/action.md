---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/mobiledevices/action
root: workspace
fetched_at: 2026-04-23T15:23:39.117Z
---

# Method: mobiledevices.action

Takes an action that affects a mobile device. For example, remotely wiping a device.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>. The <code>customerId</code> is also returned as part of the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users">Users resource</a>.</p></td></tr><tr><td><code>resourceId</code></td><td><p><code>string</code></p><p>The unique ID the API service uses to identify the mobile device.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `MobileDeviceAction`.

### Response body

If successful, the response is a generic HTTP response whose format is defined by the method.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.directory.device.mobile`
- `           https://www.googleapis.com/auth/admin.directory.device.mobile.action`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## MobileDeviceAction

JSON representation

```
{
  "action": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>action</code></td><td><p><code>string</code></p><p>The action to be performed on the device.</p><p>Acceptable values are:</p><ul><li><code>admin_remote_wipe</code></li><li><code>admin_account_wipe</code></li><li><code>approve</code></li><li><code>block</code></li><li><code>cancel_remote_wipe_then_activate</code></li><li><code>cancel_remote_wipe_then_block</code></li></ul></td></tr></tbody></table>
