---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.sessionstatus.md
root: workspace
fetched_at: 2026-04-23T15:30:53.405Z
---

# Interface SessionStatus

## Interface SessionStatus

Session status.

## Signature

```
declare interface SessionStatus
```

## Property signatures

| Name | Description |
| --- | --- |
| [`connectionState`](./media_api.sessionstatus.connectionstate.md.md) | The connection state of the session. |
| [`disconnectReason`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.sessionstatus.disconnectreason.md) | The reason for the disconnection from the meeting. Only set if the `connectionState` is `STATE_DISCONNECTED`. |
