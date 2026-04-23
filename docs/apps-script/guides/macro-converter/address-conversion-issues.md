---
source: https://developers.google.com/apps-script/guides/macro-converter/address-conversion-issues
root: apps-script
fetched_at: 2026-04-23T15:18:23.680Z
---

# Address common issues

## Page Summary

- When converting VBA to Apps Script with the Macro Converter, printing behavior might differ, with APIs converting to file output instead of direct printer output.
- Features like certain triggers, Userforms, and some types of Named ranges are not automatically converted and require manual conversion or workarounds.
- Manual steps are provided to recreate Userform dialogues in Apps Script and address unsupported named ranges like Tables.

This guide lists common issues you might encounter when converting Visual Basic for Applications (VBA) code to Apps Script using the Macro Converter.

## Print files

VBA APIs that print files are automatically converted to Apps Script, but might behave differently than the original VBA API. The following table shows two examples:

| VBA API | Behavior in Apps Script |
| --- | --- |
| `PrintOut` | Converts to Apps Script, but the Apps Script API prints to a file instead of a printer. Manually print the PDF file. |
| `PrintToFile` | Converts to Apps Script. The PDF file is saved in your MyDrive folder. |

## Unconverted items

The following features aren't converted by the Macro Converter and need to be converted manually:

- Some types of [Triggers](#triggers)
- [Userforms](#userforms)
- Unsupported types of [Named ranges](#named_ranges)

### Triggers

Two types of triggers, keyboard shortcuts and some event-based triggers, aren't converted by the Macro Converter. In many cases, you can create these triggers manually.

#### Keyboard shortcuts

To add keyboard shortcuts, follow the steps to [import functions as macros](../sheets/macros.md#importing_functions_as_macros).

#### Event-based triggers

Some events from VBA code, like `BeforeClose` or `BeforeSave`, don't have equivalents in Apps Script, but you might be able to create a workaround.

For events like `BeforeClose`, you can create a custom menu or button to click to perform the action that needs to take place before you close the spreadsheet.

Workarounds for the `BeforeSave` event aren't possible because Google Sheets automatically saves changes as you make them.

### Userforms

In VBA, a [*UserForm*](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/userform-object) is a window or dialog in an application's user interface (UI). The Macro Converter doesn't convert UserForms. Manually create them in Apps Script.

#### Create a user form dialogue

1. On your computer, open the converted file in [Sheets](http://sheets.google.com/).
2. At the top, click **Extensions** \> \*\* Apps Script\*\*.
3. At the left of the editor next to "Files," click Add a file **\> HTML**. We recommend that you give the HTML file the same name as your original VBA UserForm.
4. Add the fields and information you want to appear in your form. Learn more about HTML forms at [W3school.com](https://www.w3schools.com/html/html_forms.asp).
5. At the left, click the Apps Script file (GS file) that has your converted code.
6. If you already have an `onOpen` trigger in your code, update it with the following code. If you don't have the `onOpen` trigger in your code, add the following code.
	```
	function onOpen() {
	 SpreadsheetApp.getUi()
	     .createMenu('User Form')
	     .addItem('Show Form', 'showForm')
	     .addToUi();
	}
	function showForm() {
	 var html = HtmlService.createHtmlOutputFromFile('userform_module_name')
	     .setWidth(100)
	     .setTitle('Sign-up for Email Updates');
	 SpreadsheetApp.getUi().showSidebar(html);
	}
	```
7. Replace `userform_module_name` with the name of the HTML file you added.
8. At the top, click Save project .
9. Switch to the Google Sheet and reload the page.
10. At the top of the Google Sheet, click **User Form** > **Show Form**.

### Named ranges

In Excel, named ranges are names given to a single cell or range of cells.

When you convert Excel files to Sheets, certain named range types aren't converted because they are unsupported. The following table lists common examples:

| Unsupported named ranges | Description |
| --- | --- |
| Tables | Not supported in Sheets, but has a workaround.      To recreate this named range in Sheets, add a named range that points to the A1 notation of the table range. Use the same name as the original named range in your VBA code so that the converted code recognizes it. |
| List of ranges | Not supported in Sheets. There isn't a workaround. |

## Related articles

- [Macro Converter Google Workspace add-on overview](./overview.md)
- [Determine if VBA macros are compatible](./compatibility-report.md)
- [Convert VBA macros to Apps Script](./convert-files.md)
- [Fix errors in your converted code](./fix-conversion-errors.md)
- [Watch Macro Converter tutorials](./tutorials.md)
- [List of compatible VBA APIs](./compatible-vba-apis.md)
