---
source: https://developers.google.com/workspace/drive/picker/reference/picker.documentobject
root: workspace
fetched_at: 2026-04-23T15:28:24.169Z
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
| [~~`addressLines`~~](./picker.documentobject.addresslines.md) | *(Deprecated)* |
| [~~`audience`~~](./picker.documentobject.audience.md) | *(Deprecated)* |
| [`description`](./picker.documentobject.description.md) | A user-contributed description of the selected item. |
| [`downloadUrl`](./picker.documentobject.downloadurl.md) | A URL to download this item. |
| [`driveError`](./picker.documentobject.driveerror.md) | The error code for the request to pre-open the document in Google Drive. |
| [`driveSuccess`](./picker.documentobject.drivesuccess.md) | Whether the request to pre-open the document in Google Drive was successful. |
| [`duration`](./picker.documentobject.duration.md) | The duration of a selected video. |
| [`embedUrl`](./picker.documentobject.embedurl.md) | A URL for this item suitable for embedding in a web page. |
| [`iconUrl`](./picker.documentobject.iconurl.md) | A URL to an icon for this item. |
| [`id`](./picker.documentobject.id.md) | The ID for the selected item. |
| [`isNew`](./picker.documentobject.isnew.md) | Returns true if the selected item was just uploaded. |
| [`isShared`](./picker.documentobject.isshared.md) | Whether the item is shared. |
| [`lastEditedUtc`](./picker.documentobject.lasteditedutc.md) | The timestamp describing when this item was last edited. |
| [`latitude`](./picker.documentobject.latitude.md) | The latitude of the selected item. |
| [`longitude`](./picker.documentobject.longitude.md) | The longitude of the selected item. |
| [`mimeType`](./picker.documentobject.mimetype.md) | The MIME type of this item. |
| [`name`](./picker.documentobject.name.md) | The name of this item. |
| [`organizationDisplayName`](./picker.documentobject.organizationdisplayname.md) | Display name for the owning organization. |
| [`parentId`](./picker.documentobject.parentid.md) | The parent ID of this item. For example, the folder containing this file. |
| [`phoneNumbers`](./picker.documentobject.phonenumbers.md) | The phone numbers of the selected item. |
| [`resourceKey`](./picker.documentobject.resourcekey.md) | The resource key for the item, if present. Empty string otherwise |
| [~~`rotation`~~](./picker.documentobject.rotation.md) | *(Deprecated)* |
| [~~`rotationDegree`~~](./picker.documentobject.rotationdegree.md) | *(Deprecated)* |
| [`serviceId`](./picker.documentobject.serviceid.md) | An id describing the service this item was selected from. |
| [`sizeBytes`](./picker.documentobject.sizebytes.md) | Size of the picked item in bytes. The value is not returned when the item is uploaded during the Picker session. |
| [`thumbnails`](./picker.documentobject.thumbnails.md) | An array of `Thumbnail` s which describe the attributes of a photo or video. Thumbnails aren't returned if the selected items belong to Google Drive. |
| [`type`](./picker.documentobject.type.md) | The type of the selected item. |
| [`uploadId`](./picker.documentobject.uploadid.md) | The item order in the upload session. |
| [`uploadState`](./picker.documentobject.uploadstate.md) | The state of the upload. |
| [`url`](./picker.documentobject.url.md) | A URL to this item. |
