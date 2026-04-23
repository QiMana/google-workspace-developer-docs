---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetsidepanelclient
root: workspace
fetched_at: 2026-04-23T15:30:20.024Z
---

# Interface MeetSidePanelClient

The `MeetAddonClient` for the side panel component of an add-on.

## Signature

```
interface MeetSidePanelClient extends MeetAddonClient
```

## Heritage

| Extends | `MeetAddonClient` |
| --- | --- |

## Method signatures

| Name | Description |
| --- | --- |
| [`closeAddon()`](./addon_sdk.meetaddonclient.closeaddon.md.md) | Close the add-on that's running in the Meet iframe by unloading all iframes and closing the side panel if it's open. Calling this while there's an ongoing activity has no effect.   *(Inherited from [`MeetAddonClient`](./addon_sdk.meetaddonclient.md.md))* |
| [`endActivity()`](./addon_sdk.meetaddonclient.endactivity.md.md) | Ends an ongoing activity. Will fail if: - There is not an ongoing activity. - The user is not the initiator of the activity.   *(Inherited from [`MeetAddonClient`](./addon_sdk.meetaddonclient.md.md))* |
| [`getActivityStartingState()`](./addon_sdk.meetaddonclient.getactivitystartingstate.md.md) | Retrieves information about the initial state of the add-on when the participant accepts the invitation to activity.   *(Inherited from [`MeetAddonClient`](./addon_sdk.meetaddonclient.md.md))* |
| [`getFrameOpenReason()`](./addon_sdk.meetaddonclient.getframeopenreason.md.md) | Retrieves the action causing the add-on frame to be opened.   *(Inherited from [`MeetAddonClient`](./addon_sdk.meetaddonclient.md.md))* |
| [`getMeetingInfo()`](./addon_sdk.meetaddonclient.getmeetinginfo.md.md) | Retrieves information about the meeting in which the add-on is running.   *(Inherited from [`MeetAddonClient`](./addon_sdk.meetaddonclient.md.md))* |
| [`notifyMainStage(payload)`](./addon_sdk.meetsidepanelclient.notifymainstage.md.md) | Sends a message from the side panel add-on iframe to the main stage add-on iframe. The add-on running in the main stage iframe can react to this message using the [`frameToFrameMessage`](./addon_sdk.addoncallbacks.frametoframemessage.md.md) add-on callback (see [`AddonCallbacks`](./addon_sdk.addoncallbacks.md.md)). The length of this string must be less than 1,000,000 characters. |
| [`on(eventId, eventHandler)`](./addon_sdk.meetaddonclient.on.md.md) | Provides access to the [`AddonCallbacks`](./addon_sdk.addoncallbacks.md.md) that the add-on can utilize.   *(Inherited from [`MeetAddonClient`](./addon_sdk.meetaddonclient.md.md))* |
| [`setActivityStartingState(activityStartingState)`](./addon_sdk.meetaddonclient.setactivitystartingstate.md.md) | Sets or updates information about the initial state of the add-on that's used when the participant accepts the invitation to join the activity.   *(Inherited from [`MeetAddonClient`](./addon_sdk.meetaddonclient.md.md))* |
| [`startActivity(activityStartingState)`](./addon_sdk.meetaddonclient.startactivity.md.md) | Starts an activity with the provided starting state of frames that the initiator and participants can use during the activity.   *(Inherited from [`MeetAddonClient`](./addon_sdk.meetaddonclient.md.md))* |
