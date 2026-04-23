---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/DriveSyncStateChanged
root: workspace
fetched_at: 2026-04-23T15:23:24.147Z
---

# DriveSyncStateChanged

Alerts for when a user is restricted from syncing content from clients such as Drive for Desktop.

JSON representation

```
{
  "email": string,
  "syncPauseStartTime": string,
  "syncState": enum (SyncState),
  "syncStateChangeReason": enum (SyncStateChangeReason)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>email</code></td><td><p><code>string</code></p><p>Email of the user affected.</p></td></tr><tr><td><code>syncPauseStartTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Time at which sync was paused.</p></td></tr><tr><td><code>syncState</code></td><td><p><code>enum (<code>SyncState</code>)</code></p><p>The current sync state.</p></td></tr><tr><td><code>syncStateChangeReason</code></td><td><p><code>enum (<code>SyncStateChangeReason</code>)</code></p><p>The reason for the sync state change.</p></td></tr></tbody></table>
