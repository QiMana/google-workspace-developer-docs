---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/invitations/accept
root: workspace
fetched_at: 2026-04-23T15:26:03.837Z
---

# Method: invitations.accept

Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `FAILED_PRECONDITION` for the following [request errors](https://developers.google.com/workspace/classroom/reference/Request.Errors):
	- CourseMemberLimitReached
		- CourseNotModifiable
		- CourseTeacherLimitReached
		- UserGroupsMembershipLimitReached
- `NOT_FOUND` if no invitation exists with the requested ID.

### HTTP request

`POST https://classroom.googleapis.com/v1/invitations/{id}:accept`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the invitation to accept.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.rosters`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
