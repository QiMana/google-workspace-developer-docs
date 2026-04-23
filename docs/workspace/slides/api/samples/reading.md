---
source: https://developers.google.com/workspace/slides/api/samples/reading
root: workspace
fetched_at: 2026-04-23T15:31:57.334Z
---

# Basic reading

The Google Slides API lets you read presentation, page, and page element data. The examples on this page show how to perform common read operations using both the [`presentations.get`](../reference/rest/v1/presentations/get.md) and [`presentations.pages.get`](../reference/rest/v1/presentations.pages/get.md) methods.

These examples use the following placeholders:

- PRESENTATION\_ID —Indicates where you provide the [presentation ID](../guides/overview.md#the_structure_of_a_presentation). You can discover the value for this ID from the presentation URL.
- PAGE\_ID —Indicates where you provide the [page object ID](../guides/overview.md#working_with_object_ids). You can retrieve the value for this from the URL or by using an API read request.

These examples are presented as HTTP requests to be language neutral. The examples read from this [example presentation](https://docs.google.com/presentation/d/1EAYk18WDjIG-zp_0vLm3CsfQh_i8eXc67Jo2O9C6Vuc/edit), that has `1EAYk18WDjIG-zp_0vLm3CsfQh_i8eXc67Jo2O9C6Vuc` as its PRESENTATION\_ID. The PAGE\_ID of the [first slide](https://docs.google.com/presentation/d/1EAYk18WDjIG-zp_0vLm3CsfQh_i8eXc67Jo2O9C6Vuc/edit#slide=id.ge63a4b4_1_0) in this presentation is `ge63a4b4_1_0`.

The examples here use [field masks](../guides/field-masks.md) to only return specific requested information about the presentation, slide, and page element. Using field masks also improves performance.

## Read slide object IDs

The following [`presentations.get`](../reference/rest/v1/presentations/get.md) code sample shows how to retrieve a list of all the slide object IDs from the presentation. The IDs are returned in the slide presentation order, and can be used to indicate specific slides in subsequent API requests. You can get the object IDs of master and layout pages the same way, using `fields=masters.objectId` and `fields=layout.objectId`.

The following is the request protocol to read slide object IDs:

```
GET https://slides.googleapis.com/v1/presentations/PRESENTATION_ID?fields=slides.objectId
```

The response consists of a [`Presentation`](../reference/rest/v1/presentations.md#resource:-presentation) object containing the object IDs requested:

```
{
  "slides": [
    {
      "objectId": "ge63a4b4_1_0"
    },
    {
      "objectId": "ge63a4b4_1_9"
    },
    {
      "objectId": "ge63a4b4_1_23"
    },
    {
      "objectId": "ge63a4b4_1_35"
    },
    {
      "objectId": "ge63a4b4_1_43"
    }
  ]
}
```

## Read element object IDs from a page

The following [`presentations.pages.get`](../reference/rest/v1/presentations.pages/get.md) code sample shows how to retrieve a list of object IDs for all the page elements on a page.

The following is the request protocol to read element object IDs from a page:

```
GET https://slides.googleapis.com/v1/presentations/PRESENTATION_ID/pages/PAGE_ID?fields=pageElements.objectId
```

The response consists of a [`Page`](../reference/rest/v1/presentations.pages.md#resource-page) object containing the object IDs requested:

```
{
  "pageElements": [
    {
      "objectId": "ge63a4b4_1_5"
    },
    {
      "objectId": "ge63a4b4_1_6"
    },
    {
      "objectId": "ge63a4b4_1_7"
    },
    {
      "objectId": "ge63a4b4_1_8"
    }
  ]
}
```

## Read shape elements from a page

The following [`presentations.pages.get`](../reference/rest/v1/presentations.pages/get.md) code sample shows how to retrieve a list of all [`Shapes`](../reference/rest/v1/presentations.pages/shapes.md#Page.Shape/) on a page. You can retrieve other [`PageElement`](../reference/rest/v1/presentations.pages.md#Page.PageElement) kinds by specifying them using the `fields` parameter. For example, `fields=pageElements(line,table)` only returns information about [`line`](../reference/rest/v1/presentations.pages/lines.md#Page.Line) and [`table`](../reference/rest/v1/presentations.pages/tables.md#Page.Table) page elements, if any are present on the page.

The following is the request protocol to read shape elements from a page:

```
GET https://slides.googleapis.com/v1/presentations/PRESENTATION_ID/pages/PAGE_ID?fields=pageElements.shape
```

The response consists of a [`Page`](../reference/rest/v1/presentations.pages.md#resource-page) object containing the shape elements requested. The empty braces indicate page elements that are not of the shape type; in this case, they're image page elements.

```
{
  "pageElements": [
    {},
    {},
    {
      "shape": {
        "shapeProperties" {
          "outline" {
            "dashStyle": "SOLID",
            "outlineFill": {
              "solidFill": {
                "alpha": 1,
                "color": {
                  "rgbColor": {}
                }
              },
            },
            "propertyState": "NOT_RENDERED",
            "weight": {
              "magnitude": 9525,
              "unit": "EMU"
            }
          },
          "shadow": {
            "alignment": "BOTTOM_LEFT",
            "alpha": 1,
            "blurRadius": {
              "unit": "EMU"
            },
            "color": {
              "rgbColor": {}
            },
            "propertyState": "NOT_RENDERED",
            "rotateWithShape": false,
            "transform": {
              "scaleX": 1,
              "scaleY": 1,
              "unit": "EMU"
            },
            "type": "OUTER"
          },
          "shapeBackgroundFill" : {
            "propertyState": "NOT_RENDERED",
            "solidFill": {
              "alpha": 1,
              "color": {
                "rgbColor: {
                  "blue": 1,
                  "green": 1,
                  "red": 1
                }
              }
            }
          }
        },
        "shapeType": "TEXT_BOX",
        "text": {
          "textElements": [
            {
              "endIndex": 11,
              "paragraphMarker": {
                "style": {
                  "alignment": "START",
                  "direction": "LEFT_TO_RIGHT",
                  "indentEnd": {
                    "unit": "PT"
                  },
                  "indentFirstLine": {
                    "unit": "PT"
                  },
                  "indentStart": {
                    "unit": "PT"
                  },
                  "lineSpacing": 100,
                  "spaceAbove": {
                    "unit": "PT"
                  },
                  "spaceBelow": {
                    "unit": "PT"
                  },
                  "spacingMode": "COLLAPSE_LISTS"
                }
              }
            },
            {
              "endIndex": 11,
              "textRun": {
                "content": "Baby Album\n",
                "style": {
                  "backgroundColor": {},
                  "baselineOffset": "NONE",
                  "bold": false,
                  "fontFamily": "Arial",
                  "fontSize": {
                    "magnitude": 14,
                    "unit": "PT"
                  },
                  "foregroundColor": {
                    "opaqueColor": {
                      "rgbColor": {}
                    }
                  },
                  "italic": false,
                  "smallCaps": false,
                  "strikethrough": false,
                  "underline": false
                }
              }
            }
          ]
        }
      }
    },
    ...
  ]
}
```
