---
source: https://developers.google.com/apps-script/reference/script/auth-mode
root: apps-script
fetched_at: 2026-04-23T15:20:57.067Z
---

# Enum AuthMode

## Page Summary

- AuthMode is an enumeration in Apps Script that identifies the categories of authorized services triggered functions can execute.
- AuthMode values are exposed as the `authMode` property of the event parameter `e` in triggered functions.
- You can reference an AuthMode enum by calling its parent class, name, and property, such as `ScriptApp.AuthMode.CUSTOM_FUNCTION`.
- The AuthMode has properties like `NONE`, `CUSTOM_FUNCTION`, `LIMITED`, and `FULL`, each representing a different level of access to authorized services.

An enumeration that identifies which categories of authorized services Apps Script is able to execute through a triggered function. These values are exposed in [triggered functions](../../guides/triggers.md) as the `authMode` property of the [event parameter](../../guides/triggers/events.md), `e`. For more information, see the [guide to the authorization lifecycle for add-ons](../../../workspace/add-ons/concepts/editor-auth-lifecycle.md#authorization_modes).

To call an enum, you call its parent class, name, and property. For example, ` ScriptApp.AuthMode.CUSTOM_FUNCTION`.

```
function onOpen(e) {
  const menu = SpreadsheetApp.getUi().createAddonMenu();
  if (e && e.authMode === ScriptApp.AuthMode.NONE) {
    // Add a normal menu item (works in all authorization modes).
    menu.addItem('Start workflow', 'startWorkflow');
  } else {
    // Add a menu item based on properties (doesn't work in AuthMode.NONE).
    const properties = PropertiesService.getDocumentProperties();
    const workflowStarted = properties.getProperty('workflowStarted');
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
