---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/children
root: workspace
fetched_at: 2026-04-23T15:27:50.730Z
---

# REST Resource: children

## Resource: ChildReference

A reference to a folder's child.

Some resource methods (such as `children.get`) require a `childId`. Use the `children.list` method to retrieve the ID of the child.

JSON representation

```
{
  "id": string,
  "selfLink": string,
  "kind": string,
  "childLink": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the child.</p></td></tr><tr><td><code>selfLink</code></td><td><p><code>string</code></p><p>Output only. A link back to this reference.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. This is always <code>drive#childReference</code>.</p></td></tr><tr><td><code>childLink</code></td><td><p><code>string</code></p><p>Output only. A link to the child.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Removes a child from a folder.</td></tr><tr><td><h3>get</h3></td><td>Gets a specific child reference.</td></tr><tr><td><h3>insert</h3></td><td>Inserts a file into a folder.</td></tr><tr><td><h3>list</h3></td><td>Lists a folder's children.</td></tr></tbody></table>
