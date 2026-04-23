---
source: https://developers.google.com/workspace/slides/api/guides/overview
root: workspace
fetched_at: 2026-04-23T15:31:45.947Z
---

# Introduction

The Google Slides API lets you create and modify Google Slides presentations.

Apps can integrate with the Google Slides API to create beautiful slide decks automatically from user- and system-provided data. For example, you could use customer details from a database and combine them with predesigned templates and selected configuration options to create finished presentations in a fraction of the time it would take to create them manually.

## Overview of the API

The [presentations](../reference/rest/v1/presentations.md) collection provides methods that let you get and update elements within the presentation.

Most of your work with the Slides API will probably be creating and updating presentations. You'll do this using the [batchUpdate](../reference/rest/v1/presentations/batchUpdate.md) method; this method takes a list of [Request](../reference/rest/v1/presentations/request.md#Request) objects that let you do things like:

- Create slides
- Add elements to slides such as shapes or tables
- Insert, change, and remove text
- Apply transforms to elements
- Change the order of slides

See [Batch updates](#batch_updates) for more details. See the Get Started guides for a simple end-to-end example of how to use the API.

## The structure of a presentation

A presentation in the Slides API is made up of pages, which contain page elements.

The ID of a presentation can be derived from the URL:

```
https://docs.google.com/presentation/d/presentationId/edit
```

The presentation ID is a string containing letters, numbers, and some special characters. The following regular expression can be used to extract the presentation ID from a Google Sheets URL:

```
/presentation/d/([a-zA-Z0-9-_]+)
```

If you're familiar with the Drive API, the `presentationId` corresponds to the ID of the [File](../../../drive/api/reference/rest/v3/files.md#resource-representations) resource.

Pages and page elements are identified by object IDs.

### Pages

Google Slides has the following kinds of pages:

| Masters | Slide masters define the default text styles, background, and page elements that appear in all of the slides that use this master. Page elements that must appear on all slides should be added to the master. Most presentations have one master, but some may have several or none. |
| --- | --- |
| Layouts | Layouts serve as a template for how page elements will be arranged by default on slides using a layout. Each layout is associated with one master. |
| Slides | These pages contain the content you are presenting to your audience. Most slides are based on a master and a layout. You can specify which layout to use for each slide when it is created. |
| Notes | These pages contain the content for presentation handouts, including a a shape that contains the slide's speaker notes. Each slide has one corresponding notes page. Only the text in the speaker notes shape can be modified with the Slides API. |
| Notes masters | Notes masters define the default text styles and page elements for all notes pages. Notes masters are read-only in the Slides API. |

### Page elements

Page elements are the visual components that are placed on pages. The API exposes several kinds of page elements:

| Group | A set of page elements that are treated as an individual unit. They can be moved, scaled, and rotated together. |
| --- | --- |
| Shape | A plain visual object, such as rectangles, ellipses, and text boxes. Shapes can contain text, so they are the most common page elements to build slides. |
| Image | A graphic imported into Slides. |
| Video | A video imported into Slides. |
| Line | A visual line, curve, or connector. |
| Table | A grid of content. |
| WordArt | A visual text element that behaves more like a shape. |
| SheetsChart | A chart imported into Slides from Google Sheets. |

## Batch updates

The [batchUpdate](../reference/rest/v1/presentations/batchUpdate.md) method lets you update many aspects of a presentation. Changes are grouped together in a batch so that if one request fails, none of the other (potentially dependent) changes are written.

The `batchUpdate` method works by taking one or more [Request](../reference/rest/v1/presentations/request.md#Request) objects, each one specifying a single kind of request to perform. There are many different kinds of requests. Here's a breakdown of the types of requests, grouped into different categories.

<table><tbody><tr><td rowspan="5">Working with Slides:</td><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#CreateSlideRequest">CreateSlideRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#UpdateSlidesPositionRequest">UpdateSlidesPositionRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#DuplicateObjectRequest">DuplicateObjectRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#UpdatePagePropertiesRequest">UpdatePagePropertiesRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#DeleteObjectRequest">DeleteObjectRequest</a></td></tr><tr><td rowspan="6">Working with Page Elements:</td><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#CreateShapeRequest">CreateShapeRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#CreateLineRequest">CreateLineRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#UpdatePageElementTransformRequest">UpdatePageElementTransformRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#UpdateShapePropertiesRequest">UpdateShapePropertiesRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#DuplicateObjectRequest">DuplicateObjectRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#DeleteObjectRequest">DeleteObjectRequest</a></td></tr><tr><td rowspan="12">Working with Tables:</td><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#CreateTableRequest">CreateTableRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#InsertTableRowsRequest">InsertTableRowsRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#InsertTableColumnsRequest">InsertTableColumnsRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#DeleteTableRowRequest">DeleteTableRowRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#DeleteTableColumnRequest">DeleteTableColumnRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#UpdateTableRowPropertiesRequest">UpdateTableRowPropertiesRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#UpdateTableColumnPropertiesRequest">UpdateTableColumnPropertiesRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#UpdateTableBorderPropertiesRequest">UpdateTableBorderPropertiesRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#UpdateTableCellPropertiesRequest">UpdateTableCellPropertiesRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#MergeTableCellsRequest">MergeTableCellsRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#UnmergeTableCellsRequest">UnmergeTableCellsRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#DeleteObjectRequest">DeleteObjectRequest</a></td></tr><tr><td rowspan="4">Working with Charts:</td><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#CreateSheetsChartRequest">CreateSheetsChartRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#RefreshSheetsChartRequest">RefreshSheetsChartRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#ReplaceAllShapesWithSheetsChartRequest">ReplaceAllShapesWithSheetsChartRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#DeleteObjectRequest">DeleteObjectRequest</a></td></tr><tr><td rowspan="7">Working with Images and Video:</td><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#CreateImageRequest">CreateImageRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#CreateVideoRequest">CreateVideoRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#UpdateImagePropertiesRequest">UpdateImagePropertiesRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#UpdateVideoPropertiesRequest">UpdateVideoPropertiesRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#ReplaceAllShapesWithImageRequest">ReplaceAllShapesWithImageRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#DuplicateObjectRequest">DuplicateObjectRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#DeleteObjectRequest">DeleteObjectRequest</a></td></tr><tr><td rowspan="7">Working with Text:</td><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#InsertTextRequest">InsertTextRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#DeleteTextRequest">DeleteTextRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#ReplaceAllTextRequest">ReplaceAllTextRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#CreateParagraphBulletsRequest">CreateParagraphBulletsRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#DeleteParagraphBulletsRequest">DeleteParagraphBulletsRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#UpdateTextStyleRequest">UpdateTextStyleRequest</a></td></tr><tr><td><a href="https://developers.google.com/workspace/slides/reference/rest/v1/presentations/request#UpdateParagraphStyleRequest">UpdateParagraphStyleRequest</a></td></tr></tbody></table>

The `batchUpdate` method returns a [response body](../reference/rest/v1/presentations/batchUpdate.md#response-body), which contains a [Response](../reference/rest/v1/presentations/request.md#Response) for each request. Each response occupies the same index as the corresponding request; for requests with no applicable response, the response at that index will be empty. The various `Create` requests normally do have responses, so that you know the ID of the newly added object.

## Working with object IDs

A presentation in the Slides API is made up of *pages* and *page elements*. These objects include an *object ID* string that is unique within a presentation.

### Specifying object IDs on creation

When creating pages or page elements using the [batchUpdate](../reference/rest/v1/presentations/batchUpdate.md) method, you can optionally specify an object ID for the new object. This lets you create an object and modify it within the same batchUpdate request, minimizing the number of calls to the Slides API and reducing  
[quota usage](../limits.md).

We recommend generating a random object ID in most cases. For example, if you are using Java, `java.util.UUID.randomUUID().toString()` should work well.

When your application wants to keep track of objects over a longer period of time, don't rely on the object ID, because it may change. See the following section for more details.

### Keeping track of objects without using the object ID

When you make a Slides API request, the object ID is normally preserved. (Any exceptions are called out in the method's reference documentation.) Making a copy of a whole presentation with the Drive API also preserves object IDs.

However, you cannot depend on an object ID being unchanged after a presentation is changed in the Slides UI. For example, if someone uses the Slides UI to copy-paste a page element and then deletes the original, the page element will now have a new unique ID, and the ID you previously provided through the API will be lost. As a result, we don't recommend you store object IDs in your application's storage. Instead, you should find objects in the presentation by its text content or alt-text.

Newly created presentations normally use a consistent set of IDs for default slides, masters, and text boxes. These IDs are subject to change over time, so we don't recommend that you rely on this feature. Instead, find the elements you'd like to modify using the presentation object returned by calls to [create()](../reference/rest/v1/presentations/create.md) or [get()](../reference/rest/v1/presentations/get.md).
