---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetmainstageclient.notifysidepanel
root: workspace
fetched_at: 2026-04-23T15:30:20.108Z
---

# Method signature MeetMainStageClient.notifySidePanel

Sends a message from the main stage add-on iframe to the side panel add-on iframe. The add-on running in the side panel iframe can react to this message using the [`frameToFrameMessage`](./addon_sdk.addoncallbacks.frametoframemessage.md.md) add-on callback. The length of this string must be less than 1,000,000 characters.

## Signature

```
notifySidePanel(payload: string): Promise<void>;
```

## Details

| Optional | No |
| --- | --- |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `payload` | `string` | No |  |

## Returns

`Promise<void>`
