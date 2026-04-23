---
source: https://developers.google.com/apps-script/reference/forms/time-item
root: apps-script
fetched_at: 2026-04-23T15:20:26.670Z
---

# Class TimeItem

## Page Summary

- TimeItem allows respondents to indicate a time of day in a form.
- TimeItem can be accessed or created from a Form and is graded when used in a quiz.
- Various methods are available for TimeItem, including creating responses, duplicating the item, and getting or setting properties like feedback, help text, ID, index, points, title, required status, and type.
- Methods like `createResponse`, `duplicate`, `getGeneralFeedback`, `getHelpText`, `getId`, `getIndex`, `getPoints`, `getTitle`, `getType`, `isRequired`, `setGeneralFeedback`, `setHelpText`, `setPoints`, `setRequired`, and `setTitle` provide functionality for interacting with a TimeItem programmatically.

A question item that allows the respondent to indicate a time of day. Items can be accessed or created from a `Form`. When used in a quiz, these items are graded.

```
// Open a form by ID and add a new time item.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const item = form.addTimeItem();
item.setTitle('What time do you usually wake up in the morning?');
```

## Detailed documentation

### createResponse(hour, minute)

Creates a new `ItemResponse` for this time item. The arguments `hour` and `minute` are best represented as integers from `0` to `23` and from `0` to `59`, respectively. If they exceed those bounds, they behave as a clock would: for example, `10, 90` is interpreted as 11:30, and `-1, 60` is interpreted as 00:00.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hour` | `Integer` | the hour, represented as an integer from `0` to `23` |
| `minute` | `Integer` | the minute of the hour, represented as an integer from `0` to `59` |

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

`TimeItem` — a duplicate of this `TimeItem`, for chaining

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

### getPoints()

Returns the point value of a gradeable item.

#### Return

`Integer` — the number of points a question is worth.

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

### isRequired()

Determines whether the respondent must answer the question.

#### Return

`Boolean` — whether the respondent must answer the question

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

`TimeItem` — this `TimeItem`, for chaining

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

`TimeItem` — this `TimeItem`, for chaining

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

`TimeItem` — the current item (for chaining)

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

`TimeItem` — this `TimeItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`
