---
source: https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.logging.v1
root: workspace
fetched_at: 2026-04-23T15:25:11.487Z
---

# Package google.chat.logging.v1

## Page Summary

- ChatAppLogEntry provides a JSON payload containing error messages for Chat apps.
- If enabled, these error messages are sent to Google Cloud Logging for analysis and debugging.
- The payload includes information about the deployment, error code and message, and the specific function where the error occurred.

## Index

- `ChatAppLogEntry` (message)

## ChatAppLogEntry

JSON payload of error messages. If the Cloud Logging API is enabled, these error messages are logged to [Google Cloud Logging](https://cloud.google.com/logging/docs).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>deployment</code></td><td><p><code>string</code></p><p>The deployment that caused the error. For Chat apps built in Apps Script, this is the deployment ID defined by Apps Script.</p></td></tr><tr><td><code>error</code></td><td><p><code>Status</code></p><p>The error code and message.</p></td></tr><tr><td><code>deployment_function</code></td><td><p><code>string</code></p><p>The unencrypted <code>callback_method</code> name that was running when the error was encountered.</p></td></tr></tbody></table>
