---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list
root: workspace
fetched_at: 2026-04-23T15:30:29.848Z
---

# Method: conferenceRecords.participants.participantSessions.list

Lists the participant sessions of a participant in a conference record. By default, ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted this API defaults to `'participantsessions/*, nextPageToken'`.

### HTTP request

`GET https://meet.googleapis.com/v2/{parent=conferenceRecords/*/participants/*}/participantSessions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. Format: <code>conferenceRecords/{conferenceRecord}/participants/{participant}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. Maximum number of participant sessions to return. The service might return fewer than this value. If unspecified, at most 100 participants are returned. The maximum value is 250; values above 250 are coerced to 250. Maximum might change in the future.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. Page token returned from previous List Call.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. User specified filtering condition in <a href="https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form">EBNF format</a>. The following are the filterable fields:</p><ul><li><code>start_time</code></li><li><code>end_time</code></li></ul><p>For example, <code>end_time IS NULL</code> returns active participant sessions in the conference record.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response of ListParticipants method.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "participantSessions": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>participantSessions[]</code></td><td><p>List of participants in one page.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to be circulated back for further List call if current List doesn't include all the participants. Unset if all participants are returned.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/meetings.space.created`
- `https://www.googleapis.com/auth/meetings.space.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
