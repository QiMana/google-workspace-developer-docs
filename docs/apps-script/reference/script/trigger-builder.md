---
source: https://developers.google.com/apps-script/reference/script/trigger-builder
root: apps-script
fetched_at: 2026-04-23T15:20:58.239Z
---

# Class TriggerBuilder

## Page Summary

- TriggerBuilder is a generic builder used for creating script triggers in Apps Script.
- It provides methods to create trigger builders for specific Google services such as Documents, Forms, Spreadsheets, and Calendar.
- TriggerBuilder also allows the creation of time-based triggers using the `timeBased()` method.
- Each method returns a specialized builder for the respective service or time-based triggers.
- Creating triggers requires appropriate authorization scopes depending on the service being used.

A generic builder for script triggers.

## Detailed documentation

### forDocument(document)

Creates and returns a `DocumentTriggerBuilder` tied to the given document.

```
ScriptApp.newTrigger('myFunction')
    .forDocument(DocumentApp.getActiveDocument())
    .onOpen()
    .create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `document` | `Document` | The document. |

#### Return

`DocumentTriggerBuilder` — The new DocumentTriggerBuilder.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### forDocument(key)

Creates and returns a `DocumentTriggerBuilder` tied to the document with the given ID.

```
ScriptApp.newTrigger('myFunction')
    .forDocument('1234567890abcdefghijklmnopqrstuvwxyz')
    .onOpen()
    .create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | The ID for the document. |

#### Return

`DocumentTriggerBuilder` — The new DocumentTriggerBuilder.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### forForm(form)

Creates and returns a `FormTriggerBuilder` tied to the given form.

```
ScriptApp.newTrigger('myFunction')
    .forForm(FormApp.getActiveForm())
    .onFormSubmit()
    .create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `form` | `Form` | The form. |

#### Return

`FormTriggerBuilder` — The new FormTriggerBuilder.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### forForm(key)

Creates and returns a `FormTriggerBuilder` tied to the form with the given ID.

```
ScriptApp.newTrigger('myFunction')
    .forForm('1234567890abcdefghijklmnopqrstuvwxyz')
    .onFormSubmit()
    .create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | The ID for the form. |

#### Return

`FormTriggerBuilder` — The new FormTriggerBuilder.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### forSpreadsheet(sheet)

Creates and returns a `SpreadsheetTriggerBuilder` tied to the given spreadsheet.

```
ScriptApp.newTrigger('myFunction')
    .forSpreadsheet(SpreadsheetApp.getActive())
    .onEdit()
    .create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sheet` | `Spreadsheet` | The spreadsheet. |

#### Return

`SpreadsheetTriggerBuilder` — The new SpreadsheetTriggerBuilder.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### forSpreadsheet(key)

Creates and returns a `SpreadsheetTriggerBuilder` tied to the spreadsheet with the given ID.

```
ScriptApp.newTrigger('myFunction')
    .forSpreadsheet('1234567890abcdefghijklmnopqrstuvwxyz')
    .onEdit()
    .create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | The ID for the spreadsheet. |

#### Return

`SpreadsheetTriggerBuilder` — The new SpreadsheetTriggerBuilder.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### forUserCalendar(emailId)

Returns a builder for building calendar triggers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailId` | `String` | Email ID of the user calendar the trigger monitors. |

#### Return

`CalendarTriggerBuilder` — The new CalendarTriggerBuilder.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.googleapis.com/auth/calendar.events`
- `https://www.googleapis.com/auth/calendar.events.readonly`
- `https://www.google.com/calendar/feeds`

---

### timeBased()

Creates and returns a `ClockTriggerBuilder` for building time-based triggers.

```
ScriptApp.newTrigger('myFunction').timeBased().atDate(2013, 10, 31).create();
```

#### Return

`ClockTriggerBuilder` — The new ClockTriggerBuilder.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.scriptapp`
