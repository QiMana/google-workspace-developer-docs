---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetmainstageclient.unloadsidepanel
root: workspace
fetched_at: 2026-04-23T15:30:19.962Z
---

# Method signature MeetMainStageClient.unloadSidePanel

Closes the side panel iframe. Note that side panel add-on state isn't retained within Meet when the method is called. If the side panel iframe is opened again, for instance using a call to [`loadSidePanel`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetmainstageclient.loadsidepanel), the side panel iframe source URL is set to its original value from the [add-on manifest](https://developers.google.com/workspace/meet/add-ons/guides/deploy-add-on#manifest). It's up to the add-on to persist any add-on state in the add-on backend before this method is called.

## Signature

```
unloadSidePanel(): Promise<void>;
```

## Details

| Optional | No |
| --- | --- |

## Returns

`Promise<void>`
