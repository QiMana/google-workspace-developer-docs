---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.frametoframemessage.md
root: workspace
fetched_at: 2026-04-23T15:30:15.399Z
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
| [`originator`](./addon_sdk.frametoframemessage.originator.md.md) | The add-on frame that sent the message. |
| [`payload`](./addon_sdk.frametoframemessage.payload.md.md) | The message payload. Value set by the add-on running in the frame specified by the originator field. The length of this string must be less than 1,000,000 characters. |
