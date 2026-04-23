---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.topics/create
root: workspace
fetched_at: 2026-04-23T15:26:01.715Z
---

# Method: courses.topics.create

Creates a topic.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create a topic in the requested course, or for [access errors](../../../../troubleshooting/common-errors.md).
- `INVALID_ARGUMENT` if the request is malformed.
- `ALREADY_EXISTS` if there exists a topic in the course with the same name.
- `FAILED_PRECONDITION` for the following [request error](../../../../troubleshooting/common-errors.md):
	- CourseTopicLimitReached
- `NOT_FOUND` if the requested course does not exist.

### HTTP request

`POST https://classroom.googleapis.com/v1/courses/{courseId}/topics`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.topics`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
