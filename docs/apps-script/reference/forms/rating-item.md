---
source: https://developers.google.com/apps-script/reference/forms/rating-item
root: apps-script
fetched_at: 2026-04-23T15:20:26.034Z
---

# Class RatingItem

## Page Summary

- A RatingItem is a question type in Google Forms that allows respondents to provide a rating, and can be graded when used in a quiz.
- You can access or create RatingItems from a Form object using Google Apps Script.
- RatingItems have methods to get and set properties like the rating scale level, rating icon, title, and whether the question is required.
- Methods are available to duplicate a RatingItem or create a response for it.
- Authorization scopes like `https://www.googleapis.com/auth/forms` are required to use these methods.

A question item that allows the respondent to give a rating. Items can be accessed or created from a `Form`. When used in a quiz, these items are graded.

```
// Open a form by ID
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');

// Get an existing rating item and access its properties.
const existingRatingItem = form.getItems(FormApp.ItemType.RATING)[0].asRatingItem();
const ratingScaleLevel = existingRatingItem.getRatingScaleLevel();
const ratingIcon = existingRatingItem.getRatingIcon();

// Create a new rating item.
const ratingItem = form.addRatingItem();

// Update the rating item's properties via chaining.
ratingItem.setRatingScaleLevel(7).setRatingIcon(FormApp.RatingIconType.HEART);
```

## Detailed documentation

### createResponse(response)

Creates a new `ItemResponse` for this rating item.

Throws a scripting exception if the provided `response` is less than `1` or greater than the value returned by `getRatingScaleLevel()`.

```
// Open a form by ID
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');

// Get an existing rating item and create a response for it.
const item = form.getItems(FormApp.ItemType.RATING)[0].asRatingItem();
const response =item.createResponse(5);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `response` | `Integer` | A value answer for this rating item. |

#### Return

`ItemResponse` — The item response.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### duplicate()

Creates a copy of this item and appends it to the end of the form.

#### Return

`RatingItem` — a duplicate of this `RatingItem`, for chaining

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

### getRatingIcon()

Gets the icon chosen for the rating.

```
// Open a form by ID
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');

// Get an existing rating item and get its rating icon.
const item = form.getItems(FormApp.ItemType.RATING)[0].asRatingItem();
const ratingIcon = item.getRatingIcon();
```

#### Return

`RatingIconType` — The rating icon type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getRatingScaleLevel()

Gets the rating's scale level.

```
// Open a form by ID
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');

// Get an existing rating item and get its rating scale level.
const item = form.getItems(FormApp.ItemType.RATING)[0].asRatingItem();
const ratingScaleLevel = item.getRatingScaleLevel();
```

#### Return

`Integer` — The rating scale level.

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

### setHelpText(text)

Sets the item's help text (sometimes called description text for layout items like `ImageItems`, `PageBreakItems`, and `SectionHeaderItems`).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | the new help text |

#### Return

`RatingItem` — this `RatingItem`, for chaining

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

`RatingItem` — this `RatingItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setRatingIcon(ratingIcon)

Sets the rating's icon.

Throws a scripting exception if the rating icon type is invalid.

```
// Open a form by ID
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');

// Get an existing rating item and set its rating icon.
const item = form.getItems(FormApp.ItemType.RATING)[0].asRatingItem();
item.setRatingIcon(FormApp.RatingIconType.THUMB_UP);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `ratingIcon` | `RatingIconType` | The rating icon type. |

#### Return

`RatingItem` — This `RatingItem`, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the rating icon type is invalid

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setRatingScaleLevel(ratingScaleLevel)

Sets the rating's maximum scale level. The rating's maximum scale level must be between `3` and `10`, inclusive. A new rating defaults to a rating scale level of `3`.

Throws a scripting exception if the given values are outside the permitted limits.

```
// Open a form by ID
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');

// Get an existing rating item and set its rating scale level.
const item = form.getItems(FormApp.ItemType.RATING)[0].asRatingItem();
item.setRatingScaleLevel(7);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `ratingScaleLevel` | `Integer` | The rating scale level. |

#### Return

`RatingItem` — This `RatingItem`, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the rating scale level is invalid

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

`RatingItem` — the current item (for chaining)

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

`RatingItem` — this `RatingItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`
