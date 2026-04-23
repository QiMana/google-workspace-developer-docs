---
source: https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type/sheets
root: workspace
fetched_at: 2026-04-23T15:23:07.891Z
---

# Package google.apps.script.type.sheets

## Page Summary

- The content focuses on customizing Google Sheets add-ons, particularly their appearance and execution using `SheetsAddOnManifest`.
- `SheetsAddOnManifest` properties include homepage configuration, file scope authorization triggers, and link preview extension points.
- `SheetsExtensionPoint` provides a common structure for defining Sheets add-on triggers with a required `runFunction` field specifying the execution endpoint.

## Index

- `SheetsAddOnManifest` (message)
- `SheetsExtensionPoint` (message)

## SheetsAddOnManifest

Properties customizing the appearance and execution of a Google Sheets add-on.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>homepageTrigger</code></td><td><p>If present, this overrides the configuration from <code>addOns.common.homepageTrigger</code>.</p></td></tr><tr><td><code>onFileScopeGrantedTrigger</code></td><td><p><code>SheetsExtensionPoint</code></p><p>Endpoint to execute when file scope authorization is granted for this document/user pair.</p></td></tr><tr><td><code>linkPreviewTriggers[]</code></td><td><p>A list of extension points for previewing links in a Google Sheets document. For details, see <a href="https://developers.google.com/workspace/add-ons/guides/preview-links-smart-chips">Preview links with smart chips</a>.</p></td></tr></tbody></table>

## SheetsExtensionPoint

Common format for declaring a Sheets add-on's triggers.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p><p>Required. The endpoint to execute when this extension point is activated.</p></td></tr></tbody></table>
