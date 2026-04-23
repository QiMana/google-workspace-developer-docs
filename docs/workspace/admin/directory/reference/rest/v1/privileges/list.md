---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/privileges/list
root: workspace
fetched_at: 2026-04-23T15:23:40.694Z
---

# Method: privileges.list

Retrieves a paginated list of all privileges for a customer.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/customer/{customer}/roles/ALL/privileges`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customer</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of <code>domain</code>. You can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>. The <code>customerId</code> is also returned as part of the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users">Users</a> resource. You must provide either the <code>customer</code> or the <code>domain</code> parameter.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "items": [
    {
      object (Privilege)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the API resource. This is always <code>admin#directory#privileges</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>items[]</code></td><td><p><code>object (<code>Privilege</code>)</code></p><p>A list of Privilege resources.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.directory.rolemanagement`
- `           https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## Privilege

JSON representation

```
{
  "serviceId": string,
  "kind": string,
  "etag": string,
  "isOuScopable": boolean,
  "childPrivileges": [
    {
      object (Privilege)
    }
  ],
  "privilegeName": string,
  "serviceName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>serviceId</code></td><td><p><code>string</code></p><p>The obfuscated ID of the service this privilege is for. This value is returned with <a href="https://developers.google.com/workspace/admin/directory/v1/reference/privileges/list"><code>Privileges.list()</code></a>.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the API resource. This is always <code>admin#directory#privilege</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>isOuScopable</code></td><td><p><code>boolean</code></p><p>If the privilege can be restricted to an organization unit.</p></td></tr><tr><td><code>childPrivileges[]</code></td><td><p><code>object (<code>Privilege</code>)</code></p><p>A list of child privileges. Privileges for a service form a tree. Each privilege can have a list of child privileges; this list is empty for a leaf privilege.</p></td></tr><tr><td><code>privilegeName</code></td><td><p><code>string</code></p><p>The name of the privilege.</p></td></tr><tr><td><code>serviceName</code></td><td><p><code>string</code></p><p>The name of the service this privilege is for.</p></td></tr></tbody></table>
