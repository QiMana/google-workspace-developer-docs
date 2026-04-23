---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.closeaddon
root: workspace
fetched_at: 2026-04-23T15:30:16.267Z
---

# Method signature MeetAddonClient.closeAddon

## Method signature MeetAddonClient.closeAddon

Close the add-on that's running in the Meet iframe by unloading all iframes and closing the side panel if it's open. Calling this while there's an ongoing activity has no effect.

## Signature

```
closeAddon(): Promise<void>;
```

## Details

| Optional | No |
| --- | --- |

## Returns

`Promise<void>`
