---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/schemas/list
root: workspace
fetched_at: 2026-04-23T15:23:43.912Z
---

# Method: schemas.list

Retrieves all schemas for a customer.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/schemas`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of <code>domain</code>. You can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>. The <code>customerId</code> is also returned as part of the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users">Users</a> resource. You must provide either the <code>customer</code> or the <code>domain</code> parameter.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

JSON response template for schemas.list Schema operation in Directory API.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "schemas": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Kind of resource this is.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>schemas[]</code></td><td><p>A list of UserSchema objects.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.directory.userschema`
- `           https://www.googleapis.com/auth/admin.directory.userschema.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
