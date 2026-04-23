---
source: https://developers.google.com/apps-script/advanced/drive-labels
root: apps-script
fetched_at: 2026-04-23T15:18:02.744Z
---

# Advanced Drive Labels Service

## Page Summary

- The Google Drive Labels advanced service in Apps Script allows you to create and manage labels for Drive files and folders.
- This service uses the Drive Labels API, and you must turn on this advanced service before use.
- You can use the Advanced Drive Service to apply or remove Drive labels.
- The documentation for the Google Drive Labels API serves as a reference for this service.
- Sample code is provided to demonstrate listing labels, getting a specific label, and listing labels applied to a Drive item.

using the Drive Labels advanced service in Google Apps Script.

Create and manage labels for your Drive files and folders with the Google Drive Labels advanced service. With this advanced service, you can use all the features of the [Drive Labels API](../../workspace/drive/labels/guides/overview.md) in Google Apps Script.

To apply or remove Drive labels, use the [Advanced Drive Service](./drive.md).

This is an advanced service that you must [turn on before use](../guides/services/advanced.md).

## Reference

For more information about this service, see the documentation for the [Google Drive Labels API](../../workspace/drive/labels/guides/overview.md). Like all advanced services in Apps Script, the Drive Labels API service uses the same objects, methods, and parameters as the public API.

To report issues and find other support, see the Google Drive Labels API [support guide](../../workspace/drive/labels/support.md).

## Sample code

The following sample code uses [version 2](../../workspace/drive/labels/reference/rest/v2.md) of the API.

### List labels

The following code sample shows how to get a list of labels available to the user making the request.

```
/**
 * List labels available to the user.
 */
function listLabels() {
  let pageToken = null;
  let labels = [];
  do {
    try {
      const response = DriveLabels.Labels.list({
        publishedOnly: true,
        pageToken: pageToken,
      });
      pageToken = response.nextPageToken;
      labels = labels.concat(response.labels);
    } catch (err) {
      // TODO (developer) - Handle exception
      console.log("Failed to list labels with error %s", err.message);
    }
  } while (pageToken != null);

  console.log("Found %d labels", labels.length);
}
```

### Get a label

The following code sample shows how to get a single label by its [resource name](../../workspace/drive/labels/reference/rest/v2/labels/get.md) (which is the string value of the label). To find the label name, get the list of labels through the API or use the Drive labels manager. For more information on the labels manager, go to [Manage Drive labels](https://support.google.com/a/answer/9292382).

```
/**
 * Get a label by name.
 * @param {string} labelName The label name.
 */
function getLabel(labelName) {
  try {
    const label = DriveLabels.Labels.get(labelName, {
      view: "LABEL_VIEW_FULL",
    });
    const title = label.properties.title;
    const fieldsLength = label.fields.length;
    console.log(
      \`Fetched label with title: '${title}' and ${fieldsLength} fields.\`,
    );
  } catch (err) {
    // TODO (developer) - Handle exception
    console.log("Failed to get label with error %s", err.message);
  }
}
```

### List labels for a Drive item

The following code sample shows how to get a Drive item and list all labels applied to that item.

```
/**
 * List Labels on a Drive Item
 * Fetches a Drive Item and prints all applied values along with their to their
 * human-readable names.
 *
 * @param {string} fileId The Drive File ID
 */
function listLabelsOnDriveItem(fileId) {
  try {
    const appliedLabels = Drive.Files.listLabels(fileId);

    console.log(
      "%d label(s) are applied to this file",
      appliedLabels.labels.length,
    );

    for (const appliedLabel of appliedLabels.labels) {
      // Resource name of the label at the applied revision.
      const labelName = \`labels/${appliedLabel.id}@${appliedLabel.revisionId}\`;

      console.log("Fetching Label: %s", labelName);
      const label = DriveLabels.Labels.get(labelName, {
        view: "LABEL_VIEW_FULL",
      });

      console.log("Label Title: %s", label.properties.title);

      for (const fieldId of Object.keys(appliedLabel.fields)) {
        const fieldValue = appliedLabel.fields[fieldId];
        const field = label.fields.find((f) => f.id === fieldId);

        console.log(
          \`Field ID: ${field.id}, Display Name: ${field.properties.displayName}\`,
        );
        switch (fieldValue.valueType) {
          case "text":
            console.log("Text: %s", fieldValue.text[0]);
            break;
          case "integer":
            console.log("Integer: %d", fieldValue.integer[0]);
            break;
          case "dateString":
            console.log("Date: %s", fieldValue.dateString[0]);
            break;
          case "user": {
            const user = fieldValue.user
              .map((user) => {
                return \`${user.emailAddress}: ${user.displayName}\`;
              })
              .join(", ");
            console.log(\`User: ${user}\`);
            break;
          }
          case "selection": {
            const choices = fieldValue.selection.map((choiceId) => {
              return field.selectionOptions.choices.find(
                (choice) => choice.id === choiceId,
              );
            });
            const selection = choices
              .map((choice) => {
                return \`${choice.id}: ${choice.properties.displayName}\`;
              })
              .join(", ");
            console.log(\`Selection: ${selection}\`);
            break;
          }
          default:
            console.log("Unknown: %s", fieldValue.valueType);
            console.log(fieldValue.value);
        }
      }
    }
  } catch (err) {
    // TODO (developer) - Handle exception
    console.log("Failed with error %s", err.message);
  }
}
```
