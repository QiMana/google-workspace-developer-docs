---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses/get
root: workspace
fetched_at: 2026-04-23T15:26:02.625Z
---

# Method: courses.get

Returns a course.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for [access errors](../../../../troubleshooting/common-errors.md).
- `NOT_FOUND` if no course exists with the requested ID.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the course to return. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.courses`
- `           https://www.googleapis.com/auth/classroom.courses.readonly`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
