---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.rubrics/list
root: workspace
fetched_at: 2026-04-23T15:25:56.460Z
---

# Method: courses.courseWork.rubrics.list

Returns a list of rubrics that the requester is permitted to view.

This method returns the following error codes:

- `PERMISSION_DENIED` for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course or course work doesn't exist or if the user doesn't have access to the corresponding course work.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course.</p></td></tr><tr><td><code>courseWorkId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course work.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of rubrics to return. If unspecified, at most 1 rubric is returned. The maximum value is 1; values above 1 are coerced to 1.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p><code>nextPageToken</code> value returned from a previous <code>list</code> call, indicating that the subsequent page of results should be returned.</p><p>The <code>list</code> request must be otherwise identical to the one that resulted in this token.</p></td></tr><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response when listing rubrics.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "rubrics": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>rubrics[]</code></td><td><p>Rubrics that match the request.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token identifying the next page of results to return. If empty, no further results are available.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.coursework.students.readonly`
- `           https://www.googleapis.com/auth/classroom.coursework.me.readonly`
- `           https://www.googleapis.com/auth/classroom.coursework.students`
- `           https://www.googleapis.com/auth/classroom.coursework.me`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
