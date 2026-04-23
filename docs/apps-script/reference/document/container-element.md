---
source: https://developers.google.com/apps-script/reference/document/container-element
root: apps-script
fetched_at: 2026-04-23T15:19:33.549Z
---

# Class ContainerElement

## Page Summary

- A ContainerElement is a generic element that can hold other elements, and various elements like Paragraph inherit from it.
- ContainerElement provides methods to cast the element into specific types such as Body, Equation, Table, and Paragraph.
- You can find elements and text within a ContainerElement using methods like `findElement()` and `findText()`.
- Methods are available to manage child elements, such as getting a child by index, getting the number of children, and getting the child index of a specific element.
- ContainerElement includes methods for modifying the element itself, like clearing contents, copying, merging with siblings, removing from parent, and replacing text.

A generic element that may contain other elements. All elements that may contain child elements, such as `Paragraph`, inherit from `ContainerElement`.

## Detailed documentation

### asBody()

Returns the current element as a `Body`.

Use this method to aid auto-complete whenever a given element is known to be of a specific type.

#### Return

`Body` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### asEquation()

Returns the current element as an `Equation`.

Use this method to aid auto-complete whenever a given element is known to be of a specific type.

#### Return

`Equation` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### asFootnoteSection()

Returns the current element as a `FootnoteSection`.

Use this method to aid auto-complete whenever a given element is known to be of a specific type.

#### Return

`FootnoteSection` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### asListItem()

Returns the current element as a `ListItem`.

Use this method to aid auto-complete whenever a given element is known to be of a specific type.

#### Return

`ListItem` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### asParagraph()

Returns the current element as a `Paragraph`.

Use this method to aid auto-complete whenever a given element is known to be of a specific type.

#### Return

`Paragraph` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### asTable()

Returns the current element as a `Table`.

Use this method to aid auto-complete whenever a given element is known to be of a specific type.

#### Return

`Table` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### asTableCell()

Returns the current element as a `TableCell`.

Use this method to aid auto-complete whenever a given element is known to be of a specific type.

#### Return

`TableCell` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### asTableOfContents()

Returns the current element as a `TableOfContents`.

Use this method to aid auto-complete whenever a given element is known to be of a specific type.

#### Return

`TableOfContents` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### asTableRow()

Returns the current element as a `TableRow`.

Use this method to aid auto-complete whenever a given element is known to be of a specific type.

#### Return

`TableRow` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### clear()

Clears the contents of the element.

#### Return

`ContainerElement` — The current element.

---

### copy()

Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a parent.

#### Return

`ContainerElement` — The new copy.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### editAsText()

Obtains a `Text` version of the current element, for editing.

Use `editAsText` for manipulating the elements contents as rich text. The `editAsText` mode ignores non-text elements (such as `InlineImage` and `HorizontalRule`).

Child elements fully contained within a deleted text range are removed from the element.

```
const body =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert two paragraphs separated by a paragraph containing an
// horizontal rule.
body.insertParagraph(0, 'An editAsText sample.');
body.insertHorizontalRule(0);
body.insertParagraph(0, 'An example.');

// Delete " sample.\n\n An" removing the horizontal rule in the process.
body.editAsText().deleteText(14, 25);
```

#### Return

`Text` — a text version of the current element

---

### findElement(elementType)

Searches the contents of the element for a descendant of the specified type.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `elementType` | `ElementType` | The type of element to search for. |

#### Return

`RangeElement|null` — A search result indicating the position of the search element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### findElement(elementType, from)

Searches the contents of the element for a descendant of the specified type, starting from the specified `RangeElement`.

```
const body =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Define the search parameters.

let searchResult = null;

// Search until the paragraph is found.
while (
    (searchResult = body.findElement(
         DocumentApp.ElementType.PARAGRAPH,
         searchResult,
         ))) {
  const par = searchResult.getElement().asParagraph();
  if (par.getHeading() === DocumentApp.ParagraphHeading.HEADING1) {
    // Found one, update and stop.
    par.setText('This is the first header.');
    break;
  }
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `elementType` | `ElementType` | The type of element to search for. |
| `from` | `RangeElement` | The search result to search from. |

#### Return

`RangeElement|null` — A search result indicating the next position of the search element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### findText(searchPattern)

Searches the contents of the element for the specified text pattern using regular expressions.

A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block contained in the current element.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `searchPattern` | `String` | the pattern to search for |

#### Return

`RangeElement|null` — a search result indicating the position of the search text, or null if there is no match

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### findText(searchPattern, from)

Searches the contents of the element for the specified text pattern, starting from a given search result.

A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block contained in the current element.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `searchPattern` | `String` | the pattern to search for |
| `from` | `RangeElement` | the search result to search from |

#### Return

`RangeElement|null` — a search result indicating the next position of the search text, or null if there is no match

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getChild(childIndex)

Retrieves the child element at the specified child index.

```
const body =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Obtain the first element in the tab.
const firstChild = body.getChild(0);

// If it's a paragraph, set its contents.
if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
  firstChild.asParagraph().setText('This is the first paragraph.');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | The index of the child element to retrieve. |

#### Return

`Element` — The child element at the specified index.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getChildIndex(child)

Retrieves the child index for the specified child element.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `child` | `Element` | The child element for which to retrieve the index. |

#### Return

`Integer` — The child index.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getLinkUrl()

Retrieves the link url.

#### Return

`String|null` — the link url, or null if the element contains multiple values for this attribute

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getNextSibling()

Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.

#### Return

`Element|null` — The next sibling element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getNumChildren()

Retrieves the number of children.

```
const body =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Log the number of elements in the tab.
Logger.log(\`There are ${body.getNumChildren()} elements in the tab's body.\`);
```

#### Return

`Integer` — The number of children.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getParent()

Retrieves the element's parent element.

The parent element contains the current element.

#### Return

`ContainerElement|null` — The parent element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getPreviousSibling()

Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.

#### Return

`Element|null` — The previous sibling element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getText()

Retrieves the contents of the element as a text string.

#### Return

`String` — the contents of the element as text string

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getTextAlignment()

Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

#### Return

`TextAlignment|null` — the type of text alignment, or `null` if the text contains multiple types of text alignments or if the text alignment has never been set

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### isAtDocumentEnd()

Determines whether the element is at the end of the `Document`.

#### Return

`Boolean` — Whether the element is at the end of the tab.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

`ContainerElement|null` — The merged element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

`ContainerElement|null` — The removed element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### replaceText(searchPattern, replacement)

Replaces all occurrences of a given text pattern with a given replacement string, using regular expressions.

The search pattern is passed as a string, not a JavaScript regular expression object. Because of this you'll need to escape any backslashes in the pattern.

This methods uses Google's [RE2](https://github.com/google/re2) regular expression library, which limits the [supported syntax](https://github.com/google/re2/wiki/Syntax).

The provided regular expression pattern is independently matched against each text block contained in the current element.

```
const body =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Clear the text surrounding "Apps Script", with or without text.
body.replaceText('^.*Apps ?Script.*$', 'Apps Script');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `searchPattern` | `String` | the regex pattern to search for |
| `replacement` | `String` | the text to use as replacement |

#### Return

`Element` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

`ContainerElement` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setLinkUrl(url)

Sets the link url.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | the link url |

#### Return

`ContainerElement` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setTextAlignment(textAlignment)

Sets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the entire first paragraph in the active tab be superscript.
const documentTab =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
const text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `textAlignment` | `TextAlignment` | the type of text alignment to apply |

#### Return

`ContainerElement` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
