---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/insert
root: workspace
fetched_at: 2026-04-23T15:32:01.284Z
---

# Method: tasks.insert

Creates a new task on the specified task list. Tasks assigned from Docs or Chat Spaces cannot be inserted from Tasks Public API; they can only be created by assigning them from Docs or Chat Spaces. A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.

### HTTP request

`POST https://tasks.googleapis.com/tasks/v1/lists/{tasklist}/tasks`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>tasklist</code></td><td><p><code>string</code></p><p>Task list identifier.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Parent task identifier. If the task is created at the top level, this parameter is omitted. An assigned task cannot be a parent task, nor can it have a parent. Setting the parent to an assigned task results in failure of the request. Optional.</p></td></tr><tr><td><code>previous</code></td><td><p><code>string</code></p><p>Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/tasks`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
