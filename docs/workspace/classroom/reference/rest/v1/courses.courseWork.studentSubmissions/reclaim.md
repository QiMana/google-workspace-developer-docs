---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions/reclaim
root: workspace
fetched_at: 2026-04-23T15:25:56.805Z
---

# Method: courses.courseWork.studentSubmissions.reclaim

Reclaims a student submission on behalf of the student that owns it.

Reclaiming a student submission transfers ownership of attached Drive files to the student and updates the submission state.

Only the student that owns the requested student submission may call this method, and only for a student submission that has been turned in.

This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, unsubmit the requested student submission, or for [access errors](../../../../troubleshooting/common-errors.md).
- `FAILED_PRECONDITION` if the student submission has not been turned in.
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### HTTP request

`POST https://classroom.googleapis.com/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:reclaim`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr><tr><td><code>courseWorkId</code></td><td><p><code>string</code></p><p>Identifier of the course work.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the student submission.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.coursework.me`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
