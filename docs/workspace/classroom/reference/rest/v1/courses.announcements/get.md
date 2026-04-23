---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.announcements/get
root: workspace
fetched_at: 2026-04-23T15:25:54.736Z
---

# Method: courses.announcements.get

Returns an announcement.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or announcement, or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course or announcement does not exist.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{courseId}/announcements/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the announcement.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.announcements`
- `           https://www.googleapis.com/auth/classroom.announcements.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
