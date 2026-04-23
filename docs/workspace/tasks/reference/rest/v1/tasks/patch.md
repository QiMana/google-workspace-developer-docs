---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/patch
root: workspace
fetched_at: 2026-04-23T15:32:01.625Z
---

# Method: tasks.patch

Updates the specified task. This method supports patch semantics.

### HTTP request

`PATCH https://tasks.googleapis.com/tasks/v1/lists/{tasklist}/tasks/{task}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>tasklist</code></td><td><p><code>string</code></p><p>Task list identifier.</p></td></tr><tr><td><code>task</code></td><td><p><code>string</code></p><p>Task identifier.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/tasks`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
