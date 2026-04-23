---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardianInvitations/get
root: workspace
fetched_at: 2026-04-23T15:26:04.496Z
---

# Method: userProfiles.guardianInvitations.get

Google Classroom add-ons are now generally available to developers! Please see the [add-ons documentation](https://developers.google.com/workspace/classroom/add-ons) for more information.

## Method: userProfiles.guardianInvitations.get

Returns a specific guardian invitation.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to view guardian invitations for the student identified by the `studentId`, if guardians are not enabled for the domain in question, or for other [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if a `studentId` is specified, but its format cannot be recognized (it is not an email address, nor a `studentId` from the API, nor the literal string `me`).
- `NOT_FOUND` if Classroom cannot find any record of the given student or `invitationId`. May also be returned if the student exists, but the requesting user does not have access to see that student.

### HTTP request

`GET https://classroom.googleapis.com/v1/userProfiles/{studentId}/guardianInvitations/{invitationId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>studentId</code></td><td><p><code>string</code></p><p>The ID of the student whose guardian invitation is being requested.</p></td></tr><tr><td><code>invitationId</code></td><td><p><code>string</code></p><p>The <code>id</code> field of the <code>GuardianInvitation</code> being requested.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly`
- `           https://www.googleapis.com/auth/classroom.guardianlinks.students`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
