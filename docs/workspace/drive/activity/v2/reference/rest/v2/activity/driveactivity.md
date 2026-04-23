---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/driveactivity
root: workspace
fetched_at: 2026-04-23T15:27:30.522Z
---

# DriveActivity

## Resource: DriveActivity

A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. Some Action groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change. Other groupings of related Actions, such as multiple Actors editing one item or moving multiple files into a new folder, are controlled by the selection of a ConsolidationStrategy in the QueryDriveActivityRequest.

JSON representation

```
{
  "primaryActionDetail": {
    object (ActionDetail)
  },
  "actors": [
    {
      object (Actor)
    }
  ],
  "actions": [
    {
      object (Action)
    }
  ],
  "targets": [
    {
      object (Target)
    }
  ],

  "timestamp": string,
  "timeRange": {
    object (TimeRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>primaryActionDetail</code></td><td><p><code>object (<code>ActionDetail</code>)</code></p><p>Key information about the primary action for this activity. This is either representative, or the most important, of all actions in the activity, according to the ConsolidationStrategy in the request.</p></td></tr><tr><td><code>actors[]</code></td><td><p><code>object (<code>Actor</code>)</code></p><p>All actor(s) responsible for the activity.</p></td></tr><tr><td><code>actions[]</code></td><td><p><code>object (<code>Action</code>)</code></p><p>Details on all actions in this activity.</p></td></tr><tr><td><code>targets[]</code></td><td><p><code>object (<code>Target</code>)</code></p><p>All Google Drive objects this activity is about (e.g. file, folder, drive). This represents the state of the target immediately after the actions occurred.</p></td></tr><tr><td colspan="2">Union field <code>time</code>. The period of time when this activity occurred. <code>time</code> can be only one of the following:</td></tr><tr><td><code>timeRange</code></td><td><p><code>object (<code>TimeRange</code>)</code></p><p>The activity occurred over this time range.</p></td></tr></tbody></table>
