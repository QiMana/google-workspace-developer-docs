---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.posts.addOnAttachments/create
root: workspace
fetched_at: 2026-04-23T15:25:59.684Z
---

# Method: courses.posts.addOnAttachments.create

Creates an add-on attachment under a post.

Requires the add-on to have permission to create new attachments on the post.

This method returns the following error codes:

- `PERMISSION_DENIED` for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if one of the identified resources does not exist.

### HTTP request

`POST https://classroom.googleapis.com/v1/courses/{courseId}/posts/{postId}/addOnAttachments`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course.</p></td></tr><tr><td><code>postId<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Optional. Deprecated, use <code>itemId</code> instead.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>itemId</code></td><td><p><code>string</code></p><p>Identifier of the <code>Announcement</code>, <code>CourseWork</code>, or <code>CourseWorkMaterial</code> under which to create the attachment. This field is required, but is not marked as such while we are migrating from postId.</p></td></tr><tr><td><code>addOnToken</code></td><td><p><code>string</code></p><p>Optional. Token that authorizes the request.</p><p>The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL.</p><p>This authorization token is required for in-Classroom attachment creation but optional for partner-first attachment creation. Returns an error if not provided for partner-first attachment creation and the developer projects that created the attachment and its parent stream item do not match.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `AddOnAttachment`.

### Response body

If successful, the response body contains a newly created instance of `AddOnAttachment`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.addons.teacher`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
