---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient
root: workspace
fetched_at: 2026-04-23T15:30:16.695Z
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
| [`closeAddon()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.closeaddon.md) | Close the add-on that's running in the Meet iframe by unloading all iframes and closing the side panel if it's open. Calling this while there's an ongoing activity has no effect. |
| [`endActivity()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.endactivity.md) | Ends an ongoing activity. Will fail if: - There is not an ongoing activity. - The user is not the initiator of the activity. |
| [`getActivityStartingState()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.getactivitystartingstate.md) | Retrieves information about the initial state of the add-on when the participant accepts the invitation to activity. |
| [`getFrameOpenReason()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.getframeopenreason.md) | Retrieves the action causing the add-on frame to be opened. |
| [`getMeetingInfo()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.getmeetinginfo.md) | Retrieves information about the meeting in which the add-on is running. |
| [`on(eventId, eventHandler)`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.on.md) | Provides access to the [`AddonCallbacks`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.addoncallbacks) that the add-on can utilize. |
| [`setActivityStartingState(activityStartingState)`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.setactivitystartingstate.md) | Sets or updates information about the initial state of the add-on that's used when the participant accepts the invitation to join the activity. |
| [`startActivity(activityStartingState)`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.startactivity.md) | Starts an activity with the provided starting state of frames that the initiator and participants can use during the activity. |
