---
source: https://developers.google.com/workspace/drive/picker/reference/picker.parentdocumentobject
root: workspace
fetched_at: 2026-04-23T15:28:26.696Z
---

# Type alias ParentDocumentObject

## Type alias ParentDocumentObject

`ParentDocumentObject` is an interface describing the attributes of a parent folder for a selected item.

## Signature

```
type ParentDocumentObject = Pick<
    DocumentObject,
    |Document.DESCRIPTION|Document.LAST_EDITED_UTC|Document.MIME_TYPE|
    Document.NAME|Document.ICON_URL|Document.ID|Document.IS_NEW|
    Document.SERVICE_ID|Document.THUMBNAILS|Document.TYPE|Document.URL>;
```
