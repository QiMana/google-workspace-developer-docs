---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/roles/get
root: workspace
fetched_at: 2026-04-23T15:23:43.526Z
---

# Method: roles.get

Retrieves a role.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/customer/{customer}/roles/{roleId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customer</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of <code>domain</code>. You can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>. The <code>customerId</code> is also returned as part of the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users">Users</a> resource. You must provide either the <code>customer</code> or the <code>domain</code> parameter.</p></td></tr><tr><td><code>roleId</code></td><td><p><code>string</code></p><p>Immutable ID of the role.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.directory.rolemanagement`
- `           https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
