---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses/updateGradingPeriodSettings
root: workspace
fetched_at: 2026-04-23T15:26:04.121Z
---

# Method: courses.updateGradingPeriodSettings

Updates grading period settings of a course.

Individual grading periods can be added, removed, or modified using this method.

The requesting user and course owner must be eligible to modify Grading Periods. For details, see [licensing requirements](../../../../grading-periods/manage-grading-periods.md#licensing_requirements).

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to modify the grading period settings in a course or for [access errors](../../../../troubleshooting/common-errors.md):
	- UserIneligibleToUpdateGradingPeriodSettings
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course does not exist.

### HTTP request

`PATCH https://classroom.googleapis.com/v1/courses/{courseId}/gradingPeriodSettings`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. The identifier of the course.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Mask that identifies which fields in the GradingPeriodSettings to update.</p><p>The GradingPeriodSettings <code>gradingPeriods</code> list will be fully replaced by the grading periods specified in the update request. For example:</p><ul><li>Grading periods included in the list without an ID are considered additions, and a new ID will be assigned when the request is made.</li><li>Grading periods that currently exist, but are missing from the request will be considered deletions.</li><li>Grading periods with an existing ID and modified data are considered edits. Unmodified data will be left as is.</li><li>Grading periods included with an unknown ID will result in an error.</li></ul><p>The following fields may be specified:</p><ul><li><code>gradingPeriods</code></li><li><code>applyToExistingCoursework</code></li></ul><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `GradingPeriodSettings`.

### Response body

If successful, the response body contains an instance of `GradingPeriodSettings`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.courses`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
