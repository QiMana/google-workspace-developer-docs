---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWorkMaterials/list
root: workspace
fetched_at: 2026-04-23T15:25:58.713Z
---

# Method: courses.courseWorkMaterials.list

Returns a list of course work material that the requester is permitted to view.

Course students may only view `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course does not exist.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{courseId}/courseWorkMaterials`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseWorkMaterialStates[]</code></td><td><p>Restriction on the work status to return. Only course work material that matches is returned. If unspecified, items with a work status of <code>PUBLISHED</code> is returned.</p></td></tr><tr><td><code>orderBy</code></td><td><p><code>string</code></p><p>Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is <code>updateTime</code>. Supported direction keywords are <code>asc</code> and <code>desc</code>. If not specified, <code>updateTime desc</code> is the default behavior. Examples: <code>updateTime asc</code>, <code>updateTime</code></p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum.</p><p>The server may return fewer than the specified number of results.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p><code>nextPageToken</code> value returned from a previous <code>list</code> call, indicating that the subsequent page of results should be returned.</p><p>The <code>list</code> request must be otherwise identical to the one that resulted in this token.</p></td></tr><tr><td><code>materialLink</code></td><td><p><code>string</code></p><p>Optional filtering for course work material with at least one link material whose URL partially matches the provided string.</p></td></tr><tr><td><code>materialDriveId</code></td><td><p><code>string</code></p><p>Optional filtering for course work material with at least one Drive material whose ID matches the provided string. If <code>materialLink</code> is also specified, course work material must have materials matching both filters.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response when listing course work material.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "courseWorkMaterial": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>courseWorkMaterial[]</code></td><td><p>Course work material items that match the request.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token identifying the next page of results to return. If empty, no further results are available.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.courseworkmaterials`
- `           https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
