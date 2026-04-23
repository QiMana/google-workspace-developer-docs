---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web
root: workspace
fetched_at: 2026-04-23T15:31:00.134Z
---

# Resource summary for TypeScript reference client

## Interfaces

| Name | Description |
| --- | --- |
| [`AnonymousUser`](./media_api_web.anonymoususer.md.md) | An anonymous user in a Meet call. |
| [`BaseParticipant`](./media_api_web.baseparticipant.md.md) | Base participant type. Only one of signedInUser, anonymousUser, or phoneUser fields will be set to determine the type of participant. |
| [`CanvasDimensions`](./media_api_web.canvasdimensions.md.md) | The dimensions of the canvas for video streams. |
| [`LogEvent`](./media_api_web.logevent.md.md) | Log event that is propagated to the callback. |
| [`MediaApiCommunicationProtocol`](./media_api_web.mediaapicommunicationprotocol.md.md) | An abstract communication protocol. |
| [`MediaApiCommunicationResponse`](./media_api_web.mediaapicommunicationresponse.md.md) | The response from the communication protocol. |
| [`MediaEntry`](./media_api_web.mediaentry.md.md) | Serves as the central relational object between the participant, media canvas and meet stream. This object represents media in a Meet call and holds metadata for the media. |
| [`MediaLayout`](./media_api_web.medialayout.md.md) | A Media layout for the Media API Web client. This must be created by the Media API client to be valid. This is used to request a video stream. |
| [`MediaLayoutRequest`](./media_api_web.medialayoutrequest.md.md) | A request for a [`MediaLayout`](./media_api_web.medialayout.md). This is required to be able to request a video stream. |
| [`MeetMediaApiClient`](./media_api_web.meetmediaapiclient.md.md) | Interface for the MeetMediaApiClient. Takes a required configuration and provides a set of subscribables to the client. Takes a [`MeetMediaClientRequiredConfiguration`](./media_api_web.meetmediaclientrequiredconfiguration.md) as a constructor parameter. |
| [`MeetMediaClientRequiredConfiguration`](./media_api_web.meetmediaclientrequiredconfiguration.md.md) | Required configuration for the [`MeetMediaApiClient`](./media_api_web.meetmediaapiclient.md). |
| [`MeetSessionStatus`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetsessionstatus.md) | The status of the Meet Media API session. |
| [`MeetStreamTrack`](./media_api_web.meetstreamtrack.md.md) | An abstraction of a track in a Meet stream. This is used to represent both audio and video tracks and their relationship to Media Entries. |
| [`Participant`](./media_api_web.participant.md.md) | An abstraction that represents a participant in a Meet call. Contains the participant object and the media entries associated with this participant. |
| [`PhoneUser`](./media_api_web.phoneuser.md.md) | A dial-in user in a Meet call. |
| [`SignedInUser`](./media_api_web.signedinuser.md.md) | A signed in user in a Meet call. |
| [`Subscribable`](./media_api_web.subscribable.md.md) | A helper class that can be used to get and subscribe to updates on a value. |

## Type aliases

| Name | Description |
| --- | --- |
| [`LogSourceType`](./media_api_web.logsourcetype.md.md) | List of log source types. |
