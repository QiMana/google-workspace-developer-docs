---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/video-canvas
root: workspace
fetched_at: 2026-04-23T15:30:38.662Z
---

# meet::VideoCanvas

## meet::VideoCanvas

## Summary

<table><tbody><tr><th colspan="2"><h3>Public types</h3></th></tr><tr><td><code>AssignmentProtocol</code></td><td>enum</td></tr></tbody></table>

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>assignment_protocol = AssignmentProtocol::kRelevant</code></td><td><div><code>AssignmentProtocol</code></div><p>The protocol that governs how the backend should assign a video feed to this canvas.</p></td></tr><tr><td><code>dimensions</code></td><td><div><code>CanvasDimensions</code></div><p>The dimensions for this video canvas.</p></td></tr><tr><td><code>id = 0</code></td><td><div><code>int32_t</code></div><p>An identifier for the video canvas.</p></td></tr></tbody></table>

## Public types

### AssignmentProtocol

```
meet::VideoCanvas::AssignmentProtocol
```

## Public attributes

### assignment\_protocol

```
AssignmentProtocol meet::VideoCanvas::assignment_protocol = AssignmentProtocol::kRelevant
```

The protocol that governs how the backend should assign a video feed to this canvas.

### dimensions

```
CanvasDimensions meet::VideoCanvas::dimensions
```

The dimensions for this video canvas.

Failure to provide this will result in an error.

### id

```
int32_t meet::VideoCanvas::id = 0
```

An identifier for the video canvas.

This is required and must be unique within the containing `LayoutModel`. Clients should prudently reuse `VideoCanvas` IDs. This allows the backend to keep assigning video streams to the same canvas as much as possible.
