---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/orgunits/get
root: workspace
fetched_at: 2026-04-23T15:23:40.163Z
---

# Method: orgunits.get

Retrieves an organizational unit.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath=**}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>. The <code>customerId</code> is also returned as part of the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users">Users resource</a>.</p></td></tr><tr><td><code>orgUnitPath</code></td><td><p><code>string</code></p><p>The full path of the organizational unit (minus the leading <code>/</code>) or its unique ID.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds/policies/`
- `           https://www.googleapis.com/auth/admin.directory.orgunit`
- `           https://www.googleapis.com/auth/admin.directory.orgunit.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
