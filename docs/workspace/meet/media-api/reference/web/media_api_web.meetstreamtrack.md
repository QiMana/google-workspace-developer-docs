---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetstreamtrack
root: workspace
fetched_at: 2026-04-23T15:31:09.014Z
---

# Interface MeetStreamTrack

An abstraction of a track in a Meet stream. This is used to represent both audio and video tracks and their relationship to Media Entries.

## Signature

```
interface MeetStreamTrack
```

## Property signatures

| Name | Description |
| --- | --- |
| [`mediaEntry`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetstreamtrack.mediaentry.md) | The media entry associated with this track. This a one to one relationship. |
| [`mediaStreamTrack`](https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetstreamtrack.mediastreamtrack.md) | The [WebRTC MediaStreamTrack](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack) interface of the Media Capture and Streams API represents a single audio or video media track within a stream. |
