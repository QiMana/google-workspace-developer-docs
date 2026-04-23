---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.savedQueries
root: workspace
fetched_at: 2026-04-23T15:32:08.248Z
---

# REST Resource: matters.savedQueries

## Resource: SavedQuery

The definition of a saved query.

To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

JSON representation

```
{
  "savedQueryId": string,
  "displayName": string,
  "query": {
    object (Query)
  },
  "matterId": string,
  "createTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>savedQueryId</code></td><td><p><code>string</code></p><p>A unique identifier for the saved query.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>The name of the saved query.</p></td></tr><tr><td><code>query</code></td><td><p><code>object (<code>Query</code>)</code></p><p>The search parameters of the saved query.</p></td></tr><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>Output only. The matter ID of the matter the saved query is saved in. The server does not use this field during create and always uses matter ID in the URL.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The server-generated timestamp when the saved query was created.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a saved query.</td></tr><tr><td><h3>delete</h3></td><td>Deletes the specified saved query.</td></tr><tr><td><h3>get</h3></td><td>Retrieves the specified saved query.</td></tr><tr><td><h3>list</h3></td><td>Lists the saved queries in a matter.</td></tr></tbody></table>
