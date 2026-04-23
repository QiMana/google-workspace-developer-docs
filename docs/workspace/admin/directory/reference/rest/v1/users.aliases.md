---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/users.aliases
root: workspace
fetched_at: 2026-04-23T15:23:45.172Z
---

# REST Resource: users.aliases

## Resource: UserAlias

The Directory API manages aliases, which are alternative email addresses.

JSON representation

```
{
  "id": string,
  "primaryEmail": string,
  "alias": string,
  "kind": string,
  "etag": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The unique ID for the user.</p></td></tr><tr><td><code>primaryEmail</code></td><td><p><code>string</code></p><p>The user's primary email address.</p></td></tr><tr><td><code>alias</code></td><td><p><code>string</code></p><p>The alias email address.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the API resource. For Alias resources, the value is <code>admin#directory#alias</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Removes an alias.</td></tr><tr><td><h3>insert</h3></td><td>Adds an alias.</td></tr><tr><td><h3>list</h3></td><td>Lists all aliases for a user.</td></tr><tr><td><h3>watch</h3></td><td>Watches for changes in users list.</td></tr></tbody></table>
