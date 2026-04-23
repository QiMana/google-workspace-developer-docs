---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts.entries/get
root: workspace
fetched_at: 2026-04-23T15:30:30.930Z
---

# Method: conferenceRecords.transcripts.entries.get

Gets a `TranscriptEntry` resource by entry ID.

Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when 1) we have interleaved speakers within milliseconds, or 2) the Google Docs transcript file is modified after generation.

### HTTP request

`GET https://meet.googleapis.com/v2/{name=conferenceRecords/*/transcripts/*/entries/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the <code>TranscriptEntry</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/meetings.space.created`
- `https://www.googleapis.com/auth/meetings.space.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
