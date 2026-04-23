---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry
root: workspace
fetched_at: 2026-04-23T15:30:46.870Z
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
| [`audioCsrc`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry.audiocsrc.md) | CSRC for any audio stream contributed by this participant. |
| [`audioMuted`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry.audiomuted.md) | Whether this participant muted their audio stream. |
| [`participant`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry.participant.md) | Resource name of the participant. Format: `conferenceRecords/{conferenceRecord}/participants/{participant}` |
| [~~`participantId`~~](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry.participantid.md) | *(Deprecated)* Participant ID for the media entry. |
| [`participantKey`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry.participantkey.md) | Participant key of associated participant. Format is `participants/{participant}`. |
| [`presenter`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry.presenter.md) | Whether the current entry is presentating. |
| [`screenshare`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry.screenshare.md) | Whether the current entry is a screenshare. |
| [`session`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry.session.md) | Participant session name. There should be a one to one mapping of session to Media Entry. You can use this to retrieve additional information about the participant session from the [Meet REST API - ParticipantSessions](https://developers.google.com/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions) resource |
| [`sessionName`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry.sessionname.md) | The session ID of the media entry. |
| [`videoCsrcs`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry.videocsrcs.md) | CSRCs for any video streams contributed by this participant. |
| [`videoMuted`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry.videomuted.md) | Whether this participant muted their video stream. |
