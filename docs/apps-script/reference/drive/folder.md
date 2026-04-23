---
source: https://developers.google.com/apps-script/reference/drive/folder
root: apps-script
fetched_at: 2026-04-23T15:20:08.452Z
---

# Class Folder

## Page Summary

- Google Drive folders can be managed using the `DriveApp` service and the `Folder` class in Apps Script.
- The `Folder` class provides methods for managing permissions, creating files and folders, retrieving information, and manipulating folder properties.
- Several methods for adding and removing files and folders have been deprecated in favor of using `moveTo` or `createShortcut`.
- Many modification methods return the `Folder` object for chaining, and require the `https://www.googleapis.com/auth/drive` scope, while read-only operations typically need `https://www.googleapis.com/auth/drive.readonly`.

A folder in Google Drive. Folders can be accessed or created from `DriveApp`.

```
// Log the name of every folder in the user's Drive.
const folders = DriveApp.getFolders();
while (folders.hasNext()) {
  const folder = folders.next();
  Logger.log(folder.getName());
}
```

## Detailed documentation

### addEditor(emailAddress)

Adds the given user to the list of editors for the `Folder`. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to add. |

#### Return

`Folder` — This `Folder`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### addEditor(user)

Adds the given user to the list of editors for the `Folder`. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to add. |

#### Return

`Folder` — This `Folder`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### addEditors(emailAddresses)

Adds the given array of users to the list of editors for the `Folder`. If any of the users were already on the list of viewers, this method promotes them out of the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddresses` | `String[]` | An array of email addresses of the users to add. |

#### Return

`Folder` — This `Folder`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### addViewer(emailAddress)

Adds the given user to the list of viewers for the `Folder`. If the user was already on the list of editors, this method has no effect.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to add. |

#### Return

`Folder` — This `Folder`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### addViewer(user)

Adds the given user to the list of viewers for the `Folder`. If the user was already on the list of editors, this method has no effect.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to add. |

#### Return

`Folder` — This `Folder`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### addViewers(emailAddresses)

Adds the given array of users to the list of viewers for the `Folder`. If any of the users were already on the list of editors, this method has no effect for them.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddresses` | `String[]` | An array of email addresses of the users to add. |

#### Return

`Folder` — This `Folder`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### createFile(blob)

Creates a file in the current folder from a given `Blob` of arbitrary data.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `blob` | `BlobSource` | The data for the new file. |

#### Return

`File` — The new file.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### createFile(name, content)

Creates a text file in the current folder with the given name and contents. Throws an exception if `content` is larger than 50 MB.

```
// Create a text file with the content "Hello, world!"
DriveApp.getRootFolder().createFile('New Text File', 'Hello, world!');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the new file. |
| `content` | `String` | The content for the new file. |

#### Return

`File` — The new file.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### createFile(name, content, mimeType)

Creates a file in the current folder with the given name, contents, and MIME type. Throws an exception if `content` is larger than 10MB.

```
// Create an HTML file with the content "Hello, world!"
DriveApp.getRootFolder().createFile('New HTML File', '<b>Hello, world!</b>', MimeType.HTML);
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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### createFolder(name)

Creates a folder in the current folder with the given name.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the new folder. |

#### Return

`Folder` — The new folder.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getDateCreated()

Gets the date the `Folder` was created.

#### Return

`Date` — the date the `Folder` was created

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getDescription()

Gets the description for the `Folder`.

#### Return

`String` — the description for the `Folder`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getEditors()

Gets the list of editors for this `Folder`. If the user who executes the script does not have edit access to the `Folder`, this method returns an empty array.

```
//  Gets a folder by its ID.
//  TODO(developer): Replace the folder ID with your own.
const folder = DriveApp.getFolderById('1234567890abcdefghijklmnopqrstuvwxyz');

// Gets the list of editors and logs their names to the console.
const editors = folder.getEditors();
for (const editor of editors) {
  console.log(editor.getName());
}
```

#### Return

`User[]` — The list of editors for this `Folder` if the user has edit access or an empty array otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getFiles()

Gets a collection of all files that are children of the current folder.

#### Return

`FileIterator` — A collection of all files that are children of the current folder.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getFilesByName(name)

Gets a collection of all files that are children of the current folder and have the given name.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the files to find. |

#### Return

`FileIterator` — A collection of all files that are children of the current folder and have the given name.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getFilesByType(mimeType)

Gets a collection of all files that are children of the current folder and have the given MIME type.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `mimeType` | `String` | The MIME type of the files to find. |

#### Return

`FileIterator` — A collection of all files that are children of the current folder and have the given MIME type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getFolders()

Gets a collection of all folders that are children of the current folder.

#### Return

`FolderIterator` — A collection of all folders that are children of the current folder.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getFoldersByName(name)

Gets a collection of all folders that are children of the current folder and have the given name.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the folders to find. |

#### Return

`FolderIterator` — A collection of all folders that are children of the current folder and have the given name.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getId()

Gets the ID of the `Folder`.

#### Return

`String` — the ID of the `Folder`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getName()

Gets the name of the `Folder`.

#### Return

`String` — the name of the `Folder`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getOwner()

Gets the owner of this `Folder`.

```
//  Gets a folder by its ID.
//  TODO(developer): Replace the folder ID with your own.
const folder = DriveApp.getFolderById('1234567890abcdefghijklmnopqrstuvwxyz');

// Gets the owner of the folder and logs the name to the console.
const folderOwner = folder.getOwner();
console.log(folderOwner.getName());
```

#### Return

`User` — The owner of this `Folder`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getParents()

Gets a collection of folders that are immediate parents of the `Folder`.

#### Return

`FolderIterator` — a collection of folders that are immediate parents of the `Folder`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getResourceKey()

Gets the resource key of the `Folder` that is required to access items that have been shared using a link.

#### Return

`String` — The resource key of the `Folder`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getSecurityUpdateEligible()

Gets whether this `Folder` is eligible to apply the security update that requires a resource key for access when it's shared using a link.

Drive requires a resource key to access some files or folders that have been shared using a link. This change is part of a security update. The update is turned on by default for eligible files and folders. To turn the resource key requirement on or off for eligible files, use `setSecurityUpdateEnabled`.

Learn more about the [Security update for Google Drive](https://support.google.com/a/answer/10685032).

#### Return

`Boolean` — Whether the resource key requirement can be applied for the `Folder`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getSecurityUpdateEnabled()

Gets whether this `Folder` requires a resource key for access when it's shared using a link. This requirement is turned on by default for eligible files and folders. To turn the resource key requirement on or off for eligible files, use ` setSecurityUpdateEnabled`.

Learn more about the [Security update for Google Drive](https://support.google.com/a/answer/10685032).

#### Return

`Boolean` — Whether the resource key requirement is enabled for this `Folder`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getSharingAccess()

Gets which class of users can access the `Folder`, besides any individual users who have been explicitly given access.

#### Return

`Access` — which class of users can access the `Folder`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getSharingPermission()

Gets the permission granted to those users who can access the `Folder`, besides any individual users who have been explicitly given access.

#### Return

`Permission` — the permissions granted to users who can access the `Folder`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getSize()

Gets the number of bytes used to store the `Folder` in Drive. Note that Google Workspace application files do not count toward Drive storage limits and thus return `0` bytes.

#### Return

`Integer` — the number of bytes used to store the `Folder` in Drive

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getUrl()

Gets the URL that can be used to open the `Folder` in a Google App like Drive or Docs.

#### Return

`String` — the URL that can be used to view this `Folder` in a Google App like Drive or Docs

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### getViewers()

Gets the list of viewers and commenters for this `Folder`. If the user who executes the script does not have edit access to the `Folder`, this method returns an empty array.

```
//  Gets a folder by its ID.
//  TODO(developer): Replace the folder ID with your own.
const folder = DriveApp.getFolderById('1234567890abcdefghijklmnopqrstuvwxyz');

// Gets the list of viewers and logs their names to the console.
const viewers = folder.getViewers();
for (const viewer of viewers) {
  console.log(viewer.getName());
}
```

#### Return

`User[]` — The list of viewers and commenters for this `Folder` if the user has edit access or an empty array otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### isStarred()

Determines whether the `Folder` has been starred in the user's Drive.

#### Return

`Boolean` — `true` if the `Folder` is starred in the user's Drive; `false` if not

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### isTrashed()

Determines whether the `Folder` is in the trash of the user's Drive.

#### Return

`Boolean` — `true` if the `Folder` is in the trash of the user's Drive; `false` if not

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
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

`Folder` — This `Folder`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### removeEditor(emailAddress)

Removes the given user from the list of editors for the `Folder`. This method doesn't block users from accessing the `Folder` if they belong to a class of users who have general access—for example, if the `Folder` is shared with the user's entire domain, or if the `Folder` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to remove. |

#### Return

`Folder` — This `Folder`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### removeEditor(user)

Removes the given user from the list of editors for the `Folder`. This method doesn't block users from accessing the `Folder` if they belong to a class of users who have general access—for example, if the `Folder` is shared with the user's entire domain, or if the `Folder` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to remove. |

#### Return

`Folder` — This `Folder`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### removeViewer(emailAddress)

Removes the given user from the list of viewers and commenters for the `Folder`. This method has no effect if the user is an editor, not a viewer or commenter. This method also doesn't block users from accessing the `Folder` if they belong to a class of users who have general access—for example, if the `Folder` is shared with the user's entire domain, or if the `Folder` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to remove. |

#### Return

`Folder` — This `Folder` for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### removeViewer(user)

Removes the given user from the list of viewers and commenters for the `Folder`. This method has no effect if the user is an editor, not a viewer. This method also doesn't block users from accessing the `Folder` if they belong to a class of users who have general access—for example, if the `Folder` is shared with the user's entire domain, or if the `Folder` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to remove. |

#### Return

`Folder` — This `Folder` for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### revokePermissions(emailAddress)

Revokes the access to the `Folder` granted to the given user. This method doesn't block users from accessing the `Folder` if they belong to a class of users who have general access — for example, if the `Folder` is shared with the user's entire domain.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user whose access should be revoked. |

#### Return

`Folder` — This `Folder`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### revokePermissions(user)

Revokes the access to the `Folder` granted to the given user. This method doesn't block users from accessing the `Folder` if they belong to a class of users who have general access — for example, if the `Folder` is shared with the user's entire domain.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user whose access should be revoked. |

#### Return

`Folder` — This `Folder`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### searchFiles(params)

Gets a collection of all files that are children of the current folder and match the given search criteria. The search criteria are detailed in the [Google Drive SDK documentation](https://developers.google.com/drive/api/v2/ref-search-terms). Note that the Drive service uses v2 of the Drive API and some query fields differ from v3. Review the [field differences between v2 and v3](https://developers.google.com/drive/api/guides/v2-to-v3-reference#resource_field_differences_between_v2_and_v3).

The `params` argument is a query string that can contain string values, so take care to escape quotation marks correctly (for example `"title contains 'Gulliver\\'s Travels'"` or `'title contains "Gulliver\'s Travels"'`).

```
// Logs the name of every file that are children of the current folder and modified after February 28,
// 2022 whose name contains "untitled.""
const files = DriveApp.getRootFolder().searchFiles(
    'modifiedDate > "2022-02-28" and title contains "untitled"');
while (files.hasNext()) {
  const file = files.next();
  console.log(file.getName());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `params` | `String` | The search criteria, as detailed in the [Google Drive SDK documentation](https://developers.google.com/drive/api/v2/ref-search-terms). |

#### Return

`FileIterator` — A collection of all files that are children of the current folder and match the search criteria.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### searchFolders(params)

Gets a collection of all folders that are children of the current folder and match the given search criteria. The search criteria are detailed in the [Google Drive SDK documentation](https://developers.google.com/drive/api/v2/ref-search-terms). Note that the Drive service uses v2 of the Drive API and some query fields differ from v3. Review the [field differences between v2 and v3](https://developers.google.com/drive/api/guides/v2-to-v3-reference#resource_field_differences_between_v2_and_v3).

The `params` argument is a query string that can contain string values, so take care to escape quotation marks correctly (for example `"title contains 'Gulliver\\'s Travels'"` or `'title contains "Gulliver\'s Travels"'`).

```
// Logs the name of every folder that are children of the current folder and you own and is starred.
const folders = DriveApp.getRootFolder().searchFolders('starred = true and "me" in owners');
while (folders.hasNext()) {
  const folder = folders.next();
  console.log(folder.getName());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `params` | `String` | The search criteria, as detailed in the [Google Drive SDK documentation](https://developers.google.com/drive/api/v2/ref-search-terms). |

#### Return

`FolderIterator` — A collection of all folders that are children of the current folder and match the search criteria.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive`

---

### setDescription(description)

Sets the description for the `Folder`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `description` | `String` | the new description for the `Folder` |

#### Return

`Folder` — this `Folder`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setName(name)

Sets the name of the `Folder`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | the new name of the `Folder` |

#### Return

`Folder` — this `Folder`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setOwner(emailAddress)

Changes the owner of the `Folder`. This method also gives the previous owner explicit edit access to the `Folder`.

Drive does not support changing the ownership for items which are owned by gmail.com accounts; it's supported for Workspace accounts.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user who should become the new owner. |

#### Return

`Folder` — This `Folder`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setOwner(user)

Changes the owner of the `Folder`. This method also gives the previous owner explicit edit access to the `Folder`.

Drive does not support changing the ownership for items which are owned by gmail.com accounts; it's supported for Workspace accounts.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user who should become the new owner. |

#### Return

`Folder` — This `Folder`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setSecurityUpdateEnabled(enabled)

Sets whether the `Folder` requires a resource key for access when it's shared using a link. Eligible files and folders are enabled by default.

Learn more about the [Security update for Google Drive](https://support.google.com/a/answer/10685032).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `enabled` | `Boolean` | Whether to enable the resource key requirement for the `Folder`. |

#### Return

`Folder` — This `Folder`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setShareableByEditors(shareable)

Sets whether users with edit permissions to the `Folder` are allowed to share with other users or change the permissions. The default for a new `Folder` is `true`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `shareable` | `Boolean` | `true` if users with edit permissions should be allowed to share with other users or change the permissions; `false` if not. |

#### Return

`Folder` — This `Folder`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setSharing(accessType, permissionType)

Sets which class of users can access the `Folder` and what permissions those users are granted, besides any individual users who have been explicitly given access.

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
| `accessType` | `Access` | which class of users should be able to access the `Folder` |
| `permissionType` | `Permission` | the permissions that should be granted to users who can access the `Folder` |

#### Return

`Folder` — this `Folder`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setStarred(starred)

Sets whether the `Folder` is starred in the user's Drive. The default for new `Folder` s is `false`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `starred` | `Boolean` | `true` if the `Folder` should be starred in the user's Drive; `false` if not |

#### Return

`Folder` — this `Folder`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### setTrashed(trashed)

Sets whether the `Folder` is in the trash of the user's Drive. Only the owner may trash the `Folder`. The default for new `Folder` s is `false`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `trashed` | `Boolean` | `true` if the `Folder` should be moved to the trash of the user's Drive; `false` if not |

#### Return

`Folder` — this `Folder`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

## Deprecated methods

### addFile(child)

**Deprecated.** Instead, use `File.moveTo(destination)` or `createShortcut(targetId)`.

Adds the given file to the current folder. This method does not move the file out of its existing parent folder; a file can have more than one parent simultaneously.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `child` | `File` | The child file to add. |

#### Return

`Folder` — The new parent of the file added as a child.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### addFolder(child)

**Deprecated.** Instead, use `moveTo(destination)` or `createShortcut(targetId)`.

Adds the given folder to the current folder. This method does not move the folder out of its existing parent folder; a folder can have more than one parent simultaneously.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `child` | `Folder` | The child folder to add. |

#### Return

`Folder` — The new parent of the folder added as a child.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### removeFile(child)

**Deprecated.** Instead, use `File.moveTo(destination)`.

Removes the given file from the current folder. This method does not delete the file, but if a file is removed from all of its parents, it cannot be seen in Drive except by searching for it or using the "All items" view.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `child` | `File` | The child file to remove. |

#### Return

`Folder` — The previous parent of the child.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`

---

### removeFolder(child)

**Deprecated.** Instead, use `moveTo(destination)`.

Removes the given folder from the current folder. This method does not delete the folder or its contents, but if a folder is removed from all of its parents, it cannot be seen in Drive except by searching for it or using the "All items" view.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `child` | `Folder` | The child folder to remove. |

#### Return

`Folder` — The previous parent of the child.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/drive`
