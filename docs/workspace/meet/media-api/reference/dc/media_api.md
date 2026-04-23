---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api
root: workspace
fetched_at: 2026-04-23T15:30:39.681Z
---

# Resource summary for Meet Media API data channels

## Interfaces

| Name | Description |
| --- | --- |
| [`AnonymousUser`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.anonymoususer.md) | Anonymous user type, requires display name to be set. |
| [`BaseParticipant`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.baseparticipant.md) | Singleton resource containing participant information. There will be exactly one of signedInUser, anonymousUser, or phoneUser fields set to determine the type of participant. |
| [`CanvasAssignment`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.canvasassignment.md) | Video assignment for a single canvas. |
| [`CanvasDimensions`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.canvasdimensions.md) | Dimensions of a canvas. |
| [`DeletedMediaEntry`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.deletedmediaentry.md) | Deleted resource for a media entry. |
| [`DeletedParticipant`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.deletedparticipant.md) | Deleted resource for a participant. |
| [`DeletedResource`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.deletedresource.md) | Base interface for all deleted resources. |
| [`LayoutModel`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.layoutmodel.md) | Layout model for the video assignment. |
| [`LeaveRequest`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.leaverequest.md) | Tells the server the client is about to disconnect. After receiving the response, the client should not expect to receive any other messages or media RTP. |
| [`LeaveResponse`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.leaveresponse.md) | Response to a leave request from the server. |
| [`MediaApiCanvas`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaapicanvas.md) | Video canvas for video assignment. |
| [`MediaApiRequest`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaapirequest.md) | Base interface for all requests. |
| [`MediaApiResponse`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaapiresponse.md) | Base interface for all responses. |
| [`MediaApiResponseStatus`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaapiresponsestatus.md) | Base status for a response. |
| [`MediaEntriesChannelToClient`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentrieschanneltoclient.md) | Media entries data channel message from the server to the client. |
| [`MediaEntry`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry.md) | Media Entry interface. |
| [`MediaEntryResource`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentryresource.md) | Resource snapshot for a media entry. |
| [`MediaStatsChannelFromClient`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediastatschannelfromclient.md) | Media stats data channel message from the client to the server. |
| [`MediaStatsChannelToClient`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediastatschanneltoclient.md) | Media stats data channel message from the server to the client. |
| [`MediaStatsConfiguration`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediastatsconfiguration.md) | Configuration for media stats. Provided by the server and has to be used by the client to upload media stats. |
| [`MediaStatsResource`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediastatsresource.md) | Resource snapshot for media stats. Managed by the server. |
| [`ParticipantResource`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.participantresource.md) | Base participant resource type |
| [`ParticipantsChannelToClient`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.participantschanneltoclient.md) | Participants data channel message from the server to the client. |
| [`PhoneUser`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.phoneuser.md) | Phone user type, always has a display name. User dialing in from a phone where the user's identity is unknown because they haven't signed in with a Google Account. |
| [`ResourceSnapshot`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.resourcesnapshot.md) | Base interface for all resource snapshots provided by the server. |
| [`SessionControlChannelFromClient`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.sessioncontrolchannelfromclient.md) | Session control data channel message from the client to the server. |
| [`SessionControlChannelToClient`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.sessioncontrolchanneltoclient.md) | Session control data channel message from the server to the client. |
| [`SessionStatus`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.sessionstatus.md) | Session status. |
| [`SessionStatusResource`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.sessionstatusresource.md) | Singleton resource containing the status of the media session. |
| [`SetVideoAssignmentRequest`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.setvideoassignmentrequest.md) | Request to set video assignment. In order to get video streams, the client must set a video assignment. |
| [`SetVideoAssignmentResponse`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.setvideoassignmentresponse.md) | Response to a set video assignment request from the server. |
| [`SignedInUser`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.signedinuser.md) | Signed in user type, always has a unique id and display name. |
| [`StatsSection`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.statssection.md) | A base section of media stats. All sections have an id. |
| [`StatTypes`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.stattypes.md) | Stats section types. There are defined by the [WebRTC spec.](https://www.w3.org/TR/webrtc-stats/#dom-rtcstatstype) |
| [`UploadMediaStats`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.uploadmediastats.md) | Upload media stats. |
| [`UploadMediaStatsRequest`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.uploadmediastatsrequest.md) | Uploads media stats from the client to the server. The stats are retrieved from WebRTC by calling [RTCPeerConnection.getStats()](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getStats). The returned [RTCStatsReport](https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsReport) can be mapped to the sections below. |
| [`UploadMediaStatsResponse`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.uploadmediastatsresponse.md) | Response to a media stats upload request. |
| [`VideoAssignmentChannelFromClient`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.videoassignmentchannelfromclient.md) | Video assignment data channel message from the client to the server. |
| [`VideoAssignmentChannelToClient`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.videoassignmentchanneltoclient.md) | Video assignment data channel message from the server to the client. |
| [`VideoAssignmentLayoutModel`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.videoassignmentlayoutmodel.md) | Video assignment for a layout model. |
| [`VideoAssignmentMaxResolution`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.videoassignmentmaxresolution.md) | Maximum video resolution the client wants to receive for any video feeds. |
| [`VideoAssignmentResource`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.videoassignmentresource.md) | Singleton resource describing how video streams are assigned to video canvases specified in the client's video layout model. |

## Type aliases

| Name | Description |
| --- | --- |
| [`StatsSectionData`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.statssectiondata.md) | A section of media stats. Used to map the [RTCStatsReport](https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsReport) to the expected structure for the data channel. All sections have an id and a type. For fields in a specific type, please see the StatTypes interface. |
