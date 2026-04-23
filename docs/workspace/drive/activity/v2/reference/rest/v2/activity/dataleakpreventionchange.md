---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/dataleakpreventionchange
root: workspace
fetched_at: 2026-04-23T15:27:29.764Z
---

# DataLeakPreventionChange

## DataLeakPreventionChange

A change in the object's data leak prevention status.

JSON representation

```
{
  "type": enum (Type)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The type of Data Leak Prevention (DLP) change.</p></td></tr></tbody></table>

## Type

The type of the change.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>An update to the DLP state that is neither FLAGGED or CLEARED.</td></tr><tr><td><code>FLAGGED</code></td><td>Document has been flagged as containing sensitive content.</td></tr><tr><td><code>CLEARED</code></td><td>Document is no longer flagged as containing sensitive content.</td></tr></tbody></table>
