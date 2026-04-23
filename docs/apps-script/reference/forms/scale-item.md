---
source: https://developers.google.com/apps-script/reference/forms/scale-item
root: apps-script
fetched_at: 2026-04-23T15:20:30.062Z
---

# Class ScaleItem

## Page Summary

- A ScaleItem is a question item in Google Forms that allows respondents to select one option from a numbered sequence of radio buttons.
- ScaleItems can be created and accessed from a Form object and are graded when used in a quiz.
- Key methods for ScaleItems include setting bounds, labels, title, help text, required status, and point values, as well as creating responses and duplicating the item.

A question item that allows the respondent to choose one option from a numbered sequence of radio buttons. Items can be accessed or created from a `Form`. When used in a quiz, these items are graded.

```
// Open a form by ID and add a new scale item.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const item = form.addScaleItem();
item.setTitle('Pick a number between 1 and 10').setBounds(1, 10);
```

## Detailed documentation

### createResponse(response)

Creates a new `ItemResponse` for this scale item. Throws an exception if the `response` argument is outside the bounds set for the item.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `response` | `Integer` | a value answer for this scale item |

#### Return

`ItemResponse` — the item response

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### duplicate()

Creates a copy of this item and appends it to the end of the form.

#### Return

`ScaleItem` — a duplicate of this `ScaleItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getHelpText()

Gets the item's help text (sometimes called description text for layout items like `ImageItems`, `PageBreakItems`, and `SectionHeaderItems`).

#### Return

`String` — the item's help text or description text

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getId()

Gets the item's unique identifier.

#### Return

`Integer` — the item's ID

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getIndex()

Gets the index of the item among all the items in the form.

#### Return

`Integer` — the index of the item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getLeftLabel()

Gets the label for the scale's lower bound, if any.

#### Return

`String` — the label for the scale's lower bound

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getLowerBound()

Gets the scale's lower bound.

#### Return

`Integer` — the scale's lower bound

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getPoints()

Returns the point value of a gradeable item.

#### Return

`Integer` — the number of points a question is worth.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getRightLabel()

Gets the label for the scale's upper bound, if any.

#### Return

`String` — the label for the scale's upper bound

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getTitle()

Gets the item's title (sometimes called header text, in the case of a `SectionHeaderItem`).

#### Return

`String` — the item's title or header text

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getType()

Gets the item's type, represented as an `ItemType`.

#### Return

`ItemType` — the item's type

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getUpperBound()

Gets the scale's upper bound.

#### Return

`Integer` — the scale's upper bound

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### isRequired()

Determines whether the respondent must answer the question.

#### Return

`Boolean` — whether the respondent must answer the question

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setBounds(lower, upper)

Sets the scale's lower and upper bounds. The lower bound must be `0` or `1`. The upper bound must be between `3` and `10`, inclusive. A new scale defaults to a lower bound of `1` and an upper bound of `5`.

Throws a scripting exception if the given values are outside the permitted limits. Decimals are truncated to the preceding integer.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `lower` | `Integer` | the new lower bound |
| `upper` | `Integer` | the new upper bound |

#### Return

`ScaleItem` — this `ScaleItem`, for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the lower or upper bound is invalid

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

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

`ScaleItem` — this `ScaleItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setLabels(lower, upper)

Sets labels for the scale's lower and upper bounds.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `lower` | `String` | the new label for the lower bound |
| `upper` | `String` | the new label for the upper bound |

#### Return

`ScaleItem` — this `ScaleItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

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

`ScaleItem` — this `ScaleItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

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

`ScaleItem` — the current item (for chaining)

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

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

`ScaleItem` — this `ScaleItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`
