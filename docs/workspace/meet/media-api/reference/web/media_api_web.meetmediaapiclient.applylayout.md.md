---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.applylayout.md
root: workspace
fetched_at: 2026-04-23T15:31:06.510Z
---

# Method signature MeetMediaApiClient.applyLayout

Applies the given media layout requests. This is required to be able to request a video stream. Only accepts media layouts that have been created with the [`createMediaLayout`](https://developers.google.com/meet/media-api/reference/web/media_api_web.meetmediaapiclient.createmedialayout) function.

## Signature

```
applyLayout(requests: MediaLayoutRequest[]): Promise<MediaApiResponseStatus>;
```

## Details

| Optional | No |
| --- | --- |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `requests` | `MediaLayoutRequest[]` | No | The requests to apply. |

## Returns

`Promise<MediaApiResponseStatus>`

A promise that resolves when the request has been accepted. NOTE: The promise resolving on the request does not mean the layout has been applied. It means that the request has been accepted and you may need to wait a short amount of time for these layouts to be applied.
