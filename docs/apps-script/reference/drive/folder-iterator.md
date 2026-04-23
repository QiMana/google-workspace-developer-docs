---
source: https://developers.google.com/apps-script/reference/drive/folder-iterator
root: apps-script
fetched_at: 2026-04-23T15:20:06.811Z
---

# Class FolderIterator

## Page Summary

- FolderIterator allows scripts to iterate over potentially large collections of folders.
- Folder iterators can be accessed from DriveApp, a File, or a Folder.
- Key methods include `getContinuationToken()`, `hasNext()`, and `next()`.

An object that allows scripts to iterate over a potentially large collection of folders. Folder iterators can be accessed from `DriveApp`, a `File`, or a .

```
// Log the name of every folder in the user's Drive.
const folders = DriveApp.getFolders();
while (folders.hasNext()) {
  const folder = folders.next();
  Logger.log(folder.getName());
}
```

## Detailed documentation

### getContinuationToken()

Gets a token that can be used to resume this iteration at a later time. This method is useful if processing an iterator in one execution exceeds the maximum execution time. Continuation tokens are generally valid for one week.

#### Return

`String` — A continuation token that can be used to resume this iteration with the items that remained in the iterator when the token was generated.

---

### hasNext()

Determines whether calling `next()` returns an item.

#### Return

`Boolean` — `true` if `next()` returns an item; `false` if not.

---

### next()

Gets the next item in the collection of files or folders. Throws an exception if no items remain.
