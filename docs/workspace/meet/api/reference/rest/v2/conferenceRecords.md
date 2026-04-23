---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords
root: workspace
fetched_at: 2026-04-23T15:30:29.646Z
---

# REST Resource: conferenceRecords

## Resource: ConferenceRecord

Single instance of a meeting held in a space.

JSON representation

```
{
  "name": string,
  "startTime": string,
  "endTime": string,
  "expireTime": string,
  "space": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the conference record. Format: <code>conferenceRecords/{conferenceRecord}</code> where <code>{conferenceRecord}</code> is a unique ID for each instance of a call within a space.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp when the conference started. Always set.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp when the conference ended. Set for past conferences. Unset if the conference is ongoing.</p></td></tr><tr><td><code>expireTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Server enforced expiration time for when this conference record resource is deleted. The resource is deleted 30 days after the conference ends.</p></td></tr><tr><td><code>space</code></td><td><p><code>string</code></p><p>Output only. The space where the conference was held.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets a conference record by conference ID.</td></tr><tr><td><h3>list</h3></td><td>Lists the conference records.</td></tr></tbody></table>
