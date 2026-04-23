---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetsidepanelclient.notifymainstage
root: workspace
fetched_at: 2026-04-23T15:30:19.854Z
---

# Method signature MeetSidePanelClient.notifyMainStage

Sends a message from the side panel add-on iframe to the main stage add-on iframe. The add-on running in the main stage iframe can react to this message using the [`frameToFrameMessage`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.addoncallbacks.frametoframemessage) add-on callback (see [`AddonCallbacks`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.addoncallbacks)). The length of this string must be less than 1,000,000 characters.

## Signature

```
notifyMainStage(payload: string): Promise<void>;
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
