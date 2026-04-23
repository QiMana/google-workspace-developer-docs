---
source: https://developers.google.com/workspace/drive/picker/reference/picker.view
root: workspace
fetched_at: 2026-04-23T15:28:31.463Z
---

# Class View

An abstract class for all views.

## Signature

```
export abstract class View
```

## Details

| Final | No |
| --- | --- |

## Methods

| Name | Description |
| --- | --- |
| [`getId()`](./picker.view.getid.md.md) | Returns the `ViewId` of the view. |
| [~~`getLabel()`~~](./picker.view.getlabel.md.md) | *(Deprecated)* |
| [~~`setLabel(label)`~~](./picker.view.setlabel.md.md) | *(Deprecated)* |
| [`setMimeTypes(mimeTypes)`](./picker.view.setmimetypes.md.md) | Sets the MIME types included in the view. Use commas to separate MIME types if more than one is required. If you don't set MIME types, files of all MIME types are displayed in the view. |
| [`setQuery(query)`](./picker.view.setquery.md.md) | For views involving searches, prepopulate the search query with these terms. |
