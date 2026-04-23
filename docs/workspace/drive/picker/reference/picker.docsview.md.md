---
source: https://developers.google.com/workspace/drive/picker/reference/picker.docsview.md
root: workspace
fetched_at: 2026-04-23T15:28:21.289Z
---

# Class DocsView

Use `DocsView` to select files from Google Drive.

## Signature

```
export class DocsView extends View
```

## Heritage

| Extends | `View` |
| --- | --- |

## Details

| Final | No |
| --- | --- |

## Constructors

| Name | Description |
| --- | --- |
| [`(constructor)(viewId)`](./picker.docsview._constructor_.md) | Constructs a new instance of the `DocsView` class |

## Methods

| Name | Description |
| --- | --- |
| [`getId()`](./picker.view.getid.md.md) | Returns the `ViewId` of the view.   *(Inherited from [`View`](./picker.view.md.md))* |
| [~~`getLabel()`~~](./picker.view.getlabel.md.md) | *(Deprecated)*   *(Inherited from [`View`](./picker.view.md.md))* |
| [`setEnableDrives(enabled)`](./picker.docsview.setenabledrives.md) | Shows shared drives and the files they contain. Before enabling, refer to [GoogleDrive API documentation for enabling shared drives](../../api/guides/enable-shareddrives.md). |
| [`setFileIds(fileIds)`](./picker.docsview.setfileids.md) | Sets the file IDs included in the view. |
| [`setIncludeFolders(included)`](./picker.docsview.setincludefolders.md) | Show folders in the view items. |
| [~~`setLabel(label)`~~](./picker.view.setlabel.md.md) | *(Deprecated)*   *(Inherited from [`View`](./picker.view.md.md))* |
| [`setMimeTypes(mimeTypes)`](./picker.view.setmimetypes.md.md) | Sets the MIME types included in the view. Use commas to separate MIME types if more than one is required. If you don't set MIME types, files of all MIME types are displayed in the view.   *(Inherited from [`View`](./picker.view.md.md))* |
| [`setMode(mode)`](./picker.docsview.setmode.md) | Selects which mode the view will use to display the documents. |
| [`setOwnedByMe(me)`](./picker.docsview.setownedbyme.md) | Filters the documents based on whether they are owned by the user, or shared with the user. |
| [`setParent(parentId)`](./picker.docsview.setparent.md) | Sets the initial parent folder to display. |
| [`setQuery(query)`](./picker.view.setquery.md.md) | For views involving searches, prepopulate the search query with these terms.   *(Inherited from [`View`](./picker.view.md.md))* |
| [`setSelectFolderEnabled(enabled)`](./picker.docsview.setselectfolderenabled.md) | Allows the user to select a folder in Google Drive. |
| [`setStarred(starred)`](./picker.docsview.setstarred.md) | Filters the documents based on whether they are starred by the user. |
