---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.topics/delete
root: workspace
fetched_at: 2026-04-23T15:26:05.053Z
---

# Method: courses.topics.delete

Deletes a topic.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not allowed to delete the requested topic or for [access errors](../../../../troubleshooting/common-errors.md).
- `FAILED_PRECONDITION` if the requested topic has already been deleted.
- `NOT_FOUND` if no course or topic exists with the requested ID.

### HTTP request

`DELETE https://classroom.googleapis.com/v1/courses/{courseId}/topics/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the topic to delete.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.topics`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
