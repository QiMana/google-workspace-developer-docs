---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.posts.addOnAttachments/patch
root: workspace
fetched_at: 2026-04-23T15:25:59.974Z
---

# Method: courses.posts.addOnAttachments.patch

Updates an add-on attachment.

Requires the add-on to have been the original creator of the attachment.

This method returns the following error codes:

- `PERMISSION_DENIED` for [access errors](../../../../troubleshooting/common-errors.md).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if one of the identified resources does not exist.

### HTTP request

`PATCH https://classroom.googleapis.com/v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course.</p></td></tr><tr><td><code>postId</code></td><td><p><code>string</code></p><p>Required. Identifier of the post under which the attachment is attached.</p></td></tr><tr><td><code>attachmentId</code></td><td><p><code>string</code></p><p>Required. Identifier of the attachment.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>itemId</code></td><td><p><code>string</code></p><p>Identifier of the post under which the attachment is attached.</p></td></tr><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Required. Mask that identifies which fields on the attachment to update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the <code>AddOnAttachment</code> object. If a field that does not support empty values is included in the update mask and not set in the <code>AddOnAttachment</code> object, an <code>INVALID_ARGUMENT</code> error is returned.</p><p>The following fields may be specified by teachers:</p><ul><li><code>title</code></li><li><code>teacherViewUri</code></li><li><code>studentViewUri</code></li><li><code>studentWorkReviewUri</code></li><li><code>dueDate</code></li><li><code>dueTime</code></li><li><code>maxPoints</code></li></ul><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `AddOnAttachment`.

### Response body

If successful, the response body contains an instance of `AddOnAttachment`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.addons.teacher`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
