---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/SectionItem
root: workspace
fetched_at: 2026-04-23T15:25:01.196Z
---

# SectionItem

A user's defined section item. This is used to represent section items, such as spaces, grouped under a section.

JSON representation

```
{
  "name": string,

  "space": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. The resource name of the section item.</p><p>Format: <code>users/{user}/sections/{section}/items/{item}</code></p></td></tr><tr><td colspan="2">Union field <code>item</code>. Required. The section item. <code>item</code> can be only one of the following:</td></tr><tr><td><code>space</code></td><td><p><code>string</code></p><p>Optional. The space resource name.</p><p>Format: <code>spaces/{space}</code></p></td></tr></tbody></table>
