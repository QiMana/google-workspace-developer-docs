---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.codoingclient.broadcaststateupdate
root: workspace
fetched_at: 2026-04-23T15:30:20.716Z
---

# Method signature CoDoingClient.broadcastStateUpdate

Broadcasts state to all other current participants, and is the default state for any participant until some other state is broadcast.

**Note:** This shared state is eventually consistent across participants. For predictable behavior, this binary state should be complete, not partial, as the Meet add-ons SDK doesn't provide guarantees around the delivery of individual messages -- only eventual consistency.

**Note:** In a race condition where two participants call this method simultaneously, the Meet add-ons SDK selects a canonical winning update. The losing update might or might not be applied to participants, but the winning update is always applied later.

## Signature

```
broadcastStateUpdate(newState: CoDoingState): void;
```

## Details

| Optional | No |
| --- | --- |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `newState` | `CoDoingState` | No |  |

## Returns

`void`
