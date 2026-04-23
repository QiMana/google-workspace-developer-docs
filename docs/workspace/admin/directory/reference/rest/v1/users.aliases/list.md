---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/users.aliases/list
root: workspace
fetched_at: 2026-04-23T15:23:45.544Z
---

# Method: users.aliases.list

Lists all aliases for a user.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/users/{userKey}/aliases`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userKey</code></td><td><p><code>string</code></p><p>Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>event</code></td><td><p><code>enum (<code>Event</code>)</code></p><p>Events to watch for.</p></td></tr></tbody></table>

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

- `https://apps-apis.google.com/a/feeds/alias/`
- `           https://www.googleapis.com/auth/admin.directory.user`
- `           https://www.googleapis.com/auth/admin.directory.user.alias`
- `           https://www.googleapis.com/auth/admin.directory.user.alias.readonly`
- `           https://www.googleapis.com/auth/admin.directory.user.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## Event

Type of the Subscription event

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ADD</code></td><td>Alias Created Event</td></tr><tr><td><code>DELETE</code></td><td>Alias Deleted Event</td></tr></tbody></table>
