---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.leaverequest.md
root: workspace
fetched_at: 2026-04-23T15:30:43.975Z
---

# Interface LeaveRequest

Tells the server the client is about to disconnect. After receiving the response, the client should not expect to receive any other messages or media RTP.

## Signature

```
declare interface LeaveRequest extends MediaApiRequest
```

## Heritage

| Extends | `MediaApiRequest` |
| --- | --- |

## Property signatures

| Name | Description |
| --- | --- |
| [`leave`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.leaverequest.leave.md) | Leave field, always empty. |
| [`requestId`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaapirequest.requestid.md) | A unique client-generated identifier for this request. Different requests must never have the same request ID in the scope of one data channel.   *(Inherited from [`MediaApiRequest`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaapirequest.md))* |
