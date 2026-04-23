---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos/countChromeOsDevices
root: workspace
fetched_at: 2026-04-23T15:23:35.783Z
---

# Method: customer.devices.chromeos.countChromeOsDevices

Counts ChromeOS devices matching the request.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos:countChromeOsDevices`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Required. Immutable ID of the Google Workspace account.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>orgUnitPath</code></td><td><p><code>string</code></p><p>Optional. The full path of the organizational unit (minus the leading <code>/</code>) or its unique ID.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. Search string in the format given at <a href="https://developers.google.com/workspace/admin/directory/v1/list-query-operators">List query operators</a>.</p></td></tr><tr><td><code>includeChildOrgunits</code></td><td><p><code>boolean</code></p><p>Optional. Return devices from all child orgunits, as well as the specified org unit. If this is set to true, 'orgUnitPath' must be provided.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A response for counting ChromeOS devices.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "count": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>count</code></td><td><p><code>string (int64 format)</code></p><p>The total number of devices matching the request.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.directory.device.chromeos`
- `           https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
