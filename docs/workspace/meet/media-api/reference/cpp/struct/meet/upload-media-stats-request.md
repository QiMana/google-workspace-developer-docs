---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/upload-media-stats-request
root: workspace
fetched_at: 2026-04-23T15:30:39.027Z
---

# meet::UploadMediaStatsRequest

## meet::UploadMediaStatsRequest

`#include <media_stats_resource.h>`

Uploads media stats from the client to the server.

## Summary

The stats are retrieved from WebRTC by calling `RTCPeerConnection::getStats` and the returned [RTCStatsReport](https://w3c.github.io/webrtc-pc/#dom-rtcstatsreport) can be easily mapped to the sections below.

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>sections</code></td><td><div><code>std::vector< MediaStatsSection ></code></div><p>Represents the entries in <a href="https://w3c.github.io/webrtc-pc/#dom-rtcstatsreport">RTCStatsReport</a>.</p></td></tr></tbody></table>

## Public attributes

### sections

```
std::vector< MediaStatsSection > meet::UploadMediaStatsRequest::sections
```

Represents the entries in [RTCStatsReport](https://w3c.github.io/webrtc-pc/#dom-rtcstatsreport).
