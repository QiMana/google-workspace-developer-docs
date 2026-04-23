---
source: https://developers.google.com/apps-script/reference/document/positioned-image
root: apps-script
fetched_at: 2026-04-23T15:19:48.194Z
---

# Class PositionedImage

## Page Summary

- A PositionedImage is a fixed position image anchored to a Paragraph or ListItem, unlike an InlineImage which is an Element.
- PositionedImages are not considered Elements and do not have parent or sibling Elements.
- PositionedImages are placed using offsets from their anchor point and have an ID for referencing.
- The provided example code demonstrates how to add a PositionedImage anchored to a new paragraph.
- The documentation details various methods for getting and setting properties of a PositionedImage, such as its dimensions, layout, offsets, and associated blob data.

Fixed position image anchored to a `Paragraph`. Unlike an `InlineImage`, a `PositionedImage` is not an `Element`. It does not have a parent or sibling `Element`. Instead, it is anchored to a `Paragraph` or `ListItem`, and is placed via offsets from that anchor. A `PositionedImage` has an ID that can be used to reference it.

```
const body =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Append a new paragraph.
const paragraph = body.appendParagraph('New paragraph to anchor the image to.');

// Get an image in Drive from its ID.
const image = DriveApp.getFileById('ENTER_IMAGE_FILE_ID_HERE').getBlob();

// Add the PositionedImage with offsets (in points).
const posImage =
    paragraph.addPositionedImage(image).setTopOffset(60).setLeftOffset(40);
```

## Detailed documentation

### getAs(contentType)

Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".

To view the daily quotas for conversions, see [Quotas for Google Services](https://developers.google.com/apps-script/guides/services/quotas). Newly created Google Workspace domains might be temporarily subject to stricter quotas.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `contentType` | `String` | The MIME type to convert to. For most blobs, `'application/pdf'` is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of `'image/bmp'`, `'image/gif'`, `'image/jpeg'`, or `'image/png'` are also valid. For a Google Docs document, `'text/markdown'` is also valid. |

#### Return

`Blob` — The data as a blob.

---

### getBlob()

Return the data inside this object as a blob.

#### Return

`Blob` — The data as a blob.

---

### getHeight()

Retrieves the image's height, in pixels.

#### Return

`Integer` — the image's height, in pixels

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getId()

Gets the image's ID.

#### Return

`String` — the image ID

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getLayout()

Gets an enum value that represents how the image is laid out.

#### Return

`PositionedLayout` — the image layout

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getLeftOffset()

Gets the image's offset, in points, from the paragraph's left.

#### Return

`Number` — the image offset from the left paragraph's left

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getParagraph()

Gets the `Paragraph` the image is anchored to.

#### Return

`Paragraph` — the parent paragraph

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getTopOffset()

Gets the image's offset, in points, from the paragraph's top.

#### Return

`Number` — the image offset from the left paragraph's top

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getWidth()

Retrieves the image's width, in pixels.

#### Return

`Integer` — the image's width, in pixels

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setHeight(height)

Sets the image's height, in pixels.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `height` | `Integer` | the image's height, in pixels |

#### Return

`PositionedImage` — the current object

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setLayout(layout)

Sets the definition of how the image is laid out.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `layout` | `PositionedLayout` | an enum representing the layout mode |

#### Return

`PositionedImage` — this object for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setLeftOffset(offset)

Sets the image's offset, in points, from the paragraph's left.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `offset` | `Number` | offset from the paragraph's left |

#### Return

`PositionedImage` — this object for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setTopOffset(offset)

Sets the image's offset, in points, from the paragraph's top.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `offset` | `Number` | offset from the paragraph's top |

#### Return

`PositionedImage` — this object for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setWidth(width)

Sets the image's width, in pixels.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | `Integer` | the image's width, in pixels |

#### Return

`PositionedImage` — the current object

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
