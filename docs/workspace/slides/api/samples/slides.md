---
source: https://developers.google.com/workspace/slides/api/samples/slides
root: workspace
fetched_at: 2026-04-23T15:31:56.822Z
---

# Slide operations

The Google Slides API lets you create, move, and delete slides. The examples on this page show some common slide operations using the [`presentations.batchUpdate`](../reference/rest/v1/presentations/batchUpdate.md) method.

These examples use the following variables:

- PRESENTATION\_ID —Indicates where you provide the [presentation ID](../guides/overview.md#the_structure_of_a_presentation). You can discover the value for this ID from the presentation URL.
- PAGE\_ID and PAGE\_ID2 —Indicates where you provide the [page object IDs](../guides/overview.md#working_with_object_ids). You can retrieve the value for this from the URL or by using an API read request.

These examples are presented as HTTP requests to be language neutral. To learn how to implement a batch update in different languages using the Google API client libraries, see the following guides: [Create a slide](../guides/create-slide.md#example) and [Add shapes and text](../guides/add-shape.md#example).

## Copy a slide

The following [`presentations.batchUpdate`](../reference/rest/v1/presentations/batchUpdate.md) code sample shows how to use the [`DuplicateObjectRequest`](../reference/rest/v1/presentations/request.md#DuplicateObjectRequest) method to copy of a slide and insert it after the original in the presentation. The original slide is specified by PAGE\_ID.

The request lets you specify if some or all of the page element IDs should be in the copy (with [some restrictions](../guides/overview.md#specifying_object_ids_on_creation)). In this example, the original slide contains a table element (specified by the TABLE\_ELEMENT\_ID), that's mapped to a new table (specified by the COPY\_TABLE\_ELEMENT\_ID) in the slide copy (specified by the COPY\_PAGE\_ID). All other elements on the copy are given random IDs.

For more information about copying a [`PageElement`](../reference/rest/v1/presentations.pages.md#pageelement), including text boxes, images, tables, basic shapes, lines, and embedded videos, see the sample [Copy and edit an element](./elements.md#copy-edit).

The following is the request protocol to copy a slide:

```
POST https://slides.googleapis.com/v1/presentations/PRESENTATION_ID:batchUpdate
```

```
{
  "requests": [
    {
      "duplicateObject": {
        "objectId": PAGE_ID,
        "objectIds": {
          "PAGE_ID": "COPY_PAGE_ID",
          "TABLE_ELEMENT_ID": "COPY_TABLE_ELEMENT_ID"
        }
      }
    }
  ]
}
```

## Create a slide

The following [`presentations.batchUpdate`](../reference/rest/v1/presentations/batchUpdate.md) code sample shows how to use the [`CreateSlideRequest`](../reference/rest/v1/presentations/request.md#CreateSlideRequest) method to create a slide and insert it as the fourth slide (using the zero-based `insertionIndex`) in the presentation.

The new slide is set to use the [`PredefinedLayout`](../reference/rest/v1/presentations/request.md#PredefinedLayout) of `TITLE_AND_TWO_COLUMNS`. You can specify a string to use as the PAGE\_ID for the slide (with [some restrictions](../guides/overview.md#specifying_object_ids_on_creation)), or allow the API to generate the PAGE\_ID by omitting the field in the request.

The following is the request protocol to create a slide:

```
POST https://slides.googleapis.com/v1/presentations/PRESENTATION_ID:batchUpdate
```

```
{
  "requests": [
    {
      "createSlide": {
        "objectId": "PAGE_ID",
        "insertionIndex": 3,
        "slideLayoutReference": {
          "predefinedLayout": "TITLE_AND_TWO_COLUMNS"
        }
      }
    }
  ]
}
```

## Create a slide and modify placeholders

The following [`presentations.batchUpdate`](../reference/rest/v1/presentations/batchUpdate.md) code sample shows how to use the [`CreateSlideRequest`](../reference/rest/v1/presentations/request.md#CreateSlideRequest) method to create a slide using the [`PredefinedLayout`](../reference/rest/v1/presentations/request.md#PredefinedLayout) of `TITLE_AND_TWO_COLUMNS`.

You can specify a string to use as the PAGE\_ID for the slide (with [some restrictions](../guides/overview.md#specifying_object_ids_on_creation)). The [`placeholderIdMappings`](../reference/rest/v1/presentations/request.md#LayoutPlaceholderIdMapping) uses the [`Type`](../reference/rest/v1/presentations.pages/other.md#type_1) of `TITLE`. The TITLE\_ID references the slide's placeholder shape so it can be modified.

The following is the request protocol to create a slide and modify placeholders:

```
POST https://slides.googleapis.com/v1/presentations/PRESENTATION_ID:batchUpdate
```

```
{
  "requests": [
    {
      "createSlide": {
        "objectId": PAGE_ID,
        "slideLayoutReference": {
          "predefinedLayout": "TITLE_AND_TWO_COLUMNS"
        },
        "placeholderIdMappings": [
          {
            "layoutPlaceholder": {
              "type": "TITLE",
              "index": 0
            },
            "objectId": TITLE_ID,
           },
        ],
      }
    },
    {
      "insertText": {
        "objectId": TITLE_ID,
        "text": "This is my slide title",
      }
    },
  ]
}
```

## Move slides to a new position

The following [`presentations.batchUpdate`](../reference/rest/v1/presentations/batchUpdate.md) code sample shows how to use the [`UpdateSlidesPositionRequest`](../reference/rest/v1/presentations/request.md#UpdateSlidesPositionRequest) method to take the two specified slides and move them to the beginning of the presentation, maintaining their relative ordering.

The specified slide IDs (PAGE\_ID and PAGE\_ID2) must be provided in the existing presentation order, without duplicates. The zero-based `insertionIndex` denotes where the slides should be inserted, based on the order before the move takes place. The value must be between zero and the number of slides in the presentation, inclusive.

The following is the request protocol to move slides to a new position:

```
POST https://slides.googleapis.com/v1/presentations/PRESENTATION_ID:batchUpdate
```

```
{
  "requests": [
    {
      "updateSlidesPosition": {
        "slideObjectIds": [
          PAGE_ID,
          PAGE_ID2
          ],
        "insertionIndex": 0
      }
    }
  ]
}
```

## Set a slide background image

The following [`presentations.batchUpdate`](../reference/rest/v1/presentations/batchUpdate.md) code sample shows how to use the [`UpdatePagePropertiesRequest`](../reference/rest/v1/presentations/request.md#UpdatePagePropertiesRequest) method to set the background image of a slide specified by the PAGE\_ID. The API retrieves the image using the IMAGE\_URL.

A [field mask](../guides/field-masks.md) is used to specify that only the slide background should be changed to preserve the other properties. Using field masks also improves performance.

Alternatively, an `UpdatePagePropertiesRequest` method can be used to set the background of a slide to a solid color.

The following is the request protocol to set a slide background image:

```
POST https://slides.googleapis.com/v1/presentations/PRESENTATION_ID:batchUpdate
```

```
{
  "requests": [
    {
      "updatePageProperties": {
        "objectId": PAGE_ID,
        "pageProperties": {
          "pageBackgroundFill": {
            "stretchedPictureFill": {
              "contentUrl": IMAGE_URL
            }
          }
        },
        "fields": "pageBackgroundFill"
      }
    }
  ]
}
```

## Generate thumbnail

You can generate a thumbnail of the latest version of a specific page in the presentation by calling the [`presentations.pages.getThumbnail`](../reference/rest/v1/presentations.pages/getThumbnail.md) method, which returns a thumbnail image of the page as a content URL. The image URL has a default lifetime of 30 minutes.

You can also specify the `mimeType` and `thumbnailSize` returned using the [`ThumbnailProperties`](../reference/rest/v1/presentations.pages/getThumbnail.md#thumbnailproperties) field as a query parameter.

The following is the request protocol to generate the page's thumbnail with the `ThumbnailProperties` set:

```
GET https://slides.googleapis.com/v1/presentations/PRESENTATION_ID/pages/PAGE_ID/thumbnail?thumbnailProperties.mimeType=PNG&thumbnailProperties.thumbnailSize=MEDIUM
```

```
{
  "width": 800,
  "height": 450,
  "contentUrl": "CONTENT_URL"
}
```
