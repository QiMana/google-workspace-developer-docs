---
source: https://developers.google.com/workspace/add-ons/drive/building-drive-interfaces
root: workspace
fetched_at: 2026-04-23T15:22:42.808Z
---

# Building Google Drive interfaces

## Page Summary

- Google Workspace add-ons extend Google Drive functionality by offering custom interfaces for automation, insights, and third-party integrations.
- Add-ons can provide a homepage within Google Drive and a contextual interface that appears when Drive items are selected.
- Developers build these interfaces using Apps Script, defining triggers and functions in the add-on's manifest file.
- Add-ons utilize event objects, including Drive-specific data, to tailor their behavior based on user interactions and selected items.
- When multiple items are selected in Google Drive, add-ons can access both the active cursor item and the full list of selected items for context.

Google Workspace add-ons can provide customized interfaces when the user is using Google Drive. This lets you provide the user with additional relevant information, automate tasks, and connect third-party systems to Google Drive.

## Accessing the add-on UI

You can open a Google Workspace add-on in Google Drive if its icon appears in the icon column on the right side of the Drive user interface. A Google Workspace add-on can define a homepage interface, an item select interface, or both:

- If a user clicks the add-on icon while in Google Drive, the add-on executes the corresponding [`drive.homepageTrigger`](../../../apps-script/manifest/drive-addons.md#Drive.FIELDS.homepageTrigger) function (if present). This function builds and returns a [homepage card](../concepts/homepages.md) to Google Drive for display. If no [`drive.homepageTrigger`](../../../apps-script/manifest/drive-addons.md#Drive.FIELDS.homepageTrigger) function is defined, a generic homepage card is displayed instead.
- If the user selects one or more items in Google Drive and then clicks the add-on icon, or selects items while the add-on is open, the add-on executes the corresponding [`drive.onItemsSelectedTrigger`](../../../apps-script/manifest/drive-addons.md#Drive.FIELDS.onItemsSelectedTrigger) contextual function (if present). This function builds the add-on's Google Drive [contextual "items selected" interface](#drive_contextual_interface_for_items_selected) and returns it to Google Drive for display.

## Building the add-on Drive interface

You can build interfaces that extend Google Drive by following these general steps:

1. Decide whether you want your add-on to have a Drive-specific [homepage](../concepts/homepages.md). Also decide if you want to provide a contextual interface for when the user selects Drive items.
2. Add the appropriate [`addOns.common`](../../../apps-script/manifest/addons.md#AddOns.FIELDS.common) and [`addOns.drive`](../../../apps-script/manifest/addons.md#AddOns.FIELDS.drive) fields to the add-on script project [manifest](../concepts/workspace-manifests.md), including any [Drive scopes](../concepts/workspace-scopes.md#drive_scopes) required.
3. If you are providing a [Drive-specific homepage](#drive_homepages), implement the [`drive.homepageTrigger`](../../../apps-script/manifest/drive-addons.md#Drive.FIELDS.homepageTrigger) function to build this interface. You can also choose to use the [`common.homepageTrigger`](../../../apps-script/manifest/addons.md#Common.FIELDS.homepageTrigger) interface for multiple Google Workspace hosts.
4. If you are providing a Drive contextual item selection interface, you must implement a [`drive.onItemsSelectedTrigger`](../../../apps-script/manifest/drive-addons.md#Drive.FIELDS.onItemsSelectedTrigger) contextual trigger function to build this interface. See [Drive contextual interface for items selected](#drive_contextual_interface_for_items_selected)) for details.
5. Implement the associated callback functions needed to respond to the user's UI interactions, such as button clicks.

### Drive homepages

Google Drive supports displaying Google Workspace add-on [homepages](../concepts/homepages.md). To show your add-on's common homepage in Google Drive simply make sure there is a [`addOns.drive`](../../../apps-script/manifest/addons.md#AddOns.FIELDS.drive) field in the add-on's manifest.

Alternatively, add a [`drive.homepageTrigger`](../../../apps-script/manifest/drive-addons.md#Drive.FIELDS.homepageTrigger) to the add-on manifest to provide a Drive-specific homepage.

In either case, you must provide the name of a homepage trigger function in your add-on's script project. This function is automatically called to build the Drive homepage when it is needed. You must implement this function to build and return a single [`Card`](../../../apps-script/reference/card-service/card.md) or an array of [`Card`](../../../apps-script/reference/card-service/card.md) objects that make up the homepage. The homepage trigger function is passed an [event object](../concepts/event-objects.md) as a parameter that contains some general information such as the client's platform. You can use the event object data to tailor the construction of the homepage.

### Drive contextual interface for items selected

Google Drive relies on a contextual trigger to determine what interface (if any) to display when the user selects one or more Google Drive items. When the trigger fires, it executes the contextual trigger function specified by the [`drive.onItemsSelectedTrigger.runFunction`](../../../apps-script/manifest/drive-addons.md#OnItemsSelectedTrigger.FIELDS.runFunction) field in the add-on [manifest](../concepts/workspace-manifests.md).

To create a contextual item selection interface for Drive, you must do the following:

1. Ensure the add-on's manifest includes the `https://www.googleapis.com/auth/drive.addons.metadata.readonly` [scope](../concepts/workspace-scopes.md#drive_scopes)
2. Ensure the manifest includes a [`drive.onItemsSelectedTrigger`](../../../apps-script/manifest/drive-addons.md#Drive.FIELDS.onItemsSelectedTrigger) section.
3. Implement the function named in the [`drive.onItemsSelectedTrigger`](../../../apps-script/manifest/drive-addons.md#Drive.FIELDS.onItemsSelectedTrigger) field. This function accepts an [event object](#event_objects) as an argument and must return either a single [`Card`](../../../apps-script/reference/card-service/card.md) object or an array of [`Card`](../../../apps-script/reference/card-service/card.md) objects.
4. As with any card, you must implement any callback functions used to provide widget interactivity for the interface. For example, if you include a button in the interface, it should have an attached [Action](../../../apps-script/reference/card-service/action.md) and an implemented callback function that run when the button is clicked.

### Event objects

An [event object](../concepts/event-objects.md) is created and passed to the [`drive.homepageTrigger`](../../../apps-script/manifest/drive-addons.md#Drive.FIELDS.homepageTrigger) or [`drive.onItemsSelectedTrigger`](../../../apps-script/manifest/drive-addons.md#Drive.FIELDS.onItemsSelectedTrigger) trigger function when those functions are called. The trigger function can use the information in this event object to determine how to construct add-on cards or otherwise control the add-on behavior.

The full structure of event objects is described in [Event objects](../concepts/event-objects.md). When Drive is the acting host app of the add-on, contextual event objects include the [Drive event object](../concepts/event-objects.md#drive_event_object) field that carries Drive-specific client information.

Contextual Drive event objects for item selection triggers include information about the items the user has selected when the trigger fires. When a user selects more than one item in Drive, one of the items is deemed to be one of primary interest; this item is referred to as the *active cursor item*.

The following example shows a [Drive event object](../concepts/event-objects.md#drive_event_object) that is passed to a [`drive.onItemsSelectedTrigger`](../../../apps-script/manifest/drive-addons.md#Drive.FIELDS.onItemsSelectedTrigger) function:

```
{
  "commonEventObject": { ... },
  "drive": {
    "activeCursorItem":{
      "addonHasFileScopePermission": true,
      "id":"0B_sX1fXRRU6Ac3RhcnRlcl9maWxl",
      "iconUrl": "https://drive-thirdparty.googleusercontent.com...",
      "mimeType":"application/pdf",
      "title":"How to get started with Drive"
    },
    "selectedItems": [
      {
        "addonHasFileScopePermission": true,
        "id":"0B_sX1fXRRU6Ac3RhcnRlcl9maWxl",
        "iconUrl":"https://drive-thirdparty.googleusercontent.com...",
        "mimeType":"application/pdf",
        "title":"How to get started with Drive"
      },
      ...
    ]
  },
  ...
}
```
