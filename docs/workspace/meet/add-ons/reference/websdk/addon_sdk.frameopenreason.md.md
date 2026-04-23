---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.frameopenreason.md
root: workspace
fetched_at: 2026-04-23T15:30:15.255Z
---

# Type alias FrameOpenReason

The different reasons why the frame was opened:

- `OPEN_ADDON`: The frame was opened because the add-on was selected in the activities panel.
- `START_ACTIVITY`: The frame was opened because the local user started an activity.
- `JOIN_ACTIVITY`: The frame was opened because the user joined an activity started by another user.

## Signature

```
type FrameOpenReason =
  | 'UNKNOWN'
  | 'OPEN_ADDON'
  | 'START_ACTIVITY'
  | 'JOIN_ACTIVITY';
```
