---
source: https://developers.google.com/workspace/drive/picker/reference/picker.view.md
root: workspace
fetched_at: 2026-04-23T15:28:31.771Z
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
| [`getId()`](https://developers.google.com/workspace/drive/picker/reference/picker.view.getid) | Returns the `ViewId` of the view. |
| [~~`getLabel()`~~](https://developers.google.com/workspace/drive/picker/reference/picker.view.getlabel) | *(Deprecated)* |
| [~~`setLabel(label)`~~](https://developers.google.com/workspace/drive/picker/reference/picker.view.setlabel) | *(Deprecated)* |
| [`setMimeTypes(mimeTypes)`](https://developers.google.com/workspace/drive/picker/reference/picker.view.setmimetypes) | Sets the MIME types included in the view. Use commas to separate MIME types if more than one is required. If you don't set MIME types, files of all MIME types are displayed in the view. |
| [`setQuery(query)`](https://developers.google.com/workspace/drive/picker/reference/picker.view.setquery) | For views involving searches, prepopulate the search query with these terms. |
