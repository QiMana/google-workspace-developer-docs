---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/restore
root: workspace
fetched_at: 2026-04-23T15:27:31.127Z
---

# Restore

## Restore

## Restore

A deleted object was restored.

JSON representation

```
{
  "type": enum (Type)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The type of restore action taken.</p></td></tr></tbody></table>

## Type

The type of restoration.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>The type is not available.</td></tr><tr><td><code>UNTRASH</code></td><td>An object was restored from the trash.</td></tr></tbody></table>
