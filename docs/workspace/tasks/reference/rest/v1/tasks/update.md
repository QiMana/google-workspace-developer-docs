---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/update
root: workspace
fetched_at: 2026-04-23T15:32:01.874Z
---

# Method: tasks.update

## Method: tasks.update

Updates the specified task.

### HTTP request

`PUT https://tasks.googleapis.com/tasks/v1/lists/{tasklist}/tasks/{task}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>tasklist</code></td><td><p><code>string</code></p><p>Task list identifier.</p></td></tr><tr><td><code>task</code></td><td><p><code>string</code></p><p>Task identifier.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `Task`.

### Response body

If successful, the response body contains an instance of `Task`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/tasks`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
