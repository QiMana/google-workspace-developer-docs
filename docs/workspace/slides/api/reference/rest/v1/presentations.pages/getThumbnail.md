---
source: https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations.pages/getThumbnail
root: workspace
fetched_at: 2026-04-23T15:31:51.805Z
---

# Method: presentations.pages.getThumbnail

Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image.

This request counts as an [expensive read request](../../../../limits.md) for quota purposes.

### HTTP request

`GET https://slides.googleapis.com/v1/presentations/{presentationId}/pages/{pageObjectId}/thumbnail`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>presentationId</code></td><td><p><code>string</code></p><p>The ID of the presentation to retrieve.</p></td></tr><tr><td><code>pageObjectId</code></td><td><p><code>string</code></p><p>The object ID of the page whose thumbnail to retrieve.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>thumbnailProperties</code></td><td><p><code>object (<code>ThumbnailProperties</code>)</code></p><p>The thumbnail properties.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

The thumbnail of a page.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "width": integer,
  "height": integer,
  "contentUrl": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>width</code></td><td><p><code>integer</code></p><p>The positive width in pixels of the thumbnail image.</p></td></tr><tr><td><code>height</code></td><td><p><code>integer</code></p><p>The positive height in pixels of the thumbnail image.</p></td></tr><tr><td><code>contentUrl</code></td><td><p><code>string</code></p><p>The content URL of the thumbnail image.</p><p>The URL to the image has a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change. The mime type of the thumbnail image is the same as specified in the <code>GetPageThumbnailRequest</code>.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/presentations`
- `https://www.googleapis.com/auth/presentations.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## ThumbnailProperties

Provides control over page thumbnail creation.

JSON representation

```
{
  "mimeType": enum (MimeType),
  "thumbnailSize": enum (ThumbnailSize)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>mimeType</code></td><td><p><code>enum (<code>MimeType</code>)</code></p><p>The optional mime type of the thumbnail image.</p><p>If you don't specify the mime type, the mime type defaults to PNG.</p></td></tr><tr><td><code>thumbnailSize</code></td><td><p><code>enum (<code>ThumbnailSize</code>)</code></p><p>The optional thumbnail image size.</p><p>If you don't specify the size, the server chooses a default size of the image.</p></td></tr></tbody></table>

## MimeType

The mime type of the thumbnail image.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PNG</code></td><td>The default mime type.</td></tr></tbody></table>

## ThumbnailSize

The predefined thumbnail image sizes. Values here describe the width of the thumbnail image. When the page height is greater than the width, the width may be less than the specified size.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>THUMBNAIL_SIZE_UNSPECIFIED</code></td><td><p>The default thumbnail image size.</p><p>The unspecified thumbnail size implies that the server chooses the size of the image in a way that might vary in the future.</p></td></tr><tr><td><code>LARGE</code></td><td>The thumbnail image width of 1600px.</td></tr><tr><td><code>MEDIUM</code></td><td>The thumbnail image width of 800px.</td></tr><tr><td><code>SMALL</code></td><td>The thumbnail image width of 200px.</td></tr></tbody></table>
