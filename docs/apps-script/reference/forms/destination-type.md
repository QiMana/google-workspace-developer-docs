---
source: https://developers.google.com/apps-script/reference/forms/destination-type
root: apps-script
fetched_at: 2026-04-23T15:20:12.953Z
---

# Enum DestinationType

## Page Summary

- `DestinationType` is an enum that represents supported types of form-response destinations.
- All forms save a copy of responses in the form's response store, even without an explicitly set destination.
- Destination types can be accessed from `FormApp.DestinationType`.
- An example usage is provided to set a spreadsheet as the response destination for a form.
- The `SPREADSHEET` property indicates a Google Sheets spreadsheet as a destination for form responses.

An enum representing the supported types of form-response destinations. All forms, including those that do not have a destination set explicitly, [save a copy of responses in the form's response store](https://support.google.com/drive/answer/2917686). Destination types can be accessed from `FormApp.DestinationType`.

To call an enum, you call its parent class, name, and property. For example, ` FormApp.DestinationType.SPREADSHEET`.

```
// Open a form by ID and create a new spreadsheet.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const ss = SpreadsheetApp.create('Spreadsheet Name');

// Update the form's response destination.
form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
```
