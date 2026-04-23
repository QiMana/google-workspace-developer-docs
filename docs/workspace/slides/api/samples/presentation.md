---
source: https://developers.google.com/workspace/slides/api/samples/presentation
root: workspace
fetched_at: 2026-04-23T15:31:56.246Z
---

# Presentation operations

The Google Slides API lets you create presentation files and manage existing ones. The examples on this page show some common page presentation operations using the [`presentations.batchUpdate`](../reference/rest/v1/presentations/batchUpdate.md) method.

These examples are presented as HTTP requests to be language neutral. To learn how to implement a batch update in different languages using the Google API client libraries, see the following guides:

- [Create and manage presentations](../guides/presentations.md#create_a_blank_presentation)
- [Search for files and folders](../../../drive/api/guides/search-files.md#specific)
- [Merge data into a presentation](../guides/merge.md#example)

## Create a presentation

The following [`presentations.create`](../reference/rest/v1/presentations/create.md) code sample shows how to creates a blank presentation file entitled "My New Presentation".

It's also possible to create blank presentation files using the Google Drive API [`files.create`](../../../drive/api/reference/rest/v3/files/create.md) method by specifying `application/vnd.google-apps.presentation` as the [MIME type](../../../drive/api/guides/mime-types.md).

The following is the request protocol to create a presentation:

```
POST https://slides.googleapis.com/v1/presentations
```

```
{
  "title": "My New Presentation"
}
```

## List existing presentation files

The Slides API doesn't provide a method for retrieving a list of presentations but the [Drive API](../../../drive/api/guides/about-sdk.md) does. The [`files.list`](../../../drive/api/reference/rest/v3/files/list.md) method (presented below) uses [field masks](../guides/field-masks.md) to return a list of presentation files from your Drive, with the file ID, filename, and a link for opening the file. The request also specifies `application/vnd.google-apps.presentation` as the [MIME type](../../../drive/api/guides/mime-types.md).

The following is the request protocol to list existing presentation files:

```
GET https://www.googleapis.com/drive/v3/files?q="mimeType=application/vnd.google-apps.presentation"&fields=files(id,name,webViewLink)
```

The [response](../../../drive/api/reference/rest/v3/files/list.md#response-body) to this request has the following structure:

```
{
 "files": [
    {
     "id": "abcdefghijklmnopqrstuvwxyz0123456789",
     "name": "Project Vision",
     "webViewLink": "https://docs.google.com/a/google.com/presentation/d/abcdefghijklmnopqrstuvwxyz0123456789/edit?usp=drivesdk"
    },
    {
     "id": "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
     "name": "Untitled Presentation",
     "webViewLink": "https://docs.google.com/a/google.com/presentation/d/ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/edit?usp=drivesdk"
    },
    ...
  ]
}
```

## Replace text throughout a presentation

The following [`presentations.batchUpdate`](../reference/rest/v1/presentations/batchUpdate.md) code sample shows how to use the [`ReplaceAllTextRequest`](../reference/rest/v1/presentations/request.md#ReplaceAllTextRequest) method to replace text throughout the presentation specified by the PRESENTATION\_ID. You can discover the value for the [presentation ID](../guides/overview.md#the_structure_of_a_presentation) from the presentation URL.

Every instance of the string "Gizmo Corp." is replaced with the text "Gadget Inc." This includes text in text boxes and other shapes, on slides, and within masters. In this instance, the text replacement is case-sensitive by setting [`matchCase`](../reference/rest/v1/presentations/request.md#SubstringMatchCriteria) to `true`.

The following is the request protocol to replace text throughout a presentation:

```
POST https://slides.googleapis.com/v1/presentations/PRESENTATION_ID:batchUpdate
```

```
{
  "requests": [
    {
      "replaceAllText": {
          "containsText": {
            "text": "Gizmo Corp.",
            "matchCase": true
          },
          "replaceText": "Gadget Inc."
      }
    }
  ]
}
```
