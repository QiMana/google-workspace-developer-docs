---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaentry
root: workspace
fetched_at: 2026-04-23T15:31:03.801Z
---

# Interface MediaEntry

Serves as the central relational object between the participant, media canvas and meet stream. This object represents media in a Meet call and holds metadata for the media.

## Signature

```
interface MediaEntry
```

## Property signatures

| Name | Description |
| --- | --- |
| [`audioMeetStreamTrack`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaentry.audiomeetstreamtrack.md) | The audio meet stream track associated with this media entry. Contains the webrtc media stream track. |
| [`audioMuted`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaentry.audiomuted.md) | Whether this participant muted their audio stream. |
| [`isPresenter`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaentry.ispresenter.md) | Whether the current entry is a presenter self-view. |
| [`mediaLayout`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaentry.medialayout.md) | The media layout associated with this media entry. |
| [`participant`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaentry.participant.md) | Participant abstraction associated with this media entry. participant is immutable. |
| [`screenShare`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaentry.screenshare.md) | Whether the current entry is a screenshare. |
| [`session`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaentry.session.md) | Participant session name. There should be a one to one mapping of session to Media Entry. You can use this to retrieve additional information about the participant session from the [Meet REST API - ParticipantSessions](https://developers.google.com/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions) resource |
| [`sessionName`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaentry.sessionname.md) | The session ID of the media entry. |
| [`videoMeetStreamTrack`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaentry.videomeetstreamtrack.md) | The video meet stream track associated with this media entry. Contains the webrtc media stream track. |
| [`videoMuted`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaentry.videomuted.md) | Whether this participant muted their video stream. |
