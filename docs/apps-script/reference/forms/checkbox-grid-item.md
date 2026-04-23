---
source: https://developers.google.com/apps-script/reference/forms/checkbox-grid-item
root: apps-script
fetched_at: 2026-04-23T15:20:12.431Z
---

# Class CheckboxGridItem

## Page Summary

- CheckboxGridItem is a form question item presented as a grid allowing multiple selections per row via checkboxes.
- You can access or create CheckboxGridItem instances from a Form object.
- Key methods include setting/getting columns and rows, managing validation, and duplicating the item.

A question item, presented as a grid of columns and rows, that allows the respondent to select multiple choices per row from a sequence of checkboxes. Items can be accessed or created from a `Form`.

```
// Open a form by ID and add a new checkbox grid item.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const item = form.addCheckboxGridItem();
item.setTitle('Where did you celebrate New Years?')
    .setRows(['New York', 'San Francisco', 'London'])
    .setColumns(['2014', '2015', '2016', '2017']);
```

## Detailed documentation

### clearValidation()

Removes any data validation for this grid item.

#### Return

`CheckboxGridItem` — this item, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### createResponse(responses)

Creates a new `ItemResponse` for this checkbox grid item. The argument `responses` must be a `String[][]` array of arrays containing as many values as the number of inputs in the checkbox grid. A `null` element for a non-required checkbox grid question indicates no response to that row. Throws an exception if any of the values does not match a valid choice.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `responses` | `String[][]` | an array of arrays of valid answers for this checkbox grid item |

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

`CheckboxGridItem` — a duplicate of this `CheckboxGridItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getColumns()

Gets the values for every column in the grid.

#### Return

`String[]` — an array of column values, which respondents see as labels when viewing the form

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

### getRows()

Gets the values for every row in the grid.

#### Return

`String[]` — an array of row values, which respondents see as labels when viewing the form

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

### setColumns(columns)

Sets the columns of the grid based on an array of values. Throws an exception if the given array is empty.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columns` | `String[]` | an array of column values, which respondents see as labels when viewing the form |

#### Return

`CheckboxGridItem` — this item, for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the given array is `null` or empty

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

`CheckboxGridItem` — this `CheckboxGridItem`, for chaining

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

`CheckboxGridItem` — the current item (for chaining)

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setRows(rows)

Sets the rows of the grid based on an array of values. Throws an exception if the given array is empty.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rows` | `String[]` | an array of row values, which respondents see as labels when viewing the form |

#### Return

`CheckboxGridItem` — this item, for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the given array is `null` or empty

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

`CheckboxGridItem` — this `CheckboxGridItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setValidation(validation)

Sets the data validation for this checkbox grid item. Passing in null or a validation without any require functions called will remove any prior validation.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `validation` | `CheckboxGridValidation` | a CheckboxGridValidation to apply to this item. |

#### Return

`CheckboxGridItem` — this `CheckboxGridItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`
