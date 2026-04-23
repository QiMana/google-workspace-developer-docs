---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.studentGroups.studentGroupMembers/list
root: workspace
fetched_at: 2026-04-23T15:26:00.521Z
---

# Method: courses.studentGroups.studentGroupMembers.list

Returns a list of students in a group.

This method returns the following error codes:

- `NOT_FOUND` if the course or student group does not exist.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{courseId}/studentGroups/{studentGroupId}/studentGroupMembers`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. The identifier of the course.</p></td></tr><tr><td><code>studentGroupId</code></td><td><p><code>string</code></p><p>Required. The identifier of the student group.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum.</p><p>The server may return fewer than the specified number of results.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p><code>nextPageToken</code> value returned from a previous <code>list</code> call, indicating that the subsequent page of results should be returned.</p><p>The <code>list</code> request must be otherwise identical to the one that resulted in this token.</p></td></tr><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response when listing students in a group.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "studentGroupMembers": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>studentGroupMembers[]</code></td><td><p>The student group members.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token identifying the next page of results to return. If empty, no further results are available.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.rosters`
- `           https://www.googleapis.com/auth/classroom.rosters.readonly`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
