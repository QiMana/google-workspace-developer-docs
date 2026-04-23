---
source: https://developers.google.com/workspace/meet/add-ons/guides/use-add-on
root: workspace
fetched_at: 2026-04-23T15:30:13.146Z
---

# Use a Meet add-on

This guide provides an overview of how people start and work with a Google Meet add-on.

## Start an add-on from the Activities panel

From a Google Meet call, a user can click the Activities button. This brings up the Activities panel, which shows a list of built-in Meet features and any add-ons the user has installed. Clicking on an icon launches the side panel view of the add-on.

![The Google Meet add-ons SDK main stage and side panel.](https://developers.google.com/static/workspace/meet/add-ons/images/meet-add-ons-sdk-framework-definition2.svg)

Figure 1. The Google Meet add-ons SDK main stage and side panel.

## Collaborate with other users

To allow users to collaborate together, the add-on can set the [`ActivityStartingState`](../reference/websdk/addon_sdk.activitystartingstate.md.md). For more information, see [Collaborate using a Meet add-on](./collaborate-in-the-add-on.md).

After opening an add-on, side panel users can start working together once the add-on invokes the [`startActivity()`](../reference/websdk/addon_sdk.meetaddonclient.startactivity.md.md) method.

For example, an add-on might want to allow users to collaborate on a document, but the add-on doesn't know which document. In this case, the document should be selected from the side panel view. After ensuring the document can be shared with others, the add-on can set `ActivityStartingState` with other necessary document identifiers.

## Collaborate in the main stage

Collaborative activities can be done in the side panel or the main stage. If a `mainStageUrl` is listed in the add-on manifest, invoking the [`startActivity()`](../reference/websdk/addon_sdk.meetaddonclient.startactivity.md.md) method automatically opens the add-on in the main stage and starts the activity.

Once the main stage is open, an add-on might choose to close the side panel by calling the [`unloadSidePanel()`](../reference/websdk/addon_sdk.meetmainstageclient.unloadsidepanel.md.md) method. To extend the earlier example, a side panel that chooses a document may no longer be relevant and can be closed.

To re-open the side panel view, the add-on can call the [`loadSidePanel()`](../reference/websdk/addon_sdk.meetmainstageclient.loadsidepanel.md.md) method. For example, an add-on that creates user polls might reopen the side panel to display question response rates.

## Start an add-on from screen sharing

Users can start add-ons while screen sharing. If a user is screen sharing a website that has an add-on, that website can promote its add-on to the user by using the [`exposeToMeetWhenScreensharing()`](../reference/websdk/screenshare_api.meetaddonscreenshare.exposetomeetwhenscreensharing.md.md) method. This shows the user a notification banner in the Meet call, prompting the user to either install or start the add-on. For more information, see [Promote an add-on to users through screen sharing](./promote.md#screen_sharing).

Since additional information can be supplied to the add-on starting state from the website the user is screen sharing, the add-on can skip the side panel and start the activity in the main stage immediately after launching. If the add-on needs to perform additional steps, like changing permissions on a document to share, the add-on can launch into the side panel and follow the flow described in [Collaborate with other users](#collaborate-with-other-users).

## Related topics

- [Collaborate using a Meet add-on](./collaborate-in-the-add-on.md)
- [Promote an add-on to users through screen sharing](./promote.md)
