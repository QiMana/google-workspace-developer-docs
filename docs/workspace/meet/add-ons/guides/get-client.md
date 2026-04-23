---
source: https://developers.google.com/workspace/meet/add-ons/guides/get-client
root: workspace
fetched_at: 2026-04-23T15:30:12.483Z
---

# Manage client objects

This page describes how to manage client objects that an add-on needs to communicate with Google Meet.

First, the add-on needs to establish a session:

```
const session = await window.meet.addon.createAddonSession({
    cloudProjectNumber: "CLOUD_PROJECT_NUMBER",
  });
```

Replace CLOUD\_PROJECT\_NUMBER with the project number of your Google Cloud project.

From the session, two client objects can be created:

- The [`MeetMainStageClient`](../reference/websdk/addon_sdk.meetmainstageclient.md.md) for an add-on running in the [main stage](./overview.md#main-stage), retrievable using `await session.createMainStageClient()`.
- The [`MeetSidePanelClient`](../reference/websdk/addon_sdk.meetsidepanelclient.md.md) for an add-on running in the [side panel](./overview.md#side-panel), retrievable using `await session.createSidePanelClient()`.

It's important to retrieve the correct client object for either the main stage or side panel. If the wrong client is retrieved, the Google Meet add-ons SDK throws an exception. To check which iframe (main stage or side panel) the add-on is running in, use the [`getFrameType()`](../reference/websdk/addon_sdk.meetaddon.getframetype.md.md) method.

The following code sample shows how to instantiate the main stage client object:

```
const session = await window.meet.addon.createAddonSession({
    cloudProjectNumber: "CLOUD_PROJECT_NUMBER"
  });
const mainStageClient = await session.createMainStageClient();
```

Replace CLOUD\_PROJECT\_NUMBER with the project number of your Cloud project.

## Shared features

Some features are available in both the `MeetMainStageClient` and the `MeetSidePanelClient` object, whereas other features are specific to a certain client.

For example, some features that are available in both clients include:

- The [`getActivityStartingState()`](../reference/websdk/addon_sdk.meetaddonclient.getactivitystartingstate.md.md) method that gets information about the initial state of the add-on when the participant accepts the invitation to join the activity.
- The [`getMeetingInfo()`](../reference/websdk/addon_sdk.meetaddonclient.getmeetinginfo.md.md) method that gets details about the meeting in which the add-on is running.
- The [`setActivityStartingState()`](../reference/websdk/addon_sdk.meetaddonclient.setactivitystartingstate.md.md) method that sets the initial state of the add-on when the participant accepts the invitation to join the activity.
- For a comprehensive list of features in both clients, see the [`MeetAddonClient`](../reference/websdk/addon_sdk.meetaddonclient.md.md) object.

## Client-specific features

Features available only in the [`MeetMainStageClient`](../reference/websdk/addon_sdk.meetmainstageclient.md.md) object:

- The [`notifySidePanel()`](../reference/websdk/addon_sdk.meetmainstageclient.notifysidepanel.md.md) method sends a message to the side panel. The message can be received by subscribing to the [`frameToFrameMessage` callback](./frame-to-frame-messaging.md) in the side panel.
- The [`loadSidePanel()`](../reference/websdk/addon_sdk.meetmainstageclient.loadsidepanel.md.md) method opens the side-panel iframe. The iframe source is set to the side-panel URL from the manifest file.
- The [`unloadSidePanel()`](../reference/websdk/addon_sdk.meetmainstageclient.unloadsidepanel.md.md) method closes the side-panel iframe. The add-on state isn't retained within Meet when the method is called. It's up to the add-on to persist any add-on state before this method is called.

Features available only in the [`MeetSidePanelClient`](../reference/websdk/addon_sdk.meetsidepanelclient.md.md) object:

- The [`notifyMainStage()`](../reference/websdk/addon_sdk.meetsidepanelclient.notifymainstage.md.md) method sends a message to the mainStage. The message can be received by subscribing to the [`frameToFrameMessage` callback property](./frame-to-frame-messaging.md) in the mainstage.
