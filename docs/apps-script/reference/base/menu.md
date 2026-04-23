---
source: https://developers.google.com/apps-script/reference/base/menu
root: apps-script
fetched_at: 2026-04-23T15:18:46.699Z
---

# Class Menu

## Page Summary

- Custom menus are part of the user interface for a Google App and can only be interacted with by container-bound scripts.
- The provided example demonstrates how to create a custom menu with items, a separator, and a submenu using Apps Script.
- Key methods for creating a custom menu include `addItem` to add menu options, `addSeparator` for visual separation, `addSubMenu` to add nested menus, and `addToUi` to display the menu.
- Each menu method returns the `Menu` object for chaining except for `addToUi`, which returns `void`.

A custom menu in an instance of the user interface for a Google App. A script can only interact with the UI for the current instance of an open document or form, and only if the script is [container-bound](../../guides/bound.md) to the document or form. For more information, see the [guide to menus](../../guides/menus.md).

```
// Add a custom menu to the active spreadsheet, including a separator and a
// sub-menu.
function onOpen(e) {
  SpreadsheetApp.getUi()
      .createMenu('My Menu')
      .addItem('My Menu Item', 'myFunction')
      .addSeparator()
      .addSubMenu(
          SpreadsheetApp.getUi()
              .createMenu('My Submenu')
              .addItem('One Submenu Item', 'mySecondFunction')
              .addItem('Another Submenu Item', 'myThirdFunction'),
          )
      .addToUi();
}
```

## Detailed documentation

### addItem(caption, functionName)

Adds an item to the menu. The label for a menu item should be in sentence case (only the first word capitalized).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `caption` | `String` | The label for the menu item, with only the first word capitalized. |
| `functionName` | `String` | The name of the function to invoke when the user selects the item. You can use functions from included libraries, such as `Library.libFunction1`. |

#### Return

`Menu` — This `Menu`, for chaining.

---

### addToUi()

Inserts the menu into the instance of the editor's user interface.
