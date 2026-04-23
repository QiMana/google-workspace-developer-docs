---
source: https://developers.google.com/apps-script/api/samples/execute
root: apps-script
fetched_at: 2026-04-23T15:18:14.407Z
---

# Execute Google Apps Script functions

## Page Summary

- The Apps Script API allows you to remotely execute functions in a script project you have access to.
- You can call an Apps Script function with input parameters and receive a returned response.
- Examples on this page illustrate common execution operations using the API.
- To find the script ID, go to Project Settings in your Apps Script project and copy the Script ID.
- The `scripts.run` request calls an Apps Script function, passing it parameters and executing it in development mode.

The Google Apps Script API lets you remotely execute a function in a script project you have access to. Your app can call a given Apps Script function, providing it input parameters if needed, and receive a response.

The examples on this page illustrate how common execution operations can be achieved with the API. For more information, including special [authorization requirements](https://developers.google.com/apps-script/api/how-tos/execute#requirements), see the [Execute a function](https://developers.google.com/apps-script/api/how-tos/execute) guide.

In these examples, the placeholders scriptId is used to indicate where you would provide the script project ID. Follow the steps below to find the script ID:

1. In the Apps Script project, at the top left, click **Project Settings** .
2. Next to "Script ID," click **Copy**.

## Execute a function

The following [scripts.run](https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run) request calls an Apps Script function named `listFolderContent`, passing it the Google Drive folderId and an integer `MAX_SIZE` as arguments. The function is executed in development mode, meaning that the most recently saved version of the function is executed, regardless of what version is deployed as an executable.

The request protocol is shown below. The [Execute functions](https://developers.google.com/apps-script/api/how-tos/execute) guide shows how to implement a run request in different languages using the Google API client libraries.

```
POST https://script.googleapis.com/v1/scripts/scriptId:run
```

```
{
  "function": "listFolderContent",
  "parameters": [
    folderId,
    MAX_SIZE
  ],
  "devMode": true
}
```

The [response](https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run#response-body) to this request, once the called Apps Script function completes, contains the results of the execution or an error response. In this example, the function successfully returns an array of file names:

```
{
  "response": {
    "result": [
      "fileTitle1",
      "fileTitle2",
      "fileTitle3"
    ]
  },
}
```

If the function encountered an error during the Apps Script execution, the response could look like this:

```
{
  "response": {
    "error": {
      "code": 3,
      "message": "ScriptError",
      "details": [{
        "@type": "type.googleapis.com/google.apps.script.v1.ExecutionError",
        "errorMessage": "The script enountered an exeception it could not resolve.",
        "errorType": "ScriptError",
        "scriptStackTraceElements": [{
          "function": "listFolderContent",
          "lineNumber": 14
        }]
      }]
    }
  }
}
```
