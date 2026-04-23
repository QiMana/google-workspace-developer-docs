---
source: https://developers.google.com/apps-script/reference/drive/file.html
root: apps-script
fetched_at: 2026-04-23T15:20:06.666Z
---

# Class File

## Page Summary

- Google Drive `File` objects in `DriveApp` allow programmatic interaction with files.
- The documentation lists various methods for managing file permissions, getting file information, and manipulating file content.
- Specific methods exist for managing access, retrieving details like ID and name, and performing operations like copying or moving files.
- Shortcut-specific methods provide information about the target of a shortcut file.
- Scripts interacting with files require appropriate Google Drive authorization scopes.

A file in Google Drive. Files can be accessed or created from `DriveApp`.

```
// Trash every untitled spreadsheet that hasn't been updated in a week.
const files = DriveApp.getFilesByName('Untitled spreadsheet');
while (files.hasNext()) {
  const file = files.next();
  if (new Date() - file.getLastUpdated() > 7 * 24 * 60 * 60 * 1000) {
    file.setTrashed(true);
  }
}
```

## Detailed documentation

### addCommenter(emailAddress)

Add the given user to the list of commenters for the `File`. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.

```
const files = DriveApp.getFilesByName('Test');

// Loops through the files
while (files.hasNext()) {
  const file = files.next();
  file.addCommenter('hello@example.com');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to add. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### addCommenter(user)

Add the given user to the list of commenters for the `File`. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Adds the active user as a commenter.
while (files.hasNext()) {
  const file = files.next();
  file.addCommenter(Session.getActiveUser());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to add. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### addCommenters(emailAddresses)

Add the given array of users to the list of commenters for the `File`. If any of the users were already on the list of viewers, this method promotes them out of the list of viewers.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

while (files.hasNext()) {
  const file = files.next();
  // TODO(developer): Replace 'cloudysanfrancisco@gmail.com' and
  // 'baklavainthebalkans@gmail.com' with the email addresses to add as
  // commenters.
  const emails = [
    'cloudysanfrancisco@gmail.com',
    'baklavainthebalkans@gmail.com',
  ];
  console.log(file.addCommenters(emails));
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddresses` | `String[]` | An array of email addresses of the users to add. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### addEditor(emailAddress)

Adds the given user to the list of editors for the `File`. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to add. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### addEditor(user)

Adds the given user to the list of editors for the `File`. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to add. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### addEditors(emailAddresses)

Adds the given array of users to the list of editors for the `File`. If any of the users were already on the list of viewers, this method promotes them out of the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddresses` | `String[]` | An array of email addresses of the users to add. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### addViewer(emailAddress)

Adds the given user to the list of viewers for the `File`. If the user was already on the list of editors, this method has no effect.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to add. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### addViewer(user)

Adds the given user to the list of viewers for the `File`. If the user was already on the list of editors, this method has no effect.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to add. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### addViewers(emailAddresses)

Adds the given array of users to the list of viewers for the `File`. If any of the users were already on the list of editors, this method has no effect for them.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddresses` | `String[]` | An array of email addresses of the users to add. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### getAccess(email)

Gets the permission granted to a specific user. The method doesn't support returning permissions for a Google Group or permissions inherited through Google Groups.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `email` | `String` | The email address of the user whose permissions should be checked. Google Groups aren't supported. |

#### Return

`Permission` — The permissions granted to the user.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getAccess(user)

Gets the permission granted to a specific user. The method doesn't support returning permissions for a Google Group or permissions inherited through Google Groups.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user whose permissions should be checked. |

#### Return

`Permission` — The permissions granted to the user.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getAs(contentType)

Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".

To view the daily quotas for conversions, see [Quotas for Google Services](../../guides/services/quotas.md). Newly created Google Workspace domains might be temporarily subject to stricter quotas.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `contentType` | `String` | The MIME type to convert to. For most blobs, `'application/pdf'` is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of `'image/bmp'`, `'image/gif'`, `'image/jpeg'`, or `'image/png'` are also valid. For a Google Docs document, `'text/markdown'` is also valid. |

#### Return

`Blob` — The data as a blob.

---

### getBlob()

Return the data inside this object as a blob.

#### Return

`Blob` — The data as a blob.

---

### getDateCreated()

Gets the date the `File` was created.

#### Return

`Date` — the date the `File` was created

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getDescription()

Gets the description for the `File`.

#### Return

`String` — the description for the `File`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getDownloadUrl()

Gets the URL that can be used to download the file. Only users with permission to open the file in Google Drive can access the URL. You can use this URL in a browser to download the file, but you can't use to fetch the file with `UrlFetchApp`. If you want the contents of the file in the script, use `getBlob()`.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files and logs the download URLs to the console.
while (files.hasNext()) {
  const file = files.next();
  console.log(file.getDownloadUrl());
}
```

#### Return

`String` — The URL that can be used to download the file.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getEditors()

Gets the list of editors for this `File`. If the user who executes the script does not have edit access to the `File`, this method returns an empty array.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Adds the email addresses in the array as editors of each file.
  // TODO(developer): Replace 'cloudysanfrancisco@gmail.com'
  // and 'baklavainthebalkans@gmail.com' with valid email addresses.
  file.addEditors([
    'cloudysanfrancisco@gmail.com',
    'baklavainthebalkans@gmail.com',
  ]);

  // Gets a list of the file editors.
  const editors = file.getEditors();

  // For each file, logs the editors' email addresses to the console.
  for (const editor of editors) {
    console.log(editor.getEmail());
  }
}
```

#### Return

`User[]` — If the user has edit access for this `File`, returns the list of editors. If the user doesn't have edit access, returns an empty array.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getId()

Gets the ID of the `File`.

#### Return

`String` — the ID of the `File`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getMimeType()

Gets the MIME type of the file.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files and logs the MIME type to the console.
while (files.hasNext()) {
  const file = files.next();
  console.log(file.getMimeType());
}
```

#### Return

`String` — The MIME type of the file.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getName()

Gets the name of the `File`.

#### Return

`String` — the name of the `File`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getOwner()

Gets the file owner.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files and logs the names of the file owners to the console.
while (files.hasNext()) {
  const file = files.next();
  console.log(file.getOwner().getName());
}
```

#### Return

`User` — The file owner.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getParents()

Gets a collection of folders that are immediate parents of the `File`.

#### Return

`FolderIterator` — a collection of folders that are immediate parents of the `File`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getResourceKey()

Gets the resource key of the `File` that is required to access items that have been shared using a link.

#### Return

`String` — The resource key of the `File`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getSecurityUpdateEligible()

Gets whether this `File` is eligible to apply the security update that requires a resource key for access when it's shared using a link.

Drive requires a resource key to access some files or folders that have been shared using a link. This change is part of a security update. The update is turned on by default for eligible files and folders. To turn the resource key requirement on or off for eligible files, use `setSecurityUpdateEnabled`.

Learn more about the [Security update for Google Drive](https://support.google.com/a/answer/10685032).

#### Return

`Boolean` — Whether the resource key requirement can be applied for the `File`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getSecurityUpdateEnabled()

Gets whether this `File` requires a resource key for access when it's shared using a link. This requirement is turned on by default for eligible files and folders. To turn the resource key requirement on or off for eligible files, use ` setSecurityUpdateEnabled`.

Learn more about the [Security update for Google Drive](https://support.google.com/a/answer/10685032).

#### Return

`Boolean` — Whether the resource key requirement is enabled for this `File`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getSharingAccess()

Gets which class of users can access the `File`, besides any individual users who have been explicitly given access.

#### Return

`Access` — which class of users can access the `File`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getSharingPermission()

Gets the permission granted to those users who can access the `File`, besides any individual users who have been explicitly given access.

#### Return

`Permission` — the permissions granted to users who can access the `File`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getSize()

Gets the number of bytes used to store the `File` in Drive. Note that Google Workspace application files do not count toward Drive storage limits and thus return `0` bytes.

#### Return

`Integer` — the number of bytes used to store the `File` in Drive

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getTargetId()

If this is a Shortcut, returns the ID of the item it points to.

Otherwise it returns `null`.

```
// The ID of the file for which to make a shortcut and the ID of
// the folder to which you want to add the shortcut.
// TODO(developer): Replace the file and folder IDs with your IDs.
const fileId = 'abc123456';
const folderId = 'xyz987654';

// Gets the folder to add the shortcut to.
const folder = DriveApp.getFolderById(folderId);

// Creates a shortcut of the file and moves it to the specified folder.
const shortcut = DriveApp.createShortcut(fileId).moveTo(folder);

// Logs the target ID of the shortcut.
console.log(\`${shortcut.getName()}=${shortcut.getTargetId()}\`);
```

#### Return

`String|null` — The target item ID, or `null` if the file is not a shortcut.

---

### getTargetMimeType()

If this is a Shortcut, returns the mime type of the item it points to.

Otherwise it returns `null`.

```
// The ID of the file for which to make a shortcut and the ID of
// the folder to which you want to add the shortcut.
// TODO(developer): Replace the file and folder IDs with your IDs.
const fileId = 'abc123456';
const folderId = 'xyz987654';

// Gets the folder to add the shortcut to.
const folder = DriveApp.getFolderById(folderId);

// Creates a shortcut of the file and moves it to the specified folder.
const shortcut = DriveApp.createShortcut(fileId).moveTo(folder);

// Logs the MIME type of the file that the shortcut points to.
console.log(\`MIME type of the shortcut: ${shortcut.getTargetMimeType()}\`);
```

#### Return

`String|null` — The target item mime type or `null` if the file is not a shortcut.

---

### getTargetResourceKey()

If the file is a shortcut, returns the resource key of the item it points to. A resource key is an additional parameter that you need to pass to access files that have been shared using a link.

If the file isn't a shortcut, it returns `null`.

```
//  Gets a file by its ID.
//  TODO(developer): Replace 'abc123456' with your file ID.
const file = DriveApp.getFileById('abc123456');

// If the file is a shortcut, returns the resource key of the file that it
// points to.
console.log(file.getTargetResourceKey());
```

#### Return

`String|null` — The target item's resource key or `null` if the file is not a shortcut.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getThumbnail()

Gets a thumbnail image for the file, or `null` if no thumbnail exists.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Logs the thumbnail image for each file to the console as a blob,
  // or null if no thumbnail exists.
  console.log(file.getThumbnail());
}
```

#### Return

`Blob|null` — The thumbnail image for the file.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getUrl()

Gets the URL that can be used to open the `File` in a Google App like Drive or Docs.

#### Return

`String` — the URL that can be used to view this `File` in a Google App like Drive or Docs

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getViewers()

Gets the list of viewers and commenters for this `File`. If the user who executes the script does not have edit access to the `File`, this method returns an empty array.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // For each file, logs the viewers' email addresses to the console.
  const viewers = file.getViewers();
  for (const viewer of viewers) {
    console.log(viewer.getEmail());
  }
}
```

#### Return

`User[]` — If the user has edit access for this `File`, returns the list of viewers and commenters. If the user doesn't have edit access, returns an empty array.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### isStarred()

Determines whether the `File` has been starred in the user's Drive.

#### Return

`Boolean` — `true` if the `File` is starred in the user's Drive; `false` if not

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### isTrashed()

Determines whether the `File` is in the trash of the user's Drive.

#### Return

`Boolean` — `true` if the `File` is in the trash of the user's Drive; `false` if not

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### makeCopy()

Creates a copy of the file.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Creates a copy of each file and logs the file name to the console.
  console.log(file.makeCopy().getName());
}
```

#### Return

`File` — The new copy.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### makeCopy(destination)

Creates a copy of the file in the destination directory.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Creates a copy of each file and adds it to the specified folder.
  // TODO(developer): Replace the folder ID with your own.
  const destination = DriveApp.getFolderById('123456abcxyz');
  const copiedFile = file.makeCopy(destination);

  // Logs the file names to the console.
  console.log(copiedFile.getName());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `destination` | `Folder` | The directory to copy the file into. |

#### Return

`File` — The new copy.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### makeCopy(name)

Creates a copy of the file and names it with the name provided.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Creates a copy of each file and sets the name to 'Test-Copy.'
  const filename = file.makeCopy('Test-Copy');

  // Logs the copied file's name to the console.
  console.log(filename.getName());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The filename that should be applied to the new copy. |

#### Return

`File` — The new copy.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### makeCopy(name, destination)

Creates a copy of the file in the destination directory and names it with the name provided.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Creates a copy of each file, sets the file name, and adds the copied file
  // to the specified folder.
  // TODO(developer): Replace the folder ID with your own.
  const destination = DriveApp.getFolderById('123456abcxyz');
  const copiedFile = file.makeCopy('Test-Copy', destination);

  // Logs the file names to the console.
  console.log(copiedFile.getName());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The filename that should be applied to the new copy. |
| `destination` | `Folder` | The directory to copy the file into. |

#### Return

`File` — The new copy.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### moveTo(destination)

Moves this item to the provided destination folder.

The current user must be the owner of the file or have at least edit access to the item's current parent folder in order to move the item to the destination folder.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `destination` | `Folder` | The folder that becomes the new parent. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### removeCommenter(emailAddress)

Removes the given user from the list of commenters for the `File`. This method does not block users from access the `File` if they belong to a class of users who have general access — for example, if the `File` is shared with the user's entire domain.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Removes the given user from the list of commenters for each file.
  // TODO(developer): Replace the email with the email of the user you want to
  // remove.
  file.removeCommenter('cloudysanfrancisco@gmail.com');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to remove. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### removeCommenter(user)

Removes the given user from the list of commenters for the `File`. This method does not block users from access the `File` if they belong to a class of users who have general access — for example, if the `File` is shared with the user's entire domain.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Removes the given user from the list of commenters for each file.
  console.log(file.removeCommenter(Session.getActiveUser()));
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to remove. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### removeEditor(emailAddress)

Removes the given user from the list of editors for the `File`. This method doesn't block users from accessing the `File` if they belong to a class of users who have general access—for example, if the `File` is shared with the user's entire domain, or if the `File` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to remove. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### removeEditor(user)

Removes the given user from the list of editors for the `File`. This method doesn't block users from accessing the `File` if they belong to a class of users who have general access—for example, if the `File` is shared with the user's entire domain, or if the `File` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to remove. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### removeViewer(emailAddress)

Removes the given user from the list of viewers and commenters for the `File`. This method has no effect if the user is an editor, not a viewer or commenter. This method also doesn't block users from accessing the `File` if they belong to a class of users who have general access—for example, if the `File` is shared with the user's entire domain, or if the `File` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to remove. |

#### Return

`File` — This `File` for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### removeViewer(user)

Removes the given user from the list of viewers and commenters for the `File`. This method has no effect if the user is an editor, not a viewer. This method also doesn't block users from accessing the `File` if they belong to a class of users who have general access—for example, if the `File` is shared with the user's entire domain, or if the `File` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to remove. |

#### Return

`File` — This `File` for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### revokePermissions(emailAddress)

Revokes the access to the `File` granted to the given user. This method doesn't block users from accessing the `File` if they belong to a class of users who have general access — for example, if the `File` is shared with the user's entire domain.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user whose access should be revoked. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### revokePermissions(user)

Revokes the access to the `File` granted to the given user. This method doesn't block users from accessing the `File` if they belong to a class of users who have general access — for example, if the `File` is shared with the user's entire domain.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user whose access should be revoked. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setContent(content)

Overwrites the content of the file with a given replacement. Throws an exception if `content` is larger than 10MB.

```
// Creates a text file with the content 'Hello, world!'
const file = DriveApp.createFile('New Text File', 'Hello, world!');

// Logs the content of the text file to the console.
console.log(file.getBlob().getDataAsString());

// Updates the content of the text file to 'Updated text!'
file.setContent('Updated text!');

// Logs content of the text file to the console.
console.log(file.getBlob().getDataAsString());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `content` | `String` | The new content for the file. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setDescription(description)

Sets the description for the `File`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `description` | `String` | the new description for the `File` |

#### Return

`File` — this `File`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setName(name)

Sets the name of the `File`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | the new name of the `File` |

#### Return

`File` — this `File`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setOwner(emailAddress)

Changes the owner of the `File`. This method also gives the previous owner explicit edit access to the `File`.

Drive does not support changing the ownership for items which are owned by gmail.com accounts; it's supported for Workspace accounts.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user who should become the new owner. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setOwner(user)

Changes the owner of the `File`. This method also gives the previous owner explicit edit access to the `File`.

Drive does not support changing the ownership for items which are owned by gmail.com accounts; it's supported for Workspace accounts.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user who should become the new owner. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setSecurityUpdateEnabled(enabled)

Sets whether the `File` requires a resource key for access when it's shared using a link. Eligible files and folders are enabled by default.

Learn more about the [Security update for Google Drive](https://support.google.com/a/answer/10685032).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `enabled` | `Boolean` | Whether to enable the resource key requirement for the `File`. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setShareableByEditors(shareable)

Sets whether users with edit permissions to the `File` are allowed to share with other users or change the permissions. The default for a new `File` is `true`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `shareable` | `Boolean` | `true` if users with edit permissions should be allowed to share with other users or change the permissions; `false` if not. |

#### Return

`File` — This `File`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setSharing(accessType, permissionType)

Sets which class of users can access the `File` and what permissions those users are granted, besides any individual users who have been explicitly given access.

```
// Creates a folder that anyone on the Internet can read from and write to.
// (Domain administrators can prohibit this setting for users of a Google
// Workspace domain.)
const folder = DriveApp.createFolder('Shared Folder');
folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `accessType` | `Access` | which class of users should be able to access the `File` |
| `permissionType` | `Permission` | the permissions that should be granted to users who can access the `File` |

#### Return

`File` — this `File`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setStarred(starred)

Sets whether the `File` is starred in the user's Drive. The default for new `File` s is `false`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `starred` | `Boolean` | `true` if the `File` should be starred in the user's Drive; `false` if not |

#### Return

`File` — this `File`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setTrashed(trashed)

Sets whether the `File` is in the trash of the user's Drive. Only the owner may trash the `File`. The default for new `File` s is `false`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `trashed` | `Boolean` | `true` if the `File` should be moved to the trash of the user's Drive; `false` if not |

#### Return

`File` — this `File`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`
