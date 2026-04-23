---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.md
root: workspace
fetched_at: 2026-04-23T15:31:07.466Z
---

# Interface MeetMediaApiClient

Interface for the MeetMediaApiClient. Takes a required configuration and provides a set of subscribables to the client. Takes a [`MeetMediaClientRequiredConfiguration`](https://developers.google.com/meet/media-api/reference/web/media_api_web.meetmediaclientrequiredconfiguration) as a constructor parameter.

## Signature

```
interface MeetMediaApiClient
```

## Method signatures

| Name | Description |
| --- | --- |
| [`applyLayout(requests)`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.applylayout.md) | Applies the given media layout requests. This is required to be able to request a video stream. Only accepts media layouts that have been created with the [`createMediaLayout`](https://developers.google.com/meet/media-api/reference/web/media_api_web.meetmediaapiclient.createmedialayout) function. |
| [`createMediaLayout(canvasDimensions)`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.createmedialayout.md) | Creates a new media layout. Only media layouts that are created with this function can be applied. Otherwise, the [`applyLayout`](https://developers.google.com/meet/media-api/reference/web/media_api_web.meetmediaapiclient.applylayout) function will throw an error. Once the media layout has been created, you can construct a request and apply it with the [`applyLayout`](https://developers.google.com/meet/media-api/reference/web/media_api_web.meetmediaapiclient.applylayout) function. These media layout objects are meant to be reused (can be reassigned to a different request) but are distinct per stream (need to be created for each stream). |
| [`joinMeeting(communicationProtocol)`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.joinmeeting.md) | Joins the meeting. |
| [`leaveMeeting()`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.leavemeeting.md) | Leaves the meeting. |

## Property signatures

| Name | Description |
| --- | --- |
| [`mediaEntries`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.mediaentries.md) | The media entries in the meeting. Subscribable to changes in the media entry collection. |
| [`meetStreamTracks`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.meetstreamtracks.md) | The meet stream tracks in the meeting. Subscribable to changes in the meet stream track collection. |
| [`participants`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.participants.md) | The participants in the meeting. Subscribable to changes in the participant collection. |
| [`presenter`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.presenter.md) | The presenter in the meeting. Subscribable to changes in the presenter. |
| [`screenshare`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.screenshare.md) | The screenshare in the meeting. Subscribable to changes in the screenshare. |
| [`sessionStatus`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.sessionstatus.md) | The status of the session. Subscribable to changes in the session status. |
