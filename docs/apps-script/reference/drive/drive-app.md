---
source: https://developers.google.com/apps-script/reference/drive/drive-app
root: apps-script
fetched_at: 2026-04-23T15:20:04.356Z
---

# Class DriveApp

## Page Summary

- DriveApp allows scripts to manage files and folders in Google Drive, although the advanced Drive service offers more features and supports shared drives.
- The DriveApp service includes properties for defining access and permission levels for files and folders.
- DriveApp provides methods for creating, finding, and modifying files and folders, including resuming iterations and searching with specific criteria.
- Several methods for adding and removing files and folders from the root of the user's Drive are deprecated.

Allows scripts to create, find, and modify files and folders in Google Drive. Although the built-in Drive service is easier to use, it has some limitations. For the most up-to-date features and support, and to access files or folders in shared drives, use the [advanced Drive service](../../advanced/drive.md).

```
// Logs the name of every file in the user's Drive.
const files = DriveApp.getFiles();
while (files.hasNext()) {
  const file = files.next();
  console.log(file.getName());
}
```

## Detailed documentation

### continueFileIterator(continuationToken)

Resumes a file iteration using a continuation token from a previous iterator. This method is useful if processing an iterator in one execution exceeds the maximum execution time. Continuation tokens are generally valid for one week.

```
// Continues getting a list of all 'Untitled document' files in the user's
// Drive. Creates a file iterator named 'previousIterator'.
const previousIterator = DriveApp.getFilesByName('Untitled document');

// Gets continuation token from the previous file iterator.
const continuationToken = previousIterator.getContinuationToken();

// Creates a new iterator using the continuation token from the previous file
// iterator.
const newIterator = DriveApp.continueFileIterator(continuationToken);

// Resumes the file iteration using a continuation token from 'firstIterator'
// and logs the file name.
if (newIterator.hasNext()) {
  const file = newIterator.next();
  console.log(file.getName());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `continuationToken` | `String` | A continuation token from a previous file iterator. |

#### Return

`FileIterator` — A collection of files that remained in a previous iterator when the continuation token was generated.

---

### continueFolderIterator(continuationToken)

Resumes a folder iteration using a continuation token from a previous iterator. This method is useful if processing an iterator in one execution exceeds the maximum execution time. Continuation tokens are generally valid for one week.

```
// Continues getting a list of all folders in user's Drive.
// Creates a folder iterator named 'previousIterator'.
const previousIterator = DriveApp.getFolders();

// Gets continuation token from the previous folder iterator.
const continuationToken = previousIterator.getContinuationToken();

// Creates a new iterator using the continuation token from the previous folder
// iterator.
const newIterator = DriveApp.continueFolderIterator(continuationToken);

// Resumes the folder iteration using a continuation token from the previous
// iterator and logs the folder name.
if (newIterator.hasNext()) {
  const folder = newIterator.next();
  console.log(folder.getName());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `continuationToken` | `String` | A continuation token from a previous folder iterator. |

#### Return

`FolderIterator` — A collection of folders that remained in a previous iterator when the continuation token was generated.

---

### createFile(blob)

Creates a file in the root of the user's Drive from a given `Blob` of arbitrary data.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `blob` | `BlobSource` | The data for the new file. |

#### Return

`File` — The new file.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### createFile(name, content)

Creates a text file in the root of the user's Drive with the given name and contents. Throws an exception if `content` is larger than 50 MB.

```
// Create a text file with the content "Hello, world!"
DriveApp.createFile('New Text File', 'Hello, world!');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the new file. |
| `content` | `String` | The content for the new file. |

#### Return

`File` — The new file.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### createFile(name, content, mimeType)

Creates a file in the root of the user's Drive with the given name, contents, and MIME type. Throws an exception if `content` is larger than 10MB.

```
// Create an HTML file with the content "Hello, world!"
DriveApp.createFile('New HTML File', '<b>Hello, world!</b>', MimeType.HTML);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the new file. |
| `content` | `String` | The content for the new file. |
| `mimeType` | `String` | The MIME type of the new file. |

#### Return

`File` — The new file.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### createFolder(name)

Creates a folder in the root of the user's Drive with the given name.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the new folder. |

#### Return

`Folder` — The new folder.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### createShortcut(targetId)

Creates a shortcut to the provided Drive item ID, and returns it.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `targetId` | `String` | The file ID of the target file or folder. |

#### Return

`File` — The new shortcut.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### createShortcutForTargetIdAndResourceKey(targetId, targetResourceKey)

Creates a shortcut to the provided Drive item ID and resource key, and returns it. A resource key is an additional parameter that needs to be passed to access the target file or folder that has been shared using a link.

```
// Creates shortcuts for all folders in the user's drive that have a specific
// name.
// TODO(developer): Replace 'Test-Folder' with a valid folder name in your
// drive.
const folders = DriveApp.getFoldersByName('Test-Folder');

// Iterates through all folders named 'Test-Folder'.
while (folders.hasNext()) {
  const folder = folders.next();

  // Creates a shortcut to the provided Drive item ID and resource key, and
  // returns it.
  DriveApp.createShortcutForTargetIdAndResourceKey(
      folder.getId(),
      folder.getResourceKey(),
  );
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `targetId` | `String` | The ID of the target file or folder. |
| `targetResourceKey` | `String` | The resource key of the target file or folder. |

#### Return

`File` — The new shortcut.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### enforceSingleParent(value)

Enables or disables enforceSingleParent behavior for all calls affecting item parents.

See the [Simplifying Google Drive’s folder structure and sharing models](https://cloud.google.com/blog/products/g-suite/simplifying-google-drives-folder-structure-and-sharing-models) blog for more details.

```
// Enables enforceSingleParent behavior for all calls affecting item parents.
DriveApp.enforceSingleParent(true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `Boolean` | The new state of the enforceSingleParent flag. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### getFileById(id)

Gets the file with the given ID. Throws a scripting exception if the file does not exist or the user does not have permission to access it.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace 'Test' with your file name.
const files = DriveApp.getFilesByName('Test');

if (files.hasNext()) {
  // Gets the ID of each file in the list.
  const fileId = files.next().getId();

  // Gets the file name using its ID and logs it to the console.
  console.log(DriveApp.getFileById(fileId).getName());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID of the file. |

#### Return

`File` — The file with the given ID.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getFileByIdAndResourceKey(id, resourceKey)

Gets the file with the given ID and resource key. Resource keys are an additional parameter which need to be passed to access files that have been shared using a link.

Throws a scripting exception if the file doesn't exist or the user doesn't have permission to access it.

```
// Gets a list of all files in Drive with the given name.
// TODO(developer): Replace 'Test' with your file name.
const files = DriveApp.getFilesByName('Test');
if (files.hasNext()) {
  // Gets the first file in the list.
  const file = files.next();

  // Gets the ID and resource key.
  const key = file.getResourceKey();
  const id = file.getId();

  // Logs the file name to the console using its ID and resource key.
  console.log(DriveApp.getFileByIdAndResourceKey(id, key).getName());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID of the file. |
| `resourceKey` | `String` | The resource key of the folder. |

#### Return

`File` — The file with the given ID.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getFiles()

Gets a collection of all files in the user's Drive.

#### Return

`FileIterator` — A collection of all files in the user's Drive.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getFilesByName(name)

Gets a collection of all files in the user's Drive that have the given name.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the files to find. |

#### Return

`FileIterator` — A collection of all files in the user's Drive that have the given name.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getFilesByType(mimeType)

Gets a collection of all files in the user's Drive that have the given MIME type.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `mimeType` | `String` | The MIME type of the files to find. |

#### Return

`FileIterator` — A collection of all files in the user's Drive that have the given MIME type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getFolderById(id)

Gets the folder with the given ID. Throws a scripting exception if the folder does not exist or the user does not have permission to access it.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID of the folder. |

#### Return

`Folder` — The folder with the given ID.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getFolderByIdAndResourceKey(id, resourceKey)

Gets the folder with the given ID and resource key. Resource keys are an additional parameter which need to be passed to access folders that have been shared using a link.

Throws a scripting exception if the folder doesn't exist or the user doesn't have permission to access it.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID of the folder. |
| `resourceKey` | `String` | The resource key of the folder. |

#### Return

`Folder` — The folder with the given ID.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getFolders()

Gets a collection of all folders in the user's Drive.

#### Return

`FolderIterator` — A collection of all folders in the user's Drive.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getFoldersByName(name)

Gets a collection of all folders in the user's Drive that have the given name.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the folders to find. |

#### Return

`FolderIterator` — A collection of all folders in the user's Drive that have the given name.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getRootFolder()

Gets the folder at the root of the user's Drive.

```
// Gets the user's My Drive folder and logs its name to the console.
console.log(DriveApp.getRootFolder().getName());

// Logs the Drive owner's name to the console.
console.log(DriveApp.getRootFolder().getOwner().getName());
```

#### Return

`Folder` — The root folder of the user's Drive.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getStorageLimit()

Gets the number of bytes the user is allowed to store in Drive.

```
// Gets the number of bytes the user can store in Drive and logs it to the
// console.
console.log(DriveApp.getStorageLimit());
```

#### Return

`Integer` — The number of bytes the user is allowed to store in Drive.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getStorageUsed()

Gets the number of bytes the user is currently storing in Drive.

```
// Gets the number of bytes the user is currently storing in Drive and logs it
// to the console.
console.log(DriveApp.getStorageUsed());
```

#### Return

`Integer` — The number of bytes the user is currently storing in Drive.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getTrashedFiles()

Gets a collection of all the files in the trash of the user's Drive.

```
// Gets a list of all the files in the trash of the user's Drive.
const trashFiles = DriveApp.getTrashedFiles();

// Logs the trash file names to the console.
while (trashFiles.hasNext()) {
  const file = trashFiles.next();
  console.log(file.getName());
}
```

#### Return

`FileIterator` — A collection of files in the trash.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getTrashedFolders()

Gets a collection of all the folders in the trash of the user's Drive.

```
// Gets a collection of all the folders in the trash of the user's Drive.
const trashFolders = DriveApp.getTrashedFolders();

// Logs the trash folder names to the console.
while (trashFolders.hasNext()) {
  const folder = trashFolders.next();
  console.log(folder.getName());
}
```

#### Return

`FolderIterator` — A collection of folders in the trash.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### searchFiles(params)

Gets a collection of all files in the user's Drive that match the given search criteria. The search criteria are detailed in the [Google Drive SDK documentation](../../../workspace/drive/api/guides/ref-search-terms.md). Note that the Drive service uses v2 of the Drive API and some query fields differ from v3. Review the [field differences between v2 and v3](../../../workspace/drive/api/guides/v2-to-v3-reference.md#resource_field_differences_between_v2_and_v3).

The `params` argument is a query string that can contain string values, so take care to escape quotation marks correctly (for example `"title contains 'Gulliver\\'s Travels'"` or `'title contains "Gulliver\'s Travels"'`).

```
// Logs the name of every file in the user's Drive that modified after February 28,
// 2022 whose name contains "untitled.""
const files = DriveApp.searchFiles(
    'modifiedDate > "2022-02-28" and title contains "untitled"');
while (files.hasNext()) {
  const file = files.next();
  console.log(file.getName());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `params` | `String` | The search criteria, as detailed in the [Google Drive SDK documentation](../../../workspace/drive/api/guides/ref-search-terms.md). |

#### Return

`FileIterator` — A collection of all files in the user's Drive that match the search criteria.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### searchFolders(params)

Gets a collection of all folders in the user's Drive that match the given search criteria. The search criteria are detailed in the [Google Drive SDK documentation](../../../workspace/drive/api/guides/ref-search-terms.md). Note that the Drive service uses v2 of the Drive API and some query fields differ from v3. Review the [field differences between v2 and v3](../../../workspace/drive/api/guides/v2-to-v3-reference.md#resource_field_differences_between_v2_and_v3).

The `params` argument is a query string that can contain string values, so take care to escape quotation marks correctly (for example `"title contains 'Gulliver\\'s Travels'"` or `'title contains "Gulliver\'s Travels"'`).

```
// Logs the name of every folder in the user's Drive that you own and is starred.
const folders = DriveApp.searchFolders('starred = true and "me" in owners');
while (folders.hasNext()) {
  const folder = folders.next();
  console.log(folder.getName());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `params` | `String` | The search criteria, as detailed in the [Google Drive SDK documentation](../../../workspace/drive/api/guides/ref-search-terms.md). |

#### Return

`FolderIterator` — A collection of all folders in the user's Drive that match the search criteria.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

## Deprecated methods

### addFile(child)

**Deprecated.** Instead, use `File.moveTo(destination)` or `Folder.createShortcut(targetId)`.

Adds the given file to the root of the user's Drive. This method does not move the file out of its existing parent folder; a file can have more than one parent simultaneously.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `child` | `File` | The child file to add. |

#### Return

`Folder` — The new parent of the file added as a child.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### addFolder(child)

**Deprecated.** Instead, use `Folder.moveTo(destination)` or `Folder.createShortcut(targetId)`.

Adds the given folder to the root of the user's Drive. This method does not move the folder out of its existing parent folder; a folder can have more than one parent simultaneously.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `child` | `Folder` | The child folder to add. |

#### Return

`Folder` — The new parent of the folder added as a child.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### removeFile(child)

**Deprecated.** Instead, use `File.moveTo(destination)`.

Removes the given file from the root of the user's Drive. This method does not delete the file, but if a file is removed from all of its parents, it cannot be seen in Drive except by searching for it or using the "All items" view.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `child` | `File` | The child file to remove. |

#### Return

`Folder` — The previous parent of the child.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### removeFolder(child)

**Deprecated.** Instead, use `Folder.moveTo(destination)`.

Removes the given folder from the root of the user's Drive. This method does not delete the folder or its contents, but if a folder is removed from all of its parents, it cannot be seen in Drive except by searching for it or using the "All items" view.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `child` | `Folder` | The child folder to remove. |

#### Return

`Folder` — The previous parent of the child.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`
