---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses/delete
root: workspace
fetched_at: 2026-04-23T15:26:02.307Z
---

# Method: courses.delete

Deletes a course.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `NOT_FOUND` if no course exists with the requested ID.

### HTTP request

`DELETE https://classroom.googleapis.com/v1/courses/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.courses`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
