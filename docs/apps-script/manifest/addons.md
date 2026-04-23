---
source: https://developers.google.com/apps-script/manifest/addons
root: apps-script
fetched_at: 2026-04-23T15:18:28.282Z
---

# AddOns manifest resource

## Page Summary

- Google Workspace add-on manifests define the content and behavior of add-ons and must include all required components.
- The `AddOns` top-level configuration includes sections for common settings and configurations for specific Google Workspace host applications like Calendar, Chat, Drive, Gmail, Docs, Sheets, Slides, and Meet.
- The `Common` section defines general settings for the add-on that apply across all host applications, including the homepage trigger, layout properties, logo URL, name, allowed outbound link URL prefixes, and universal actions.
- The `LayoutProperties` configuration controls the color scheme for the add-on's toolbar and buttons using primary and secondary color settings.
- A `UniversalAction` allows defining actions available in the add-on UI that either open a specified URL or run an Apps Script function.

The resource configuration that is used to define [Google Workspace add-on](../../workspace/add-ons/concepts/types.md#g_suite_add-ons) content and behavior. add-on manifests must include all components marked as **Required**.

## AddOns

The top-level of the Google Workspace add-on manifest configuration.

JSON representation

```
{
  "common": {
    object (Common)
  },
  "calendar": {
    object (Calendar)
  },
  "chat": {
    object (Chat)
  },
  "drive": {
    object (Drive)
  },
  "gmail": {
    object (Gmail)
  },
  "docs": {
    object (Docs)
  },
  "sheets": {
    object (Sheets)
  },
  "slides": {
    object (Slides)
  },
  "meet": {
    object (Meet)
  }
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>common</code></td><td><p><code>object (Common)</code></p><p><b>Required.</b> Defines values for a <a href="https://developers.google.com/workspace/add-ons/concepts/types#g_suite_add-ons">Google Workspace add-on</a> that are common for every host application. Values defined here serve as defaults when specific values for a particular host are omitted.</p></td></tr><tr><td><code>calendar</code></td><td><p><code>object (Calendar)</code></p><p><b>Required if the Google Workspace add-on extends Calendar</b>. Appearance and behavior configurations within the Google Calendar host application. If omitted, the add-on is disabled in Google Calendar.</p></td></tr><tr><td><code>chat</code></td><td><p><code>object ()</code></p><p><b>Required if the Google Workspace add-on extends Chat</b>. Configuration of a Google Chat app. If omitted, the add-on is disabled in Google Chat.</p><p>The <code>addOns.chat</code> object must be empty. To configure add-on behavior and appearance in Chat, see <a href="https://developers.google.com/workspace/add-ons/chat/configure">Configure a Google Chat app.</a></p></td></tr><tr><td><code>drive</code></td><td><p><code>object (Drive)</code></p><p><b>Required if the Google Workspace add-on extends Drive</b>. Appearance and behavior configurations within the Drive host application. If omitted, the add-on is disabled in Drive.</p></td></tr><tr><td><code>gmail</code></td><td><p><code>object (Gmail)</code></p><p><b>Required if the Google Workspace add-on extends Gmail</b>. Appearance and behavior configurations within the Gmail host application. If omitted, the add-on is disabled in Gmail.</p></td></tr><tr><td><code>docs</code></td><td><p><code>object (Docs)</code></p><p><b>Required if the Google Workspace add-on extends Docs</b>. Appearance and behavior configurations within the Docs host application. If omitted, the add-on is disabled in Docs.</p></td></tr><tr><td><code>sheets</code></td><td><p><code>object (Sheets)</code></p><p><b>Required if the Google Workspace add-on extends Sheets</b>. Appearance and behavior configurations within the Sheets host application. If omitted, the add-on is disabled in Sheets.</p></td></tr><tr><td><code>slides</code></td><td><p><code>object (Slides)</code></p><p><b>Required if the Google Workspace add-on extends Slides</b>. Appearance and behavior configurations within the Slides host application. If omitted, the add-on is disabled in Slides.</p></td></tr><tr><td><code>meet</code></td><td><p><code>object (Meet)</code></p><p><b>Required if the Google Workspace add-on extends Meet</b>. Appearance and behavior configurations within the Meet host application. If omitted, the add-on is disabled in Meet.</p></td></tr></tbody></table>

### Common

Manifest configuration for parameters common to every [host application](../../workspace/add-ons/guides/glossary.md#host_or_host_application). Values defined here serve as defaults when specific values for a host are omitted.

JSON representation

```
{
  "homepageTrigger": {
    object (HomepageTrigger)
  },
  "layoutProperties": {
    object (LayoutProperties)
  },
  "logoUrl": string,
  "name": string,
  "openLinkUrlPrefixes": [
    string
  ],
  "universalActions": [
    {
      object (UniversalAction)
    }
  ],
  "useLocaleFromApp": boolean
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>homepageTrigger</code></td><td><p><code>object (HomepageTrigger)</code></p>The default trigger function for the add-on <a href="https://developers.google.com/workspace/add-ons/concepts/homepages">homepage</a>. This specification is used if a host-specific homepage trigger isn't defined. If omitted, a generic homepage card is used.</td></tr><tr><td><code>layoutProperties</code></td><td><p><code>object (LayoutProperties)</code></p>Configuration for the colors used in the add-on toolbar and buttons.</td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p><b>Required.</b> The name of the add-on shown in the toolbar.</p></td></tr><tr><td><code>openLinkUrlPrefixes[]</code></td><td><p><code>string</code></p><p><b>Required if the add-on displays outbound links within widgets using an <a href="https://developers.google.com/apps-script/reference/card-service/open-link"><code>OpenLink</code></a> or text widget using HTML anchor tags.</b> A list of HTTPS URL prefixes. To protect user data, links rendered by the add-on must match a prefix in this list.</p><p>See <a href="https://developers.google.com/apps-script/add-ons/concepts/workspace-manifests#allowlist">Allowlist URLs</a> for details.</p></td></tr><tr><td><code>universalActions[]</code></td><td><p><code>object (UniversalAction)</code></p>List of <a href="https://developers.google.com/workspace/add-ons/how-tos/universal-actions">universal actions</a> always available in the add-on UI.</td></tr><tr><td><code>useLocaleFromApp</code></td><td><p><code>boolean</code></p><p>If <code>true</code>, add-on <a href="https://developers.google.com/workspace/add-ons/concepts/event-objects">event objects</a> passed to <a href="https://developers.google.com/workspace/add-ons/concepts/actions#callback-functions">action callback functions</a> or trigger functions include the user locale and timezone. Defaults to <code>false</code>.</p><p>See <a href="https://developers.google.com/workspace/add-ons/how-tos/access-user-locale">Accessing user locale and timezone</a> for details.</p></td></tr></tbody></table>

### LayoutProperties

Configuration for the Google Workspace add-on toolbar and button appearance.

JSON representation

```
{
  "primaryColor": string,
  "secondaryColor": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>primaryColor</code></td><td><p><code>string</code></p>Toolbar color. Defaults to grey (#424242).</td></tr><tr><td><code>secondaryColor</code></td><td><p><code>string</code></p>Default button color. Defaults to the primary color if set; otherwise defaults to blue (#2196F3).</td></tr></tbody></table>

### UniversalAction

Configuration for a [universal action](../../workspace/add-ons/how-tos/universal-actions.md). When selected, a universal action opens a URL or runs a Apps Script function.

JSON representation

```
{
  "label": string,

  // Union field rule can be only one of the following:
  "openLink": string,
  "runFunction": string,
  // End of list of possible types for union field rule.

}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>label</code></td><td><p><code>string</code></p><b>Required for each universal action.</b> The UI menu text for this action.</td></tr><tr><td><code>openLink</code></td><td><p><code>string</code></p><b>Required for each universal action if <code>runFunction</code> is missing.</b> The URL that opens in a tab when selected.</td></tr><tr><td><code>runFunction</code></td><td><p><code>string</code></p><b>Required for each universal action if <code>openLink</code> is missing.</b> The name of the Apps Script function that executes when selected.<p>See the <a href="https://developers.google.com/workspace/add-ons/how-tos/universal-actions">Universal actions</a> guide for details.</p></td></tr></tbody></table>
