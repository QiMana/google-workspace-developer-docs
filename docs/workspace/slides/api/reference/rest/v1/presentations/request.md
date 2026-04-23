---
source: https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/request
root: workspace
fetched_at: 2026-04-23T15:31:55.212Z
---

# Requests

## Request

A single kind of update to apply to a presentation.

JSON representation

```
{

  "createSlide": {
    object (CreateSlideRequest)
  },
  "createShape": {
    object (CreateShapeRequest)
  },
  "createTable": {
    object (CreateTableRequest)
  },
  "insertText": {
    object (InsertTextRequest)
  },
  "insertTableRows": {
    object (InsertTableRowsRequest)
  },
  "insertTableColumns": {
    object (InsertTableColumnsRequest)
  },
  "deleteTableRow": {
    object (DeleteTableRowRequest)
  },
  "deleteTableColumn": {
    object (DeleteTableColumnRequest)
  },
  "replaceAllText": {
    object (ReplaceAllTextRequest)
  },
  "deleteObject": {
    object (DeleteObjectRequest)
  },
  "updatePageElementTransform": {
    object (UpdatePageElementTransformRequest)
  },
  "updateSlidesPosition": {
    object (UpdateSlidesPositionRequest)
  },
  "deleteText": {
    object (DeleteTextRequest)
  },
  "createImage": {
    object (CreateImageRequest)
  },
  "createVideo": {
    object (CreateVideoRequest)
  },
  "createSheetsChart": {
    object (CreateSheetsChartRequest)
  },
  "createLine": {
    object (CreateLineRequest)
  },
  "refreshSheetsChart": {
    object (RefreshSheetsChartRequest)
  },
  "updateShapeProperties": {
    object (UpdateShapePropertiesRequest)
  },
  "updateImageProperties": {
    object (UpdateImagePropertiesRequest)
  },
  "updateVideoProperties": {
    object (UpdateVideoPropertiesRequest)
  },
  "updatePageProperties": {
    object (UpdatePagePropertiesRequest)
  },
  "updateTableCellProperties": {
    object (UpdateTableCellPropertiesRequest)
  },
  "updateLineProperties": {
    object (UpdateLinePropertiesRequest)
  },
  "createParagraphBullets": {
    object (CreateParagraphBulletsRequest)
  },
  "replaceAllShapesWithImage": {
    object (ReplaceAllShapesWithImageRequest)
  },
  "duplicateObject": {
    object (DuplicateObjectRequest)
  },
  "updateTextStyle": {
    object (UpdateTextStyleRequest)
  },
  "replaceAllShapesWithSheetsChart": {
    object (ReplaceAllShapesWithSheetsChartRequest)
  },
  "deleteParagraphBullets": {
    object (DeleteParagraphBulletsRequest)
  },
  "updateParagraphStyle": {
    object (UpdateParagraphStyleRequest)
  },
  "updateTableBorderProperties": {
    object (UpdateTableBorderPropertiesRequest)
  },
  "updateTableColumnProperties": {
    object (UpdateTableColumnPropertiesRequest)
  },
  "updateTableRowProperties": {
    object (UpdateTableRowPropertiesRequest)
  },
  "mergeTableCells": {
    object (MergeTableCellsRequest)
  },
  "unmergeTableCells": {
    object (UnmergeTableCellsRequest)
  },
  "groupObjects": {
    object (GroupObjectsRequest)
  },
  "ungroupObjects": {
    object (UngroupObjectsRequest)
  },
  "updatePageElementAltText": {
    object (UpdatePageElementAltTextRequest)
  },
  "replaceImage": {
    object (ReplaceImageRequest)
  },
  "updateSlideProperties": {
    object (UpdateSlidePropertiesRequest)
  },
  "updatePageElementsZOrder": {
    object (UpdatePageElementsZOrderRequest)
  },
  "updateLineCategory": {
    object (UpdateLineCategoryRequest)
  },
  "rerouteLine": {
    object (RerouteLineRequest)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kind of update. Exactly one field is required. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>createSlide</code></td><td><p><code>object (<code>CreateSlideRequest</code>)</code></p><p>Creates a new slide.</p></td></tr><tr><td><code>createShape</code></td><td><p><code>object (<code>CreateShapeRequest</code>)</code></p><p>Creates a new shape.</p></td></tr><tr><td><code>createTable</code></td><td><p><code>object (<code>CreateTableRequest</code>)</code></p><p>Creates a new table.</p></td></tr><tr><td><code>insertText</code></td><td><p><code>object (<code>InsertTextRequest</code>)</code></p><p>Inserts text into a shape or table cell.</p></td></tr><tr><td><code>insertTableRows</code></td><td><p><code>object (<code>InsertTableRowsRequest</code>)</code></p><p>Inserts rows into a table.</p></td></tr><tr><td><code>insertTableColumns</code></td><td><p><code>object (<code>InsertTableColumnsRequest</code>)</code></p><p>Inserts columns into a table.</p></td></tr><tr><td><code>deleteTableRow</code></td><td><p><code>object (<code>DeleteTableRowRequest</code>)</code></p><p>Deletes a row from a table.</p></td></tr><tr><td><code>deleteTableColumn</code></td><td><p><code>object (<code>DeleteTableColumnRequest</code>)</code></p><p>Deletes a column from a table.</p></td></tr><tr><td><code>replaceAllText</code></td><td><p><code>object (<code>ReplaceAllTextRequest</code>)</code></p><p>Replaces all instances of specified text.</p></td></tr><tr><td><code>deleteObject</code></td><td><p><code>object (<code>DeleteObjectRequest</code>)</code></p><p>Deletes a page or page element from the presentation.</p></td></tr><tr><td><code>updatePageElementTransform</code></td><td><p><code>object (<code>UpdatePageElementTransformRequest</code>)</code></p><p>Updates the transform of a page element.</p></td></tr><tr><td><code>updateSlidesPosition</code></td><td><p><code>object (<code>UpdateSlidesPositionRequest</code>)</code></p><p>Updates the position of a set of slides in the presentation.</p></td></tr><tr><td><code>deleteText</code></td><td><p><code>object (<code>DeleteTextRequest</code>)</code></p><p>Deletes text from a shape or a table cell.</p></td></tr><tr><td><code>createImage</code></td><td><p><code>object (<code>CreateImageRequest</code>)</code></p><p>Creates an image.</p></td></tr><tr><td><code>createVideo</code></td><td><p><code>object (<code>CreateVideoRequest</code>)</code></p><p>Creates a video.</p></td></tr><tr><td><code>createSheetsChart</code></td><td><p><code>object (<code>CreateSheetsChartRequest</code>)</code></p><p>Creates an embedded Google Sheets chart.</p></td></tr><tr><td><code>createLine</code></td><td><p><code>object (<code>CreateLineRequest</code>)</code></p><p>Creates a line.</p></td></tr><tr><td><code>refreshSheetsChart</code></td><td><p><code>object (<code>RefreshSheetsChartRequest</code>)</code></p><p>Refreshes a Google Sheets chart.</p></td></tr><tr><td><code>updateShapeProperties</code></td><td><p><code>object (<code>UpdateShapePropertiesRequest</code>)</code></p><p>Updates the properties of a <code>Shape</code>.</p></td></tr><tr><td><code>updateImageProperties</code></td><td><p><code>object (<code>UpdateImagePropertiesRequest</code>)</code></p><p>Updates the properties of an <code>Image</code>.</p></td></tr><tr><td><code>updateVideoProperties</code></td><td><p><code>object (<code>UpdateVideoPropertiesRequest</code>)</code></p><p>Updates the properties of a <code>Video</code>.</p></td></tr><tr><td><code>updatePageProperties</code></td><td><p><code>object (<code>UpdatePagePropertiesRequest</code>)</code></p><p>Updates the properties of a <code>Page</code>.</p></td></tr><tr><td><code>updateTableCellProperties</code></td><td><p><code>object (<code>UpdateTableCellPropertiesRequest</code>)</code></p><p>Updates the properties of a <code>TableCell</code>.</p></td></tr><tr><td><code>updateLineProperties</code></td><td><p><code>object (<code>UpdateLinePropertiesRequest</code>)</code></p><p>Updates the properties of a <code>Line</code>.</p></td></tr><tr><td><code>createParagraphBullets</code></td><td><p><code>object (<code>CreateParagraphBulletsRequest</code>)</code></p><p>Creates bullets for paragraphs.</p></td></tr><tr><td><code>replaceAllShapesWithImage</code></td><td><p><code>object (<code>ReplaceAllShapesWithImageRequest</code>)</code></p><p>Replaces all shapes matching some criteria with an image.</p></td></tr><tr><td><code>duplicateObject</code></td><td><p><code>object (<code>DuplicateObjectRequest</code>)</code></p><p>Duplicates a slide or page element.</p></td></tr><tr><td><code>updateTextStyle</code></td><td><p><code>object (<code>UpdateTextStyleRequest</code>)</code></p><p>Updates the styling of text within a <code>Shape</code> or <code>Table</code>.</p></td></tr><tr><td><code>replaceAllShapesWithSheetsChart</code></td><td><p><code>object (<code>ReplaceAllShapesWithSheetsChartRequest</code>)</code></p><p>Replaces all shapes matching some criteria with a Google Sheets chart.</p></td></tr><tr><td><code>deleteParagraphBullets</code></td><td><p><code>object (<code>DeleteParagraphBulletsRequest</code>)</code></p><p>Deletes bullets from paragraphs.</p></td></tr><tr><td><code>updateParagraphStyle</code></td><td><p><code>object (<code>UpdateParagraphStyleRequest</code>)</code></p><p>Updates the styling of paragraphs within a <code>Shape</code> or <code>Table</code>.</p></td></tr><tr><td><code>updateTableBorderProperties</code></td><td><p><code>object (<code>UpdateTableBorderPropertiesRequest</code>)</code></p><p>Updates the properties of the table borders in a <code>Table</code>.</p></td></tr><tr><td><code>updateTableColumnProperties</code></td><td><p><code>object (<code>UpdateTableColumnPropertiesRequest</code>)</code></p><p>Updates the properties of a <code>Table</code> column.</p></td></tr><tr><td><code>updateTableRowProperties</code></td><td><p><code>object (<code>UpdateTableRowPropertiesRequest</code>)</code></p><p>Updates the properties of a <code>Table</code> row.</p></td></tr><tr><td><code>mergeTableCells</code></td><td><p><code>object (<code>MergeTableCellsRequest</code>)</code></p><p>Merges cells in a <code>Table</code>.</p></td></tr><tr><td><code>unmergeTableCells</code></td><td><p><code>object (<code>UnmergeTableCellsRequest</code>)</code></p><p>Unmerges cells in a <code>Table</code>.</p></td></tr><tr><td><code>groupObjects</code></td><td><p><code>object (<code>GroupObjectsRequest</code>)</code></p><p>Groups objects, such as page elements.</p></td></tr><tr><td><code>ungroupObjects</code></td><td><p><code>object (<code>UngroupObjectsRequest</code>)</code></p><p>Ungroups objects, such as <code>groups</code>.</p></td></tr><tr><td><code>updatePageElementAltText</code></td><td><p><code>object (<code>UpdatePageElementAltTextRequest</code>)</code></p><p>Updates the alt text title and/or description of a <code>page element</code>.</p></td></tr><tr><td><code>replaceImage</code></td><td><p><code>object (<code>ReplaceImageRequest</code>)</code></p><p>Replaces an existing image with a new image.</p></td></tr><tr><td><code>updateSlideProperties</code></td><td><p><code>object (<code>UpdateSlidePropertiesRequest</code>)</code></p><p>Updates the properties of a Slide</p></td></tr><tr><td><code>updatePageElementsZOrder</code></td><td><p><code>object (<code>UpdatePageElementsZOrderRequest</code>)</code></p><p>Updates the Z-order of <code>page elements</code>.</p></td></tr><tr><td><code>updateLineCategory</code></td><td><p><code>object (<code>UpdateLineCategoryRequest</code>)</code></p><p>Updates the category of a <code>line</code>.</p></td></tr><tr><td><code>rerouteLine</code></td><td><p><code>object (<code>RerouteLineRequest</code>)</code></p><p>Reroutes a <code>line</code> such that it's connected at the two closest connection sites on the connected page elements.</p></td></tr></tbody></table>

## CreateSlideRequest

Creates a slide.

JSON representation

```
{
  "objectId": string,
  "insertionIndex": integer,
  "slideLayoutReference": {
    object (LayoutReference)
  },
  "placeholderIdMappings": [
    {
      object (LayoutPlaceholderIdMapping)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>A user-supplied object ID.</p><p>If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex <code>[a-zA-Z0-9_]</code>); remaining characters may include those as well as a hyphen or colon (matches regex <code>[a-zA-Z0-9_-:]</code>). The ID length must be between 5 and 50 characters, inclusive.</p><p>If you don't specify an ID, a unique one is generated.</p></td></tr><tr><td><code>insertionIndex</code></td><td><p><code>integer</code></p><p>The optional zero-based index indicating where to insert the slides.</p><p>If you don't specify an index, the slide is created at the end.</p></td></tr><tr><td><code>slideLayoutReference</code></td><td><p><code>object (<code>LayoutReference</code>)</code></p><p>Layout reference of the slide to be inserted, based on the <em>current master</em>, which is one of the following:</p><ul><li>The master of the previous slide index.</li><li>The master of the first slide, if the insertionIndex is zero.</li><li>The first master in the presentation, if there are no slides.</li></ul><p>If the LayoutReference is not found in the current master, a 400 bad request error is returned.</p><p>If you don't specify a layout reference, the slide uses the predefined <code>BLANK</code> layout.</p></td></tr><tr><td><code>placeholderIdMappings[]</code></td><td><p><code>object (<code>LayoutPlaceholderIdMapping</code>)</code></p><p>An optional list of object ID mappings from the <code>placeholder</code> (s) on the layout to the placeholders that are created on the slide from the specified layout. Can only be used when <code>slideLayoutReference</code> is specified.</p></td></tr></tbody></table>

## LayoutReference

Slide layout reference. This may reference either:

- A predefined layout
- One of the layouts in the presentation.

JSON representation

```
{

  "predefinedLayout": enum (PredefinedLayout),
  "layoutId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kind of LayoutReference. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>predefinedLayout</code></td><td><p><code>enum (<code>PredefinedLayout</code>)</code></p><p>Predefined layout.</p></td></tr><tr><td><code>layoutId</code></td><td><p><code>string</code></p><p>Layout ID: the object ID of one of the layouts in the presentation.</p></td></tr></tbody></table>

## PredefinedLayout

Predefined layout types. These are commonly found layouts in presentations. However, there is no guarantee that these layouts are present in the current master as they could have been deleted or not part of the used theme. Additionally, the placeholders on each layout may have been changed.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PREDEFINED_LAYOUT_UNSPECIFIED</code></td><td>Unspecified layout.</td></tr><tr><td><code>BLANK</code></td><td>Blank layout, with no placeholders.</td></tr><tr><td><code>CAPTION_ONLY</code></td><td>Layout with a caption at the bottom.</td></tr><tr><td><code>TITLE</code></td><td>Layout with a title and a subtitle.</td></tr><tr><td><code>TITLE_AND_BODY</code></td><td>Layout with a title and body.</td></tr><tr><td><code>TITLE_AND_TWO_COLUMNS</code></td><td>Layout with a title and two columns.</td></tr><tr><td><code>TITLE_ONLY</code></td><td>Layout with only a title.</td></tr><tr><td><code>SECTION_HEADER</code></td><td>Layout with a section title.</td></tr><tr><td><code>SECTION_TITLE_AND_DESCRIPTION</code></td><td>Layout with a title and subtitle on one side and description on the other.</td></tr><tr><td><code>ONE_COLUMN_TEXT</code></td><td>Layout with one title and one body, arranged in a single column.</td></tr><tr><td><code>MAIN_POINT</code></td><td>Layout with a main point.</td></tr><tr><td><code>BIG_NUMBER</code></td><td>Layout with a big number heading.</td></tr></tbody></table>

## LayoutPlaceholderIdMapping

The user-specified ID mapping for a placeholder that will be created on a slide from a specified layout.

JSON representation

```
{
  "objectId": string,

  "layoutPlaceholder": {
    object (Placeholder)
  },
  "layoutPlaceholderObjectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>A user-supplied object ID for the placeholder identified above that to be created onto a slide.</p><p>If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex <code>[a-zA-Z0-9_]</code>); remaining characters may include those as well as a hyphen or colon (matches regex <code>[a-zA-Z0-9_-:]</code>). The length of the ID must not be less than 5 or greater than 50.</p><p>If you don't specify an ID, a unique one is generated.</p></td></tr><tr><td colspan="2">Union field <code>kind</code>. The kind to identify a placeholder on a layout. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>layoutPlaceholder</code></td><td><p><code>object (<code>Placeholder</code>)</code></p><p>The placeholder on a layout that will be applied to a slide. Only <code>type</code> and <code>index</code> are needed. For example, a predefined <code>TITLE_AND_BODY</code> layout may usually have a TITLE placeholder with index 0 and a BODY placeholder with index 0.</p></td></tr><tr><td><code>layoutPlaceholderObjectId</code></td><td><p><code>string</code></p><p>The object ID of the placeholder on a layout that will be applied to a slide.</p></td></tr></tbody></table>

## CreateShapeRequest

Creates a new shape.

JSON representation

```
{
  "objectId": string,
  "elementProperties": {
    object (PageElementProperties)
  },
  "shapeType": enum (Type)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>A user-supplied object ID.</p><p>If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex <code>[a-zA-Z0-9_]</code>); remaining characters may include those as well as a hyphen or colon (matches regex <code>[a-zA-Z0-9_-:]</code>). The length of the ID must not be less than 5 or greater than 50. If empty, a unique identifier will be generated.</p></td></tr><tr><td><code>elementProperties</code></td><td><p><code>object (<code>PageElementProperties</code>)</code></p><p>The element properties for the shape.</p></td></tr><tr><td><code>shapeType</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The shape type.</p></td></tr></tbody></table>

## PageElementProperties

Common properties for a page element.

Note: When you initially create a `PageElement`, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged.

JSON representation

```
{
  "pageObjectId": string,
  "size": {
    object (Size)
  },
  "transform": {
    object (AffineTransform)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>pageObjectId</code></td><td><p><code>string</code></p><p>The object ID of the page where the element is located.</p></td></tr><tr><td><code>size</code></td><td><p><code>object (<code>Size</code>)</code></p><p>The size of the element.</p></td></tr><tr><td><code>transform</code></td><td><p><code>object (<code>AffineTransform</code>)</code></p><p>The transform for the element.</p></td></tr></tbody></table>

## CreateTableRequest

Creates a new table.

JSON representation

```
{
  "objectId": string,
  "elementProperties": {
    object (PageElementProperties)
  },
  "rows": integer,
  "columns": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>A user-supplied object ID.</p><p>If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex <code>[a-zA-Z0-9_]</code>); remaining characters may include those as well as a hyphen or colon (matches regex <code>[a-zA-Z0-9_-:]</code>). The length of the ID must not be less than 5 or greater than 50.</p><p>If you don't specify an ID, a unique one is generated.</p></td></tr><tr><td><code>elementProperties</code></td><td><p><code>object (<code>PageElementProperties</code>)</code></p><p>The element properties for the table.</p><p>The table will be created at the provided size, subject to a minimum size. If no size is provided, the table will be automatically sized.</p><p>Table transforms must have a scale of 1 and no shear components. If no transform is provided, the table will be centered on the page.</p></td></tr><tr><td><code>rows</code></td><td><p><code>integer</code></p><p>Number of rows in the table.</p></td></tr><tr><td><code>columns</code></td><td><p><code>integer</code></p><p>Number of columns in the table.</p></td></tr></tbody></table>

## InsertTextRequest

Inserts text into a shape or a table cell.

JSON representation

```
{
  "objectId": string,
  "cellLocation": {
    object (TableCellLocation)
  },
  "text": string,
  "insertionIndex": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the shape or table where the text will be inserted.</p></td></tr><tr><td><code>cellLocation</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The optional table cell location if the text is to be inserted into a table cell. If present, the objectId must refer to a table.</p></td></tr><tr><td><code>text</code></td><td><p><code>string</code></p><p>The text to be inserted.</p><p>Inserting a newline character will implicitly create a new <code>ParagraphMarker</code> at that index. The paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists and bullets.</p><p>Text styles for inserted text will be determined automatically, generally preserving the styling of neighboring text. In most cases, the text will be added to the <code>TextRun</code> that exists at the insertion index.</p><p>Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text.</p></td></tr><tr><td><code>insertionIndex</code></td><td><p><code>integer</code></p><p>The index where the text will be inserted, in Unicode code units, based on <code>TextElement</code> indexes.</p><p>The index is zero-based and is computed from the start of the string. The index may be adjusted to prevent insertions inside Unicode grapheme clusters. In these cases, the text will be inserted immediately after the grapheme cluster.</p></td></tr></tbody></table>

## InsertTableRowsRequest

Inserts rows into a table.

JSON representation

```
{
  "tableObjectId": string,
  "cellLocation": {
    object (TableCellLocation)
  },
  "insertBelow": boolean,
  "number": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableObjectId</code></td><td><p><code>string</code></p><p>The table to insert rows into.</p></td></tr><tr><td><code>cellLocation</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The reference table cell location from which rows will be inserted.</p><p>A new row will be inserted above (or below) the row where the reference cell is. If the reference cell is a merged cell, a new row will be inserted above (or below) the merged cell.</p></td></tr><tr><td><code>insertBelow</code></td><td><p><code>boolean</code></p><p>Whether to insert new rows below the reference cell location.</p><ul><li><code>True</code>: insert below the cell.</li><li><code>False</code>: insert above the cell.</li></ul></td></tr><tr><td><code>number</code></td><td><p><code>integer</code></p><p>The number of rows to be inserted. Maximum 20 per request.</p></td></tr></tbody></table>

## InsertTableColumnsRequest

Inserts columns into a table.

Other columns in the table will be resized to fit the new column.

JSON representation

```
{
  "tableObjectId": string,
  "cellLocation": {
    object (TableCellLocation)
  },
  "insertRight": boolean,
  "number": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableObjectId</code></td><td><p><code>string</code></p><p>The table to insert columns into.</p></td></tr><tr><td><code>cellLocation</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The reference table cell location from which columns will be inserted.</p><p>A new column will be inserted to the left (or right) of the column where the reference cell is. If the reference cell is a merged cell, a new column will be inserted to the left (or right) of the merged cell.</p></td></tr><tr><td><code>insertRight</code></td><td><p><code>boolean</code></p><p>Whether to insert new columns to the right of the reference cell location.</p><ul><li><code>True</code>: insert to the right.</li><li><code>False</code>: insert to the left.</li></ul></td></tr><tr><td><code>number</code></td><td><p><code>integer</code></p><p>The number of columns to be inserted. Maximum 20 per request.</p></td></tr></tbody></table>

## DeleteTableRowRequest

Deletes a row from a table.

JSON representation

```
{
  "tableObjectId": string,
  "cellLocation": {
    object (TableCellLocation)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableObjectId</code></td><td><p><code>string</code></p><p>The table to delete rows from.</p></td></tr><tr><td><code>cellLocation</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The reference table cell location from which a row will be deleted.</p><p>The row this cell spans will be deleted. If this is a merged cell, multiple rows will be deleted. If no rows remain in the table after this deletion, the whole table is deleted.</p></td></tr></tbody></table>

## DeleteTableColumnRequest

Deletes a column from a table.

JSON representation

```
{
  "tableObjectId": string,
  "cellLocation": {
    object (TableCellLocation)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableObjectId</code></td><td><p><code>string</code></p><p>The table to delete columns from.</p></td></tr><tr><td><code>cellLocation</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The reference table cell location from which a column will be deleted.</p><p>The column this cell spans will be deleted. If this is a merged cell, multiple columns will be deleted. If no columns remain in the table after this deletion, the whole table is deleted.</p></td></tr></tbody></table>

## ReplaceAllTextRequest

Replaces all instances of text matching a criteria with `replace text`.

JSON representation

```
{
  "replaceText": string,
  "pageObjectIds": [
    string
  ],

  "containsText": {
    object (SubstringMatchCriteria)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>replaceText</code></td><td><p><code>string</code></p><p>The text that will replace the matched text.</p></td></tr><tr><td><code>pageObjectIds[]</code></td><td><p><code>string</code></p><p>If non-empty, limits the matches to page elements only on the given pages.</p><p>Returns a 400 bad request error if given the page object ID of a , or if a page with that object ID doesn't exist in the presentation.</p></td></tr><tr><td colspan="2">Union field <code>criteria</code>. The criteria used to match text to replace. <code>criteria</code> can be only one of the following:</td></tr><tr><td><code>containsText</code></td><td><p><code>object (<code>SubstringMatchCriteria</code>)</code></p><p>Finds text in a shape matching this substring.</p></td></tr></tbody></table>

## SubstringMatchCriteria

A criteria that matches a specific string of text in a shape or table.

JSON representation

```
{
  "text": string,
  "matchCase": boolean,
  "searchByRegex": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>text</code></td><td><p><code>string</code></p><p>The text to search for in the shape or table.</p></td></tr><tr><td><code>matchCase</code></td><td><p><code>boolean</code></p><p>Indicates whether the search should respect case:</p><ul><li><code>True</code>: the search is case sensitive.</li><li><code>False</code>: the search is case insensitive.</li></ul></td></tr><tr><td><code>searchByRegex</code></td><td><p><code>boolean</code></p><p>Optional. True if the find value should be treated as a regular expression. Any backslashes in the pattern should be escaped.</p><ul><li><code>True</code>: the search text is treated as a regular expressions.</li><li><code>False</code>: the search text is treated as a substring for matching.</li></ul></td></tr></tbody></table>

## DeleteObjectRequest

Deletes an object, either `pages` or `page elements`, from the presentation.

JSON representation

```
{
  "objectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the page or page element to delete.</p><p>If after a delete operation a <code>group</code> contains only 1 or no page elements, the group is also deleted.</p><p>If a placeholder is deleted on a layout, any empty inheriting placeholders are also deleted.</p></td></tr></tbody></table>

## UpdatePageElementTransformRequest

Updates the transform of a page element.

Updating the transform of a group will change the absolute transform of the page elements in that group, which can change their visual appearance. See the documentation for `PageElement.transform` for more details.

JSON representation

```
{
  "objectId": string,
  "transform": {
    object (AffineTransform)
  },
  "applyMode": enum (ApplyMode)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the page element to update.</p></td></tr><tr><td><code>transform</code></td><td><p><code>object (<code>AffineTransform</code>)</code></p><p>The input transform matrix used to update the page element.</p></td></tr><tr><td><code>applyMode</code></td><td><p><code>enum (<code>ApplyMode</code>)</code></p><p>The apply mode of the transform update.</p></td></tr></tbody></table>

## ApplyMode

The apply modes of the transform update.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>APPLY_MODE_UNSPECIFIED</code></td><td>Unspecified mode.</td></tr><tr><td><code>RELATIVE</code></td><td>Applies the new AffineTransform matrix to the existing one, and replaces the existing one with the resulting concatenation.</td></tr><tr><td><code>ABSOLUTE</code></td><td>Replaces the existing AffineTransform matrix with the new one.</td></tr></tbody></table>

## UpdateSlidesPositionRequest

Updates the position of slides in the presentation.

JSON representation

```
{
  "slideObjectIds": [
    string
  ],
  "insertionIndex": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>slideObjectIds[]</code></td><td><p><code>string</code></p><p>The IDs of the slides in the presentation that should be moved. The slides in this list must be in existing presentation order, without duplicates.</p></td></tr><tr><td><code>insertionIndex</code></td><td><p><code>integer</code></p><p>The index where the slides should be inserted, based on the slide arrangement before the move takes place. Must be between zero and the number of slides in the presentation, inclusive.</p></td></tr></tbody></table>

## DeleteTextRequest

Deletes text from a shape or a table cell.

JSON representation

```
{
  "objectId": string,
  "cellLocation": {
    object (TableCellLocation)
  },
  "textRange": {
    object (Range)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the shape or table from which the text will be deleted.</p></td></tr><tr><td><code>cellLocation</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The optional table cell location if the text is to be deleted from a table cell. If present, the objectId must refer to a table.</p></td></tr><tr><td><code>textRange</code></td><td><p><code>object (<code>Range</code>)</code></p><p>The range of text to delete, based on <code>TextElement</code> indexes.</p><p>There is always an implicit newline character at the end of a shape's or table cell's text that cannot be deleted. <code>Range.Type.ALL</code> will use the correct bounds, but care must be taken when specifying explicit bounds for range types <code>FROM_START_INDEX</code> and <code>FIXED_RANGE</code>. For example, if the text is "ABC", followed by an implicit newline, then the maximum value is 2 for <code>textRange.start_index</code> and 3 for <code>textRange.end_index</code>.</p><p>Deleting text that crosses a paragraph boundary may result in changes to paragraph styles and lists as the two paragraphs are merged.</p><p>Ranges that include only one code unit of a surrogate pair are expanded to include both code units.</p></td></tr></tbody></table>

## Range

Specifies a contiguous range of an indexed collection, such as characters in text.

JSON representation

```
{
  "startIndex": integer,
  "endIndex": integer,
  "type": enum (Type)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startIndex</code></td><td><p><code>integer</code></p><p>The optional zero-based index of the beginning of the collection. Required for <code>FIXED_RANGE</code> and <code>FROM_START_INDEX</code> ranges.</p></td></tr><tr><td><code>endIndex</code></td><td><p><code>integer</code></p><p>The optional zero-based index of the end of the collection. Required for <code>FIXED_RANGE</code> ranges.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The type of range.</p></td></tr></tbody></table>

## Type

The types of ranges.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>RANGE_TYPE_UNSPECIFIED</code></td><td>Unspecified range type. This value must not be used.</td></tr><tr><td><code>FIXED_RANGE</code></td><td>A fixed range. Both the <code>startIndex</code> and <code>endIndex</code> must be specified.</td></tr><tr><td><code>FROM_START_INDEX</code></td><td>Starts the range at <code>startIndex</code> and continues until the end of the collection. The <code>endIndex</code> must not be specified.</td></tr><tr><td><code>ALL</code></td><td>Sets the range to be the whole length of the collection. Both the <code>startIndex</code> and the <code>endIndex</code> must not be specified.</td></tr></tbody></table>

## CreateImageRequest

Creates an image.

JSON representation

```
{
  "objectId": string,
  "elementProperties": {
    object (PageElementProperties)
  },

  "url": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>A user-supplied object ID.</p><p>If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex <code>[a-zA-Z0-9_]</code>); remaining characters may include those as well as a hyphen or colon (matches regex <code>[a-zA-Z0-9_-:]</code>). The length of the ID must not be less than 5 or greater than 50.</p><p>If you don't specify an ID, a unique one is generated.</p></td></tr><tr><td><code>elementProperties</code></td><td><p><code>object (<code>PageElementProperties</code>)</code></p><p>The element properties for the image.</p><p>When the aspect ratio of the provided size does not match the image aspect ratio, the image is scaled and centered with respect to the size in order to maintain the aspect ratio. The provided transform is applied after this operation.</p><p>The <code>PageElementProperties.size</code> property is optional. If you don't specify the size, the default size of the image is used.</p><p>The <code>PageElementProperties.transform</code> property is optional. If you don't specify a transform, the image will be placed at the top-left corner of the page.</p></td></tr><tr><td colspan="2">Union field <code>image_source</code>. The kind of image source. <code>image_source</code> can be only one of the following:</td></tr><tr><td><code>url</code></td><td><p><code>string</code></p><p>The image URL.</p><p>The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50 MB in size, can't exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF formats.</p><p>The provided URL must be publicly accessible and up to 2 KB in length. The URL is saved with the image, and exposed through the <code>Image.source_url</code> field.</p></td></tr></tbody></table>

## CreateVideoRequest

Creates a video.

NOTE: Creating a video from Google Drive requires that the requesting app have at least one of the drive, drive.readonly, or drive.file OAuth scopes.

JSON representation

```
{
  "objectId": string,
  "elementProperties": {
    object (PageElementProperties)
  },
  "source": enum (Source),
  "id": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>A user-supplied object ID.</p><p>If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex <code>[a-zA-Z0-9_]</code>); remaining characters may include those as well as a hyphen or colon (matches regex <code>[a-zA-Z0-9_-:]</code>). The length of the ID must not be less than 5 or greater than 50.</p><p>If you don't specify an ID, a unique one is generated.</p></td></tr><tr><td><code>elementProperties</code></td><td><p><code>object (<code>PageElementProperties</code>)</code></p><p>The element properties for the video.</p><p>The <code>PageElementProperties.size</code> property is optional. If you don't specify a size, a default size is chosen by the server.</p><p>The <code>PageElementProperties.transform</code> property is optional. The transform must not have shear components. If you don't specify a transform, the video will be placed at the top left corner of the page.</p></td></tr><tr><td><code>source</code></td><td><p><code>enum (<code>Source</code>)</code></p><p>The video source.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The video source's unique identifier for this video.</p><p>e.g. For YouTube video <a href="https://www.youtube.com/watch?v=7U3axjORYZ0">https://www.youtube.com/watch?v=7U3axjORYZ0</a>, the ID is 7U3axjORYZ0. For a Google Drive video <a href="https://drive.google.com/file/d/1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q">https://drive.google.com/file/d/1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q</a> the ID is 1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q.</p><p>To access a Google Drive video file, you might need to add a resource key to the HTTP header for a subset of old files. For more information, see <a href="https://developers.google.com/drive/api/v3/resource-keys">Access link-shared files using resource keys</a>.</p></td></tr></tbody></table>

## CreateSheetsChartRequest

Creates an embedded Google Sheets chart.

NOTE: Chart creation requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, drive.file, or drive OAuth scopes.

JSON representation

```
{
  "objectId": string,
  "elementProperties": {
    object (PageElementProperties)
  },
  "spreadsheetId": string,
  "chartId": integer,
  "linkingMode": enum (LinkingMode)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>A user-supplied object ID.</p><p>If specified, the ID must be unique among all pages and page elements in the presentation. The ID should start with a word character [a-zA-Z0-9_] and then followed by any number of the following characters [a-zA-Z0-9_-:]. The length of the ID should not be less than 5 or greater than 50. If empty, a unique identifier will be generated.</p></td></tr><tr><td><code>elementProperties</code></td><td><p><code>object (<code>PageElementProperties</code>)</code></p><p>The element properties for the chart.</p><p>When the aspect ratio of the provided size does not match the chart aspect ratio, the chart is scaled and centered with respect to the size in order to maintain aspect ratio. The provided transform is applied after this operation.</p></td></tr><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the Google Sheets spreadsheet that contains the chart.</p><p>You might need to add a resource key to the HTTP header for a subset of old files. For more information, see <a href="https://developers.google.com/drive/api/v3/resource-keys">Access link-shared files using resource keys</a>.</p></td></tr><tr><td><code>chartId</code></td><td><p><code>integer</code></p><p>The ID of the specific chart in the Google Sheets spreadsheet.</p></td></tr><tr><td><code>linkingMode</code></td><td><p><code>enum (<code>LinkingMode</code>)</code></p><p>The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked.</p></td></tr></tbody></table>

## LinkingMode

The mode with which the chart is linked to the source spreadsheet.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>NOT_LINKED_IMAGE</code></td><td>The chart is not associated with the source spreadsheet and cannot be updated. A chart that is not linked will be inserted as an image.</td></tr><tr><td><code>LINKED</code></td><td>Linking the chart allows it to be updated, and other collaborators will see a link to the spreadsheet.</td></tr></tbody></table>

## CreateLineRequest

Creates a line.

JSON representation

```
{
  "objectId": string,
  "elementProperties": {
    object (PageElementProperties)
  },
  "lineCategory": enum (Category),
  "category": enum (LineCategory)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>A user-supplied object ID.</p><p>If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex <code>[a-zA-Z0-9_]</code>); remaining characters may include those as well as a hyphen or colon (matches regex <code>[a-zA-Z0-9_-:]</code>). The length of the ID must not be less than 5 or greater than 50.</p><p>If you don't specify an ID, a unique one is generated.</p></td></tr><tr><td><code>elementProperties</code></td><td><p><code>object (<code>PageElementProperties</code>)</code></p><p>The element properties for the line.</p></td></tr><tr><td><code>lineCategory
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>enum (<code>Category</code>)</code></p><p>The category of the line to be created.</p><p><b>Deprecated</b> : use <code>category</code> instead.</p><p>The exact <code>line type</code> created is determined based on the category and how it's routed to connect to other page elements.</p><p>If you specify both a <code>category</code> and a <code>lineCategory</code>, the <code>category</code> takes precedence.</p></td></tr><tr><td><code>category</code></td><td><p><code>enum (<code>LineCategory</code>)</code></p><p>The category of the line to be created.</p><p>The exact <code>line type</code> created is determined based on the category and how it's routed to connect to other page elements.</p><p>If you specify both a <code>category</code> and a <code>lineCategory</code>, the <code>category</code> takes precedence.</p><p>If you do not specify a value for <code>category</code>, but specify a value for <code>lineCategory</code>, then the specified <code>lineCategory</code> value is used.</p><p>If you do not specify either, then <code>STRAIGHT</code> is used.</p></td></tr></tbody></table>

## Category

The line categories.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STRAIGHT</code></td><td>Straight connectors, including straight connector 1. The is the default category when one is not specified.</td></tr><tr><td><code>BENT</code></td><td>Bent connectors, including bent connector 2 to 5.</td></tr><tr><td><code>CURVED</code></td><td>Curved connectors, including curved connector 2 to 5.</td></tr></tbody></table>

## RefreshSheetsChartRequest

Refreshes an embedded Google Sheets chart by replacing it with the latest version of the chart from Google Sheets.

NOTE: Refreshing charts requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.

JSON representation

```
{
  "objectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the chart to refresh.</p></td></tr></tbody></table>

## UpdateShapePropertiesRequest

Update the properties of a `Shape`.

JSON representation

```
{
  "objectId": string,
  "shapeProperties": {
    object (ShapeProperties)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the shape the updates are applied to.</p></td></tr><tr><td><code>shapeProperties</code></td><td><p><code>object (<code>ShapeProperties</code>)</code></p><p>The shape properties to update.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>shapeProperties</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example to update the shape background solid fill color, set <code>fields</code> to <code>"shapeBackgroundFill.solidFill.color"</code>.</p><p>To reset a property to its default value, include its field name in the field mask but leave the field itself unset.</p></td></tr></tbody></table>

## UpdateImagePropertiesRequest

Update the properties of an `Image`.

JSON representation

```
{
  "objectId": string,
  "imageProperties": {
    object (ImageProperties)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the image the updates are applied to.</p></td></tr><tr><td><code>imageProperties</code></td><td><p><code>object (<code>ImageProperties</code>)</code></p><p>The image properties to update.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>imageProperties</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example to update the image outline color, set <code>fields</code> to <code>"outline.outlineFill.solidFill.color"</code>.</p><p>To reset a property to its default value, include its field name in the field mask but leave the field itself unset.</p></td></tr></tbody></table>

## UpdateVideoPropertiesRequest

Update the properties of a `Video`.

JSON representation

```
{
  "objectId": string,
  "videoProperties": {
    object (VideoProperties)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the video the updates are applied to.</p></td></tr><tr><td><code>videoProperties</code></td><td><p><code>object (<code>VideoProperties</code>)</code></p><p>The video properties to update.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>videoProperties</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example to update the video outline color, set <code>fields</code> to <code>"outline.outlineFill.solidFill.color"</code>.</p><p>To reset a property to its default value, include its field name in the field mask but leave the field itself unset.</p></td></tr></tbody></table>

## UpdatePagePropertiesRequest

Updates the properties of a `Page`.

JSON representation

```
{
  "objectId": string,
  "pageProperties": {
    object (PageProperties)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the page the update is applied to.</p></td></tr><tr><td><code>pageProperties</code></td><td><p><code>object (<code>PageProperties</code>)</code></p><p>The page properties to update.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>pageProperties</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example to update the page background solid fill color, set <code>fields</code> to <code>"pageBackgroundFill.solidFill.color"</code>.</p><p>To reset a property to its default value, include its field name in the field mask but leave the field itself unset.</p></td></tr></tbody></table>

## UpdateTableCellPropertiesRequest

Update the properties of a `TableCell`.

JSON representation

```
{
  "objectId": string,
  "tableRange": {
    object (TableRange)
  },
  "tableCellProperties": {
    object (TableCellProperties)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the table.</p></td></tr><tr><td><code>tableRange</code></td><td><p><code>object (<code>TableRange</code>)</code></p><p>The table range representing the subset of the table to which the updates are applied. If a table range is not specified, the updates will apply to the entire table.</p></td></tr><tr><td><code>tableCellProperties</code></td><td><p><code>object (<code>TableCellProperties</code>)</code></p><p>The table cell properties to update.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>tableCellProperties</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example to update the table cell background solid fill color, set <code>fields</code> to <code>"tableCellBackgroundFill.solidFill.color"</code>.</p><p>To reset a property to its default value, include its field name in the field mask but leave the field itself unset.</p></td></tr></tbody></table>

## TableRange

A table range represents a reference to a subset of a table.

It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this:

```
[   ][   ][   ]
[   ][   ][   ]
[             ]
```

A table range with location = (0, 0), row span = 3 and column span = 2 specifies the following cells:

```
[ x ][ x ][   ]
[ x ][ x ][   ]
[ x    x    x ]
```

JSON representation

```
{
  "location": {
    object (TableCellLocation)
  },
  "rowSpan": integer,
  "columnSpan": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>location</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The starting location of the table range.</p></td></tr><tr><td><code>rowSpan</code></td><td><p><code>integer</code></p><p>The row span of the table range.</p></td></tr><tr><td><code>columnSpan</code></td><td><p><code>integer</code></p><p>The column span of the table range.</p></td></tr></tbody></table>

## UpdateLinePropertiesRequest

JSON representation

```
{
  "objectId": string,
  "lineProperties": {
    object (LineProperties)
  },
  "fields": string
}
```

## CreateParagraphBulletsRequest

Creates bullets for all of the paragraphs that overlap with the given text index range.

The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text.

If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.

JSON representation

```
{
  "objectId": string,
  "cellLocation": {
    object (TableCellLocation)
  },
  "textRange": {
    object (Range)
  },
  "bulletPreset": enum (BulletGlyphPreset)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the shape or table containing the text to add bullets to.</p></td></tr><tr><td><code>cellLocation</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The optional table cell location if the text to be modified is in a table cell. If present, the objectId must refer to a table.</p></td></tr><tr><td><code>textRange</code></td><td><p><code>object (<code>Range</code>)</code></p><p>The range of text to apply the bullet presets to, based on <code>TextElement</code> indexes.</p></td></tr><tr><td><code>bulletPreset</code></td><td><p><code>enum (<code>BulletGlyphPreset</code>)</code></p><p>The kinds of bullet glyphs to be used. Defaults to the <code>BULLET_DISC_CIRCLE_SQUARE</code> preset.</p></td></tr></tbody></table>

## BulletGlyphPreset

Preset patterns of bullet glyphs for lists in text.

These patterns use these kinds of bullets:

- `ARROW`: An arrow, corresponding to a Unicode U+2794 code point
- `ARROW3D`: An arrow with 3D shading, corresponding to a Unicode U+27a2 code point
- `CHECKBOX`: A hollow square, corresponding to a Unicode U+274f code point
- `CIRCLE`: A hollow circle, corresponding to a Unicode U+25cb code point
- `DIAMOND`: A solid diamond, corresponding to a Unicode U+25c6 code point
- `DIAMONDX`: A diamond with an 'x', corresponding to a Unicode U+2756 code point
- `HOLLOWDIAMOND`: A hollow diamond, corresponding to a Unicode U+25c7 code point
- `DISC`: A solid circle, corresponding to a Unicode U+25cf code point
- `SQUARE`: A solid square, corresponding to a Unicode U+25a0 code point
- `STAR`: A star, corresponding to a Unicode U+2605 code point
- `ALPHA`: A lowercase letter, like 'a', 'b', or 'c'.
- `UPPERALPHA`: An uppercase letter, like 'A', 'B', or 'C'.
- `DIGIT`: A number, like '1', '2', or '3'.
- `ZERODIGIT`: A number where single digit numbers are prefixed with a zero, like '01', '02', or '03'. Numbers with more than one digit are not prefixed a zero.
- `ROMAN`: A lowercase roman numeral, like 'i', 'ii', or 'iii'.
- `UPPERROMAN`: A uppercase roman numeral, like 'I', 'II', or 'III'.
- `LEFTTRIANGLE`: A triangle pointing left, corresponding to a Unicode U+25c4 code point

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BULLET_DISC_CIRCLE_SQUARE</code></td><td>A bulleted list with a <code>DISC</code>, <code>CIRCLE</code> and <code>SQUARE</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>BULLET_DIAMONDX_ARROW3D_SQUARE</code></td><td>A bulleted list with a <code>DIAMONDX</code>, <code>ARROW3D</code> and <code>SQUARE</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>BULLET_CHECKBOX</code></td><td>A bulleted list with <code>CHECKBOX</code> bullet glyphs for all list nesting levels.</td></tr><tr><td><code>BULLET_ARROW_DIAMOND_DISC</code></td><td>A bulleted list with a <code>ARROW</code>, <code>DIAMOND</code> and <code>DISC</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>BULLET_STAR_CIRCLE_SQUARE</code></td><td>A bulleted list with a <code>STAR</code>, <code>CIRCLE</code> and <code>SQUARE</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>BULLET_ARROW3D_CIRCLE_SQUARE</code></td><td>A bulleted list with a <code>ARROW3D</code>, <code>CIRCLE</code> and <code>SQUARE</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>BULLET_LEFTTRIANGLE_DIAMOND_DISC</code></td><td>A bulleted list with a <code>LEFTTRIANGLE</code>, <code>DIAMOND</code> and <code>DISC</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE</code></td><td>A bulleted list with a <code>DIAMONDX</code>, <code>HOLLOWDIAMOND</code> and <code>SQUARE</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>BULLET_DIAMOND_CIRCLE_SQUARE</code></td><td>A bulleted list with a <code>DIAMOND</code>, <code>CIRCLE</code> and <code>SQUARE</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>NUMBERED_DIGIT_ALPHA_ROMAN</code></td><td>A numbered list with <code>DIGIT</code>, <code>ALPHA</code> and <code>ROMAN</code> numeric glyphs for the first 3 list nesting levels, followed by periods.</td></tr><tr><td><code>NUMBERED_DIGIT_ALPHA_ROMAN_PARENS</code></td><td>A numbered list with <code>DIGIT</code>, <code>ALPHA</code> and <code>ROMAN</code> numeric glyphs for the first 3 list nesting levels, followed by parenthesis.</td></tr><tr><td><code>NUMBERED_DIGIT_NESTED</code></td><td>A numbered list with <code>DIGIT</code> numeric glyphs separated by periods, where each nesting level uses the previous nesting level's glyph as a prefix. For example: '1.', '1.1.', '2.', '2.2.'.</td></tr><tr><td><code>NUMBERED_UPPERALPHA_ALPHA_ROMAN</code></td><td>A numbered list with <code>UPPERALPHA</code>, <code>ALPHA</code> and <code>ROMAN</code> numeric glyphs for the first 3 list nesting levels, followed by periods.</td></tr><tr><td><code>NUMBERED_UPPERROMAN_UPPERALPHA_DIGIT</code></td><td>A numbered list with <code>UPPERROMAN</code>, <code>UPPERALPHA</code> and <code>DIGIT</code> numeric glyphs for the first 3 list nesting levels, followed by periods.</td></tr><tr><td><code>NUMBERED_ZERODIGIT_ALPHA_ROMAN</code></td><td>A numbered list with <code>ZERODIGIT</code>, <code>ALPHA</code> and <code>ROMAN</code> numeric glyphs for the first 3 list nesting levels, followed by periods.</td></tr></tbody></table>

## ReplaceAllShapesWithImageRequest

Replaces all shapes that match the given criteria with the provided image.

The images replacing the shapes are rectangular after being inserted into the presentation and do not take on the forms of the shapes.

JSON representation

```
{
  "replaceMethod": enum (ReplaceMethod),
  "imageReplaceMethod": enum (ImageReplaceMethod),
  "pageObjectIds": [
    string
  ],

  "containsText": {
    object (SubstringMatchCriteria)
  }
  "imageUrl": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>replaceMethod
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>enum (<code>ReplaceMethod</code>)</code></p><p>The replace method.</p><p><b>Deprecated</b> : use <code>imageReplaceMethod</code> instead.</p><p>If you specify both a <code>replaceMethod</code> and an <code>imageReplaceMethod</code>, the <code>imageReplaceMethod</code> takes precedence.</p></td></tr><tr><td><code>imageReplaceMethod</code></td><td><p><code>enum (<code>ImageReplaceMethod</code>)</code></p><p>The image replace method.</p><p>If you specify both a <code>replaceMethod</code> and an <code>imageReplaceMethod</code>, the <code>imageReplaceMethod</code> takes precedence.</p><p>If you do not specify a value for <code>imageReplaceMethod</code>, but specify a value for <code>replaceMethod</code>, then the specified <code>replaceMethod</code> value is used.</p><p>If you do not specify either, then CENTER_INSIDE is used.</p></td></tr><tr><td><code>pageObjectIds[]</code></td><td><p><code>string</code></p><p>If non-empty, limits the matches to page elements only on the given pages.</p><p>Returns a 400 bad request error if given the page object ID of a <code>notes page</code> or a , or if a page with that object ID doesn't exist in the presentation.</p></td></tr><tr><td colspan="2">Union field <code>criteria</code>. The criteria that the shapes must match in order to be replaced. <code>criteria</code> can be only one of the following:</td></tr><tr><td><code>containsText</code></td><td><p><code>object (<code>SubstringMatchCriteria</code>)</code></p><p>If set, this request will replace all of the shapes that contain the given text.</p></td></tr><tr><td colspan="2">Union field <code>image_source</code>. The kind of image source. <code>image_source</code> can be only one of the following:</td></tr><tr><td><code>imageUrl</code></td><td><p><code>string</code></p><p>The image URL.</p><p>The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format.</p><p>The provided URL can be at most 2 kB in length. The URL itself is saved with the image, and exposed via the <code>Image.source_url</code> field.</p></td></tr></tbody></table>

## ReplaceMethod

The replace method.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CENTER_INSIDE</code></td><td>Scales and centers the image to fit within the bounds of the original shape and maintains the image's aspect ratio. The rendered size of the image may be smaller than the size of the shape. This is the default method when one is not specified.</td></tr><tr><td><code>CENTER_CROP</code></td><td>Scales and centers the image to fill the bounds of the original shape. The image may be cropped in order to fill the shape. The rendered size of the image will be the same as that of the original shape.</td></tr></tbody></table>

## ImageReplaceMethod

The image replace method.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>IMAGE_REPLACE_METHOD_UNSPECIFIED</code></td><td>Unspecified image replace method. This value must not be used.</td></tr><tr><td><code>CENTER_INSIDE</code></td><td>Scales and centers the image to fit within the bounds of the original shape and maintains the image's aspect ratio. The rendered size of the image may be smaller than the size of the shape. This is the default method when one is not specified.</td></tr><tr><td><code>CENTER_CROP</code></td><td>Scales and centers the image to fill the bounds of the original shape. The image may be cropped in order to fill the shape. The rendered size of the image will be the same as the original shape.</td></tr></tbody></table>

## DuplicateObjectRequest

Duplicates a slide or page element.

When duplicating a slide, the duplicate slide will be created immediately following the specified slide. When duplicating a page element, the duplicate will be placed on the same page at the same position as the original.

JSON representation

```
{
  "objectId": string,
  "objectIds": {
    string: string,
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The ID of the object to duplicate.</p></td></tr><tr><td><code>objectIds</code></td><td><p><code>map (key: string, value: string)</code></p><p>The object being duplicated may contain other objects, for example when duplicating a slide or a group page element. This map defines how the IDs of duplicated objects are generated: the keys are the IDs of the original objects and its values are the IDs that will be assigned to the corresponding duplicate object. The ID of the source object's duplicate may be specified in this map as well, using the same value of the <code>objectId</code> field as a key and the newly desired ID as the value.</p><p>All keys must correspond to existing IDs in the presentation. All values must be unique in the presentation and must start with an alphanumeric character or an underscore (matches regex <code>[a-zA-Z0-9_]</code>); remaining characters may include those as well as a hyphen or colon (matches regex <code>[a-zA-Z0-9_-:]</code>). The length of the new ID must not be less than 5 or greater than 50.</p><p>If any IDs of source objects are omitted from the map, a new random ID will be assigned. If the map is empty or unset, all duplicate objects will receive a new random ID.</p></td></tr></tbody></table>

## UpdateTextStyleRequest

Update the styling of text in a `Shape` or `Table`.

JSON representation

```
{
  "objectId": string,
  "cellLocation": {
    object (TableCellLocation)
  },
  "style": {
    object (TextStyle)
  },
  "textRange": {
    object (Range)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the shape or table with the text to be styled.</p></td></tr><tr><td><code>cellLocation</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The location of the cell in the table containing the text to style. If <code>objectId</code> refers to a table, <code>cellLocation</code> must have a value. Otherwise, it must not.</p></td></tr><tr><td><code>style</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The style(s) to set on the text.</p><p>If the value for a particular style matches that of the parent, that style will be set to inherit.</p><p>Certain text style changes may cause other changes meant to mirror the behavior of the Slides editor. See the documentation of <code>TextStyle</code> for more information.</p></td></tr><tr><td><code>textRange</code></td><td><p><code>object (<code>Range</code>)</code></p><p>The range of text to style.</p><p>The range may be extended to include adjacent newlines.</p><p>If the range fully contains a paragraph belonging to a list, the paragraph's bullet is also updated with the matching text style.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>style</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example, to update the text style to bold, set <code>fields</code> to <code>"bold"</code>.</p><p>To reset a property to its default value, include its field name in the field mask but leave the field itself unset.</p></td></tr></tbody></table>

## ReplaceAllShapesWithSheetsChartRequest

Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and centered to fit within the bounds of the original shape.

NOTE: Replacing shapes with a chart requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.

JSON representation

```
{
  "containsText": {
    object (SubstringMatchCriteria)
  },
  "spreadsheetId": string,
  "chartId": integer,
  "linkingMode": enum (LinkingMode),
  "pageObjectIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>containsText</code></td><td><p><code>object (<code>SubstringMatchCriteria</code>)</code></p><p>The criteria that the shapes must match in order to be replaced. The request will replace all of the shapes that contain the given text.</p></td></tr><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the Google Sheets spreadsheet that contains the chart.</p></td></tr><tr><td><code>chartId</code></td><td><p><code>integer</code></p><p>The ID of the specific chart in the Google Sheets spreadsheet.</p></td></tr><tr><td><code>linkingMode</code></td><td><p><code>enum (<code>LinkingMode</code>)</code></p><p>The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked.</p></td></tr><tr><td><code>pageObjectIds[]</code></td><td><p><code>string</code></p><p>If non-empty, limits the matches to page elements only on the given pages.</p><p>Returns a 400 bad request error if given the page object ID of a <code>notes page</code> or a , or if a page with that object ID doesn't exist in the presentation.</p></td></tr></tbody></table>

## LinkingMode

The mode with which the chart is linked to the source spreadsheet.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>NOT_LINKED_IMAGE</code></td><td>The chart is not associated with the source spreadsheet and cannot be updated. A chart that is not linked will be inserted as an image.</td></tr><tr><td><code>LINKED</code></td><td>Linking the chart allows it to be updated, and other collaborators will see a link to the spreadsheet.</td></tr></tbody></table>

## DeleteParagraphBulletsRequest

Deletes bullets from all of the paragraphs that overlap with the given text index `range`.

The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.

JSON representation

```
{
  "objectId": string,
  "cellLocation": {
    object (TableCellLocation)
  },
  "textRange": {
    object (Range)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the shape or table containing the text to delete bullets from.</p></td></tr><tr><td><code>cellLocation</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The optional table cell location if the text to be modified is in a table cell. If present, the objectId must refer to a table.</p></td></tr><tr><td><code>textRange</code></td><td><p><code>object (<code>Range</code>)</code></p><p>The range of text to delete bullets from, based on <code>TextElement</code> indexes.</p></td></tr></tbody></table>

## UpdateParagraphStyleRequest

Updates the styling for all of the paragraphs within a `Shape` or `Table` that overlap with the given text index range.

JSON representation

```
{
  "objectId": string,
  "cellLocation": {
    object (TableCellLocation)
  },
  "style": {
    object (ParagraphStyle)
  },
  "textRange": {
    object (Range)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the shape or table with the text to be styled.</p></td></tr><tr><td><code>cellLocation</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The location of the cell in the table containing the paragraph(s) to style. If <code>objectId</code> refers to a table, <code>cellLocation</code> must have a value. Otherwise, it must not.</p></td></tr><tr><td><code>style</code></td><td><p><code>object (<code>ParagraphStyle</code>)</code></p><p>The paragraph's style.</p></td></tr><tr><td><code>textRange</code></td><td><p><code>object (<code>Range</code>)</code></p><p>The range of text containing the paragraph(s) to style.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>style</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example, to update the paragraph alignment, set <code>fields</code> to <code>"alignment"</code>.</p><p>To reset a property to its default value, include its field name in the field mask but leave the field itself unset.</p></td></tr></tbody></table>

## UpdateTableBorderPropertiesRequest

Updates the properties of the table borders in a `Table`.

JSON representation

```
{
  "objectId": string,
  "tableRange": {
    object (TableRange)
  },
  "borderPosition": enum (BorderPosition),
  "tableBorderProperties": {
    object (TableBorderProperties)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the table.</p></td></tr><tr><td><code>tableRange</code></td><td><p><code>object (<code>TableRange</code>)</code></p><p>The table range representing the subset of the table to which the updates are applied. If a table range is not specified, the updates will apply to the entire table.</p></td></tr><tr><td><code>borderPosition</code></td><td><p><code>enum (<code>BorderPosition</code>)</code></p><p>The border position in the table range the updates should apply to. If a border position is not specified, the updates will apply to all borders in the table range.</p></td></tr><tr><td><code>tableBorderProperties</code></td><td><p><code>object (<code>TableBorderProperties</code>)</code></p><p>The table border properties to update.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>tableBorderProperties</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example to update the table border solid fill color, set <code>fields</code> to <code>"tableBorderFill.solidFill.color"</code>.</p><p>To reset a property to its default value, include its field name in the field mask but leave the field itself unset.</p></td></tr></tbody></table>

## BorderPosition

The table border position.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ALL</code></td><td>All borders in the range.</td></tr><tr><td><code>BOTTOM</code></td><td>Borders at the bottom of the range.</td></tr><tr><td><code>INNER</code></td><td>Borders on the inside of the range.</td></tr><tr><td><code>INNER_HORIZONTAL</code></td><td>Horizontal borders on the inside of the range.</td></tr><tr><td><code>INNER_VERTICAL</code></td><td>Vertical borders on the inside of the range.</td></tr><tr><td><code>LEFT</code></td><td>Borders at the left of the range.</td></tr><tr><td><code>OUTER</code></td><td>Borders along the outside of the range.</td></tr><tr><td><code>RIGHT</code></td><td>Borders at the right of the range.</td></tr><tr><td><code>TOP</code></td><td>Borders at the top of the range.</td></tr></tbody></table>

## UpdateTableColumnPropertiesRequest

Updates the properties of a `Table` column.

JSON representation

```
{
  "objectId": string,
  "columnIndices": [
    integer
  ],
  "tableColumnProperties": {
    object (TableColumnProperties)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the table.</p></td></tr><tr><td><code>columnIndices[]</code></td><td><p><code>integer</code></p><p>The list of zero-based indices specifying which columns to update. If no indices are provided, all columns in the table will be updated.</p></td></tr><tr><td><code>tableColumnProperties</code></td><td><p><code>object (<code>TableColumnProperties</code>)</code></p><p>The table column properties to update.</p><p>If the value of <code>tableColumnProperties#columnWidth</code> in the request is less than 406,400 EMU (32 points), a 400 bad request error is returned.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>tableColumnProperties</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example to update the column width, set <code>fields</code> to <code>"columnWidth"</code>.</p><p>If '"columnWidth"' is included in the field mask but the property is left unset, the column width will default to 406,400 EMU (32 points).</p></td></tr></tbody></table>

## UpdateTableRowPropertiesRequest

Updates the properties of a `Table` row.

JSON representation

```
{
  "objectId": string,
  "rowIndices": [
    integer
  ],
  "tableRowProperties": {
    object (TableRowProperties)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the table.</p></td></tr><tr><td><code>rowIndices[]</code></td><td><p><code>integer</code></p><p>The list of zero-based indices specifying which rows to update. If no indices are provided, all rows in the table will be updated.</p></td></tr><tr><td><code>tableRowProperties</code></td><td><p><code>object (<code>TableRowProperties</code>)</code></p><p>The table row properties to update.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>tableRowProperties</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example to update the minimum row height, set <code>fields</code> to <code>"minRowHeight"</code>.</p><p>If '"minRowHeight"' is included in the field mask but the property is left unset, the minimum row height will default to 0.</p></td></tr></tbody></table>

## MergeTableCellsRequest

Merges cells in a `Table`.

JSON representation

```
{
  "objectId": string,
  "tableRange": {
    object (TableRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the table.</p></td></tr><tr><td><code>tableRange</code></td><td><p><code>object (<code>TableRange</code>)</code></p><p>The table range specifying which cells of the table to merge.</p><p>Any text in the cells being merged will be concatenated and stored in the upper-left ("head") cell of the range. If the range is non-rectangular (which can occur in some cases where the range covers cells that are already merged), a 400 bad request error is returned.</p></td></tr></tbody></table>

## UnmergeTableCellsRequest

Unmerges cells in a `Table`.

JSON representation

```
{
  "objectId": string,
  "tableRange": {
    object (TableRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the table.</p></td></tr><tr><td><code>tableRange</code></td><td><p><code>object (<code>TableRange</code>)</code></p><p>The table range specifying which cells of the table to unmerge.</p><p>All merged cells in this range will be unmerged, and cells that are already unmerged will not be affected. If the range has no merged cells, the request will do nothing. If there is text in any of the merged cells, the text will remain in the upper-left ("head") cell of the resulting block of unmerged cells.</p></td></tr></tbody></table>

## GroupObjectsRequest

Groups objects to create an object group. For example, groups `PageElements` to create a `Group` on the same page as all the children.

JSON representation

```
{
  "groupObjectId": string,
  "childrenObjectIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>groupObjectId</code></td><td><p><code>string</code></p><p>A user-supplied object ID for the group to be created.</p><p>If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex <code>[a-zA-Z0-9_]</code>); remaining characters may include those as well as a hyphen or colon (matches regex <code>[a-zA-Z0-9_-:]</code>). The length of the ID must not be less than 5 or greater than 50.</p><p>If you don't specify an ID, a unique one is generated.</p></td></tr><tr><td><code>childrenObjectIds[]</code></td><td><p><code>string</code></p><p>The object IDs of the objects to group.</p><p>Only page elements can be grouped. There should be at least two page elements on the same page that are not already in another group. Some page elements, such as <code>videos</code>, <code>tables</code> and <code>placeholders</code> cannot be grouped.</p></td></tr></tbody></table>

## UngroupObjectsRequest

Ungroups objects, such as `groups`.

JSON representation

```
{
  "objectIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectIds[]</code></td><td><p><code>string</code></p><p>The object IDs of the objects to ungroup.</p><p>Only <code>groups</code> that are not inside other <code>groups</code> can be ungrouped. All the groups should be on the same page. The group itself is deleted. The visual sizes and positions of all the children are preserved.</p></td></tr></tbody></table>

## UpdatePageElementAltTextRequest

Updates the alt text title and/or description of a `page element`.

JSON representation

```
{
  "objectId": string,
  "title": string,
  "description": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the page element the updates are applied to.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The updated alt text title of the page element. If unset the existing value will be maintained. The title is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The updated alt text description of the page element. If unset the existing value will be maintained. The description is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element.</p></td></tr></tbody></table>

## ReplaceImageRequest

Replaces an existing image with a new image.

Replacing an image removes some `image effects` from the existing image.

JSON representation

```
{
  "imageObjectId": string,
  "imageReplaceMethod": enum (ImageReplaceMethod),

  "url": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>imageObjectId</code></td><td><p><code>string</code></p><p>The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request.</p></td></tr><tr><td><code>imageReplaceMethod</code></td><td><p><code>enum (<code>ImageReplaceMethod</code>)</code></p><p>The replacement method.</p></td></tr><tr><td colspan="2">Union field <code>image_source</code>. The kind of image source. <code>image_source</code> can be only one of the following:</td></tr><tr><td><code>url</code></td><td><p><code>string</code></p><p>The image URL.</p><p>The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB, cannot exceed 25 megapixels, and must be in PNG, JPEG, or GIF format.</p><p>The provided URL can't surpass 2 KB in length. The URL is saved with the image, and exposed through the <code>Image.source_url</code> field.</p></td></tr></tbody></table>

## UpdateSlidePropertiesRequest

Updates the properties of a Slide.

JSON representation

```
{
  "objectId": string,
  "slideProperties": {
    object (SlideProperties)
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the slide the update is applied to.</p></td></tr><tr><td><code>slideProperties</code></td><td><p><code>object (<code>SlideProperties</code>)</code></p><p>The slide properties to update.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root 'slideProperties' is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example to update whether a slide is skipped, set <code>fields</code> to <code>"isSkipped"</code>.</p><p>To reset a property to its default value, include its field name in the field mask but leave the field itself unset.</p></td></tr></tbody></table>

## UpdatePageElementsZOrderRequest

Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page element in the front may cover the elements that are behind it.

JSON representation

```
{
  "pageElementObjectIds": [
    string
  ],
  "operation": enum (ZOrderOperation)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>pageElementObjectIds[]</code></td><td><p><code>string</code></p><p>The object IDs of the page elements to update.</p><p>All the page elements must be on the same page and must not be grouped.</p></td></tr><tr><td><code>operation</code></td><td><p><code>enum (<code>ZOrderOperation</code>)</code></p><p>The Z-order operation to apply on the page elements.</p><p>When applying the operation on multiple page elements, the relative Z-orders within these page elements before the operation is maintained.</p></td></tr></tbody></table>

## ZOrderOperation

The operation to update a page element's Z-order.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>Z_ORDER_OPERATION_UNSPECIFIED</code></td><td>Unspecified operation.</td></tr><tr><td><code>BRING_TO_FRONT</code></td><td>Brings the page elements to the front of the page.</td></tr><tr><td><code>BRING_FORWARD</code></td><td>Brings the page elements forward on the page by one element relative to the forwardmost one in the specified page elements.</td></tr><tr><td><code>SEND_BACKWARD</code></td><td>Sends the page elements backward on the page by one element relative to the furthest behind one in the specified page elements.</td></tr><tr><td><code>SEND_TO_BACK</code></td><td>Sends the page elements to the back of the page.</td></tr></tbody></table>

## UpdateLineCategoryRequest

JSON representation

```
{
  "objectId": string,
  "lineCategory": enum (LineCategory)
}
```

## RerouteLineRequest

Reroutes a `line` such that it's connected at the two closest connection sites on the connected page elements.

JSON representation

```
{
  "objectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the line to reroute.</p><p>Only a line with a <code>category</code> indicating it is a "connector" can be rerouted. The start and end connections of the line must be on different page elements.</p></td></tr></tbody></table>
