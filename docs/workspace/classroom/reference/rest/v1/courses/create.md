---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses/create
root: workspace
fetched_at: 2026-04-23T15:26:02.755Z
---

# Method: courses.create

Creates a course.

The user specified in `ownerId` is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `NOT_FOUND` if the primary teacher is not a valid user.
- `FAILED_PRECONDITION` if the course owner's account is disabled or for the following [request errors](https://developers.google.com/workspace/classroom/reference/Request.Errors):
	- UserCannotOwnCourse
		- UserGroupsMembershipLimitReached
		- CourseTitleCannotContainUrl
- `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.

### HTTP request

`POST https://classroom.googleapis.com/v1/courses`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.courses`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
