---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/get
root: workspace
fetched_at: 2026-04-23T15:30:29.920Z
---

# Method: conferenceRecords.participants.participantSessions.get

Gets a participant session by participant session ID.

### HTTP request

`GET https://meet.googleapis.com/v2/{name=conferenceRecords/*/participants/*/participantSessions/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the participant.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/meetings.space.created`
- `https://www.googleapis.com/auth/meetings.space.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
