---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.sessionstatus.connectionstate.md
root: workspace
fetched_at: 2026-04-23T15:30:52.884Z
---

# Property signature SessionStatus.connectionState

The connection state of the session.

- `STATE_WAITING`: Session is waiting to be admitted into the meeting. The client may never observe this state if it was admitted or rejected quickly.
- `STATE_JOINED`: Session has fully joined the meeting.
- `STATE_DISCONNECTED`: Session is not connected to the meeting.

## Signature

```
connectionState: 'STATE_WAITING' | 'STATE_JOINED' | 'STATE_DISCONNECTED';
```

## Details

| Type | `'STATE_WAITING' \| 'STATE_JOINED' \| 'STATE_DISCONNECTED'` |
| --- | --- | --- | --- |
| Optional | No |
| Readonly | No |
