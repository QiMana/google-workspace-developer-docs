---
source: https://developers.google.com/apps-script/reference/base/ui.html
root: apps-script
fetched_at: 2026-04-23T15:18:47.428Z
---

# Class Ui

## Page Summary

- The Ui object allows scripts to add UI elements like menus, dialogs, and sidebars to a Google App's user interface.
- Scripts can only interact with the UI of the currently open editor if they are container-bound to that editor.
- The Ui object provides methods to create alert boxes, input prompts, custom menus, modal and modeless dialogs, and sidebars.
- Alert and prompt dialogs suspend the server-side script while open, while modal dialogs, modeless dialogs, and sidebars do not.
- Buttons and ButtonSet are properties of the Ui object used to define and handle button responses in dialogs.

An instance of the user-interface environment for a Google App that allows the script to add features like menus, dialogs, and sidebars. A script can only interact with the UI for the current instance of an open editor, and only if the script is [container-bound](../../guides/bound.md) to the editor.

```
// Display a dialog box with a title, message, input field, and "Yes" and "No"
// buttons. The user can also close the dialog by clicking the close button in
// its title bar.
const ui = SpreadsheetApp.getUi();
const response = ui.prompt(
    'Getting to know you',
    'May I know your name?',
    ui.ButtonSet.YES_NO,
);

// Process the user's response.
if (response.getSelectedButton() === ui.Button.YES) {
  Logger.log('The user\'s name is %s.', response.getResponseText());
} else if (response.getSelectedButton() === ui.Button.NO) {
  Logger.log('The user didn\'t want to provide a name.');
} else {
  Logger.log('The user clicked the close button in the dialog\'s title bar.');
}
```

## Detailed documentation

### alert(prompt)

Opens a dialog box in the user's editor with the given message and an "OK" button. This method suspends the server-side script while the dialog is open. The script resumes after the user dismisses the dialog, but `Jdbc` connections and `LockService` locks don't persist across the suspension. For more information, see the [guide to dialogs and sidebars](../../guides/dialogs.md).

```
// Display "Hello, world" in a dialog box with an "OK" button. The user can also
// close the dialog by clicking the close button in its title bar.
SpreadsheetApp.getUi().alert('Hello, world');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `prompt` | `String` | The message to display in the dialog box. |

#### Return

`Button` — The button the user clicked.

---

### alert(prompt, buttons)

Opens a dialog box in the user's editor with the given message and set of buttons. This method suspends the server-side script while the dialog is open. The script resumes after the user dismisses the dialog, but `Jdbc` connections and `LockService` locks don't persist across the suspension. For more information, see the [guide to dialogs and sidebars](../../guides/dialogs.md).

```
// Display a dialog box with a message and "Yes" and "No" buttons. The user can
// also close the dialog by clicking the close button in its title bar.
const ui = SpreadsheetApp.getUi();
const response = ui.alert(
    'Are you sure you want to continue?',
    ui.ButtonSet.YES_NO,
);

// Process the user's response.
if (response === ui.Button.YES) {
  Logger.log('The user clicked "Yes."');
} else {
  Logger.log(
      'The user clicked "No" or the close button in the dialog\'s title bar.',
  );
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `prompt` | `String` | The message to display in the dialog box. |
| `buttons` | `ButtonSet` | The button set to display in the dialog box. |

#### Return

`Button` — The button the user clicked.

---

### alert(title, prompt, buttons)

Opens a dialog box in the user's editor with the given title, message, and set of buttons. This method suspends the server-side script while the dialog is open. The script resumes after the user dismisses the dialog, but `Jdbc` connections and `LockService` locks don't persist across the suspension. For more information, see the [guide to dialogs and sidebars](../../guides/dialogs.md).

```
// Display a dialog box with a title, message, and "Yes" and "No" buttons. The
// user can also close the dialog by clicking the close button in its title bar.
const ui = SpreadsheetApp.getUi();
const response = ui.alert(
    'Confirm',
    'Are you sure you want to continue?',
    ui.ButtonSet.YES_NO,
);

// Process the user's response.
if (response === ui.Button.YES) {
  Logger.log('The user clicked "Yes."');
} else {
  Logger.log(
      'The user clicked "No" or the close button in the dialog\'s title bar.',
  );
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title to display above the dialog box. |
| `prompt` | `String` | The message to display in the dialog box. |
| `buttons` | `ButtonSet` | The button set to display in the dialog box. |

#### Return

`Button` — The button the user clicked.

---

### createAddonMenu()

Creates a builder that can be used to insert a sub-menu into the editor's Extensions menu. The menu isn't actually be updated until `Menu.addToUi()` is called. If the script is running as an add-on, the sub-menu name matches the add-on's name in the web store; if the script is [bound](../../guides/bound.md) to the document directly, the sub-menu name matches the script's name. For more information, see the [guide to menus](../../guides/menus.md).

```
// Add an item to the add-on menu, under a sub-menu whose name is set
// automatically.
function onOpen(e) {
  SpreadsheetApp.getUi()
      .createAddonMenu()
      .addItem('Show', 'showSidebar')
      .addToUi();
}
```

#### Return

`Menu` — The new menu builder.

---

### createMenu(caption)

Creates a builder that can be used to add a menu to the editor's user interface. The menu isn't actually be added until `Menu.addToUi()` is called. For more information, see the [guide to menus](../../guides/menus.md). The label for a top-level menu should be in headline case (all major words capitalized), although the label for a sub-menu should be in sentence case (only the first word capitalized). If the script is published as an [add-on](../../../workspace/add-ons/overview.md), the `caption` parameter is ignored and the menu is added as a sub-menu of the Extensions menu, equivalent to `createAddonMenu()`.

```
// Add a custom menu to the active document, including a separator and a
// sub-menu.
function onOpen(e) {
  SpreadsheetApp.getUi()
      .createMenu('My Menu')
      .addItem('My menu item', 'myFunction')
      .addSeparator()
      .addSubMenu(
          SpreadsheetApp.getUi()
              .createMenu('My sub-menu')
              .addItem('One sub-menu item', 'mySecondFunction')
              .addItem('Another sub-menu item', 'myThirdFunction'),
          )
      .addToUi();
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `caption` | `String` | The label for the menu, with all major words capitalized for a top-level menu, or only the first word capitalized for a sub-menu. |

#### Return

`Menu` — The new menu builder.

---

### prompt(prompt)

Opens an input dialog box in the user's editor with the given message and an "OK" button. This method suspends the server-side script while the dialog is open. The script resumes after the user dismisses the dialog, but `Jdbc` connections and `LockService` locks don't persist across the suspension. For more information, see the [guide to dialogs and sidebars](../../guides/dialogs.md).

```
// Display a dialog box with a message, input field, and an "OK" button. The
// user can also close the dialog by clicking the close button in its title bar.
const ui = SpreadsheetApp.getUi();
const response = ui.prompt('Enter your name:');

// Process the user's response.
if (response.getSelectedButton() === ui.Button.OK) {
  Logger.log('The user\'s name is %s.', response.getResponseText());
} else {
  Logger.log('The user clicked the close button in the dialog\'s title bar.');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `prompt` | `String` | The message to display in the dialog box. |

#### Return

`PromptResponse` — A representation of the user's response.

---

### prompt(prompt, buttons)

Opens an input dialog box in the user's editor with the given message and set of buttons. This method suspends the server-side script while the dialog is open. The script resumes after the user dismisses the dialog, but `Jdbc` connections and `LockService` locks don't persist across the suspension. For more information, see the [guide to dialogs and sidebars](../../guides/dialogs.md).

```
// Display a dialog box with a message, input field, and "Yes" and "No" buttons.
// The user can also close the dialog by clicking the close button in its title
// bar.
const ui = SpreadsheetApp.getUi();
const response = ui.prompt('May I know your name?', ui.ButtonSet.YES_NO);

// Process the user's response.
if (response.getSelectedButton() === ui.Button.YES) {
  Logger.log('The user\'s name is %s.', response.getResponseText());
} else if (response.getSelectedButton() === ui.Button.NO) {
  Logger.log('The user didn\'t want to provide a name.');
} else {
  Logger.log('The user clicked the close button in the dialog\'s title bar.');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `prompt` | `String` | The message to display in the dialog box. |
| `buttons` | `ButtonSet` | The button set to display in the dialog box. |

#### Return

`PromptResponse` — A representation of the user's response.

---

### prompt(title, prompt, buttons)

Opens an input dialog box in the user's editor with the given title, message, and set of buttons. This method suspends the server-side script while the dialog is open. The script resumes after the user dismisses the dialog, but `Jdbc` connections and `LockService` locks don't persist across the suspension. For more information, see the [guide to dialogs and sidebars](../../guides/dialogs.md).

```
// Display a dialog box with a title, message, input field, and "Yes" and "No"
// buttons. The user can also close the dialog by clicking the close button in
// its title bar.
const ui = SpreadsheetApp.getUi();
const response = ui.prompt(
    'Getting to know you',
    'May I know your name?',
    ui.ButtonSet.YES_NO,
);

// Process the user's response.
if (response.getSelectedButton() === ui.Button.YES) {
  Logger.log('The user\'s name is %s.', response.getResponseText());
} else if (response.getSelectedButton() === ui.Button.NO) {
  Logger.log('The user didn\'t want to provide a name.');
} else {
  Logger.log('The user clicked the close button in the dialog\'s title bar.');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title to display above the dialog box. |
| `prompt` | `String` | The message to display in the dialog box. |
| `buttons` | `ButtonSet` | The button set to display in the dialog box. |

#### Return

`PromptResponse` — A representation of the user's response.

---

### showModalDialog(userInterface, title)

Opens a modal dialog box in the user's editor with custom client-side content. This method does *not* suspend the server-side script while the dialog is open. To communicate with the server-side script, the client-side component must make asynchronous callbacks using the [`google.script`](../../guides/html/communication.md) API for `HtmlService`. To close the dialog programmatically, call [`google.script.host.close()`](../../guides/html.md#serve_html_as_a_google_docs_sheets_or_forms_user_interface) on the client side of an `HtmlService` web app. For more information, see the [guide to dialogs and sidebars](../../guides/dialogs.md).

Modal dialogs prevent the user from interacting with anything other than the dialog. By contrast, [modeless dialogs](#showModelessDialog\(Object,String\)) and [sidebars](#showSidebar\(Object\)) let the user interact with the editor. In almost all cases, a modal dialog or sidebar is a better choice than a modeless dialog.

```
// Display a modal dialog box with custom HtmlService content.
const htmlOutput = HtmlService
                       .createHtmlOutput(
                           '<p>A change of speed, a change of style...</p>',
                           )
                       .setWidth(250)
                       .setHeight(300);
SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'My add-on');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `userInterface` | `Object` | An `HtmlOutput` representing the interface to display. |
| `title` | `String` | The title of the dialog; overrides any title set by calling `setTitle()` on the `userInterface` object. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.container.ui`

---

### showModelessDialog(userInterface, title)

Opens a modeless dialog box in the user's editor with custom client-side content. This method does *not* suspend the server-side script while the dialog is open. To communicate with the server-side script, the client-side component must make asynchronous callbacks using the [`google.script`](../../guides/html/communication.md) API for `HtmlService`. To close the dialog programmatically, call [`google.script.host.close()`](../../guides/html.md#serve_html_as_a_google_docs_sheets_or_forms_user_interface) on the client side of an `HtmlService` web app. For more information, see the [guide to dialogs and sidebars](../../guides/dialogs.md).

Modeless dialogs let the user interact with the editor behind the dialog. By contrast, [modal dialogs](#showModalDialog\(Object,String\)) do not. In almost all cases, a modal dialog or [sidebar](#showSidebar\(Object\)) is a better choice than a modeless dialog.

```
// Display a modeless dialog box with custom HtmlService content.
const htmlOutput = HtmlService
                       .createHtmlOutput(
                           '<p>A change of speed, a change of style...</p>',
                           )
                       .setWidth(250)
                       .setHeight(300);
SpreadsheetApp.getUi().showModelessDialog(htmlOutput, 'My add-on');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `userInterface` | `Object` | An `HtmlOutput` representing the interface to display. |
| `title` | `String` | The title of the dialog; overrides any title set by calling `setTitle()` on the `userInterface` object. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.container.ui`

---

### showSidebar(userInterface)

Opens a sidebar in the user's editor with custom client-side content. This method does *not* suspend the server-side script while the sidebar is open. To communicate with the server-side script, the client-side component must make asynchronous callbacks using the [`google.script`](../../guides/html/communication.md) API for `HtmlService`. To close the sidebar programmatically, call [`google.script.host.close()`](../../guides/html.md#serve_html_as_a_google_docs_sheets_or_forms_user_interface) on the client side of an `HtmlService` web app. For more information, see the [guide to dialogs and sidebars](../../guides/dialogs.md).

The sidebar displays on the right side of the editor for users whose environments use a left-to-right language and on the left side of the editor for right-to-left languages. All sidebars shown by scripts are 300 pixels wide.

```
// Display a sidebar with custom HtmlService content.
const htmlOutput = HtmlService
                       .createHtmlOutput(
                           '<p>A change of speed, a change of style...</p>',
                           )
                       .setTitle('My add-on');
SpreadsheetApp.getUi().showSidebar(htmlOutput);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `userInterface` | `Object` | An `HtmlOutput` representing the interface to display. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.container.ui`

## Deprecated methods

### showDialog(userInterface)

**Deprecated.** As of March 2014, this method is deprecated. The direct replacement is `showModelessDialog(userInterface, title)`, but `showModalDialog(userInterface, title)` is a better choice in almost all cases.

Opens a dialog box in the user's editor with custom client-side content. This method does *not* suspend the server-side script while the dialog is open. To communicate with the server-side script, the client-side component must make asynchronous callbacks using the [`google.script`](../../guides/html/communication.md) API for `HtmlService`. To close the dialog programmatically, call [`google.script.host.close()`](../../guides/html.md#serve_html_as_a_google_docs_sheets_or_forms_user_interface) on the client side of an `HtmlService` web app. For more information, see the [guide to dialogs and sidebars](../../guides/dialogs.md).

```
// Display a dialog box with custom HtmlService content.
const htmlOutput = HtmlService
                       .createHtmlOutput(
                           '<p>A change of speed, a change of style...</p>',
                           )
                       .setTitle('My add-on')
                       .setWidth(250)
                       .setHeight(300);
SpreadsheetApp.getUi().showDialog(htmlOutput);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `userInterface` | `Object` | An `HtmlOutput` representing the interface to display. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.container.ui`
