---
source: https://developers.google.com/apps-script/reference/drive/permission
root: apps-script
fetched_at: 2026-04-23T15:20:04.650Z
---

# Enum Permission

## Page Summary

- The `Permission` enum represents the permissions granted to users for accessing files or folders in Google Drive.
- Permissions can be accessed using `DriveApp.Permission`.
- The `Permission` enum includes properties like `VIEW`, `EDIT`, `COMMENT`, `OWNER`, `ORGANIZER`, `FILE_ORGANIZER`, and `NONE`, each defining a specific level of access or role.
- Some `Permission` values like `OWNER`, `ORGANIZER`, `FILE_ORGANIZER`, and `NONE` (unless combined with `Access.ANYONE`) can be returned to indicate current permissions but cannot be set directly using `setSharing`.

An enum representing the permissions granted to users who can access a file or folder, besides any individual users who have been explicitly given access. These properties can be accessed from `DriveApp.Permission`.

To call an enum, you call its parent class, name, and property. For example, ` DriveApp.Permission.VIEW`.

```
// Creates a folder that anyone on the Internet can read from and write to.
// (Domain administrators can prohibit this setting for Google Workspace users.)
const folder = DriveApp.createFolder('Shared Folder');
folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
```
