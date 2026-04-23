---
source: https://developers.google.com/apps-script/reference/forms/image-item
root: apps-script
fetched_at: 2026-04-23T15:20:21.052Z
---

# Class ImageItem

## Page Summary

- ImageItem is a layout item used in Google Forms to display an image.
- ImageItems can be created or accessed from a Form object in Apps Script.
- You can set or get properties of an ImageItem such as its title, help text, image data, alignment, and width using various methods.
- The `duplicate()` method creates a copy of the ImageItem and adds it to the form.

A layout item that displays an image. Items can be accessed or created from a `Form`.

```
// Open a form by ID and add a new image item
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const img = UrlFetchApp.fetch('https://www.google.com/images/srpr/logo4w.png');
form.addImageItem()
    .setTitle('Google')
    .setHelpText('Google Logo')  // The help text is the image description
    .setImage(img);
```

## Detailed documentation

### duplicate()

Creates a copy of this item and appends it to the end of the form.

#### Return

`ImageItem` — a duplicate of this `ImageItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getAlignment()

Gets the image's horizontal alignment.

#### Return

`Alignment` — the horizontal alignment

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getHelpText()

Gets the item's help text (sometimes called description text for layout items like `ImageItems`, `PageBreakItems`, and `SectionHeaderItems`).

#### Return

`String` — the item's help text or description text

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getId()

Gets the item's unique identifier.

#### Return

`Integer` — the item's ID

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getImage()

Gets the image that is currently assigned to the item.

#### Return

`Blob` — the image data

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getIndex()

Gets the index of the item among all the items in the form.

#### Return

`Integer` — the index of the item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getTitle()

Gets the item's title (sometimes called header text, in the case of a `SectionHeaderItem`).

#### Return

`String` — the item's title or header text

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getType()

Gets the item's type, represented as an `ItemType`.

#### Return

`ItemType` — the item's type

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getWidth()

Gets the image's width in pixels.

#### Return

`Integer` — the width in pixels

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setAlignment(alignment)

Sets the image's horizontal alignment.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alignment` | `Alignment` | the horizontal alignment |

#### Return

`ImageItem` — this `ImageItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setHelpText(text)

Sets the item's help text (sometimes called description text for layout items like `ImageItems`, `PageBreakItems`, and `SectionHeaderItems`).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | the new help text |

#### Return

`ImageItem` — this `ImageItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setImage(image)

Sets the image itself.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `image` | `BlobSource` | the image data |

#### Return

`ImageItem` — this `ImageItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setTitle(title)

Sets the item's title (sometimes called header text, in the case of a `SectionHeaderItem`).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | the new title or header text |

#### Return

`ImageItem` — this `ImageItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setWidth(width)

Sets the image's width in pixels. Only the image's width can be set. Height is set automatically to maintain the image's proportions.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | `Integer` | the width in pixels |

#### Return

`ImageItem` — this `ImageItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`
