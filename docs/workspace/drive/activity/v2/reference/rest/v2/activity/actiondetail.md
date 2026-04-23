---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/actiondetail
root: workspace
fetched_at: 2026-04-23T15:27:27.945Z
---

# ActionDetail

## ActionDetail

Data describing the type and additional information of an action.

JSON representation

```
{

  "create": {
    object (Create)
  },
  "edit": {
    object (Edit)
  },
  "move": {
    object (Move)
  },
  "rename": {
    object (Rename)
  },
  "delete": {
    object (Delete)
  },
  "restore": {
    object (Restore)
  },
  "permissionChange": {
    object (PermissionChange)
  },
  "comment": {
    object (Comment)
  },
  "dlpChange": {
    object (DataLeakPreventionChange)
  },
  "reference": {
    object (ApplicationReference)
  },
  "settingsChange": {
    object (SettingsChange)
  },
  "appliedLabelChange": {
    object (AppliedLabelChange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>action_detail</code>. Data describing the type and additional information of an action. <code>action_detail</code> can be only one of the following:</td></tr><tr><td><code>create</code></td><td><p><code>object (<code>Create</code>)</code></p><p>An object was created.</p></td></tr><tr><td><code>edit</code></td><td><p><code>object (<code>Edit</code>)</code></p><p>An object was edited.</p></td></tr><tr><td><code>move</code></td><td><p><code>object (<code>Move</code>)</code></p><p>An object was moved.</p></td></tr><tr><td><code>rename</code></td><td><p><code>object (<code>Rename</code>)</code></p><p>An object was renamed.</p></td></tr><tr><td><code>delete</code></td><td><p><code>object (<code>Delete</code>)</code></p><p>An object was deleted.</p></td></tr><tr><td><code>restore</code></td><td><p><code>object (<code>Restore</code>)</code></p><p>A deleted object was restored.</p></td></tr><tr><td><code>permissionChange</code></td><td><p><code>object (<code>PermissionChange</code>)</code></p><p>The permission on an object was changed.</p></td></tr><tr><td><code>comment</code></td><td><p><code>object (<code>Comment</code>)</code></p><p>A change about comments was made.</p></td></tr><tr><td><code>dlpChange</code></td><td><p><code>object (<code>DataLeakPreventionChange</code>)</code></p><p>A change happened in data leak prevention status.</p></td></tr><tr><td><code>reference</code></td><td><p><code>object (<code>ApplicationReference</code>)</code></p><p>An object was referenced in an application outside of Drive/Docs.</p></td></tr><tr><td><code>settingsChange</code></td><td><p><code>object (<code>SettingsChange</code>)</code></p><p>Settings were changed.</p></td></tr><tr><td><code>appliedLabelChange</code></td><td><p><code>object (<code>AppliedLabelChange</code>)</code></p><p>Label was changed.</p></td></tr></tbody></table>
