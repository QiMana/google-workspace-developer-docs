---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingclient.notifyseektotimestamp.md
root: workspace
fetched_at: 2026-04-23T15:30:23.166Z
---

# Method signature CoWatchingClient.notifySeekToTimestamp

## Method signature CoWatchingClient.notifySeekToTimestamp

Notify Meet that the user has sought the playback point of the media, so Meet can mirror that action for other users.

## Signature

```
notifySeekToTimestamp(mediaPlayoutPosition: number): void;
```

## Details

| Optional | No |
| --- | --- |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `mediaPlayoutPosition` | `number` | No | The timestamp that the user sought. |

## Returns

`void`
