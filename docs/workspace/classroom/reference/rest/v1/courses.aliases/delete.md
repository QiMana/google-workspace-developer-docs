---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.aliases/delete
root: workspace
fetched_at: 2026-04-23T15:25:53.142Z
---

# Method: courses.aliases.delete

Deletes an alias of a course.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `NOT_FOUND` if the alias does not exist.
- `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to delete a domain-scoped alias).

### HTTP request

`DELETE https://classroom.googleapis.com/v1/courses/{courseId}/aliases/{alias}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course whose alias should be deleted. This identifier can be either the Classroom-assigned identifier or an .</p></td></tr><tr><td><code>alias</code></td><td><p><code>string</code></p><p>Alias to delete. This may not be the Classroom-assigned identifier.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.courses`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
