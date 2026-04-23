---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.announcements/patch
root: workspace
fetched_at: 2026-04-23T15:25:55.060Z
---

# Method: courses.announcements.patch

Updates one or more fields of an announcement.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if the request is malformed.
- `FAILED_PRECONDITION` if the requested announcement has already been deleted.
- `NOT_FOUND` if the requested course or announcement does not exist

### HTTP request

`PATCH https://classroom.googleapis.com/v1/courses/{courseId}/announcements/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the announcement.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Mask that identifies which fields on the announcement to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Announcement object. If a field that does not support empty values is included in the update mask and not set in the Announcement object, an <code>INVALID_ARGUMENT</code> error is returned.</p><p>The following fields may be specified by teachers:</p><ul><li><code>text</code></li><li><code>state</code></li><li><code>scheduledTime</code></li></ul><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.announcements`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
