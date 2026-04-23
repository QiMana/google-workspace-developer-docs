---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.studentGroups/create
root: workspace
fetched_at: 2026-04-23T15:26:00.372Z
---

# Method: courses.studentGroups.create

Creates a student group for a course.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to create the student group or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `NOT_FOUND` if the course does not exist or the requesting user doesn't have access to the course.
- `FAILED_PRECONDITION` if creating the student group would exceed the maximum number of student groups per course.

### HTTP request

`POST https://classroom.googleapis.com/v1/courses/{courseId}/studentGroups`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. The identifier of the course.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.rosters`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
