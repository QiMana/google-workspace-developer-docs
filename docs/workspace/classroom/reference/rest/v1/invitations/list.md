---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/invitations/list
root: workspace
fetched_at: 2026-04-23T15:26:03.991Z
---

# Method: invitations.list

Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request.

*Note:* At least one of `userId` or `courseId` must be supplied. Both fields can be supplied.

This method returns the following error codes:

- `PERMISSION_DENIED` for [access errors](../../../../troubleshooting/common-errors.md).

### HTTP request

`GET https://classroom.googleapis.com/v1/invitations`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>Restricts returned invitations to those for a specific user. The identifier can be one of the following:</p><ul><li>the numeric identifier for the user</li><li>the email address of the user</li><li>the string literal <code>"me"</code>, indicating the requesting user</li></ul></td></tr><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Restricts returned invitations to those for a course with the specified identifier.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of items to return. The default is 500 if unspecified or <code>0</code>.</p><p>The server may return fewer than the specified number of results.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p><code>nextPageToken</code> value returned from a previous <code>list</code> call, indicating that the subsequent page of results should be returned.</p><p>The <code>list</code> request must be otherwise identical to the one that resulted in this token.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response when listing invitations.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "invitations": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>invitations[]</code></td><td><p>Invitations that match the list request.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token identifying the next page of results to return. If empty, no further results are available.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.rosters`
- `           https://www.googleapis.com/auth/classroom.rosters.readonly`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
