---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.announcements/list
root: workspace
fetched_at: 2026-04-23T15:25:54.667Z
---

# Method: courses.announcements.list

Returns a list of announcements that the requester is permitted to view.

Course students may only view `PUBLISHED` announcements. Course teachers and domain administrators may view all announcements.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course does not exist.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{courseId}/announcements`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>announcementStates[]</code></td><td><p>Restriction on the <code>state</code> of announcements returned. If this argument is left unspecified, the default value is <code>PUBLISHED</code>.</p></td></tr><tr><td><code>orderBy</code></td><td><p><code>string</code></p><p>Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is <code>updateTime</code>. Supported direction keywords are <code>asc</code> and <code>desc</code>. If not specified, <code>updateTime desc</code> is the default behavior. Examples: <code>updateTime asc</code>, <code>updateTime</code></p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum.</p><p>The server may return fewer than the specified number of results.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p><code>nextPageToken</code> value returned from a previous <code>list</code> call, indicating that the subsequent page of results should be returned.</p><p>The <code>list</code> request must be otherwise identical to the one that resulted in this token.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response when listing course work.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "announcements": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>announcements[]</code></td><td><p>Announcement items that match the request.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token identifying the next page of results to return. If empty, no further results are available.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.announcements`
- `           https://www.googleapis.com/auth/classroom.announcements.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
