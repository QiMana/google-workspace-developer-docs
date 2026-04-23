---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/clear
root: workspace
fetched_at: 2026-04-23T15:32:01.148Z
---

# Method: tasks.clear

Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.

### HTTP request

`POST https://tasks.googleapis.com/tasks/v1/lists/{tasklist}/clear`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>tasklist</code></td><td><p><code>string</code></p><p>Task list identifier.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is empty.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/tasks`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
