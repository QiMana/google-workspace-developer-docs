---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.rubrics/delete
root: workspace
fetched_at: 2026-04-23T15:25:56.362Z
---

# Method: courses.courseWork.rubrics.delete

Deletes a rubric.

The requesting user and course owner must have rubrics creation capabilities. For details, see [licensing requirements](../../../../rubrics/limitations.md#license-requirements).

This request must be made by the Google Cloud console of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding rubric.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting developer project didn't create the corresponding rubric, or if the requesting user isn't permitted to delete the requested rubric.
- `NOT_FOUND` if no rubric exists with the requested ID or the user does not have access to the course, course work, or rubric.
- `INVALID_ARGUMENT` if grading has already started on the rubric.

### HTTP request

`DELETE https://classroom.googleapis.com/v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course.</p></td></tr><tr><td><code>courseWorkId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course work.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. Identifier of the rubric.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.coursework.students`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
