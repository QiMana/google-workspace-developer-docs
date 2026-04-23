---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.rubrics/get
root: workspace
fetched_at: 2026-04-23T15:25:56.247Z
---

# Method: courses.courseWork.rubrics.get

Returns a rubric.

This method returns the following error codes:

- `PERMISSION_DENIED` for [access errors](../../../../troubleshooting/common-errors.md).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course, course work, or rubric doesn't exist or if the user doesn't have access to the corresponding course work.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course.</p></td></tr><tr><td><code>courseWorkId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course work.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. Identifier of the rubric.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.coursework.students.readonly`
- `           https://www.googleapis.com/auth/classroom.coursework.me.readonly`
- `           https://www.googleapis.com/auth/classroom.coursework.students`
- `           https://www.googleapis.com/auth/classroom.coursework.me`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
