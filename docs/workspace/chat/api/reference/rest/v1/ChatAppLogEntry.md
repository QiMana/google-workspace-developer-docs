---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/ChatAppLogEntry
root: workspace
fetched_at: 2026-04-23T15:25:00.674Z
---

# ChatAppLogEntry

## Page Summary

- Chat app error messages are logged to Google Cloud Logging if the API is enabled, providing details on the deployment, error, and function involved.
- Error messages utilize a standardized `Status` format, including an error code, message, and optional details for comprehensive debugging.
- The `Status` format aligns with gRPC and Google API Design Guide principles for consistent error handling across different programming environments.

JSON payload of error messages. If the Cloud Logging API is enabled, these error messages are logged to [Google Cloud Logging](https://cloud.google.com/logging/docs).

JSON representation

```
{
  "deployment": string,
  "error": {
    object (Status)
  },
  "deploymentFunction": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>deployment</code></td><td><p><code>string</code></p><p>The deployment that caused the error. For Chat apps built in Apps Script, this is the deployment ID defined by Apps Script.</p></td></tr><tr><td><code>error</code></td><td><p><code>object (<code>Status</code>)</code></p><p>The error code and message.</p></td></tr><tr><td><code>deploymentFunction</code></td><td><p><code>string</code></p><p>The unencrypted <code>callback_method</code> name that was running when the error was encountered.</p></td></tr></tbody></table>

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
