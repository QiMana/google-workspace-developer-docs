---
source: https://developers.google.com/apps-script/reference/document/bookmark
root: apps-script
fetched_at: 2026-04-23T15:19:33.012Z
---

# Class Bookmark

## Page Summary

- A Bookmark object represents a bookmark in a Google Document.
- You can add a bookmark at the cursor position in the active document tab.
- Bookmark objects have methods to get their ID and position, and to remove themselves.

An object representing a bookmark.

```
const doc = DocumentApp.getActiveDocument();
const documentTab = doc.getActiveTab().asDocumentTab();

// Insert a bookmark at the cursor position (in the active tab) and log its ID.
const cursor = doc.getCursor();
const bookmark = documentTab.addBookmark(cursor);
Logger.log(bookmark.getId());
```

## Detailed documentation

### getId()

Gets the ID of the `Bookmark`. The ID is unique within the `DocumentTab`.

#### Return

`String` — The `Bookmark` 's ID, which is unique within the `DocumentTab`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getPosition()

Gets the `Position` of the `Bookmark` within the `DocumentTab`. The `Position` remains accurate so long as the `Bookmark` is not deleted, even if the script changes the document structure.

#### Return

`Position` — The position of the `Bookmark`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### remove()

Deletes the `Bookmark`. Calling this method on a `Bookmark` that has already been deleted has no effect.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
