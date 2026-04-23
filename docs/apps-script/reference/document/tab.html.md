---
source: https://developers.google.com/apps-script/reference/document/tab.html
root: apps-script
fetched_at: 2026-04-23T15:19:52.191Z
---

# Class Tab

## Page Summary

- The Tab class represents a tab within a Google Docs document.
- You can retrieve a specific tab by its ID or get all first-level tabs in a document.
- The `asDocumentTab()` method retrieves the tab contents as a DocumentTab.
- The `getChildTabs()` method retrieves nested child tabs.
- Methods like `getId()`, `getIndex()`, `getTitle()`, and `getType()` provide information about the tab.

A tab within a Google Docs document.

```
// Get all of the first-level tabs (tabs that are not nested within a parent
// tab) in the document.
// TODO(developer): Replace the ID with your own.
const tabs = DocumentApp.openById('123abc').getTabs();

// Get a specific tab based on the tab ID.
// TODO(developer): Replace the IDs with your own.
const tab = DocumentApp.openById('123abc').getTab('123abc');
```

## Detailed documentation

### asDocumentTab()

Retrieves the tab contents as a `DocumentTab`.

#### Return

`DocumentTab` — The tab as a `DocumentTab`.

---

### getChildTabs()

Retrieves the child tabs nested within this tab.

#### Return

`Tab[]` — The child tabs nested within this tab.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getId()

Retrieves the ID of the tab.

#### Return

`String` — The ID of the tab.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getIndex()

Retrieves the 0-based index of the tab within the parent.

#### Return

`Integer` — The index of the tab within the parent.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getTitle()

Retrieves the title of the tab.

#### Return

`String` — The title of the tab.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getType()

Retrieves the type of tab.

Use this method to determine the content type of this `Tab` before casting to the more specific type using `asDocumentTab()`.

```
const tab = DocumentApp.getActiveDocument().getActiveTab();
// Use getType() to determine the tab's type before casting.
if (tab.getType() === DocumentApp.TabType.DOCUMENT_TAB) {
  // It's a document tab, write some text to it.
  tab.asDocumentTab().setText('Hello World!');
} else {
  // There are currently no types other than DOCUMENT_TAB.
}
```

#### Return

`TabType` — The tab's type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
