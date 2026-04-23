---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.aliases/create
root: workspace
fetched_at: 2026-04-23T15:25:53.048Z
---

# Method: courses.aliases.create

Creates an alias for a course.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to create the alias or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `NOT_FOUND` if the course does not exist.
- `ALREADY_EXISTS` if the alias already exists.
- `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to access a domain-scoped alias).

### HTTP request

`POST https://classroom.googleapis.com/v1/courses/{courseId}/aliases`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course to alias. This identifier can be either the Classroom-assigned identifier or an .</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.courses`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
