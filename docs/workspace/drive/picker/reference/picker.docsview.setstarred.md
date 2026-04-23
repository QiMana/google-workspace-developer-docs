---
source: https://developers.google.com/workspace/drive/picker/reference/picker.docsview.setstarred
root: workspace
fetched_at: 2026-04-23T15:28:22.315Z
---

# Method DocsView.setStarred

Filters the documents based on whether they are starred by the user.

If `true`, only starred documents are displayed in the view. If `false`, all documents are displayed in the view.

Don't combine this setting with `setEnableDrives`. When `setEnableDrives(true)` is set, `setStarred` is ignored.

## Signature

```
setStarred(starred: boolean): DocsView;
```

## Details

| Optional | No |
| --- | --- |
| Final | No |
| Protected | No |
| Static | No |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `starred` | `boolean` | No |  |
