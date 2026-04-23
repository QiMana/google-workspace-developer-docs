---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/delete
root: workspace
fetched_at: 2026-04-23T15:32:00.667Z
---

# Method: tasks.delete

Deletes the specified task from the task list. If the task is assigned, both the assigned task and the original task (in Docs, Chat Spaces) are deleted. To delete the assigned task only, navigate to the assignment surface and unassign the task from there.

### HTTP request

`DELETE https://tasks.googleapis.com/tasks/v1/lists/{tasklist}/tasks/{task}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>tasklist</code></td><td><p><code>string</code></p><p>Task list identifier.</p></td></tr><tr><td><code>task</code></td><td><p><code>string</code></p><p>Task identifier.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is empty.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/tasks`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
