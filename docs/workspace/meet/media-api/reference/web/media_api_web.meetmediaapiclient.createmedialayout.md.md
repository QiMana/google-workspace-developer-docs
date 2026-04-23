---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.createmedialayout.md
root: workspace
fetched_at: 2026-04-23T15:31:06.378Z
---

# Method signature MeetMediaApiClient.createMediaLayout

Creates a new media layout. Only media layouts that are created with this function can be applied. Otherwise, the [`applyLayout`](./media_api_web.meetmediaapiclient.applylayout.md) function will throw an error. Once the media layout has been created, you can construct a request and apply it with the [`applyLayout`](./media_api_web.meetmediaapiclient.applylayout.md) function. These media layout objects are meant to be reused (can be reassigned to a different request) but are distinct per stream (need to be created for each stream).

## Signature

```
createMediaLayout(canvasDimensions: CanvasDimensions): MediaLayout;
```

## Details

| Optional | No |
| --- | --- |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `canvasDimensions` | `CanvasDimensions` | No | The dimensions of the canvas to render the layout on. |

## Returns

`MediaLayout`

The new media layout.
