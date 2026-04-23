---
source: https://developers.google.com/workspace/meet/media-api/guides/metrics
root: workspace
fetched_at: 2026-04-23T15:30:34.466Z
---

# Upload client metrics to the Meet Media API

Google Meet Media API clients must periodically upload client statistics over the `media-stats` data channel.

The entries required by the Meet Media API are a subset of the [statistics](https://w3c.github.io/webrtc-pc/#mandatory-to-implement-stats) gathered by WebRTC, which are accessible by calling the `RTCPeerConnection::getStats()` method.

## Client flow

All Meet Media API clients must implement the following flow.

### Initial configuration

After the client opens the `media-stats` data channel, Meet immediately sends a [`MediaStatsConfiguration`](../reference/dc/media_api.mediastatsconfiguration.md.md) resource update over the channel. This configuration specifies how the client should upload stats.

| Configuration |
| --- |
| [`uploadIntervalSeconds`](../reference/dc/media_api.mediastatsconfiguration.uploadintervalseconds.md.md) | Specifies how frequently the Meet Media API client should upload statistics, or zero if the client shouldn't upload any. |
| [`allowlist`](../reference/dc/media_api.mediastatsconfiguration.allowlist.md.md) | Specifies which `RTCPeerConnection::getStats()` entries the client should upload. |

### Stats upload

While connected to a conference, the Meet Media API client must:

1. Call the `RTCPeerConnection::getStats()` method at the interval specified by [`uploadIntervalSeconds`](../reference/dc/media_api.mediastatsconfiguration.uploadintervalseconds.md.md).
2. Filter the resulting stats object down to the fields specified by [`allowlist`](../reference/dc/media_api.mediastatsconfiguration.allowlist.md.md).
3. Upload the filtered stats by sending a [`UploadMediaStatsRequest`](../reference/dc/media_api.uploadmediastatsrequest.md.md) across the `media-stats` data channel.

## Related topics

- [Meet Media API concepts](./concepts.md)
- [Get started with Meet Media API](./get-started.md)
