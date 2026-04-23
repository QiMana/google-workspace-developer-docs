---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaentry.md
root: workspace
fetched_at: 2026-04-23T15:31:04.046Z
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
| [`audioMeetStreamTrack`](./media_api_web.mediaentry.audiomeetstreamtrack.md.md) | The audio meet stream track associated with this media entry. Contains the webrtc media stream track. |
| [`audioMuted`](./media_api_web.mediaentry.audiomuted.md.md) | Whether this participant muted their audio stream. |
| [`isPresenter`](./media_api_web.mediaentry.ispresenter.md.md) | Whether the current entry is a presenter self-view. |
| [`mediaLayout`](./media_api_web.mediaentry.medialayout.md.md) | The media layout associated with this media entry. |
| [`participant`](./media_api_web.mediaentry.participant.md.md) | Participant abstraction associated with this media entry. participant is immutable. |
| [`screenShare`](./media_api_web.mediaentry.screenshare.md.md) | Whether the current entry is a screenshare. |
| [`session`](./media_api_web.mediaentry.session.md.md) | Participant session name. There should be a one to one mapping of session to Media Entry. You can use this to retrieve additional information about the participant session from the [Meet REST API - ParticipantSessions](../../../api/reference/rest/v2/conferenceRecords.participants.participantSessions.md) resource |
| [`sessionName`](./media_api_web.mediaentry.sessionname.md.md) | The session ID of the media entry. |
| [`videoMeetStreamTrack`](./media_api_web.mediaentry.videomeetstreamtrack.md.md) | The video meet stream track associated with this media entry. Contains the webrtc media stream track. |
| [`videoMuted`](./media_api_web.mediaentry.videomuted.md.md) | Whether this participant muted their video stream. |
