---
source: https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder
root: apps-script
fetched_at: 2026-04-23T15:20:59.043Z
---

# Class SpreadsheetTriggerBuilder

## Page Summary

- SpreadsheetTriggerBuilder is a builder used to create triggers for spreadsheets.
- You can create triggers that fire on changes, edits, form submissions, or when the spreadsheet is opened.
- The `create()` method finalizes and returns the trigger.
- Methods like `onChange()`, `onEdit()`, `onFormSubmit()`, and `onOpen()` return the builder for method chaining.

Builder for spreadsheet triggers.

## Detailed documentation

### create()

Creates the trigger and returns it.

#### Return

`Trigger` — The created trigger.

---

### onChange()

Specifies a trigger that fires when the spreadsheet's content or structure is changed.

```
const sheet = SpreadsheetApp.getActive();
ScriptApp.newTrigger('myFunction').forSpreadsheet(sheet).onChange().create();
```

#### Return

`SpreadsheetTriggerBuilder` — A builder for chaining.

---

### onEdit()

Specifies a trigger that fires when the spreadsheet is edited.

```
const sheet = SpreadsheetApp.getActive();
ScriptApp.newTrigger('myFunction').forSpreadsheet(sheet).onEdit().create();
```

#### Return

`SpreadsheetTriggerBuilder` — A builder for chaining.

---

### onFormSubmit()

Specifies a trigger that fires when the spreadsheet has a form submitted to it.

```
const sheet = SpreadsheetApp.getActive();
ScriptApp.newTrigger('myFunction')
    .forSpreadsheet(sheet)
    .onFormSubmit()
    .create();
```

#### Return

`SpreadsheetTriggerBuilder` — A builder for chaining.

---

### onOpen()

Specifies a trigger that fires when the spreadsheet is opened.

```
const sheet = SpreadsheetApp.getActive();
ScriptApp.newTrigger('myFunction').forSpreadsheet(sheet).onOpen().create();
```

#### Return

`SpreadsheetTriggerBuilder` — A builder for chaining.
