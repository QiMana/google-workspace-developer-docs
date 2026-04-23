---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/create
root: workspace
fetched_at: 2026-04-23T15:27:29.702Z
---

# Create

## Create

An object was created.

JSON representation

```
{

  "new": {
    object (New)
  },
  "upload": {
    object (Upload)
  },
  "copy": {
    object (Copy)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>origin</code>. The origin of the new object. <code>origin</code> can be only one of the following:</td></tr><tr><td><code>new</code></td><td><p><code>object (<code>New</code>)</code></p><p>If present, indicates the object was newly created (e.g. as a blank document), not derived from a Drive object or external object.</p></td></tr><tr><td><code>upload</code></td><td><p><code>object (<code>Upload</code>)</code></p><p>If present, indicates the object originated externally and was uploaded to Drive.</p></td></tr><tr><td><code>copy</code></td><td><p><code>object (<code>Copy</code>)</code></p><p>If present, indicates the object was created by copying an existing Drive object.</p></td></tr></tbody></table>

## New

This type has no fields.

An object was created from scratch.

## Upload

This type has no fields.

An object was uploaded into Drive.

## Copy

An object was created by copying an existing object.

JSON representation

```
{
  "originalObject": {
    object (TargetReference)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>originalObject</code></td><td><p><code>object (<code>TargetReference</code>)</code></p><p>The original object.</p></td></tr></tbody></table>
