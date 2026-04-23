---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/actor
root: workspace
fetched_at: 2026-04-23T15:27:28.366Z
---

# Actor

## Actor

The actor of a Drive activity.

JSON representation

```
{

  "user": {
    object (User)
  },
  "anonymous": {
    object (AnonymousUser)
  },
  "impersonation": {
    object (Impersonation)
  },
  "system": {
    object (SystemEvent)
  },
  "administrator": {
    object (Administrator)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>type</code>. The type of actor. <code>type</code> can be only one of the following:</td></tr><tr><td><code>user</code></td><td><p><code>object (<code>User</code>)</code></p><p>An end user.</p></td></tr><tr><td><code>anonymous</code></td><td><p><code>object (<code>AnonymousUser</code>)</code></p><p>An anonymous user.</p></td></tr><tr><td><code>impersonation</code></td><td><p><code>object (<code>Impersonation</code>)</code></p><p>An account acting on behalf of another.</p></td></tr><tr><td><code>system</code></td><td><p><code>object (<code>SystemEvent</code>)</code></p><p>A non-user actor (i.e. system triggered).</p></td></tr><tr><td><code>administrator</code></td><td><p><code>object (<code>Administrator</code>)</code></p><p>An administrator.</p></td></tr></tbody></table>
