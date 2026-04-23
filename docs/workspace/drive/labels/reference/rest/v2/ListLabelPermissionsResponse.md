---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2/ListLabelPermissionsResponse
root: workspace
fetched_at: 2026-04-23T15:28:08.519Z
---

# ListLabelPermissionsResponse

## ListLabelPermissionsResponse

Response for listing the permissions on a label.

JSON representation

```
{
  "labelPermissions": [
    {
      object (LabelPermission)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>labelPermissions[]</code></td><td><p><code>object (<code>LabelPermission</code>)</code></p><p>Label permissions.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The token of the next page in the response.</p></td></tr></tbody></table>
