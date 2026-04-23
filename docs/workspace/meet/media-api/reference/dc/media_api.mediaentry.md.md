---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry.md
root: workspace
fetched_at: 2026-04-23T15:30:47.419Z
---

# Interface MediaEntry

Media Entry interface.

## Signature

```
declare interface MediaEntry
```

## Property signatures

| Name | Description |
| --- | --- |
| [`audioCsrc`](./media_api.mediaentry.audiocsrc.md.md) | CSRC for any audio stream contributed by this participant. |
| [`audioMuted`](./media_api.mediaentry.audiomuted.md.md) | Whether this participant muted their audio stream. |
| [`participant`](./media_api.mediaentry.participant.md.md) | Resource name of the participant. Format: `conferenceRecords/{conferenceRecord}/participants/{participant}` |
| [~~`participantId`~~](./media_api.mediaentry.participantid.md.md) | *(Deprecated)* Participant ID for the media entry. |
| [`participantKey`](./media_api.mediaentry.participantkey.md.md) | Participant key of associated participant. Format is `participants/{participant}`. |
| [`presenter`](./media_api.mediaentry.presenter.md.md) | Whether the current entry is presentating. |
| [`screenshare`](./media_api.mediaentry.screenshare.md.md) | Whether the current entry is a screenshare. |
| [`session`](./media_api.mediaentry.session.md.md) | Participant session name. There should be a one to one mapping of session to Media Entry. You can use this to retrieve additional information about the participant session from the [Meet REST API - ParticipantSessions](../../../api/reference/rest/v2/conferenceRecords.participants.participantSessions.md) resource |
| [`sessionName`](./media_api.mediaentry.sessionname.md.md) | The session ID of the media entry. |
| [`videoCsrcs`](./media_api.mediaentry.videocsrcs.md.md) | CSRCs for any video streams contributed by this participant. |
| [`videoMuted`](./media_api.mediaentry.videomuted.md.md) | Whether this participant muted their video stream. |
