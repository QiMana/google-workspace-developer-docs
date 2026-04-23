---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/list
root: workspace
fetched_at: 2026-04-23T15:32:01.562Z
---

# Method: tasks.list

Returns all tasks in the specified task list. Doesn't return assigned tasks by default (from Docs, Chat Spaces). A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.

### HTTP request

`GET https://tasks.googleapis.com/tasks/v1/lists/{tasklist}/tasks`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>tasklist</code></td><td><p><code>string</code></p><p>Task list identifier.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>completedMax</code></td><td><p><code>string</code></p><p>Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.</p></td></tr><tr><td><code>completedMin</code></td><td><p><code>string</code></p><p>Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.</p></td></tr><tr><td><code>dueMax</code></td><td><p><code>string</code></p><p>Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.</p></td></tr><tr><td><code>dueMin</code></td><td><p><code>string</code></p><p>Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.</p></td></tr><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of tasks returned on one page. Optional. The default is 20 (max allowed: 100).</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token specifying the result page to return. Optional.</p></td></tr><tr><td><code>showCompleted</code></td><td><p><code>boolean</code></p><p>Flag indicating whether completed tasks are returned in the result. Note that showHidden must also be True to show tasks completed in first party clients, such as the web UI and Google's mobile apps. Optional. The default is True.</p></td></tr><tr><td><code>showDeleted</code></td><td><p><code>boolean</code></p><p>Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.</p></td></tr><tr><td><code>showHidden</code></td><td><p><code>boolean</code></p><p>Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.</p></td></tr><tr><td><code>updatedMin</code></td><td><p><code>string</code></p><p>Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.</p></td></tr><tr><td><code>showAssigned</code></td><td><p><code>boolean</code></p><p>Optional. Flag indicating whether tasks assigned to the current user are returned in the result. Optional. The default is False.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "nextPageToken": string,
  "items": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Type of the resource. This is always "tasks#tasks".</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token used to access the next page of this result.</p></td></tr><tr><td><code>items[]</code></td><td><p>Collection of tasks.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/tasks`
- `https://www.googleapis.com/auth/tasks.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## Tasks

JSON representation

```
{
  "kind": string,
  "etag": string,
  "nextPageToken": string,
  "items": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Type of the resource. This is always "tasks#tasks".</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token used to access the next page of this result.</p></td></tr><tr><td><code>items[]</code></td><td><p>Collection of tasks.</p></td></tr></tbody></table>
