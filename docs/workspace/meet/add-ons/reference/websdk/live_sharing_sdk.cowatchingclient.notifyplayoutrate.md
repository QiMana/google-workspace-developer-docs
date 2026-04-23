---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingclient.notifyplayoutrate
root: workspace
fetched_at: 2026-04-23T15:30:22.217Z
---

# Method signature CoWatchingClient.notifyPlayoutRate

Notify Meet that the user updated the playout rate of the media to a new value (for example, 1.25x).

## Signature

```
notifyPlayoutRate(rate: number, mediaPlayoutPosition: number): void;
```

## Details

| Optional | No |
| --- | --- |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `rate` | `number` | No | The rate at which the media is now being played. |
| `mediaPlayoutPosition` | `number` | No | The position at which the media began playout |

## Returns

`void`
