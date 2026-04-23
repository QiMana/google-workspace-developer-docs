---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/orgunits/list
root: workspace
fetched_at: 2026-04-23T15:23:40.377Z
---

# Method: orgunits.list

Retrieves a list of all organizational units for an account.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/orgunits`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>. The <code>customerId</code> is also returned as part of the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users">Users resource</a>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>orgUnitPath</code></td><td><p><code>string</code></p><p>The full path to the organizational unit or its unique ID. Returns the children of the specified organizational unit.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>Whether to return all sub-organizations or just immediate children.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "organizationUnits": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the API resource. For Org Unit resources, the type is <code>admin#directory#orgUnits</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>organizationUnits[]</code></td><td><p>A list of organizational unit objects.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds/policies/`
- `           https://www.googleapis.com/auth/admin.directory.orgunit`
- `           https://www.googleapis.com/auth/admin.directory.orgunit.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## Type

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ALL</code></td><td>All sub-organizational units.</td></tr><tr><td><code>CHILDREN</code></td><td>Immediate children only (default).</td></tr><tr><td><code>ALL_INCLUDING_PARENT</code></td><td>All sub-organizational units and the specified organizational unit (root if not specified).</td></tr></tbody></table>
