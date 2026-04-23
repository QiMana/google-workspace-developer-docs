---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk
root: workspace
fetched_at: 2026-04-23T15:30:13.443Z
---

# Resource summary for meet.addons.js

## Interfaces

| Name | Description |
| --- | --- |
| [`ActivityStartingState`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.activitystartingstate.md) | Starting state of the add-on when the participant accepts the invitation to start an activity. |
| [`AddonCallbacks`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.addoncallbacks.md) | All of the callbacks that add-ons can attach to. |
| [`AddonSession`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.addonsession.md) | The AddonSession interface. Used to interact with Meet. |
| [`AddonSessionOptions`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.addonsessionoptions.md) | Parameters to retrieve the add-on session. |
| [`FrameToFrameMessage`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.frametoframemessage.md) | A client-initiated message sent from one add-on frame to another. |
| [`MeetAddon`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddon.md) | The main entry point for accessing Meet add-on functionality. Available globally under `window.meet.addon`. |
| [`MeetAddonClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.md) | The client object that an add-on uses to communicate with Meet web. |
| [`MeetAddonError`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonerror.md) | The structure of an error generated from the Meet add-ons SDK. |
| [`MeetAddonExport`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonexport.md) | The structure of the top-level add-on export. |
| [`MeetingInfo`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetinginfo.md) | Information about the meeting in which the add-on is running. |
| [`MeetMainStageClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetmainstageclient.md) | The `MeetAddonClient` for the main stage component of an add-on. |
| [`MeetSidePanelClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetsidepanelclient.md) | The `MeetAddonClient` for the side panel component of an add-on. |

## Type aliases

| Name | Description |
| --- | --- |
| [`ErrorType`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.errortype.md) | Possible error types for when interacting with the Meet Web add-ons SDK throws an error. |
| [`FrameOpenReason`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.frameopenreason.md) | The different reasons why the frame was opened: |
| [`FrameType`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.frametype.md) | The different places in Meet that the iframed add-on can be running in: |

## Variables

| Name | Description |
| --- | --- |
| [`meet`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meet.md) | The main entry point for accessing Meet add-on functionality. |
