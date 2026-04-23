---
source: https://developers.google.com/apps-script/reference/forms/checkbox-item
root: apps-script
fetched_at: 2026-04-23T15:20:12.037Z
---

# Class CheckboxItem

## Page Summary

- CheckboxItem allows respondents to select one or more checkboxes with an optional "other" field.
- You can add a new checkbox item to a form using `form.addCheckboxItem()`.
- Methods are available to manage choices, feedback, help text, and validation for the checkbox item.
- You can set the title and options for the checkbox item using methods like `setTitle()` and `setChoices()`.
- Checkbox items can be set as required and configured to show an "other" option.

A question item that allows the respondent to select one or more checkboxes, as well as an optional "other" field. Items are created or accessed from a `Form` using methods such as `Form.addCheckboxItem()`. When used in a quiz, these items are autograded.

```
// Open a form by ID and add a new checkbox item.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const item = form.addCheckboxItem();
item.setTitle('What condiments would you like on your hot dog?')
    .setChoices([
      item.createChoice('Ketchup'),
      item.createChoice('Mustard'),
      item.createChoice('Relish'),
    ])
    .showOtherOption(true);
```

## Detailed documentation

### clearValidation()

Removes any data validation for this checkbox item.

#### Return

`CheckboxItem` — this `CheckboxItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### createChoice(value)

Creates a new choice.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | the choice's value, which respondents see as a label when viewing the form |

#### Return

`Choice` — the new choice

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### createChoice(value, isCorrect)

Creates a new choice.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | the choice's value, which respondents see as a label when viewing the form |
| `isCorrect` | `Boolean` | whether the choice is a correct answer |

#### Return

`Choice` — the new choice

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### createResponse(responses)

Creates a new `ItemResponse` for this checkbox item. The argument `responses` is a `String[]` array containing values that need to be checked. Throws an exception if any value does not match a valid choice for this item, unless `showOtherOption(enabled)` is set to `true`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `responses` | `String[]` | an array of valid answers for this multiple-choice item |

#### Return

`ItemResponse` — the item response

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### duplicate()

Creates a copy of this item and appends it to the end of the form.

#### Return

`CheckboxItem` — a duplicate of this `CheckboxItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getChoices()

Gets all choices for an item.

#### Return

`Choice[]` — an array of choices

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getHelpText()

Gets the item's help text (sometimes called description text for layout items like `ImageItems`, `PageBreakItems`, and `SectionHeaderItems`).

#### Return

`String` — the item's help text or description text

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getId()

Gets the item's unique identifier.

#### Return

`Integer` — the item's ID

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getIndex()

Gets the index of the item among all the items in the form.

#### Return

`Integer` — the index of the item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getPoints()

Returns the point value of a gradeable item.

#### Return

`Integer` — the number of points a question is worth.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getTitle()

Gets the item's title (sometimes called header text, in the case of a `SectionHeaderItem`).

#### Return

`String` — the item's title or header text

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getType()

Gets the item's type, represented as an `ItemType`.

#### Return

`ItemType` — the item's type

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### isRequired()

Determines whether the respondent must answer the question.

#### Return

`Boolean` — whether the respondent must answer the question

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setChoiceValues(values)

Sets the choices for an item from an array of strings. Throws an exception if the given array is empty.

```
// Open a form by ID and add a new list item.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const item = form.addListItem();
item.setTitle('Do you prefer cats or dogs?');
item.setChoiceValues(['Dogs', 'Cats']);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `values` | `String[]` | the array of choice values, which respondents see as labels when viewing the form |

#### Return

`CheckboxItem` — this `CheckboxItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setChoices(choices)

Sets an array of choices for an item. Throws an exception if the given array is empty or contains a `null` element.

```
// Open a form by ID and add a new list item.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const item = form.addListItem();
item.setTitle('Do you prefer cats or dogs?');
item.setChoices([item.createChoice('Cats'), item.createChoice('Dogs')]);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `choices` | `Choice[]` | an array of choices |

#### Return

`CheckboxItem` — this `CheckboxItem`, for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the given array is `null`, empty, or contains a `null` element

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setFeedbackForCorrect(feedback)

Sets the feedback to be shown to respondents when they respond correctly to a question.

```
// Open a form by ID and add a new list item.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const item = form.addListItem();
item.setTitle('Do you prefer cats or dogs?');
// Set "Dogs" as the correct answer to this question.
item.setChoices([
  item.createChoice('Dogs', true),
  item.createChoice('Cats', false),
]);
// Add feedback which will be shown for correct responses; ie "Dogs".
item.setFeedbackForCorrect(
    FormApp.createFeedback().setText('Dogs rule, cats drool.').build(),
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `feedback` | `QuizFeedback` | the new feedback. A null value will clear the feedback. |

#### Return

`CheckboxItem` — this `CheckboxItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setHelpText(text)

Sets the item's help text (sometimes called description text for layout items like `ImageItems`, `PageBreakItems`, and `SectionHeaderItems`).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | the new help text |

#### Return

`CheckboxItem` — this `CheckboxItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setPoints(points)

Sets the number of points a gradeable item is worth. The default for new items is 0.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `points` | `Integer` | the number of a points a question item is worth |

#### Return

`CheckboxItem` — this `CheckboxItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setRequired(enabled)

Sets whether the respondent must answer the question.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `enabled` | `Boolean` | whether the respondent must answer the question |

#### Return

`CheckboxItem` — the current item (for chaining)

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setTitle(title)

Sets the item's title (sometimes called header text, in the case of a `SectionHeaderItem`).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | the new title or header text |

#### Return

`CheckboxItem` — this `CheckboxItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setValidation(validation)

Sets the data validation for this checkbox item. Passing in null or a validation without any require functions called will remove any prior validation.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `validation` | `CheckboxValidation` | a CheckboxValidation to apply to this item. |

#### Return

`CheckboxItem` — this `CheckboxItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`
