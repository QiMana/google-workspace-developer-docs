---
source: https://developers.google.com/workspace/drive/picker/reference/picker.docsview.setmode
root: workspace
fetched_at: 2026-04-23T15:28:21.057Z
---

# Method DocsView.setMode

Selects which mode the view will use to display the documents.

If using a scope other than `https://www.googleapis.com/auth/drive` or `https://www.googleapis.com/auth/drive.readonly`, it is recommended to use `DocsViewMode.LIST` as the user has not granted access to thumbnails.

## Signature

```
setMode(mode: DocsViewMode): DocsView;
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
| `mode` | `DocsViewMode` | No |  |
