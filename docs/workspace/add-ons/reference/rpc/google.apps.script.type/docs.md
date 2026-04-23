---
source: https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type/docs
root: workspace
fetched_at: 2026-04-23T15:23:04.749Z
---

# Package google.apps.script.type.docs

## Page Summary

- `DocsAddOnManifest` customizes the appearance and execution of Google Docs add-ons, including homepage configuration, file scope authorization, link previews, and third-party resource creation.
- `DocsExtensionPoint` defines a common format for Google Docs add-on triggers, specifying the endpoint function to execute when activated.
- The manifest includes triggers for various events like homepage access, file authorization, link previews, and actions to create third-party resources.
- Each extension point within the manifest specifies a `runFunction` which is the Apps Script function to be executed upon triggering the extension point.

## Index

- `DocsAddOnManifest` (message)
- `DocsExtensionPoint` (message)

## DocsAddOnManifest

Properties customizing the appearance and execution of a Google Docs add-on.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>homepageTrigger</code></td><td><p>If present, this overrides the configuration from <code>addOns.common.homepageTrigger</code>.</p></td></tr><tr><td><code>onFileScopeGrantedTrigger</code></td><td><p><code>DocsExtensionPoint</code></p><p>Endpoint to execute when file scope authorization is granted for this document/user pair.</p></td></tr><tr><td><code>linkPreviewTriggers[]</code></td><td><p>A list of extension points for previewing links in a Google Docs document. For details, see <a href="https://developers.google.com/workspace/add-ons/guides/preview-links-smart-chips">Preview links with smart chips</a>.</p></td></tr><tr><td><code>createActionTriggers[]</code></td><td><p>A list of extension points for creating third-party resources from within Google Workspace applications. For more information, see <a href="https://developers.google.com/workspace/add-ons/guides/create-insert-resource-smart-chip">Create third-party resources from the @ menu</a>.</p></td></tr></tbody></table>

## DocsExtensionPoint

Common format for declaring a Docs add-on's triggers.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p><p>Required. The endpoint to execute when this extension point is activated.</p></td></tr></tbody></table>
