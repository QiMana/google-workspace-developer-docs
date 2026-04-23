---
source: https://developers.google.com/apps-script/reference/document/document.html
root: apps-script
fetched_at: 2026-04-23T15:19:35.305Z
---

# Class Document

## Page Summary

- Documents can contain one or more tabs, each with rich text and elements like tables and lists.
- Documents can be opened or created using `DocumentApp`.
- Methods that modify text contents operate on the active or first tab; scripts can be migrated to support tabs using `getTabs()` and `Tab.asDocumentTab()`.
- The `Document` class provides methods for managing document content, permissions, and properties, such as adding elements like bookmarks, footers, and headers, managing editors and viewers, and retrieving document information like ID, language, name, and URL.

A document, containing one or more `Tab` objects, each of which contains rich text and elements such as tables and lists.

Documents may be opened or created using `DocumentApp`.

```
// Open a document by ID.
let doc = DocumentApp.openById('<my-id>');

// Create and open a document.
doc = DocumentApp.create('Document Title');
```

Methods on the `Document` class that directly access and modify text contents operate on either the active tab (in scripts [bound](../../guides/bound.md) to a particular document) or the first tab (if an active one isn't available). Scripts relying on these methods (for example, `getBody()`) can be migrated to support tabs using `getTabs()` and then `Tab.asDocumentTab()`.

## Detailed documentation

### addBookmark(position)

Adds a `Bookmark` at the given `Position` to the first tab or, for scripts that are [bound](../../guides/bound.md) to a document, the active tab. To add a bookmark to any tab, use the `DocumentTab.addBookmark(position)` method.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the active or first tab's body and adds a paragraph.
const paragraph = doc.getBody().appendParagraph('My new paragraph.');

// Creates a position at the first character of the paragraph text.
const position = doc.newPosition(paragraph.getChild(0), 0);

// Adds a bookmark at the first character of the paragraph text.
const bookmark = doc.addBookmark(position);

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

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addEditor(emailAddress)

Adds the given user to the list of editors for the `Document`. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to add. |

#### Return

`Document` — This `Document`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addEditor(user)

Adds the given user to the list of editors for the `Document`. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to add. |

#### Return

`Document` — This `Document`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addEditors(emailAddresses)

Adds the given array of users to the list of editors for the `Document`. If any of the users were already on the list of viewers, this method promotes them out of the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddresses` | `String[]` | An array of email addresses of the users to add. |

#### Return

`Document` — This `Document`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addFooter()

Adds a footer section, if none exists, to the first tab or, for scripts that are [bound](../../guides/bound.md) to a document, the active tab. To add a footer section to any tab, use the `DocumentTab.addFooter()` method.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Adds a footer to the document's active or first tab.
const footer = doc.addFooter();

// Sets the footer text to 'This is a footer.'
footer.setText('This is a footer');
```

#### Return

`FooterSection` — The tab footer.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addHeader()

Adds a header section, if none exists, to the first tab or, for scripts that are [bound](../../guides/bound.md) to a document, the active tab. To add a header section to any tab, use the `DocumentTab.addHeader()` method.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Adds a header to the document's active or first tab.
const header = doc.addHeader();

// Sets the header text to 'This is a header.'
header.setText('This is a header');
```

#### Return

`HeaderSection` — The tab header.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addNamedRange(name, range)

Adds a `NamedRange`, which is a `Range` that has a name and ID to use for later retrieval, in the first tab or, for scripts that are [bound](../../guides/bound.md) to a document, the active tab. To add a `NamedRange` in any tab, use the `DocumentTab.addNamedRange(name, range)` method. Names aren't necessarily unique; several different ranges in the same document can share the same name, much like a class in HTML. By contrast, IDs are unique within the document, like an ID in HTML. After you add a `NamedRange` to a document, you can't modify it, you can only remove it.

Any script that accesses the document can access a `NamedRange`. To avoid unintended conflicts between scripts, consider prefixing range names with a unique string.

```
// Creates a named range that includes every table in the active tab.
const doc = DocumentApp.getActiveDocument();
const rangeBuilder = doc.newRange();
const tables = doc.getBody().getTables();
for (let i = 0; i < tables.length; i++) {
  rangeBuilder.addElement(tables[i]);
}
// Adds the named range to the document's active tab.
doc.addNamedRange('Document tables', rangeBuilder.build());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name for the range, which doesn't need to be unique; range names must be between 1-256 characters. |
| `range` | `Range` | The range of elements to associate with the name; the range can be [the active selection](#getSelection\(\)), a [search result](./body.md#findText(String)), or manually constructed with `newRange()`. |

#### Return

`NamedRange` — The `NamedRange`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addViewer(emailAddress)

Adds the given user to the list of viewers for the `Document`. If the user was already on the list of editors, this method has no effect.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to add. |

#### Return

`Document` — This `Document`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addViewer(user)

Adds the given user to the list of viewers for the `Document`. If the user was already on the list of editors, this method has no effect.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to add. |

#### Return

`Document` — This `Document`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### addViewers(emailAddresses)

Adds the given array of users to the list of viewers for the `Document`. If any of the users were already on the list of editors, this method has no effect for them.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddresses` | `String[]` | An array of email addresses of the users to add. |

#### Return

`Document` — This `Document`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getActiveTab()

Gets the user's currently active `Tab` in the document. A script can only access the active tab of the user who is running the script, and only if the script is [bound](../../guides/bound.md) to the document.

```
// Display a dialog box that shows the title of the tab that the
// user is currently viewing.
const tab = DocumentApp.getActiveDocument().getActiveTab();
DocumentApp.getUi().alert(\`ID of selected tab: ${tab.getTitle()}\`);
```

#### Return

`Tab|null` — The user's currently active `Tab`, or `null` if the script is not bound to the document.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getAs(contentType)

Retrieves the current `Document` contents as a blob of the specified type.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the document as a PDF.
const pdf = doc.getAs('application/pdf');

// Logs the name of the PDF to the console.
console.log(pdf.getName());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `contentType` | `String` | The MIME type to convert to; `'application/pdf'` and `'text/markdown'` are supported. |

#### Return

`Blob` — The current document as a blob.

---

### getBlob()

Retrieves the current `Document` contents as a blob.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Retrieves the current document's contents as a blob and logs it to the
// console.
console.log(doc.getBlob().getContentType());
```

#### Return

`Blob` — The current document as a blob.

---

### getBody()

Retrieves the first tab's `Body` or, for scripts that are [bound](../../guides/bound.md) to a document, the active tab's `DocumentBodySection`. To get the `DocumentBodySection` of any tab, use the `DocumentTab.getBody()` method.

Tabs may contain different types of sections (for example, `HeaderSection`, `FooterSection`). The active section for a tab is the `Body`.

Element methods in `Document` delegate to the active `Body`.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the active or first tab's body.
const body = doc.getBody();

// Gets the body text and logs it to the console.
console.log(body.getText());
```

#### Return

`Body` — The tab body section.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getBookmark(id)

Gets the `Bookmark` with the given ID in the first tab or, for scripts that are [bound](../../guides/bound.md) to a document, the active tab. To get a bookmark in any tab, use the `DocumentTab.getBookmark(id)` method. This method returns `null` if no such `Bookmark` exists within the tab.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the bookmark by its ID in the document's active or first tab.
const bookmark = doc.getBookmark('id.xyz654321');

// If the bookmark exists, logs the character offset of its position to the
// console. otherwise, logs 'No bookmark exists with the given ID.' to the
// console.
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

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getBookmarks()

Gets all `Bookmark` objects in the first tab or, for scripts that are [bound](../../guides/bound.md) to a document, the active tab. To get all bookmarks in any tab, use the `DocumentTab.getBookmarks()` method.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
const doc = DocumentApp.openById('123abc');

// Gets all of the bookmarks in the document's active or first tab.
const bookmarks = doc.getBookmarks();

// Logs the number of bookmarks in the tab to the console.
console.log(bookmarks.length);
```

#### Return

`Bookmark[]` — An array of the `Bookmark` objects in the tab.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getCursor()

Gets the user's cursor in the active tab. A script can only access the cursor of the user who is running the script, and only if the script is [bound](../../guides/bound.md) to the document.

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

#### Return

`Position|null` — A representation of the user's cursor, or `null` if the user does not have a cursor placed in the tab or if the script is not bound to the document.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getEditors()

Gets the list of editors for this `Document`.

#### Return

`User[]` — An array of users with edit permission.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getFooter()

Retrieves the first tab's footer section or, for scripts that are [bound](../../guides/bound.md) to a document, the active tab's footer section. To get the footer section of any tab, use the `DocumentTab.getFooter()` method.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the text of the active or first tab's footer and logs it to the console.
console.log(doc.getFooter().getText());
```

#### Return

`FooterSection|null` — The tab's footer.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getFootnotes()

Retrieves all the `Footnote` elements in the first tab's body or, for scripts that are [bound](../../guides/bound.md) to a document, the active tab's body. To get all the footnotes in any tab, use the `DocumentTab.getFootnotes()` method.

Calls to `getFootnotes` cause an iteration over the tab's elements. For large tabs, avoid unnecessary calls to this method.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the first footnote in the active or first tab's body.
const footnote = doc.getFootnotes()[0];

// Logs footnote contents to the console.
console.log(footnote.getFootnoteContents().getText());
```

#### Return

`Footnote[]` — The tab's footnotes.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getHeader()

Retrieves the first tab's header section or, for scripts that are [bound](../../guides/bound.md) to a document, the active tab's header section. To get the header section of any tab, use the `DocumentTab.getHeader()` method.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('123abc');

// Gets the text of the active or first tab's header and logs it to the console.
console.log(doc.getHeader().getText());
```

#### Return

`HeaderSection|null` — The tab's header.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getId()

Retrieves the document's unique identifier. The document ID is used with `DocumentApp.openById()` to open a specific document instance.

#### Return

`String` — The document's ID.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getLanguage()

Gets the document's language code. This is the language shown in the document editor's **File > Language**, which may not be the actual language that the document contains.

#### Return

`String|null` — The document language, or `null` if not defined.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getName()

Retrieves the title of the document.

#### Return

`String` — The document title.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getNamedRangeById(id)

Gets the `NamedRange` with the given ID in the first tab or, for scripts that are [bound](../../guides/bound.md) to a document, the active tab. To get the `NamedRange` with the given ID in any tab, use the `DocumentTab.getNamedRangeById(id)` method. This method returns `null` if no such `NamedRange` exists in the tab. Names are not necessarily unique, even across tabs; several different ranges in the same tab may share the same name, much like a class in HTML. By contrast, IDs are unique within the tab, like an ID in HTML.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The range's ID, which is unique within the tab. |

#### Return

`NamedRange|null` — The `NamedRange` with the given ID, or `null` if no such range exists in the tab.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getNamedRanges()

Gets all `NamedRange` objects in the first tab or, for scripts that are [bound](../../guides/bound.md) to a document, the active tab. To get all `NamedRange` objects in any tab, use the `DocumentTab.getNamedRanges()` method.

A `NamedRange` can be accessed by any script that accesses the tab. To avoid unintended conflicts between scripts, consider prefixing range names with a unique string.

#### Return

`NamedRange[]` — An array of the `NamedRange` objects in the tab, possibly including multiple ranges with the same name.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getNamedRanges(name)

Gets all `NamedRange` objects with the given name in the first tab or, for scripts that are [bound](../../guides/bound.md) to a document, the active tab. To get all `NamedRange` objects in any tab, use the `DocumentTab.getNamedRanges(name)` method. Names are not necessarily unique, even across tabs; several different ranges in the same tab may share the same name, much like a class in HTML. By contrast, IDs are unique within the tab, like an ID in HTML.

A `NamedRange` can be accessed by any script that accesses the document. To avoid unintended conflicts between scripts, consider prefixing range names with a unique string.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The range's name, which is not necessarily unique. |

#### Return

`NamedRange[]` — An array of the `NamedRange` objects in the tab with the given name.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getSelection()

Gets the user's selection in the active tab. A script can only access the selection of the user who is running the script, and only if the script is [bound](../../guides/bound.md) to the document.

```
// Display a dialog box that tells the user how many elements are included in
// the selection.
const selection = DocumentApp.getActiveDocument().getSelection();
if (selection) {
  const elements = selection.getRangeElements();
  DocumentApp.getUi().alert(\`Number of selected elements: ${elements.length}\`);
} else {
  DocumentApp.getUi().alert('Nothing is selected.');
}
```

#### Return

`Range|null` — A representation of the user's selection, or `null` if the user does not have anything selected in the tab, if only the end of a paragraph is selected, if only the end of a paragraph and a new line are selected, or if the script is not bound to the document.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getSupportedLanguageCodes()

Gets all language codes that are supported in Google Docs files.

#### Return

`String[]` — An array of language codes.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getTab(tabId)

Gets the `Tab` with the specified ID. This method returns `null` if no such `Tab` exists. Can access tabs at any nesting level.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `tabId` | `String` | The ID of the tab to get. |

#### Return

`Tab|null` — The `Tab` with the specified ID, or `null` if no such `Tab` exists.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getTabs()

Gets all unnested `Tab` s that are part of the document.

Tabs can contain child tabs, a tab nested within another tab. Child tabs are accessible using `Tab.getChildTabs()`.

#### Return

`Tab[]` — The list of all `Tab` s that are part of the document.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getUrl()

Retrieves the URL to access the current document.

```
const doc = DocumentApp.getActiveDocument();

// Send out the link to open the document.
MailApp.sendEmail('<email-address>', doc.getName(), doc.getUrl());
```

#### Return

`String` — The URL to access the current document.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getViewers()

Gets the list of viewers and commenters for this `Document`.

#### Return

`User[]` — An array of users with view or comment permission.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### newPosition(element, offset)

Creates a new `Position`, which is a reference to a location in the tab, relative to a specific element in the first tab or, for scripts that are [bound](../../guides/bound.md) to a document, the active tab. To create a `Position` relative to a location in any tab, use the `DocumentTab.newPosition(element, offset)` method. The user's cursor is represented as a `Position`, among other uses.

```
// Append a paragraph to the active tab, then place the user's cursor after the
// first word of the new paragraph.
const doc = DocumentApp.getActiveDocument();
const paragraph = doc.getBody().appendParagraph('My new paragraph.');
const position = doc.newPosition(paragraph.getChild(0), 2);
doc.setCursor(position);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `element` | `Element` | The element that should contain the new `Position`; this must be either a `Text` element or a container element like `Paragraph`. |
| `offset` | `Integer` | For `Text` elements, the number of characters before the `Position`; for other elements, the number of child elements before the `Position` within the same container element. |

#### Return

`Position` — The new `Position`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### newRange()

Creates a builder used to construct `Range` objects from tab elements in the first tab or, for scripts that are [bound](../../guides/bound.md) to a document, the active tab. To create a builder used to construct `DocumentRange` objects from tab elements in any tab, use the `DocumentTab.newRange()` method.

```
// Change the user's selection to a range that includes every table in the
// active tab.
const doc = DocumentApp.getActiveDocument();
const rangeBuilder = doc.newRange();
const tables = doc.getBody().getTables();
for (let i = 0; i < tables.length; i++) {
  rangeBuilder.addElement(tables[i]);
}
doc.setSelection(rangeBuilder.build());
```

#### Return

`RangeBuilder` — The new builder.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### removeEditor(emailAddress)

Removes the given user from the list of editors for the `Document`. This method doesn't block users from accessing the `Document` if they belong to a class of users who have general access—for example, if the `Document` is shared with the user's entire domain, or if the `Document` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to remove. |

#### Return

`Document` — This `Document`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### removeEditor(user)

Removes the given user from the list of editors for the `Document`. This method doesn't block users from accessing the `Document` if they belong to a class of users who have general access—for example, if the `Document` is shared with the user's entire domain, or if the `Document` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to remove. |

#### Return

`Document` — This `Document`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### removeViewer(emailAddress)

Removes the given user from the list of viewers and commenters for the `Document`. This method has no effect if the user is an editor, not a viewer or commenter. This method also doesn't block users from accessing the `Document` if they belong to a class of users who have general access—for example, if the `Document` is shared with the user's entire domain, or if the `Document` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to remove. |

#### Return

`Document` — This `Document` for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### removeViewer(user)

Removes the given user from the list of viewers and commenters for the `Document`. This method has no effect if the user is an editor, not a viewer. This method also doesn't block users from accessing the `Document` if they belong to a class of users who have general access—for example, if the `Document` is shared with the user's entire domain, or if the `Document` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to remove. |

#### Return

`Document` — This `Document` for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### saveAndClose()

Saves the current `Document`. Causes pending updates to be flushed and applied.

The `saveAndClose()` method is automatically invoked at the end of script execution for each open editable `Document`.

A closed `Document` can't be edited. Use `DocumentApp.openById()` to reopen a given document for editing.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setActiveTab(tabId)

Sets the user's selected `Tab` in the current document to the tab with the specified ID.

```
const doc = DocumentApp.getActiveDocument();

// Sets the user's selected tab by its ID.
// TODO(developer): Replace the ID with your own.
const tab = doc.setActiveTab('123abc');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `tabId` | `String` | The ID of the tab to set as active. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setCursor(position)

Sets the user's cursor, given a `Position`. A script can only access the cursor of the user who is running the script, and only if the script is [bound](../../guides/bound.md) to the document.

Providing a `Position` from an inactive `Tab` switches the user's active tab.

```
const doc = DocumentApp.getActiveDocument();
const documentTab = doc.getActiveTab().asDocumentTab();

// Append a paragraph, then place the user's cursor after the first word of the
// new paragraph.
const paragraph = documentTab.getBody().appendParagraph('My new paragraph.');
const position = documentTab.newPosition(paragraph.getChild(0), 2);
doc.setCursor(position);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `position` | `Position` | The new cursor location. |

#### Return

`Document` — This `Document`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setLanguage(languageCode)

Sets the document's language code. This is the language shown in the document editor's **File > Language**, which may not be the actual language that the document contains. Use `getSupportedLanguageCodes()` to get all the valid language codes.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `languageCode` | `String` | The language code. |

#### Return

`Document` — This `Document`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setName(name)

Sets the document title.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The new document title. |

#### Return

`Document` — The current document.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### setSelection(range)

Sets the user's selection in the active tab, given a `Range`. A script can only access the selection of the user who is running the script, and only if the script is [bound](../../guides/bound.md) to the document.

```
const doc = DocumentApp.getActiveDocument();
const documentTab = doc.getActiveTab().asDocumentTab();

// Change the user's selection to a range that includes every table in the
// document.
const rangeBuilder = documentTab.newRange();
const tables = documentTab.getBody().getTables();
for (let i = 0; i < tables.length; i++) {
  rangeBuilder.addElement(tables[i]);
}
doc.setSelection(rangeBuilder.build());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `range` | `Range` | The new range of elements to select. |

#### Return

`Document` — This `Document`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
