---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.posts.addOnAttachments/list
root: workspace
fetched_at: 2026-04-23T15:26:00.752Z
---

# Method: courses.posts.addOnAttachments.list

Returns all attachments created by an add-on under the post.

Requires the add-on to have active attachments on the post or have permission to create new attachments on the post.

This method returns the following error codes:

- `PERMISSION_DENIED` for [access errors](../../../../troubleshooting/common-errors.md).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if one of the identified resources does not exist.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{courseId}/posts/{postId}/addOnAttachments`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course.</p></td></tr><tr><td><code>postId<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Optional. Identifier of the post under the course whose attachments to enumerate. Deprecated, use <code>itemId</code> instead.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>itemId</code></td><td><p><code>string</code></p><p>Identifier of the <code>Announcement</code>, <code>CourseWork</code>, or <code>CourseWorkMaterial</code> whose attachments should be enumerated. This field is required, but is not marked as such while we are migrating from postId.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of attachments to return. The service may return fewer than this value. If unspecified, at most 20 attachments will be returned. The maximum value is 20; values above 20 will be coerced to 20.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>A page token, received from a previous <code>addOnAttachments.list</code> call. Provide this to retrieve the subsequent page.</p><p>When paginating, all other parameters provided to <code>addOnAttachments.list</code> must match the call that provided the page token.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `ListAddOnAttachmentsResponse`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.addons.student`
- `           https://www.googleapis.com/auth/classroom.addons.teacher`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
