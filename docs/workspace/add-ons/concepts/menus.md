---
source: https://developers.google.com/workspace/add-ons/concepts/menus
root: workspace
fetched_at: 2026-04-23T15:22:41.528Z
---

# Custom menus for Editor add-ons

## Page Summary

- Published Editor Add-ons can create custom menu items under the Extensions menu using `Ui.createAddonMenu()` and `Menu.addItem()`, typically within the add-on's `onOpen(e)` method.
- While unpublished add-ons can create top-level menus, it's recommended to use `Ui.createAddonMenu()` for published add-ons to ensure consistent user experience.
- Add-ons must create an initial menu before user authorization and adjust menu items dynamically based on the authorization mode (`ScriptApp.AuthMode`) to avoid errors.
- The provided example demonstrates building a dynamic add-on menu that adapts to different authorization modes, using `ScriptApp.AuthMode.NONE` to control actions requiring authorization.

Published [Editor add-ons](https://developers.google.com/workspace/add-ons/concepts/types#editor_add-ons) can create custom menu items under their editor's **Extensions** menu. Insert an add-on menu using `Ui.createAddonMenu` and add items to it with `Menu.addItem`. Menus are usually created in the add-on's `onOpen` method.

Create dynamic menus that change based on user interactions or add-on state. However, add-ons must create an initial menu *before* the add-on is authorized by the user. Because of this, check the add-on's [authorization mode](https://developers.google.com/workspace/add-ons/concepts/editor-auth-lifecycle#authorization_modes) prior to constructing menus in `onOpen`. Don't take any action that requires authorization (such as checking script [`Properties`](https://developers.google.com/apps-script/reference/properties)) while the add-on is in `ScriptApp.AuthMode.NONE`. See the [authorization lifecycle](https://developers.google.com/workspace/add-ons/concepts/editor-auth-lifecycle#the_complete_lifecycle) for more details on the authorization modes and lifecycle.

Attempting to take actions that require authorization when the authorization mode is `ScriptApp.AuthMode.NONE` results in an error. This might prevent your add-on menus from being displayed.

The following example shows how to build a dynamic add-on menu for different authorization modes:

```
function onOpen(e) {
  // Or DocumentApp, SlidesApp, or FormApp.
  var menu = SpreadsheetApp.getUi().createAddonMenu();
  if (e && e.authMode == ScriptApp.AuthMode.NONE) {
    // Add a normal menu item (works in all authorization modes).
    menu.addItem('Start workflow', 'startWorkflow');
  } else {
    // Add a menu item based on properties (doesn't work in AuthMode.NONE).
    var properties = PropertiesService.getDocumentProperties();
    var workflowStarted = properties.getProperty('workflowStarted');
    if (workflowStarted) {
      menu.addItem('Check workflow status', 'checkWorkflow');
    } else {
      menu.addItem('Start workflow', 'startWorkflow');
    }
    // Record analytics.
    UrlFetchApp.fetch('http://www.example.com/analytics?event=open');
  }
  menu.addToUi();
}
```
