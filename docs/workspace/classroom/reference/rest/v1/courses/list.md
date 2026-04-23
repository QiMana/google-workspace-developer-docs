---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses/list
root: workspace
fetched_at: 2026-04-23T15:26:02.698Z
---

# Method: courses.list

Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. Returned courses are ordered by creation time, with the most recently created coming first.

This method returns the following error codes:

- `PERMISSION_DENIED` for [access errors](../../../../troubleshooting/common-errors.md).
- `INVALID_ARGUMENT` if the query argument is malformed.
- `NOT_FOUND` if any users specified in the query arguments do not exist.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>studentId</code></td><td><p><code>string</code></p><p>Restricts returned courses to those having a student with the specified identifier. The identifier can be one of the following:</p><ul><li>the numeric identifier for the user</li><li>the email address of the user</li><li>the string literal <code>"me"</code>, indicating the requesting user</li></ul><p>If specified, <code>teacherId</code> must be empty.</p></td></tr><tr><td><code>teacherId</code></td><td><p><code>string</code></p><p>Restricts returned courses to those having a teacher with the specified identifier. The identifier can be one of the following:</p><ul><li>the numeric identifier for the user</li><li>the email address of the user</li><li>the string literal <code>"me"</code>, indicating the requesting user</li></ul><p>If specified, <code>studentId</code> must be empty.</p></td></tr><tr><td><code>courseStates[]</code></td><td><p>Restricts returned courses to those in one of the specified states. If unspecified, Courses in any state are returned.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum.</p><p>The server may return fewer than the specified number of results.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p><code>nextPageToken</code> value returned from a previous <code>list</code> call, indicating that the subsequent page of results should be returned.</p><p>The <code>list</code> request must be otherwise identical to the one that resulted in this token.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response when listing courses.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "courses": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>courses[]</code></td><td><p>Courses that match the list request.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token identifying the next page of results to return. If empty, no further results are available.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.courses`
- `           https://www.googleapis.com/auth/classroom.courses.readonly`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
