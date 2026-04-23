---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.studentGroups/patch
root: workspace
fetched_at: 2026-04-23T15:26:00.804Z
---

# Method: courses.studentGroups.patch

Updates one or more fields in a student group.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested student group or for [access errors](../../../../troubleshooting/common-errors.md).
- `NOT_FOUND` if the student group does not exist or the user does not have access to the student group.
- `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied.

### HTTP request

`PATCH https://classroom.googleapis.com/v1/courses/{courseId}/studentGroups/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. Identifier of the student group.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Required. Mask that identifies which fields on the student group to update. This field is required to do an update. The update fails if invalid fields are specified.</p><p>The following fields can be specified by teachers:</p><ul><li><code>title</code></li></ul><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The endpoint preview version. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.rosters`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
