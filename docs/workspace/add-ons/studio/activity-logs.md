---
source: https://developers.google.com/workspace/add-ons/studio/activity-logs
root: workspace
fetched_at: 2026-04-23T15:23:16.984Z
---

# Log activity and errors

This guide explains how to write custom logs and error messages. These messages appear in the Workspace Studio [**Activity** tab](https://studio.workspace.google.com/manage?tab=activity) and can help you troubleshoot steps that fail to run.

By default, the Activity tab logs the name of the step that runs as defined in its manifest file. To help you understand what happened during a step run, you should write custom logs for your step, too. If users encounter unexpected behavior while running your step, your logs can help them understand what happened.

A helpful log entry has two attributes:

- A chip containing a hyperlink to the resource that was created or updated by the step. For example, if your step creates a Google Doc, use the chip to link to the created Google Doc.
- A detailed error message describing why a step failed to run and how to resolve the issue.

## Create an activity log

The following code sample shows how `onExecuteFunctionCreateDocument()` can log a successful run and an error to the Activity tab.

Here's the manifest file:

### JSON

```
{
  "timeZone": "America/Los_Angeles",
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "addOns": {
    "common": {
      "name": "Log and Error Demo",
      "logoUrl": "https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/web-24dp/logo_gsuite_addons_color_1x_web_24dp.png",
      "useLocaleFromApp": true
    },
    "flows": {
      "workflowElements": [
        {
          "id": "log_and_error_demo",
          "state": "ACTIVE",
          "name": "Log and Error Demo",
          "description": "Display a log message when executed successfully, display a error message and retry execution instead.",
          "workflowAction": {
            "inputs": [
              {
                "id": "value1",
                "description": "value1",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "INTEGER"
                }
              }
            ],
            "outputs": [
              {
                "id": "result",
                "description": "execution result",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "STRING"
                }
              }
            ],
            "onConfigFunction": "onConfigFunctionCreateDocument",
            "onExecuteFunction": "onExecuteFunctionCreateDocument"
          }
        }
      ]
    }
  }
}
```

Here's the application logic code:

### Apps Script

```
function onConfigFunctionCreateDocument() {
  const firstInput = CardService.newTextInput()
    .setFieldName("value1")
    .setTitle("First Value") //"FieldName" must match an "id" in the manifest file's inputs[] array.
    .setHint("Input 1 to successfully execute the step, 0 to fail the step and return an error.")
    .setHostAppDataSource(
      CardService.newHostAppDataSource()
        .setWorkflowDataSource(
          CardService.newWorkflowDataSource()
            .setIncludeVariables(true)
        )
    );

  let cardSection = CardService.newCardSection()
    .addWidget(firstInput);

  return CardService.newCardBuilder()
    .addSection(cardSection)
    .build();
}

function onExecuteFunctionCreateDocument(event) {

  // true if the document is successfully created, false if something goes wrong.
  var successfulRun = event.workflow.actionInvocation.inputs["value1"].integerValues[0];
  console.log("The user input is: ", successfulRun);

  // If successful, return an activity log linking to the created document.
  if (successfulRun == 1) {
    let logChip = AddOnsResponseService.newTextFormatChip()
      .setTextFormatIcon(
        AddOnsResponseService.newTextFormatIcon()
          .setMaterialIconName("edit_document")
      )
      .setUrl("https://docs.google.com/document/d/{DOCUMENT}")
      .setLabel("Mock Document");

    let output = AddOnsResponseService.newVariableData()
      .addStringValue("Created Google Doc");

    const workflowAction = AddOnsResponseService.newReturnOutputVariablesAction()
      .addVariableData("result", output)
      // Set the user-facing error log
      .setLog(
        AddOnsResponseService.newWorkflowTextFormat()
          .addTextFormatElement(
            AddOnsResponseService.newTextFormatElement()
              .setText("Created Google Doc")
          )
          .addTextFormatElement(
            AddOnsResponseService.newTextFormatElement()
              .setTextFormatChip(logChip)
          )
          .addTextFormatElement(
            AddOnsResponseService.newTextFormatElement()
              .setText("Created doc detailing how to improve product.")
          )
      );

    let hostAppAction = AddOnsResponseService.newHostAppAction()
      .setWorkflowAction(workflowAction);

    return AddOnsResponseService.newRenderActionBuilder()
      .setHostAppAction(hostAppAction)
      .build();
  }
  // Otherwise, return an activity log containing an error explaining what happened and how to resolve the issue.
  else {
    let errorChip = AddOnsResponseService.newTextFormatChip()
      .setTextFormatIcon(
        AddOnsResponseService.newTextFormatIcon()
          .setMaterialIconName("file_open")
      )
      .setLabel("Mock Document");

    const workflowAction = AddOnsResponseService.newReturnElementErrorAction()
      .setErrorActionability(AddOnsResponseService.ErrorActionability.ACTIONABLE)
      .setErrorRetryability(AddOnsResponseService.ErrorRetryability.NOT_RETRYABLE)
      // Set the user-facing error log
      .setErrorLog(
        AddOnsResponseService.newWorkflowTextFormat()
          .addTextFormatElement(
            AddOnsResponseService.newTextFormatElement()
              .setText("Failed to create Google Doc.")
          )
          .addTextFormatElement(
            AddOnsResponseService.newTextFormatElement()
              .setTextFormatChip(errorChip)
          )
          .addTextFormatElement(
            AddOnsResponseService.newTextFormatElement()
              .setText("Unable to create Google Document because OAuth verification failed. Grant one of these authorization scopes and try again: https://www.googleapis.com/auth/documents, \nhttps://www.googleapis.com/auth/drive, \nhttps://www.googleapis.com/auth/drive.file")
          )
      );

    let hostAppAction = AddOnsResponseService.newHostAppAction()
      .setWorkflowAction(workflowAction);

    return AddOnsResponseService.newRenderActionBuilder()
      .setHostAppAction(hostAppAction)
      .build();
  }
}
```

## View activity logs

To view activity logs, go to the Workspace Studio [**Activity** tab](https://studio.workspace.google.com/manage?tab=activity). This tab displays a history of step executions, including any custom logs or error messages you've defined.

## Related topics

- [Build a step](https://developers.google.com/workspace/add-ons/studio/build-step)
- [Input variables](https://developers.google.com/workspace/add-ons/studio/input-variables)
- [Validate an input variable](https://developers.google.com/workspace/add-ons/studio/validate-inputs)
- [Output variables](https://developers.google.com/workspace/add-ons/studio/output-variables)
- [Workspace Studio event objects](https://developers.google.com/workspace/add-ons/studio/event-objects)
