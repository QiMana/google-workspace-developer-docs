---
source: https://developers.google.com/apps-script/manifest/drive-addons
root: apps-script
fetched_at: 2026-04-23T15:18:31.157Z
---

# Drive manifest resource

## Page Summary

- Resource configuration used to define Google Workspace add-on content and behavior within Google Drive.
- Google Workspace add-on manifests must have all required components if they extend Drive.
- The manifest includes configurations for a homepage trigger and an on items selected trigger.
- The `onItemsSelectedTrigger` is required for add-on behavior triggered by user selection of items in Drive.
- The `runFunction` field within `onItemsSelectedTrigger` specifies the function to execute when items are selected.

The resource configuration used to define [Google Workspace add-on](https://developers.google.com/workspace/add-ons/concepts/types#g_suite_add-ons) content and behavior within Google Drive. Google Workspace add-on manifests must include all components marked as **Required** if they extend Drive.

## Drive

The Google Workspace add-on manifest configuration for Google Drive extensions. See [Extending Drive with Google Workspace add-ons](https://developers.google.com/workspace/add-ons/drive) for more information.

JSON representation

```
{
  "homepageTrigger": {
    object (HomepageTrigger)
  },
  "onItemsSelectedTrigger": {
    object (OnItemsSelectedTrigger)
  }
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>homepageTrigger</code></td><td><p><code>object (HomepageTrigger)</code></p><p>The trigger function for the add-on <a href="https://developers.google.com/workspace/add-ons/concepts/homepages">homepage</a> in the Drive host. This overrides <a href="https://developers.google.com/apps-script/manifest/addons#Common.FIELDS.homepageTrigger"><code>addOns.common.homepageTrigger</code></a>.</p></td></tr><tr><td><code>onItemsSelectedTrigger</code></td><td><p><code>object (OnItemsSelectedTrigger)</code></p><p><b>Required to provide add-on behavior triggered by user selection of items in Drive</b>. The contextual trigger function for item selections in Google Drive.</p></td></tr></tbody></table>

### OnItemsSelectedTrigger

A configuration for a contextual trigger that fires when a user selects files or folders in Google Drive. See [Drive contextual interface for items selected](https://developers.google.com/workspace/add-ons/drive/building-drive-interfaces#drive_contextual_interface_for_items_selected) for details.

JSON representation

```
{
  "runFunction": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p>The name of the function to run when files or folders are selected in Google Drive. The function must return an array of <a href="https://developers.google.com/apps-script/reference/card-service/card"><code>Card</code></a> objects for the UI.</td></tr></tbody></table>
