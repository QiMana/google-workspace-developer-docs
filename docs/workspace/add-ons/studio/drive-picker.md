---
source: https://developers.google.com/workspace/add-ons/studio/drive-picker
root: workspace
fetched_at: 2026-04-23T15:23:18.980Z
---

# Select Google Drive files and folders with Google Picker

To let users select files or folders from Google Drive, you can configure a [`SelectionInput`](https://developers.google.com/apps-script/reference/card-service/selection-input) widget to use the Google Picker. This guide explains how to set up the Google Picker in your add-on's configuration card.

## Configure the Google Picker

To enable the selection input widget to select files or folders from Google Drive, you must configure its `PlatformDataSource` with `CommonDataSource` and `DriveDataSourceSpec`.

1. Set the `CommonDataSource` to `DRIVE`. This designates Google Drive as the source for the selection input.
2. (Optional) To specify which file types users can select, add a `DriveDataSourceSpec`. You can specify one or more of the following item types:
	- `DOCUMENTS`
		- `SPREADSHEETS`
		- `PRESENTATIONS`
		- `PDFS`
		- `FORMS`
		- `FOLDERS`

## Example: Select spreadsheets and PDFs

The following example builds a configuration card that lets users select multiple spreadsheets or PDF files from Google Drive. When the step runs, it returns the file IDs of the selected items as output variables.

### JSON

```
{
  "timeZone": "America/Los_Angeles",
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "addOns": {
    "common": {
      "name": "Drive Picker Demo",
      "logoUrl": "https://www.gstatic.com/images/icons/material/system/1x/pets_black_48dp.png",
      "useLocaleFromApp": true
    },
    "flows": {
      "workflowElements": [
        {
          "id": "file_selection",
          "state": "ACTIVE",
          "name": "File selection",
          "workflowAction": {
            "inputs": [
              {
                "id": "drive_picker_1",
                "description": "Choose a file from Google Drive",
                "dataType": {
                  "basicType": "STRING"
                }
              }
            ],
            "outputs": [
              {
                "id": "fileId",
                "description": "The id of the selected file",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "STRING"
                }
              }
            ],
            "onConfigFunction": "onConfig",
            "onExecuteFunction": "onExecute"
          }
        }
      ]
    }
  }
}
```

### Apps Script

```
/**
* Returns a configuration card for the step.
* This card includes a selection input widget configured as a Google Picker
* that lets users select spreadsheets and PDFs.
*/
function onConfig() {
  // Allows users to select either spreadsheets or PDFs
  const driveSpec = CardService.newDriveDataSourceSpec()
    .addItemType(
      CardService.DriveItemType.SPREADSHEETS
    )
    .addItemType(
      CardService.DriveItemType.PDFS
    );

  const platformSource = CardService.newPlatformDataSource()
    .setCommonDataSource(
      CardService.CommonDataSource.DRIVE
    )
    .setDriveDataSourceSpec(driveSpec);

  const selectionInput =
    CardService.newSelectionInput()
      .setFieldName("drive_picker_1")
      .setPlatformDataSource(platformSource)
      .setTitle("Drive Picker")
      .setType(
        CardService.SelectionInputType.MULTI_SELECT
      );

  var sectionBuilder =
    CardService.newCardSection()
      .addWidget(selectionInput)

  return CardService.newCardBuilder()
    .addSection(sectionBuilder)
    .build();
}

/**
* Executes when the step runs.
* This function retrieves the file ID of the item selected in the Google Picker
* and returns it as an output variable.
* @param {Object} event The event object passed by the Flows runtime.
* @return {Object} The output variables object.
*/
function onExecute(event) {
  //Extract the selected file's ID during execution
  console.log("eventObject: " + JSON.stringify(event));
  var fileId = event.workflow.actionInvocation.inputs["drive_picker_1"].stringValues[0];

  const variableData = AddOnsResponseService.newVariableData()
    .addStringValue(fileId);

  let textFormatElement = AddOnsResponseService.newTextFormatElement()
    .setText("A file has been selected!");

  let workflowTextFormat = AddOnsResponseService.newWorkflowTextFormat()
    .addTextFormatElement(textFormatElement);

  let workflowAction = AddOnsResponseService.newReturnOutputVariablesAction()
    .addVariableData("fileId", variableData)
    .setLog(workflowTextFormat);

  let hostAppAction = AddOnsResponseService.newHostAppAction()
    .setWorkflowAction(workflowAction);

  return AddOnsResponseService.newRenderActionBuilder()
    .setHostAppAction(hostAppAction)
    .build();
}
```

## Related topics

- [Build a step](https://developers.google.com/workspace/add-ons/studio/build-a-step)
- [Build a configuration card](https://developers.google.com/workspace/add-ons/studio/configuration-cards)
- [Input variables](https://developers.google.com/workspace/add-ons/studio/input-variables)
- [Output variables](https://developers.google.com/workspace/add-ons/studio/output-variables)
