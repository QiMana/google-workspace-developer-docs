---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.announcements/create
root: workspace
fetched_at: 2026-04-23T15:25:55.549Z
---

# Method: courses.announcements.create

Creates an announcement.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create announcements in the requested course, share a Drive attachment, or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course does not exist.
- `FAILED_PRECONDITION` for the following [request error](https://developers.google.com/workspace/classroom/reference/Request.Errors):
	- AttachmentNotVisible

### HTTP request

`POST https://classroom.googleapis.com/v1/courses/{courseId}/announcements`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.announcements`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
