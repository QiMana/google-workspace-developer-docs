---
source: https://developers.google.com/workspace/drive/api/guides/unset-label
root: workspace
fetched_at: 2026-04-23T15:27:44.232Z
---

# Unset a label field on a file

This page describes how to unset a label [`Field`](../../labels/reference/rest/v2/labels.md#field) on a single Google Drive file.

To remove metadata from a file by unsetting a file label, use the [`files.modifyLabels`](../reference/rest/v2/files/modifyLabels.md) method. The [request body](../reference/rest/v2/files/modifyLabels.md#request-body) contains an instance of [`ModifyLabelsRequest`](../reference/rest/v2/files/modifyLabels.md#modifylabelsrequest) to modify the set of labels on a file. The request might contain several modifications that are applied atomically. That is, if any modifications aren't valid, then the entire update is unsuccessful and none of the (potentially dependent) changes are applied.

The `ModifyLabelsRequest` contains an instance of [`LabelModification`](../reference/rest/v2/files/modifyLabels.md#labelmodification) which is a modification to a label on a file. It might also contain an instance of [`FieldModification`](../reference/rest/v2/files/modifyLabels.md#fieldmodification) which is a modification to a label's field. To unset the values for the field, set `FieldModification.unsetValues` to `True`.

If successful, the [response body](../reference/rest/v2/files/modifyLabels.md#response-body) contains the labels added or updated by the request. These exist within a `modifiedLabels` object of type [`Label`](../reference/rest/v2/Label.md).

## Example

The following code sample shows how to use the `fieldId` and `labelId` to unset the field values on the associated `fileId`. For example, if a label contains both text and user fields, unsetting the text field removes it from the label but leaves the user field untouched. Whereas removing a label deletes *both* the text and user fields associated with the label. For more information, see [Remove a label from a file](./remove-label.md).

### Java

```
LabelFieldModification fieldModification =
  new LabelFieldModification().setFieldId("FIELD_ID").setUnsetValues(true);

ModifyLabelsRequest modifyLabelsRequest =
  new ModifyLabelsRequest()
      .setLabelModifications(
          ImmutableList.of(
              new LabelModification()
                .setLabelId("LABEL_ID")
                .setFieldModifications(ImmutableList.of(fieldModification))));

ModifyLabelsResponse modifyLabelsResponse = driveService.files().modifyLabels("FILE_ID", modifyLabelsRequest).execute();
```

### Python

```
field_modification = {'fieldId':'FIELD_ID','unsetValues':True}
label_modification = {'labelId':'LABEL_ID', 'fieldModifications':[field_modification]}

modified_labels = drive_service.files().modifyLabels(fileId="FILE_ID", body = {'labelModifications' : [label_modification]}).execute();
```

### Node.js

```
/**
* Unset a label with a field on a Drive file
* @return{obj} updated label data
**/
async function unsetLabelField() {
  // Get credentials and build service
  // TODO (developer) - Use appropriate auth mechanism for your app

  const {GoogleAuth} = require('google-auth-library');
  const {google} = require('googleapis');

  const auth = new GoogleAuth({scopes: 'https://www.googleapis.com/auth/drive'});
  const service = google.drive({version: 'v3', auth});
  const fieldModification = {
    'fieldId': 'FIELD_ID',
    'unsetValues': True,
  };
  const labelModification = {
    'labelId': 'LABEL_ID',
    'fieldModifications': [fieldModification],
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
}
```

Replace the following:

- FIELD\_ID: The `fieldId` of the field to modify. To locate the `fieldId`, retrieve the label using the [Google Drive Labels API](../../labels/guides/search-label.md).
- LABEL\_ID: The `labelId` of the label to modify.
- FILE\_ID: The `fileId` of the file for which the labels are modified.
