---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/tasklists
root: workspace
fetched_at: 2026-04-23T15:32:01.049Z
---

# REST Resource: tasklists

## Resource: TaskList

JSON representation

```
{
  "kind": string,
  "id": string,
  "etag": string,
  "title": string,
  "updated": string,
  "selfLink": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. Type of the resource. This is always "tasks#taskList".</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Task list identifier.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>Title of the task list. Maximum length allowed: 1024 characters.</p></td></tr><tr><td><code>updated</code></td><td><p><code>string</code></p><p>Output only. Last modification time of the task list (as a RFC 3339 timestamp).</p></td></tr><tr><td><code>selfLink</code></td><td><p><code>string</code></p><p>Output only. URL pointing to this task list. Used to retrieve, update, or delete this task list.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes the authenticated user's specified task list.</td></tr><tr><td><h3>get</h3></td><td>Returns the authenticated user's specified task list.</td></tr><tr><td><h3>insert</h3></td><td>Creates a new task list and adds it to the authenticated user's task lists.</td></tr><tr><td><h3>list</h3></td><td>Returns all the authenticated user's task lists.</td></tr><tr><td><h3>patch</h3></td><td>Updates the authenticated user's specified task list.</td></tr><tr><td><h3>update</h3></td><td>Updates the authenticated user's specified task list.</td></tr></tbody></table>
