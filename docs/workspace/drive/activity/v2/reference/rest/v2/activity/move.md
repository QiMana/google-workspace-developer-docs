---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/move
root: workspace
fetched_at: 2026-04-23T15:27:31.911Z
---

# Move

## Move

## Move

An object was moved.

JSON representation

```
{
  "addedParents": [
    {
      object (TargetReference)
    }
  ],
  "removedParents": [
    {
      object (TargetReference)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>addedParents[]</code></td><td><p><code>object (<code>TargetReference</code>)</code></p><p>The added parent object(s).</p></td></tr><tr><td><code>removedParents[]</code></td><td><p><code>object (<code>TargetReference</code>)</code></p><p>The removed parent object(s).</p></td></tr></tbody></table>
