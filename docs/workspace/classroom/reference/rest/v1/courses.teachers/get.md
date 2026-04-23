---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.teachers/get
root: workspace
fetched_at: 2026-04-23T15:26:01.651Z
---

# Method: courses.teachers.get

Returns a teacher of a course.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for [access errors](../../../../troubleshooting/common-errors.md).
- `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{courseId}/teachers/{userId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr><tr><td><code>userId</code></td><td><p><code>string</code></p><p>Identifier of the teacher to return. The identifier can be one of the following:</p><ul><li>the numeric identifier for the user</li><li>the email address of the user</li><li>the string literal <code>"me"</code>, indicating the requesting user</li></ul></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.rosters`
- `           https://www.googleapis.com/auth/classroom.rosters.readonly`
- `           https://www.googleapis.com/auth/classroom.profile.emails`
- `           https://www.googleapis.com/auth/classroom.profile.photos`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
