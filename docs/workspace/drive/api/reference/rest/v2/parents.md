---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/parents
root: workspace
fetched_at: 2026-04-23T15:27:55.275Z
---

# REST Resource: parents

## Resource: ParentReference

A reference to a file's parent.

A file can only have one parent folder; specifying multiple parents isn't supported.

Some resource methods (such as `parents.get`) require a `parentId`. Use the `parents.list` method to retrieve the ID for a parent.

JSON representation

```
{
  "selfLink": string,
  "id": string,
  "isRoot": boolean,
  "kind": string,
  "parentLink": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>selfLink</code></td><td><p><code>string</code></p><p>Output only. A link back to this reference.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the parent.</p></td></tr><tr><td><code>isRoot</code></td><td><p><code>boolean</code></p><p>Output only. Whether or not the parent is the root folder.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. This is always <code>drive#parentReference</code>.</p></td></tr><tr><td><code>parentLink</code></td><td><p><code>string</code></p><p>Output only. A link to the parent.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Removes a parent from a file.</td></tr><tr><td><h3>get</h3></td><td>Gets a specific parent reference.</td></tr><tr><td><h3>insert</h3></td><td>Adds a parent folder for a file.</td></tr><tr><td><h3>list</h3></td><td>Lists a file's parents.</td></tr></tbody></table>
