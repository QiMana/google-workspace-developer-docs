---
source: https://developers.google.com/apps-script/reference/forms/section-header-item
root: apps-script
fetched_at: 2026-04-23T15:20:27.169Z
---

# Class SectionHeaderItem

## Page Summary

- `SectionHeaderItem` is a layout item in Google Forms that visually indicates the start of a section.
- You can access or create a `SectionHeaderItem` from a `Form` object.
- Methods available for `SectionHeaderItem` include getting and setting the title and help text, duplicating the item, and getting its ID, index, and type.
- Using `setHelpText()` and `setTitle()` methods allows you to modify the text displayed for the section header.
- Scripts using these methods require specific authorization scopes related to Google Forms.

A layout item that visually indicates the start of a section. Items can be accessed or created from a `Form`.

```
// Open a form by ID and add a new section header.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const item = form.addSectionHeaderItem();
item.setTitle('Title of new section');
```

## Detailed documentation

### duplicate()

Creates a copy of this item and appends it to the end of the form.

#### Return

`SectionHeaderItem` — a duplicate of this `SectionHeaderItem`, for chaining

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

`SectionHeaderItem` — this `SectionHeaderItem`, for chaining

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

`SectionHeaderItem` — this `SectionHeaderItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`
