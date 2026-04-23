---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/moveDevicesToOu
root: workspace
fetched_at: 2026-04-23T15:23:35.895Z
---

# Method: chromeosdevices.moveDevicesToOu

Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Immutable. ID of the Google Workspace account</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>orgUnitPath</code></td><td><p><code>string</code></p><p>Full path of the target organizational unit or its ID</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `ChromeOsMoveDevicesToOu`.

### Response body

If successful, the response is a generic HTTP response whose format is defined by the method.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.device.chromeos`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## ChromeOsMoveDevicesToOu

JSON representation

```
{
  "deviceIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>deviceIds[]</code></td><td><p><code>string</code></p><p>Chrome OS devices to be moved to OU</p></td></tr></tbody></table>
