---
source: https://developers.google.com/apps-script/reference/document/table-cell
root: apps-script
fetched_at: 2026-04-23T15:19:55.449Z
---

# Class TableCell

## Page Summary

- A TableCell is an element representing a table cell, always contained within a TableRow.
- TableCell elements can contain ListItem, Paragraph, or Table elements.
- The TableCell element provides methods to append and insert various elements like HorizontalRule, Image, ListItem, Paragraph, and Table.
- You can retrieve information about a TableCell such as its attributes, background color, link URL, padding, and parent elements.
- TableCell offers methods to manipulate its content and structure, including clearing contents, copying, editing as text, finding elements or text, merging with a preceding sibling, removing children, and setting attributes and various formatting options like background color, link URL, padding, text alignment, and vertical alignment.

An element representing a table cell. A `TableCell` is always contained within a `TableRow` and may contain `ListItem`, `Paragraph`, or elements. For more information on document structure, see the [guide to extending Google Docs](../../guides/docs.md#structure_of_a_document).

## Detailed documentation

### appendHorizontalRule()

Creates and appends a new `HorizontalRule`.

The `HorizontalRule` will be contained in a new `Paragraph`.

#### Return

`HorizontalRule` — the new horizontal rule

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendImage(image)

Creates and appends a new `InlineImage` from the specified image blob.

The `InlineImage` will be contained in a new `Paragraph`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `image` | `BlobSource` | the image data |

#### Return

`InlineImage` — the new image

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendImage(image)

Appends the given `InlineImage`.

The `InlineImage` will be contained in a new `Paragraph`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `image` | `InlineImage` | the image data |

#### Return

`InlineImage` — the appended image

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendListItem(listItem)

Appends the given `ListItem`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `listItem` | `ListItem` | the list item to append |

#### Return

`ListItem` — the appended list item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendListItem(text)

Creates and appends a new `ListItem`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | the text contents |

#### Return

`ListItem` — the new list item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendParagraph(paragraph)

Appends the given `Paragraph`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `paragraph` | `Paragraph` | the paragraph to append |

#### Return

`Paragraph` — the appended paragraph

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendParagraph(text)

Creates and appends a new `Paragraph`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | the text contents |

#### Return

`Paragraph` — the new paragraph

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendTable()

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendTable(cells)

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cells` | `String[][]` | the text contents of the table cells to add to the new table |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendTable(table)

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `table` |  | the table to append |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### clear()

Clears the contents of the element.

#### Return

`TableCell` — The current element.

---

### copy()

Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a parent.

#### Return

`TableCell` — The new copy.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

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

### getBackgroundColor()

Retrieves the background color.

#### Return

`String|null` — the background color, formatted in CSS notation (like `'#ffffff'`)

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getColSpan()

Retrieves the column span, which is the number of columns of table cells this cell spans. Non-merged cells have a col span of 1.

#### Return

`Integer` — the column span or 0 for a cell which is merged over by another cell

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getLinkUrl()

Retrieves the link url.

#### Return

`String|null` — the link url, or null if the element contains multiple values for this attribute

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

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getPaddingBottom()

Retrieves the bottom padding, in points.

#### Return

`Number|null` — the bottom padding, in points

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getPaddingLeft()

Retrieves the left padding, in points.

#### Return

`Number|null` — the left padding, in points

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getPaddingRight()

Retrieves the right padding, in points.

#### Return

`Number|null` — the right padding, in points

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getPaddingTop()

Retrieves the top padding, in points.

#### Return

`Number|null` — the top padding, in points

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

### getParentRow()

Retrieves the `TableRow` containing the current `TableCell`.

#### Return

`TableRow|null` — the table row containing the current cell

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getParentTable()

#### Return

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

### getRowSpan()

Retrieves the row span, which is the number of rows of table cells this cell spans. Non-merged cells have a row span of 1.

#### Return

`Integer` — the row span or 0 for a cell which is merged over by another cell

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getText()

Retrieves the contents of the element as a text string.

#### Return

`String` — the contents of the element as text string

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getTextAlignment()

Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

#### Return

`TextAlignment|null` — the type of text alignment, or `null` if the text contains multiple types of text alignments or if the text alignment has never been set

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

### getVerticalAlignment()

Retrieves the `VerticalAlignment`.

#### Return

`VerticalAlignment|null` — the vertical alignment

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getWidth()

Retrieves the width of the column containing the cell, in points.

#### Return

`Number|null` — the column width, in points

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertHorizontalRule(childIndex)

Creates and inserts a new `HorizontalRule` at the specified index.

The horizontal rule will be contained in a new `Paragraph`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |

#### Return

`HorizontalRule` — the new horizontal rule

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertImage(childIndex, image)

Creates and inserts an `InlineImage` from the specified image blob, at the specified index.

The image will be contained in a new `Paragraph`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |
| `image` | `BlobSource` | the image data |

#### Return

`InlineImage` — the inserted inline image

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertImage(childIndex, image)

Inserts the given `InlineImage` at the specified index.

The image will be contained in a new `Paragraph`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |
| `image` | `InlineImage` | the image to insert |

#### Return

`InlineImage` — the inserted inline image

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertListItem(childIndex, listItem)

Inserts the given `ListItem` at the specified index.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |
| `listItem` | `ListItem` | the list item to insert |

#### Return

`ListItem` — inserted new list item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertListItem(childIndex, text)

Creates and inserts a new `ListItem` at the specified index.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |
| `text` | `String` | the text contents |

#### Return

`ListItem` — the new list item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertParagraph(childIndex, paragraph)

Inserts the given `Paragraph` at the specified index.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |
| `paragraph` | `Paragraph` | the paragraph to insert |

#### Return

`Paragraph` — the inserted paragraph

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertParagraph(childIndex, text)

Creates and inserts a new `Paragraph` at the specified index.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |
| `text` | `String` | the text contents |

#### Return

`Paragraph` — the new paragraph

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertTable(childIndex)

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertTable(childIndex, cells)

Creates and inserts a new containing the specified cells, at the specified index.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert |
| `cells` | `String[][]` | the text contents of the table cells to add to the new table |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertTable(childIndex, table)

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |
| `table` |  | the table to insert |

#### Return

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

`TableCell|null` — The merged element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### removeChild(child)

Removes the specified child element.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `child` | `Element` | the child element to remove |

#### Return

`TableCell` — the current element

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

`TableCell|null` — The removed element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

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

`TableCell` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setBackgroundColor(color)

Sets the background color.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | the background color, formatted in CSS notation (like `'#ffffff'`) |

#### Return

`TableCell` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

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

`TableCell` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setPaddingBottom(paddingBottom)

Sets the bottom padding, in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `paddingBottom` | `Number` | the bottom padding, in points |

#### Return

`TableCell` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setPaddingLeft(paddingLeft)

Sets the left padding, in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `paddingLeft` | `Number` | the left padding, in points |

#### Return

`TableCell` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setPaddingRight(paddingRight)

Sets the right padding, in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `paddingRight` | `Number` | The right padding, in points. |

#### Return

`TableCell` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setPaddingTop(paddingTop)

Sets the top padding, in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `paddingTop` | `Number` | the top padding, in points |

#### Return

`TableCell` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setText(text)

Sets the contents as plain text.

Note: existing contents are cleared.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | the new text contents |

#### Return

`TableCell` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

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

`TableCell` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setVerticalAlignment(alignment)

Sets the vertical alignment.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alignment` | `VerticalAlignment` | the vertical alignment |

#### Return

`TableCell` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setWidth(width)

Sets the width of the column containing the current cell, in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | `Number` | the column width, in points |

#### Return

`TableCell` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
