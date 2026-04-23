---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.activitystartingstate
root: workspace
fetched_at: 2026-04-23T15:30:13.575Z
---

# Interface ActivityStartingState

Starting state of the add-on when the participant accepts the invitation to start an activity.

## Signature

```
interface ActivityStartingState
```

## Property signatures

| Name | Description |
| --- | --- |
| [`additionalData`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.activitystartingstate.additionaldata.md) | Data internal to the add-on that it can use to initialize itself. Useful for communicating application-specific state to users joining the activity that cannot be stored in the URLs. The length of this string must be less than 4,096 characters. |
| [`mainStageUrl`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.activitystartingstate.mainstageurl.md) | The URL that the main stage opens for users joining the activity. The length of this URL must be less than 512 characters. |
| [`sidePanelUrl`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.activitystartingstate.sidepanelurl.md) | The URL that the side panel opens for users joining the activity. The length of this URL must be less than 512 characters. |
