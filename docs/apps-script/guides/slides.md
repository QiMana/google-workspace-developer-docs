---
source: https://developers.google.com/apps-script/guides/slides
root: apps-script
fetched_at: 2026-04-23T15:18:27.678Z
---

# Extend Google Slides

## Page Summary

- Google Apps Script allows you to programmatically create and modify Google Slides presentations using the Slides service.
- You can customize Google Slides by adding custom menus, dialog boxes, and sidebars with Apps Script.
- Apps Script lets you integrate Slides with other Google services like Calendar, Drive, and Gmail.
- You can publish your Apps Script projects as add-ons for Google Slides to share them with others.

Google Apps Script lets you programmatically create and modify Slides presentations using the [Slides service](../reference/slides/slides-app.md). Use Apps Script to add [custom menus](./menus.md), [dialogs, and sidebars](./dialogs.md) to Slides. You can also integrate Slides with other [Google services](./services.md) like Google Calendar, Google Drive, and Gmail.

The [Slides service](../reference/slides/slides-app.md) is the recommended way of working with Slides in Apps Script. Also enable the [Slides advanced service](../advanced/slides.md) if you need to invoke the [Google Slides API](../../workspace/slides.md) directly.

## Get started

Apps Script includes a [built-in service](../reference/slides/slides-app.md) that lets you programmatically create, read, and edit Slides. Apps Script can interact with Slides in two ways:

1. Any script can create a new presentation or access an existing presentation if the user has the appropriate access permissions for that presentation.
2. A script can be [bound](./bound.md) to a presentation, which provides the script more direct access to the Slides user interface for that script. To create a bound script, select **Extensions** \> **Apps Script** from within Slides.

## Custom menus and user interfaces

Customize Slides by adding custom menus, dialog boxes, and sidebars. To learn the basics of creating menus, see the [guide to menus](./menus.md). To learn about customizing the content of a dialog, see the [guide to HTML service](./html.md#serve_html_as_a_google_docs_sheets_or_forms_user_interface).

If you're planning to publish your custom interface as part of an [Google Workspace add-on](#add-ons), follow the [style guide](../../workspace/add-ons/guides/editor-style.md) for consistency with the style and layout of the Slides editor.

## Google Workspace add-ons for Slides

[Google Workspace add-ons](../../workspace/add-ons/overview.md) are specially packaged Apps Script projects that run inside Slides and can be installed from the Google Slides add-ons store. If you've developed a script for Slides and want to share it with the world, Apps Script lets you [publish](../../workspace/add-ons/how-tos/publish-add-on-overview.md) your script as an add-on so other users can install it from the add-on store.

See the [sample translate add-on](../../workspace/add-ons/editors/slides/quickstart/translate.md) or [sample progress bar add-on](../../workspace/add-ons/editors/slides/quickstart/progress-bar.md) for examples of Slides add-ons.
