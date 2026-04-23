---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingclient.notifybuffering
root: workspace
fetched_at: 2026-04-23T15:30:22.015Z
---

# Method signature CoWatchingClient.notifyBuffering

Notify Meet that the media isn't ready to be played due to buffering, a prior media switch, seeking, or normal network congestion.

## Signature

```
notifyBuffering(mediaPlayoutPosition: number): void;
```

## Details

| Optional | No |
| --- | --- |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `mediaPlayoutPosition` | `number` | No | The timestamp at which the media is paused or waiting for buffering to complete. |

## Returns

`void`
