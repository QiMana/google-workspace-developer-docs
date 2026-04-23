---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses/patch
root: workspace
fetched_at: 2026-04-23T15:26:02.397Z
---

# Method: courses.patch

Updates one or more fields in a course.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `NOT_FOUND` if no course exists with the requested ID.
- `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied.
- `FAILED_PRECONDITION` for the following [request errors](https://developers.google.com/workspace/classroom/reference/Request.Errors):
	- CourseNotModifiable
		- InactiveCourseOwner
		- IneligibleOwner
		- CourseTitleCannotContainUrl

### HTTP request

`PATCH https://classroom.googleapis.com/v1/courses/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Mask that identifies which fields on the course to update. This field is required to do an update. The update will fail if invalid fields are specified. The following fields are valid:</p><ul><li><code>courseState</code></li><li><code>description</code></li><li><code>descriptionHeading</code></li><li><code>name</code></li><li><code>ownerId</code></li><li><code>room</code></li><li><code>section</code></li><li><code>subject</code></li></ul><p>Note: patches to ownerId are treated as being effective immediately, but in practice it may take some time for the ownership transfer of all affected resources to complete.</p><p>When set in a query parameter, this field should be specified as</p><p><code>updateMask=<field1>,<field2>,...</code></p><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.courses`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
