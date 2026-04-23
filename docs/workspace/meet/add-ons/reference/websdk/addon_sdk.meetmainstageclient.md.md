---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetmainstageclient.md
root: workspace
fetched_at: 2026-04-23T15:30:20.165Z
---

# Interface MeetMainStageClient

The `MeetAddonClient` for the main stage component of an add-on.

## Signature

```
interface MeetMainStageClient extends MeetAddonClient
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
| [`loadSidePanel()`](./addon_sdk.meetmainstageclient.loadsidepanel.md.md) | Opens the side panel iframe with the iframe source set to the side panel URL from the [add-on manifest](../../guides/deploy-add-on.md#manifest). |
| [`notifySidePanel(payload)`](./addon_sdk.meetmainstageclient.notifysidepanel.md.md) | Sends a message from the main stage add-on iframe to the side panel add-on iframe. The add-on running in the side panel iframe can react to this message using the [`frameToFrameMessage`](./addon_sdk.addoncallbacks.frametoframemessage.md.md) add-on callback. The length of this string must be less than 1,000,000 characters. |
| [`on(eventId, eventHandler)`](./addon_sdk.meetaddonclient.on.md.md) | Provides access to the [`AddonCallbacks`](./addon_sdk.addoncallbacks.md.md) that the add-on can utilize.   *(Inherited from [`MeetAddonClient`](./addon_sdk.meetaddonclient.md.md))* |
| [`setActivityStartingState(activityStartingState)`](./addon_sdk.meetaddonclient.setactivitystartingstate.md.md) | Sets or updates information about the initial state of the add-on that's used when the participant accepts the invitation to join the activity.   *(Inherited from [`MeetAddonClient`](./addon_sdk.meetaddonclient.md.md))* |
| [`startActivity(activityStartingState)`](./addon_sdk.meetaddonclient.startactivity.md.md) | Starts an activity with the provided starting state of frames that the initiator and participants can use during the activity.   *(Inherited from [`MeetAddonClient`](./addon_sdk.meetaddonclient.md.md))* |
| [`unloadSidePanel()`](./addon_sdk.meetmainstageclient.unloadsidepanel.md.md) | Closes the side panel iframe. Note that side panel add-on state isn't retained within Meet when the method is called. If the side panel iframe is opened again, for instance using a call to [`loadSidePanel`](./addon_sdk.meetmainstageclient.loadsidepanel.md.md), the side panel iframe source URL is set to its original value from the [add-on manifest](../../guides/deploy-add-on.md#manifest). It's up to the add-on to persist any add-on state in the add-on backend before this method is called. |
