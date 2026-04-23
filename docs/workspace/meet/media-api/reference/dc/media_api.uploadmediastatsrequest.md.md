---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.uploadmediastatsrequest.md
root: workspace
fetched_at: 2026-04-23T15:30:57.410Z
---

# Interface UploadMediaStatsRequest

Uploads media stats from the client to the server. The stats are retrieved from WebRTC by calling [RTCPeerConnection.getStats()](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getStats). The returned [RTCStatsReport](https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsReport) can be mapped to the sections below.

## Signature

```
declare interface UploadMediaStatsRequest extends MediaApiRequest
```

## Heritage

| Extends | `MediaApiRequest` |
| --- | --- |

## Property signatures

| Name | Description |
| --- | --- |
| [`requestId`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaapirequest.requestid.md) | A unique client-generated identifier for this request. Different requests must never have the same request ID in the scope of one data channel.   *(Inherited from [`MediaApiRequest`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaapirequest.md))* |
| [`uploadMediaStats`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.uploadmediastatsrequest.uploadmediastats.md) | Upload media stats. |
