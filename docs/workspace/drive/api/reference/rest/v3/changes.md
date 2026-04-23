---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/changes
root: workspace
fetched_at: 2026-04-23T15:28:00.381Z
---

# REST Resource: changes

## Resource: Change

A change to a file or shared drive.

JSON representation

```
{
  "kind": string,
  "removed": boolean,
  "file": {
    object (File)
  },
  "fileId": string,
  "time": string,
  "driveId": string,
  "type": string,
  "teamDriveId": string,
  "teamDrive": {
    object (TeamDrive)
  },
  "changeType": string,
  "drive": {
    object (Drive)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies what kind of resource this is. Value: the fixed string <code>"drive#change"</code>.</p></td></tr><tr><td><code>removed</code></td><td><p><code>boolean</code></p><p>Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.</p></td></tr><tr><td><code>file</code></td><td><p><code>object (<code>File</code>)</code></p><p>The updated state of the file. Present if the type is file and the file has not been removed from this list of changes.</p></td></tr><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file which has changed.</p></td></tr><tr><td><code>time</code></td><td><p><code>string</code></p><p>The time of this change (RFC 3339 date-time).</p></td></tr><tr><td><code>driveId</code></td><td><p><code>string</code></p><p>The ID of the shared drive associated with this change.</p></td></tr><tr><td><code>type<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Use <code>changeType</code> instead.</p></td></tr><tr><td><code>teamDriveId<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Use <code>driveId</code> instead.</p></td></tr><tr><td><code>teamDrive<br><b>(deprecated)</b></code></td><td><p><code>object (<code>TeamDrive</code>)</code></p><p>Deprecated: Use <code>drive</code> instead.</p></td></tr><tr><td><code>changeType</code></td><td><p><code>string</code></p><p>The type of the change. Possible values are <code>file</code> and <code>drive</code>.</p></td></tr><tr><td><code>drive</code></td><td><p><code>object (<code>Drive</code>)</code></p><p>The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>getStartPageToken</h3></td><td>Gets the starting pageToken for listing future changes.</td></tr><tr><td><h3>list</h3></td><td>Lists the changes for a user or shared drive.</td></tr><tr><td><h3>watch</h3></td><td>Subscribes to changes for a user.</td></tr></tbody></table>
