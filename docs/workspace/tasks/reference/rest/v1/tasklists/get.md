---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/tasklists/get
root: workspace
fetched_at: 2026-04-23T15:32:00.281Z
---

# Method: tasklists.get

Returns the authenticated user's specified task list.

### HTTP request

`GET https://tasks.googleapis.com/tasks/v1/users/@me/lists/{tasklist}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>tasklist</code></td><td><p><code>string</code></p><p>Task list identifier.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/tasks`
- `https://www.googleapis.com/auth/tasks.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
