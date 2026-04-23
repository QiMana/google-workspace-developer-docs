---
source: https://developers.google.com/workspace/meet/media-api/guides/video-assignment
root: workspace
fetched_at: 2026-04-23T15:30:34.182Z
---

# Manage video assignment in Meet Media API

Once connected to a [conference](https://developers.google.com/workspace/meet/media-api/guides/overview#conference), any [requested](https://developers.google.com/workspace/meet/media-api/guides/concepts#media-descriptions) audio is immediately transmitted and available. However, to receive video, the client must first define canvases for each video stream.

Canvases help Meet understand how your client will consume a video stream, specifying its resolution in pixels (for example, 1280 × 720), frames per second (FPS), and selecting an assignment protocol. The assignment protocol specifies how Meet should choose video streams when there are more [participants](https://developers.google.com/workspace/meet/media-api/guides/overview#participant) than [SSRCs](https://developers.google.com/workspace/meet/media-api/guides/overview#ssrc).

## Video assignment requests

To receive video, clients first send a *video assignment* [request](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.setvideoassignmentrequest) over the [`VideoAssignment`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.videoassignmentchannelfromclient) data channel, defining canvases for the negotiated video streams.

![Send a video assignment request over the video assignment data channel.](https://developers.google.com/static/workspace/meet/media-api/images/video-assignment1.svg)

Figure 1. Send a video assignment request over the video assignment data channel.

Once Meet receives the request, it begins selecting "relevant" [participant](https://developers.google.com/workspace/meet/media-api/guides/overview#participant) videos, based on factors such as:

- Is the participant speaking?
- Is the participant presenting?
- Is the participant screen sharing?

Then, Meet maps the "most relevant" participants to the available video SSRCs and begins transmitting video, matching the canvas parameters as closely as possible.

If the number of participants in a conference exceeds the number of SSRCs, Meet will replace the streams over time to match the most relevant participants.

![Meet servers receive the requests and assign the video streams.](https://developers.google.com/static/workspace/meet/media-api/images/video-assignment2.svg)

Figure 2. Meet servers receive the requests and assign the video streams.

After Meet applies the video assignment request, it pushes a [resource update](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.videoassignmentchanneltoclient.resources) across the [`VideoAssignment`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.videoassignmentchanneltoclient) data channel. This update includes SSRC-to-canvas mapping. Using this mapping, clients can identify the resolution and FPS of the video stream for each SSRC. Conversely, the client knows which SSRC to use when looking for a specific resolution and FPS.

![Send the resource update over the video assignment data channel.](https://developers.google.com/static/workspace/meet/media-api/images/video-assignment3.svg)

Figure 3. Send the resource update over the video assignment data channel.

## Considerations

- Meet decides the association between SSRC and canvas. The client does not specify this in the request.
- Meet does not deterministically assign SSRCs. For example, don't assume the first SSRC is the "most relevant" participant.
- Clients shouldn't request more resolution than they need. For example, don't request 1080p video when your model only uses 480p.
- Matching exact resolutions may not always be possible.
- Clients shouldn't send excessive video assignment requests. These will be throttled or ignored.

## Related topics

- [Get started](https://developers.google.com/workspace/meet/media-api/guides/get-started)
