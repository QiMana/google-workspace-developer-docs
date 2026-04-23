---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardians/delete
root: workspace
fetched_at: 2026-04-23T15:26:04.714Z
---

# Method: userProfiles.guardians.delete

Google Classroom add-ons are now generally available to developers! Please see the [add-ons documentation](../../../../add-ons.md) for more information.

## Method: userProfiles.guardians.delete

Deletes a guardian.

The guardian will no longer receive guardian notifications and the guardian will no longer be accessible via the API.

This method returns the following error codes:

- `PERMISSION_DENIED` if no user that matches the provided `studentId` is visible to the requesting user, if the requesting user is not permitted to manage guardians for the student identified by the `studentId`, if guardians are not enabled for the domain in question, or for other [access errors](../../../../troubleshooting/common-errors.md).
- `INVALID_ARGUMENT` if a `studentId` is specified, but its format cannot be recognized (it is not an email address, nor a `studentId` from the API).
- `NOT_FOUND` if the requesting user is permitted to modify guardians for the requested `studentId`, but no `Guardian` record exists for that student with the provided `guardianId`.

### HTTP request

`DELETE https://classroom.googleapis.com/v1/userProfiles/{studentId}/guardians/{guardianId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>studentId</code></td><td><p><code>string</code></p><p>The student whose guardian is to be deleted. One of the following:</p><ul><li>the numeric identifier for the user</li><li>the email address of the user</li><li>the string literal <code>"me"</code>, indicating the requesting user</li></ul></td></tr><tr><td><code>guardianId</code></td><td><p><code>string</code></p><p>The <code>id</code> field from a <code>Guardian</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.guardianlinks.students`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
