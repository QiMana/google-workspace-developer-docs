---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions/patch
root: workspace
fetched_at: 2026-04-23T15:25:56.865Z
---

# Method: courses.courseWork.studentSubmissions.patch

Updates one or more fields of a student submission.

See for details of which fields may be updated and who may change them.

This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### HTTP request

`PATCH https://classroom.googleapis.com/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr><tr><td><code>courseWorkId</code></td><td><p><code>string</code></p><p>Identifier of the course work.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the student submission.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Mask that identifies which fields on the student submission to update. This field is required to do an update. The update fails if invalid fields are specified.</p><p>The following fields may be specified by teachers:</p><ul><li><code>draftGrade</code></li><li><code>assignedGrade</code></li></ul><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.coursework.students`
- `           https://www.googleapis.com/auth/classroom.coursework.me`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
