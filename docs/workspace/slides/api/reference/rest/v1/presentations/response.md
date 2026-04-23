---
source: https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/response
root: workspace
fetched_at: 2026-04-23T15:31:56.030Z
---

# Responses

## Response

A single response from an update.

JSON representation

```
{

  "createSlide": {
    object (CreateSlideResponse)
  },
  "createShape": {
    object (CreateShapeResponse)
  },
  "createTable": {
    object (CreateTableResponse)
  },
  "replaceAllText": {
    object (ReplaceAllTextResponse)
  },
  "createImage": {
    object (CreateImageResponse)
  },
  "createVideo": {
    object (CreateVideoResponse)
  },
  "createSheetsChart": {
    object (CreateSheetsChartResponse)
  },
  "createLine": {
    object (CreateLineResponse)
  },
  "replaceAllShapesWithImage": {
    object (ReplaceAllShapesWithImageResponse)
  },
  "duplicateObject": {
    object (DuplicateObjectResponse)
  },
  "replaceAllShapesWithSheetsChart": {
    object (ReplaceAllShapesWithSheetsChartResponse)
  },
  "groupObjects": {
    object (GroupObjectsResponse)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kind of reply. May have no fields set if the request had no response. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>createSlide</code></td><td><p><code>object (<code>CreateSlideResponse</code>)</code></p><p>The result of creating a slide.</p></td></tr><tr><td><code>createShape</code></td><td><p><code>object (<code>CreateShapeResponse</code>)</code></p><p>The result of creating a shape.</p></td></tr><tr><td><code>createTable</code></td><td><p><code>object (<code>CreateTableResponse</code>)</code></p><p>The result of creating a table.</p></td></tr><tr><td><code>replaceAllText</code></td><td><p><code>object (<code>ReplaceAllTextResponse</code>)</code></p><p>The result of replacing text.</p></td></tr><tr><td><code>createImage</code></td><td><p><code>object (<code>CreateImageResponse</code>)</code></p><p>The result of creating an image.</p></td></tr><tr><td><code>createVideo</code></td><td><p><code>object (<code>CreateVideoResponse</code>)</code></p><p>The result of creating a video.</p></td></tr><tr><td><code>createSheetsChart</code></td><td><p><code>object (<code>CreateSheetsChartResponse</code>)</code></p><p>The result of creating a Google Sheets chart.</p></td></tr><tr><td><code>createLine</code></td><td><p><code>object (<code>CreateLineResponse</code>)</code></p><p>The result of creating a line.</p></td></tr><tr><td><code>replaceAllShapesWithImage</code></td><td><p><code>object (<code>ReplaceAllShapesWithImageResponse</code>)</code></p><p>The result of replacing all shapes matching some criteria with an image.</p></td></tr><tr><td><code>duplicateObject</code></td><td><p><code>object (<code>DuplicateObjectResponse</code>)</code></p><p>The result of duplicating an object.</p></td></tr><tr><td><code>replaceAllShapesWithSheetsChart</code></td><td><p><code>object (<code>ReplaceAllShapesWithSheetsChartResponse</code>)</code></p><p>The result of replacing all shapes matching some criteria with a Google Sheets chart.</p></td></tr><tr><td><code>groupObjects</code></td><td><p><code>object (<code>GroupObjectsResponse</code>)</code></p><p>The result of grouping objects.</p></td></tr></tbody></table>

## CreateSlideResponse

The result of creating a slide.

JSON representation

```
{
  "objectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the created slide.</p></td></tr></tbody></table>

## CreateShapeResponse

The result of creating a shape.

JSON representation

```
{
  "objectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the created shape.</p></td></tr></tbody></table>

## CreateTableResponse

The result of creating a table.

JSON representation

```
{
  "objectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the created table.</p></td></tr></tbody></table>

## ReplaceAllTextResponse

The result of replacing text.

JSON representation

```
{
  "occurrencesChanged": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>occurrencesChanged</code></td><td><p><code>integer</code></p><p>The number of occurrences changed by replacing all text.</p></td></tr></tbody></table>

## CreateImageResponse

The result of creating an image.

JSON representation

```
{
  "objectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the created image.</p></td></tr></tbody></table>

## CreateVideoResponse

The result of creating a video.

JSON representation

```
{
  "objectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the created video.</p></td></tr></tbody></table>

## CreateSheetsChartResponse

The result of creating an embedded Google Sheets chart.

JSON representation

```
{
  "objectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the created chart.</p></td></tr></tbody></table>

## CreateLineResponse

The result of creating a line.

JSON representation

```
{
  "objectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the created line.</p></td></tr></tbody></table>

## ReplaceAllShapesWithImageResponse

The result of replacing shapes with an image.

JSON representation

```
{
  "occurrencesChanged": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>occurrencesChanged</code></td><td><p><code>integer</code></p><p>The number of shapes replaced with images.</p></td></tr></tbody></table>

## DuplicateObjectResponse

The response of duplicating an object.

JSON representation

```
{
  "objectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The ID of the new duplicate object.</p></td></tr></tbody></table>

## ReplaceAllShapesWithSheetsChartResponse

The result of replacing shapes with a Google Sheets chart.

JSON representation

```
{
  "occurrencesChanged": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>occurrencesChanged</code></td><td><p><code>integer</code></p><p>The number of shapes replaced with charts.</p></td></tr></tbody></table>

## GroupObjectsResponse

The result of grouping objects.

JSON representation

```
{
  "objectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the created group.</p></td></tr></tbody></table>
