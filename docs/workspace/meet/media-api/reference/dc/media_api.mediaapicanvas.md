---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaapicanvas
root: workspace
fetched_at: 2026-04-23T15:30:44.030Z
---

# Interface MediaApiCanvas

Video canvas for video assignment.

## Signature

```
declare interface MediaApiCanvas
```

## Property signatures

| Name | Description |
| --- | --- |
| [`dimensions`](./media_api.mediaapicanvas.dimensions.md.md) | Dimensions of the canvas. |
| [`id`](./media_api.mediaapicanvas.id.md.md) | ID for the video canvas. This is required and must be unique within the containing layout model. Clients should prudently reuse these IDs, as this allows the backend to keep assigning video streams to the same canvas as much as possible. |
| [`relevant`](./media_api.mediaapicanvas.relevant.md.md) | Tells the server to choose the best video stream for this canvas. This is the only supported mode for now. |
