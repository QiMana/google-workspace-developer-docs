---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardianInvitations/patch
root: workspace
fetched_at: 2026-04-23T15:26:04.956Z
---

# Method: userProfiles.guardianInvitations.patch

Google Classroom add-ons are now generally available to developers! Please see the [add-ons documentation](https://developers.google.com/workspace/classroom/add-ons) for more information.

## Method: userProfiles.guardianInvitations.patch

Modifies a guardian invitation.

Currently, the only valid modification is to change the `state` from `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation.

This method returns the following error codes:

- `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for the domain in question or for other [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state.
- `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address, nor a `userId` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it modifies fields other than `state`.
- `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.

### HTTP request

`PATCH https://classroom.googleapis.com/v1/userProfiles/{studentId}/guardianInvitations/{invitationId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>studentId</code></td><td><p><code>string</code></p><p>The ID of the student whose guardian invitation is to be modified.</p></td></tr><tr><td><code>invitationId</code></td><td><p><code>string</code></p><p>The <code>id</code> field of the <code>GuardianInvitation</code> to be modified.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Mask that identifies which fields on the course to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields are valid:</p><ul><li><code>state</code></li></ul><p>When set in a query parameter, this field should be specified as</p><p><code>updateMask=<field1>,<field2>,...</code></p><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.guardianlinks.students`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
