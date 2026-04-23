---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/screenshare_api.addonscreenshareinfo.md
root: workspace
fetched_at: 2026-04-23T15:30:24.850Z
---

# Interface AddonScreenshareInfo

Information about the add-on that should be used when a user transitions from screen sharing to an in-meeting add-on experience.

## Signature

```
interface AddonScreenshareInfo
```

## Property signatures

| Name | Description |
| --- | --- |
| [`additionalData`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/screenshare_api.addonscreenshareinfo.additionaldata.md) | Data supplied by the third-party that the add-on can use to initialize itself |
| [`cloudProjectNumber`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/screenshare_api.addonscreenshareinfo.cloudprojectnumber.md) | The Google Cloud project number of the add-on that Meet should start when transitioning from screen sharing to the Meet add-on. |
| [`mainStageUrl`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/screenshare_api.addonscreenshareinfo.mainstageurl.md) | The URL that the main stage opens after the add-on starts. Must belong to the same domain as the URLs specified in the add-on manifest. |
| [`sidePanelUrl`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/screenshare_api.addonscreenshareinfo.sidepanelurl.md) | The URL that the side panel opens after the add-on starts. Must belong to the same domain as the URLs specified in the add-on manifest. |
| [`startActivityOnOpen`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/screenshare_api.addonscreenshareinfo.startactivityonopen.md) | Whether to start an activity when the add-on is opened. If a mainstage URL is provided, must be true. |
