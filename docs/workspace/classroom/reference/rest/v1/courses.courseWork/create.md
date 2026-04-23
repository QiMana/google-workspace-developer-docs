---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork/create
root: workspace
fetched_at: 2026-04-23T15:25:57.319Z
---

# Method: courses.courseWork.create

Creates course work.

The resulting course work (and corresponding student submissions) are associated with the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request. Classroom API requests to modify course work and student submissions must be made with an OAuth client ID from the associated Developer Console project.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work in the requested course, share a Drive attachment, or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course does not exist.
- `FAILED_PRECONDITION` for the following [request error](https://developers.google.com/workspace/classroom/reference/Request.Errors):
	- AttachmentNotVisible

### HTTP request

`POST https://classroom.googleapis.com/v1/courses/{courseId}/courseWork`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the endpoint. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.coursework.students`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
