---
source: https://developers.google.com/apps-script/reference/card-service/overflow-menu
root: apps-script
fetched_at: 2026-04-23T15:19:10.122Z
---

# Class OverflowMenu

## Page Summary

- OverflowMenu holds a list of OverflowMenuItem objects displayed in a pop-up menu.
- OverflowMenu is available for Google Chat apps and in developer preview for Google Workspace add-ons.
- The addMenuItem method is used to add an OverflowMenuItem to the OverflowMenu.
- The addMenuItem method takes an OverflowMenuItem object as a parameter and returns the OverflowMenu object for chaining.

Holds a list of `OverflowMenuItem` objects that are displayed in a pop-up menu.

Available for Google Chat apps. In developer preview for Google Workspace add-ons.

```
const overflowMenuItem = CardService.newOverflowMenuItem();
// Finish building the overflow menu item...

const overflowMenu =
    CardService.newOverflowMenu().addMenuItem(overflowMenuItem);
```

## Detailed documentation

### addMenuItem(menuItem)

Adds a menu item.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `menuItem` | `OverflowMenuItem` | The menu item to add. |

#### Return

`OverflowMenu` — This object, for chaining.
