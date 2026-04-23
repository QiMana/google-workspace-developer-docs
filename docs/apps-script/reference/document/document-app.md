---
source: https://developers.google.com/apps-script/reference/document/document-app
root: apps-script
fetched_at: 2026-04-23T15:19:34.538Z
---

# Class DocumentApp

## Page Summary

- The Document service allows for creating and opening editable Google Documents using Apps Script.
- You can create a new document with a specified name or open an existing document by its ID or URL.
- The service provides access to various properties representing document formatting and structure enumerations.
- Methods are available to get the active document to which a script is bound or to interact with the document's user interface for custom features.

The document service creates and opens that can be edited.

```
// Open a document by ID.
// TODO(developer): Replace the ID with your own.
let doc = DocumentApp.openById('DOCUMENT_ID');

// Create and open a document.
doc = DocumentApp.create('Document Name');
```

## Detailed documentation

### create(name)

Creates and returns a new document.

```
// Create and open a new document.
const doc = DocumentApp.create('Document Name');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The new document's name. |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents`

---

### getActiveDocument()

Returns the document to which the script is [container-bound](../../guides/bound.md). To interact with document to which the script is not container-bound, use `openById(id)` or `openByUrl(url)` instead.

```
// Get the document to which this script is bound.
const doc = DocumentApp.getActiveDocument();
```

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getUi()

Returns an instance of the document's user-interface environment that allows the script to add features like menus, dialogs, and sidebars. A script can only interact with the UI for the current instance of an open document, and only if the script is [bound](../../guides/bound.md) to the document. For more information, see the guides to [menus](../../guides/menus.md) and [dialogs and sidebars](../../guides/dialogs.md).

```
// Add a custom menu to the active document, including a separator and a
// sub-menu.
function onOpen(e) {
  DocumentApp.getUi()
      .createMenu('My Menu')
      .addItem('My menu item', 'myFunction')
      .addSeparator()
      .addSubMenu(
          DocumentApp.getUi()
              .createMenu('My sub-menu')
              .addItem('One sub-menu item', 'mySecondFunction')
              .addItem('Another sub-menu item', 'myThirdFunction'),
          )
      .addToUi();
}
```

#### Return

`Ui` — an instance of this document's user-interface environment

---

### openById(id)

Returns the document with the specified ID. If the script is container-bound to the document, use `getActiveDocument()` instead.

```
// Open a document by ID.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById('DOCUMENT_ID');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID of the document to open. |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents`

---

### openByUrl(url)

Opens and returns the document with the specified URL. If the script is container-bound to the document, use `getActiveDocument()` instead.

```
// Open a document by URL.
const doc = DocumentApp.openByUrl(
    'https://docs.google.com/document/d/1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3/edit',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | the URL of the document to open |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents`
