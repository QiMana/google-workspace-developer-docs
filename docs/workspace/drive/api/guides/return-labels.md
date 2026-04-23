---
source: https://developers.google.com/workspace/drive/api/guides/return-labels
root: workspace
fetched_at: 2026-04-23T15:27:43.328Z
---

# Return a label from a file resource

This page describes how to return specific labels from a Google Drive file resource.

To specify which labels that you want to retrieve, use the [`files.get`](../reference/rest/v2/files/get.md) method or any method that returns a [file resource](../../labels/reference/rest/v2/labels.md). The request body must be empty.

If successful, the [response body](../reference/rest/v2/files/get.md#response-body) contains an instance of [`File`](../reference/rest/v2/files.md#File).

## Example

The following code sample shows how to use the `fileId`, plus the `labelId`, to return the set of specific labels. The [`includeLabels`](../reference/rest/v2/files/get.md#query-parameters) object is a comma-separated list of IDs. The `labelInfo` object in the `fields` parameter contains labels set on the file and requested within `includeLabels`.

### Java

```
File file = driveService.files().get("FILE_ID").setIncludeLabels("LABEL_ID,LABEL_ID").setFields("labelInfo").execute();
```

### Python

```
file = drive_service.files().get(fileId="FILE_ID", includeLabels="LABEL_ID,LABEL_ID", fields="labelInfo").execute();
```

### Node.js

```
/**
* Get a Drive file with specific labels
* @return{obj} file with labelInfo
**/
async function getFileWithSpecificLabels() {
  // Get credentials and build service
  // TODO (developer) - Use appropriate auth mechanism for your app

  const {GoogleAuth} = require('google-auth-library');
  const {google} = require('googleapis');

  const auth = new GoogleAuth({scopes: 'https://www.googleapis.com/auth/drive'});
  const service = google.drive({version: 'v3', auth});
  try {
    const file = await service.files.get({
      fileId: 'FILE_ID',
      includeLabels: 'LABEL_ID,LABEL_ID',
      fields:'labelInfo',
    });
    return file;
  } catch (err) {
    // TODO (developer) - Handle error
    throw err;
  }
}
```

Replace the following:

- FILE\_ID: The `fileId` of the file containing the labels.
- LABEL\_ID: The `labelId` of a label to return. To locate the labels on a file, use the [`files.listLabels`](../reference/rest/v2/files/listLabels.md) method.

## Notes

- Any method returning a [file resource](../../labels/reference/rest/v2/labels.md) supports the `includeLabels` field and query parameter. For example, [`files.copy`](../reference/rest/v2/files/copy.md), [`files.list`](../reference/rest/v2/files/list.md), and [`files.update`](../reference/rest/v2/files/update.md).
