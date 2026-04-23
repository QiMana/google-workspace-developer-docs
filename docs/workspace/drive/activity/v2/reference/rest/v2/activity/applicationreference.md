---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/applicationreference
root: workspace
fetched_at: 2026-04-23T15:27:30.583Z
---

# ApplicationReference

## ApplicationReference

Activity in applications other than Drive.

JSON representation

```
{
  "type": enum (Type)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The reference type corresponding to this event.</p></td></tr></tbody></table>

## Type

The type of the action.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNSPECIFIED_REFERENCE_TYPE</code></td><td>The type is not available.</td></tr><tr><td><code>LINK</code></td><td>The links of one or more Drive items were posted.</td></tr><tr><td><code>DISCUSS</code></td><td>Comments were made regarding a Drive item.</td></tr></tbody></table>
