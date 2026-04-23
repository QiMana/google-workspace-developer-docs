---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords/list
root: workspace
fetched_at: 2026-04-23T15:30:33.662Z
---

# Method: conferenceRecords.list

Lists the conference records. By default, ordered by start time and in descending order.

### HTTP request

`GET https://meet.googleapis.com/v2/conferenceRecords`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. Maximum number of conference records to return. The service might return fewer than this value. If unspecified, at most 25 conference records are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. Page token returned from previous List Call.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. User specified filtering condition in <a href="https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form">EBNF format</a>. The following are the filterable fields:</p><ul><li><code>space.meeting_code</code></li><li><code>space.name</code></li><li><code>start_time</code></li><li><code>end_time</code></li></ul><p>For example, consider the following filters:</p><ul><li><code>space.name = "spaces/NAME"</code></li><li><code>space.meeting_code = "abc-mnop-xyz"</code></li><li><code>start_time>="2024-01-01T00:00:00.000Z" AND
                  start_time<="2024-01-02T00:00:00.000Z"</code></li><li><code>end_time IS NULL</code></li></ul></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response of conferenceRecords.list method.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "conferenceRecords": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>conferenceRecords[]</code></td><td><p>List of conferences in one page.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to be circulated back for further List call if current List does NOT include all the Conferences. Unset if all conferences have been returned.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/meetings.space.created`
- `https://www.googleapis.com/auth/meetings.space.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
