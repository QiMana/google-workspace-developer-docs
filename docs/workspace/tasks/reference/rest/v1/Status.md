---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/Status
root: workspace
fetched_at: 2026-04-23T15:32:00.352Z
---

# Status

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.

You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>code</code></td><td><p><code>integer</code></p><p>The status code, which should be an enum value of <code>google.rpc.Code</code>.</p></td></tr><tr><td><code>message</code></td><td><p><code>string</code></p><p>A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the <code>google.rpc.Status.details</code> field, or localized by the client.</p></td></tr><tr><td><code>details[]</code></td><td><p><code>object</code></p><p>A list of messages that carry the error details. There is a common set of message types for APIs to use.</p><p>An object containing fields of an arbitrary type. An additional field <code>"@type"</code> contains a URI identifying the type. Example: <code>{ "id": 1234, "@type": "types.example.com/standard/id" }</code>.</p></td></tr></tbody></table>
