---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.md
root: workspace
fetched_at: 2026-04-23T15:30:17.702Z
---

# Interface MeetAddonClient

The client object that an add-on uses to communicate with Meet web.

## Signature

```
interface MeetAddonClient
```

## Method signatures

| Name | Description |
| --- | --- |
| [`closeAddon()`](./addon_sdk.meetaddonclient.closeaddon.md.md) | Close the add-on that's running in the Meet iframe by unloading all iframes and closing the side panel if it's open. Calling this while there's an ongoing activity has no effect. |
| [`endActivity()`](./addon_sdk.meetaddonclient.endactivity.md.md) | Ends an ongoing activity. Will fail if: - There is not an ongoing activity. - The user is not the initiator of the activity. |
| [`getActivityStartingState()`](./addon_sdk.meetaddonclient.getactivitystartingstate.md.md) | Retrieves information about the initial state of the add-on when the participant accepts the invitation to activity. |
| [`getFrameOpenReason()`](./addon_sdk.meetaddonclient.getframeopenreason.md.md) | Retrieves the action causing the add-on frame to be opened. |
| [`getMeetingInfo()`](./addon_sdk.meetaddonclient.getmeetinginfo.md.md) | Retrieves information about the meeting in which the add-on is running. |
| [`on(eventId, eventHandler)`](./addon_sdk.meetaddonclient.on.md.md) | Provides access to the [`AddonCallbacks`](./addon_sdk.addoncallbacks.md.md) that the add-on can utilize. |
| [`setActivityStartingState(activityStartingState)`](./addon_sdk.meetaddonclient.setactivitystartingstate.md.md) | Sets or updates information about the initial state of the add-on that's used when the participant accepts the invitation to join the activity. |
| [`startActivity(activityStartingState)`](./addon_sdk.meetaddonclient.startactivity.md.md) | Starts an activity with the provided starting state of frames that the initiator and participants can use during the activity. |
