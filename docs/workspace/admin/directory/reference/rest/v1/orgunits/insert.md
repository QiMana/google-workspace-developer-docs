---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/orgunits/insert
root: workspace
fetched_at: 2026-04-23T15:23:40.224Z
---

# Method: orgunits.insert

Adds an organizational unit.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/orgunits`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>. The <code>customerId</code> is also returned as part of the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users">Users resource</a>.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds/policies/`
- `           https://www.googleapis.com/auth/admin.directory.orgunit`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
