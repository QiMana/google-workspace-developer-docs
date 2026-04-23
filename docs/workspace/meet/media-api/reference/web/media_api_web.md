---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web
root: workspace
fetched_at: 2026-04-23T15:31:00.134Z
---

# Resource summary for TypeScript reference client

## Interfaces

| Name | Description |
| --- | --- |
| [`AnonymousUser`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.anonymoususer.md) | An anonymous user in a Meet call. |
| [`BaseParticipant`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.baseparticipant.md) | Base participant type. Only one of signedInUser, anonymousUser, or phoneUser fields will be set to determine the type of participant. |
| [`CanvasDimensions`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.canvasdimensions.md) | The dimensions of the canvas for video streams. |
| [`LogEvent`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.logevent.md) | Log event that is propagated to the callback. |
| [`MediaApiCommunicationProtocol`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaapicommunicationprotocol.md) | An abstract communication protocol. |
| [`MediaApiCommunicationResponse`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaapicommunicationresponse.md) | The response from the communication protocol. |
| [`MediaEntry`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaentry.md) | Serves as the central relational object between the participant, media canvas and meet stream. This object represents media in a Meet call and holds metadata for the media. |
| [`MediaLayout`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.medialayout.md) | A Media layout for the Media API Web client. This must be created by the Media API client to be valid. This is used to request a video stream. |
| [`MediaLayoutRequest`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.medialayoutrequest.md) | A request for a [`MediaLayout`](https://developers.google.com/meet/media-api/reference/web/media_api_web.medialayout). This is required to be able to request a video stream. |
| [`MeetMediaApiClient`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.md) | Interface for the MeetMediaApiClient. Takes a required configuration and provides a set of subscribables to the client. Takes a [`MeetMediaClientRequiredConfiguration`](https://developers.google.com/meet/media-api/reference/web/media_api_web.meetmediaclientrequiredconfiguration) as a constructor parameter. |
| [`MeetMediaClientRequiredConfiguration`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaclientrequiredconfiguration.md) | Required configuration for the [`MeetMediaApiClient`](https://developers.google.com/meet/media-api/reference/web/media_api_web.meetmediaapiclient). |
| [`MeetSessionStatus`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetsessionstatus.md) | The status of the Meet Media API session. |
| [`MeetStreamTrack`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetstreamtrack.md) | An abstraction of a track in a Meet stream. This is used to represent both audio and video tracks and their relationship to Media Entries. |
| [`Participant`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.participant.md) | An abstraction that represents a participant in a Meet call. Contains the participant object and the media entries associated with this participant. |
| [`PhoneUser`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.phoneuser.md) | A dial-in user in a Meet call. |
| [`SignedInUser`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.signedinuser.md) | A signed in user in a Meet call. |
| [`Subscribable`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.subscribable.md) | A helper class that can be used to get and subscribe to updates on a value. |

## Type aliases

| Name | Description |
| --- | --- |
| [`LogSourceType`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.logsourcetype.md) | List of log source types. |
