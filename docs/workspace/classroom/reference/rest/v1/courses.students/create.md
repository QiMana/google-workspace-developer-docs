---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.students/create
root: workspace
fetched_at: 2026-04-23T15:26:01.417Z
---

# Method: courses.students.create

Adds a user as a student of a course.

Domain administrators are permitted to [directly add](https://developers.google.com/workspace/classroom/guides/manage-users) users within their domain as students to courses within their domain. Students are permitted to add themselves to a course using an enrollment code.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `NOT_FOUND` if the requested course ID does not exist.
- `FAILED_PRECONDITION` if the requested user's account is disabled, for the following [request errors](https://developers.google.com/workspace/classroom/reference/Request.Errors):
	- CourseMemberLimitReached
		- CourseNotModifiable
		- UserGroupsMembershipLimitReached
		- InactiveCourseOwner
- `ALREADY_EXISTS` if the user is already a student or teacher in the course.

### HTTP request

`POST https://classroom.googleapis.com/v1/courses/{courseId}/students`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course to create the student in. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>enrollmentCode</code></td><td><p><code>string</code></p><p>Enrollment code of the course to create the student in. This code is required if corresponds to the requesting user; it may be omitted if the requesting user has administrative permissions to create students for any user.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.rosters`
- `           https://www.googleapis.com/auth/classroom.profile.emails`
- `           https://www.googleapis.com/auth/classroom.profile.photos`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
