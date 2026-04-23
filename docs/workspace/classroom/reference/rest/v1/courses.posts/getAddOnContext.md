---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.posts/getAddOnContext
root: workspace
fetched_at: 2026-04-23T15:25:59.918Z
---

# Method: courses.posts.getAddOnContext

Gets metadata for Classroom add-ons in the context of a specific post.

To maintain the integrity of its own data and permissions model, an add-on should call this to validate query parameters and the requesting user's role whenever the add-on is opened in an [iframe](../../../../add-ons/get-started/get-started-overview.md).

This method returns the following error codes:

- `PERMISSION_DENIED` for [access errors](../../../../troubleshooting/common-errors.md).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if one of the identified resources does not exist.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{courseId}/posts/{postId}/addOnContext`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course.</p></td></tr><tr><td><code>postId<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Optional. Deprecated, use <code>itemId</code> instead.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>itemId</code></td><td><p><code>string</code></p><p>Identifier of the <code>Announcement</code>, <code>CourseWork</code>, or <code>CourseWorkMaterial</code> under which the attachment is attached. This field is required, but is not marked as such while we are migrating from postId.</p></td></tr><tr><td><code>addOnToken</code></td><td><p><code>string</code></p><p>Optional. Token that authorizes the request.</p><p>The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL.</p><p>The authorization token is required when neither of the following is true:</p><ul><li>The add-on has attachments on the post.</li><li>The developer project issuing the request is the same project that created the post.</li></ul></td></tr><tr><td><code>attachmentId</code></td><td><p><code>string</code></p><p>Optional. The identifier of the attachment. This field is required for all requests except when the user is in the <a href="https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/attachment-discovery-iframe">Attachment Discovery iframe</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `AddOnContext`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.addons.student`
- `           https://www.googleapis.com/auth/classroom.addons.teacher`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
