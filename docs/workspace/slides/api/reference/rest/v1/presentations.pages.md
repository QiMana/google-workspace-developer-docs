---
source: https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations.pages
root: workspace
fetched_at: 2026-04-23T15:31:51.645Z
---

# REST Resource: presentations.pages

## Resource: Page

A page in a presentation.

JSON representation

```
{
  "objectId": string,
  "pageType": enum (PageType),
  "pageElements": [
    {
      object (PageElement)
    }
  ],
  "revisionId": string,
  "pageProperties": {
    object (PageProperties)
  },

  "slideProperties": {
    object (SlideProperties)
  },
  "layoutProperties": {
    object (LayoutProperties)
  },
  "notesProperties": {
    object (NotesProperties)
  },
  "masterProperties": {
    object (MasterProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID for this page. Object IDs used by <code>Page</code> and <code>PageElement</code> share the same namespace.</p></td></tr><tr><td><code>pageType</code></td><td><p><code>enum (<code>PageType</code>)</code></p><p>The type of the page.</p></td></tr><tr><td><code>pageElements[]</code></td><td><p><code>object (<code>PageElement</code>)</code></p><p>The page elements rendered on the page.</p></td></tr><tr><td><code>revisionId</code></td><td><p><code>string</code></p><p>Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation.</p><p>The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.</p></td></tr><tr><td><code>pageProperties</code></td><td><p><code>object (<code>PageProperties</code>)</code></p><p>The properties of the page.</p></td></tr><tr><td colspan="2">Union field <code>properties</code>. Properties that are specific for each page type. Masters do not require any additional properties. <code>properties</code> can be only one of the following:</td></tr><tr><td><code>slideProperties</code></td><td><p><code>object (<code>SlideProperties</code>)</code></p><p>Slide specific properties. Only set if pageType = SLIDE.</p></td></tr><tr><td><code>layoutProperties</code></td><td><p><code>object (<code>LayoutProperties</code>)</code></p><p>Layout specific properties. Only set if pageType = LAYOUT.</p></td></tr><tr><td><code>notesProperties</code></td><td><p><code>object (<code>NotesProperties</code>)</code></p><p>Notes specific properties. Only set if pageType = NOTES.</p></td></tr><tr><td><code>masterProperties</code></td><td><p><code>object (<code>MasterProperties</code>)</code></p><p>Master specific properties. Only set if pageType = MASTER.</p></td></tr></tbody></table>

### PageType

The type of a page.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SLIDE</code></td><td>A slide page.</td></tr><tr><td><code>MASTER</code></td><td>A master slide page.</td></tr><tr><td><code>LAYOUT</code></td><td>A layout page.</td></tr><tr><td><code>NOTES</code></td><td>A notes page.</td></tr><tr><td><code>NOTES_MASTER</code></td><td>A notes master page.</td></tr></tbody></table>

### PageElement

A visual element rendered on a page.

JSON representation

```
{
  "objectId": string,
  "size": {
    object (Size)
  },
  "transform": {
    object (AffineTransform)
  },
  "title": string,
  "description": string,

  "elementGroup": {
    object (Group)
  },
  "shape": {
    object (Shape)
  },
  "image": {
    object (Image)
  },
  "video": {
    object (Video)
  },
  "line": {
    object (Line)
  },
  "table": {
    object (Table)
  },
  "wordArt": {
    object (WordArt)
  },
  "sheetsChart": {
    object (SheetsChart)
  },
  "speakerSpotlight": {
    object (SpeakerSpotlight)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID for this page element. Object IDs used by <code>google.apps.slides.v1.Page</code> and <code>google.apps.slides.v1.PageElement</code> share the same namespace.</p></td></tr><tr><td><code>size</code></td><td><p><code>object (<code>Size</code>)</code></p><p>The size of the page element.</p></td></tr><tr><td><code>transform</code></td><td><p><code>object (<code>AffineTransform</code>)</code></p><p>The transform of the page element.</p><p>The visual appearance of the page element is determined by its absolute transform. To compute the absolute transform, preconcatenate a page element's transform with the transforms of all of its parent groups. If the page element is not in a group, its absolute transform is the same as the value in this field.</p><p>The initial transform for the newly created <code>Group</code> is always the identity transform.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the page element. Combined with description to display alt text.</p><p>The field is not supported for <code>Group</code> elements.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The description of the page element. Combined with title to display alt text.</p><p>The field is not supported for <code>Group</code> elements.</p></td></tr><tr><td colspan="2">Union field <code>element_kind</code>. The kind of element that this PageElement represents. Each message contains any properties that are specific to that kind of page element. <code>element_kind</code> can be only one of the following:</td></tr><tr><td><code>elementGroup</code></td><td><p><code>object (<code>Group</code>)</code></p><p>A collection of page elements joined as a single unit.</p></td></tr><tr><td><code>shape</code></td><td><p><code>object (<code>Shape</code>)</code></p><p>A generic shape.</p></td></tr><tr><td><code>image</code></td><td><p><code>object (<code>Image</code>)</code></p><p>An image page element.</p></td></tr><tr><td><code>video</code></td><td><p><code>object (<code>Video</code>)</code></p><p>A video page element.</p></td></tr><tr><td><code>line</code></td><td><p><code>object (<code>Line</code>)</code></p><p>A line page element.</p></td></tr><tr><td><code>table</code></td><td><p><code>object (<code>Table</code>)</code></p><p>A table page element.</p></td></tr><tr><td><code>wordArt</code></td><td><p><code>object (<code>WordArt</code>)</code></p><p>A word art page element.</p></td></tr><tr><td><code>sheetsChart</code></td><td><p><code>object (<code>SheetsChart</code>)</code></p><p>A linked chart embedded from Google Sheets. Unlinked charts are represented as images.</p></td></tr><tr><td><code>speakerSpotlight</code></td><td><p><code>object (<code>SpeakerSpotlight</code>)</code></p><p>A Speaker Spotlight.</p></td></tr></tbody></table>

### Group

A `PageElement` kind representing a joined collection of PageElements.

JSON representation

```
{
  "children": [
    {
      object (PageElement)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>children[]</code></td><td><p><code>object (<code>PageElement</code>)</code></p><p>The collection of elements in the group. The minimum size of a group is 2.</p></td></tr></tbody></table>

### WordArt

A `PageElement` kind representing word art.

JSON representation

```
{
  "renderedText": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>renderedText</code></td><td><p><code>string</code></p><p>The text rendered as word art.</p></td></tr></tbody></table>

### SpeakerSpotlight

A `PageElement` kind representing a Speaker Spotlight.

JSON representation

```
{
  "speakerSpotlightProperties": {
    object (SpeakerSpotlightProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>speakerSpotlightProperties</code></td><td><p><code>object (<code>SpeakerSpotlightProperties</code>)</code></p><p>The properties of the Speaker Spotlight.</p></td></tr></tbody></table>

### SpeakerSpotlightProperties

The properties of the `SpeakerSpotlight`.

JSON representation

```
{
  "outline": {
    object (Outline)
  },
  "shadow": {
    object (Shadow)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>outline</code></td><td><p><code>object (<code>Outline</code>)</code></p><p>The outline of the Speaker Spotlight. If not set, it has no outline.</p></td></tr><tr><td><code>shadow</code></td><td><p><code>object (<code>Shadow</code>)</code></p><p>The shadow of the Speaker Spotlight. If not set, it has no shadow.</p></td></tr></tbody></table>

### SlideProperties

The properties of `Page` that are only relevant for pages with pageType SLIDE.

JSON representation

```
{
  "layoutObjectId": string,
  "masterObjectId": string,
  "notesPage": {
    object (Page)
  },
  "isSkipped": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>layoutObjectId</code></td><td><p><code>string</code></p><p>The object ID of the layout that this slide is based on. This property is read-only.</p></td></tr><tr><td><code>masterObjectId</code></td><td><p><code>string</code></p><p>The object ID of the master that this slide is based on. This property is read-only.</p></td></tr><tr><td><code>notesPage</code></td><td><p><code>object (<code>Page</code>)</code></p><p>The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the . The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the <code>speakerNotesObjectId</code> field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.</p></td></tr><tr><td><code>isSkipped</code></td><td><p><code>boolean</code></p><p>Whether the slide is skipped in the presentation mode. Defaults to false.</p></td></tr></tbody></table>

### LayoutProperties

The properties of `Page` are only relevant for pages with pageType LAYOUT.

JSON representation

```
{
  "masterObjectId": string,
  "name": string,
  "displayName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>masterObjectId</code></td><td><p><code>string</code></p><p>The object ID of the master that this layout is based on.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the layout.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>The human-readable name of the layout.</p></td></tr></tbody></table>

### NotesProperties

The properties of `Page` that are only relevant for pages with pageType NOTES.

JSON representation

```
{
  "speakerNotesObjectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>speakerNotesObjectId</code></td><td><p><code>string</code></p><p>The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The <code>presentations.get</code> or <code>pages.get</code> action will always return the latest object ID.</p></td></tr></tbody></table>

### MasterProperties

The properties of `Page` that are only relevant for pages with pageType MASTER.

JSON representation

```
{
  "displayName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>The human-readable name of the master.</p></td></tr></tbody></table>

### PageProperties

The properties of the `Page`.

The page will inherit properties from the parent page. Depending on the page type the hierarchy is defined in either `SlideProperties` or `LayoutProperties`.

JSON representation

```
{
  "pageBackgroundFill": {
    object (PageBackgroundFill)
  },
  "colorScheme": {
    object (ColorScheme)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>pageBackgroundFill</code></td><td><p><code>object (<code>PageBackgroundFill</code>)</code></p><p>The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.</p></td></tr><tr><td><code>colorScheme</code></td><td><p><code>object (<code>ColorScheme</code>)</code></p><p>The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor.</p><p>Only the concrete colors of the first 12 <code>ThemeColorType</code> s are editable. In addition, only the color scheme on <code>Master</code> pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.</p></td></tr></tbody></table>

### PageBackgroundFill

The page background fill.

JSON representation

```
{
  "propertyState": enum (PropertyState),

  "solidFill": {
    object (SolidFill)
  },
  "stretchedPictureFill": {
    object (StretchedPictureFill)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>propertyState</code></td><td><p><code>enum (<code>PropertyState</code>)</code></p><p>The background fill property state.</p><p>Updating the fill on a page will implicitly update this field to <code>RENDERED</code>, unless another value is specified in the same request. To have no fill on a page, set this field to <code>NOT_RENDERED</code>. In this case, any other fill fields set in the same request will be ignored.</p></td></tr><tr><td colspan="2">Union field <code>kind</code>. The kind of background fill. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>solidFill</code></td><td><p><code>object (<code>SolidFill</code>)</code></p><p>Solid color fill.</p></td></tr><tr><td><code>stretchedPictureFill</code></td><td><p><code>object (<code>StretchedPictureFill</code>)</code></p><p>Stretched picture fill.</p></td></tr></tbody></table>

### StretchedPictureFill

The stretched picture fill. The page or page element is filled entirely with the specified picture. The picture is stretched to fit its container.

JSON representation

```
{
  "contentUrl": string,
  "size": {
    object (Size)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>contentUrl</code></td><td><p><code>string</code></p><p>Reading the contentUrl:</p><p>An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change.</p><p>Writing the contentUrl:</p><p>The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format.</p><p>The provided URL can be at most 2 kB in length.</p></td></tr><tr><td><code>size</code></td><td><p><code>object (<code>Size</code>)</code></p><p>The original size of the picture fill. This field is read-only.</p></td></tr></tbody></table>

### ColorScheme

The palette of predefined colors for a page.

JSON representation

```
{
  "colors": [
    {
      object (ThemeColorPair)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>colors[]</code></td><td><p><code>object (<code>ThemeColorPair</code>)</code></p><p>The ThemeColorType and corresponding concrete color pairs.</p></td></tr></tbody></table>

### ThemeColorPair

A pair mapping a theme color type to the concrete color it represents.

JSON representation

```
{
  "type": enum (ThemeColorType),
  "color": {
    object (RgbColor)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>ThemeColorType</code>)</code></p><p>The type of the theme color.</p></td></tr><tr><td><code>color</code></td><td><p><code>object (<code>RgbColor</code>)</code></p><p>The concrete color corresponding to the theme color type above.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets the latest version of the specified page in the presentation.</td></tr><tr><td><h3>getThumbnail</h3></td><td>Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image.</td></tr></tbody></table>
