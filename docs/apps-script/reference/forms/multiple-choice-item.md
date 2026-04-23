---
source: https://developers.google.com/apps-script/reference/forms/multiple-choice-item
root: apps-script
fetched_at: 2026-04-23T15:20:23.478Z
---

# Class MultipleChoiceItem

## Page Summary

- MultipleChoiceItem is a question type in Google Forms allowing single selection from a list or an "other" field, and is autograded when used in a quiz.
- You can create or access MultipleChoiceItem objects from a Form object in Apps Script.
- Key methods include creating choices with or without correctness and page navigation, creating item responses, duplicating the item, and setting properties like title, help text, required status, and the "other" option.
- Methods are available to get information about the item, such as its choices, feedback for correct/incorrect answers, help text, ID, index, points, title, and type.
- Setting choices can be done using an array of strings or an array of Choice objects.

A question item that allows the respondent to select one choice from a list of radio buttons or an optional "other" field. Items can be accessed or created from a `Form`. When used in a quiz, these items are autograded.

```
// Open a form by ID and add a new multiple choice item.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const item = form.addMultipleChoiceItem();
item.setTitle('Do you prefer cats or dogs?')
    .setChoices([item.createChoice('Cats'), item.createChoice('Dogs')])
    .showOtherOption(true);
```

## Detailed documentation

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

### createChoice(value, navigationItem)

Creates a new choice with a page-navigation option that jumps to a given page-break item. This is equivalent to `createChoice(value, navigationType)` with `navigationType` set to `FormApp.PageNavigationType.GO_TO_PAGE`. Choices that use page navigation cannot be combined in the same item with choices that do not use page navigation.

The page navigation occurs after the respondent completes a page that contains the option, and only if the respondent chose that option. If the respondent chose multiple options with page-navigation instructions on the same page, only the last navigation option has any effect. Page navigation also has no effect on the last page of a form.

Note that using page navigation on an item hardcodes the routing, meaning `showOtherOption(true)` shouldn't be used concurrently.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | the choice's value, which respondents see as a label when viewing the form |
| `navigationItem` | `PageBreakItem` | the item to navigate to |

#### Return

`Choice` — the new choice

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### createChoice(value, navigationType)

Creates a new choice with a page-navigation option. Choices that use page navigation cannot be combined in the same item with choices that do not use page navigation.

The page navigation occurs after the respondent completes a page that contains the option, and only if the respondent chose that option. If the respondent chose multiple options with page-navigation instructions on the same page, only the last navigation option has any effect. Page navigation also has no effect on the last page of a form.

Note that using page navigation on an item hardcodes the routing, meaning `showOtherOption(true)` shouldn't be used concurrently.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | the choice's value, which respondents see as a label when viewing the form |
| `navigationType` | `PageNavigationType` | the choice's navigation type |

#### Return

`Choice` — the new choice

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### createResponse(response)

Creates a new `ItemResponse` for this multiple-choice item. Throws an exception if the `response` argument does not match a valid choice for this item, unless `showOtherOption(enabled)` is set to `true`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `response` | `String` | a valid answer for this multiple-choice item |

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

`MultipleChoiceItem` — a duplicate of this `MultipleChoiceItem`, for chaining

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

`MultipleChoiceItem` — this `MultipleChoiceItem`, for chaining

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

`MultipleChoiceItem` — this `MultipleChoiceItem`, for chaining

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

`MultipleChoiceItem` — this `MultipleChoiceItem`, for chaining

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

`MultipleChoiceItem` — this `MultipleChoiceItem`, for chaining

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

`MultipleChoiceItem` — this `MultipleChoiceItem`, for chaining

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

`MultipleChoiceItem` — the current item (for chaining)

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

`MultipleChoiceItem` — this `MultipleChoiceItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`
