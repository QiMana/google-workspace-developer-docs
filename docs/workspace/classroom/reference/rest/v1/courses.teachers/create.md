---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.teachers/create
root: workspace
fetched_at: 2026-04-23T15:26:01.559Z
---

# Method: courses.teachers.create

Creates a teacher of a course.

Domain administrators are permitted to [directly add](../../../../guides/manage-users.md) users within their domain as teachers to courses within their domain. Non-admin users should send an `Invitation` instead.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for [access errors](../../../../troubleshooting/common-errors.md).
- `NOT_FOUND` if the requested course ID does not exist.
- `FAILED_PRECONDITION` if the requested user's account is disabled, for the following [request errors](../../../../troubleshooting/common-errors.md):
	- CourseMemberLimitReached
		- CourseNotModifiable
		- CourseTeacherLimitReached
		- UserGroupsMembershipLimitReached
		- InactiveCourseOwner
- `ALREADY_EXISTS` if the user is already a teacher or student in the course.

### HTTP request

`POST https://classroom.googleapis.com/v1/courses/{courseId}/teachers`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.rosters`
- `           https://www.googleapis.com/auth/classroom.profile.emails`
- `           https://www.googleapis.com/auth/classroom.profile.photos`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
