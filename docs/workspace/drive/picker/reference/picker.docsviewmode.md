---
source: https://developers.google.com/workspace/drive/picker/reference/picker.docsviewmode
root: workspace
fetched_at: 2026-04-23T15:28:21.954Z
---

# Enum DocsViewMode

`DocsViewMode` is an enumerated type for displaying data within a DocsView. Use these values in calls to `DocsView.setMode`.

If using a scope other than `https://www.googleapis.com/auth/drive` or `https://www.googleapis.com/auth/drive.readonly`, it is recommended to use `DocsViewMode.LIST` as the user has not granted access to thumbnails.

## Signature

```
export enum DocsViewMode
```

## Members

| Name | Description |
| --- | --- |
| [`GRID`](https://developers.google.com/workspace/drive/picker/reference/picker.docsviewmode.grid) | Display documents in a thumbnail grid. |
| [`LIST`](https://developers.google.com/workspace/drive/picker/reference/picker.docsviewmode.list) | Display documents in a detailed list. |
