---
source: https://developers.google.com/workspace/drive/picker/reference/picker.docsview.setfileids
root: workspace
fetched_at: 2026-04-23T15:28:21.003Z
---

# Method DocsView.setFileIds

Sets the file IDs included in the view.

Don't combine this setting with `setEnableDrives` or `setParent`. Calls to this function override previous calls to `setEnableDrives` or `setParent`.

## Signature

```
setFileIds(fileIds: string): DocsView;
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
| `fileIds` | `string` | No | A string of file IDs. Use commas to separate file IDs if setting more than one. If you include the file ID of a file that the user doesn't have access to, the file is excluded from the view. |
