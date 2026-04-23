---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts
root: workspace
fetched_at: 2026-04-23T15:30:31.027Z
---

# REST Resource: conferenceRecords.transcripts

## Resource: Transcript

Metadata for a transcript generated from a conference. It refers to the ASR (Automatic Speech Recognition) result of user's speech during the conference.

JSON representation

```
{
  "name": string,
  "state": enum (State),
  "startTime": string,
  "endTime": string,

  "docsDestination": {
    object (DocsDestination)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. Resource name of the transcript. Format: <code>conferenceRecords/{conferenceRecord}/transcripts/{transcript}</code>, where <code>{transcript}</code> is a 1:1 mapping to each unique transcription session of the conference.</p></td></tr><tr><td><code>state</code></td><td><p><code>enum (<code>State</code>)</code></p><p>Output only. Current state.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp when the transcript started.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp when the transcript stopped.</p></td></tr><tr><td colspan="2"><p>Union field <code>destination</code>.</p><p><code>destination</code> can be only one of the following:</p></td></tr><tr><td><code>docsDestination</code></td><td><p><code>object (<code>DocsDestination</code>)</code></p><p>Output only. Where the Google Docs transcript is saved.</p></td></tr></tbody></table>

## State

Current state of the transcript session.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STATE_UNSPECIFIED</code></td><td>Default, never used.</td></tr><tr><td><code>STARTED</code></td><td>An active transcript session has started.</td></tr><tr><td><code>ENDED</code></td><td>This transcript session has ended, but the transcript file hasn't been generated yet.</td></tr><tr><td><code>FILE_GENERATED</code></td><td>Transcript file is generated and ready to download.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets a transcript by transcript ID.</td></tr><tr><td><h3>list</h3></td><td>Lists the set of transcripts from the conference record.</td></tr></tbody></table>
