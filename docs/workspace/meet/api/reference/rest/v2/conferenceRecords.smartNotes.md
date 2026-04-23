---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.smartNotes
root: workspace
fetched_at: 2026-04-23T15:30:30.465Z
---

# REST Resource: conferenceRecords.smartNotes

## Resource: SmartNote

Metadata for a smart note generated from a conference. It refers to the notes generated from Take Notes with Gemini during the conference.

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. Identifier. Resource name of the smart notes. Format: <code>conferenceRecords/{conferenceRecord}/smartNotes/{smartNote}</code>, where <code>{smartNote}</code> is a 1:1 mapping to each unique smart notes session of the conference.</p></td></tr><tr><td><code>state</code></td><td><p><code>enum (<code>State</code>)</code></p><p>Output only. Current state.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp when the smart notes started.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp when the smart notes stopped.</p></td></tr><tr><td colspan="2">Union field <code>destination</code>. Destination of the smart notes. <code>destination</code> can be only one of the following:</td></tr><tr><td><code>docsDestination</code></td><td><p><code>object (<code>DocsDestination</code>)</code></p><p>Output only. The Google Doc destination where the smart notes are saved.</p></td></tr></tbody></table>

## State

Current state of the smart notes session.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STATE_UNSPECIFIED</code></td><td>Default, never used.</td></tr><tr><td><code>STARTED</code></td><td>An active smart notes session has started.</td></tr><tr><td><code>ENDED</code></td><td>This smart notes session has ended, but the smart notes file hasn't been generated yet.</td></tr><tr><td><code>FILE_GENERATED</code></td><td>Smart notes file is generated and ready to download.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets smart notes by smart note ID.</td></tr><tr><td><h3>list</h3></td><td>Lists the set of smart notes from the conference record.</td></tr></tbody></table>
