---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/move
root: workspace
fetched_at: 2026-04-23T15:32:01.336Z
---

# Method: tasks.move

Moves the specified task to another position in the destination task list. If the destination list is not specified, the task is moved within its current list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks. A user can have up to 2,000 subtasks per task.

### HTTP request

`POST https://tasks.googleapis.com/tasks/v1/lists/{tasklist}/tasks/{task}/move`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>tasklist</code></td><td><p><code>string</code></p><p>Task list identifier.</p></td></tr><tr><td><code>task</code></td><td><p><code>string</code></p><p>Task identifier.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Optional. New parent task identifier. If the task is moved to the top level, this parameter is omitted. The task set as parent must exist in the task list and can not be hidden.</p><p>Exceptions: 1. Assigned and repeating tasks cannot be set as parent tasks (have subtasks), or be moved under a parent task (become subtasks). 2. Tasks that are both completed and hidden cannot be nested, so the parent field must be empty.</p></td></tr><tr><td><code>previous</code></td><td><p><code>string</code></p><p>Optional. New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. The task set as previous must exist in the task list and can not be hidden.</p><p>Exceptions: 1. Tasks that are both completed and hidden can only be moved to position 0, so the previous field must be empty.</p></td></tr><tr><td><code>destinationTasklist</code></td><td><p><code>string</code></p><p>Optional. Destination task list identifier. If set, the task is moved from tasklist to the destinationTasklist list. Otherwise the task is moved within its current list. Recurrent tasks cannot currently be moved between lists.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/tasks`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
