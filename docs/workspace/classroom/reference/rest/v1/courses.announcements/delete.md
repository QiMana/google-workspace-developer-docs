---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.announcements/delete
root: workspace
fetched_at: 2026-04-23T15:25:54.460Z
---

# Method: courses.announcements.delete

Deletes an announcement.

This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding announcement item.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement, if the requesting user is not permitted to delete the requested course or for [access errors](../../../../troubleshooting/common-errors.md).
- `FAILED_PRECONDITION` if the requested announcement has already been deleted.
- `NOT_FOUND` if no course exists with the requested ID.

### HTTP request

`DELETE https://classroom.googleapis.com/v1/courses/{courseId}/announcements/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the announcement to delete. This identifier is a Classroom-assigned identifier.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.announcements`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
