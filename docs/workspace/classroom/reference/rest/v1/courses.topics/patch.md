---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.topics/patch
root: workspace
fetched_at: 2026-04-23T15:26:02.232Z
---

# Method: courses.topics.patch

Updates one or more fields of a topic.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting developer project did not create the corresponding topic or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if the request is malformed.
- `FAILED_PRECONDITION` if there exists a topic in the course with the same name.
- `NOT_FOUND` if the requested course or topic does not exist

### HTTP request

`PATCH https://classroom.googleapis.com/v1/courses/{courseId}/topics/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the topic.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Mask that identifies which fields on the topic to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Topic object. If a field that does not support empty values is included in the update mask and not set in the Topic object, an <code>INVALID_ARGUMENT</code> error is returned.</p><p>The following fields may be specified:</p><ul><li><code>name</code></li></ul><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.topics`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
