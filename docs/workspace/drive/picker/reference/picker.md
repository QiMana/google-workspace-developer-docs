---
source: https://developers.google.com/workspace/drive/picker/reference/picker
root: workspace
fetched_at: 2026-04-23T15:28:20.107Z
---

# Resource summary for Google Picker API

The Google Picker API uses a builder pattern with [`PickerBuilder`](./picker.pickerbuilder.md) and [`Picker`](./picker.picker.md).

```
const picker = new google.picker.PickerBuilder()
    .setOAuthtoken('TOKEN_FOR_USER')
    .setAppId('1234567890')  // Cloud Project number
    .addView(google.picker.ViewId.DOCS)
    .setCallback((data) => {
      console.log(data);
    })
    .build();

picker.setVisible(true);
```

## Classes

| Name | Description |
| --- | --- |
| [`DocsUploadView`](./picker.docsuploadview.md.md) | Use `DocsUploadView` to upload files to Google Drive. |
| [`DocsView`](./picker.docsview.md.md) | Use `DocsView` to select files from Google Drive. |
| [`Picker`](./picker.picker.md) | `Picker` is the top level object representing the UI action with the user. These objects are not created directly, but instead use the `PickerBuilder` class. |
| [`PickerBuilder`](./picker.pickerbuilder.md) | `PickerBuilder` is used to create `Picker` objects. Except where noted otherwise, the return type of methods below is of type `PickerBuilder`, allowing you to chain one call after another. |
| [`ResourceId`](./picker.resourceid.md) | `ResourceId` is a utility class for generating resource IDs for documents. |
| [`View`](./picker.view.md.md) | An abstract class for all views. |
| [`ViewGroup`](./picker.viewgroup.md) | A `ViewGroup` is a visual grouping of views in the navigation pane. |

## Enums

| Name | Description |
| --- | --- |
| [`Action`](./picker.action.md.md) | The action type for the `ResponseObject`. |
| [`Audience`](./picker.audience.md) | `Audience` is an enumerated type used to describe the audience of the `DocumentObject`. |
| [`DocsViewMode`](./picker.docsviewmode.md) | `DocsViewMode` is an enumerated type for displaying data within a DocsView. Use these values in calls to `DocsView.setMode`. |
| [`Document`](./picker.document.md) | `Document` is an enumerated type used to describe the fields of a `DocumentObject`. |
| [`Feature`](./picker.feature.md) | `Feature` is an enumerated type, for turning on/off features for various views. Use these values in calls to `PickerBuilder.enableFeature` and `PickerBuilder.disableFeature`. |
| [`Response`](./picker.response.md) | `Response` is an enumerated type used to describe the fields of a `ResponseObject`. |
| [`ServiceId`](./picker.serviceid.md) | `ServiceId` is an enumerated type used to describe the service the item was selected from. |
| [`Thumbnail`](./picker.thumbnail.md) | `Thumbnail` is an enumerated type describing the fields of a `ThumbnailObject`. |
| [`Type`](./picker.type.md) | The type of the selected item. |
| [`ViewId`](./picker.viewid.md) | `ViewId` is an enumerated type for the various views available in the Picker. Use these values in calls to `DocsView` and `PickerBuilder`. |
| [`ViewToken`](./picker.viewtoken.md) | `ViewToken` is an enumerated type used to describe the elements of a `ResponseObject.viewToken`. |

## Interfaces

| Name | Description |
| --- | --- |
| [`DocumentObject`](./picker.documentobject.md.md) | `DocumentObject` is an interface describing the attributes of a selected item. |
| [`ResponseObject`](./picker.responseobject.md) | The response object passed to the callback method. |
| [`ThumbnailObject`](./picker.thumbnailobject.md.md) | `ThumbnailObject` is an interface describing the attributes of a photo or video. |

## Type aliases

| Name | Description |
| --- | --- |
| [`Locales`](./picker.locales.md) | The supported ISO 639 language codes for `PickerBuilder.setLocale`. |
| [`ParentDocumentObject`](./picker.parentdocumentobject.md.md) | `ParentDocumentObject` is an interface describing the attributes of a parent folder for a selected item. |
