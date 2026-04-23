---
source: https://developers.google.com/apps-script/reference/drive/access
root: apps-script
fetched_at: 2026-04-23T15:20:04.509Z
---

# Enum Access

## Page Summary

- The `Access` enum represents classes of users who can access a file or folder in Google Drive.
- To use an `Access` enum, you call `DriveApp.Access` followed by the specific access property, such as `DriveApp.Access.ANYONE`.
- The available `Access` properties include `ANYONE`, `ANYONE_WITH_LINK`, `DOMAIN`, `DOMAIN_WITH_LINK`, and `PRIVATE`.
- `ANYONE` and `ANYONE_WITH_LINK` allow access without sign-in, while `DOMAIN`, `DOMAIN_WITH_LINK`, and `PRIVATE` require sign-in.
- Domain administrators can restrict the `ANYONE` and `ANYONE_WITH_LINK` settings for Google Workspace users.

An enum representing classes of users who can access a file or folder, besides any individual users who have been explicitly given access. These properties can be accessed from `DriveApp.Access`.

To call an enum, you call its parent class, name, and property. For example, ` DriveApp.Access.ANYONE`.

```
// Creates a folder that anyone on the Internet can read from and write to.
// (Domain administrators can prohibit this setting for users of a Google
// Workspace domain.)
const folder = DriveApp.createFolder('Shared Folder');
folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
```
