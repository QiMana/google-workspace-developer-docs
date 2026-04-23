---
source: https://developers.google.com/workspace/meet/add-ons/guides/promote
root: workspace
fetched_at: 2026-04-23T15:30:12.363Z
---

# Promote an add-on to users

Developers can increase discoverability of their add-ons by promoting them through Meet's in-call chat and through Meet's screen sharing feature.

## In-call chat

Google Meet add-ons are promoted to users in Meet's in-call chat automatically when a message contains link(s) associated with an add-on. There's no action required by the developer to promote add-ons in chat. The review team determines which link(s) to associate with an add-on, based on the side panel URI and the add-on origins set within the [deployment manifest](./deploy-add-on.md#create-deployment).

When users send a message through an in-call chat that's associated with an add-on, one of two things occur:

1. If the add-on isn't installed, a card prompts the user to install the add-on.
2. If the add-on is already installed, a button reminds the user to open the add-on.

## Screen Sharing

![Promoting an add-on through screen
sharing.](https://developers.google.com/static/workspace/meet/add-ons/images/meet-add-ons-sdk-promote-add-on-to-users-through-screen-sharing.svg)

This page describes how to promote an add-on to users while screen sharing a tab with Google Meet by placing a small amount of code on another web page.

The [`exposeToMeetWhenScreensharing()`](../reference/websdk/screenshare_api.meetaddonscreenshare.exposetomeetwhenscreensharing.md.md) method allows the site to send information to Meet when its tab is screen shared. This information is used in the add-on experience with Meet when the user clicks "Start activity" on the presentation banner if they have the add-on installed. If the user doesn't have the add-on installed when they screen share a tab, they're prompted to install the add-on.

The [`AddonScreenshareInfo`](../reference/websdk/screenshare_api.addonscreenshareinfo.md.md) object contains five properties that can be added based on the use case:

- [`additionalData`](../reference/websdk/screenshare_api.addonscreenshareinfo.additionaldata.md.md): Info the add-on can use to initialize itself. Can only be set if the `startActivityOnOpen` property is true and can be accessed using the [`ActivityStartingState`](../reference/websdk/addon_sdk.activitystartingstate.md.md). For more information, see [Get the activity starting state](./collaborate-in-the-add-on.md#get-state).
- [`cloudProjectNumber`](../reference/websdk/screenshare_api.addonscreenshareinfo.cloudprojectnumber.md.md): Required. The project number of your Google Cloud project.
- [`mainStageUrl`](../reference/websdk/screenshare_api.addonscreenshareinfo.mainstageurl.md.md): The URL that the main stage opens once the add-on starts, such as `https://www.example.com`. The URL must belong to the same [origin](./overview.md#origin) as the URLs specified in the add-on manifest.
- [`sidePanelUrl`](../reference/websdk/screenshare_api.addonscreenshareinfo.sidepanelurl.md.md): The URL that the side panel opens once the add-on starts, such as `https://www.example.com`. The URL must belong to the same [origin](./overview.md#origin) as the URLs specified in the add-on manifest.
- [`startActivityOnOpen`](../reference/websdk/screenshare_api.addonscreenshareinfo.startactivityonopen.md.md): Required. Whether to start the activity add-on experience in Meet immediately when the user starts the add-on from the presentation banner. Must be true if the `mainStageUrl` property is used.

## Install and import the SDK

You can access the SDK using npm or using gstatic.

### npm (recommended)

If your project uses npm, you can follow the instructions for the [Meet add-ons SDK npm package](https://www.npmjs.com/package/@googleworkspace/meet-addons).

First, install the npm package:

```
npm install @googleworkspace/meet-addons
```

Then, the Meet add-ons SDK is available by importing the [`MeetAddonScreenshareExport`](../reference/websdk/screenshare_api.meetaddonscreenshareexport.md.md) interface:

```
import {meet} from '@googleworkspace/meet-addons/meet.addons.screenshare';
```

For TypeScript users, TypeScript definitions are packaged with the module. TypeScript users should set `moduleResolution` to `"bundler"` within the project's `tsconfig.json`, so that the [package.json "exports" spec](https://www.typescriptlang.org/docs/handbook/modules/reference.html#packagejson-exports) enables importing the [screen sharing package export](../reference/websdk/screenshare_api.meetaddonscreenshareexport.md.md).

### gstatic

The Google Meet add-ons SDK is available as a JavaScript bundle from `gstatic`, a domain that serves static content.

To use the Meet add-ons SDK, add the following script tag to your app:

```
<script src="https://www.gstatic.com/meetjs/addons/1.1.0/meet.addons.screenshare.js"></script>
```

The Meet add-ons SDK is available through the [`MeetAddon`](../reference/websdk/addon_sdk.meetaddon.md.md) interface under `window.meet.addon`.

## Example: Load in the side panel without starting an activity

In the following code sample, a user screen shares a page with an add-on that must adjust resource permissions before the activity can be started. Due to this requirement, the add-on should be started in the side panel, without the activity being started for everyone.

```
<script>
meet.addon.screensharing.exposeToMeetWhenScreensharing(
  {
    cloudProjectNumber: CLOUD_PROJECT_NUMBER,
    startActivityOnOpen: false,
    sidePanelUrl: SIDE_PANEL_URL,
  }
);
</script>
```

Replace the following:

- CLOUD\_PROJECT\_NUMBER: String. The project number of your Cloud project.
- SIDE\_PANEL\_URL: String. The URL for the side panel.

When the user in the Meet call screen shares the page, they see a presentation banner in Meet. Clicking the button on the banner opens the add-on for the given cloud project number in the side panel. Since the [`startActivityOnOpen`](../reference/websdk/screenshare_api.addonscreenshareinfo.startactivityonopen.md.md) property was set to false, the start activity button is disabled until the `ActivityStartingState` is set. For more information, see [Use the activity starting state](./collaborate-in-the-add-on.md).

Once the activity is started, other users in the call are prompted to either launch or install the add-on.

The ["Animation" sample add-on on GitHub](https://github.com/googleworkspace/meet/tree/3311b735550b8927c8b7ef2c6d06f768d9fe0476/addons-web-sdk/samples/animation-next-js) includes this example as part of a full add-on. When the [index page](https://github.com/googleworkspace/meet/blob/3311b735550b8927c8b7ef2c6d06f768d9fe0476/addons-web-sdk/samples/animation-next-js/src/app/page.tsx) of the web app associated with the add-on is presented, the presenting user is prompted to either install or set up the add-on.

## Example: Load in the main stage

In the following code sample, a user who screen shares a web page in Meet containing the following code is prompted to launch the add-on:

```
<script>
meet.addon.screensharing.exposeToMeetWhenScreensharing(
  {
    cloudProjectNumber: CLOUD_PROJECT_NUMBER,
    startActivityOnOpen: true,
    mainStageUrl: MAIN_STAGE_URL,
    additionalData: "{\"selected_item\": \"42\"}",
  }
);
</script>
```

Replace the following:

- CLOUD\_PROJECT\_NUMBER: String. The project number of your Google Cloud project.
- MAIN\_STAGE\_URL: String. The URL for the main stage.

When the user in the Meet call screen shares the page, they see a presentation banner in Meet. Clicking the button on the banner opens the add-on for the given cloud project number in the main stage. The `mainStageUrl` property is loaded, and the `additionalData` property is used to set the activity starting state of the add-on. Other users in the call are immediately prompted to install or launch the add-on.

## Example: Load in the side panel

In the following code sample, a user screen shares a page with an add-on that wants to start in the side panel rather than the main stage:

```
<script>
meet.addon.screensharing.exposeToMeetWhenScreensharing(
  {
    cloudProjectNumber: CLOUD_PROJECT_NUMBER,
    startActivityOnOpen: true,
    sidePanelUrl: SIDE_PANEL_URL,
    additionalData: "{\"selected_item\": \"42\"}",
  }
);
</script>
```

Replace the following:

- CLOUD\_PROJECT\_NUMBER: String. The project number of your Cloud project.
- SIDE\_PANEL\_URL: String. The URL for the side panel.

When the user in the Meet call screen shares the page, they see a presentation banner in Meet. Clicking the button on the banner opens the add-on for the given cloud project number in the side panel. The `sidePanelUrl` property is loaded, and the `additionalData` property is used to set the activity starting state of the add-on. Other users in the call are immediately prompted to install or launch the add-on.

## Origin matching

The [origins](./overview.md#origin) provided in the [`mainStageUrl`](../reference/websdk/screenshare_api.addonscreenshareinfo.mainstageurl.md.md) property and the [`sidePanelUrl`](../reference/websdk/screenshare_api.addonscreenshareinfo.sidepanelurl.md.md) property are compared to the origins in the add-on manifest of the provided cloud project number. If everything matches, the user is allowed to launch the add-on.

Additionally, the origin of the site initiating the screen share must be listed in the `addOnOrigins` field in the [add-on manifest](./deploy-add-on.md#create-deployment).

For more information, see [Add-on security](./add-on-security.md).

## Related topics

- [Collaborate using a Meet add-on](./collaborate-in-the-add-on.md)
- [Add-on security](./add-on-security.md)
