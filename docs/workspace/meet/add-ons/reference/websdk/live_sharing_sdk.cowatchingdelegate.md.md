---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingdelegate.md
root: workspace
fetched_at: 2026-04-23T15:30:22.943Z
---

# Interface CoWatchingDelegate

Host-provided set of callbacks required to operate a CoWatching experience.

## Signature

```
interface CoWatchingDelegate extends CoActivityDelegate
```

## Heritage

| Extends | `CoActivityDelegate` |
| --- | --- |

## Property signatures

| Name | Description |
| --- | --- |
| [`activityTitle`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.coactivitydelegate.activitytitle.md) | User-suitable string describing the CoActivity.   *(Inherited from [`CoActivityDelegate`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.coactivitydelegate.md))* |

## Method signatures

| Name | Description |
| --- | --- |
| [`onCoWatchingStateChanged(newState)`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingdelegate.oncowatchingstatechanged.md) | Apply the supplied state to media playout, up to and including switching to a new media stream if the mediaId changes. |
| [`onCoWatchingStateQuery()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingdelegate.oncowatchingstatequery.md) | Return the current state of the local media playout. This is called regularly so it should be written to be performant. |
