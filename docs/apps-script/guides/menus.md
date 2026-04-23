---
source: https://developers.google.com/apps-script/guides/menus
root: apps-script
fetched_at: 2026-04-23T15:18:25.945Z
---

# Custom Menus in Google Workspace

## Page Summary

- Apps Script allows extending Google products with user-interface elements like custom menus, images, and drawings that trigger script functions.
- Custom menus can be added to Google Docs, Sheets, Slides, or Forms and are tied to specific script functions.
- Images and drawings in Google Sheets can also have Apps Script functions assigned to them to run when clicked.

Scripts can extend certain Google products by adding user-interface elements that, when clicked, execute an Google Apps Script function. The most common example is running a script from a custom menu item in Google Docs, Google Sheets, Google Slides, or Google Forms, but script functions can also be triggered by clicking on images and drawings in Sheets.

## Custom menus in Docs, Sheets, Slides, or Forms

![](https://developers.google.com/static/apps-script/images/menus.png)

Apps Script can add new menus in Docs, Sheets, Slides, or Forms, with each menu item tied to a function in a script. (In Forms, custom menus are visible only to an editor who opens the form to modify it, not to a user who opens the form to respond.)

Only bound scripts can create menus. To display the menu when the user opens a file, write the menu code within an [`onOpen`](https://developers.google.com/apps-script/understanding_triggers) function.

The following example shows how to add a [menu](https://developers.google.com/apps-script/reference/base/menu) with one item, followed by a [visual separator](https://developers.google.com/apps-script/reference/base/menu#addSeparator\(\)), then a [sub-menu](https://developers.google.com/apps-script/reference/base/menu#addSubMenu\(Menu\)) that contains another item. When the user selects either menu item, a corresponding function opens an [alert](https://developers.google.com/apps-script/reference/base/ui#alert\(String\)) dialog. For more information on the types of dialogs you can open, see the [guide to dialogs and sidebars](https://developers.google.com/apps-script/guides/dialogs).

```
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  // Or DocumentApp, SlidesApp or FormApp.
  ui.createMenu('Custom Menu')
      .addItem('First item', 'menuItem1')
      .addSeparator()
      .addSubMenu(ui.createMenu('Sub-menu')
          .addItem('Second item', 'menuItem2'))
      .addToUi();
}

function menuItem1() {
  SpreadsheetApp.getUi() // Or DocumentApp, SlidesApp or FormApp.
      .alert('You clicked the first menu item!');
}

function menuItem2() {
  SpreadsheetApp.getUi() // Or DocumentApp, SlidesApp or FormApp.
      .alert('You clicked the second menu item!');
}
```

A document, spreadsheet, presentation, or form can only contain one menu with a given name. If the same script or another script adds a menu with the same name, the new menu replaces the old. Menus cannot be removed while the file is open, although you can write your `onOpen` function to skip the menu in the future if a certain [property](https://developers.google.com/apps-script/guides/properties) is set.

[Editor add-ons](https://developers.google.com/workspace/add-ons/concepts/types#editor_add-ons) can have menu items as well, but use [special rules](https://developers.google.com/workspace/add-ons/concepts/menus) for how they are defined.

## Clickable images and drawings in Sheets

![](https://developers.google.com/static/apps-script/images/drawing.png)

You can also assign an Apps Script function to an image or drawing in Sheets, provided the script is bound to the spreadsheet. The following example shows how to set this up.

1. In Sheets, select the menu item **Extensions** \> **Apps Script** to create a script that is bound to the spreadsheet.
2. Delete any code in the script editor and paste in the code below.

```
function showMessageBox() {
  SpreadsheetApp.getUi().alert('You clicked it!');
}
```

1. Return to Sheets and insert an image or drawing by selecting **Insert > Image** or **Insert > Drawing**.
2. After inserting the image or drawing, click it. A small drop-down menu selector appears in the top right-hand corner. Click it and choose **Assign script**.
3. In the dialog that appears, type the name of the Apps Script function that you want to run, without parentheses — in this case, `showMessageBox`. Click **OK**.
4. Click the image or drawing again. The function now executes.

The script execution is only triggered by clicking the image or drawing in a web browser. The script doesn't execute if the image or drawing is clicked on mobile.
