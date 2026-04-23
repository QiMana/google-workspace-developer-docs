---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/resources.buildings/insert
root: workspace
fetched_at: 2026-04-23T15:23:40.459Z
---

# Method: resources.buildings.insert

Inserts a building.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/customer/{customer}/resources/buildings`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customer</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the <code>my_customer</code> alias to represent your account's customer ID.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>coordinatesSource</code></td><td><p><code>enum (<code>CoordinatesSource</code>)</code></p><p>Source from which Building.coordinates are derived.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds/calendar/resource/`
- `           https://www.googleapis.com/auth/admin.directory.resource.calendar`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## CoordinatesSource

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CLIENT_SPECIFIED</code></td><td>Building.coordinates are set to the coordinates included in the request.</td></tr><tr><td><code>RESOLVED_FROM_ADDRESS</code></td><td>Building.coordinates are automatically populated based on the postal address.</td></tr><tr><td><code>SOURCE_UNSPECIFIED</code></td><td>Defaults to <code>RESOLVED_FROM_ADDRESS</code> if postal address is provided. Otherwise, defaults to <code>CLIENT_SPECIFIED</code> if coordinates are provided.</td></tr></tbody></table>
