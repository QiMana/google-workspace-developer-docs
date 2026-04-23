---
source: https://developers.google.com/apps-script/reference/document/paragraph
root: apps-script
fetched_at: 2026-04-23T15:19:51.837Z
---

# Class Paragraph

## Page Summary

- Several methods are available to manipulate elements within a Google Document using Apps Script, including replacing text, setting alignment, and adjusting spacing.
- Methods like `replaceText` use regular expressions with limitations based on Google's RE2 library.
- Various methods allow setting paragraph attributes, heading styles, indentations, and line spacing.
- Authorization with specific scopes, such as `https://www.googleapis.com/auth/documents.currentonly` or `https://www.googleapis.com/auth/documents`, is required to use these methods.
- You can set the entire text content of a paragraph using the `setText` method, which replaces existing content.

An element representing a paragraph. A `Paragraph` may contain `Equation`, `Footnote`, `HorizontalRule`, `InlineDrawing`, `InlineImage`, `PageBreak`, and `Text` elements. For more information on document structure, see the [guide to extending Google Docs](https://developers.google.com/apps-script/guides/docs#structure_of_a_document).

`Paragraphs` may not contain new-line characters. New-line characters ("\\n") are converted to line-break characters ("\\r").

```
const body =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Append a tab header paragraph.
const header = body.appendParagraph('A Document');
header.setHeading(DocumentApp.ParagraphHeading.HEADING1);

// Append a section header paragraph.
const section = body.appendParagraph('Section 1');
section.setHeading(DocumentApp.ParagraphHeading.HEADING2);

// Append a regular paragraph.
body.appendParagraph('This is a typical paragraph.');
```

## Detailed documentation

### addPositionedImage(image)

Creates and inserts a new `PositionedImage` from the specified image blob.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Fetches the specified image URL.
const image = UrlFetchApp.fetch(
    'https://fonts.gstatic.com/s/i/productlogos/apps_script/v10/web-24dp/logo_apps_script_color_1x_web_24dp.png',
);

// Adds the image to the tab, anchored to the first paragraph.
paragraph.addPositionedImage(image);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `image` | `BlobSource` | The image data. |

#### Return

`PositionedImage` — The new positioned image.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendHorizontalRule()

Creates and appends a new `HorizontalRule`.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Adds a horizontal line under the first paragraph.
paragraph.appendHorizontalRule();
```

#### Return

`HorizontalRule` — The new horizontal rule.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendInlineImage(image)

Creates and appends a new `InlineImage` from the specified image blob.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Fetches the image from the specified image URL.
const image = UrlFetchApp.fetch(
    'https://fonts.gstatic.com/s/i/productlogos/apps_script/v10/web-96dp/logo_apps_script_color_1x_web_96dp.png',
);

// Adds the image to the first paragraph.
paragraph.appendInlineImage(image);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `image` | `BlobSource` | The image data. |

#### Return

`InlineImage` — The appended image.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendInlineImage(image)

Appends the given `InlineImage`.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Makes a copy of the first image in the body.
const image = body.getImages()[0].copy();

// Adds the image to the first paragraph.
paragraph.appendInlineImage(image);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `image` | `InlineImage` | The image data. |

#### Return

`InlineImage` — The appended image.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendPageBreak()

Creates and appends a new `PageBreak`.

Note: `PageBreaks` may not be contained within `TableCells`. If the current element is contained in a table cell, an exception will be thrown.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Adds a page break after the first paragraph.
paragraph.appendPageBreak();
```

#### Return

`PageBreak` — The new page break element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendPageBreak(pageBreak)

Appends the given `PageBreak`.

Note: `PageBreaks` can't be contained within `TableCells`. If the current element exists in a table cell, the script throws an exception.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Adds a page break after the first paragraph.
const pageBreak = paragraph.appendPageBreak();

// Makes a copy of the page break.
const newPageBreak = pageBreak.copy();

// Adds the copied page break to the paragraph.
paragraph.appendPageBreak(newPageBreak);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pageBreak` | `PageBreak` | The page break to append. |

#### Return

`PageBreak` — The appended page break element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendText(text)

Creates and appends a new `Text` element with the specified contents.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Adds a string to the paragraph.
paragraph.appendText('This is a new sentence.');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text contents. |

#### Return

`Text` — The new text element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### appendText(text)

Appends the given `Text` element.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the text from the first paragraph in the body.
const paragraph1 = body.getParagraphs()[0];
const text = paragraph1.getText();

// Gets the third paragraph in the body.
const paragraph3 = body.getParagraphs()[2];

// Adds the text from the first paragraph to the third paragraph.
paragraph3.appendText(text);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `Text` | The text element to append. |

#### Return

`Text` — The appended text element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### clear()

Clears the contents of the element.

#### Return

`Paragraph` — The current element.

---

### copy()

Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a parent.

#### Return

`Paragraph` — The new copy.

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

### getAlignment()

Retrieves the `HorizontalAlignment`.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Sets the horizontal alignment to left for the first paragraph.
paragraph.setAlignment(DocumentApp.HorizontalAlignment.LEFT);

// Gets the horizontal alignment of the first paragraph and logs it to the
// console.
console.log(paragraph.getAlignment().toString());
```

#### Return

`HorizontalAlignment|null` — The alignment.

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

### getHeading()

Retrieves the `ParagraphHeading`.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab('123abc').asDocumentTab().getBody();

// Adds a paragraph to the body.
const paragraph = body.appendParagraph('Title heading');

// Sets the paragraph heading style to 'Title.'
paragraph.setHeading(DocumentApp.ParagraphHeading.TITLE);

// Gets the heading style and logs it to the console.
console.log(paragraph.getHeading().toString());
```

#### Return

`ParagraphHeading|null` — The heading.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getIndentEnd()

Retrieves the end indentation, in points.

#### Return

`Number|null` — the end indentation, in points

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getIndentFirstLine()

Retrieves the first line indentation, in points.

#### Return

`Number|null` — the first line indentation, in points

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getIndentStart()

Retrieves the start indentation.

#### Return

`Number|null` — the start indentation

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getLineSpacing()

Retrieves the line spacing, in points.

#### Return

`Number|null` — the line spacing, in points

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

### getPositionedImage(id)

Gets a `PositionedImage` by the image's ID.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | the image id |

#### Return

`PositionedImage` — the positioned image

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getPositionedImages()

Gets all `PositionedImage` objects anchored to the paragraph.

#### Return

`PositionedImage[]` — a list of positioned images

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

### getSpacingAfter()

Retrieves the spacing after the element, in points.

#### Return

`Number|null` — the spacing after the element, in points

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getSpacingBefore()

Retrieves the spacing before the element, in points.

#### Return

`Number|null` — the spacing before the element, in points

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

### insertHorizontalRule(childIndex)

Creates and inserts a `HorizontalRule` at the specified index.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |

#### Return

`HorizontalRule` — the new horizontal rule element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertInlineImage(childIndex, image)

Creates and inserts a new `InlineImage` from the specified image blob, at the specified index.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |
| `image` | `BlobSource` | the image data |

#### Return

`InlineImage` — the inserted inline image element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertInlineImage(childIndex, image)

Inserts the given `InlineImage` at the specified index.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |
| `image` | `InlineImage` | the image data |

#### Return

`InlineImage` — the inserted inline image element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertPageBreak(childIndex)

Creates and inserts a new `PageBreak` at the specified index.

Note: `PageBreaks` may not be contained within `TableCells`. If the current element is contained in a table cell, an exception will be thrown.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |

#### Return

`PageBreak` — the new page break element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertPageBreak(childIndex, pageBreak)

Inserts the given `PageBreak` at the specified index.

Note: `PageBreaks` may not be contained within `TableCells`. If the current element is contained in a table cell, an exception will be thrown.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |
| `pageBreak` | `PageBreak` | the p\[age break to insert |

#### Return

`PageBreak` — the inserted page break element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertText(childIndex, text)

Creates and inserts a new text element at the specified index.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |
| `text` | `String` | the text contents |

#### Return

`Text` — the new text element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### insertText(childIndex, text)

Inserts the given `Text` element at the specified index, with the specified text contents.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `childIndex` | `Integer` | the index at which to insert the element |
| `text` | `Text` | the text element to insert |

#### Return

`Text` — the inserted text element

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

### isLeftToRight()

Retrieves the left-to-right setting.

#### Return

`Boolean|null` — the left-to-right setting

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

`Paragraph|null` — The merged element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

`Paragraph` — the current element

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

`Paragraph|null` — The removed element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### removePositionedImage(id)

Removes a `PositionedImage` by the image's ID.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | the image id |

#### Return

`Boolean` — whether or not the specified image was removed

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

### setAlignment(alignment)

Sets the `HorizontalAlignment`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alignment` | `HorizontalAlignment` | the horizontal alignment |

#### Return

`Paragraph` — the current element

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

`Paragraph` — The current element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setHeading(heading)

Sets the `ParagraphHeading`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `heading` | `ParagraphHeading` | the heading |

#### Return

`Paragraph` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setIndentEnd(indentEnd)

Sets the end indentation, in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `indentEnd` | `Number` | the end indentation, in points |

#### Return

`Paragraph` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setIndentFirstLine(indentFirstLine)

Sets the first line indentation, in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `indentFirstLine` | `Number` | the first line indentation, in points |

#### Return

`Paragraph` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setIndentStart(indentStart)

Sets the start indentation, in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `indentStart` | `Number` | the start indentation, in points |

#### Return

`Paragraph` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setLeftToRight(leftToRight)

Sets the left-to-right setting.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `leftToRight` | `Boolean` | the left-to-right setting |

#### Return

`Paragraph` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setLineSpacing(multiplier)

Sets the line spacing, as a quantity indicating the number of lines to use for spacing.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `multiplier` | `Number` | the number of lines |

#### Return

`Paragraph` — the current element

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

`Paragraph` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setSpacingAfter(spacingAfter)

Sets the spacing after the element, in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `spacingAfter` | `Number` | the spacing after the element, in points |

#### Return

`Paragraph` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setSpacingBefore(spacingBefore)

Sets the spacing before the element, in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `spacingBefore` | `Number` | the spacing before the element, in points |

#### Return

`Paragraph` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setText(text)

Sets the contents of the paragraph as text.

Note: existing contents are cleared.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | the new text contents |

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

`Paragraph` — the current element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
