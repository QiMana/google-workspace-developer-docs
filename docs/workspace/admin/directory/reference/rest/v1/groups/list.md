---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/groups/list
root: workspace
fetched_at: 2026-04-23T15:23:37.897Z
---

# Method: groups.list

Retrieves all groups of a domain or of a user given a userKey (paginated).

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/groups`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customer</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of <code>domain</code>. You can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>. The <code>customerId</code> is also returned as part of the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users">Users</a> resource. You must provide either the <code>customer</code> or the <code>domain</code> parameter.</p></td></tr><tr><td><code>domain</code></td><td><p><code>string</code></p><p>The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the <code>customer</code> query parameter instead.</p></td></tr><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of results to return. Max allowed value is 200.</p></td></tr><tr><td><code>orderBy</code></td><td><p><code>enum (<code>OrderBy</code>)</code></p><p>Column to use for sorting results</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token to specify next page in the list</p></td></tr><tr><td><code>query</code></td><td><p><code>string</code></p><p>Query string search. Contains one or more search clauses, each with a field, operator, and value. For complete documentation, go to <a href="https://developers.google.com/workspace/admin/directory/v1/guides/search-groups">Search for groups</a>.</p></td></tr><tr><td><code>sortOrder</code></td><td><p><code>enum (<code>SortOrder</code>)</code></p><p>Whether to return results in ascending or descending order. Only of use when orderBy is also used</p></td></tr><tr><td><code>userKey</code></td><td><p><code>string</code></p><p>Email or immutable ID of the user if only those groups are to be listed, the given user is a member of. If it's an ID, it should match with the ID of the user object. Cannot be used with the <code>customer</code> parameter.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "groups": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Kind of resource this is.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>groups[]</code></td><td><p>A list of group objects.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token used to access next page of this result.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds/groups/`
- `           https://www.googleapis.com/auth/admin.directory.group`
- `           https://www.googleapis.com/auth/admin.directory.group.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## OrderBy

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>EMAIL</code></td><td>Email of the group.</td></tr></tbody></table>

## SortOrder

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ASCENDING</code></td><td>Ascending order.</td></tr><tr><td><code>DESCENDING</code></td><td>Descending order.</td></tr></tbody></table>
