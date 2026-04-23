---
source: https://developers.google.com/workspace/meet/add-ons/guides/use-CoWatchingAPI
root: workspace
fetched_at: 2026-04-23T15:30:11.951Z
---

# Implement the Co-Watching API

The Co-Watching API manages the meeting experience of multiple participants watching or listening to content in your app.

This guide explains how to implement the Co-Watching API.

## Get started

To use the Co-Watching API, you first must [Deploy a Meet add-on](./deploy-add-on.md). Once you've completed those steps, you can start using the Co-Watching API from within your new add-on.

To use the Co-Watching API, start by getting an [`AddonSession`](../reference/websdk/addon_sdk.addonsession.md.md) object, which serves as the entry point for Google Meet co-activities:

### TypeScript

```
const session = await window.meet.addon.createAddonSession({
    cloudProjectNumber: "CLOUD_PROJECT_NUMBER",
});
```

Replace CLOUD\_PROJECT\_NUMBER with the project number of your Google Cloud project.

## Create a co-watching client

To get started, create a [`CoWatchingClient`](../reference/websdk/live_sharing_sdk.cowatchingclient.md.md) object from your `AddonSession`.

To create a `CoWatchingCient`, call the [`createCoWatchingClient()`](../reference/websdk/addon_sdk.addonsession.createcowatchingclient.md.md) method and provide a [`CoWatchingDelegate`](../reference/websdk/live_sharing_sdk.cowatchingdelegate.md.md) object.

The `CoWatchingDelegate` is how the Co-Watching API updates your app whenever it has a new state available. It's expected that, when the [`onCoWatchingStateChanged()`](../reference/websdk/live_sharing_sdk.cowatchingdelegate.oncowatchingstatechanged.md.md) method is called, your app immediately applies the new state.

The following code sample shows how to use the Co-Watching API:

### TypeScript

```
const coWatchingClient = await addonSession.createCoWatchingClient({
   activityTitle: "ACTIVITY_TITLE",
   onCoWatchingStateQuery() {
     // This function should return the current state of your CoWatching activity
     return getMyApplicationCoWatchingState();
   },
   onCoWatchingStateChanged(coWatchingState: CoWatchingState) {
     // This function should apply newState to your ongoing CoWatching activity
   },
 });
```

Replace ACTIVITY\_TITLE with your activity's media title.

## Manage current state

When users take action in your application, it's expected that your application immediately calls the provided API methods.

You should only call these methods in response to significant events. For example, you don't need to call them every time your app advances a playing video. The `CoWatchingDelegate` you create handles getting updated playout positions in these circumstances.

You can control the co-watching state using these methods:

- [`notifyBuffering()`](../reference/websdk/live_sharing_sdk.cowatchingclient.notifybuffering.md.md): Call when a user's app starts buffering due to buffering from a prior media switch, media seek, or network congestion.
- [`notifyPauseState()`](../reference/websdk/live_sharing_sdk.cowatchingclient.notifypausestate.md.md): Call when a user pauses or unpauses the playing media.
- [`notifyPlayoutRate()`](../reference/websdk/live_sharing_sdk.cowatchingclient.notifyplayoutrate.md.md): Call when a user updates the playback speed to a new value (for example, 1.25x).
- [`notifyReady()`](../reference/websdk/live_sharing_sdk.cowatchingclient.notifyready.md.md): Call when buffering completes and the media is now ready to be played.
- [`notifySeekToTimestamp()`](../reference/websdk/live_sharing_sdk.cowatchingclient.notifyseektotimestamp.md.md): Call when a user explicitly changes the play out position.
- [`notifySwitchToMedia()`](../reference/websdk/live_sharing_sdk.cowatchingclient.notifyswitchedtomedia.md.md): Call whenever the actively playing media changes. For example, the user selects a new video, or autoplay starts the next video.
