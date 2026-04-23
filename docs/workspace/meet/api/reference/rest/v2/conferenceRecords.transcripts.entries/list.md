---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts.entries/list
root: workspace
fetched_at: 2026-04-23T15:30:30.556Z
---

# Method: conferenceRecords.transcripts.entries.list

Lists the structured transcript entries per transcript. By default, ordered by start time and in ascending order.

Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when 1) we have interleaved speakers within milliseconds, or 2) the Google Docs transcript file is modified after generation.

### HTTP request

`GET https://meet.googleapis.com/v2/{parent=conferenceRecords/*/transcripts/*}/entries`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. Format: <code>conferenceRecords/{conferenceRecord}/transcripts/{transcript}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of entries to return. The service might return fewer than this value. If unspecified, at most 10 entries are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Page token returned from previous List Call.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response for entries.list method.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "transcriptEntries": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>transcriptEntries[]</code></td><td><p>List of TranscriptEntries in one page.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to be circulated back for further List call if current List doesn't include all the transcript entries. Unset if all entries are returned.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/meetings.space.created`
- `https://www.googleapis.com/auth/meetings.space.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
