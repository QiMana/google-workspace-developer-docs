---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.codoingclient
root: workspace
fetched_at: 2026-04-23T15:30:21.459Z
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
| [`broadcastStateUpdate(newState)`](./live_sharing_sdk.codoingclient.broadcaststateupdate.md.md) | Broadcasts state to all other current participants, and is the default state for any participant until some other state is broadcast. |
