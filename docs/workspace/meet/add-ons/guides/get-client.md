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

- The [`MeetMainStageClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetmainstageclient) for an add-on running in the [main stage](https://developers.google.com/workspace/meet/add-ons/guides/overview#main-stage), retrievable using `await session.createMainStageClient()`.
- The [`MeetSidePanelClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetsidepanelclient) for an add-on running in the [side panel](https://developers.google.com/workspace/meet/add-ons/guides/overview#side-panel), retrievable using `await session.createSidePanelClient()`.

It's important to retrieve the correct client object for either the main stage or side panel. If the wrong client is retrieved, the Google Meet add-ons SDK throws an exception. To check which iframe (main stage or side panel) the add-on is running in, use the [`getFrameType()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddon.getframetype) method.

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

- The [`getActivityStartingState()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.getactivitystartingstate) method that gets information about the initial state of the add-on when the participant accepts the invitation to join the activity.
- The [`getMeetingInfo()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.getmeetinginfo) method that gets details about the meeting in which the add-on is running.
- The [`setActivityStartingState()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.setactivitystartingstate) method that sets the initial state of the add-on when the participant accepts the invitation to join the activity.
- For a comprehensive list of features in both clients, see the [`MeetAddonClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient) object.

## Client-specific features

Features available only in the [`MeetMainStageClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetmainstageclient) object:

- The [`notifySidePanel()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetmainstageclient.notifysidepanel) method sends a message to the side panel. The message can be received by subscribing to the [`frameToFrameMessage` callback](https://developers.google.com/workspace/meet/add-ons/guides/frame-to-frame-messaging) in the side panel.
- The [`loadSidePanel()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetmainstageclient.loadsidepanel) method opens the side-panel iframe. The iframe source is set to the side-panel URL from the manifest file.
- The [`unloadSidePanel()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetmainstageclient.unloadsidepanel) method closes the side-panel iframe. The add-on state isn't retained within Meet when the method is called. It's up to the add-on to persist any add-on state before this method is called.

Features available only in the [`MeetSidePanelClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetsidepanelclient) object:

- The [`notifyMainStage()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetsidepanelclient.notifymainstage) method sends a message to the mainStage. The message can be received by subscribing to the [`frameToFrameMessage` callback property](https://developers.google.com/workspace/meet/add-ons/guides/frame-to-frame-messaging) in the mainstage.
