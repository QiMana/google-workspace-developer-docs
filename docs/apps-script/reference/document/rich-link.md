---
source: https://developers.google.com/apps-script/reference/document/rich-link
root: apps-script
fetched_at: 2026-04-23T15:19:57.202Z
---

# Class RichLink

## Page Summary

- A RichLink element represents a link to a Google resource like a Drive file or YouTube video.
- Key methods for RichLink include copying the element, getting and setting attributes, retrieving its MIME type, navigating sibling and parent elements, getting the title and URL, checking if it's at the document end, merging with a preceding sibling, and removing it from its parent.
- Methods like `getMimeType()`, `getTitle()`, and `getUrl()` provide specific information about the linked resource.
- Several methods allow for manipulating the element's position and relationship within the document structure, such as `getNextSibling()`, `getParent()`, `getPreviousSibling()`, and `removeFromParent()`.

An element representing a link to a Google resource, such as a Drive file or a YouTube video.

## Detailed documentation

### copy()

Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a parent.

#### Return

`RichLink` — The new copy.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getAttributes()

Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
const doc = DocumentApp.getActiveDocument();
const documentTab = doc.getActiveTab().asDocumentTab();
const body = documentTab.getBody();

// Append a styled paragraph.
const par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
const atts = par.getAttributes();

// Log the paragraph attributes.
for (const att in atts) {
  Logger.log(\`${att}:${atts[att]}\`);
}
```

#### Return

`Object` — The element's attributes.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getMimeType()

Returns the [MIME type](../../../workspace/drive/api/guides/mime-types.md) of the link, which is available when the item is a link to a Drive file and `null` otherwise.

For example, if the link points to a Google Docs file, this returns the string ` application/vnd.google-apps.document`.

#### Return

`String|null` — The MIME type of the link, if available.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getNextSibling()

Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.

#### Return

`Element|null` — The next sibling element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getParent()

Retrieves the element's parent element.

The parent element contains the current element.

#### Return

`ContainerElement|null` — The parent element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getPreviousSibling()

Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.

#### Return

`Element|null` — The previous sibling element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getTitle()

Returns the link's displayed title. This title matches the title of the linked resource at the time of the insertion or last update of the link. For example, if this link points to a Google Docs document titled "Analysis," this returns `Analysis`.

#### Return

`String` — The display title of the link.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getType()

Retrieves the element's `ElementType`.

Use `getType()` to determine the exact type of a given element.

```
const doc = DocumentApp.getActiveDocument();
const documentTab = doc.getActiveTab().asDocumentTab();
const body = documentTab.getBody();

// Obtain the first element in the active tab's body.

const firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```

#### Return

`ElementType` — The element type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getUrl()

Returns the URL of the resource.

#### Return

`String` — The URL of the resource.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### isAtDocumentEnd()

Determines whether the element is at the end of the `Document`.

#### Return

`Boolean` — Whether the element is at the end of the tab.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### merge()

Merges the element with the preceding sibling of the same type.

Only elements of the same `ElementType` can be merged. Any child elements contained in the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
const doc = DocumentApp.getActiveDocument();
const documentTab = doc.getActiveTab().asDocumentTab();
const body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
const par1 = body.appendParagraph('Paragraph 1.');
const par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
const cells = [
  ['Row 1, Cell 1', 'Row 1, Cell 2'],
  ['Row 2, Cell 1', 'Row 2, Cell 2'],
];
// Build a table from the array.
const table = body.appendTable(cells);
// Get the first row in the table.
const row = table.getRow(0);
// Get the two cells in this row.
const cell1 = row.getCell(0);
const cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
const merged = cell2.merge();
```

#### Return

`RichLink|null` — The merged element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### removeFromParent()

Removes the element from its parent.

```
const doc = DocumentApp.getActiveDocument();
const documentTab = doc.getActiveTab().asDocumentTab();
const body = documentTab.getBody();

// Remove all images in the active tab's body.
const imgs = body.getImages();
for (let i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```

#### Return

`RichLink|null` — The removed element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setAttributes(attributes)

Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in the `DocumentApp.Attribute` enumeration and each property value is the new value to be applied.

```
const doc = DocumentApp.getActiveDocument();
const documentTab = doc.getActiveTab().asDocumentTab();
const body = documentTab.getBody();

// Define a custom paragraph style.
const style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
const par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `attributes` | `Object` | The element's attributes. |

#### Return

`RichLink` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
