---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings/updateCustomer
root: workspace
fetched_at: 2026-04-23T15:26:18.917Z
---

# Method: settings.updateCustomer

## Method: settings.updateCustomer

Update customer settings.

**Note:** This API requires an admin account to execute.

### HTTP request

`PATCH https://cloudsearch.googleapis.com/v1/settings/customer`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Update mask to control which fields get updated. If you specify a field in the updateMask but don't specify its value here, that field will be cleared. If the mask is not present or empty, all fields will be updated. Currently supported field paths: vpcSettings and auditLoggingSettings</p><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `CustomerSettings`.

### Response body

If successful, the response body contains an instance of `Operation`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.settings.indexing`
- `https://www.googleapis.com/auth/cloud_search.settings`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
