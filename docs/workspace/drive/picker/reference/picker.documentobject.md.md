---
source: https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.md
root: workspace
fetched_at: 2026-04-23T15:28:25.056Z
---

# Interface DocumentObject

`DocumentObject` is an interface describing the attributes of a selected item.

## Signature

```
interface DocumentObject
```

## Property signatures

| Name | Description |
| --- | --- |
| [~~`addressLines`~~](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.addresslines) | *(Deprecated)* |
| [~~`audience`~~](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.audience) | *(Deprecated)* |
| [`description`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.description) | A user-contributed description of the selected item. |
| [`downloadUrl`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.downloadurl) | A URL to download this item. |
| [`driveError`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.driveerror) | The error code for the request to pre-open the document in Google Drive. |
| [`driveSuccess`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.drivesuccess) | Whether the request to pre-open the document in Google Drive was successful. |
| [`duration`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.duration) | The duration of a selected video. |
| [`embedUrl`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.embedurl) | A URL for this item suitable for embedding in a web page. |
| [`iconUrl`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.iconurl) | A URL to an icon for this item. |
| [`id`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.id) | The ID for the selected item. |
| [`isNew`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.isnew) | Returns true if the selected item was just uploaded. |
| [`isShared`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.isshared) | Whether the item is shared. |
| [`lastEditedUtc`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.lasteditedutc) | The timestamp describing when this item was last edited. |
| [`latitude`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.latitude) | The latitude of the selected item. |
| [`longitude`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.longitude) | The longitude of the selected item. |
| [`mimeType`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.mimetype) | The MIME type of this item. |
| [`name`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.name) | The name of this item. |
| [`organizationDisplayName`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.organizationdisplayname) | Display name for the owning organization. |
| [`parentId`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.parentid) | The parent ID of this item. For example, the folder containing this file. |
| [`phoneNumbers`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.phonenumbers) | The phone numbers of the selected item. |
| [`resourceKey`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.resourcekey) | The resource key for the item, if present. Empty string otherwise |
| [~~`rotation`~~](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.rotation) | *(Deprecated)* |
| [~~`rotationDegree`~~](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.rotationdegree) | *(Deprecated)* |
| [`serviceId`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.serviceid) | An id describing the service this item was selected from. |
| [`sizeBytes`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.sizebytes) | Size of the picked item in bytes. The value is not returned when the item is uploaded during the Picker session. |
| [`thumbnails`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.thumbnails) | An array of `Thumbnail` s which describe the attributes of a photo or video. Thumbnails aren't returned if the selected items belong to Google Drive. |
| [`type`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.type) | The type of the selected item. |
| [`uploadId`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.uploadid) | The item order in the upload session. |
| [`uploadState`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.uploadstate) | The state of the upload. |
| [`url`](https://developers.google.com/workspace/drive/picker/reference/picker.documentobject.url) | A URL to this item. |
