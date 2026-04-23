---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/targetreference
root: workspace
fetched_at: 2026-04-23T15:27:32.581Z
---

# TargetReference

## TargetReference

A lightweight reference to the target of activity.

JSON representation

```
{
  "teamDrive": {
    object (TeamDriveReference)
  },

  "driveItem": {
    object (DriveItemReference)
  },
  "drive": {
    object (DriveReference)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>teamDrive
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>TeamDriveReference</code>)</code></p><p>This field is deprecated; please use the <code>drive</code> field instead.</p></td></tr><tr><td colspan="2">Union field <code>object</code>. The type of target object. <code>object</code> can be only one of the following:</td></tr><tr><td><code>driveItem</code></td><td><p><code>object (<code>DriveItemReference</code>)</code></p><p>The target is a Drive item.</p></td></tr><tr><td><code>drive</code></td><td><p><code>object (<code>DriveReference</code>)</code></p><p>The target is a shared drive.</p></td></tr></tbody></table>
