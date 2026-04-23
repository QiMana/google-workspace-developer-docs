---
source: https://developers.google.com/apps-script/reference/base/browser
root: apps-script
fetched_at: 2026-04-23T15:18:45.470Z
---

# Class Browser

## Page Summary

- The Browser class in Google Apps Script provides access to dialog boxes specifically for Google Sheets.
- The methods of the Browser class are only usable within the context of a Google Spreadsheet.
- It is recommended to use Google Workspace dialogs instead of the Browser class methods.
- The Browser class includes methods for creating input boxes and message boxes with varying parameters for prompts, titles, and button sets.
- Scripts utilizing Browser methods require specific authorization scopes related to Google Sheets.

This class provides access to dialog boxes specific to Google Sheets.

The methods in this class are only available for use in the context of a Google Spreadsheet. Please use [Google Workspace dialogs](https://developers.google.com/apps-script/guides/dialogs) instead.

#### See also

- `ButtonSet`

## Detailed documentation

### inputBox(prompt)

Pops up a dialog box with a text input box in the user's browser.

The inputBox method raises a client-side input box that displays the given prompt to the user. Note that this function causes the server-side script to be suspended. It resumes automatically after the user clears the dialog, but JDBC connections don't persist across the suspension.

```
// The code below sets the value of name to the name input by the user, or
// 'cancel'.
const name = Browser.inputBox('Enter your name');
```

This method is not recommended. Instead, use a [UI prompt](https://developers.google.com/apps-script/guides/dialogs#prompt_dialogs).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `prompt` | `String` | The text to be displayed in the dialog box. |

#### Return

`String|null` — The text entered by the user (or 'cancel' for a canceled or dismissed dialog).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### inputBox(prompt, buttons)

Pops up a dialog box with a text input box in the user's browser.

The inputBox method raises a client-side input box that displays the given prompt to the user, and offers a choice of buttons to be displayed. Note that this function causes the server-side script to be suspended. It resumes automatically after the user clears the dialog, but JDBC connections don't persist across the suspension.

```
// The code below sets the value of name to the name input by the user, or
// 'cancel'.
const name = Browser.inputBox('Enter your name', Browser.Buttons.OK_CANCEL);
```

This method is not recommended. Instead, use a [UI prompt](https://developers.google.com/apps-script/guides/dialogs#prompt_dialogs).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `prompt` | `String` | The text to be displayed in the dialog box. |
| `buttons` | `ButtonSet` | The type of button set to use. |

#### Return

`String|null` — The text entered by the user (or 'cancel' for a canceled or dismissed dialog).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### inputBox(title, prompt, buttons)

Pops up a dialog box with a text input box in the user's browser.

The inputBox method raises a client side input box with the given title, that displays the given prompt to the user, and offers a choice of buttons to be displayed. Note that this function causes the server-side script to be suspended. It resumes automatically after the user clears the dialog, but JDBC connections don't persist across the suspension.

```
// The code below sets the value of name to the name input by the user, or
// 'cancel'.
const name = Browser.inputBox(
    'ID Check',
    'Enter your name',
    Browser.Buttons.OK_CANCEL,
);
```

This method is not recommended. Instead, use a [UI prompt](https://developers.google.com/apps-script/guides/dialogs#prompt_dialogs).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title for the dialog box. |
| `prompt` | `String` | The text to be displayed in the dialog box. |
| `buttons` | `ButtonSet` | The type of button set to use. |

#### Return

`String|null` — The text entered by the user (or 'cancel' for a canceled or dismissed dialog).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### msgBox(prompt)

Pops up a dialog box with the given message and an OK button in the user's browser.

The msgBox method raises a client-side message box that displays the given message to the user. Note that this method causes the server-side script to be suspended. It resumes automatically after the user clears the dialog, but JDBC connections don't persist across the suspension.

```
// The code below displays "hello world" in a dialog box with an OK button
Browser.msgBox('hello world');
```

This method is not recommended. Instead, use a [UI alert](https://developers.google.com/apps-script/guides/dialogs#alert_dialogs) dialog.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `prompt` | `String` | The text to be displayed in the dialog box. |

#### Return

`String|null` — The lower case text of the button that is clicked by the user (or 'cancel' for a dismissed dialog).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### msgBox(prompt, buttons)

Pops up a dialog box with the given message and specified buttons in the user's browser.

The msgBox method raises a client-side message box that displays the given message to the user, and offers a choice of buttons to be displayed. Note that this method causes the server-side script to be suspended. It resumes automatically after the user clears the dialog, but JDBC connections don't persist across the suspension.

```
// The code below displays "hello world" in a dialog box with OK and Cancel
// buttons.
Browser.msgBox('hello world', Browser.Buttons.OK_CANCEL);
```

This method is not recommended. Instead, use a [UI alert](https://developers.google.com/apps-script/guides/dialogs#alert_dialogs) dialog.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `prompt` | `String` | The text to be displayed in the dialog box. |
| `buttons` | `ButtonSet` | The type of button set to use. |

#### Return

`String|null` — The lower case text of the button that is clicked by the user (or 'cancel' for a dismissed dialog).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### msgBox(title, prompt, buttons)

Pops up a dialog box with the given title, message and specified buttons in the user's browser.

The msgBox method raises a client-side message box with the given title, that displays the given message to the user, and offers a choice of buttons to be displayed. Note that this method causes the server-side script to be suspended. It resumes automatically after the user clears the dialog, but JDBC connections don't persist across the suspension.

```
// The code below displays "hello world" in a dialog box with a custom title and
// Yes and No buttons
Browser.msgBox('Greetings', 'hello world', Browser.Buttons.YES_NO);
```

This method is not recommended. Instead, use a [UI alert](https://developers.google.com/apps-script/guides/dialogs#alert_dialogs) dialog.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title of the dialog box. |
| `prompt` | `String` | The text to be displayed in the dialog box. |
| `buttons` | `ButtonSet` | The type of button set to use. |

#### Return

`String|null` — The lower case text of the button that is clicked by the user (or 'cancel' for a dismissed dialog).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
