---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings
root: workspace
fetched_at: 2026-04-23T15:30:30.138Z
---

# REST Resource: conferenceRecords.recordings

## Resource: Recording

Metadata about a recording created during a conference.

JSON representation

```
{
  "name": string,
  "state": enum (State),
  "startTime": string,
  "endTime": string,

  "driveDestination": {
    object (DriveDestination)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. Resource name of the recording. Format: <code>conferenceRecords/{conferenceRecord}/recordings/{recording}</code> where <code>{recording}</code> is a 1:1 mapping to each unique recording session during the conference.</p></td></tr><tr><td><code>state</code></td><td><p><code>enum (<code>State</code>)</code></p><p>Output only. Current state.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp when the recording started.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp when the recording ended.</p></td></tr><tr><td colspan="2"><p>Union field <code>destination</code>.</p><p><code>destination</code> can be only one of the following:</p></td></tr><tr><td><code>driveDestination</code></td><td><p><code>object (<code>DriveDestination</code>)</code></p><p>Output only. Recording is saved to Google Drive as an MP4 file. The <code>driveDestination</code> includes the Drive <code>fileId</code> that can be used to download the file using the <code>files.get</code> method of the Drive API.</p></td></tr></tbody></table>

## DriveDestination

Export location where a recording file is saved in Google Drive.

JSON representation

```
{
  "file": string,
  "exportUri": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>file</code></td><td><p><code>string</code></p><p>Output only. The <code>fileId</code> for the underlying MP4 file. For example, "1kuceFZohVoCh6FulBHxwy6I15Ogpc4hP". Use <code>$ GET
                  https://www.googleapis.com/drive/v3/files/{$fileId}?alt=media</code> to download the blob. For more information, see <a href="https://developers.google.com/drive/api/v3/reference/files/get">https://developers.google.com/drive/api/v3/reference/files/get</a>.</p></td></tr><tr><td><code>exportUri</code></td><td><p><code>string</code></p><p>Output only. Link used to play back the recording file in the browser. For example, <code>https://drive.google.com/file/d/{$fileId}/view</code>.</p></td></tr></tbody></table>

## State

Current state of the recording session.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STATE_UNSPECIFIED</code></td><td>Default, never used.</td></tr><tr><td><code>STARTED</code></td><td>An active recording session has started.</td></tr><tr><td><code>ENDED</code></td><td>This recording session has ended, but the recording file hasn't been generated yet.</td></tr><tr><td><code>FILE_GENERATED</code></td><td>Recording file is generated and ready to download.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets a recording by recording ID.</td></tr><tr><td><h3>list</h3></td><td>Lists the recording resources from the conference record.</td></tr></tbody></table>
