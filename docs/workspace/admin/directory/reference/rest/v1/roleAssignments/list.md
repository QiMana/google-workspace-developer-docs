---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/roleAssignments/list
root: workspace
fetched_at: 2026-04-23T15:23:42.781Z
---

# Method: roleAssignments.list

Retrieves a paginated list of all roleAssignments.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/customer/{customer}/roleassignments`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customer</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of <code>domain</code>. You can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>. The <code>customerId</code> is also returned as part of the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users">Users</a> resource. You must provide either the <code>customer</code> or the <code>domain</code> parameter.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of results to return.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token to specify the next page in the list.</p></td></tr><tr><td><code>roleId</code></td><td><p><code>string</code></p><p>Immutable ID of a role. If included in the request, returns only role assignments containing this role ID.</p></td></tr><tr><td><code>userKey</code></td><td><p><code>string</code></p><p>The primary email address, alias email address, or unique user or group ID. If included in the request, returns role assignments only for this user or group.</p></td></tr><tr><td><code>includeIndirectRoleAssignments</code></td><td><p><code>boolean</code></p><p>When set to <code>true</code>, fetches indirect role assignments (i.e. role assignment via a group) as well as direct ones. Defaults to <code>false</code>. You must specify <code>userKey</code> or the indirect role assignments will not be included.</p></td></tr></tbody></table>

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
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the API resource. This is always <code>admin#directory#roleAssignments</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>items[]</code></td><td><p>A list of RoleAssignment resources.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.directory.rolemanagement`
- `           https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
