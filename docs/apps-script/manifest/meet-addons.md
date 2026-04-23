---
source: https://developers.google.com/apps-script/manifest/meet-addons
root: apps-script
fetched_at: 2026-04-23T15:18:31.878Z
---

# Meet manifest resource

## Page Summary

- Resource configuration for Google Workspace add-ons within Google Meet requires specific components marked as Required in the manifest.
- The Meet configuration includes `web` and `homepageTrigger` fields, with `web` being a required object for defining the add-on's web properties.
- The `web` configuration requires `sidePanelUrl`, `supportsScreenSharing`, `addOnOrigins`, and `logoUrl` fields to define the add-on's side panel, screen sharing support, hosted origins, and logo within Meet.

The resource configuration used to define [Google Workspace add-on](../../workspace/add-ons/concepts/types.md#g_suite_add-ons) content and behavior within Google Meet. Google Workspace add-on manifests must include all components marked as **Required** if they extend Meet.

## Meet

The Google Workspace add-on manifest configuration for Google Meet extensions. See [Extending Meet with Google Workspace add-ons](../../workspace/meet/add-ons/guides/overview.md) for details.

JSON representation

```
{
  "web": {
    object (Web)
  },
  "homepageTrigger": {
    object (HomepageTrigger)
  }
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>web</code></td><td><p><code>object (Web)</code></p><p><b>Required.</b> Web configuration for the Meet Google Workspace add-on.</p></td></tr><tr><td><code>homepageTrigger</code></td><td><p><code>object (HomepageTrigger)</code></p><p>The trigger function for the add-on <a href="https://developers.google.com/workspace/add-ons/concepts/homepages">homepage</a> in the Meet host. This overrides <a href="https://developers.google.com/apps-script/manifest/addons#Common.FIELDS.homepageTrigger"><code>addOns.common.homepageTrigger</code></a>.</p></td></tr></tbody></table>

### Web

Web execution properties.

JSON representation

```
{
  "sidePanelUrl": string,
  "supportsScreenSharing": boolean,
  "addOnOrigins": [
    {
      string: string,
      ...
    }
  ],
  "logoUrl": string,
  "darkModeLogoUrl": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sidePanelUrl</code></td><td><p><code>string</code></p><p><b>Required.</b> The URL for the side panel iframe. This is the entry point for your add-on app.</p></td></tr><tr><td><code>supportsScreenSharing</code></td><td><p><code>boolean</code></p><p><b>Required.</b> Whether the add-on supports screen sharing.</p><p>If <code>false</code>, users must use the add-on to see activity in a collaborative session.<br><br>If <code>true</code>, the initiator can screen share their view of the add-on.</p></td></tr><tr><td><code>addOnOrigins</code></td><td><p><code>string</code></p><p><b>Required.</b> An array of origins where your add-on is hosted. Sub-origins and wildcard subdomains are permitted.<br><br>See <a href="https://developers.google.com/workspace/meet/add-ons/guides/add-on-security">Add-on security</a> for details.</p></td></tr></tbody></table>
