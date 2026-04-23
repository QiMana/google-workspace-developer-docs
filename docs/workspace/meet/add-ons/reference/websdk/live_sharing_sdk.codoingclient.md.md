---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.codoingclient.md
root: workspace
fetched_at: 2026-04-23T15:30:20.778Z
---

# Interface CoDoingClient

## Interface CoDoingClient

Client-constructed CoDoing experience with hooks for hosts to notify of state updates.

## Signature

```
interface CoDoingClient
```

## Method signatures

| Name | Description |
| --- | --- |
| [`broadcastStateUpdate(newState)`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.codoingclient.broadcaststateupdate.md) | Broadcasts state to all other current participants, and is the default state for any participant until some other state is broadcast. |
