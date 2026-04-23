---
source: https://developers.google.com/workspace/admin/data-transfer/reference/rest/v1/ApplicationTransferParam
root: workspace
fetched_at: 2026-04-23T15:23:31.495Z
---

# ApplicationTransferParam

## ApplicationTransferParam

Template for application transfer parameters.

JSON representation

```
{
  "key": string,
  "value": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>key</code></td><td><p><code>string</code></p><p>The type of the transfer parameter, such as <code>PRIVACY_LEVEL</code>.</p></td></tr><tr><td><code>value[]</code></td><td><p><code>string</code></p><p>The value of the transfer parameter, such as <code>PRIVATE</code> or <code>SHARED</code>.</p></td></tr></tbody></table>
