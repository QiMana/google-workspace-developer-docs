---
source: https://developers.google.com/apps-script/api/reference/rest/v1/ExecuteStreamResponse
root: apps-script
fetched_at: 2026-04-23T15:18:10.937Z
---

# ExecuteStreamResponse

## Page Summary

- ExecuteStreamResponse is the response for executing or debugging a function in an Apps Script project, containing an update field that holds the execution result.
- ScriptExecutionResult represents the outcome of an execution, with a result field containing the returned value.
- Value is a dynamically typed value representing the outcome of an executed script, supporting various types including null, number, string, boolean, struct, list, date, proto, and bytes.
- Struct represents structured data with fields mapping to dynamically typed values.
- ListValue is a wrapper around a repeated field of dynamically typed values.

The response for executing or debugging a function in an Apps Script project.

JSON representation

```
{

  // Union field update can be only one of the following:
  "result": {
    object (ScriptExecutionResult)
  }
  // End of list of possible types for union field update.
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>update</code>. Update from the server with pertinent data about your execution. <code>update</code> can be only one of the following:</td></tr><tr><td><code>result</code></td><td><p><code>object (<code>ScriptExecutionResult</code>)</code></p><p>The result of the execution.</p></td></tr></tbody></table>

## ScriptExecutionResult

The result of an execution.

JSON representation

```
{

  // Union field result can be only one of the following:
  "returnValue": {
    object (Value)
  }
  // End of list of possible types for union field result.
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>result</code>. The result of the execution. <code>result</code> can be only one of the following:</td></tr><tr><td><code>returnValue</code></td><td><p><code>object (<code>Value</code>)</code></p><p>The returned value of the execution.</p></td></tr></tbody></table>

## Value

`Value` represents a dynamically typed value which is the outcome of an executed script.

JSON representation

```
{

  // Union field kind can be only one of the following:
  "nullValue": enum (NullValue),
  "numberValue": number,
  "stringValue": string,
  "boolValue": boolean,
  "structValue": {
    object (Struct)
  },
  "listValue": {
    object (ListValue)
  },
  "dateValue": string,
  "protoValue": {
    "@type": string,
    field1: ...,
    ...
  },
  "bytesValue": string
  // End of list of possible types for union field kind.
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kind of value. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>nullValue</code></td><td><p><code>enum (<code>NullValue</code>)</code></p><p>Represents a null value.</p></td></tr><tr><td><code>numberValue</code></td><td><p><code>number</code></p><p>Represents a double value.</p></td></tr><tr><td><code>stringValue</code></td><td><p><code>string</code></p><p>Represents a string value.</p></td></tr><tr><td><code>boolValue</code></td><td><p><code>boolean</code></p><p>Represents a boolean value.</p></td></tr><tr><td><code>structValue</code></td><td><p><code>object (<code>Struct</code>)</code></p><p>Represents a structured value.</p></td></tr><tr><td><code>listValue</code></td><td><p><code>object (<code>ListValue</code>)</code></p><p>Represents a repeated <code>Value</code>.</p></td></tr><tr><td><code>dateValue</code></td><td><p><code>string (int64 format)</code></p><p>Represents a date in ms since the epoch.</p></td></tr><tr><td><code>protoValue</code></td><td><p><code>object</code></p><p>Represents a structured proto value.</p><p>An object containing fields of an arbitrary type. An additional field <code>"@type"</code> contains a URI identifying the type. Example: <code>{ "id": 1234, "@type": "types.example.com/standard/id" }</code>.</p></td></tr><tr><td><code>bytesValue</code></td><td><p><code>string (bytes format)</code></p><p>Represents raw byte values.</p><p>A base64-encoded string.</p></td></tr></tbody></table>

## Struct

`Struct` represents a structured data value, consisting of fields which map to dynamically typed values.

JSON representation

```
{
  "fields": {
    string: {
      object (Value)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fields</code></td><td><p><code>map (key: string, value: object (<code>Value</code>))</code></p><p>Unordered map of dynamically typed values.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr></tbody></table>

## ListValue

`ListValue` is a wrapper around a repeated field of values.

JSON representation

```
{
  "values": [
    {
      object (Value)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>object (<code>Value</code>)</code></p><p>Repeated field of dynamically typed values.</p></td></tr></tbody></table>
