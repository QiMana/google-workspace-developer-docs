---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/tasklists/delete
root: workspace
fetched_at: 2026-04-23T15:32:00.408Z
---

# Method: tasklists.delete

Deletes the authenticated user's specified task list. If the list contains assigned tasks, both the assigned tasks and the original tasks in the assignment surface (Docs, Chat Spaces) are deleted.

### HTTP request

`DELETE https://tasks.googleapis.com/tasks/v1/users/@me/lists/{tasklist}`

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
