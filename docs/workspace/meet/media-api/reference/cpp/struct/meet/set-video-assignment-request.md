---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/set-video-assignment-request
root: workspace
fetched_at: 2026-04-23T15:30:38.117Z
---

# meet::SetVideoAssignmentRequest

## meet::SetVideoAssignmentRequest

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>layout_model</code></td><td><div><code>LayoutModel</code></div><p>The new video layout to use.</p></td></tr><tr><td><code>video_resolution</code></td><td><div><code>VideoResolution</code></div><p>The maximum video resolution the client wants to receive for any video feed.</p></td></tr></tbody></table>

## Public attributes

### layout\_model

```
LayoutModel meet::SetVideoAssignmentRequest::layout_model
```

The new video layout to use.

This replaces any previously active video layout.

### video\_resolution

```
VideoResolution meet::SetVideoAssignmentRequest::video_resolution
```

The maximum video resolution the client wants to receive for any video feed.
