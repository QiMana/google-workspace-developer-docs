---
source: https://developers.google.com/apps-script/manifest/editor-addons
root: apps-script
fetched_at: 2026-04-23T15:18:32.122Z
---

# Editor manifest resource

## Page Summary

- Google Workspace add-on manifest configurations for Editor extensions require specific components, especially if they extend the Editor.
- The `onFileScopeGrantedTrigger` is necessary if your add-on interacts with the current Editor document after the user grants `drive.file` scope.
- `linkPreviewTriggers[]` are mandatory for enabling link previews in Docs, Sheets, or Slides.
- `createActionTriggers[]` are required for allowing the creation of third-party resources via the @ menu.
- The `runFunction` field in triggers specifies the function to execute when the trigger fires.

The resource configuration used to define [Google Workspace add-on](https://developers.google.com/workspace/add-ons/concepts/types#g_suite_add-ons) content and behavior within the editors. Google Workspace add-on manifests must include all components marked as **Required** if they extend the Editor.

## Editors

The Google Workspace add-on manifest configuration for Editor extensions. See [Extending Editors with Google Workspace add-ons](https://developers.google.com/workspace/add-ons/editors/gsao) for details.

JSON representation

```
{
  "homepageTrigger": {
    object (HomepageTrigger)
  },
  "onFileScopeGrantedTrigger": {
    object (OnFileScopeGrantedTrigger)
  },
  "linkPreviewTriggers": [
    {
      object (LinkPreviewTriggers)
    }
  ],
  "createActionTriggers": [
    {
      object (CreateActionTriggers)
    }
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>homepageTrigger</code></td><td><p><code>object (HomepageTrigger)</code></p><p>This trigger function creates the add-on <a href="https://developers.google.com/workspace/add-ons/concepts/homepages">homepage</a> in the host app. This overrides <a href="https://developers.google.com/apps-script/manifest/addons#Common.FIELDS.homepageTrigger"><code>addOns.common.homepageTrigger</code></a>.</p></td></tr><tr><td><code>onFileScopeGrantedTrigger</code></td><td><p><code>object (OnFileScopeGrantedTrigger)</code></p><p><b>Required if the add-on includes behavior specific to the current document</b>, triggered when the user authorizes the <code>drive.file</code> scope.</p></td></tr><tr><td><code>linkPreviewTriggers[]</code></td><td><p><code>object (LinkPreviewTriggers)</code></p><p><b>Required for link previews.</b> A list of triggers for previewing links in a Google Docs, Sheets, or Slides file. For details, see <a href="https://developers.google.com/apps-script/add-ons/editors/gsao/preview-links">Preview links with smart chips</a>.</p></td></tr><tr><td><code>createActionTriggers[]</code></td><td><p><code>object (createActionTriggers)</code></p><p><b>Required for third-party resource creation.</b> A list of triggers for creating resources in a third-party service from the @ menu. For details, see <a href="https://developers.google.com/apps-script/add-ons/editors/gsao/create-insert-resource-smart-chip">Create third-party resources with smart chips</a>.</p></td></tr></tbody></table>

### OnFileScopeGrantedTrigger

A configuration for a contextual trigger that fires when the request file scope dialog uses `CardService.newEditorFileScopeActionResponseBuilder().requestFileScopeForActiveDocument().build();` and the user grants `drive.file` scope authorization.

JSON representation

```
{
  "runFunction": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p>The name of the function to run if <code>drive.file</code> scope is granted. The function must return an array of <a href="https://developers.google.com/apps-script/reference/card-service/card"><code>Card</code></a> objects for the UI.</td></tr></tbody></table>

### LinkPreviewTriggers

The configuration for a trigger that fires when a user types or pastes a link from a third-party service into a Docs, Sheets, or Slides file.

To set up this trigger for a Google Workspace add-on, see [Preview links with smart chips](https://developers.google.com/apps-script/add-ons/editors/gsao/preview-links).

JSON representation

```
{
  "labelText": string,
  "localizedLabelText": {
    string: string,
    ...
  },
  "runFunction": string,
  "logoUrl": string,
  "patterns": [
    {
      object(patterns)
    }
  ]
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>labelText</code></td><td><p><code>string</code></p><b>Required.</b> The text for an example smart chip prompting users to preview the link, such as <code>Example: Support case</code>. This text is static.</td></tr><tr><td><code>localizedLabelText</code></td><td><p><code>map (key: string, value: string)</code></p>Optional. A map of <code>labelText</code> to localize into other languages. Format the language in <a href="https://wikipedia.org/wiki/ISO_639_macrolanguage">ISO 639</a> and country/region in <a href="https://wikipedia.org/wiki/ISO_3166">ISO 3166</a>, separated by a hyphen <code>-</code>.</td></tr><tr><td><code>patterns[]</code></td><td><p><code>object (UriPattern)</code></p><b>Required.</b> An array of URL patterns that trigger the add-on to preview links.</td></tr><tr><td><code>runFunction</code></td><td><p><code>string</code></p><b>Required.</b> The name of the function to run when the user authorizes the <code>https://www.googleapis.com/auth/workspace.linkpreview</code> scope. The function must accept an event object, which includes a <code>matchedUrl.url</code> property containing the URL to preview, and return a <a href="https://developers.google.com/apps-script/reference/card-service/card"><code>Card</code></a> object.</td></tr></tbody></table>

### UriPattern

The configuration for each URL pattern that triggers a link preview.

JSON representation

```
{
  "hostPattern": string,
  "pathPrefix" : string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>hostPattern</code></td><td><p><code>string</code></p><b>Required for each URL pattern</b>. The URL pattern domain. The add-on previews links containing this domain. To match all subdomains, use a wildcard asterisk (<code>*</code>).</td></tr><tr><td><code>pathPrefix</code></td><td><p><code>string</code></p>Optional. The path appending the domain. To match all URLs in the domain, leave <code>pathPrefix</code> empty.</td></tr></tbody></table>

### CreateActionTriggers

The configuration for a trigger that fires when a user selects a third-party integration menu item from the Google Docs @ menu.

To set up this trigger for a Google Workspace add-on, see [Create third-party resources with smart chips](https://developers.google.com/apps-script/add-ons/editors/gsao/create-insert-resource-smart-chip).

JSON representation

```
{
  "id": string,
  "labelText": string,
  "localizedLabelText": {
    string: string,
    ...
  },
  "runFunction": string,
  "logoUrl": string,
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><b>Required.</b> The unique ID for this extension point. Use up to 64 characters in <code>[a-zA-Z0-9-]+.</code> format.</td></tr><tr><td><code>labelText</code></td><td><p><code>string</code></p><b>Required.</b> The text appearing in the @ menu, such as <code>Create support case</code>.</td></tr><tr><td><code>localizedLabelText</code></td><td><p><code>map (key: string, value: string)</code></p>Optional. A map of <code>labelText</code> to localize. Format the language in <a href="https://wikipedia.org/wiki/ISO_639_macrolanguage">ISO 639</a> and country/region in <a href="https://wikipedia.org/wiki/ISO_3166">ISO 3166</a>, separated by a hyphen <code>-</code>.</td></tr><tr><td><code>runFunction</code></td><td><p><code>string</code></p><b>Required.</b> The name of the function to run when a user selects an extension point. The function must return a form card.</td></tr></tbody></table>
