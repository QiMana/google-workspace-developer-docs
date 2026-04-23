---
source: https://developers.google.com/apps-script/reference/forms/item
root: apps-script
fetched_at: 2026-04-23T15:20:22.135Z
---

# Interface Item

## Page Summary

- Item is a generic form item with common properties like title and help text, accessible or created from a Form.
- To work with type-specific properties, check the item's type using `getType()` and cast it to the appropriate class using methods like `asCheckboxItem()`.
- The documentation provides a list of methods to cast a generic Item to various specific item types, such as `asCheckboxGridItem()`, `asDateItem()`, and `asTextItem()`.
- Methods like `duplicate()`, `getHelpText()`, `getId()`, `getIndex()`, `getTitle()`, `getType()`, `setHelpText()`, and `setTitle()` are available for operating on the Item object.
- Scripts using these methods often require specific authorization scopes related to Google Forms.

A generic form item that contains properties common to all items, such as title and help text. Items can be accessed or created from a `Form`.

To operate on type-specific properties, use `getType()` to check the item's `ItemType`, then cast the item to the appropriate class using a method like `asCheckboxItem()`.

```
// Create a new form and add a text item.
const form = FormApp.create('Form Name');
form.addTextItem();

// Access the text item as a generic item.
const items = form.getItems();
const item = items[0];

// Cast the generic item to the text-item class.
if (item.getType() === 'TEXT') {
  const textItem = item.asTextItem();
  textItem.setRequired(false);
}
```

### Implementing classes

## Detailed documentation

### asCheckboxGridItem()

Returns the item as a checkbox grid item. Throws a scripting exception if the `ItemType` was not already `CHECKBOX_GRID`.

#### Return

`CheckboxGridItem` — the checkbox grid item

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not a checkbox grid item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### asCheckboxItem()

Returns the item as a checkbox item. Throws a scripting exception if the `ItemType` was not already `CHECKBOX`.

#### Return

`CheckboxItem` — the checkbox item

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not a checkbox item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### asDateItem()

Returns the item as a date item. Throws a scripting exception if the `ItemType` was not already `DATE`.

#### Return

`DateItem` — the date item

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not a date item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### asDateTimeItem()

Returns the item as a date-time item. Throws a scripting exception if the `ItemType` was not already `DATETIME`.

#### Return

`DateTimeItem` — the date-time item

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not a date-time item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### asDurationItem()

Returns the item as a duration item. Throws a scripting exception if the `ItemType` was not already `DURATION`.

#### Return

`DurationItem` — the duration item

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not a duration item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### asGridItem()

Returns the item as a grid item. Throws a scripting exception if the `ItemType` was not already `GRID`.

#### Return

`GridItem` — the grid item

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not a grid item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### asImageItem()

Returns the item as an image item. Throws a scripting exception if the `ItemType` was not already `IMAGE`.

#### Return

`ImageItem` — the image item

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not an image item

---

### asListItem()

Returns the item as a list item. Throws a scripting exception if the `ItemType` was not already `LIST`.

#### Return

`ListItem` — the list item

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not a list item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### asMultipleChoiceItem()

Returns the item as a multiple-choice item. Throws a scripting exception if the `ItemType` was not already `MULTIPLE_CHOICE`.

#### Return

`MultipleChoiceItem` — the multiple-choice item

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not a multiple choice item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### asPageBreakItem()

Returns the item as a page-break item. Throws a scripting exception if the `ItemType` was not already `PAGE_BREAK`.

#### Return

`PageBreakItem` — the page-break item

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not a page break item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### asParagraphTextItem()

Returns the item as a paragraph-text item. Throws a scripting exception if the `ItemType` was not already `PARAGRAPH_TEXT`.

#### Return

`ParagraphTextItem` — the paragraph-text item

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not a paragraph text item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### asRatingItem()

Returns the item as a rating item. Throws a ScriptingException if the `ItemType` was not already `RATING`.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Fetch any item which is of type rating.
const item = form.getItems(FormApp.ItemType.RATING)[0];

// Convert the item to a rating item.
const ratingItem = item.asRatingItem();
```

#### Return

`RatingItem` — The rating item.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not a rating item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### asScaleItem()

Returns the item as a scale item. Throws a scripting exception if the `ItemType` was not already `SCALE`.

#### Return

`ScaleItem` — the scale item

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not a scale item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### asTextItem()

Returns the item as a text item. Throws a scripting exception if the `ItemType` was not already `TEXT`.

#### Return

`TextItem` — the text item

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not a text item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### asTimeItem()

Returns the item as a time item. Throws a scripting exception if the `ItemType` was not already `TIME`.

#### Return

`TimeItem` — the time item

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not a time item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### asVideoItem()

Returns the item as a video item. Throws a scripting exception if the `ItemType` was not already `VIDEO`.

#### Return

`VideoItem` — the video item

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the item is not a video item

---

### duplicate()

Creates a copy of this item and appends it to the end of the form.

#### Return

`Item` — a duplicate of this `Item`, for chaining

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

### setHelpText(text)

Sets the item's help text (sometimes called description text for layout items like `ImageItems`, `PageBreakItems`, and `SectionHeaderItems`).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | the new help text |

#### Return

`Item` — this `Item`, for chaining

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

`Item` — this `Item`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`
