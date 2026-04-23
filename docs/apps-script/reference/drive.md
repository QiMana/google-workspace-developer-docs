---
source: https://developers.google.com/apps-script/reference/drive
root: apps-script
fetched_at: 2026-04-23T15:20:01.465Z
---

# Drive Service

## Page Summary

- The Drive service in Apps Script allows scripts to manage files and folders in Google Drive.
- For enhanced features, including shared drive access, use the advanced Drive service.
- If using a standard Cloud project, the Drive API must be manually enabled.
- Google Workspace Administrators can disable the Drive SDK, affecting script access unless the add-on is domain-wide installed or the client is allowlisted.

This service lets scripts create, find, and modify files and folders in Google Drive. Although the built-in Drive service is easier to use, it has some limitations. For the most up-to-date features and support, and to access files or folders in shared drives, use the [advanced Drive service](https://developers.google.com/apps-script/advanced/drive).

If your script uses a [standard Cloud project](https://developers.google.com/apps-script/guides/cloud-platform-projects#standard) instead of a default Cloud project, you must manually turn on the Drive API. In your standard Cloud project, turn on the Drive API:

[Turn on the Drive API](https://console.cloud.google.com/apis/enableflow?apiid=drive.googleapis.com)

The following code sample shows how to log the names of each file in the user's My Drive folder:

```
// Logs the name of every file in the user's Drive.
var files = DriveApp.getFiles();
while (files.hasNext()) {
  var file = files.next();
  console.log(file.getName());
}
```
