---
source: https://developers.google.com/workspace/drive/picker/reference/picker.feature
root: workspace
fetched_at: 2026-04-23T15:28:26.000Z
---

# Enum Feature

`Feature` is an enumerated type, for turning on/off features for various views. Use these values in calls to `PickerBuilder.enableFeature` and `PickerBuilder.disableFeature`.

## Signature

```
export enum Feature
```

## Members

| Name | Description |
| --- | --- |
| [`MINE_ONLY`](https://developers.google.com/workspace/drive/picker/reference/picker.feature.mine_only) | Show only documents owned by the user when showing items from Google Drive. |
| [`MULTISELECT_ENABLED`](https://developers.google.com/workspace/drive/picker/reference/picker.feature.multiselect_enabled) | Allow user to choose more than one item. |
| [`NAV_HIDDEN`](https://developers.google.com/workspace/drive/picker/reference/picker.feature.nav_hidden) | Hide the navigation pane. If the navigation pane is hidden, users can only select from the first view chosen. |
| [`SIMPLE_UPLOAD_ENABLED`](https://developers.google.com/workspace/drive/picker/reference/picker.feature.simple_upload_enabled) | For photo uploads, controls whether per-photo `DocumentObject` (as opposed to per-album) `DocumentObject` is enabled. |
| [~~`SUPPORT_DRIVES`~~](https://developers.google.com/workspace/drive/picker/reference/picker.feature.support_drives) | *(Deprecated)* Whether shared drive items are included in results. |
