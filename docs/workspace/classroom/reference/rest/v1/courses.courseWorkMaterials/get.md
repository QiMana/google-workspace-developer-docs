---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWorkMaterials/get
root: workspace
fetched_at: 2026-04-23T15:25:59.177Z
---

# Method: courses.courseWorkMaterials.get

Returns a course work material.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work material, or for [access errors](../../../../troubleshooting/common-errors.md).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course or course work material does not exist.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{courseId}/courseWorkMaterials/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the course work material.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.courseworkmaterials`
- `           https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
