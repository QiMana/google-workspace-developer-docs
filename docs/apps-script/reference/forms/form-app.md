---
source: https://developers.google.com/apps-script/reference/forms/form-app
root: apps-script
fetched_at: 2026-04-23T15:20:13.266Z
---

# Class FormApp

## Page Summary

- The `FormApp` service allows scripts to open existing forms or create new ones.
- You can open a form using its ID or URL.
- You can create a new form by providing a title, and optionally specify if it should be published.
- The `FormApp` provides methods to create various validation builders for form items like checkboxes, grid items, and text items.
- You can access the UI of the form editor using `getUi()` to add custom menus, dialogs, and sidebars.

Allows a script to open an existing or create a new one.

```
// Open a form by ID.
const existingForm = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');

// Create and open a form.
const newForm = FormApp.create('Form Name');
```

## Detailed documentation

### create(title)

Creates and returns a new . Throws an exception if the given title is `null` or empty.

```
// Create and open a form.
const form = FormApp.create('Form Name');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The name of the new form. |

#### Return

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the given title is `null` or empty

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms`

---

### create(title, isPublished)

Creates and returns a new in the requested publish state. Throws an exception if the given title is `null` or empty.

```
// Create, publish and open a form.
const form = FormApp.create('Form Name', true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The name of the new form. |
| `isPublished` | `Boolean` | Whether the form should be published. |

#### Return

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the given title is `null` or empty

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms`

---

### createCheckboxGridValidation()

Returns an instance of a CheckboxGridValidationBuilder which can be used to set validation on a `CheckboxGridItem`.

#### Return

`CheckboxGridValidationBuilder`

---

### createCheckboxValidation()

Returns an instance of a CheckboxValidationBuilder which can be used to set validation on a `CheckboxItem`.

#### Return

`CheckboxValidationBuilder`

---

### createGridValidation()

Returns an instance of a GridValidationBuilder which can be used to set validation on a `GridItem`.

#### Return

`GridValidationBuilder`

---

### createParagraphTextValidation()

Returns an instance of a ParagraphTextValidationBuilder which can be used to set validation on a `ParagraphTextItem`.

#### Return

`ParagraphTextValidationBuilder`

---

### createTextValidation()

Returns an instance of a TextValidationBuilder which can be used to set validation on a `TextItem`.

#### Return

`TextValidationBuilder`

---

### getActiveForm()

Returns the form to which the script is [container-bound](../../guides/bound.md). To interact with forms to which the script is not container-bound, use `openById(id)` or `openByUrl(url)` instead.

```
// Get the form to which this script is bound.
const form = FormApp.getActiveForm();
```

#### Return

— the form to which the script is bound, or `null` if the script is not bound to a form

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getUi()

Returns an instance of the form editor's user-interface environment that allows the script to add features like menus, dialogs, and sidebars. A script can only interact with the UI for the current instance of an open form editor (not the view that a respondent sees), and only if the script is [bound](../../guides/bound.md) to the form. For more information, see the guides to [menus](../../guides/menus.md) and [dialogs and sidebars](../../guides/dialogs.md).

```
// Add a custom menu to the active form, including a separator and a sub-menu.
function onOpen(e) {
  FormApp.getUi()
      .createMenu('My Menu')
      .addItem('My menu item', 'myFunction')
      .addSeparator()
      .addSubMenu(
          FormApp.getUi()
              .createMenu('My sub-menu')
              .addItem('One sub-menu item', 'mySecondFunction')
              .addItem('Another sub-menu item', 'myThirdFunction'),
          )
      .addToUi();
}
```

#### Return

`Ui` — an instance of this form's user-interface environment

---

### openById(id)

Returns the with the specified ID. Throws an exception if the ID is invalid or the user does not have permission to open the form.

```
// Open a form by ID.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | the ID of the form to open |

#### Return

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the given ID is invalid or the user does not have sufficient permissions

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms`

---

### openByUrl(url)

Returns the with the specified URL. Throws an exception if the URL is invalid or the user does not have permission to open the form.

```
// Open a form by URL.
const form = FormApp.openByUrl(
    'https://docs.google.com/forms/d/1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3/edit',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | the URL of the form to open |

#### Return

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the given URL is invalid or the user does not have sufficient permissions

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms`
