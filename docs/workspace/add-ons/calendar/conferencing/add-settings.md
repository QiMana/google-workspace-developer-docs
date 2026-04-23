---
source: https://developers.google.com/workspace/add-ons/calendar/conferencing/add-settings
root: workspace
fetched_at: 2026-04-23T15:22:31.464Z
---

# Add conferencing add-on settings

## Page Summary

- Google Workspace add-ons for conferencing can include optional settings pages built with standard HTML and CSS, hosted externally or within Apps Script.
- Add-on settings allow users to control details like logging out of the third-party system and are accessed via Google Calendar's settings.
- When building an external settings page, ensure elements interact correctly with the conferencing system and the add-on manifest links to its URL.
- Apps Script web apps offer an alternative hosting option, enabling communication with Google servers and dynamic content through templates.
- When using Apps Script for settings pages, maintain consistent project version numbers across deployments to ensure proper functionality.

Google Workspace add-ons that add conferencing solutions often have details that should be controlled by the user from an add-on *settings page*. For example, it is common to have a button or control that lets a user log out of the third-party conference system.

Add-on setting pages are optional. The following sections describe how to open an add-on's setting page and how to build a setting page.

## Open add-on settings

Settings for conferencing add-ons are accessible from the Calendar settings menu. Open the settings page of an add-on you have installed by doing the following:

1. Open [Google Calendar](https://calendar.google.com/).
2. Click the icon and select **Settings**.
3. In the left navigation panel, select **add-ons** to jump to the installed add-on list.
4. Click the **Settings** button that appears to the right of the add-on name to open the settings page for that add-on; this causes Calendar to open the settings page URL.

If an add-on does not define a settings page, the **Settings** button does not appear.

## Build a settings page

A settings page is built using standard HTML and CSS. When designing your page, follow the [add-on style guidelines](https://developers.google.com/workspace/add-ons/guides/workspace-style).

When a user adjusts the add-on settings, the page should send requests to the third-party conferencing system to enact those changes. The page can also store and retrieve information from the add-on project [user properties](https://developers.google.com/apps-script/reference/properties) as needed.

### Hosted on an external web server

You can host your add-on setting page externally from the add-on script project, perhaps as part of the third-party conferencing website.

To link an add-on to an external setting page, do the following:

1. Build the page and host it externally. When adding elements to the page, ensure they communicate correctly with the third-party conferencing system and make the appropriate changes for that user.
2. In the add-on script project, implement a function that returns the URL for the external page.
3. Specify the name of this function as the `calendar.createSettingsFunction` field in the add-on project [manifest](https://developers.google.com/workspace/add-ons/concepts/workspace-manifests#manifest_structure_for_g_suite_add-ons).

### Hosted within Apps Script

You can provide a settings page for your add-on by using an Apps Script [web app](https://developers.google.com/apps-script/guides/web). As a web app, your add-on script project can build and deploy the page, which is then hosted on the Apps Script servers.

See the [HTML Service guide](https://developers.google.com/apps-script/guides/html#serve_html_as_a_web_app) for details on how to build HTML for web apps. Your settings page can [communicate with the Google servers](https://developers.google.com/apps-script/guides/html/communication) as needed. You can also make use of [templates](https://developers.google.com/apps-script/guides/html/templates) in the page to make it more dynamic.

The [Calendar conferencing add-on example](https://developers.google.com/workspace/add-ons/samples/conferencing-sample) shows how to construct a web app settings page.
