---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.layoutmodel.canvases
root: workspace
fetched_at: 2026-04-23T15:30:43.598Z
---

# Property signature LayoutModel.canvases

Canvases to assign videos to virtual SSRCs. Providing more canvases than exists virtual streams will result in an error status. Virtual video SSRCs are allocated during initialization of the client and the number of virtual SSRCs is fixed to the initial number of requested video streams.

## Signature

```
canvases: MediaApiCanvas[];
```

## Details

| Type | `MediaApiCanvas[]` |
| --- | --- |
| Optional | No |
| Readonly | No |
