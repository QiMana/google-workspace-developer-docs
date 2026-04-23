---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.students/list
root: workspace
fetched_at: 2026-04-23T15:26:01.171Z
---

# Method: courses.students.list

Returns a list of students of this course that the requester is permitted to view.

This method returns the following error codes:

- `NOT_FOUND` if the course does not exist.
- `PERMISSION_DENIED` for [access errors](../../../../troubleshooting/common-errors.md).

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{courseId}/students`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of items to return. The default is 30 if unspecified or <code>0</code>.</p><p>The server may return fewer than the specified number of results.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p><code>nextPageToken</code> value returned from a previous <code>list</code> call, indicating that the subsequent page of results should be returned.</p><p>The <code>list</code> request must be otherwise identical to the one that resulted in this token.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response when listing students.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "students": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>students[]</code></td><td><p>Students who match the list request.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token identifying the next page of results to return. If empty, no further results are available.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.rosters`
- `           https://www.googleapis.com/auth/classroom.rosters.readonly`
- `           https://www.googleapis.com/auth/classroom.profile.emails`
- `           https://www.googleapis.com/auth/classroom.profile.photos`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
