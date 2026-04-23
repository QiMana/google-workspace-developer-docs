---
source: https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations.pages/lines
root: workspace
fetched_at: 2026-04-23T15:31:51.165Z
---

# Lines

### Line

A kind representing a non-connector line, straight connector, curved connector, or bent connector.

JSON representation

```
{
  "lineProperties": {
    object (LineProperties)
  },
  "lineType": enum (Type),
  "lineCategory": enum (LineCategory)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>lineProperties</code></td><td><p><code>object (<code>LineProperties</code>)</code></p><p>The properties of the line.</p></td></tr><tr><td><code>lineType</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The type of the line.</p></td></tr><tr><td><code>lineCategory</code></td><td><p><code>enum (<code>LineCategory</code>)</code></p><p>The category of the line.</p><p>It matches the <code>category</code> specified in <code>CreateLineRequest</code>, and can be updated with <code>UpdateLineCategoryRequest</code>.</p></td></tr></tbody></table>

### LineProperties

The properties of the `Line`.

When unset, these fields default to values that match the appearance of new lines created in the Slides editor.

JSON representation

```
{
  "lineFill": {
    object (LineFill)
  },
  "weight": {
    object (Dimension)
  },
  "dashStyle": enum (DashStyle),
  "startArrow": enum (ArrowStyle),
  "endArrow": enum (ArrowStyle),
  "link": {
    object (Link)
  },
  "startConnection": {
    object (LineConnection)
  },
  "endConnection": {
    object (LineConnection)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>lineFill</code></td><td><p><code>object (<code>LineFill</code>)</code></p><p>The fill of the line. The default line fill matches the defaults for new lines created in the Slides editor.</p></td></tr><tr><td><code>weight</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The thickness of the line.</p></td></tr><tr><td><code>dashStyle</code></td><td><p><code>enum (<code>DashStyle</code>)</code></p><p>The dash style of the line.</p></td></tr><tr><td><code>startArrow</code></td><td><p><code>enum (<code>ArrowStyle</code>)</code></p><p>The style of the arrow at the beginning of the line.</p></td></tr><tr><td><code>endArrow</code></td><td><p><code>enum (<code>ArrowStyle</code>)</code></p><p>The style of the arrow at the end of the line.</p></td></tr><tr><td><code>link</code></td><td><p><code>object (<code>Link</code>)</code></p><p>The hyperlink destination of the line. If unset, there is no link.</p></td></tr><tr><td><code>startConnection</code></td><td><p><code>object (<code>LineConnection</code>)</code></p><p>The connection at the beginning of the line. If unset, there is no connection.</p><p>Only lines with a <code>Type</code> indicating it is a "connector" can have a <code>startConnection</code>.</p></td></tr><tr><td><code>endConnection</code></td><td><p><code>object (<code>LineConnection</code>)</code></p><p>The connection at the end of the line. If unset, there is no connection.</p><p>Only lines with a <code>Type</code> indicating it is a "connector" can have an <code>endConnection</code>.</p></td></tr></tbody></table>

### LineFill

The fill of the line.

JSON representation

```
{

  "solidFill": {
    object (SolidFill)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kind of line fill. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>solidFill</code></td><td><p><code>object (<code>SolidFill</code>)</code></p><p>Solid color fill.</p></td></tr></tbody></table>

### ArrowStyle

The kinds of start and end forms with which linear geometry can be rendered. Some values are based on the "ST\_LineEndType" simple type described in section 20.1.10.33 of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ARROW_STYLE_UNSPECIFIED</code></td><td>An unspecified arrow style.</td></tr><tr><td><code>NONE</code></td><td>No arrow.</td></tr><tr><td><code>STEALTH_ARROW</code></td><td>Arrow with notched back. Corresponds to ECMA-376 ST_LineEndType value 'stealth'.</td></tr><tr><td><code>FILL_ARROW</code></td><td>Filled arrow. Corresponds to ECMA-376 ST_LineEndType value 'triangle'.</td></tr><tr><td><code>FILL_CIRCLE</code></td><td>Filled circle. Corresponds to ECMA-376 ST_LineEndType value 'oval'.</td></tr><tr><td><code>FILL_SQUARE</code></td><td>Filled square.</td></tr><tr><td><code>FILL_DIAMOND</code></td><td>Filled diamond. Corresponds to ECMA-376 ST_LineEndType value 'diamond'.</td></tr><tr><td><code>OPEN_ARROW</code></td><td>Hollow arrow.</td></tr><tr><td><code>OPEN_CIRCLE</code></td><td>Hollow circle.</td></tr><tr><td><code>OPEN_SQUARE</code></td><td>Hollow square.</td></tr><tr><td><code>OPEN_DIAMOND</code></td><td>Hollow diamond.</td></tr></tbody></table>

### LineConnection

The properties for one end of a `Line` connection.

JSON representation

```
{
  "connectedObjectId": string,
  "connectionSiteIndex": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>connectedObjectId</code></td><td><p><code>string</code></p><p>The object ID of the connected page element.</p><p>Some page elements, such as , <code>tables</code>, and <code>lines</code> do not have connection sites and therefore cannot be connected to a connector line.</p></td></tr><tr><td><code>connectionSiteIndex</code></td><td><p><code>integer</code></p><p>The index of the connection site on the connected page element.</p><p>In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in both the description of the "cxn" attribute in section 20.1.9.9 and "Annex H. Example Predefined DrawingML Shape and Text Geometries" of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of <a href="https://ecma-international.org/publications-and-standards/standards/ecma-376/">ECMA-376 5th edition</a>.</p><p>The position of each connection site can also be viewed from Slides editor.</p></td></tr></tbody></table>

### Type

The line types.

Many of these shapes correspond to predefined shapes from the ECMA-376 standard. For more information, see the description of the "ST\_ShapeType" simple type in section 20.1.10.56 of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>An unspecified line type.</td></tr><tr><td><code>STRAIGHT_CONNECTOR_1</code></td><td>Straight connector 1 form. Corresponds to ECMA-376 ST_ShapeType 'straightConnector1'.</td></tr><tr><td><code>BENT_CONNECTOR_2</code></td><td>Bent connector 2 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector2'.</td></tr><tr><td><code>BENT_CONNECTOR_3</code></td><td>Bent connector 3 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector3'.</td></tr><tr><td><code>BENT_CONNECTOR_4</code></td><td>Bent connector 4 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector4'.</td></tr><tr><td><code>BENT_CONNECTOR_5</code></td><td>Bent connector 5 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector5'.</td></tr><tr><td><code>CURVED_CONNECTOR_2</code></td><td>Curved connector 2 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector2'.</td></tr><tr><td><code>CURVED_CONNECTOR_3</code></td><td>Curved connector 3 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector3'.</td></tr><tr><td><code>CURVED_CONNECTOR_4</code></td><td>Curved connector 4 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector4'.</td></tr><tr><td><code>CURVED_CONNECTOR_5</code></td><td>Curved connector 5 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector5'.</td></tr><tr><td><code>STRAIGHT_LINE</code></td><td>Straight line. Corresponds to ECMA-376 ST_ShapeType 'line'. This line type is not a connector.</td></tr></tbody></table>

### LineCategory

The category of a `Line`.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>LINE_CATEGORY_UNSPECIFIED</code></td><td>Unspecified line category.</td></tr><tr><td><code>STRAIGHT</code></td><td>Straight connectors, including straight connector 1.</td></tr><tr><td><code>BENT</code></td><td>Bent connectors, including bent connector 2 to 5.</td></tr><tr><td><code>CURVED</code></td><td>Curved connectors, including curved connector 2 to 5.</td></tr></tbody></table>
