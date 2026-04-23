---
source: https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run
root: apps-script
fetched_at: 2026-04-23T15:18:18.321Z
---

# Method: scripts.run

## Page Summary

- The `scripts.run` method in the Apps Script API allows you to execute a function within a deployed Apps Script project.
- This method requires authorization using an OAuth 2.0 token with appropriate scopes.
- The HTTP request uses a POST method with the script ID as a path parameter.
- The request body specifies the function name to execute and optional parameters.
- The response body indicates the execution status, including success with a result or failure with an error.

Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project.

This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes."

The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.

### HTTP request

`POST https://script.googleapis.com/v1/scripts/{deploymentId}:run`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>deploymentId</code></td><td><p><code>string</code></p><p>The deployment ID for the API Executable deployment. <a href="https://developers.google.com/apps-script/concepts/deployments#find-deployment">Find the deployment ID</a> under <strong>Deploy > Manage deployments</strong> in the script editor.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "function": string,
  "parameters": [
    value
  ],
  "sessionState": string,
  "devMode": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>function</code></td><td><p><code>string</code></p><p>The name of the function to execute in the given script. The name does not include parentheses or parameters. It can reference a function in an included library such as <code>Library.libFunction1</code>.</p></td></tr><tr><td><code>parameters[]</code></td><td><p><code>value (<code>Value</code> format)</code></p><p>The parameters to be passed to the function being executed. The object type for each parameter should match the expected type in Apps Script. Parameters cannot be Apps Script-specific object types (such as a <code>Document</code> or a <code>Calendar</code>); they can only be primitive types such as <code>string</code>, <code>number</code>, <code>array</code>, <code>object</code>, or <code>boolean</code>. Optional.</p></td></tr><tr><td><code>sessionState</code></td><td><p><code>string</code></p><p><b>Deprecated</b>. For use with Android add-ons only. An ID that represents the user's current session in the Android app for Google Docs or Sheets, included as extra data in the <a href="https://developer.android.com/guide/components/intents-filters.html">Intent</a> that launches the add-on. When an Android add-on is run with a session state, it gains the privileges of a <a href="https://developers.google.com/apps-script/guides/bound">bound</a> script—that is, it can access information like the user's current cursor position (in Docs) or selected cell (in Sheets). To retrieve the state, call <code>Intent.getStringExtra("com.google.android.apps.docs.addons.SessionState")</code>. Optional.</p></td></tr><tr><td><code>devMode</code></td><td><p><code>boolean</code></p><p>If <code>true</code> and the user is an owner of the script, the script runs at the most recently saved version rather than the version deployed for use with the Apps Script API. Optional; default is <code>false</code>.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains data with the following structure:

A representation of an execution of an Apps Script function started with `run`. The execution response does not arrive until the function finishes executing. The maximum execution runtime is listed in the [Apps Script quotas guide](../../../../../guides/services/quotas.md#current_limitations).

After execution has started, it can have one of four outcomes:

- If the script function returns successfully, the `response` field contains an `ExecutionResponse` object with the function's return value in the object's `result` field.
- If the script function (or Apps Script itself) throws an exception, the `error` field contains a `Status` object. The `Status` object's `details` field contains an array with a single `ExecutionError` object that provides information about the nature of the error.
- If the execution has not yet completed, the `done` field is `false` and the neither the `response` nor `error` fields are present.
- If the `run` call itself fails (for example, because of a malformed request or an authorization error), the method returns an HTTP response code in the 4XX range with a different format for the response body. Client libraries automatically convert a 4XX response into an exception class.

JSON representation

```
{
  "done": boolean,

  // Union field result can be only one of the following:
  "error": {
    object (Status)
  },
  "response": {
    "@type": string,
    field1: ...,
    ...
  }
  // End of list of possible types for union field result.
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>done</code></td><td><p><code>boolean</code></p><p>This field indicates whether the script execution has completed. A completed execution has a populated <code>response</code> field containing the <code>ExecutionResponse</code> from function that was executed.</p></td></tr><tr><td colspan="2">Union field <code>result</code>. The operation result, which can be either an <code>error</code> or a valid <code>response</code>. If <code>done</code> == <code>false</code>, neither <code>error</code> nor <code>response</code> is set. If <code>done</code> == <code>true</code>, exactly one of <code>error</code> or <code>response</code> may be set. Some services might not provide the result. <code>result</code> can be only one of the following:</td></tr><tr><td><code>error</code></td><td><p><code>object (<code>Status</code>)</code></p><p>If a <code>run</code> call succeeds but the script function (or Apps Script itself) throws an exception, this field contains a <code>Status</code> object. The <code>Status</code> object's <code>details</code> field contains an array with a single <code>ExecutionError</code> object that provides information about the nature of the error.</p></td></tr><tr><td><code>response</code></td><td><p><code>object</code></p><p>If the script function returns successfully, this field contains an <code>ExecutionResponse</code> object with the function's return value.</p><p>An object containing fields of an arbitrary type. An additional field <code>"@type"</code> contains a URI identifying the type. Example: <code>{ "id": 1234, "@type": "types.example.com/standard/id" }</code>.</p></td></tr></tbody></table>

### Authorization Scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds`
- `https://apps-apis.google.com/a/feeds/alias/`
- `https://apps-apis.google.com/a/feeds/groups/`
- `https://mail.google.com/`
- `https://sites.google.com/feeds`
- `https://www.google.com/calendar/feeds`
- `https://www.google.com/m8/feeds`
- `https://www.googleapis.com/auth/admin.directory.group`
- `https://www.googleapis.com/auth/admin.directory.user`
- `https://www.googleapis.com/auth/documents`
- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/dynamiccreatives`
- `https://www.googleapis.com/auth/forms`
- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/groups`
- `https://www.googleapis.com/auth/script.cpanel`
- `https://www.googleapis.com/auth/script.external_request`
- `https://www.googleapis.com/auth/script.scriptapp`
- `https://www.googleapis.com/auth/script.send_mail`
- `https://www.googleapis.com/auth/script.storage`
- `https://www.googleapis.com/auth/script.webapp.deploy`
- `https://www.googleapis.com/auth/spreadsheets`
- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/sqlservice`
- `https://www.googleapis.com/auth/userinfo.email`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).

## Status

If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's `error` field contains this `Status` object.

JSON representation

```
{
  "code": integer,
  "message": string,
  "details": [
    {
      "@type": string,
      field1: ...,
      ...
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>code</code></td><td><p><code>integer</code></p><p>The status code. For this API, this value either:</p><ul><li>10, indicating a <code>SCRIPT_TIMEOUT</code> error,</li><li>3, indicating an <code>INVALID_ARGUMENT</code> error, or</li><li>1, indicating a <code>CANCELLED</code> execution.</li></ul></td></tr><tr><td><code>message</code></td><td><p><code>string</code></p><p>A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the <code>details</code> field, or localized by the client.</p></td></tr><tr><td><code>details[]</code></td><td><p><code>object</code></p><p>An array that contains a single <code>ExecutionError</code> object that provides information about the nature of the error.</p><p>An object containing fields of an arbitrary type. An additional field <code>"@type"</code> contains a URI identifying the type. Example: <code>{ "id": 1234, "@type": "types.example.com/standard/id" }</code>.</p></td></tr></tbody></table>
