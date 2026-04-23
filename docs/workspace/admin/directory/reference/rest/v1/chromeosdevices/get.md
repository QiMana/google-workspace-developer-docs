---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/get
root: workspace
fetched_at: 2026-04-23T15:23:36.215Z
---

# Method: chromeosdevices.get

Retrieves a Chrome OS device's properties.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>. The <code>customerId</code> is also returned as part of the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users">Users resource</a>.</p></td></tr><tr><td><code>deviceId</code></td><td><p><code>string</code></p><p>The unique ID of the device. The <code>deviceId</code> s are returned in the response from the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list">chromeosdevices.list</a> method.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>projection</code></td><td><p><code>enum (<code>Projection</code>)</code></p><p>Determines whether the response contains the full list of properties or only a subset.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.directory.device.chromeos`
- `           https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## Projection

The type of projection to show for the device.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BASIC</code></td><td>Includes only the basic metadata fields (e.g., deviceId, serialNumber, status, and user)</td></tr><tr><td><code>FULL</code></td><td>Includes all metadata fields</td></tr></tbody></table>
