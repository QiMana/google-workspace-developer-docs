---
source: https://developers.google.com/workspace/drive/api/guides/set-label
root: workspace
fetched_at: 2026-04-23T15:27:43.598Z
---

# Set a label field on a file

This page describes how to set a label [`Field`](../../labels/reference/rest/v2/labels.md#field) on a single Google Drive file.

To add metadata to a file by setting a file label, use the [`files.modifyLabels`](../reference/rest/v2/files/modifyLabels.md) method. The [request body](../reference/rest/v2/files/modifyLabels.md#request-body) contains an instance of [`ModifyLabelsRequest`](../reference/rest/v2/files/modifyLabels.md#modifylabelsrequest) to modify the set of labels on a file. The request might contain several modifications that are applied atomically. That is, if any modifications aren't valid, then the entire update is unsuccessful and none of the (potentially dependent) changes are applied.

The `ModifyLabelsRequest` contains an instance of [`LabelModification`](../reference/rest/v2/files/modifyLabels.md#labelmodification) which is a modification to a label on a file. It might also contain an instance of [`FieldModification`](../reference/rest/v2/files/modifyLabels.md#fieldmodification) which is a modification to a label's field.

If successful, the [response body](../reference/rest/v2/files/modifyLabels.md#response-body) contains the labels added or updated by the request. These exist within a `modifiedLabels` object of type [`Label`](../reference/rest/v2/Label.md).

## Example

The following code sample shows how to use the `fieldId` of a text field to set a value for this [`Field`](../../labels/reference/rest/v2/labels.md#field) on a file. When a label `Field` is initially set on a file, it applies the label to the file. You can then unset a single field or remove all fields associated with the label. For more information, see [Unset a label field on a file](./unset-label.md) and [Remove a label from a file](./remove-label.md).

### Java

```
LabelFieldModification fieldModification =
new LabelFieldModification().setFieldId("FIELD_ID").setSetTextValues(ImmutableList.of("VALUE"));

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
field_modification = {'fieldId':'FIELD_ID','setTextValues':['VALUE']}
label_modification = {'labelId':'LABEL_ID', 'fieldModifications':[field_modification]}

modified_labels = drive_service.files().modifyLabels(fileId="FILE_ID", body = {'labelModifications' : [label_modification]}).execute()
```

### Node.js

```
/**
* Set a label with a text field on a Drive file
* @return{obj} updated label data
**/
async function setLabelTextField() {
  // Get credentials and build service
  // TODO (developer) - Use appropriate auth mechanism for your app

  const {GoogleAuth} = require('google-auth-library');
  const {google} = require('googleapis');

  const auth = new GoogleAuth({scopes: 'https://www.googleapis.com/auth/drive'});
  const service = google.drive({version: 'v3', auth});
  const fieldModification = {
    'fieldId': 'FIELD_ID',
    'setTextValues': ['VALUE'],
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
- VALUE: The new `value` for this field.
- LABEL\_ID: The `labelId` of the label to modify.
- FILE\_ID: The `fileId` of the file for which the labels are modified.

## Notes

- To set a label with no fields, apply `labelModifications` with no `fieldModifications` present.
- To set values for selection field options, use the [`Choice`](../../labels/reference/rest/v2/labels.md#choice) id of the value that you can get by fetching the label schema in the [Drive Labels API](../../labels/guides/overview.md).
- Only a `Field` that supports lists of values can have multiple values set, otherwise you'll receive a `400: Bad Request` error response.
- Set the proper value type for the selected `Field` (such as integer, text, user, etc.), otherwise you'll receive a `400: Bad Request` error response. You can retrieve the field data type using the [Drive Labels API](../../labels/reference/rest/v2/labels.md#field).
