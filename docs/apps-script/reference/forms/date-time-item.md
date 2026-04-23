---
source: https://developers.google.com/apps-script/reference/forms/date-time-item
root: apps-script
fetched_at: 2026-04-23T15:20:14.758Z
---

# Class DateTimeItem

## Page Summary

- DateTimeItem is a question item in Google Forms that allows respondents to indicate a date and time and can be graded when used in a quiz.
- You can create or access DateTimeItem instances from a Form object.
- Methods are available to manage DateTimeItem properties such as title, help text, required status, and point value.
- The DateTimeItem also provides methods to create item responses, duplicate the item, and manage quiz-specific feedback.
- Authorization with appropriate Google Forms scopes is required to use these methods.

A question item that allows the respondent to indicate a date and time. Items can be accessed or created from a `Form`. When used in a quiz, these items are graded.

```
// Open a form by ID and add a new date-time item.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const item = form.addDateTimeItem();
item.setTitle('When do you want to meet?');
```

## Detailed documentation

### createResponse(response)

Creates a new `ItemResponse` for this date-time item. The seconds field of the `Date` object is ignored; by default, the year, month, day, hour, and minute fields are used. If `setIncludesYear(enabled)` is set to `false`, the year is ignored as well.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `response` | `Date` | a `Date` object that represents a month, day, hour, minute, and possibly year |

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

`DateTimeItem` — a duplicate of this `DateTimeItem`, for chaining

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

### includesYear()

Determines whether the date item includes a year option.

#### Return

`Boolean` — `true` if the date includes a year setting; `false` if not

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

### setHelpText(text)

Sets the item's help text (sometimes called description text for layout items like `ImageItems`, `PageBreakItems`, and `SectionHeaderItems`).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | the new help text |

#### Return

`DateTimeItem` — this `DateTimeItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setIncludesYear(enableYear)

Sets whether the date item includes a year setting. The default for new date items is `true`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `enableYear` | `Boolean` | `true` if the date includes a year setting; `false` if not |

#### Return

`DateTimeItem` — this `DateTimeItem`, for chaining

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

`DateTimeItem` — this `DateTimeItem`, for chaining

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

`DateTimeItem` — the current item (for chaining)

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

`DateTimeItem` — this `DateTimeItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`
