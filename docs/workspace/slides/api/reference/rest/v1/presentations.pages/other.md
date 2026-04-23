---
source: https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations.pages/other
root: workspace
fetched_at: 2026-04-23T15:31:52.385Z
---

# Other

### AffineTransform

AffineTransform uses a 3x3 matrix with an implied last row of \[ 0 0 1 \] to transform source coordinates (x,y) into destination coordinates (x', y') according to:

```
[ x']   [  scaleX  shearX  translateX  ] [ x ]
[ y'] = [  shearY  scaleY  translateY  ] [ y ]
[ 1 ]   [      0       0         1     ] [ 1 ]
```

After transformation,

```
x' = scaleX * x + shearX * y + translateX;
y' = scaleY * y + shearY * x + translateY;
```

This message is therefore composed of these six matrix elements.

JSON representation

```
{
  "scaleX": number,
  "scaleY": number,
  "shearX": number,
  "shearY": number,
  "translateX": number,
  "translateY": number,
  "unit": enum (Unit)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>scaleX</code></td><td><p><code>number</code></p><p>The X coordinate scaling element.</p></td></tr><tr><td><code>scaleY</code></td><td><p><code>number</code></p><p>The Y coordinate scaling element.</p></td></tr><tr><td><code>shearX</code></td><td><p><code>number</code></p><p>The X coordinate shearing element.</p></td></tr><tr><td><code>shearY</code></td><td><p><code>number</code></p><p>The Y coordinate shearing element.</p></td></tr><tr><td><code>translateX</code></td><td><p><code>number</code></p><p>The X coordinate translation element.</p></td></tr><tr><td><code>translateY</code></td><td><p><code>number</code></p><p>The Y coordinate translation element.</p></td></tr><tr><td><code>unit</code></td><td><p><code>enum (<code>Unit</code>)</code></p><p>The units for translate elements.</p></td></tr></tbody></table>

### OpaqueColor

A themeable solid color value.

JSON representation

```
{

  "rgbColor": {
    object (RgbColor)
  },
  "themeColor": enum (ThemeColorType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kind of color value. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>rgbColor</code></td><td><p><code>object (<code>RgbColor</code>)</code></p><p>An opaque RGB color.</p></td></tr><tr><td><code>themeColor</code></td><td><p><code>enum (<code>ThemeColorType</code>)</code></p><p>An opaque theme color.</p></td></tr></tbody></table>

### RgbColor

An RGB color.

JSON representation

```
{
  "red": number,
  "green": number,
  "blue": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>red</code></td><td><p><code>number</code></p><p>The red component of the color, from 0.0 to 1.0.</p></td></tr><tr><td><code>green</code></td><td><p><code>number</code></p><p>The green component of the color, from 0.0 to 1.0.</p></td></tr><tr><td><code>blue</code></td><td><p><code>number</code></p><p>The blue component of the color, from 0.0 to 1.0.</p></td></tr></tbody></table>

### ThemeColorType

Theme color types.

contain a that defines a mapping of these theme color types to concrete colors.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>THEME_COLOR_TYPE_UNSPECIFIED</code></td><td>Unspecified theme color. This value should not be used.</td></tr><tr><td><code>DARK1</code></td><td>Represents the first dark color.</td></tr><tr><td><code>LIGHT1</code></td><td>Represents the first light color.</td></tr><tr><td><code>DARK2</code></td><td>Represents the second dark color.</td></tr><tr><td><code>LIGHT2</code></td><td>Represents the second light color.</td></tr><tr><td><code>ACCENT1</code></td><td>Represents the first accent color.</td></tr><tr><td><code>ACCENT2</code></td><td>Represents the second accent color.</td></tr><tr><td><code>ACCENT3</code></td><td>Represents the third accent color.</td></tr><tr><td><code>ACCENT4</code></td><td>Represents the fourth accent color.</td></tr><tr><td><code>ACCENT5</code></td><td>Represents the fifth accent color.</td></tr><tr><td><code>ACCENT6</code></td><td>Represents the sixth accent color.</td></tr><tr><td><code>HYPERLINK</code></td><td>Represents the color to use for hyperlinks.</td></tr><tr><td><code>FOLLOWED_HYPERLINK</code></td><td>Represents the color to use for visited hyperlinks.</td></tr><tr><td><code>TEXT1</code></td><td>Represents the first text color.</td></tr><tr><td><code>BACKGROUND1</code></td><td>Represents the first background color.</td></tr><tr><td><code>TEXT2</code></td><td>Represents the second text color.</td></tr><tr><td><code>BACKGROUND2</code></td><td>Represents the second background color.</td></tr></tbody></table>

### Link

A hypertext link.

JSON representation

```
{

  "url": string,
  "relativeLink": enum (RelativeSlideLink),
  "pageObjectId": string,
  "slideIndex": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kinds of links. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>url</code></td><td><p><code>string</code></p><p>If set, indicates this is a link to the external web page at this URL.</p></td></tr><tr><td><code>relativeLink</code></td><td><p><code>enum (<code>RelativeSlideLink</code>)</code></p><p>If set, indicates this is a link to a slide in this presentation, addressed by its position.</p></td></tr><tr><td><code>pageObjectId</code></td><td><p><code>string</code></p><p>If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.</p></td></tr><tr><td><code>slideIndex</code></td><td><p><code>integer</code></p><p>If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.</p></td></tr></tbody></table>

### RelativeSlideLink

The kinds of relative links.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>RELATIVE_SLIDE_LINK_UNSPECIFIED</code></td><td>An unspecified relative slide link.</td></tr><tr><td><code>NEXT_SLIDE</code></td><td>A link to the next slide.</td></tr><tr><td><code>PREVIOUS_SLIDE</code></td><td>A link to the previous slide.</td></tr><tr><td><code>FIRST_SLIDE</code></td><td>A link to the first slide in the presentation.</td></tr><tr><td><code>LAST_SLIDE</code></td><td>A link to the last slide in the presentation.</td></tr></tbody></table>

### PropertyState

The possible states of a property.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>RENDERED</code></td><td>If a property's state is RENDERED, then the element has the corresponding property when rendered on a page. If the element is a placeholder shape as determined by the <code>placeholder</code> field, and it inherits from a placeholder shape, the corresponding field may be unset, meaning that the property value is inherited from a parent placeholder. If the element does not inherit, then the field will contain the rendered value. This is the default value.</td></tr><tr><td><code>NOT_RENDERED</code></td><td>If a property's state is NOT_RENDERED, then the element does not have the corresponding property when rendered on a page. However, the field may still be set so it can be inherited by child shapes. To remove a property from a rendered element, set its propertyState to NOT_RENDERED.</td></tr><tr><td><code>INHERIT</code></td><td>If a property's state is INHERIT, then the property state uses the value of corresponding <code>propertyState</code> field on the parent shape. Elements that do not inherit will never have an INHERIT property state.</td></tr></tbody></table>

### SolidFill

A solid color fill. The page or page element is filled entirely with the specified color value.

If any field is unset, its value may be inherited from a parent placeholder if it exists.

JSON representation

```
{
  "color": {
    object (OpaqueColor)
  },
  "alpha": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>color</code></td><td><p><code>object (<code>OpaqueColor</code>)</code></p><p>The color value of the solid fill.</p></td></tr><tr><td><code>alpha</code></td><td><p><code>number</code></p><p>The fraction of this <code>color</code> that should be applied to the pixel. That is, the final pixel color is defined by the equation:</p><p>pixel color = alpha * (color) + (1.0 - alpha) * (background color)</p><p>This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.</p></td></tr></tbody></table>

### Outline

If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.

JSON representation

```
{
  "outlineFill": {
    object (OutlineFill)
  },
  "weight": {
    object (Dimension)
  },
  "dashStyle": enum (DashStyle),
  "propertyState": enum (PropertyState)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>outlineFill</code></td><td><p><code>object (<code>OutlineFill</code>)</code></p><p>The fill of the outline.</p></td></tr><tr><td><code>weight</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The thickness of the outline.</p></td></tr><tr><td><code>dashStyle</code></td><td><p><code>enum (<code>DashStyle</code>)</code></p><p>The dash style of the outline.</p></td></tr><tr><td><code>propertyState</code></td><td><p><code>enum (<code>PropertyState</code>)</code></p><p>The outline property state.</p><p>Updating the outline on a page element will implicitly update this field to <code>RENDERED</code>, unless another value is specified in the same request. To have no outline on a page element, set this field to <code>NOT_RENDERED</code>. In this case, any other outline fields set in the same request will be ignored.</p></td></tr></tbody></table>

### OutlineFill

The fill of the outline.

JSON representation

```
{

  "solidFill": {
    object (SolidFill)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kind of outline fill. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>solidFill</code></td><td><p><code>object (<code>SolidFill</code>)</code></p><p>Solid color fill.</p></td></tr></tbody></table>

### DashStyle

The kinds of dashes with which linear geometry can be rendered. These values are based on the "ST\_PresetLineDashVal" simple type described in section 20.1.10.49 of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DASH_STYLE_UNSPECIFIED</code></td><td>Unspecified dash style.</td></tr><tr><td><code>SOLID</code></td><td>Solid line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'solid'. This is the default dash style.</td></tr><tr><td><code>DOT</code></td><td>Dotted line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dot'.</td></tr><tr><td><code>DASH</code></td><td>Dashed line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dash'.</td></tr><tr><td><code>DASH_DOT</code></td><td>Alternating dashes and dots. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dashDot'.</td></tr><tr><td><code>LONG_DASH</code></td><td>Line with large dashes. Corresponds to ECMA-376 ST_PresetLineDashVal value 'lgDash'.</td></tr><tr><td><code>LONG_DASH_DOT</code></td><td>Alternating large dashes and dots. Corresponds to ECMA-376 ST_PresetLineDashVal value 'lgDashDot'.</td></tr></tbody></table>

### Shadow

The shadow properties of a page element.

If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.

JSON representation

```
{
  "type": enum (Type),
  "transform": {
    object (AffineTransform)
  },
  "alignment": enum (RectanglePosition),
  "blurRadius": {
    object (Dimension)
  },
  "color": {
    object (OpaqueColor)
  },
  "alpha": number,
  "rotateWithShape": boolean,
  "propertyState": enum (PropertyState)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The type of the shadow. This property is read-only.</p></td></tr><tr><td><code>transform</code></td><td><p><code>object (<code>AffineTransform</code>)</code></p><p>Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.</p></td></tr><tr><td><code>alignment</code></td><td><p><code>enum (<code>RectanglePosition</code>)</code></p><p>The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.</p></td></tr><tr><td><code>blurRadius</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.</p></td></tr><tr><td><code>color</code></td><td><p><code>object (<code>OpaqueColor</code>)</code></p><p>The shadow color value.</p></td></tr><tr><td><code>alpha</code></td><td><p><code>number</code></p><p>The alpha of the shadow's color, from 0.0 to 1.0.</p></td></tr><tr><td><code>rotateWithShape</code></td><td><p><code>boolean</code></p><p>Whether the shadow should rotate with the shape. This property is read-only.</p></td></tr><tr><td><code>propertyState</code></td><td><p><code>enum (<code>PropertyState</code>)</code></p><p>The shadow property state.</p><p>Updating the shadow on a page element will implicitly update this field to <code>RENDERED</code>, unless another value is specified in the same request. To have no shadow on a page element, set this field to <code>NOT_RENDERED</code>. In this case, any other shadow fields set in the same request will be ignored.</p></td></tr></tbody></table>

### Type

The shadow types.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SHADOW_TYPE_UNSPECIFIED</code></td><td>Unspecified shadow type.</td></tr><tr><td><code>OUTER</code></td><td>Outer shadow.</td></tr></tbody></table>

### RectanglePosition

Defines reference positions in a rectangle.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>RECTANGLE_POSITION_UNSPECIFIED</code></td><td>Unspecified.</td></tr><tr><td><code>TOP_LEFT</code></td><td>Top left.</td></tr><tr><td><code>TOP_CENTER</code></td><td>Top center.</td></tr><tr><td><code>TOP_RIGHT</code></td><td>Top right.</td></tr><tr><td><code>LEFT_CENTER</code></td><td>Left center.</td></tr><tr><td><code>CENTER</code></td><td>Center.</td></tr><tr><td><code>RIGHT_CENTER</code></td><td>Right center.</td></tr><tr><td><code>BOTTOM_LEFT</code></td><td>Bottom left.</td></tr><tr><td><code>BOTTOM_CENTER</code></td><td>Bottom center.</td></tr><tr><td><code>BOTTOM_RIGHT</code></td><td>Bottom right.</td></tr></tbody></table>

### ContentAlignment

The types of content alignment.

Derived from a subset of the values of the "ST\_TextAnchoringType" simple type in section 20.1.10.60 of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CONTENT_ALIGNMENT_UNSPECIFIED</code></td><td>An unspecified content alignment. The content alignment is inherited from the parent if it exists.</td></tr><tr><td><code>CONTENT_ALIGNMENT_UNSUPPORTED</code></td><td>An unsupported content alignment.</td></tr><tr><td><code>TOP</code></td><td>An alignment that aligns the content to the top of the content holder. Corresponds to ECMA-376 ST_TextAnchoringType 't'.</td></tr><tr><td><code>MIDDLE</code></td><td>An alignment that aligns the content to the middle of the content holder. Corresponds to ECMA-376 ST_TextAnchoringType 'ctr'.</td></tr><tr><td><code>BOTTOM</code></td><td>An alignment that aligns the content to the bottom of the content holder. Corresponds to ECMA-376 ST_TextAnchoringType 'b'.</td></tr></tbody></table>

### Placeholder

The placeholder information that uniquely identifies a placeholder shape.

JSON representation

```
{
  "type": enum (Type),
  "index": integer,
  "parentObjectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The type of the placeholder.</p></td></tr><tr><td><code>index</code></td><td><p><code>integer</code></p><p>The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values.</p></td></tr><tr><td><code>parentObjectId</code></td><td><p><code>string</code></p><p>The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape.</p></td></tr></tbody></table>

### Type

The type of a placeholder shape.

Many of these placeholder types correspond to placeholder IDs from the ECMA-376 standard. For more information, see the description of the "ST\_PlaceholderType" type in section 19.7.10 of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>NONE</code></td><td>Default value, signifies it is not a placeholder.</td></tr><tr><td><code>BODY</code></td><td>Body text.</td></tr><tr><td><code>CHART</code></td><td>Chart or graph.</td></tr><tr><td><code>CLIP_ART</code></td><td>Clip art image.</td></tr><tr><td><code>CENTERED_TITLE</code></td><td>Title centered.</td></tr><tr><td><code>DIAGRAM</code></td><td>Diagram.</td></tr><tr><td><code>DATE_AND_TIME</code></td><td>Date and time.</td></tr><tr><td><code>HEADER</code></td><td>Header text.</td></tr><tr><td><code>MEDIA</code></td><td>Multimedia.</td></tr><tr><td><code>OBJECT</code></td><td>Any content type.</td></tr><tr><td><code>PICTURE</code></td><td>Picture.</td></tr><tr><td><code>SLIDE_NUMBER</code></td><td>Number of a slide.</td></tr><tr><td><code>SUBTITLE</code></td><td>Subtitle.</td></tr><tr><td><code>TABLE</code></td><td>Table.</td></tr><tr><td><code>TITLE</code></td><td>Slide title.</td></tr><tr><td><code>SLIDE_IMAGE</code></td><td>Slide image.</td></tr></tbody></table>

### ImageProperties

The properties of the `Image`.

JSON representation

```
{
  "cropProperties": {
    object (CropProperties)
  },
  "transparency": number,
  "brightness": number,
  "contrast": number,
  "recolor": {
    object (Recolor)
  },
  "outline": {
    object (Outline)
  },
  "shadow": {
    object (Shadow)
  },
  "link": {
    object (Link)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>cropProperties</code></td><td><p><code>object (<code>CropProperties</code>)</code></p><p>The crop properties of the image. If not set, the image is not cropped. This property is read-only.</p></td></tr><tr><td><code>transparency</code></td><td><p><code>number</code></p><p>The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only.</p></td></tr><tr><td><code>brightness</code></td><td><p><code>number</code></p><p>The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.</p></td></tr><tr><td><code>contrast</code></td><td><p><code>number</code></p><p>The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.</p></td></tr><tr><td><code>recolor</code></td><td><p><code>object (<code>Recolor</code>)</code></p><p>The recolor effect of the image. If not set, the image is not recolored. This property is read-only.</p></td></tr><tr><td><code>outline</code></td><td><p><code>object (<code>Outline</code>)</code></p><p>The outline of the image. If not set, the image has no outline.</p></td></tr><tr><td><code>shadow</code></td><td><p><code>object (<code>Shadow</code>)</code></p><p>The shadow of the image. If not set, the image has no shadow. This property is read-only.</p></td></tr><tr><td><code>link</code></td><td><p><code>object (<code>Link</code>)</code></p><p>The hyperlink destination of the image. If unset, there is no link.</p></td></tr></tbody></table>

### CropProperties

The crop properties of an object enclosed in a container. For example, an `Image`.

The crop properties is represented by the offsets of four edges which define a crop rectangle. The offsets are measured in percentage from the corresponding edges of the object's original bounding rectangle towards inside, relative to the object's original dimensions.

- If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the object's original bounding rectangle.
- If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the object's original bounding rectangle.
- If the left edge of the crop rectangle is on the right side of its right edge, the object will be flipped horizontally.
- If the top edge of the crop rectangle is below its bottom edge, the object will be flipped vertically.
- If all offsets and rotation angle is 0, the object is not cropped.

After cropping, the content in the crop rectangle will be stretched to fit its container.

JSON representation

```
{
  "leftOffset": number,
  "rightOffset": number,
  "topOffset": number,
  "bottomOffset": number,
  "angle": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>leftOffset</code></td><td><p><code>number</code></p><p>The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle left edge, relative to the object's original width.</p></td></tr><tr><td><code>rightOffset</code></td><td><p><code>number</code></p><p>The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle right edge, relative to the object's original width.</p></td></tr><tr><td><code>topOffset</code></td><td><p><code>number</code></p><p>The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge, relative to the object's original height.</p></td></tr><tr><td><code>bottomOffset</code></td><td><p><code>number</code></p><p>The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom edge, relative to the object's original height.</p></td></tr><tr><td><code>angle</code></td><td><p><code>number</code></p><p>The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset.</p></td></tr></tbody></table>

### Recolor

A recolor effect applied on an image.

JSON representation

```
{
  "recolorStops": [
    {
      object (ColorStop)
    }
  ],
  "name": enum (Name)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>recolorStops[]</code></td><td><p><code>object (<code>ColorStop</code>)</code></p><p>The recolor effect is represented by a gradient, which is a list of color stops.</p><p>The colors in the gradient will replace the corresponding colors at the same position in the color palette and apply to the image. This property is read-only.</p></td></tr><tr><td><code>name</code></td><td><p><code>enum (<code>Name</code>)</code></p><p>The name of the recolor effect.</p><p>The name is determined from the <code>recolorStops</code> by matching the gradient against the colors in the page's current . This property is read-only.</p></td></tr></tbody></table>

### ColorStop

A color and position in a gradient band.

JSON representation

```
{
  "color": {
    object (OpaqueColor)
  },
  "alpha": number,
  "position": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>color</code></td><td><p><code>object (<code>OpaqueColor</code>)</code></p><p>The color of the gradient stop.</p></td></tr><tr><td><code>alpha</code></td><td><p><code>number</code></p><p>The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.</p></td></tr><tr><td><code>position</code></td><td><p><code>number</code></p><p>The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0].</p></td></tr></tbody></table>

### Name

The recolor effect names.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>NONE</code></td><td>No recolor effect. The default value.</td></tr><tr><td><code>LIGHT1</code></td><td>A recolor effect that lightens the image using the page's first available color from its color scheme.</td></tr><tr><td><code>LIGHT2</code></td><td>A recolor effect that lightens the image using the page's second available color from its color scheme.</td></tr><tr><td><code>LIGHT3</code></td><td>A recolor effect that lightens the image using the page's third available color from its color scheme.</td></tr><tr><td><code>LIGHT4</code></td><td>A recolor effect that lightens the image using the page's fourth available color from its color scheme.</td></tr><tr><td><code>LIGHT5</code></td><td>A recolor effect that lightens the image using the page's fifth available color from its color scheme.</td></tr><tr><td><code>LIGHT6</code></td><td>A recolor effect that lightens the image using the page's sixth available color from its color scheme.</td></tr><tr><td><code>LIGHT7</code></td><td>A recolor effect that lightens the image using the page's seventh available color from its color scheme.</td></tr><tr><td><code>LIGHT8</code></td><td>A recolor effect that lightens the image using the page's eighth available color from its color scheme.</td></tr><tr><td><code>LIGHT9</code></td><td>A recolor effect that lightens the image using the page's ninth available color from its color scheme.</td></tr><tr><td><code>LIGHT10</code></td><td>A recolor effect that lightens the image using the page's tenth available color from its color scheme.</td></tr><tr><td><code>DARK1</code></td><td>A recolor effect that darkens the image using the page's first available color from its color scheme.</td></tr><tr><td><code>DARK2</code></td><td>A recolor effect that darkens the image using the page's second available color from its color scheme.</td></tr><tr><td><code>DARK3</code></td><td>A recolor effect that darkens the image using the page's third available color from its color scheme.</td></tr><tr><td><code>DARK4</code></td><td>A recolor effect that darkens the image using the page's fourth available color from its color scheme.</td></tr><tr><td><code>DARK5</code></td><td>A recolor effect that darkens the image using the page's fifth available color from its color scheme.</td></tr><tr><td><code>DARK6</code></td><td>A recolor effect that darkens the image using the page's sixth available color from its color scheme.</td></tr><tr><td><code>DARK7</code></td><td>A recolor effect that darkens the image using the page's seventh available color from its color scheme.</td></tr><tr><td><code>DARK8</code></td><td>A recolor effect that darkens the image using the page's eighth available color from its color scheme.</td></tr><tr><td><code>DARK9</code></td><td>A recolor effect that darkens the image using the page's ninth available color from its color scheme.</td></tr><tr><td><code>DARK10</code></td><td>A recolor effect that darkens the image using the page's tenth available color from its color scheme.</td></tr><tr><td><code>GRAYSCALE</code></td><td>A recolor effect that recolors the image to grayscale.</td></tr><tr><td><code>NEGATIVE</code></td><td>A recolor effect that recolors the image to negative grayscale.</td></tr><tr><td><code>SEPIA</code></td><td>A recolor effect that recolors the image using the sepia color.</td></tr><tr><td><code>CUSTOM</code></td><td>Custom recolor effect. Refer to <code>recolorStops</code> for the concrete gradient.</td></tr></tbody></table>
