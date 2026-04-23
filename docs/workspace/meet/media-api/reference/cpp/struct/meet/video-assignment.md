---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/video-assignment
root: workspace
fetched_at: 2026-04-23T15:30:38.904Z
---

# meet::VideoAssignment

## meet::VideoAssignment

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>canvases</code></td><td><div><code>std::vector< VideoCanvasAssignment ></code></div><p>The individual canvas assignments, in no particular order.</p></td></tr><tr><td><code>label</code></td><td><div><code>std::string</code></div><div>The <code>LayoutModel</code> that this assignment is based on.</div></td></tr></tbody></table>

## Public attributes

### canvases

```
std::vector< VideoCanvasAssignment > meet::VideoAssignment::canvases
```

The individual canvas assignments, in no particular order.

### label

```
std::string meet::VideoAssignment::label
```

The `LayoutModel` that this assignment is based on.

Taken from `LayoutModel::label`.
