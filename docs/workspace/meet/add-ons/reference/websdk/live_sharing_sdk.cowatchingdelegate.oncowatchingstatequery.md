---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.cowatchingdelegate.oncowatchingstatequery
root: workspace
fetched_at: 2026-04-23T15:30:23.429Z
---

# Method signature CoWatchingDelegate.onCoWatchingStateQuery

## Method signature CoWatchingDelegate.onCoWatchingStateQuery

Return the current state of the local media playout. This is called regularly so it should be written to be performant.

## Signature

```
onCoWatchingStateQuery(): CoWatchingQueryResponse;
```

## Details

| Optional | No |
| --- | --- |

## Returns

`CoWatchingQueryResponse`

a `CoWatchingState` describing the current state.
