---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions
root: workspace
fetched_at: 2026-04-23T15:30:29.994Z
---

# REST Resource: conferenceRecords.participants.participantSessions

## Resource: ParticipantSession

Refers to each unique join or leave session when a user joins a conference from a device. Note that any time a user joins the conference a new unique ID is assigned. That means if a user joins a space multiple times from the same device, they're assigned different IDs, and are also be treated as different participant sessions.

JSON representation

```
{
  "name": string,
  "startTime": string,
  "endTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Session id.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp when the user session starts.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp when the user session ends. Unset if the user session hasn’t ended.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets a participant session by participant session ID.</td></tr><tr><td><h3>list</h3></td><td>Lists the participant sessions of a participant in a conference record.</td></tr></tbody></table>
