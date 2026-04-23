---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.rubrics/create
root: workspace
fetched_at: 2026-04-23T15:25:56.105Z
---

# Method: courses.courseWork.rubrics.create

Creates a rubric.

The requesting user and course owner must have rubrics creation capabilities. For details, see [licensing requirements](../../../../rubrics/limitations.md#license-requirements).

For further details, see [Rubrics structure and known limitations](../../../../rubrics/limitations.md).

This request must be made by the Google Cloud console of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the parent course work item.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user isn't permitted to create rubrics for course work in the requested course.
- `INTERNAL` if the request has insufficient OAuth scopes.
- `INVALID_ARGUMENT` if the request is malformed and for the following [request error](../../../../troubleshooting/common-errors.md):
	- `RubricCriteriaInvalidFormat`
- `NOT_FOUND` if the requested course or course work don't exist or the user doesn't have access to the course or course work.
- `FAILED_PRECONDITION` for the following [request error](../../../../troubleshooting/common-errors.md):
	- `AttachmentNotVisible`

### HTTP request

`POST https://classroom.googleapis.com/v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course.</p></td></tr><tr><td><code>courseWorkId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course work.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.coursework.students`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
