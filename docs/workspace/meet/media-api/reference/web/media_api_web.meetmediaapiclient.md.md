---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.md
root: workspace
fetched_at: 2026-04-23T15:31:07.466Z
---

# Interface MeetMediaApiClient

Interface for the MeetMediaApiClient. Takes a required configuration and provides a set of subscribables to the client. Takes a [`MeetMediaClientRequiredConfiguration`](./media_api_web.meetmediaclientrequiredconfiguration.md) as a constructor parameter.

## Signature

```
interface MeetMediaApiClient
```

## Method signatures

| Name | Description |
| --- | --- |
| [`applyLayout(requests)`](./media_api_web.meetmediaapiclient.applylayout.md.md) | Applies the given media layout requests. This is required to be able to request a video stream. Only accepts media layouts that have been created with the [`createMediaLayout`](./media_api_web.meetmediaapiclient.createmedialayout.md) function. |
| [`createMediaLayout(canvasDimensions)`](./media_api_web.meetmediaapiclient.createmedialayout.md.md) | Creates a new media layout. Only media layouts that are created with this function can be applied. Otherwise, the [`applyLayout`](./media_api_web.meetmediaapiclient.applylayout.md) function will throw an error. Once the media layout has been created, you can construct a request and apply it with the [`applyLayout`](./media_api_web.meetmediaapiclient.applylayout.md) function. These media layout objects are meant to be reused (can be reassigned to a different request) but are distinct per stream (need to be created for each stream). |
| [`joinMeeting(communicationProtocol)`](./media_api_web.meetmediaapiclient.joinmeeting.md.md) | Joins the meeting. |
| [`leaveMeeting()`](./media_api_web.meetmediaapiclient.leavemeeting.md.md) | Leaves the meeting. |

## Property signatures

| Name | Description |
| --- | --- |
| [`mediaEntries`](./media_api_web.meetmediaapiclient.mediaentries.md.md) | The media entries in the meeting. Subscribable to changes in the media entry collection. |
| [`meetStreamTracks`](./media_api_web.meetmediaapiclient.meetstreamtracks.md.md) | The meet stream tracks in the meeting. Subscribable to changes in the meet stream track collection. |
| [`participants`](./media_api_web.meetmediaapiclient.participants.md.md) | The participants in the meeting. Subscribable to changes in the participant collection. |
| [`presenter`](./media_api_web.meetmediaapiclient.presenter.md.md) | The presenter in the meeting. Subscribable to changes in the presenter. |
| [`screenshare`](./media_api_web.meetmediaapiclient.screenshare.md.md) | The screenshare in the meeting. Subscribable to changes in the screenshare. |
| [`sessionStatus`](./media_api_web.meetmediaapiclient.sessionstatus.md.md) | The status of the session. Subscribable to changes in the session status. |
