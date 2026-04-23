---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.studentGroups.studentGroupMembers/delete
root: workspace
fetched_at: 2026-04-23T15:26:00.288Z
---

# Method: courses.studentGroups.studentGroupMembers.delete

Deletes a student group member.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested student group member or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `NOT_FOUND` if the student group member does not exist or the user does not have access to the student group.

### HTTP request

`DELETE https://classroom.googleapis.com/v1/courses/{courseId}/studentGroups/{studentGroupId}/studentGroupMembers/{userId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. The identifier of the course containing the relevant student group.</p></td></tr><tr><td><code>studentGroupId</code></td><td><p><code>string</code></p><p>Required. The identifier of the student group containing the student group member to delete.</p></td></tr><tr><td><code>userId</code></td><td><p><code>string</code></p><p>Required. The identifier of the student group member to delete.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.rosters`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
