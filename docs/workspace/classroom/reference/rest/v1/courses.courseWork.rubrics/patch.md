---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.rubrics/patch
root: workspace
fetched_at: 2026-04-23T15:25:56.309Z
---

# Method: courses.courseWork.rubrics.patch

Updates a rubric.

See for details of which fields can be updated. Rubric update capabilities are [limited](../../../../rubrics/limitations.md) once grading has started.

The requesting user and course owner must have rubrics creation capabilities. For details, see [licensing requirements](../../../../rubrics/limitations.md#license-requirements).

This request must be made by the Google Cloud console of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the parent course work item.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting developer project didn't create the corresponding course work, if the user isn't permitted to make the requested modification to the rubric, or for [access errors](../../../../troubleshooting/common-errors.md). This error code is also returned if grading has already started on the rubric.
- `INVALID_ARGUMENT` if the request is malformed and for the following [request error](../../../../troubleshooting/common-errors.md):
	- `RubricCriteriaInvalidFormat`
- `NOT_FOUND` if the requested course, course work, or rubric doesn't exist or if the user doesn't have access to the corresponding course work.
- `INTERNAL` if grading has already started on the rubric.

### HTTP request

`PATCH https://classroom.googleapis.com/v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course.</p></td></tr><tr><td><code>courseWorkId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course work.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Optional. Identifier of the rubric.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Optional. Mask that identifies which fields on the rubric to update. This field is required to do an update. The update fails if invalid fields are specified. There are multiple options to define the criteria of a rubric: the <code>sourceSpreadsheetId</code> and the <code>criteria</code> list. Only one of these can be used at a time to define a rubric.</p><p>The rubric <code>criteria</code> list is fully replaced by the rubric criteria specified in the update request. For example, if a criterion or level is missing from the request, it is deleted. New criteria and levels are added and an ID is assigned. Existing criteria and levels retain the previously assigned ID if the ID is specified in the request.</p><p>The following fields can be specified by teachers:</p><ul><li><code>criteria</code></li><li><code>sourceSpreadsheetId</code></li></ul><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.coursework.students`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
