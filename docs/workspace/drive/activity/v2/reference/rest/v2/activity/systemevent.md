---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/systemevent
root: workspace
fetched_at: 2026-04-23T15:27:37.750Z
---

# SystemEvent

## SystemEvent

Event triggered by system operations instead of end users.

JSON representation

```
{
  "type": enum (Type)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The type of the system event that may triggered activity.</p></td></tr></tbody></table>

## Type

The types of system events that may trigger activity.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>The event type is unspecified.</td></tr><tr><td><code>USER_DELETION</code></td><td>The event is a consequence of a user account being deleted.</td></tr><tr><td><code>TRASH_AUTO_PURGE</code></td><td>The event is due to the system automatically purging trash.</td></tr></tbody></table>
