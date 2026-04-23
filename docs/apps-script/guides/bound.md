---
source: https://developers.google.com/apps-script/guides/bound
root: apps-script
fetched_at: 2026-04-23T15:18:18.878Z
---

# Container-bound Scripts

## Page Summary

- A bound script is attached to a specific Google Sheets, Docs, Slides, or Forms file, called its container.
- Bound scripts behave similarly to standalone scripts but do not appear in Google Drive and cannot be detached from their container.
- Bound scripts have special privileges, including the ability to refer to their parent file without its ID and interact with the parent file's user interface to add custom menus, dialogs, and sidebars.
- Bound scripts can be created from within the Google Docs, Sheets, Slides, or Forms file they will be bound to.
- Bound scripts can use simple and installable triggers, and in Google Sheets, they can be used to create custom functions.

A script is bound to a Google Sheets, Google Docs, Google Slides, or Google Forms file if it was created from that document rather than as a [standalone script](./standalone.md). The file that a bound script is attached to is called a "container." Bound scripts generally behave like standalone scripts except that they don't appear in Google Drive, they can't be detached from the file they are bound to, and they gain a few special privileges over the parent file.

Scripts can also be bound to Google Sites, but these scripts are almost always deployed as [web apps](./web.md). Scripts bound to Sheets, Docs, Slides, or Forms can also become web apps, although this is uncommon.

Bound scripts are effectively unpublished [Google Workspace add-ons](../../workspace/add-ons/concepts/types.md#editor_add-ons) that function only for the file they are bound to.

## Create a bound script

You can create bound scripts in Docs, Sheets, Slides, and Forms.

### Docs, Sheets, or Slides

To create a bound script in Docs, Sheets, or Slides, open a document in Docs, a spreadsheet in Sheets, or a presentation in Slides and click **Extensions** \> **Apps Script**. To reopen the script in the future, do the same thing or open the script from the [Apps Script dashboard](https://script.google.com/home).

### Forms

To create a bound script in Forms, open a form and click **More** \> **Script editor**. To reopen the script in the future, do the same thing or open the script from the [Apps Script dashboard](https://script.google.com/home).

The [`clasp`](./clasp.md) tool can't create bound scripts, but it can clone and edit them.

## Special methods

Bound scripts can call a few methods that standalone scripts can't:

- [`getActiveSpreadsheet`](../reference/spreadsheet/spreadsheet-app.md#getActiveSpreadsheet()), [`getActiveDocument`](../reference/document/document-app.md#getActiveDocument()), [`getActivePresentation`](../reference/slides/slides-app.md#getactivepresentation), and [`getActiveForm`](../reference/forms/form-app.md#getActiveForm()) allow bound scripts to refer to their parent file without referring to the file's ID.
- [`getUi`](../reference/spreadsheet/spreadsheet-app.md#getUi()) lets bound scripts access the user interface for their parent file to add [custom menus, dialogs, and sidebars](#custom_menus_dialogs_and_sidebars).
- In Sheets, [`getActiveSheet`](../reference/spreadsheet/spreadsheet-app.md#getActiveSheet()), [`getActiveRange`](../reference/spreadsheet/spreadsheet-app.md#getActiveRange()), and [`getActiveCell`](../reference/spreadsheet/sheet.md#getActiveCell()) let the script determine the user's current sheet, selected range of cells, or selected individual cell. [`setActiveSheet`](../reference/spreadsheet/spreadsheet-app.md#setActiveSheet(Sheet)) and [`setActiveRange`](../reference/spreadsheet/spreadsheet-app.md#setActiveRange(Range)) let the script change those selections.
- In Docs, [`getActiveTab`](../reference/document/document.md#getActiveTab()), [`getCursor`](../reference/document/document.md#getCursor()), and [`getSelection`](../reference/document/document.md#getSelection()) let the script determine the user's current tab, position of the user's cursor, or selected text. [`setActiveTab`](../reference/document/document.md#setActiveTab(String)), [`setCursor`](../reference/document/document.md#setCursor(Position)) and [`setSelection`](../reference/document/document.md#setSelection(Range)) let the script change those selections.

For more information, see the [guide to extending Sheets](./sheets.md) or the [guide to extending Docs](./docs.md).

These methods are only available to bound scripts run from the script editor, menu items, dialogs, sidebars, or triggers. When a bound script is run as a web app or using the [Google Apps Script API](../api/how-tos/execute.md), these methods aren't available.

## Custom menus, dialogs, and sidebars

Bound scripts can customize Sheets, Docs, and Forms by adding [custom menus](./menus.md) and [dialog boxes or sidebars](./dialogs.md). A script can only interact with the user interface for the current instance of an open file. A script bound to one document can't affect the user interface of another document.

## Triggers

Bound scripts can use [simple triggers](./triggers.md) like the special `onOpen` function, which runs automatically whenever a file is opened by a user who has edit access. Like all types of scripts, they can also use [installable triggers](./triggers/installable.md).

## Custom functions

A [custom function](./sheets/functions.md) is a function in a script bound to Sheets that you call directly from a cell using the syntax `=myFunctionName()`. Custom functions are similar to the hundreds of [built-in functions](https://support.google.com/drive/topic/1361471) in Sheets like [`AVERAGE`](https://support.google.com/drive/answer/3093615) or [`SUM`](https://support.google.com/drive/answer/3093669) except that you define the custom function's behavior.

## Access to bound scripts

Only users who have permission to edit a container can run its bound script. Collaborators who have only view access can't open the script editor. If they make a copy of the container file, they become the owner of the copy and can see and run a copy of the script.

To learn how to share a script's container file, refer to [Share files from Drive](https://support.google.com/drive/answer/2494822).

All container-bound scripts use the same owner, viewer, and editor access list defined for the container file. The container owner takes ownership of a new script project regardless of who created it.
