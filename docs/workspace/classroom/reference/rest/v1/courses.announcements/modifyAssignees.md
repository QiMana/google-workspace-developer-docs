---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.announcements/modifyAssignees
root: workspace
fetched_at: 2026-04-23T15:25:54.393Z
---

# Method: courses.announcements.modifyAssignees

Modifies assignee mode and options of an announcement.

Only a teacher of the course that contains the announcement may call this method.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course or course work does not exist.
- `FAILED_PRECONDITION` for the following [request error](https://developers.google.com/workspace/classroom/reference/Request.Errors):
	- EmptyAssignees

### HTTP request

`POST https://classroom.googleapis.com/v1/courses/{courseId}/announcements/{id}:modifyAssignees`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the announcement.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "assigneeMode": enum (AssigneeMode),
  "modifyIndividualStudentsOptions": {
    object (ModifyIndividualStudentsOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>assigneeMode</code></td><td><p><code>enum (<code>AssigneeMode</code>)</code></p><p>Mode of the announcement describing whether it is accessible by all students or specified individual students.</p></td></tr><tr><td><code>modifyIndividualStudentsOptions</code></td><td><p><code>object (<code>ModifyIndividualStudentsOptions</code>)</code></p><p>Set which students can view or cannot view the announcement. Must be specified only when <code>assigneeMode</code> is <code>INDIVIDUAL_STUDENTS</code>.</p></td></tr></tbody></table>

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.announcements`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
