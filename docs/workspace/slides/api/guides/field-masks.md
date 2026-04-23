---
source: https://developers.google.com/workspace/slides/api/guides/field-masks
root: workspace
fetched_at: 2026-04-23T15:31:44.113Z
---

# Use field masks

Field masks are a way for API callers to list fields that a request should return or update. Using a [FieldMask](https://protobuf.dev/reference/protobuf/google.protobuf/#field-mask) allows the API to avoid unnecessary work and improves performance. A field mask is used for both the read and update methods in the Google Slides API.

For a comparison of what's returned in a response body when you don't use a field mask versus when you do, see [Working with partial resources](./performance.md#partial).

## Read with a field mask

Presentations can be large, and often you don't need every part of the [`presentations`](../reference/rest/v1/presentations.md) resource returned by a read request. You can limit what's returned in a Slides API response, using the `fields` URL parameter. For best performance, [explicitly list only the fields you need](./performance.md#partial) in the reply.

The format of the fields parameter is the same as the [JSON encoding of a FieldMask](https://protobuf.dev/reference/protobuf/google.protobuf/#json-encoding-field-masks). Stated briefly, multiple different fields are comma-separated and subfields are dot-separated. Field names can be specified in **camelCase** or **separated\_by\_underscores**. For convenience, multiple subfields from the same type can be listed within parentheses.

The following [`presentations.get`](../reference/rest/v1/presentations/get.md) method request example uses a field mask of `slides.pageElements(objectId,size,transform)` to fetch only the object ID, [`Size`](../reference/rest/v1/Size.md), and [transform](../reference/rest/v1/presentations.pages/other.md#affinetransform) of a [`pageElement`](../reference/rest/v1/presentations.pages.md#pageelement) object on all slides in a presentation:

```
GET https://slides.googleapis.com/v1/presentations/presentationId?fields=slides.pageElements(objectId,size,transform)
```

The response to this method call is a [`presentations`](../reference/rest/v1/presentations.md) object containing the components requested in the field mask:

```
{
  "slides": [
    {
      "pageElements": [
        {
          "objectId": "OBJECT_ID",
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
            "scaleX": 1,
            "scaleY": 1
            "translateX": 311708,
            "translateY": 744575,
            "unit": "EMU"
          }
        },
        {
          "objectId": "OBJECT_ID",
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
            "scaleX": 1,
            "scaleY": 1
            "translateX": 311700,
            "translateY": 2834125,
            "unit": "EMU"
          }
        }
     ]
    }
  ]
}
```

## Update with a field mask

Sometimes you need to update only certain fields in an object while leaving the other fields unchanged. Update requests inside a [`presentations.batchUpdate`](../reference/rest/v1/presentations/batchUpdate.md) method use field masks to tell the API which fields are being changed. The update request ignores any fields that aren't specified in the field mask, leaving them with their current values.

You can also unset a field by not specifying it in the updated message, but adding the field to the mask. This clears whatever value the field previously had.

The syntax for update field masks is the same as read field masks.

The following example uses the [`UpdateShapePropertiesRequest`](../reference/rest/v1/presentations/request.md#updateshapepropertiesrequest) method to change a shape's color fill to the `DARK1` theme color and unset the shape's outline:

```
POST https://slides.googleapis.com/v1/presentations/presentationId:batchUpdate
```

```
{
  "requests": [
    {
      "updateShapeProperties": {
        "objectId": OBJECT_ID,
        "shapeProperties": {
          "shapeBackgroundFill": {
            "solidFill": {
              "color": {
                "themeColor": "DARK1"
              }
            }
          }
        },
        "fields": "shapeBackgroundFill.solidFill.color,outline"
      }
    }
  ]
}
```
