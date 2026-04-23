---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/roleAssignments/insert
root: workspace
fetched_at: 2026-04-23T15:23:42.606Z
---

# Method: roleAssignments.insert

Creates a role assignment.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/customer/{customer}/roleassignments`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customer</code></td><td><p><code>string</code></p><p>Immutable ID of the Google Workspace account.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.rolemanagement`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
