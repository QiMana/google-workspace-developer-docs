---
source: https://developers.google.com/workspace/drive/api/guides/remove-label
root: workspace
fetched_at: 2026-04-23T15:27:42.589Z
---

# Remove a label from a file

This page describes how to remove a label on a single Google Drive file.

To remove the file label metadata from a file, use the [`files.modifyLabels`](../reference/rest/v2/files/modifyLabels.md) method. The [request body](../reference/rest/v2/files/modifyLabels.md#request-body) contains an instance of [`ModifyLabelsRequest`](../reference/rest/v2/files/modifyLabels.md#modifylabelsrequest) to modify the set of labels on a file. The request might contain several modifications that are applied atomically. That is, if any modifications aren't valid, then the entire update is unsuccessful and none of the (potentially dependent) changes are applied.

The `ModifyLabelsRequest` contains an instance of [`LabelModification`](../reference/rest/v2/files/modifyLabels.md#labelmodification) which is a modification to a label on a file. It might also contain an instance of [`FieldModification`](../reference/rest/v2/files/modifyLabels.md#fieldmodification) which is a modification to a label's field. To remove the label from the file, set `FieldModification.removeLabel` to `True`.

If successful, the [response body](../reference/rest/v2/files/modifyLabels.md#response-body) contains the labels added or updated by the request. These exist within a `modifiedLabels` object of type [`Label`](../reference/rest/v2/Label.md).

## Example

The following code sample shows how to use the `labelId` to remove all fields associated with the label using the `fileId`. For example, if a label contains both text and user fields, removing a label deletes *both* the text and user fields associated with the label. Whereas, unsetting the text field removes it from the label but leaves the user field untouched. For more information, see [Unset a label field on a file](./unset-label.md).

### Java

```
ModifyLabelsRequest modifyLabelsRequest =
  new ModifyLabelsRequest()
      .setLabelModifications(
          ImmutableList.of(
              new LabelModification()
                .setLabelId("LABEL_ID")
                .setRemoveLabel(true)));

ModifyLabelsResponse modifyLabelsResponse = driveService.files().modifyLabels("FILE_ID", modifyLabelsRequest).execute();
```

### Python

```
label_modification = {'labelId':'LABEL_ID', 'removeLabel': True]}

modified_labels = drive_service.files().modifyLabels(fileId="FILE_ID", body = {'labelModifications' : [label_modification]}).execute();
```

### Node.js

```
/**
* Remove a label on a Drive file
* @return{obj} updated label data
**/
async function removeLabel() {
  // Get credentials and build service
  // TODO (developer) - Use appropriate auth mechanism for your app

  const {GoogleAuth} = require('google-auth-library');
  const {google} = require('googleapis');

  const auth = new GoogleAuth({scopes: 'https://www.googleapis.com/auth/drive'});
  const service = google.drive({version: 'v3', auth});
  const labelModification = {
    'labelId': 'LABEL_ID',
    'removeLabel': True,
  };
  const labelModificationRequest = {
    'labelModifications': [labelModification],
  };
  try {
    const updateResponse = await service.files.modifyLabels({
      fileId: 'FILE_ID',
      resource: labelModificationRequest,
    });
    return updateResponse;
  } catch (err) {
    // TODO (developer) - Handle error
    throw err;
  }
```

Replace the following:

- LABEL\_ID: The `labelId` of the label to modify. To locate the labels on a file, use the [`files.listLabels`](../reference/rest/v2/files/listLabels.md) method.
- FILE\_ID: The `fileId` of the file for which the labels are modified.
