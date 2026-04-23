---
source: https://developers.google.com/apps-script/reference/slides/picture-fill
root: apps-script
fetched_at: 2026-04-23T15:21:11.641Z
---

# Class PictureFill

## Page Summary

- PictureFill is a fill that renders an image stretched to its container's dimensions.
- It provides methods to retrieve the image data as a Blob, a temporary content URL, or the original source URL.
- The `getAs` method allows converting the image data to a specified content type before returning it as a Blob.
- Accessing the content or source URL may require specific authorization scopes.

A fill that renders an image that's stretched to the dimensions of its container.

## Detailed documentation

### getAs(contentType)

Return the data inside this object as a blob converted to the specified content type.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `contentType` | `String` | The MIME type to convert to. |

#### Return

`Blob` — The data as a blob.

---

### getBlob()

Return the data inside this object as a converted blob.

#### Return

`Blob` — The data as a blob.

---

### getContentUrl()

Gets a URL to the image.

This URL is tagged with the account of the requester, so anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change. The URL expires after a short period of time.

#### Return

`String`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getSourceUrl()

Gets the image's source URL, if available.

When an image is inserted by URL, returns the URL provided during image insertion.

#### Return

`String|null` — The image URL, or `null` if the image does not have a source URL.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
