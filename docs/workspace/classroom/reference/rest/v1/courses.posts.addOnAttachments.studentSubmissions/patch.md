---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.posts.addOnAttachments.studentSubmissions/patch
root: workspace
fetched_at: 2026-04-23T15:25:58.924Z
---

# Method: courses.posts.addOnAttachments.studentSubmissions.patch

Updates data associated with an add-on attachment submission.

Requires the add-on to have been the original creator of the attachment and the attachment to have a positive `maxPoints` value set.

This method returns the following error codes:

- `PERMISSION_DENIED` for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if one of the identified resources does not exist.

### HTTP request

`PATCH https://classroom.googleapis.com/v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course.</p></td></tr><tr><td><code>postId<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Optional. Deprecated, use <code>itemId</code> instead.</p></td></tr><tr><td><code>attachmentId</code></td><td><p><code>string</code></p><p>Required. Identifier of the attachment.</p></td></tr><tr><td><code>submissionId</code></td><td><p><code>string</code></p><p>Required. Identifier of the student's submission.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>itemId</code></td><td><p><code>string</code></p><p>Identifier of the <code>Announcement</code>, <code>CourseWork</code>, or <code>CourseWorkMaterial</code> under which the attachment is attached. This field is required, but is not marked as such while we are migrating from postId.</p></td></tr><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Required. Mask that identifies which fields on the attachment to update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the <code>AddOnAttachmentStudentSubmission</code> object.</p><p>The following fields may be specified by teachers:</p><ul><li><code>pointsEarned</code></li></ul><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `AddOnAttachmentStudentSubmission`.

### Response body

If successful, the response body contains an instance of `AddOnAttachmentStudentSubmission`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.addons.teacher`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
