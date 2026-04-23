---
source: https://developers.google.com/workspace/drive/picker/reference/picker.docsview.setownedbyme
root: workspace
fetched_at: 2026-04-23T15:28:21.421Z
---

# Method DocsView.setOwnedByMe

Filters the documents based on whether they are owned by the user, or shared with the user.

Don't combine this setting with `setEnableDrives`. When `setEnableDrives(true)` and `setOwnedByMe(true)` are set, there are no results.

If you don't set this option, all documents, including shared documents, are displayed in the view.

## Signature

```
setOwnedByMe(me: boolean): DocsView;
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
| `me` | `boolean` | No |  |
