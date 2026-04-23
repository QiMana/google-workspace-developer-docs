---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions/list
root: workspace
fetched_at: 2026-04-23T15:25:57.066Z
---

# Method: courses.courseWork.studentSubmissions.list

Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request. A hyphen (`-`) may be specified as the `courseWorkId` to include student submissions for multiple course work items.

Course students may only view their own work. Course teachers and domain administrators may view all student submissions.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for [access errors](../../../../troubleshooting/common-errors.md).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course does not exist.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr><tr><td><code>courseWorkId</code></td><td><p><code>string</code></p><p>Identifier of the student work to request. This may be set to the string literal <code>"-"</code> to request student work for all course work in the specified course.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>Optional argument to restrict returned student work to those owned by the student with the specified identifier. The identifier can be one of the following:</p><ul><li>the numeric identifier for the user</li><li>the email address of the user</li><li>the string literal <code>"me"</code>, indicating the requesting user</li></ul></td></tr><tr><td><code>states[]</code></td><td><p><code>enum (<code>SubmissionState</code>)</code></p><p>Requested submission states. If specified, returned student submissions match one of the specified submission states.</p></td></tr><tr><td><code>late</code></td><td><p><code>enum (<code>LateValues</code>)</code></p><p>Requested lateness value. If specified, returned student submissions are restricted by the requested value. If unspecified, submissions are returned regardless of <code>late</code> value.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum.</p><p>The server may return fewer than the specified number of results.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p><code>nextPageToken</code> value returned from a previous <code>list</code> call, indicating that the subsequent page of results should be returned.</p><p>The <code>list</code> request must be otherwise identical to the one that resulted in this token.</p></td></tr><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response when listing student submissions.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "studentSubmissions": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>studentSubmissions[]</code></td><td><p>Student work that matches the request.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token identifying the next page of results to return. If empty, no further results are available.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.coursework.students.readonly`
- `           https://www.googleapis.com/auth/classroom.coursework.me.readonly`
- `           https://www.googleapis.com/auth/classroom.coursework.students`
- `           https://www.googleapis.com/auth/classroom.coursework.me`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).

## LateValues

Restrictions on the late value of returned items.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>LATE_VALUES_UNSPECIFIED</code></td><td>No restriction on submission late values specified.</td></tr><tr><td><code>LATE_ONLY</code></td><td>Return StudentSubmissions where late is true.</td></tr><tr><td><code>NOT_LATE_ONLY</code></td><td>Return StudentSubmissions where late is false.</td></tr></tbody></table>
