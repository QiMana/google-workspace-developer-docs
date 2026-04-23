---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/groups.aliases/list
root: workspace
fetched_at: 2026-04-23T15:23:38.119Z
---

# Method: groups.aliases.list

Lists all aliases for a group.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/groups/{groupKey}/aliases`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>groupKey</code></td><td><p><code>string</code></p><p>Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "aliases": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Kind of resource this is.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>aliases[]</code></td><td><p>A list of alias objects.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.directory.group`
- `           https://www.googleapis.com/auth/admin.directory.group.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
