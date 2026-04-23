---
source: https://developers.google.com/workspace/tasks/reference/rest
root: workspace
fetched_at: 2026-04-23T15:31:59.991Z
---

# Google Tasks API

The Google Tasks API lets you manage your tasks and task lists.

## Service: tasks.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest](https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://tasks.googleapis.com`

## REST Resource: tasklists

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /tasks/v1/users/@me/lists/{tasklist}</code><br>Deletes the authenticated user's specified task list.</td></tr><tr><td><code>get</code></td><td><code>GET /tasks/v1/users/@me/lists/{tasklist}</code><br>Returns the authenticated user's specified task list.</td></tr><tr><td><code>insert</code></td><td><code>POST /tasks/v1/users/@me/lists</code><br>Creates a new task list and adds it to the authenticated user's task lists.</td></tr><tr><td><code>list</code></td><td><code>GET /tasks/v1/users/@me/lists</code><br>Returns all the authenticated user's task lists.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /tasks/v1/users/@me/lists/{tasklist}</code><br>Updates the authenticated user's specified task list.</td></tr><tr><td><code>update</code></td><td><code>PUT /tasks/v1/users/@me/lists/{tasklist}</code><br>Updates the authenticated user's specified task list.</td></tr></tbody></table>

## REST Resource: tasks

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>clear</code></td><td><code>POST /tasks/v1/lists/{tasklist}/clear</code><br>Clears all completed tasks from the specified task list.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /tasks/v1/lists/{tasklist}/tasks/{task}</code><br>Deletes the specified task from the task list.</td></tr><tr><td><code>get</code></td><td><code>GET /tasks/v1/lists/{tasklist}/tasks/{task}</code><br>Returns the specified task.</td></tr><tr><td><code>insert</code></td><td><code>POST /tasks/v1/lists/{tasklist}/tasks</code><br>Creates a new task on the specified task list.</td></tr><tr><td><code>list</code></td><td><code>GET /tasks/v1/lists/{tasklist}/tasks</code><br>Returns all tasks in the specified task list.</td></tr><tr><td><code>move</code></td><td><code>POST /tasks/v1/lists/{tasklist}/tasks/{task}/move</code><br>Moves the specified task to another position in the destination task list.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /tasks/v1/lists/{tasklist}/tasks/{task}</code><br>Updates the specified task.</td></tr><tr><td><code>update</code></td><td><code>PUT /tasks/v1/lists/{tasklist}/tasks/{task}</code><br>Updates the specified task.</td></tr></tbody></table>
