---
source: https://developers.google.com/apps-script/reference/document/footnote
root: apps-script
fetched_at: 2026-04-23T15:19:43.041Z
---

# Class Footnote

## Page Summary

- A Footnote element represents a footnote within a document and is contained within a ListItem or Paragraph.
- Each Footnote element has a corresponding FootnoteSection element for its contents and cannot contain other elements itself.
- Key methods for a Footnote element include copying the element, retrieving or setting its attributes, accessing its contents and sibling or parent elements, determining its type, checking if it's at the document end, and removing it from its parent.

An element representing a footnote. Each `Footnote` is contained within a `ListItem` or `Paragraph` and has a corresponding `FootnoteSection` element for the footnote's contents. The `Footnote` itself cannot contain any other element. For more information on document structure, see the [guide to extending Google Docs](../../guides/docs.md#structure_of_a_document).

## Detailed documentation

### copy()

Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a parent.

#### Return

`Footnote` — The new copy.

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

### getFootnoteContents()

Retrieves the contents of the footnote element.

#### Return

`FootnoteSection|null` — the footnote section

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

### isAtDocumentEnd()

Determines whether the element is at the end of the `Document`.

#### Return

`Boolean` — Whether the element is at the end of the tab.

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

`Footnote|null` — The removed element.

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

`Footnote` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
