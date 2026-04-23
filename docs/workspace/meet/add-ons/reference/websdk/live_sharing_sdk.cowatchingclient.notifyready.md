---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingclient.notifyready
root: workspace
fetched_at: 2026-04-23T15:30:22.522Z
---

# Method signature CoWatchingClient.notifyReady

Notify Meet that the buffering is complete and the media is now ready to play, starting at the supplied timestamp.

## Signature

```
notifyReady(mediaPlayoutPosition: number): void;
```

## Details

| Optional | No |
| --- | --- |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `mediaPlayoutPosition` | `number` | No | The timestamp at which the media is buffered and is now ready to play. |

## Returns

`void`
