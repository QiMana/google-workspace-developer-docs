---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.students/delete
root: workspace
fetched_at: 2026-04-23T15:26:00.962Z
---

# Method: courses.students.delete

Deletes a student of a course.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for [access errors](../../../../troubleshooting/common-errors.md).
- `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.

### HTTP request

`DELETE https://classroom.googleapis.com/v1/courses/{courseId}/students/{userId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr><tr><td><code>userId</code></td><td><p><code>string</code></p><p>Identifier of the student to delete. The identifier can be one of the following:</p><ul><li>the numeric identifier for the user</li><li>the email address of the user</li><li>the string literal <code>"me"</code>, indicating the requesting user</li></ul></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.rosters`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
