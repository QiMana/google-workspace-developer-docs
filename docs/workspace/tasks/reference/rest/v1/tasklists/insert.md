---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/tasklists/insert
root: workspace
fetched_at: 2026-04-23T15:32:06.082Z
---

# Method: tasklists.insert

Creates a new task list and adds it to the authenticated user's task lists. A user can have up to 2000 lists at a time.

### HTTP request

`POST https://tasks.googleapis.com/tasks/v1/users/@me/lists`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/tasks`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
