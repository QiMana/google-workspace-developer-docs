---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingclient.md
root: workspace
fetched_at: 2026-04-23T15:30:21.768Z
---

# Interface CoWatchingClient

Client-constructed CoWatching experience with hooks for hosts to manage the state.

## Signature

```
interface CoWatchingClient
```

## Method signatures

| Name | Description |
| --- | --- |
| [`notifyBuffering(mediaPlayoutPosition)`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingclient.notifybuffering.md) | Notify Meet that the media isn't ready to be played due to buffering, a prior media switch, seeking, or normal network congestion. |
| [`notifyPauseState(paused, mediaPlayoutPosition)`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingclient.notifypausestate.md) | Notify Meet that the user has paused or unpaused the playback of media, so Meet can mirror that action for other users. |
| [`notifyPlayoutRate(rate, mediaPlayoutPosition)`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingclient.notifyplayoutrate.md) | Notify Meet that the user updated the playout rate of the media to a new value (for example, 1.25x). |
| [`notifyReady(mediaPlayoutPosition)`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingclient.notifyready.md) | Notify Meet that the buffering is complete and the media is now ready to play, starting at the supplied timestamp. |
| [`notifySeekToTimestamp(mediaPlayoutPosition)`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingclient.notifyseektotimestamp.md) | Notify Meet that the user has sought the playback point of the media, so Meet can mirror that action for other users. |
| [`notifySwitchedToMedia(mediaTitle, mediaId, mediaPlayoutPosition)`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingclient.notifyswitchedtomedia.md) | Notify Meet that the user has switched media so Meet can pass that along to other users. |
