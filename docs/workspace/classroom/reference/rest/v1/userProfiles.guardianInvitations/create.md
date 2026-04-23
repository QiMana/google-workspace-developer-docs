---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardianInvitations/create
root: workspace
fetched_at: 2026-04-23T15:26:04.368Z
---

# Method: userProfiles.guardianInvitations.create

Google Classroom add-ons are now generally available to developers! Please see the [add-ons documentation](https://developers.google.com/workspace/classroom/add-ons) for more information.

## Method: userProfiles.guardianInvitations.create

Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian.

Once the guardian accepts the invitation, their `state` will change to `COMPLETED` and they will start receiving guardian notifications. A `Guardian` resource will also be created to represent the active guardian.

The request object must have the `studentId` and `invitedEmailAddress` fields set. Failing to set these fields, or setting any other fields in the request, will result in an error.

This method returns the following error codes:

- `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if the guardian in question has already rejected too many requests for that student, if guardians are not enabled for the domain in question, or for other [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian link limit.
- `INVALID_ARGUMENT` if the guardian email address is not valid (for example, if it is too long), or if the format of the student ID provided cannot be recognized (it is not an email address, nor a `userId` from this API). This error will also be returned if read-only fields are set, or if the `state` field is set to to a value other than `PENDING`.
- `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student.
- `ALREADY_EXISTS` if there is already a pending guardian invitation for the student and `invitedEmailAddress` provided, or if the provided `invitedEmailAddress` matches the Google account of an existing `Guardian` for this user.

### HTTP request

`POST https://classroom.googleapis.com/v1/userProfiles/{guardianInvitation.studentId}/guardianInvitations`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>guardianInvitation.studentId</code></td><td><p><code>string</code></p><p>ID of the student (in standard format)</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.guardianlinks.students`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
