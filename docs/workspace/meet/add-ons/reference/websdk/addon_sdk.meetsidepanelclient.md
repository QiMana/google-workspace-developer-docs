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
| [`closeAddon()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.closeaddon.md) | Close the add-on that's running in the Meet iframe by unloading all iframes and closing the side panel if it's open. Calling this while there's an ongoing activity has no effect.   *(Inherited from [`MeetAddonClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.md))* |
| [`endActivity()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.endactivity.md) | Ends an ongoing activity. Will fail if: - There is not an ongoing activity. - The user is not the initiator of the activity.   *(Inherited from [`MeetAddonClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.md))* |
| [`getActivityStartingState()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.getactivitystartingstate.md) | Retrieves information about the initial state of the add-on when the participant accepts the invitation to activity.   *(Inherited from [`MeetAddonClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.md))* |
| [`getFrameOpenReason()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.getframeopenreason.md) | Retrieves the action causing the add-on frame to be opened.   *(Inherited from [`MeetAddonClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.md))* |
| [`getMeetingInfo()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.getmeetinginfo.md) | Retrieves information about the meeting in which the add-on is running.   *(Inherited from [`MeetAddonClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.md))* |
| [`notifyMainStage(payload)`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetsidepanelclient.notifymainstage.md) | Sends a message from the side panel add-on iframe to the main stage add-on iframe. The add-on running in the main stage iframe can react to this message using the [`frameToFrameMessage`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.addoncallbacks.frametoframemessage) add-on callback (see [`AddonCallbacks`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.addoncallbacks)). The length of this string must be less than 1,000,000 characters. |
| [`on(eventId, eventHandler)`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.on.md) | Provides access to the [`AddonCallbacks`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.addoncallbacks) that the add-on can utilize.   *(Inherited from [`MeetAddonClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.md))* |
| [`setActivityStartingState(activityStartingState)`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.setactivitystartingstate.md) | Sets or updates information about the initial state of the add-on that's used when the participant accepts the invitation to join the activity.   *(Inherited from [`MeetAddonClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.md))* |
| [`startActivity(activityStartingState)`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.startactivity.md) | Starts an activity with the provided starting state of frames that the initiator and participants can use during the activity.   *(Inherited from [`MeetAddonClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.md))* |
