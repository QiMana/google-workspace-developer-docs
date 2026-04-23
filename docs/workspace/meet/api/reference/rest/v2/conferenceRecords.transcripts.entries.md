---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts.entries
root: workspace
fetched_at: 2026-04-23T15:30:30.676Z
---

# REST Resource: conferenceRecords.transcripts.entries

## Resource: TranscriptEntry

Single entry for one user’s speech during a transcript session.

JSON representation

```
{
  "name": string,
  "participant": string,
  "text": string,
  "languageCode": string,
  "startTime": string,
  "endTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. Resource name of the entry. Format: "conferenceRecords/{conferenceRecord}/transcripts/{transcript}/entries/{entry}"</p></td></tr><tr><td><code>participant</code></td><td><p><code>string</code></p><p>Output only. Refers to the participant who speaks.</p></td></tr><tr><td><code>text</code></td><td><p><code>string</code></p><p>Output only. The transcribed text of the participant's voice, at maximum 10K words. Note that the limit is subject to change.</p></td></tr><tr><td><code>languageCode</code></td><td><p><code>string</code></p><p>Output only. Language of spoken text, such as "en-US". IETF BCP 47 syntax (<a href="https://tools.ietf.org/html/bcp47">https://tools.ietf.org/html/bcp47</a>)</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp when the transcript entry started.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp when the transcript entry ended.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets a <code>TranscriptEntry</code> resource by entry ID.</td></tr><tr><td><h3>list</h3></td><td>Lists the structured transcript entries per transcript.</td></tr></tbody></table>
