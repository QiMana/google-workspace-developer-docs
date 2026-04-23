---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/delete
root: workspace
fetched_at: 2026-04-23T15:27:30.803Z
---

# Delete

## Delete

An object was deleted.

JSON representation

```
{
  "type": enum (Type)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The type of delete action taken.</p></td></tr></tbody></table>

## Type

The type of deletion.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>Deletion type is not available.</td></tr><tr><td><code>TRASH</code></td><td>An object was put into the trash.</td></tr><tr><td><code>PERMANENT_DELETE</code></td><td>An object was deleted permanently.</td></tr></tbody></table>
