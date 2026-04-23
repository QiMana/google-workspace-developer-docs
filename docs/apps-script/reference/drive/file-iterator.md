---
source: https://developers.google.com/apps-script/reference/drive/file-iterator
root: apps-script
fetched_at: 2026-04-23T15:20:07.355Z
---

# Class FileIterator

## Page Summary

- FileIterator allows scripts to iterate over potentially large collections of files.
- File iterators can be accessed from DriveApp or a Folder.
- The `hasNext()` method determines if there are more files to iterate over.
- The `next()` method retrieves the next file in the collection.
- The `getContinuationToken()` method provides a token to resume iteration later.

An iterator that allows scripts to iterate over a potentially large collection of files. File iterators can be accessed from `DriveApp` or a `Folder`.

```
// Log the name of every file in the user's Drive.
const files = DriveApp.getFiles();
while (files.hasNext()) {
  const file = files.next();
  Logger.log(file.getName());
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
