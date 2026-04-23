---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings/list
root: workspace
fetched_at: 2026-04-23T15:30:31.236Z
---

# Method: conferenceRecords.recordings.list

Lists the recording resources from the conference record. By default, ordered by start time and in ascending order.

### HTTP request

`GET https://meet.googleapis.com/v2/{parent=conferenceRecords/*}/recordings`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. Format: <code>conferenceRecords/{conferenceRecord}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of recordings to return. The service might return fewer than this value. If unspecified, at most 10 recordings are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Page token returned from previous List Call.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response for recordings.list method.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "recordings": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>recordings[]</code></td><td><p>List of recordings in one page.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to be circulated back for further List call if current List doesn't include all the recordings. Unset if all recordings are returned.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/meetings.space.created`
- `https://www.googleapis.com/auth/meetings.space.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
