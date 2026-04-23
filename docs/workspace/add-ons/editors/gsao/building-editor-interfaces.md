---
source: https://developers.google.com/workspace/add-ons/editors/gsao/building-editor-interfaces
root: workspace
fetched_at: 2026-04-23T15:22:44.544Z
---

# Build Google editor interfaces

## Page Summary

- Google Workspace add-ons provide custom interfaces within Google Docs, Sheets, and Slides, enabling you to display relevant information, automate tasks, and connect to external systems.
- Add-ons offer various interface types including homepages (common or editor-specific), REST API interfaces (requiring file access), and link previews for third-party services.
- You can build add-on interfaces by configuring the manifest, implementing trigger functions (like homepageTrigger or onFileScopeGrantedTrigger), and handling user interactions through callback functions.
- Editor-specific homepages and REST API interfaces can be tailored to the context of the open document using event objects containing information about the client and file access permissions.
- Link preview interfaces require configuration in the manifest and a function to generate preview cards, potentially including an authorization flow for third-party services.

With Google Workspace add-ons, you can provide customized interfaces within the editors, including Google Docs, Google Sheets, and Google Slides. This lets you provide the user with relevant information, automate tasks, and connect third-party systems to the editors.

## Access the add-on UI

You can open Google Workspace add-on in the editors if its icon appears in the Google Workspace quick access side panel in the Docs, Sheets, and Slides user interfaces.

A Google Workspace add-on can present the following interfaces:

- [**Homepage interfaces**](#editor_homepages): If the add-on's manifest includes the trigger [`EDITOR_NAME.homepageTrigger`](../../../../apps-script/manifest/editor-addons.md#Editors.FIELDS.homepageTrigger) for the editor the user opens the add-on in, the add-on builds and returns a [homepage card](../../concepts/homepages.md) specifically for that editor. If the add-on's manifest doesn't include the [`EDITOR_NAME.homepageTrigger`](../../../../apps-script/manifest/editor-addons.md#Editors.FIELDS.homepageTrigger) for the editor the user opens it in, a generic homepage card is displayed instead.
- [**REST API interfaces**](#rest_api_interfaces): If the add-on uses REST APIs, you can include triggers that request per-file access to a document using the `drive.file` scope. Once granted, another trigger called `EDITOR_NAME.onFileScopeGrantedTrigger` executes and displays an interface specific to the file.
- [**Link preview interfaces**](#link-preview): If your add-on integrates with a third-party service, you can build cards that preview content from your service's URLs.

## Build interfaces for Editor add-ons

Build Editor add-on interfaces for the editors by following these steps:

1. Add the appropriate [`addOns.common`](../../../../apps-script/manifest/addons.md#AddOns.FIELDS.common), [`addOns.docs`](../../../../apps-script/manifest/addons.md#AddOns.FIELDS.docs), [`addOns.sheets`](../../../../apps-script/manifest/addons.md#AddOns.FIELDS.sheets), and [`addOns.slides`](../../../../apps-script/manifest/addons.md#AddOns.FIELDS.slides) fields to the add-on script project [manifest](../../concepts/workspace-manifests.md).
2. Add any required [Editor scopes](../../concepts/workspace-scopes.md#editor_scopes) to your script project manifest.
3. If you're providing an [editor-specific homepage](#editor_homepages), implement the [`EDITOR_NAME.homepageTrigger`](../../../../apps-script/manifest/editor-addons.md#Editors.FIELDS.homepageTrigger) function to build the interface. If not, use the [`common.homepageTrigger`](../../../../apps-script/manifest/addons.md#Common.FIELDS.homepageTrigger) interface to build a common homepage for your host apps.
4. If you use REST APIs, implement the `drive.file` scope authorization flow and [`EDITOR_NAME.onFileScopeGrantedTrigger`](../../../../apps-script/manifest/editor-addons.md#Editor.FIELDS.onFileScopeGrantedTrigger) trigger function to display an interface specific to the open file. For more information, see [REST API interfaces](#rest_api_interfaces).
5. If you're configuring link previews from a third-party service, implement the `https://www.googleapis.com/auth/workspace.linkpreview` scope authorization flow and [`linkPreviewTriggers`](../../../../apps-script/manifest/editor-addons.md#Editor.FIELDS.linkPreviewTriggers) function. For more information, see [Link preview interfaces](#link-preview).
6. Implement the associated callback functions needed to respond to the user's UI interactions, such as button clicks.

### Editor homepages

You must provide a homepage trigger function in your add-on's script project that builds and returns a single [`Card`](../../../../apps-script/reference/card-service/card.md) or an array of `Card` objects that make up the add-on's homepage.

The homepage trigger function is passed an [event object](../../concepts/event-objects.md) as a parameter that contains information such as the client's platform. You can use the event object data to tailor the construction of the homepage.

You can present a common homepage or a homepage that is specific to the editor the user opens your add-on in.

#### Display the common homepage

To show your add-on's common homepage in the editors, include the appropriate Editor fields, such as [`addOns.docs`](../../../../apps-script/manifest/addons.md#AddOns.FIELDS.docs), [`addOns.sheets`](../../../../apps-script/manifest/addons.md#AddOns.FIELDS.sheets), or [`addOns.slides`](../../../../apps-script/manifest/addons.md#AddOns.FIELDS.slides), in the add-on's manifest.

The following example shows the `addons` portion of a Google Workspace add-on manifest. The add-on extends Docs, Sheets, and Slides, and shows the common homepage in each host app.

```
{
 "addOns": {
    "common": {
      "name": "Translate",
      "logoUrl": "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
      "layoutProperties": {
        "primaryColor": "#2772ed"
      },
      "homepageTrigger": {
        "runFunction": "onHomepage"
      }
    },
    "docs": {},
    "sheets": {},
    "slides": {}
  }
}
```

#### Display an Editor-specific homepage

To present a homepage specific to an editor, add the [`EDITOR_NAME.homepageTrigger`](../../../../apps-script/manifest/editor-addons.md#Editors.FIELDS.homepageTrigger) to the add-on manifest.

The following example shows the `addons` portion of a Google Workspace add-on manifest. The add-on is enabled for Docs, Sheets, and Slides. It displays the common homepage in Docs and Slides, and a unique homepage in Sheets. The callback function `onSheetsHomepage` builds the Sheets-specific homepage card.

```
"addOns": {
    "common": {
      "name": "Translate",
      "logoUrl": "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
      "layoutProperties": {
        "primaryColor": "#2772ed"
      },
      "homepageTrigger": {
        "runFunction": "onHomepage"
      }
    },
    "docs": {},
    "slides": {},
    "sheets": {
     "homepageTrigger": {
       "runFunction": "onSheetsHomepage"
     },
  }
}
```

### REST API interfaces

If your add-on uses REST APIs, such as the [Google Sheets API](../../../sheets/api/guides/concepts.md), you can use the `onFileScopeGrantedTrigger` function to display a new interface specific to the file that's open in the editor host app.

You must include the `drive.file` scope authorization flow to use the `onFileScopeGrantedTrigger` function. To learn how to request the `drive.file` scope, see [Request file access for current document](./editor-actions.md#request_file_access_for_current_document).

When a user grants the `drive.file` scope, the [`EDITOR_NAME.onFileScopeGrantedTrigger.runFunction`](../../../../apps-script/manifest/editor-addons.md#OnItemsSelectedTrigger.FIELDS.runFunction) fires. When the trigger fires, it executes the contextual trigger function specified by the `EDITOR_NAME.onFileScopeGrantedTrigger.runFunction` field in the add-on manifest.

To create a REST API interface for one of the editors, complete the following steps. Replace `EDITOR_NAME` with the editor host app you choose to use, for example, `sheets.onFileScopeGrantedTrigger`:

1. Include the [`EDITOR_NAME.onFileScopeGrantedTrigger`](../../../../apps-script/manifest/editor-addons.md#Editor.FIELDS.onFileScopeGrantedTrigger) in the appropriate Editor's section of your manifest. For example, if you want to create this interface in Google Sheets, add the trigger to the `"sheets"` section.
2. Implement the function named in the `EDITOR_NAME.onFileScopeGrantedTrigger` section. This function accepts an [event object](./building-editor-interfaces.md#event_objects) as an argument and must return either a single [`Card`](../../../../apps-script/reference/card-service/card.md) object or an array of `Card` objects.
3. As with any card, you must implement the callback functions used to provide widget interactivity for the interface. For example, if you include a button in the interface, it should have an attached [Action](../../../../apps-script/reference/card-service/action.md) and an implemented callback function that runs when the button is clicked.

The following example shows the `addons` portion of a Google Workspace add-on manifest. The add-on uses REST APIs, so the `onFileScopeGrantedTrigger` is included for Google Sheets. When a user grants the `drive.file` scope, the callback function `onFileScopeGrantedSheets` builds a file-specific interface.

```
{
  "addOns": {
    "common": {
      "name": "Productivity add-on",
      "logoUrl": "https://www.gstatic.com/images/icons/material/system_gm/1x/work_outline_black_18dp.png",
      "layoutProperties": {
        "primaryColor": "#669df6",
        "secondaryColor": "#ee675c"
      }
    },
    "sheets": {
      "homepageTrigger": {
        "runFunction": "onEditorsHomepage"
      },
      "onFileScopeGrantedTrigger": {
        "runFunction": "onFileScopeGrantedSheets"
      }
    }
  }
}
```

### Link preview interfaces for third-party services

To turn on link previews for a third-party service, you must configure link previews in your add-on's manifest and create a function that returns a preview card. For services that require user authorization, your function must also invoke the authorization flow.

For steps to turn on link previews, see [Preview links with smart chips](../../guides/preview-links-smart-chips.md).

### Event objects

An event object is created and passed to trigger functions, such as [`EDITOR_NAME.homepageTrigger`](../../../../apps-script/manifest/editor-addons.md#Editors.FIELDS.homepageTrigger) or [`EDITOR_NAME.onFileScopeGrantedTrigger`](../../../../apps-script/manifest/editor-addons.md#Editor.FIELDS.onFileScopeGrantedTrigger). The trigger function uses the information in the event object to determine how to construct add-on cards or otherwise control the add-on behavior.

The full structure of event objects is described in [Event objects](../../concepts/event-objects.md).

When an editor is the acting host app of the add-on, the event objects include [Docs](../../concepts/event-objects.md#docs_event_object), [Sheets](../../concepts/event-objects.md#sheets_event_object), or [Slides](../../concepts/event-objects.md#slides_event_object) event object fields that carry client information.

If the add-on doesn't have `drive.file` scope authorization for the current user or document, the event object only contains the `docs.addonHasFileScopePermission`, `sheets.addonHasFileScopePermission`, or `slides.addonHasFileScopePermission` field. If the add-on does have authorization, the event object contains all editor event object fields.

The following example shows an editor event object that is passed to a `sheets.onFileScopeGrantedTrigger` function. Here, the add-on has the [`drive.file` scope authorization](./editor-actions.md#request_file_access_for_current_document) for the current document:

```
{
  "commonEventObject": { ... },
  "sheets": {
    "addonHasFileScopePermission": true,
    "id":"A_24Q3CDA23112312ED52",
    "title":"How to get started with Sheets"
  },
  ...
}
```
