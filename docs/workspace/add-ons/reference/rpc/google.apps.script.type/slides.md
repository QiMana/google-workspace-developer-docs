---
source: https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type/slides
root: workspace
fetched_at: 2026-04-23T15:23:04.548Z
---

# Package google.apps.script.type.slides

## Page Summary

- `SlidesAddOnManifest` customizes the appearance and execution of Google Slides add-ons, including homepage configuration and triggers for file scope authorization.
- `SlidesAddOnManifest` utilizes extension points like `HomepageExtensionPoint`, `SlidesExtensionPoint`, and `LinkPreviewExtensionPoint` to define add-on behavior.
- `SlidesExtensionPoint` provides a structure for declaring triggers with a `runFunction` field specifying the endpoint to execute when triggered.
- The documentation outlines properties for customizing Slides add-ons and how to declare triggers using `SlidesExtensionPoint`, and it includes resources for previewing links with smart chips.

## Index

- `SlidesAddOnManifest` (message)
- `SlidesExtensionPoint` (message)

## SlidesAddOnManifest

Properties customizing the appearance and execution of a Google Slides add-on.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>homepageTrigger</code></td><td><p>If present, this overrides the configuration from <code>addOns.common.homepageTrigger</code>.</p></td></tr><tr><td><code>onFileScopeGrantedTrigger</code></td><td><p><code>SlidesExtensionPoint</code></p><p>Endpoint to execute when file scope authorization is granted for this document/user pair.</p></td></tr><tr><td><code>linkPreviewTriggers[]</code></td><td><p>A list of extension points for previewing links in a Google Slides document. For details, see <a href="https://developers.google.com/workspace/add-ons/guides/preview-links-smart-chips">Preview links with smart chips</a>.</p></td></tr></tbody></table>

## SlidesExtensionPoint

Common format for declaring a Slides add-on's triggers.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p><p>Required. The endpoint to execute when this extension point is activated.</p></td></tr></tbody></table>
