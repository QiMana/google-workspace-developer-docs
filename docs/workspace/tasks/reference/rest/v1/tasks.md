---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks
root: workspace
fetched_at: 2026-04-23T15:32:00.864Z
---

# REST Resource: tasks

## Resource: Task

JSON representation

```
{
  "kind": string,
  "id": string,
  "etag": string,
  "title": string,
  "updated": string,
  "selfLink": string,
  "parent": string,
  "position": string,
  "notes": string,
  "status": string,
  "due": string,
  "completed": string,
  "deleted": boolean,
  "hidden": boolean,
  "links": [
    {
      "type": string,
      "description": string,
      "link": string
    }
  ],
  "webViewLink": string,
  "assignmentInfo": {
    object (AssignmentInfo)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. Type of the resource. This is always "tasks#task".</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Task identifier.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>Title of the task. Maximum length allowed: 1024 characters.</p></td></tr><tr><td><code>updated</code></td><td><p><code>string</code></p><p>Output only. Last modification time of the task (as a RFC 3339 timestamp).</p></td></tr><tr><td><code>selfLink</code></td><td><p><code>string</code></p><p>Output only. URL pointing to this task. Used to retrieve, update, or delete this task.</p></td></tr><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Output only. Parent task identifier. This field is omitted if it is a top-level task. Use the "move" method to move the task under a different parent or to the top level. A parent task can never be an assigned task (from Chat Spaces, Docs). This field is read-only.</p></td></tr><tr><td><code>position</code></td><td><p><code>string</code></p><p>Output only. String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). Use the "move" method to move the task to another position.</p></td></tr><tr><td><code>notes</code></td><td><p><code>string</code></p><p>Notes describing the task. Tasks assigned from Google Docs cannot have notes. Optional. Maximum length allowed: 8192 characters.</p></td></tr><tr><td><code>status</code></td><td><p><code>string</code></p><p>Status of the task. This is either "needsAction" or "completed".</p></td></tr><tr><td><code>due</code></td><td><p><code>string</code></p><p>Scheduled date for the task (as an RFC 3339 timestamp). Optional. This represents the day that the task should be done, or that the task is visible on the calendar grid. It doesn't represent the deadline of the task. Only date information is recorded; the time portion of the timestamp is discarded when setting this field. It isn't possible to read or write the time that a task is scheduled for using the API.</p></td></tr><tr><td><code>completed</code></td><td><p><code>string</code></p><p>Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.</p></td></tr><tr><td><code>deleted</code></td><td><p><code>boolean</code></p><p>Flag indicating whether the task has been deleted. For assigned tasks this field is read-only. They can only be deleted by calling tasks.delete, in which case both the assigned task and the original task (in Docs or Chat Spaces) are deleted. To delete the assigned task only, navigate to the assignment surface and unassign the task from there. The default is False.</p></td></tr><tr><td><code>hidden</code></td><td><p><code>boolean</code></p><p>Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only.</p></td></tr><tr><td><code>links[]</code></td><td><p><code>object</code></p><p>Output only. Collection of links. This collection is read-only.</p></td></tr><tr><td><code>links[].type</code></td><td><p><code>string</code></p><p>Type of the link, e.g. "email", "generic", "chat_message", "keep_note".</p></td></tr><tr><td><code>links[].description</code></td><td><p><code>string</code></p><p>The description (might be empty).</p></td></tr><tr><td><code>links[].link</code></td><td><p><code>string</code></p><p>The URL.</p></td></tr><tr><td><code>webViewLink</code></td><td><p><code>string</code></p><p>Output only. An absolute link to the task in the Google Tasks Web UI.</p></td></tr><tr><td><code>assignmentInfo</code></td><td><p><code>object (<code>AssignmentInfo</code>)</code></p><p>Output only. Context information for assigned tasks. A task can be assigned to a user, currently possible from surfaces like Docs and Chat Spaces. This field is populated for tasks assigned to the current user and identifies where the task was assigned from. This field is read-only.</p></td></tr></tbody></table>

## AssignmentInfo

Information about the source of the task assignment (Document, Chat Space).

JSON representation

```
{
  "linkToTask": string,
  "surfaceType": enum (ContextType),

  "driveResourceInfo": {
    object (DriveResourceInfo)
  },
  "spaceInfo": {
    object (SpaceInfo)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>linkToTask</code></td><td><p><code>string</code></p><p>Output only. An absolute link to the original task in the surface of assignment (Docs, Chat spaces, etc.).</p></td></tr><tr><td><code>surfaceType</code></td><td><p><code>enum (<code>ContextType</code>)</code></p><p>Output only. The type of surface this assigned task originates from. Currently limited to DOCUMENT or SPACE.</p></td></tr><tr><td colspan="2">Union field <code>surface_info</code>. Information about the surface (Docs, Chat Spaces) where this task was assigned from. <code>surface_info</code> can be only one of the following:</td></tr><tr><td><code>driveResourceInfo</code></td><td><p><code>object (<code>DriveResourceInfo</code>)</code></p><p>Output only. Information about the Drive file where this task originates from. Currently, the Drive file can only be a document. This field is read-only.</p></td></tr><tr><td><code>spaceInfo</code></td><td><p><code>object (<code>SpaceInfo</code>)</code></p><p>Output only. Information about the Chat Space where this task originates from. This field is read-only.</p></td></tr></tbody></table>

## ContextType

The product associated with the task.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CONTEXT_TYPE_UNSPECIFIED</code></td><td>Unknown value for this task's context.</td></tr><tr><td><code>GMAIL</code></td><td>The task is created from Gmail.</td></tr><tr><td><code>DOCUMENT</code></td><td>The task is assigned from a document.</td></tr><tr><td><code>SPACE</code></td><td>The task is assigned from a Chat Space.</td></tr></tbody></table>

## DriveResourceInfo

Information about the Drive resource where a task was assigned from (the document, sheet, etc.).

JSON representation

```
{
  "driveFileId": string,
  "resourceKey": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>driveFileId</code></td><td><p><code>string</code></p><p>Output only. Identifier of the file in the Drive API.</p></td></tr><tr><td><code>resourceKey</code></td><td><p><code>string</code></p><p>Output only. Resource key required to access files shared via a shared link. Not required for all files. See also developers.google.com/drive/api/guides/resource-keys.</p></td></tr></tbody></table>

## SpaceInfo

Information about the Chat Space where a task was assigned from.

JSON representation

```
{
  "space": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>space</code></td><td><p><code>string</code></p><p>Output only. The Chat space where this task originates from. The format is "spaces/{space}".</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>clear</h3></td><td>Clears all completed tasks from the specified task list.</td></tr><tr><td><h3>delete</h3></td><td>Deletes the specified task from the task list.</td></tr><tr><td><h3>get</h3></td><td>Returns the specified task.</td></tr><tr><td><h3>insert</h3></td><td>Creates a new task on the specified task list.</td></tr><tr><td><h3>list</h3></td><td>Returns all tasks in the specified task list.</td></tr><tr><td><h3>move</h3></td><td>Moves the specified task to another position in the destination task list.</td></tr><tr><td><h3>patch</h3></td><td>Updates the specified task.</td></tr><tr><td><h3>update</h3></td><td>Updates the specified task.</td></tr></tbody></table>
