---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/Request
root: workspace
fetched_at: 2026-04-23T15:32:00.056Z
---

# Request

A request message sent as part of a batch execution.

JSON representation

```
{
  "requestId": string,
  "methodName": string,
  "request": {
    "@type": string,
    field1: ...,
    ...
  },
  "extensions": [
    {
      "@type": string,
      field1: ...,
      ...
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requestId</code></td><td><p><code>string</code></p><p>Unique id of this request within the batch. The Response message with a matching <code>requestId</code> is the response to this request. For request-streaming methods, the same <code>requestId</code> may be used multiple times to pass all request messages that are part of a single method. For response-streaming methods, the same <code>requestId</code> may show up in multiple Response messages.</p></td></tr><tr><td><code>methodName</code></td><td><p><code>string</code></p><p>The method being called. Must be a fully qualified method name. Example: google.rpc.batch.Batch.Execute</p></td></tr><tr><td><code>request</code></td><td><p><code>object</code></p><p>The request payload.</p><p>An object containing fields of an arbitrary type. An additional field <code>"@type"</code> contains a URI identifying the type. Example: <code>{ "id": 1234, "@type": "types.example.com/standard/id" }</code>.</p></td></tr><tr><td><code>extensions[]</code></td><td><p><code>object</code></p><p>Application specific request metadata.</p><p>An object containing fields of an arbitrary type. An additional field <code>"@type"</code> contains a URI identifying the type. Example: <code>{ "id": 1234, "@type": "types.example.com/standard/id" }</code>.</p></td></tr></tbody></table>
