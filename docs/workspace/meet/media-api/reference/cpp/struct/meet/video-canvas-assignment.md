---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/video-canvas-assignment
root: workspace
fetched_at: 2026-04-23T15:30:39.322Z
---

# meet::VideoCanvasAssignment

## meet::VideoCanvasAssignment

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>canvas_id = 0</code></td><td><div><code>int32_t</code></div><p>The video canvas the video should be shown in.</p></td></tr><tr><td><code>media_entry_id = 0</code></td><td><div><code>int32_t</code></div><div>ID of the <code>MediaEntry</code> of the media whose video is being shown.</div></td></tr><tr><td><code>ssrc = 0</code></td><td><div><code>uint32_t</code></div><p>The virtual video SSRC that the video will be sent over, or zero if there is no video from the participant.</p></td></tr></tbody></table>

## Public attributes

### canvas\_id

```
int32_t meet::VideoCanvasAssignment::canvas_id = 0
```

The video canvas the video should be shown in.

### media\_entry\_id

```
int32_t meet::VideoCanvasAssignment::media_entry_id = 0
```

ID of the `MediaEntry` of the media whose video is being shown.

### ssrc

```
uint32_t meet::VideoCanvasAssignment::ssrc = 0
```

The virtual video SSRC that the video will be sent over, or zero if there is no video from the participant.
