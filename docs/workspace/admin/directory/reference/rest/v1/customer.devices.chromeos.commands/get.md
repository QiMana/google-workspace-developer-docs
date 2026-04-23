---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands/get
root: workspace
fetched_at: 2026-04-23T15:23:35.960Z
---

# Method: customer.devices.chromeos.commands.get

Gets command data a specific command issued to the device.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Immutable. ID of the Google Workspace account.</p></td></tr><tr><td><code>deviceId</code></td><td><p><code>string</code></p><p>Immutable. ID of Chrome OS Device.</p></td></tr><tr><td><code>commandId</code></td><td><p><code>string (int64 format)</code></p><p>Immutable. ID of Chrome OS Device Command.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.directory.device.chromeos`
- `           https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
