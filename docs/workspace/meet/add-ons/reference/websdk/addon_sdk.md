---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk
root: workspace
fetched_at: 2026-04-23T15:30:13.443Z
---

# Resource summary for meet.addons.js

## Interfaces

| Name | Description |
| --- | --- |
| [`ActivityStartingState`](./addon_sdk.activitystartingstate.md.md) | Starting state of the add-on when the participant accepts the invitation to start an activity. |
| [`AddonCallbacks`](./addon_sdk.addoncallbacks.md.md) | All of the callbacks that add-ons can attach to. |
| [`AddonSession`](./addon_sdk.addonsession.md.md) | The AddonSession interface. Used to interact with Meet. |
| [`AddonSessionOptions`](./addon_sdk.addonsessionoptions.md.md) | Parameters to retrieve the add-on session. |
| [`FrameToFrameMessage`](./addon_sdk.frametoframemessage.md.md) | A client-initiated message sent from one add-on frame to another. |
| [`MeetAddon`](./addon_sdk.meetaddon.md.md) | The main entry point for accessing Meet add-on functionality. Available globally under `window.meet.addon`. |
| [`MeetAddonClient`](./addon_sdk.meetaddonclient.md.md) | The client object that an add-on uses to communicate with Meet web. |
| [`MeetAddonError`](./addon_sdk.meetaddonerror.md.md) | The structure of an error generated from the Meet add-ons SDK. |
| [`MeetAddonExport`](./addon_sdk.meetaddonexport.md.md) | The structure of the top-level add-on export. |
| [`MeetingInfo`](./addon_sdk.meetinginfo.md.md) | Information about the meeting in which the add-on is running. |
| [`MeetMainStageClient`](./addon_sdk.meetmainstageclient.md.md) | The `MeetAddonClient` for the main stage component of an add-on. |
| [`MeetSidePanelClient`](./addon_sdk.meetsidepanelclient.md.md) | The `MeetAddonClient` for the side panel component of an add-on. |

## Type aliases

| Name | Description |
| --- | --- |
| [`ErrorType`](./addon_sdk.errortype.md.md) | Possible error types for when interacting with the Meet Web add-ons SDK throws an error. |
| [`FrameOpenReason`](./addon_sdk.frameopenreason.md.md) | The different reasons why the frame was opened: |
| [`FrameType`](./addon_sdk.frametype.md.md) | The different places in Meet that the iframed add-on can be running in: |

## Variables

| Name | Description |
| --- | --- |
| [`meet`](./addon_sdk.meet.md.md) | The main entry point for accessing Meet add-on functionality. |
