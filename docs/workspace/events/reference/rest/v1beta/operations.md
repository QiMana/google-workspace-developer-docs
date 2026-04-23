---
source: https://developers.google.com/workspace/events/reference/rest/v1beta/operations
root: workspace
fetched_at: 2026-04-23T15:28:37.826Z
---

# REST Resource: operations

## Page Summary

- The Operation resource represents a long-running operation initiated by a network API call, containing metadata, status, and either an error or a response.
- Operations can be monitored using the `get` method to retrieve their latest state, including progress and completion status.
- Status objects provide structured error information with a code, message, and optional details for debugging and handling API errors.

## Resource: Operation

This resource represents a long-running operation that is the result of a network API call.

JSON representation

```
{
  "name": string,
  "metadata": {
    "@type": string,
    field1: ...,
    ...
  },
  "done": boolean,

  "error": {
    object (Status)
  },
  "response": {
    "@type": string,
    field1: ...,
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the <code>name</code> should be a resource name ending with <code>operations/{unique_id}</code>.</p></td></tr><tr><td><code>done</code></td><td><p><code>boolean</code></p><p>If the value is <code>false</code>, it means the operation is still in progress. If <code>true</code>, the operation is completed, and either <code>error</code> or <code>response</code> is available.</p></td></tr><tr><td colspan="2">Union field <code>result</code>. The operation result, which can be either an <code>error</code> or a valid <code>response</code>. If <code>done</code> == <code>false</code>, neither <code>error</code> nor <code>response</code> is set. If <code>done</code> == <code>true</code>, exactly one of <code>error</code> or <code>response</code> can be set. Some services might not provide the result. <code>result</code> can be only one of the following:</td></tr><tr><td><code>error</code></td><td><p><code>object (<code>Status</code>)</code></p><p>The error result of the operation in case of failure or cancellation.</p></td></tr><tr><td><code>response</code></td><td><p><code>object</code></p><p>The normal, successful response of the operation. If the original method returns no data on success, such as <code>Delete</code>, the response is <code>google.protobuf.Empty</code>. If the original method is standard <code>Get</code> / <code>Create</code> / <code>Update</code>, the response should be the resource. For other methods, the response should have the type <code>XxxResponse</code>, where <code>Xxx</code> is the original method name. For example, if the original method name is <code>TakeSnapshot()</code>, the inferred response type is <code>TakeSnapshotResponse</code>.</p></td></tr></tbody></table>

## Status

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>code</code></td><td><p><code>integer</code></p><p>The status code, which should be an enum value of <code>google.rpc.Code</code>.</p></td></tr><tr><td><code>message</code></td><td><p><code>string</code></p><p>A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the <code>google.rpc.Status.details</code> field, or localized by the client.</p></td></tr><tr><td><code>details[]</code></td><td><p><code>object</code></p><p>A list of messages that carry the error details. There is a common set of message types for APIs to use.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets the latest state of a long-running operation.</td></tr></tbody></table>
