---
source: https://developers.google.com/workspace/slides/api/samples/writing
root: workspace
fetched_at: 2026-04-23T15:31:56.444Z
---

# Basic writing

The Google Slides API lets you add and modify elements on presentation pages. The examples on this page show how to perform common read operations using the [`presentations.batchUpdate`](../reference/rest/v1/presentations/batchUpdate.md) method.

These examples use the following variables:

- PRESENTATION\_ID —Indicates where you provide the [presentation ID](../guides/overview.md#the_structure_of_a_presentation). You can discover the value for this ID from the presentation URL.
- PAGE\_ID —Indicates where you provide the [page object ID](../guides/overview.md#working_with_object_ids). You can retrieve the value for this from the URL or by using an API read request.
- PAGE\_ELEMENT\_ID —Indicates where you provide the [page element object ID](../guides/overview.md#working_with_object_ids). You can specify this ID for elements you create (with [some restrictions](../guides/overview.md#specifying_object_ids_on_creation)) or allow the Slides API to automatically create one. Element IDs can be retrieved through an API read request.

These examples are presented as HTTP requests to be language neutral. To learn how to implement a batch update in different languages using the Google API client libraries, see [Add shapes and text](../guides/add-shape.md#example).

## Add a text box to a slide

The following [`presentations.batchUpdate`](../reference/rest/v1/presentations/batchUpdate.md) code sample shows how to use the [`CreateShapeRequest`](../reference/rest/v1/presentations/request.md#CreateShapeRequest) method to add a new text box (containing the string "My Added Text Box") to a slide specified by the PAGE\_ID. Two requests are specified in the request body—one to create the text box shape (with a given size and location) and a second to insert text into it.

The first request [specifies the object ID](../guides/overview.md#specifying_object_ids_on_creation) to use for the text box. This lets the second request use it in the same API call, reducing overhead.

The following is the request protocol to add a text box to a slide:

```
POST https://slides.googleapis.com/v1/presentations/PRESENTATION_ID:batchUpdate
```

```
{
  "requests": [
    {
      "createShape": {
        "objectId": PAGE_ELEMENT_ID,
        "shapeType": "TEXT_BOX",
        "elementProperties": {
          "pageObjectId":  PAGE_ID,
          "size": {
            "width": {
              "magnitude": 150,
              "unit": "PT"
            },
            "height": {
              "magnitude": 50,
              "unit": "PT"
            }
          },
          "transform": {
            "scaleX": 1,
            "scaleY": 1,
            "translateX": 200,
            "translateY": 100,
            "unit": "PT"
          }
        }
      }
    },
    {
      "insertText": {
        "objectId": PAGE_ELEMENT_ID,
        "text": "My Added Text Box",
        "insertionIndex": 0
      }
    }
  ]
}
```

## Add an image to a slide

The following [`presentations.batchUpdate`](../reference/rest/v1/presentations/batchUpdate.md) code sample shows how to use the [`CreateImageRequest`](../reference/rest/v1/presentations/request.md#CreateShapeRequest) method to add an image to a slide specified by the PAGE\_ID. The API retrieves the image using the IMAGE\_URL. This request also scales and positions the image in the slide.

The following is the request protocol to add an image to a slide:

```
POST https://slides.googleapis.com/v1/presentations/PRESENTATION_ID:batchUpdate
```

```
{
  "requests": [
    {
      "createImage": {
        "url": IMAGE_URL,
        "elementProperties": {
          "pageObjectId":  PAGE_ID,
          "size": {
            "width": {
              "magnitude": 30,
              "unit": "PT"
            },
            "height": {
              "magnitude": 30,
              "unit": "PT"
            }
          },
          "transform": {
            "scaleX": 1,
            "scaleY": 1,
            "translateX": 200,
            "translateY": 100,
            "unit": "PT"
          }
        }
      }
    }
  ]
}
```

## Delete a page or page element

The following [`presentations.batchUpdate`](../reference/rest/v1/presentations/batchUpdate.md) code sample shows how to use the [`DeleteObjectRequest`](../reference/rest/v1/presentations/request.md#DeleteObjectRequest) method to delete the page element specified by PAGE\_ELEMENT\_ID and the slide specified by PAGE\_ID using two separate requests.

The following is the request protocol to delete a page or page element:

```
POST https://slides.googleapis.com/v1/presentations/PRESENTATION_ID:batchUpdate
```

```
{
  "requests": [
    {
      "deleteObject": {
        "objectId": PAGE_ELEMENT_ID
      },
      "deleteObject": {
        "objectId":  PAGE_ID
      }
    }
  ]
}
```

## Edit text in a specified shape

The following [`presentations.batchUpdate`](../reference/rest/v1/presentations/batchUpdate.md) code sample shows how to use the [`DeleteTextRequest`](../reference/rest/v1/presentations/request.md#DeleteTextRequest) method to replace a portion of the text present in the shape specified by PAGE\_ELEMENT\_ID. To accomplish this, first delete text using the zero-based `startIndex` and then insert new text in that position. In this example, the original text string "My Shape Text:????" is replaced with "My Shape Text: Trapezoid".

This request only affects text in a specified shape. To replace text everywhere within a presentation, use the [`ReplaceAllTextRequest`](../reference/rest/v1/presentations/request.md#ReplaceAllTextRequest) method.

The following is the request protocol to edit text in a specified shape:

```
POST https://slides.googleapis.com/v1/presentations/PRESENTATION_ID:batchUpdate
```

```
{
  "requests": [
    {
      "deleteText": {
        "objectId": PAGE_ELEMENT_ID,
        "textRange": {
          "type": "FROM_START_INDEX",
          "startIndex": 15
        }
      }
    },
    {
      "insertText": {
        "objectId": PAGE_ELEMENT_ID,
        "text": "Trapezoid",
        "insertionIndex": 15
      }
    }
  ]
}
```

## Replace a shape tag with an image

Tags are text boxes or shapes with a unique string name, such as "account-holder-name".

The following [`presentations.batchUpdate`](../reference/rest/v1/presentations/batchUpdate.md) code sample shows how to use the [`CreateImageRequest`](../reference/rest/v1/presentations/request.md#createimagerequest) method to replace a single instance of a shape tag with an image, maintaining the same position and scaling it to fit the tag's size while keeping the image's aspect ratio.

The request can also be used to replace one image with another. The request consists of adding the new image and then deleting the tag.

The `CreateImageRequest` method only replaces a specified shape. To replace tag shapes everywhere within a presentation, use a [`ReplaceAllShapesWithImageRequest`](../reference/rest/v1/presentations/request.md#replaceallshapeswithimagerequest) method.

The shape tag has the following [`PageElement`](../reference/rest/v1/presentations.pages.md#Page.PageElement) properties (which can be found using a [`presentations.pages.get`](../reference/rest/v1/presentations.pages/get.md) request):

```
{
  "objectId": PAGE_ELEMENT_ID,
  "size": {
    "width": {
      "magnitude": 3000000,
      "unit": "EMU"
    },
    "height": {
      "magnitude": 3000000,
      "unit": "EMU"
    }
  },
  "transform": {
    "scaleX": 1.13,
    "scaleY": 0.62,
    "translateX": 4800000,
    "translateY":  450000,
    "unit": "EMU"
  },
  "shape": {
    "shapeType": "RECTANGLE"
  }
}
```

The shape resides on the slide specified by PAGE\_ID. To specify the image that replaces the shape, the API retrieves the image using the IMAGE\_URL. To preserve the image aspect ratio while limiting it to the size of the tag, the [`CreateImageRequest`](../reference/rest/v1/presentations/request.md#createimagerequest) method sets both the image size to the product of the tag size and scale, and the image scale factors to `1`. For more information, see [Preserve aspect ratio](../guides/merge.md#preserve_aspect_ratio).

The following is the request protocol to replace a shape tag with an image:

```
POST https://slides.googleapis.com/v1/presentations/PRESENTATION_ID:batchUpdate
```

```
{
  "requests": [
    {
      "createImage": {
        "url": IMAGE_URL,
        "elementProperties": {
          "pageObjectId":  PAGE_ID,
          "size": {
            "width": {
              "magnitude": 3000000 * 1.13,
              "unit": "EMU"
            },
            "height": {
              "magnitude": 3000000 * 0.62,
              "unit": "EMU"
            }
          },
          "transform": {
            "scaleX": 1,
            "scaleY": 1,
            "translateX": 4800000,
            "translateY": 450000,
            "unit": "PT"
          }
        }
      }
    },
    {
      "deleteObject": {
        "objectId": PAGE_ELEMENT_ID
      }
    }
  ]
}
```
