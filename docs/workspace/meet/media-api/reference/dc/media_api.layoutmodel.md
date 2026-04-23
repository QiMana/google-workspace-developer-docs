---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.layoutmodel
root: workspace
fetched_at: 2026-04-23T15:30:43.155Z
---

# Interface LayoutModel

Layout model for the video assignment.

## Signature

```
declare interface LayoutModel
```

## Property signatures

| Name | Description |
| --- | --- |
| [`canvases`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.layoutmodel.canvases.md) | Canvases to assign videos to virtual SSRCs. Providing more canvases than exists virtual streams will result in an error status. Virtual video SSRCs are allocated during initialization of the client and the number of virtual SSRCs is fixed to the initial number of requested video streams. |
| [`label`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.layoutmodel.label.md) | Label of the layout model. This is used to identify the layout model when requesting video assignment. |
