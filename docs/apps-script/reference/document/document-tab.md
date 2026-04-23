---
source: https://developers.google.com/apps-script/reference/document/document-tab
root: apps-script
fetched_at: 2026-04-23T15:19:34.219Z
---

# Class DocumentTab

## Page Summary

- A DocumentTab is a rich text container within a document, capable of holding elements like tables and lists.
- You can retrieve a DocumentTab using `Document.getTabs()[tabIndex].asDocumentTab()` or `Document.getTab(tabId).asDocumentTab()`.
- DocumentTab provides methods to manage bookmarks, headers, footers, named ranges, and access the main body content of the tab.
- Key methods allow adding and retrieving bookmarks, adding headers and footers, adding and getting named ranges by name or ID, and accessing the main content body and footnotes.
- You can create new Position and Range objects relative to elements within the DocumentTab for various manipulation purposes.

A document tab, containing rich text and elements such as tables and lists.

Retrieve a document tab using `Document.getTabs()[tabIndex].asDocumentTab()`.

```
// Get a specific document tab based on the tab ID.
// TODO(developer): Replace the IDs with your own.
const documentTab =
    DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();
```

## Detailed documentation

### addBookmark(position)

Adds a `Bookmark` at the given `Position`.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your
// script from within a Google Docs file, you can use
// DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab =
    DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();

// Gets the tab body and adds a paragraph.
const paragraph = documentTab.getBody().appendParagraph('My new paragraph.');

// Creates a position at the first character of the paragraph text.
const position = documentTab.newPosition(paragraph.getChild(0), 0);

// Adds a bookmark at the first character of the paragraph text.
const bookmark = documentTab.addBookmark(position);

// Logs the bookmark ID to the console.
console.log(bookmark.getId());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `position` | `Position` | The position of the new bookmark. |

#### Return

`Bookmark` — The new bookmark.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addFooter()

Adds a tab footer section, if none exists.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your
// script from within a Google Docs file, you can use
// DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab =
    DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();

// Adds a footer to the tab.
const footer = documentTab.addFooter();

// Sets the footer text to 'This is a footer.'
footer.setText('This is a footer');
```

#### Return

`FooterSection` — The tab footer.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addHeader()

Adds a tab header section, if none exists.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your
// script from within a Google Docs file, you can use
// DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab =
    DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();

// Adds a header to the tab.
const header = documentTab.addHeader();

// Sets the header text to 'This is a header.'
header.setText('This is a header');
```

#### Return

`HeaderSection` — The tab header.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addNamedRange(name, range)

Adds a `NamedRange`, which is a `Range` that has a name and ID to use for later retrieval. Names aren't necessarily unique, even across tabs; several different ranges in the same document can share the same name, much like a class in HTML. By contrast, IDs are unique within the document, like an ID in HTML. After you add a `NamedRange` you can't modify it, you can only remove it.

Any script that accesses the tab can access a `NamedRange`. To avoid unintended conflicts between scripts, consider prefixing range names with a unique string.

```
// Creates a named range that includes every table in a tab by its ID.
// TODO(developer): Replace the IDs with your own.
const documentTab =
    DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();
const rangeBuilder = documentTab.newRange();
const tables = documentTab.getBody().getTables();
for (let i = 0; i < tables.length; i++) {
  rangeBuilder.addElement(tables[i]);
}
documentTab.addNamedRange('Tab t.0 tables', rangeBuilder.build());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name for the range, which doesn't need to be unique; range names must be between 1-256 characters. |
| `range` | `Range` | The range of elements to associate with the name; the range can be a [search result](https://developers.google.com/apps-script/reference/document/body#findText\(String\)) or manually constructed with `newRange()`. |

#### Return

`NamedRange` — The `NamedRange`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getBody()

Retrieves the tab's `Body`.

Tabs may contain different types of sections (for example, `HeaderSection`, `FooterSection`). The active section for a tab is the `Body`.

Element methods in `DocumentTab` delegate to the `Body`.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your
// script from within a Google Docs file, you can use
// DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab =
    DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();

// Gets the tab body.
const body = documentTab.getBody();

// Gets the body text and logs it to the console.
console.log(body.getText());
```

#### Return

`Body` — The tab's body section.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getBookmark(id)

Gets the `Bookmark` with the given ID. This method returns `null` if no such `Bookmark` exists within this tab.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your
// script from within a Google Docs file, you can use
// DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab =
    DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();

// Gets the bookmark by its ID.
const bookmark = documentTab.getBookmark('id.xyz654321');

// If the bookmark exists within the tab, logs the character offset of its
// position to the console. Otherwise, logs 'No bookmark exists with the given
// ID.' to the console.
if (bookmark) {
  console.log(bookmark.getPosition().getOffset());
} else {
  console.log('No bookmark exists with the given ID.');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID for the `Bookmark`. |

#### Return

`Bookmark|null` — The `Bookmark` with the given ID, or `null` if no such `Bookmark` exists within the tab.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getBookmarks()

Gets all `Bookmark` objects in the tab.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your
// script from within a Google Docs file, you can use
// DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab =
    DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();

// Gets all of the bookmarks in the tab.
const bookmarks = documentTab.getBookmarks();

// Logs the number of bookmarks in the tab to the console.
console.log(bookmarks.length);
```

#### Return

`Bookmark[]` — An array of the `Bookmark` objects in the tab.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getFooter()

Retrieves the tab's footer section, if one exists.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your
// script from within a Google Docs file, you can use
// DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab =
    DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();

// Gets the text of the tab's footer and logs it to the console.
console.log(documentTab.getFooter().getText());
```

#### Return

`FooterSection|null` — The tab's footer.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getFootnotes()

Retrieves all the `Footnote` elements in the tab's body.

Calls to `getFootnotes` cause an iteration over the tab's elements. For large tabs, avoid unnecessary calls to this method.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your
// script from within a Google Docs file, you can use
// DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab =
    DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();

// Gets the first footnote.
const footnote = documentTab.getFootnotes()[0];

// Logs footnote contents to the console.
console.log(footnote.getFootnoteContents().getText());
```

#### Return

`Footnote[]|null` — The tab's footnotes.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getHeader()

Retrieves the tab's header section, if one exists.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your
// script from within a Google Docs file, you can use
// DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab =
    DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();

// Gets the text of the tab's header and logs it to the console.
console.log(documentTab.getHeader().getText());
```

#### Return

`HeaderSection|null` — The tab's header.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getNamedRangeById(id)

Gets the `NamedRange` with the given ID. This method returns `null` if no such `NamedRange` exists in the tab. Names are not necessarily unique, even across tabs; several different ranges in the same document may share the same name, much like a class in HTML. By contrast, IDs are unique within the tab, like an ID in HTML.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The range's ID, which is unique within the tab. |

#### Return

`NamedRange|null` — The `NamedRange` with the given ID, or `null` if no such range exists in the tab.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getNamedRanges()

Gets all `NamedRange` objects in the tab.

A `NamedRange` can be accessed by any script that accesses the tab. To avoid unintended conflicts between scripts, consider prefixing range names with a unique string.

#### Return

`NamedRange[]` — An array of the `NamedRange` objects in the tab, possibly including multiple ranges with the same name.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getNamedRanges(name)

Gets all `NamedRange` objects in the tab with the given name. Names are not necessarily unique, even across tabs; several different ranges in the same document may share the same name, much like a class in HTML. By contrast, IDs are unique within the tab, like an ID in HTML.

A `NamedRange` can be accessed by any script that accesses the tab. To avoid unintended conflicts between scripts, consider prefixing range names with a unique string.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The range's name, which is not necessarily unique. |

#### Return

`NamedRange[]` — An array of the `NamedRange` objects in the tab with the given name.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### newPosition(element, offset)

Creates a new `Position`, which is a reference to a location in the tab, relative to a specific element. The user's cursor is represented as a `Position`, among other uses.

```
// Append a paragraph, then place the user's cursor after the first word of the
// new paragraph.
// TODO(developer): Replace the IDs with your own.
const doc = DocumentApp.openById('123abc');
const documentTab = doc.getTab('123abc').asDocumentTab();
const paragraph = documentTab.getBody().appendParagraph('My new paragraph.');
const position = documentTab.newPosition(paragraph.getChild(0), 2);
doc.setCursor(position);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `element` | `Element` | The element that contains the newly created `Position` to; this must be either a `Text` element or a container element like `Paragraph`. |
| `offset` | `Integer` | For `Text` elements, the number of characters before the `Position`; for other elements, the number of child elements before the `Position` within the same container element. |

#### Return

`Position` — The new `Position`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### newRange()

Creates a builder used to construct `Range` objects from tab elements.

```
// Change the user's selection to a range that includes every table in the tab.
// TODO(developer): Replace the IDs with your own.
const doc = DocumentApp.openById('123abc');
const documentTab = doc.getTab('123abc').asDocumentTab();
const rangeBuilder = documentTab.newRange();
const tables = documentTab.getBody().getTables();
for (let i = 0; i < tables.length; i++) {
  rangeBuilder.addElement(tables[i]);
}
doc.setSelection(rangeBuilder.build());
```

#### Return

`RangeBuilder` — The new builder.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
