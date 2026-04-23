---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/invitations/create
root: workspace
fetched_at: 2026-04-23T15:26:04.051Z
---

# Method: invitations.create

Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `NOT_FOUND` if the course or the user does not exist.
- `FAILED_PRECONDITION`:
	- if the requested user's account is disabled.
		- if the user already has this role or a role with greater permissions.
		- for the following [request errors](https://developers.google.com/workspace/classroom/reference/Request.Errors):
		- IneligibleOwner
- `ALREADY_EXISTS` if an invitation for the specified user and course already exists.

### HTTP request

`POST https://classroom.googleapis.com/v1/invitations`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.rosters`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
