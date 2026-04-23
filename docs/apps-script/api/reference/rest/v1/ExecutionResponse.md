---
source: https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionResponse
root: apps-script
fetched_at: 2026-04-23T15:18:11.548Z
---

# ExecutionResponse

## Page Summary

- ExecutionResponse represents the return value of a function executed using the Apps Script API.
- Upon successful script function return, the response body's `response` field holds the ExecutionResponse object.
- The `result` field within ExecutionResponse contains the script function's return value in a specific `Value` format.
- Only primitive types like string, number, array, object, or boolean can be returned by functions called using the Apps Script API.

An object that provides the return value of a function executed using the Apps Script API. If the script function returns successfully, the response body's `response` field contains this `ExecutionResponse` object.

JSON representation

```
{
  "result": value
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>result</code></td><td><p><code>value (<code>Value</code> format)</code></p><p>The return value of the script function. The type matches the object type returned in Apps Script. Functions called using the Apps Script API cannot return Apps Script-specific objects (such as a <code>Document</code> or a <code>Calendar</code>); they can only return primitive types such as a <code>string</code>, <code>number</code>, <code>array</code>, <code>object</code>, or <code>boolean</code>.</p></td></tr></tbody></table>
