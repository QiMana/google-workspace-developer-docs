---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.frametoframemessage
root: workspace
fetched_at: 2026-04-23T15:30:15.894Z
---

# Interface FrameToFrameMessage

A client-initiated message sent from one add-on frame to another.

## Signature

```
interface FrameToFrameMessage
```

## Property signatures

| Name | Description |
| --- | --- |
| [`originator`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.frametoframemessage.originator.md) | The add-on frame that sent the message. |
| [`payload`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.frametoframemessage.payload.md) | The message payload. Value set by the add-on running in the frame specified by the originator field. The length of this string must be less than 1,000,000 characters. |
