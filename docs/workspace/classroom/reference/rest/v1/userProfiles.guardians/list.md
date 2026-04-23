---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardians/list
root: workspace
fetched_at: 2026-04-23T15:26:04.804Z
---

# Method: userProfiles.guardians.list

Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request.

To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the student ID.

This method returns the following error codes:

- `PERMISSION_DENIED` if a `studentId` is specified, and the requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the `studentId` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the `invitedEmailAddress` filter is set by a user who is not a domain administrator, or for other [access errors](../../../../troubleshooting/common-errors.md).
- `INVALID_ARGUMENT` if a `studentId` is specified, but its format cannot be recognized (it is not an email address, nor a `studentId` from the API, nor the literal string `me`). May also be returned if an invalid `pageToken` is provided.
- `NOT_FOUND` if a `studentId` is specified, and its format can be recognized, but Classroom has no record of that student.

### HTTP request

`GET https://classroom.googleapis.com/v1/userProfiles/{studentId}/guardians`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>studentId</code></td><td><p><code>string</code></p><p>Filter results by the student who the guardian is linked to. The identifier can be one of the following:</p><ul><li>the numeric identifier for the user</li><li>the email address of the user</li><li>the string literal <code>"me"</code>, indicating the requesting user</li><li>the string literal <code>"-"</code>, indicating that results should be returned for all students that the requesting user has access to view.</li></ul></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>invitedEmailAddress</code></td><td><p><code>string</code></p><p>Filter results by the email address that the original invitation was sent to, resulting in this guardian link. This filter can only be used by domain administrators.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p><code>nextPageToken</code> value returned from a previous <code>list</code> call, indicating that the subsequent page of results should be returned.</p><p>The <code>list</code> request must be otherwise identical to the one that resulted in this token.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum.</p><p>The server may return fewer than the specified number of results.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response when listing guardians.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "guardians": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>guardians[]</code></td><td><p>Guardians on this page of results that met the criteria specified in the request.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token identifying the next page of results to return. If empty, no further results are available.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly`
- `           https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly`
- `           https://www.googleapis.com/auth/classroom.guardianlinks.students`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
