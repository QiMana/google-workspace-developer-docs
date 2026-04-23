---
source: https://developers.google.com/apps-script/reference/document/position
root: apps-script
fetched_at: 2026-04-23T15:19:44.788Z
---

# Class Position

## Page Summary

- A `Position` represents a location in a document relative to a specific element.
- Scripts can only access the cursor of the user running the script if the script is bound to the document.
- The `Position` class includes methods to get the containing element, its offset, surrounding text, insert bookmarks, inline images, and text.
- Methods like `getOffset()`, `getSurroundingText()`, and insertion methods may require specific authorization scopes.

A reference to a location in the document tab, relative to a specific element. The user's cursor is represented as a `Position`, among other uses. Scripts can only access the cursor of the user who is running the script, and only if the script is [bound](https://developers.google.com/apps-script/scripts_containers) to the document.

```
// Insert some text at the cursor position and make it bold.
const cursor = DocumentApp.getActiveDocument().getCursor();
if (cursor) {
  // Attempt to insert text at the cursor position. If the insertion returns
  // null, the cursor's containing element doesn't allow insertions, so show the
  // user an error message.
  const element = cursor.insertText('ಠ‿ಠ');
  if (element) {
    element.setBold(true);
  } else {
    DocumentApp.getUi().alert('Cannot insert text here.');
  }
} else {
  DocumentApp.getUi().alert('Cannot find a cursor.');
}
```

## Detailed documentation

### getElement()

Gets the element that contains this `Position`. This will be either a `Text` element or a container element like `Paragraph`. In either case, the relative position within the element can be determined with `getOffset()`.

#### Return

`Element` — the container or `Text` element in which this `Position` object is located

---

### getOffset()

Gets this `Position` 's relative location within the element that contains it. If the element is a `Text` element, the offset is the number of characters before the `Position` (that is, the index of the character after this `Position`); for any other element, the offset is the number of child elements before this `Position` within the same container element (that is, the index of the child element after the `Position`).

#### Return

`Integer` — for `Text` elements, the number of characters before this `Position`; for other elements, the number of child elements before this `Position` within the same container element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getSurroundingText()

Creates an artificial `Text` element that represents the text and formatting of the `Paragraph` or `ListItem` that contains the `Position`, either directly or through a chain of child elements. To determine the `Position` 's offset in the returned `Text` element, use `getSurroundingTextOffset()`.

#### Return

`Text` — an element equivalent to the result of calling `editAsText()` on the `Paragraph` or `ListItem` that contains the `Position`, either directly or through a chain of child elements

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getSurroundingTextOffset()

Gets the offset of this `Position` within the `Text` element returned by `getSurroundingText()`. The offset is the number of characters before the `Position` (that is, the index of the character after this `Position`).

#### Return

`Integer` — the number of characters before this `Position` in the `Paragraph` or `ListItem` that contains the `Position`, either directly or through a chain of child elements

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertBookmark()

Creates and inserts a new `Bookmark` at this `Position`.

#### Return

`Bookmark` — the new bookmark

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertInlineImage(image)

Creates and inserts a new `InlineImage` at this `Position` from the specified image blob.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `image` | `BlobSource` | the image data to insert at this `Position` |

#### Return

`InlineImage|null` — the new image element, or `null` if the element in which this `Position` is located does not allow images to be inserted

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertText(text)

Inserts the specified text at this `Position`. This method creates a new `Text` element, even if the string is inserted within an existing `Text` element, so that it is easy to style the new element.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | the string to insert at this `Position` |

#### Return

`Text|null` — the new text element, or `null` if the element in which this `Position` is located does not allow text to be inserted

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
