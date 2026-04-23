---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/action
root: workspace
fetched_at: 2026-04-23T15:27:28.022Z
---

# Action

## Action

Information about the action.

JSON representation

```
{
  "detail": {
    object (ActionDetail)
  },
  "actor": {
    object (Actor)
  },
  "target": {
    object (Target)
  },

  "timestamp": string,
  "timeRange": {
    object (TimeRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>detail</code></td><td><p><code>object (<code>ActionDetail</code>)</code></p><p>The type and detailed information about the action.</p></td></tr><tr><td><code>actor</code></td><td><p><code>object (<code>Actor</code>)</code></p><p>The actor responsible for this action (or empty if all actors are responsible).</p></td></tr><tr><td><code>target</code></td><td><p><code>object (<code>Target</code>)</code></p><p>The target this action affects (or empty if affecting all targets). This represents the state of the target immediately after this action occurred.</p></td></tr><tr><td colspan="2">Union field <code>time</code>. When the action occurred (or empty if same time as entire activity). <code>time</code> can be only one of the following:</td></tr><tr><td><code>timeRange</code></td><td><p><code>object (<code>TimeRange</code>)</code></p><p>The action occurred over this time range.</p></td></tr></tbody></table>
