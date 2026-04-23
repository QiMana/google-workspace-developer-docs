---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/video-frame
root: workspace
fetched_at: 2026-04-23T15:30:38.842Z
---

# meet::VideoFrame

## meet::VideoFrame

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>contributing_source</code></td><td><div><code>uint32_t</code></div><p>Contributing source (CSRC) of the current audio frame.</p></td></tr><tr><td><code>frame</code></td><td><div><code>const webrtc::VideoFrame &</code></div></td></tr><tr><td><code>synchronization_source</code></td><td><div><code>uint32_t</code></div><p>Synchronization source (SSRC) of the video frame.</p></td></tr></tbody></table>

## Public attributes

### contributing\_source

```
uint32_t meet::VideoFrame::contributing_source
```

Contributing source (CSRC) of the current audio frame.

This ID is used to identify which participant in the conference generated the frame. Integrators can cross reference this value with values pushed from Meet servers to the client via `MediaEntriesToClient` resource updates.

**See also:** [WebRTC Contributing Source](https://www.w3.org/TR/webrtc/#dom-rtcrtpcontributingsource)

### frame

```
const webrtc::VideoFrame & meet::VideoFrame::frame
```

### synchronization\_source

```
uint32_t meet::VideoFrame::synchronization_source
```

Synchronization source (SSRC) of the video frame.

This ID identifies which media stream the video frame originated from. The ssrc is for debugging purposes only.

**See also:** [WebRTC Synchronization Source](https://www.w3.org/TR/webrtc/#dom-rtcrtpsynchronizationsource)
