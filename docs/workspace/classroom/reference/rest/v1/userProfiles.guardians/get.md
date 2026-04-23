---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardians/get
root: workspace
fetched_at: 2026-04-23T15:26:04.435Z
---

# Method: userProfiles.guardians.get

Google Classroom add-ons are now generally available to developers! Please see the [add-ons documentation](https://developers.google.com/workspace/classroom/add-ons) for more information.

## Method: userProfiles.guardians.get

Returns a specific guardian.

This method returns the following error codes:

- `PERMISSION_DENIED` if no user that matches the provided `studentId` is visible to the requesting user, if the requesting user is not permitted to view guardian information for the student identified by the `studentId`, if guardians are not enabled for the domain in question, or for other [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if a `studentId` is specified, but its format cannot be recognized (it is not an email address, nor a `studentId` from the API, nor the literal string `me`).
- `NOT_FOUND` if the requesting user is permitted to view guardians for the requested `studentId`, but no `Guardian` record exists for that student that matches the provided `guardianId`.

### HTTP request

`GET https://classroom.googleapis.com/v1/userProfiles/{studentId}/guardians/{guardianId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>studentId</code></td><td><p><code>string</code></p><p>The student whose guardian is being requested. One of the following:</p><ul><li>the numeric identifier for the user</li><li>the email address of the user</li><li>the string literal <code>"me"</code>, indicating the requesting user</li></ul></td></tr><tr><td><code>guardianId</code></td><td><p><code>string</code></p><p>The <code>id</code> field from a <code>Guardian</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly`
- `           https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly`
- `           https://www.googleapis.com/auth/classroom.guardianlinks.students`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
