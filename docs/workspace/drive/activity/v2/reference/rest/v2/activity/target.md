---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/target
root: workspace
fetched_at: 2026-04-23T15:27:32.655Z
---

# Target

## Target

Information about the target of activity.

For more information on how activity history is shared with users, see [Activity history visibility](../../../../../v2.md#activityhistory).

JSON representation

```
{
  "teamDrive": {
    object (TeamDrive)
  },

  "driveItem": {
    object (DriveItem)
  },
  "drive": {
    object (Drive)
  },
  "fileComment": {
    object (FileComment)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>teamDrive
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>TeamDrive</code>)</code></p><p>This field is deprecated; please use the <code>drive</code> field instead.</p></td></tr><tr><td colspan="2">Union field <code>object</code>. The type of target object. <code>object</code> can be only one of the following:</td></tr><tr><td><code>driveItem</code></td><td><p><code>object (<code>DriveItem</code>)</code></p><p>The target is a Drive item.</p></td></tr><tr><td><code>drive</code></td><td><p><code>object (<code>Drive</code>)</code></p><p>The target is a shared drive.</p></td></tr><tr><td><code>fileComment</code></td><td><p><code>object (<code>FileComment</code>)</code></p><p>The target is a comment on a Drive file.</p></td></tr></tbody></table>
