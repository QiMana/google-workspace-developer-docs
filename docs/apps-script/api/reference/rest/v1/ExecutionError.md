---
source: https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionError
root: apps-script
fetched_at: 2026-04-23T15:18:12.225Z
---

# ExecutionError

## Page Summary

- Provides information about errors when executing a script function using the Apps Script API.
- An `ExecutionError` object is found in the `details` field of a `Status` object within the response body's `error` field if a script throws an exception.
- Includes fields like `scriptStackTraceElements`, `errorMessage`, and `errorType` to detail the error.
- `ScriptStackTraceElement` objects within the stack trace provide the function name and line number where the script failed.

An object that provides information about the nature of an error resulting from an attempted execution of a script function using the Apps Script API. If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's `error` field contains a `Status` object. The `Status` object's `details` field contains an array with a single one of these `ExecutionError` objects.

JSON representation

```
{
  "scriptStackTraceElements": [
    {
      object (ScriptStackTraceElement)
    }
  ],
  "errorMessage": string,
  "errorType": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>scriptStackTraceElements[]</code></td><td><p><code>object (<code>ScriptStackTraceElement</code>)</code></p><p>An array of objects that provide a stack trace through the script to show where the execution failed, with the deepest call first.</p></td></tr><tr><td><code>errorMessage</code></td><td><p><code>string</code></p><p>The error message thrown by Apps Script, usually localized into the user's language.</p></td></tr><tr><td><code>errorType</code></td><td><p><code>string</code></p><p>The error type, for example <code>TypeError</code> or <code>ReferenceError</code>. If the error type is unavailable, this field is not included.</p></td></tr></tbody></table>

## ScriptStackTraceElement

A stack trace through the script that shows where the execution failed.

JSON representation

```
{
  "function": string,
  "lineNumber": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>function</code></td><td><p><code>string</code></p><p>The name of the function that failed.</p></td></tr><tr><td><code>lineNumber</code></td><td><p><code>integer</code></p><p>The line number where the script failed.</p></td></tr></tbody></table>
