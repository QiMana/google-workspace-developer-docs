---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses/getGradingPeriodSettings
root: workspace
fetched_at: 2026-04-23T15:26:02.926Z
---

# Method: courses.getGradingPeriodSettings

Returns the grading period settings in a course.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user isn't permitted to access the grading period settings in the requested course or for [access errors](../../../../troubleshooting/common-errors.md).
- `NOT_FOUND` if the requested course does not exist.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{courseId}/gradingPeriodSettings`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. The identifier of the course.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `GradingPeriodSettings`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.courses`
- `           https://www.googleapis.com/auth/classroom.courses.readonly`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
