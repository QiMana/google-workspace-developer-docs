---
source: https://developers.google.com/apps-script/reference/document/table
root: apps-script
fetched_at: 2026-04-23T15:19:56.769Z
---

# Class Table

## Page Summary

- A `Table` element can only contain `TableRow` elements.
- Tables can be efficiently built from a string array, especially for large tables.
- Various methods are available to manipulate `Table` elements, including appending and inserting rows, clearing content, copying, editing as text, finding elements or text, and managing attributes and formatting like borders and column widths.
- Methods for navigating the document structure, such as getting children and siblings, and checking if the element is at the document end are also provided.
- You can remove rows or the entire table element using specific methods.
- Text within the table can be replaced using regular expressions, and text alignment can be set.

An element representing a table. A `Table` may only contain `TableRow` elements. For more information on document structure, see the [guide to extending Google Docs](../../guides/docs.md#structure_of_a_document).

When creating a `Table` that contains a large number of rows or cells, consider building it from a string array, as shown in the following example.

```
const body =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Create a two-dimensional array containing the cell contents.
const cells = [
  ['Row 1, Cell 1', 'Row 1, Cell 2'],
  ['Row 2, Cell 1', 'Row 2, Cell 2'],
];

// Build a table from the array.
body.appendTable(cells);
```

## Detailed documentation

### appendTableRow()

Creates and appends a new `TableRow`.

#### Return

`TableRow` — the new table row element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendTableRow(tableRow)

Appends the given `TableRow`.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first table in the tab and copies the second row.
const table = body.getTables()[0];
const row = table.getChild(1).copy();

// Adds the copied row to the bottom of the table.
const tableRow = table.appendTableRow(row);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `tableRow` | `TableRow` | The table row to append. |

#### Return

`TableRow` — The appended table row element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### clear()

Clears the contents of the element.

#### Return

`Table` — The current element.

---

### copy()

Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a parent.

#### Return

`Table` — The new copy.

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

### getBorderColor()

Retrieves the border color.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first table.
const table = body.getTables()[0];

// Sets the border color of the first table.
table.setBorderColor('#00FF00');

// Logs the border color of the first table to the console.
console.log(table.getBorderColor());
```

#### Return

`String|null` — The border color, formatted in CSS notation (like `'#ffffff'`).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getBorderWidth()

Retrieves the border width, in points.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first table.
const table = body.getTables()[0];

// Sets the border width of the first table.
table.setBorderWidth(20);

// Logs the border width of the first table.
console.log(table.getBorderWidth());
```

#### Return

`Number|null` — The border width, in points.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getCell(rowIndex, cellIndex)

Retrieves the `TableCell` at the specified row and cell indices.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first table.
const table = body.getTables()[0];

// Gets the cell of the table's third row and second column.
const cell = table.getCell(2, 1);

// Logs the cell text to the console.
console.log(cell.getText());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowIndex` | `Integer` | The index of the row containing the cell to retrieve. |
| `cellIndex` | `Integer` | The index of the cell to retrieve. |

#### Return

`TableCell|null` — The table cell.

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

### getColumnWidth(columnIndex)

Retrieves the width of the specified table column, in points.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first table.
const table = body.getTables()[0];

// Sets the width of the second column to 100 points.
const columnWidth = table.setColumnWidth(1, 100);

// Gets the width of the second column and logs it to the console.
console.log(columnWidth.getColumnWidth(1));
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The column index. |

#### Return

`Number|null` — The column width, in points.

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

### getNumRows()

Retrieves the number of `TableRows`.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first table.
const table = body.getTables()[0];

// Logs the number of rows of the first table to the console.
console.log(table.getNumRows());
```

#### Return

`Integer` — The number of table rows.

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

### getRow(rowIndex)

Retrieves the `TableRow` at the specified row index.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first table and logs the text of first row to the console.
const table = body.getTables()[0];
console.log(table.getRow(0).getText());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowIndex` | `Integer` | The index of the row to retrieve. |

#### Return

`TableRow|null` — The table row.

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

### insertTableRow(childIndex)

Creates and inserts a new `TableRow` at the specified index.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |

#### Return

`TableRow` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertTableRow(childIndex, tableRow)

Inserts the given `TableRow` at the specified index.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |
| `tableRow` | `TableRow` | the table row to insert |

#### Return

`TableRow` — the inserted table row element

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

### removeChild(child)

Removes the specified child element.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first table.
const table = body.getTables()[0];

// Finds the first table row and removes it.
const element = table.findElement(DocumentApp.ElementType.TABLE_ROW);
table.removeChild(element.getElement());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `child` | `Element` | The child element to remove. |

#### Return

`Table` — The current element.

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

`Table|null` — The removed element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### removeRow(rowIndex)

Removes the `TableRow` at the specified row index.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first table and removes its second row.
const table = body.getTables()[0];
table.removeRow(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowIndex` | `Integer` | The index of the row to remove. |

#### Return

`TableRow` — The removed row.

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

`Table` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setBorderColor(color)

Sets the border color.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first table.
const table = body.getTables()[0];

// Sets the border color of the table to green.
table.setBorderColor('#00FF00');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The border color, formatted in CSS notation (like `'#ffffff'`). |

#### Return

`Table` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setBorderWidth(width)

Sets the border width, in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | `Number` | the border width, in points |

#### Return

`Table` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setColumnWidth(columnIndex, width)

Sets the width of the specified column, in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | the column index |
| `width` | `Number` | the border width, in points |

#### Return

`Table` — the current element

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

`Table` — the current element

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

`Table` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
