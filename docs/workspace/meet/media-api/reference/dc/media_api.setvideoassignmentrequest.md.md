---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.setvideoassignmentrequest.md
root: workspace
fetched_at: 2026-04-23T15:30:53.869Z
---

# Interface SetVideoAssignmentRequest

Request to set video assignment. In order to get video streams, the client must set a video assignment.

## Signature

```
declare interface SetVideoAssignmentRequest extends MediaApiRequest
```

## Heritage

| Extends | `MediaApiRequest` |
| --- | --- |

## Property signatures

| Name | Description |
| --- | --- |
| [`requestId`](./media_api.mediaapirequest.requestid.md.md) | A unique client-generated identifier for this request. Different requests must never have the same request ID in the scope of one data channel.   *(Inherited from [`MediaApiRequest`](./media_api.mediaapirequest.md.md))* |
| [`setAssignment`](./media_api.setvideoassignmentrequest.setassignment.md.md) | Set video assignment. |
