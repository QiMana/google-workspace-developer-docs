---
source: https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type/drive
root: workspace
fetched_at: 2026-04-23T15:23:05.358Z
---

# Package google.apps.script.type.drive

## Page Summary

- Drive add-ons can be customized through the `DriveAddOnManifest`, affecting their look and execution.
- `DriveAddOnManifest` allows customization of the add-on's homepage and behavior when items are selected in Drive views.
- `DriveExtensionPoint` provides a structure for defining triggers that activate specific functions within the add-on.
- When a Drive extension point is triggered, the specified `runFunction` is executed.

## Index

- `DriveAddOnManifest` (message)
- `DriveExtensionPoint` (message)

## DriveAddOnManifest

Properties customizing the appearance and execution of a Drive add-on.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>homepageTrigger</code></td><td><p>If present, this overrides the configuration from <code>addOns.common.homepageTrigger</code>.</p></td></tr><tr><td><code>onItemsSelectedTrigger</code></td><td><p><code>DriveExtensionPoint</code></p><p>Corresponds to behavior that executes when items are selected in the relevant Drive view, such as the My Drive Doclist.</p></td></tr></tbody></table>

## DriveExtensionPoint

Common format for declaring a Drive add-on's triggers.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p><p>Required. The endpoint to execute when the extension point is activated.</p></td></tr></tbody></table>
