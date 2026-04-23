---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/update
root: workspace
fetched_at: 2026-04-23T15:23:35.563Z
---

# Method: chromeosdevices.update

Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

### HTTP request

`PUT https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>. The <code>customerId</code> is also returned as part of the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users">Users resource</a>.</p></td></tr><tr><td><code>deviceId</code></td><td><p><code>string</code></p><p>The unique ID of the device. The <code>deviceId</code> s are returned in the response from the <a href="https://developers.google.com/workspace/admin/v1/reference/chromeosdevices/list">chromeosdevices.list</a> method.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>projection</code></td><td><p><code>enum (<code>Projection</code>)</code></p><p>Determines whether the response contains the full list of properties or only a subset.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.device.chromeos`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
