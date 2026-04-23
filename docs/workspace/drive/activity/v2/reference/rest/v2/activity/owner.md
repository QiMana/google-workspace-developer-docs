---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/owner
root: workspace
fetched_at: 2026-04-23T15:27:31.657Z
---

# Owner

## Owner

Information about the owner of a Drive item.

JSON representation

```
{
  "teamDrive": {
    object (TeamDriveReference)
  },
  "domain": {
    object (Domain)
  },

  "user": {
    object (User)
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
       </b></code></td><td><p><code>object (<code>TeamDriveReference</code>)</code></p><p>This field is deprecated; please use the <code>drive</code> field instead.</p></td></tr><tr><td><code>domain</code></td><td><p><code>object (<code>Domain</code>)</code></p><p>The domain of the Drive item owner.</p></td></tr><tr><td colspan="2">Union field <code>owner</code>. The owner of the Drive item. <code>owner</code> can be only one of the following:</td></tr><tr><td><code>user</code></td><td><p><code>object (<code>User</code>)</code></p><p>The user that owns the Drive item.</p></td></tr><tr><td><code>drive</code></td><td><p><code>object (<code>DriveReference</code>)</code></p><p>The drive that owns the item.</p></td></tr></tbody></table>
