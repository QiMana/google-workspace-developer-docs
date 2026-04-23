---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingclient.notifyswitchedtomedia
root: workspace
fetched_at: 2026-04-23T15:30:22.744Z
---

# Method signature CoWatchingClient.notifySwitchedToMedia

Notify Meet that the user has switched media so Meet can pass that along to other users.

## Signature

```
notifySwitchedToMedia(
    mediaTitle: string,
    mediaId: string,
    mediaPlayoutPosition: number,
  ): void;
```

## Details

| Optional | No |
| --- | --- |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `mediaTitle` | `string` | No | The title of the media switched to. This title is reflected in the Meet UI when other users are considering connecting to the co-watching session. |
| `mediaId` | `string` | No | The string URI of the media switched to. |
| `mediaPlayoutPosition` | `number` | No | The position at which the media began playout. |

## Returns

`void`
