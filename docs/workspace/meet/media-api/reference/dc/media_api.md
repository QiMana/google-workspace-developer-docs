---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api
root: workspace
fetched_at: 2026-04-23T15:30:39.681Z
---

# Resource summary for Meet Media API data channels

## Interfaces

| Name | Description |
| --- | --- |
| [`AnonymousUser`](./media_api.anonymoususer.md.md) | Anonymous user type, requires display name to be set. |
| [`BaseParticipant`](./media_api.baseparticipant.md.md) | Singleton resource containing participant information. There will be exactly one of signedInUser, anonymousUser, or phoneUser fields set to determine the type of participant. |
| [`CanvasAssignment`](./media_api.canvasassignment.md.md) | Video assignment for a single canvas. |
| [`CanvasDimensions`](./media_api.canvasdimensions.md.md) | Dimensions of a canvas. |
| [`DeletedMediaEntry`](./media_api.deletedmediaentry.md.md) | Deleted resource for a media entry. |
| [`DeletedParticipant`](./media_api.deletedparticipant.md.md) | Deleted resource for a participant. |
| [`DeletedResource`](./media_api.deletedresource.md.md) | Base interface for all deleted resources. |
| [`LayoutModel`](./media_api.layoutmodel.md.md) | Layout model for the video assignment. |
| [`LeaveRequest`](./media_api.leaverequest.md.md) | Tells the server the client is about to disconnect. After receiving the response, the client should not expect to receive any other messages or media RTP. |
| [`LeaveResponse`](./media_api.leaveresponse.md.md) | Response to a leave request from the server. |
| [`MediaApiCanvas`](./media_api.mediaapicanvas.md.md) | Video canvas for video assignment. |
| [`MediaApiRequest`](./media_api.mediaapirequest.md.md) | Base interface for all requests. |
| [`MediaApiResponse`](./media_api.mediaapiresponse.md.md) | Base interface for all responses. |
| [`MediaApiResponseStatus`](./media_api.mediaapiresponsestatus.md.md) | Base status for a response. |
| [`MediaEntriesChannelToClient`](./media_api.mediaentrieschanneltoclient.md.md) | Media entries data channel message from the server to the client. |
| [`MediaEntry`](./media_api.mediaentry.md.md) | Media Entry interface. |
| [`MediaEntryResource`](./media_api.mediaentryresource.md.md) | Resource snapshot for a media entry. |
| [`MediaStatsChannelFromClient`](./media_api.mediastatschannelfromclient.md.md) | Media stats data channel message from the client to the server. |
| [`MediaStatsChannelToClient`](./media_api.mediastatschanneltoclient.md.md) | Media stats data channel message from the server to the client. |
| [`MediaStatsConfiguration`](./media_api.mediastatsconfiguration.md.md) | Configuration for media stats. Provided by the server and has to be used by the client to upload media stats. |
| [`MediaStatsResource`](./media_api.mediastatsresource.md.md) | Resource snapshot for media stats. Managed by the server. |
| [`ParticipantResource`](./media_api.participantresource.md.md) | Base participant resource type |
| [`ParticipantsChannelToClient`](./media_api.participantschanneltoclient.md.md) | Participants data channel message from the server to the client. |
| [`PhoneUser`](./media_api.phoneuser.md.md) | Phone user type, always has a display name. User dialing in from a phone where the user's identity is unknown because they haven't signed in with a Google Account. |
| [`ResourceSnapshot`](./media_api.resourcesnapshot.md.md) | Base interface for all resource snapshots provided by the server. |
| [`SessionControlChannelFromClient`](./media_api.sessioncontrolchannelfromclient.md.md) | Session control data channel message from the client to the server. |
| [`SessionControlChannelToClient`](./media_api.sessioncontrolchanneltoclient.md.md) | Session control data channel message from the server to the client. |
| [`SessionStatus`](./media_api.sessionstatus.md.md) | Session status. |
| [`SessionStatusResource`](./media_api.sessionstatusresource.md.md) | Singleton resource containing the status of the media session. |
| [`SetVideoAssignmentRequest`](./media_api.setvideoassignmentrequest.md.md) | Request to set video assignment. In order to get video streams, the client must set a video assignment. |
| [`SetVideoAssignmentResponse`](./media_api.setvideoassignmentresponse.md.md) | Response to a set video assignment request from the server. |
| [`SignedInUser`](./media_api.signedinuser.md.md) | Signed in user type, always has a unique id and display name. |
| [`StatsSection`](./media_api.statssection.md.md) | A base section of media stats. All sections have an id. |
| [`StatTypes`](./media_api.stattypes.md.md) | Stats section types. There are defined by the [WebRTC spec.](https://www.w3.org/TR/webrtc-stats/#dom-rtcstatstype) |
| [`UploadMediaStats`](./media_api.uploadmediastats.md.md) | Upload media stats. |
| [`UploadMediaStatsRequest`](./media_api.uploadmediastatsrequest.md.md) | Uploads media stats from the client to the server. The stats are retrieved from WebRTC by calling [RTCPeerConnection.getStats()](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getStats). The returned [RTCStatsReport](https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsReport) can be mapped to the sections below. |
| [`UploadMediaStatsResponse`](./media_api.uploadmediastatsresponse.md.md) | Response to a media stats upload request. |
| [`VideoAssignmentChannelFromClient`](./media_api.videoassignmentchannelfromclient.md.md) | Video assignment data channel message from the client to the server. |
| [`VideoAssignmentChannelToClient`](./media_api.videoassignmentchanneltoclient.md.md) | Video assignment data channel message from the server to the client. |
| [`VideoAssignmentLayoutModel`](./media_api.videoassignmentlayoutmodel.md.md) | Video assignment for a layout model. |
| [`VideoAssignmentMaxResolution`](./media_api.videoassignmentmaxresolution.md.md) | Maximum video resolution the client wants to receive for any video feeds. |
| [`VideoAssignmentResource`](./media_api.videoassignmentresource.md.md) | Singleton resource describing how video streams are assigned to video canvases specified in the client's video layout model. |

## Type aliases

| Name | Description |
| --- | --- |
| [`StatsSectionData`](./media_api.statssectiondata.md.md) | A section of media stats. Used to map the [RTCStatsReport](https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsReport) to the expected structure for the data channel. All sections have an id and a type. For fields in a specific type, please see the StatTypes interface. |
